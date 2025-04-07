import React, { useState } from 'react';
import DiseaseSelector from '../components/DiseaseSelector';
import Pairings from '../components/Pairings';
// Sample disease-specific health benefits data (you can use the full JSON data)
const diseaseData = [
    {
        "name": "Diabetes Management",
        "vegetarian_pairings": [
            { "foods": ["Cinnamon", "Oatmeal"], "benefit": "Regulates blood sugar and improves insulin sensitivity" },
            { "foods": ["Turmeric", "Black Pepper"], "benefit": "Enhances curcumin absorption to reduce inflammation" },
            { "foods": ["Almonds", "Dark Chocolate (70%+ Cocoa)"], "benefit": "Stabilizes blood sugar spikes" },
            { "foods": ["Fenugreek Seeds", "Yogurt"], "benefit": "Slows glucose absorption and improves gut health" },
            { "foods": ["Apple Cider Vinegar", "Legumes"], "benefit": "Reduces post-meal blood sugar spikes" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Fatty Fish (Salmon)", "Lemon"], "benefit": "Omega-3 absorption improves insulin sensitivity" },
            { "foods": ["Chicken", "Spinach"], "benefit": "Iron-rich meal without raising blood sugar" },
            { "foods": ["Eggs", "Avocado"], "benefit": "Healthy fats stabilize blood sugar" },
            { "foods": ["Turkey", "Sweet Potatoes"], "benefit": "Provides fiber and lean protein for better glucose control" },
            { "foods": ["Shrimp", "Brown Rice"], "benefit": "Balances carbs with protein to slow sugar absorption" }
        ],
        "vegan_pairings": [
            { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3 and fiber for blood sugar control" },
            { "foods": ["Quinoa", "Black Beans"], "benefit": "Complete plant protein that stabilizes glucose levels" },
            { "foods": ["Berries", "Walnuts"], "benefit": "Antioxidants + good fats to reduce sugar spikes" },
            { "foods": ["Pumpkin Seeds", "Cacao Nibs"], "benefit": "Magnesium-rich foods for insulin regulation" },
            { "foods": ["Tofu", "Broccoli"], "benefit": "High-fiber, protein-rich combination for stable glucose levels" }
        ]
    },
    {
        "name": "Heart Disease & Hypertension",
        "vegetarian_pairings": [
            { "foods": ["Walnuts", "Berries"], "benefit": "Antioxidants and omega-3s to protect the heart" },
            { "foods": ["Flaxseeds", "Bananas"], "benefit": "Potassium and fiber to regulate blood pressure" },
            { "foods": ["Garlic", "Olive Oil"], "benefit": "Reduces bad cholesterol (LDL)" },
            { "foods": ["Dark Chocolate", "Green Tea"], "benefit": "Improves circulation and lowers blood pressure" },
            { "foods": ["Tomatoes", "Olive Oil"], "benefit": "Enhances lycopene absorption for heart health" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Avocado"], "benefit": "Omega-3 and healthy fats lower inflammation" },
            { "foods": ["Chicken", "Tomatoes"], "benefit": "Lean protein with lycopene for better heart function" },
            { "foods": ["Eggs", "Spinach"], "benefit": "Lutein and B vitamins improve circulation" },
            { "foods": ["Grilled Tuna", "Quinoa"], "benefit": "High protein, heart-healthy combination" },
            { "foods": ["Bone Broth", "Mushrooms"], "benefit": "Collagen and beta-glucans for cardiovascular strength" }
        ],
        "vegan_pairings": [
            { "foods": ["Beets", "Orange Juice"], "benefit": "Nitric oxide boosts circulation" },
            { "foods": ["Chia Seeds", "Almond Butter"], "benefit": "Fiber and omega-3s lower cholesterol" },
            { "foods": ["Green Tea", "Lemon"], "benefit": "Catechins + vitamin C for artery protection" },
            { "foods": ["Hemp Seeds", "Cacao Powder"], "benefit": "Magnesium and polyphenols reduce hypertension" },
            { "foods": ["Lentils", "Turmeric"], "benefit": "Anti-inflammatory proteins for heart support" }
        ]
    },
    {
        "name": "Iron Deficiency Anemia",
        "vegetarian_pairings": [
            { "foods": ["Spinach", "Lemon Juice"], "benefit": "Vitamin C boosts non-heme iron absorption" },
            { "foods": ["Lentils", "Bell Peppers"], "benefit": "Combines iron-rich legumes with vitamin C" },
            { "foods": ["Pumpkin Seeds", "Strawberries"], "benefit": "Iron + vitamin C for better uptake" },
            { "foods": ["Oats", "Blackstrap Molasses"], "benefit": "Iron-fortified breakfast for energy" },
            { "foods": ["Raisins", "Almonds"], "benefit": "Iron and protein-rich snack" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Red Meat", "Green Leafy Vegetables"], "benefit": "Heme + non-heme iron absorption" },
            { "foods": ["Eggs", "Citrus Fruits"], "benefit": "Vitamin C enhances iron from eggs" },
            { "foods": ["Chicken Liver", "Carrots"], "benefit": "Iron and vitamin A for blood cell production" },
            { "foods": ["Sardines", "Tomatoes"], "benefit": "Omega-3 and iron synergy" },
            { "foods": ["Turkey", "Cranberries"], "benefit": "Iron and antioxidants for better circulation" }
        ],
        "vegan_pairings": [
            { "foods": ["Tofu", "Broccoli"], "benefit": "Iron and calcium combination" },
            { "foods": ["Quinoa", "Lentils"], "benefit": "High-protein, iron-rich pairing" },
            { "foods": ["Cashews", "Dried Apricots"], "benefit": "Non-heme iron sources with natural sugars" },
            { "foods": ["Kale", "Orange Slices"], "benefit": "Vitamin C and iron for better absorption" },
            { "foods": ["Chia Seeds", "Fortified Plant Milk"], "benefit": "Omega-3 and iron combo" }
        ]
    },
    {
        "name": "Bone Health & Osteoporosis Prevention",
        "vegetarian_pairings": [
            { "foods": ["Dairy (Yogurt)", "Sunlight"], "benefit": "Calcium and vitamin D" },
            { "foods": ["Almonds", "Sesame Seeds"], "benefit": "Magnesium and calcium for bone density" },
            { "foods": ["Spinach", "Cottage Cheese"], "benefit": "Calcium and protein for bone strength" },
            { "foods": ["Carrots", "Cashews"], "benefit": "Beta-carotene and magnesium for bone repair" },
            { "foods": ["Sweet Potatoes", "Pumpkin Seeds"], "benefit": "Magnesium and calcium-rich foods" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Sardines", "Kale"], "benefit": "Calcium and vitamin D-rich meal" },
            { "foods": ["Chicken Bone Broth", "Mushrooms"], "benefit": "Collagen and vitamin D for bones" },
            { "foods": ["Oysters", "Lemon Juice"], "benefit": "Zinc and vitamin C for bone repair" },
            { "foods": ["Eggs", "Cheese"], "benefit": "Choline and calcium for bone health" },
            { "foods": ["Fish", "Almonds"], "benefit": "Omega-3 and vitamin E for bone protection" }
        ],
        "vegan_pairings": [
            { "foods": ["Fortified Plant Milk", "Chia Seeds"], "benefit": "Calcium and omega-3s" },
            { "foods": ["Tofu", "Bok Choy"], "benefit": "Calcium-rich combo" },
            { "foods": ["Nuts", "Dried Figs"], "benefit": "Magnesium and calcium-rich snack" },
            { "foods": ["Broccoli", "Almond Butter"], "benefit": "Bone-boosting nutrients" },
            { "foods": ["Hemp Seeds", "Oranges"], "benefit": "Magnesium and vitamin C combo" }
        ]
    },
    {
        "name": "irritable bowel syndrome  (IBS)",
        "vegetarian_pairings": [
            { "foods": ["Oatemal", "Banana"], "benefit": "Gentle on the gut and provides soluble fiber" },
            { "foods": ["Flaxseeds", "Yogurt"], "benefit": "Omega-3s and probiotics for gut health" },
            { "foods": ["Almond butter", "Rice cake"], "benefit": "Easy-to-digest energy boost" },
            { "foods": ["Carrots", "Hummus"], "benefit": "Fiber and prebiotics for digestion" },
            { "foods": ["peppermint tea", "Ginger"], "benefit": "Soothes bloating and digestive discomfort" }
        ],

        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Quinoa"], "benefit": "Omega-3s and complete protein for reducing inflammation" },
            { "foods": ["Chicken", "Brown rice"], "benefit": "Lean protein and easily digestible carbs" }
        ],
        "vegan_pairings": [
            { "foods": ["Chia Seeds", "Almond milk"], "benefit": "Omega-3s and soluble fiber for digestion" },
            { "foods": ["Tofu", "Miso soup"], "benefit": "Plant-based protein and probiotics for gut balance" },
            { "foods": ["Quinoa", "Steamed carrots"], "benefit": "Easy-to-digest, fiber-rich meal" },
            { "foods": ["Lentils", "zucchini"], "benefit": "Easy-to-digest, fiber-rich meal" },
            { "foods": ["Cocoa", "Walnut"], "benefit": "Magnesium and healthy fats for digestive support" }
        ]
    },
    {
        "name": "Leaky gut",
        "vegetarian_pairings": [
            { "foods": ["Mushroom broth", "Turmeric"], "benefit": "Repairs gut lining with collagen and anti-inflammatory benefits" },
            { "foods": ["Flaxseeds", "Yogurt"], "benefit": "Provides omega-3s and probiotics for gut flora balance" },
            { "foods": ["Blueberries", "Chia seeds"], "benefit": "Antioxidants and fiber to support digestion" },
            { "foods": ["Avacado", "Sauerkraut"], "benefit": "Healthy fats and probiotics to strengthen gut lining" },
            { "foods": ["Pumpkin seeds", "Spinach"], "benefit": "Zinc and magnesium for tissue repair and inflammation control" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Olive oil"], "benefit": "Zinc and magnesium for tissue repair and inflammation control" },
            { "foods": ["Chicken", "Bone broth"], "benefit": "Amino acids like glutamine to repair the gut lining" },
            { "foods": ["Eggs", "Ghee"], "benefit": "Healthy fats and fat-soluble vitamins for intestinal health" },
            { "foods": ["Beef", "Fermented vegetables"], "benefit": "Zinc, B vitamins, and probiotics for gut repair" },
            { "foods": ["Tukey", "Sweet potatoes"], "benefit": "Lean protein and resistant starch for gut-friendly digestion" }
        ],
        "vegan_pairings": [
            { "foods": ["Chia seeds", "Almond milk"], "benefit": "Omega-3s and prebiotics for gut lining repair" },
            { "foods": ["Yogurt", "Ginger"], "benefit": "Omega-3s and prebiotics for gut lining repair" },
            { "foods": ["Miso", "Sea-weed"], "benefit": "Fermented foods for gut bacteria balance" },
            { "foods": ["Lentils", "Cooked carrot"], "benefit": "Easily digestible fiber to support gut function" },
            { "foods": ["Cocoa", "Brazil nuts"], "benefit": "Magnesium and selenium to lower gut inflammation" }
        ]
    },
    {
        "name": "Ulcer(Peptic & Gastric)",
        "vegetarian_pairings": [
            { "foods": ["Oatmeal", "Honey"], "benefit": "Soothes the stomach lining and fights bacteria" },
            { "foods": ["Banana", "Almond butter"], "benefit": "Gentle on digestion and rich in healing nutrients" },
            { "foods": ["Carrots", "Ginger tea"], "benefit": "Beta-carotene and anti-inflammatory benefits" },
            { "foods": ["Avacado", "Chamomile tea"], "benefit": "Healthy fats and calming effects on the stomach" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Olive oil"], "benefit": "Omega-3s to reduce inflammation and protect the stomach lining" },
            { "foods": ["Chicken", "Bone broth"], "benefit": "Collagen and amino acids for gut repair" },
            { "foods": ["Egg", "Spinach"], "benefit": "Easy-to-digest protein and iron for tissue healing" },
        ],
        "vegan_pairings": [
            { "foods": ["Yogurt", "Manuka honey"], "benefit": "Probiotics and antibacterial properties to fight H. pylori" },
            { "foods": ["Chia seeds", "Almond milk"], "benefit": "Mucilage to coat and protect the stomach lining" },
            { "foods": ["Miso", "Steamed carrots"], "benefit": "Fermented probiotics and vitamin A for gut repair" },
            { "foods": ["Lentils", "Papaya"], "benefit": "Enzymes and fiber to aid digestion and reduce irritation" },
            { "foods": ["Cocoa", "Brazil nuts"], "benefit": "Magnesium and selenium to ease stress-induced ulcers" }
        ]
    },
    {
        "name": "Constipation",
        "vegetarian_pairings": [
            { "foods": ["Oatmeal", "Flaxseeds"], "benefit": "Soluble fiber and omega-3s to soften stool" },
            { "foods": ["Prunes", "Almond"], "benefit": "Natural laxatives with magnesium for muscle relaxation" },
            { "foods": ["Chia seeds", "Coconut water"], "benefit": "Hydration and mucilage for easy digestion" },
            { "foods": ["Apple", "Yogurt"], "benefit": "Magnesium and healthy fats to lubricate intestines" },
            { "foods": ["Spinach", "Olive oil"], "benefit": "Pectin (fiber) and probiotics for gut health" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Steamed brocolli"], "benefit": "Omega-3s and fiber for smooth digestion" },
            { "foods": ["Chicken", "Quinoa"], "benefit": "Lean protein with fiber-rich whole grains" },
            { "foods": ["Egg", "Avacado"], "benefit": "Healthy fats and gentle fiber to ease stool movement" },
        ],
        "vegan_pairings": [
            { "foods": ["Chia seeds", "Alomond milk"], "benefit": "Hydration and omega-3s for gut lubrication" },
            { "foods": ["Lentils", "Steamed carrots"], "benefit": "Insoluble fiber for bowel regularity" },
            { "foods": ["Mango", "Yogurt"], "benefit": "Insoluble fiber for bowel regularity" },
            { "foods": ["Figs", "Walnut"], "benefit": "Natural laxative effect with gut-friendly fats" },
            { "foods": ["Cocoa", "Brazil nuts"], "benefit": "Magnesium to relax intestines and relieve constipation" }
        ]
    },
    {
        "name": "Acid Reflux (GERD)",
        "vegetarian_pairings": [
          { "foods": ["Oatmeal", "Almond Milk"], "benefit": "Gentle fiber and acid-neutralizing properties" },
          { "foods": ["Banana", "Flaxseeds"], "benefit": "Coats the stomach and reduces acid irritation" },
          { "foods": ["Papaya", "Coconut Yogurt"], "benefit": "Enzymes and probiotics for digestion" },
          { "foods": ["Cucumber", "Olive Oil"], "benefit": "Hydrating and non-acidic for gut relief" },
          { "foods": ["Chamomile Tea", "Honey"], "benefit": "Soothes the esophagus and reduces inflammation" }
        ],
        "non_vegetarian_pairings": [],
        "vegan_pairings": []
      },
      {
        "name": "Bloating & Gas",
        "vegetarian_pairings": [
          { "foods": ["Ginger Tea", "Lemon"], "benefit": "Reduces bloating and aids digestion" },
          { "foods": ["Cucumber", "Mint"], "benefit": "Hydrating and relieves stomach distension" },
          { "foods": ["Fennel Seeds", "Warm Water"], "benefit": "Eases gas and promotes gut motility" },
          { "foods": ["Papaya", "Pineapple"], "benefit": "Natural digestive enzymes (papain & bromelain)" },
          { "foods": ["Turmeric", "Black Pepper"], "benefit": "Anti-inflammatory and aids digestion" }
        ],
        "non_vegetarian_pairings": [],
        "vegan_pairings": []
      },
      {
        "name": "Diarrhea & Loose Stools",
        "vegetarian_pairings": [
          { "foods": ["White Rice", "Steamed Carrots"], "benefit": "Easy-to-digest binding foods" },
          { "foods": ["Bananas", "Peanut Butter"], "benefit": "Potassium and fiber to firm stools" },
          { "foods": ["Applesauce", "Cinnamon"], "benefit": "Pectin-rich to regulate bowel movements" },
          { "foods": ["Yogurt", "Blueberries"], "benefit": "Probiotics and gut-healing antioxidants" },
          { "foods": ["Ginger Tea", "Honey"], "benefit": "Reduces gut irritation and replenishes fluids" }
        ],
        "non_vegetarian_pairings": [],
        "vegan_pairings": []
    },
    {
        "name": "Dysbiosis (Imbalanced Gut Bacteria)",
        "vegetarian_pairings": [
          { "foods": ["Sauerkraut", "Avocado"], "benefit": "Probiotics and healthy fats for gut health" },
          { "foods": ["Miso", "Seaweed"], "benefit": "Fermented foods and minerals to nourish good bacteria" },
          { "foods": ["Garlic", "Cooked Lentils"], "benefit": "Prebiotics to feed healthy gut bacteria" },
          { "foods": ["Kefir", "Chia Seeds"], "benefit": "Probiotic boost with fiber for microbiome balance" },
          { "foods": ["Green Tea", "Dark Chocolate"], "benefit": "Polyphenols to encourage good bacteria growth" }
        ],
        "non_vegetarian_pairings": [],
        "vegan_pairings": []
      },

    {
        "name": "Kidney Disease & Detoxification",
        "vegetarian_pairings": [
            { "foods": ["Cucumber", "Mint"], "benefit": "Hydration and kidney cleansing" },
            { "foods": ["Beets", "Lemon Juice"], "benefit": "Detoxifies the liver and kidneys" },
            { "foods": ["Parsley", "Pineapple"], "benefit": "Reduces bloating and supports kidney function" },
            { "foods": ["Carrots", "Ginger"], "benefit": "Antioxidants to protect the kidneys" },
            { "foods": ["Celery", "Apples"], "benefit": "Natural diuretics to flush toxins" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Fish", "Brown Rice"], "benefit": "Lean protein with kidney-friendly grains" },
            { "foods": ["Chicken", "Zucchini"], "benefit": "Low-sodium meal to reduce kidney strain" },
            { "foods": ["Egg Whites", "Bell Peppers"], "benefit": "High-quality protein with kidney-friendly vitamins" },
            { "foods": ["Turkey", "Cauliflower"], "benefit": "Low-phosphorus combination for kidney health" },
            { "foods": ["Shrimp", "Asparagus"], "benefit": "Lean protein with natural diuretic properties" }
        ],
        "vegan_pairings": [
            { "foods": ["Coconut Water", "Chia Seeds"], "benefit": "Hydration and kidney detox" },
            { "foods": ["Lemon", "Watermelon"], "benefit": "Flushes excess sodium and toxins" },
            { "foods": ["Broccoli", "Garlic"], "benefit": "Antioxidant-rich for kidney function" },
            { "foods": ["Mushrooms", "Quinoa"], "benefit": "Low-phosphorus, kidney-safe plant protein" },
            { "foods": ["Green Tea", "Ginger"], "benefit": "Detoxifying and kidney-protective" }
        ]
    },
    {
        "name": "Mental Health (Depression, Anxiety, Brain Fog, ADHD)",
        "vegetarian_pairings": [
            { "foods": ["Dark Chocolate", "Nuts"], "benefit": "Magnesium and tryptophan for mood balance" },
            { "foods": ["Oats", "Bananas"], "benefit": "Slow-release energy and serotonin boost" },
            { "foods": ["Spinach", "Avocado"], "benefit": "Folate and healthy fats for brain function" },
            { "foods": ["Pumpkin Seeds", "Yogurt"], "benefit": "Zinc and probiotics to reduce anxiety" },
            { "foods": ["Green Tea", "Lemon"], "benefit": "Enhances antioxidant absorption for brain health" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Fatty Fish (Salmon)", "Walnuts"], "benefit": "Omega-3s and antioxidants for cognitive support" },
            { "foods": ["Eggs", "Cheese"], "benefit": "Choline and B12 for brain function" },
            { "foods": ["Chicken", "Brown Rice"], "benefit": "Tryptophan and complex carbs for serotonin production" },
            { "foods": ["Turkey", "Sweet Potatoes"], "benefit": "Tryptophan and B vitamins for mood stability" },
            { "foods": ["Beef", "Spinach"], "benefit": "Iron and vitamin B6 for neurotransmitter support" }
        ],
        "vegan_pairings": [
            { "foods": ["Avocado", "Whole Grains"], "benefit": "Healthy fats and fiber for brain energy" },
            { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3s and calcium for mood regulation" },
            { "foods": ["Berries", "Flaxseeds"], "benefit": "Antioxidants and omega-3s for cognitive function" },
            { "foods": ["Cacao Powder", "Almond Butter"], "benefit": "Magnesium for stress relief" },
            { "foods": ["Maca Powder", "Oatmeal"], "benefit": "Adaptogens and fiber for brain focus" }
        ]
    },
    {
        name: "Thyroid Health (Hypothyroidism & Hyperthyroidism)",
    types: {
      Hypothyroidism: {
        title: "Hypothyroidism",
        vegetarian_pairings: [
          { foods: ["Spinach", "Tofu"], benefit: "Supports metabolism and iron levels." }
        ],
        non_vegetarian_pairings: [
          { foods: ["Salmon", "Brown Rice"], benefit: "Rich in omega-3s and energy." }
        ],
        vegan_pairings: [
          { foods: ["Chia Seeds", "Sweet Potatoes"], benefit: "Good for thyroid and energy." }
        ]
      },
      Hyperthyroidism: {
        title: "Hyperthyroidism",
        vegetarian_pairings: [
          { foods: ["Broccoli", "Whole Grains"], benefit: "Helps manage excess hormone." }
        ],
        non_vegetarian_pairings: [
          { foods: ["Chicken Breast", "Steamed Veggies"], benefit: "Supports muscle and hormone balance." }
        ],
        vegan_pairings: [
          { foods: ["Quinoa", "Pumpkin"], benefit: "Rich in nutrients and zinc." }
        ]
      }
    }
  },
    
    {
        "name": "PCOS (Polycystic Ovary Syndrome)",
        "vegetarian_pairings": [
            { "foods": ["Cinnamon", "Oatmeal"], "benefit": "Stabilizes blood sugar levels" },
            { "foods": ["Flaxseeds", "Yogurt"], "benefit": "Balances hormones with phytoestrogens" },
            { "foods": ["Walnuts", "Dark Chocolate"], "benefit": "Reduces stress-related inflammation" },
            { "foods": ["Chickpeas", "Spinach"], "benefit": "Provides protein and iron for menstrual health" },
            { "foods": ["Pumpkin Seeds", "Avocado"], "benefit": "Zinc and healthy fats for hormonal balance" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Olive Oil"], "benefit": "Omega-3s for reducing inflammation" },
            { "foods": ["Chicken", "Quinoa"], "benefit": "Lean protein for stable blood sugar" },
            { "foods": ["Eggs", "Turmeric"], "benefit": "Regulates estrogen and reduces inflammation" },
            { "foods": ["Turkey", "Broccoli"], "benefit": "B vitamins and fiber for hormone balance" },
            { "foods": ["Shrimp", "Zucchini"], "benefit": "Low-carb meal to reduce insulin resistance" }
        ],
        "vegan_pairings": [
            { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3s and calcium for hormone health" },
            { "foods": ["Tofu", "Green Tea"], "benefit": "Phytoestrogens and antioxidants for hormonal balance" },
            { "foods": ["Maca Powder", "Coconut Yogurt"], "benefit": "Adaptogens and probiotics for hormone regulation" },
            { "foods": ["Lentils", "Sweet Potatoes"], "benefit": "Fiber and complex carbs for insulin sensitivity" },
            { "foods": ["Cacao", "Brazil Nuts"], "benefit": "Magnesium and selenium to balance stress hormones" }
        ]
    },
      
    {
        "name": "PCOD(Polycystic Ovarian Disorder)",
        "vegetarian_pairings": [
          { "foods": ["Cinnamon", "Oatmeal"], "benefit": "Helps stabilize blood sugar levels" },
          { "foods": ["Flaxseeds", "Yogurt"], "benefit": "Provides phytoestrogens to balance hormones" },
          { "foods": ["Walnuts", "Dark Chocolate"], "benefit": "Reduces stress-related inflammation" },
          { "foods": ["Chickpeas", "Spinach"], "benefit": "Rich in iron and protein for menstrual health" },
          { "foods": ["Pumpkin Seeds", "Avocado"], "benefit": "Zinc and healthy fats for hormonal balance" }
        ],
        "non_vegetarian_pairings": [
          { "foods": ["Salmon", "Olive Oil"], "benefit": "Omega-3s for reducing inflammation" },
          { "foods": ["Chicken", "Quinoa"], "benefit": "Lean protein for stable blood sugar" },
          { "foods": ["Eggs", "Turmeric"], "benefit": "Supports estrogen regulation and reduces inflammation" },
          { "foods": ["Turkey", "Broccoli"], "benefit": "B vitamins and fiber for hormone balance" },
          { "foods": ["Shrimp", "Zucchini"], "benefit": "Low-carb meal to reduce insulin resistance" }
        ],
        "vegan_pairings": [
          { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3s and calcium for hormone health" },
          { "foods": ["Tofu", "Green Tea"], "benefit": "Phytoestrogens and antioxidants for hormonal balance" },
          { "foods": ["Maca Powder", "Coconut Yogurt"], "benefit": "Adaptogens and probiotics for hormone regulation" },
          { "foods": ["Lentils", "Sweet Potatoes"], "benefit": "Fiber and complex carbs for insulin sensitivity" },
          { "foods": ["Cacao", "Brazil Nuts"], "benefit": "Magnesium and selenium to balance stress hormones" }
        ]
      },
      {
        "name": "For Weight Management & Insulin Resistance",
        "vegetarian_pairings": [
          { "foods": ["Cinnamon", "Oatmeal"], "benefit": "Lowers blood sugar and improves insulin sensitivity" },
          { "foods": ["Flaxseeds", "Yogurt"], "benefit": "Provides fiber and healthy fats for better metabolism" },
          { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3s and fiber to prevent blood sugar spikes" },
          { "foods": ["Lentils", "Sweet Potatoes"], "benefit": "Complex carbs for sustained energy and appetite control" }
        ],
        "non_vegetarian_pairings": [
          { "foods": ["Eggs", "Avocado"], "benefit": "High-protein meal to reduce sugar cravings" }
        ],
        "vegan_pairings": []
      },
      {
        "name": "For Irregular Periods & Hormonal Balance",
        "vegetarian_pairings": [
          { "foods": ["Pumpkin Seeds", "Spinach"], "benefit": "Zinc and iron for menstrual regularity" },
          { "foods": ["Tofu", "Green Tea"], "benefit": "Phytoestrogens and antioxidants to regulate estrogen" },
          { "foods": ["Walnuts", "Dark Chocolate"], "benefit": "Magnesium-rich to reduce PMS symptoms" },
          { "foods": ["Maca Powder", "Coconut Yogurt"], "benefit": "Adaptogens and probiotics for cycle regulation" }
        ],
        "non_vegetarian_pairings": [
          { "foods": ["Salmon", "Olive Oil"], "benefit": "Omega-3s to balance hormones" }
        ],
        "vegan_pairings": []
    },
    {
        "name": "For Acne & Skin Health",
        "vegetarian_pairings": [
          { "foods": ["Turmeric", "Black Pepper"], "benefit": "Curcumin fights acne-related inflammation" },
          { "foods": ["Cacao", "Brazil Nuts"], "benefit": "Selenium and zinc to control oil production" },
          { "foods": ["Berries", "Greek Yogurt"], "benefit": "Antioxidants and probiotics for skin health" },
          { "foods": ["Cucumber", "Mint"], "benefit": "Hydrating and cooling for clearer skin" },
          { "foods": ["Miso", "Steamed Broccoli"], "benefit": "Fermented foods for gut balance and clear skin" }
        ],
        "non_vegetarian_pairings": [],
        "vegan_pairings": []
      },
      {
        "name": "For Mood Swings & Stress Management",
        "vegetarian_pairings": [
          { "foods": ["Chamomile Tea", "Honey"], "benefit": "Calms stress and balances cortisol" },
          { "foods": ["Bananas", "Almond Butter"], "benefit": "Magnesium to reduce anxiety" },
          { "foods": ["Eggs", "Quinoa"], "benefit": "B vitamins for brain and mood support" },
          { "foods": ["Cacao", "Walnuts"], "benefit": "Natural serotonin boosters for better mood" },
          { "foods": ["Ashwagandha", "Warm Almond Milk"], "benefit": "Adaptogens to reduce cortisol and improve sleep" }
        ],
        "non_vegetarian_pairings": [],
        "vegan_pairings": []
      },                  
      
    {
        "name": "Skin Health (Acne, Eczema, Psoriasis, Aging)",
        "vegetarian_pairings": [
            { "foods": ["Tomatoes", "Olive Oil"], "benefit": "Lycopene absorption for UV protection" },
            { "foods": ["Cucumber", "Yogurt"], "benefit": "Hydration and probiotics for skin glow" },
            { "foods": ["Walnuts", "Carrots"], "benefit": "Omega-3s and beta-carotene for clear skin" },
            { "foods": ["Dark Chocolate", "Almonds"], "benefit": "Antioxidants to fight aging" },
            { "foods": ["Papaya", "Pumpkin Seeds"], "benefit": "Vitamin C and zinc for skin repair" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Avocado"], "benefit": "Omega-3s and healthy fats for glowing skin" },
            { "foods": ["Eggs", "Spinach"], "benefit": "Biotin and lutein for skin elasticity" },
            { "foods": ["Chicken", "Bell Peppers"], "benefit": "Collagen and vitamin C for skin renewal" },
            { "foods": ["Sardines", "Kale"], "benefit": "Omega-3s and vitamin A for clear skin" },
            { "foods": ["Bone Broth", "Garlic"], "benefit": "Collagen and anti-inflammatory compounds" }
        ],
        "vegan_pairings": [
            { "foods": ["Flaxseeds", "Coconut Oil"], "benefit": "Plant-based omega-3s for skin hydration" },
            { "foods": ["Chia Seeds", "Berries"], "benefit": "Antioxidants and fiber for acne prevention" },
            { "foods": ["Turmeric", "Almond Milk"], "benefit": "Anti-inflammatory golden milk for eczema" },
            { "foods": ["Sweet Potatoes", "Walnuts"], "benefit": "Beta-carotene and vitamin E for skin repair" },
            { "foods": ["Beets", "Ginger"], "benefit": "Detoxifying properties for clear skin" }
        ]
    },
    {
        "name": "Acne – Clear Skin Diet",
        "vegetarian_pairings": [
            { "foods": ["Turmeric", "Black pepper"], "benefit": "Reduces inflammation" },
            { "foods": ["Pumpkin seeds", "Spinach"], "benefit": "Zinc and vitamin A for acne healing" },
            { "foods": ["Berries", "Greek yogurt"], "benefit": "Probiotics and antioxidants for clear skin" },
            { "foods": ["Cucumber", "Mint"], "benefit": "Hydrating and reduces redness" },
            { "foods": ["Carrot", "Almond butter"], "benefit": "Beta-carotene for skin cell renewal" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Olive oil"], "benefit": "Omega-3s reduce acne-related inflammation" },
            { "foods": ["Eggs", "Avocado"], "benefit": "Healthy fats for balanced hormones" },
            { "foods": ["Chicken", "Quinoa"], "benefit": "Protein-rich to prevent insulin spikes" },
            { "foods": ["Turkey", "Brocolli"], "benefit": "B vitamins for skin repair" },
            { "foods": ["Shrimp", "zucchini"], "benefit": "Low-carb meal to control acne triggers" }
        ],
        "vegan_pairings": [
            { "foods": ["Flaxseeds", "Oat meals"], "benefit": " Omega-3s and fiber to reduce breakouts" },
            { "foods": ["Chia Seeds", "Almond milk"], "benefit": "Hormone-balancing fats" },
            { "foods": ["Tofu", "Green tea"], "benefit": "Antioxidants to fight acne scars" },
            { "foods": ["Cacao", "Brazil nuts"], "benefit": "Selenium for skin healing" },
            { "foods": ["Papaya", "Yogurt"], "benefit": "Enzymes and probiotics for digestion" }
        ]
    },
    {
        "name": "Eczema – Anti-Inflammatory Skin Support",
        "vegetarian_pairings": [
            { "foods": ["Flaxseeds", "Oat meals"], "benefit": "Omega-3s and fiber for anti-inflammation" },
            { "foods": ["Avocado", "Olive oil"], "benefit": "Moisturizing fats for dry skin" },
            { "foods": ["Pumpkin seeds", "yogurt"], "benefit": "Zinc and probiotics for skin healing" },
            { "foods": ["Chamomile tea", "Honey"], "benefit": "Soothes inflammation" },
            { "foods": ["Walnut", "Dark chocolate"], "benefit": "Magnesium and polyphenols for skin repair" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Sweet potatoes"], "benefit": " Omega-3s and vitamin A for skin health" },
            { "foods": ["Chicken", "Mushroom"], "benefit": "Collagen and vitamin D for barrier repair" },
            { "foods": ["Egg", "Turmeric"], "benefit": " Anti-inflammatory and supports cell regeneration" },
            { "foods": ["Shrimp", "Zucchini"], "benefit": "Low-inflammatory, nutrient-dense meal" },
            { "foods": ["Bone broth", "Spinach"], "benefit": "Collagen and iron for skin healing" }
        ],
        "vegan_pairings": [
            { "foods": ["Almond milk", "Chia seed"], "benefit": "Omega-3s for skin hydration" },
            { "foods": ["Coconut oil", "Leafy greens"], "benefit": "Healthy fats and antioxidants" },
            { "foods": ["Lentils", "Quinoa"], "benefit": "Protein for skin repair" },
            { "foods": ["Miso", "Seaweed"], "benefit": "Fermented foods for gut and skin health" },
            { "foods": ["Chia seeds", "Papaya"], "benefit": "Enzymes for skin barrier healing" }
        ]
    },
    {
        "name": "Psoriasis – Skin & Autoimmune Balance",
        "focus": "Anti-inflammatory, gut-healing, and immune-supporting foods.",
        "vegetarian_pairings": [
            { "foods": ["Turmeric", "Black Pepper"], "benefit": "Reduces psoriasis flare-ups." },
            { "foods": ["Coconut Oil", "Leafy Greens"], "benefit": "Supports skin healing." },
            { "foods": ["Blueberries", "Chia Seeds"], "benefit": "Antioxidants for immune support." },
            { "foods": ["Pumpkin Seeds", "Sweet Potatoes"], "benefit": "Zinc and beta-carotene for skin renewal." },
            { "foods": ["Fennel", "Olive Oil"], "benefit": "Reduces skin irritation." }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Olive Oil"], "benefit": "Omega-3s to reduce inflammation." },
            { "foods": ["Chicken", "Spinach"], "benefit": "Iron and protein for skin repair." },
            { "foods": ["Eggs", "Mushrooms"], "benefit": "Vitamin D and protein for immune function." },
            { "foods": ["Turkey", "Carrots"], "benefit": "B vitamins and antioxidants for skin balance." },
            { "foods": ["Shrimp", "Avocado"], "benefit": "Healthy fats and zinc for wound healing." }
        ],
        "vegan_pairings": [
            { "foods": ["Flaxseeds", "Oatmeal"], "benefit": "Omega-3s and fiber for gut health." },
            { "foods": ["Coconut Yogurt", "Berries"], "benefit": "Probiotics and antioxidants." },
            { "foods": ["Lentils", "Kale"], "benefit": "Iron and folate for skin cell turnover." },
            { "foods": ["Cacao", "Brazil Nuts"], "benefit": "Selenium and polyphenols for inflammation control." },
            { "foods": ["Miso Soup", "Seaweed"], "benefit": "Fermented foods for autoimmune balance." }
        ]
    },
    {
        "name": "Aging – Skin & Collagen Support",
        "focus": "Collagen production, hydration, and antioxidants.",
        "vegetarian_pairings": [
            { "foods": ["Collagen Powder", "Lemon Water"], "benefit": "Boosts skin elasticity." },
            { "foods": ["Green Tea", "Dark Chocolate"], "benefit": "Polyphenols to fight wrinkles." },
            { "foods": ["Carrots", "Almond Butter"], "benefit": "Vitamin A and E for youthful skin." },
            { "foods": ["Papaya", "Greek Yogurt"], "benefit": "Enzymes and probiotics for skin renewal." },
            { "foods": ["Walnuts", "Pomegranate"], "benefit": "Antioxidants to prevent premature aging." }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Olive Oil"], "benefit": "Omega-3s and healthy fats to reduce fine lines." },
            { "foods": ["Eggs", "Avocado"], "benefit": "Biotin and healthy fats for skin hydration." },
            { "foods": ["Chicken", "Broccoli"], "benefit": "Collagen-boosting amino acids and vitamin C." },
            { "foods": ["Turkey", "Blueberries"], "benefit": "Antioxidants for skin firmness." },
            { "foods": ["Shrimp", "Zucchini"], "benefit": "Low-inflammatory protein for skin elasticity." }
        ],
        "vegan_pairings": [
            { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3s and calcium for skin repair." },
            { "foods": ["Maca Powder", "Coconut Yogurt"], "benefit": "Adaptogens for stress-free skin." },
            { "foods": ["Lentils", "Sweet Potatoes"], "benefit": "Protein and beta-carotene for collagen synthesis." },
            { "foods": ["Cacao", "Brazil Nuts"], "benefit": "Magnesium and selenium for skin cell renewal." },
            { "foods": ["Papaya", "Chia Seeds"], "benefit": "Enzymes and fiber for detoxification." }
        ]
    },
    {
        "name": "Liver Health & Detoxification",
        "vegetarian_pairings": [
            { "foods": ["Beets", "Lemon Juice"], "benefit": "Supports liver detoxification" },
            { "foods": ["Turmeric", "Black Pepper"], "benefit": "Boosts liver enzyme function" },
            { "foods": ["Carrots", "Flaxseeds"], "benefit": "Supports bile production" },
            { "foods": ["Apple Cider Vinegar", "Warm Water"], "benefit": "Helps flush toxins" },
            { "foods": ["Spinach", "Olive Oil"], "benefit": "Antioxidants and healthy fats for liver repair" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Garlic"], "benefit": "Omega-3s and sulfur compounds for detoxification" },
            { "foods": ["Chicken", "Asparagus"], "benefit": "B vitamins and diuretics for liver health" },
            { "foods": ["Eggs", "Avocado"], "benefit": "Choline for liver function" },
            { "foods": ["Liver", "Onions"], "benefit": "Natural source of iron and B12" },
            { "foods": ["Turkey", "Brussels Sprouts"], "benefit": "Cruciferous vegetables support liver detox" }
        ],
        "vegan_pairings": [
            { "foods": ["Kale", "Chia Seeds"], "benefit": "Fiber and omega-3s for liver health" },
            { "foods": ["Miso", "Kimchi"], "benefit": "Fermented foods for gut-liver connection" },
            { "foods": ["Green Tea", "Lemon"], "benefit": "Detoxifying and rich in antioxidants" },
            { "foods": ["Dandelion Tea", "Almonds"], "benefit": "Supports bile production and detoxification" },
            { "foods": ["Coconut Water", "Cilantro"], "benefit": "Hydration and natural heavy metal detox" }
        ]
    },
    {
        "name": "Endometriosis",
        "vegetarian_pairings": [
            { "foods": ["Flaxseeds", "Almond Butter"], "benefit": "Phytoestrogens & healthy fats for hormone balance" },
            { "foods": ["Turmeric", "Black Pepper"], "benefit": "Reduces inflammation" },
            { "foods": ["Broccoli", "Olive Oil"], "benefit": "Detoxifies excess estrogen" },
            { "foods": ["Pumpkin Seeds", "Spinach"], "benefit": "Zinc & iron for reproductive health" },
            { "foods": ["Cinnamon", "Oatmeal"], "benefit": "Helps stabilize blood sugar levels" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Avocado"], "benefit": "Omega-3s to reduce inflammation" },
            { "foods": ["Chicken", "Asparagus"], "benefit": "B vitamins & fiber for estrogen detox" },
            { "foods": ["Eggs", "Mushrooms"], "benefit": "Vitamin D for hormonal regulation" },
            { "foods": ["Bone Broth", "Garlic"], "benefit": "Collagen & anti-inflammatory properties" },
            { "foods": ["Turkey", "Brussels Sprouts"], "benefit": "Cruciferous veggies help estrogen metabolism" }
        ],
        "vegan_pairings": [
            { "foods": ["Chia Seeds", "Hemp Seeds"], "benefit": "Omega-3s & magnesium for hormone support" },
            { "foods": ["Tofu", "Green Tea"], "benefit": "Phytoestrogens & antioxidants" },
            { "foods": ["Maca Powder", "Coconut Milk"], "benefit": "Adaptogens for hormone balance" },
            { "foods": ["Lentils", "Sweet Potatoes"], "benefit": "Fiber & vitamin B6 for hormonal stability" },
            { "foods": ["Cacao", "Brazil Nuts"], "benefit": "Magnesium & selenium for pain relief" }
        ]
    },
    {
        "name": "Hair Health (Hair Loss, Dry/Damaged Hair, Dandruff)",
        "vegetarian_pairings": [
            { "foods": ["Almonds", "Walnuts"], "benefit": "Vitamin E & omega-3s for hair strength" },
            { "foods": ["Spinach", "Chickpeas"], "benefit": "Iron & protein for hair growth" },
            { "foods": ["Pumpkin Seeds", "Greek Yogurt"], "benefit": "Zinc & probiotics for scalp health" },
            { "foods": ["Sweet Potatoes", "Coconut Oil"], "benefit": "Beta-carotene for hydration" },
            { "foods": ["Dark Chocolate", "Berries"], "benefit": "Antioxidants for strong hair" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Eggs", "Avocado"], "benefit": "Biotin & healthy fats for hair thickness" },
            { "foods": ["Salmon", "Flaxseeds"], "benefit": "Omega-3s for shiny, strong hair" },
            { "foods": ["Chicken", "Bell Peppers"], "benefit": "Vitamin C & protein for collagen production" },
            { "foods": ["Bone Broth", "Garlic"], "benefit": "Collagen & circulation-boosting compounds" },
            { "foods": ["Sardines", "Olive Oil"], "benefit": "Essential fatty acids for scalp health" }
        ],
        "vegan_pairings": [
            { "foods": ["Chia Seeds", "Hemp Seeds"], "benefit": "Plant-based omega-3s" },
            { "foods": ["Coconut Yogurt", "Berries"], "benefit": "Probiotics & antioxidants" },
            { "foods": ["Tofu", "Pumpkin Seeds"], "benefit": "Protein & zinc for hair growth" },
            { "foods": ["Lentils", "Beets"], "benefit": "Iron-rich foods for hair loss prevention" },
            { "foods": ["Moringa Powder", "Almond Milk"], "benefit": "B vitamins for strong hair strands" }
        ]
    },
    {
        "name": "Menopause",
        "vegetarian_pairings": [
            { "foods": ["Flaxseeds", "Almonds"], "benefit": "Phytoestrogens & healthy fats for hormone balance" },
            { "foods": ["Greek Yogurt", "Chia Seeds"], "benefit": "Calcium & omega-3s for bone health" },
            { "foods": ["Spinach", "Sunflower Seeds"], "benefit": "Magnesium for mood stability" },
            { "foods": ["Oats", "Walnuts"], "benefit": "Fiber & healthy fats for weight management" },
            { "foods": ["Soy Milk", "Berries"], "benefit": "Plant estrogens & antioxidants" }
        ],
        "non_vegetarian_pairings": [
            { "foods": ["Salmon", "Flaxseeds"], "benefit": "Omega-3s for joint & heart health" },
            { "foods": ["Eggs", "Broccoli"], "benefit": "Vitamin D & fiber for bone density" },
            { "foods": ["Chicken", "Quinoa"], "benefit": "Lean protein for muscle retention" },
            { "foods": ["Sardines", "Kale"], "benefit": "Calcium-rich foods for osteoporosis prevention" },
            { "foods": ["Bone Broth", "Garlic"], "benefit": "Collagen for skin elasticity" }
        ],
        "vegan_pairings": [
            { "foods": ["Tofu", "Sesame Seeds"], "benefit": "Plant-based estrogen & calcium" },
            { "foods": ["Chia Seeds", "Almond Milk"], "benefit": "Omega-3s & bone-strengthening minerals" },
            { "foods": ["Turmeric", "Black Pepper"], "benefit": "Anti-inflammatory for joint pain" },
            { "foods": ["Lentils", "Avocado"], "benefit": "Fiber & healthy fats for metabolism" },
            { "foods": ["Dark Chocolate", "Moringa"], "benefit": "Magnesium & iron for energy" }
        ]
    }
]

const DiseaseSpecificHealthBenefits = () => {
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [thyroidType, setThyroidType] = useState('');
    const [pcodFocus, setPcodFocus] = useState('');
  
    const handleDiseaseSelect = (diseaseName) => {
      const disease = diseaseData.find(d => d.name === diseaseName);
      setSelectedDisease(disease);
      setThyroidType('');
      setPcodFocus('');
    };
  
    const handleThyroidTypeSelect = (e) => {
      setThyroidType(e.target.value);
    };
  
    const handlePcodFocusSelect = (e) => {
      setPcodFocus(e.target.value);
    };
  
    // Determine what data to pass to Pairings
    let pairingData = selectedDisease;

    if (
      selectedDisease?.name === "Thyroid Health (Hypothyroidism & Hyperthyroidism)" &&
      selectedDisease?.types &&
      thyroidType &&
      selectedDisease.types[thyroidType]
    ) {
      pairingData = selectedDisease.types[thyroidType];
    } else if (
      selectedDisease?.name === "PCOD(Polycystic Ovarian Disorder)" &&
      selectedDisease?.focusAreas &&
      pcodFocus &&
      selectedDisease.focusAreas[pcodFocus]
    ) {
      pairingData = selectedDisease.focusAreas[pcodFocus];
    }
    
  
    return (
      <div className="health-benefits-container">
        <h1 className="page-title">Disease-Specific Health Benefits</h1>
  
        <DiseaseSelector
          onSelectDisease={handleDiseaseSelect}
          diseaseData={diseaseData.map(d => d.name)}
        />
  
        {/* Thyroid Sub-selection */}
        {selectedDisease?.name === "Thyroid Health (Hypothyroidism & Hyperthyroidism)" && (
          <div className="thyroid-options">
            <label className="thyroid-label">Select Thyroid Condition:</label>
            <select
              value={thyroidType}
              onChange={handleThyroidTypeSelect}
              className="thyroid-dropdown"
            >
              <option value="" disabled>Choose</option>
              <option value="Hypothyroidism">Hypothyroidism</option>
              <option value="Hyperthyroidism">Hyperthyroidism</option>
            </select>
          </div>
        )}
  
        {/* PCOD Sub-selection */}
        {selectedDisease?.name === "PCOD(Polycystic Ovarian Disorder)" && (
          <div className="pcod-options">
            <label className="pcod-label">Select Focus Area:</label>
            <select
              value={pcodFocus}
              onChange={handlePcodFocusSelect}
              className="pcod-dropdown"
            >
              <option value="" disabled>Choose</option>
              <option value="Weight Management & Insulin Resistance">For Weight Management & Insulin Resistance</option>
              <option value="Irregular Periods & Hormonal Balance">For Irregular Periods & Hormonal Balance</option>
              <option value="Acne & Skin Health">For Acne & Skin Health</option>
              <option value="Mood Swings & Stress Management">For Mood Swings & Stress Management</option>
            </select>
          </div>
        )}
  
        {/* Pairings display */}
        {selectedDisease && (
          (selectedDisease.name !== "Thyroid Health (Hypothyroidism & Hyperthyroidism)" || thyroidType) &&
          (selectedDisease.name !== "PCOD(Polycystic Ovarian Disorder)" || pcodFocus) && (
            <Pairings diseaseData={pairingData} />
          )
        )}
      </div>
    );
  };
  
  export default DiseaseSpecificHealthBenefits;