import React, { useState } from 'react';
import './NutrientSpecificPairings.css';

const NutrientSpecificPairings = () => {


    const nutrientPairings = {
        "iron_absorption": {
            "title": "Iron Absorption ",
            "pairings": [
                {
                    "food1": "Spinach",
                    "food2": "Lemon Juice",
                    "description": "Vitamin C in lemon increases iron absorption from spinach."
                },
                {
                    "food1": "Spinach",
                    "food2": "Orange Juice",
                    "description": "Vitamin C in orange increases iron absorption from spinach."
                },

                {
                    "food1": "Chickpeas",
                    "food2": "Bell Peppers",
                    "description": "Chickpeas provide non-heme iron, while bell peppers add Vitamin C."
                },
                {
                    "food1": "Lentils",
                    "food2": "Tomatoes",
                    "description": "Tomatoes' acidity enhances iron uptake from lentils."
                },
                {
                    "food1": "Pumpkin Seeds",
                    "food2": "Oranges",
                    "description": "Oranges provide Vitamin C, which boosts non-heme iron absorption."
                },
                {
                    "food1": "Beetroot",
                    "food2": "Citrus Fruits",
                    "description": "Beetroot has iron, and citrus fruits increase absorption."
                },
                {
                    "food1": "Tofu",
                    "food2": "Pineapple",
                    "description": "Tofu provides iron, and pineapple contains bromelain, aiding digestion."
                }
            ],
            "how_pairings_work": "Iron (especially non-heme from plants) is harder to absorb and needs Vitamin C to convert it into a form the body can use. Acidic foods (like lemon, tomatoes, and citrus) create an ideal environment for absorption.",
            "avoid": [
                "Tea, coffee, and calcium-rich foods (like dairy) inhibit iron absorption when consumed with iron-rich meals.",
                "Excessive fiber can bind iron and prevent uptake."
            ]
        },
        "calcium_absorption": {
            "title": "Calcium Absorption ",
            "pairings": [
                {
                    "food1": "Milk",
                    "food2": "Sunlight Exposure",
                    "description": "Sunlight triggers Vitamin D production, helping calcium absorption."
                },
                {
                    "food1": "Greek Yogurt",
                    "food2": "Almond Butter",
                    "description": "Yogurt provides calcium, and almonds add magnesium for better absorption."
                },
                {
                    "food1": "Tofu",
                    "food2": "Mushrooms",
                    "description": "Tofu is rich in calcium, and mushrooms contain Vitamin D."
                },
                {
                    "food1": "Sardines",
                    "food2": "Kale",
                    "description": "Sardines contain calcium, and kale provides Vitamin K, which helps calcium retention in bones."
                },
                {
                    "food1": "Sesame Seeds",
                    "food2": "Spinach",
                    "description": "Spinach has calcium, and sesame seeds add magnesium for better absorption."
                },
                {
                    "food1": "Cheese",
                    "food2": "Whole Wheat Crackers",
                    "description": "Cheese provides calcium, while whole grains prevent excess calcium loss."
                }
            ],
            "how_pairings_work": "Vitamin D helps the body absorb calcium more efficiently. Magnesium and Vitamin K help direct calcium into bones instead of soft tissues.",
            "avoid": [
                "Excessive caffeine and soft drinks can leach calcium from bones.",
                "High-oxalate foods (like spinach, beets) can block calcium absorption if eaten in large amounts."
            ]
        },
        "omega_3_absorption": {
            "title": "Omega-3 Absorption ",
            "pairings": [
                {
                    "food1": "Salmon",
                    "food2": "Avocado",
                    "description": "Omega-3s in salmon need healthy fats for better absorption."
                },
                {
                    "food1": "Chia Seeds",
                    "food2": "Almond Butter",
                    "description": "Chia seeds provide ALA Omega-3s, while almonds add healthy fats."
                },
                {
                    "food1": "Flaxseeds",
                    "food2": "Coconut Milk",
                    "description": "Flaxseeds provide Omega-3s, and coconut milk adds fat for absorption."
                },
                {
                    "food1": "Walnuts",
                    "food2": "Olive Oil",
                    "description": "Plant-based Omega-3s need extra fats to be absorbed efficiently."
                },
                {
                    "food1": "Eggs",
                    "food2": "Turmeric + Black Pepper",
                    "description": "Piperine in black pepper enhances turmeric absorption, while eggs provide Omega-3s."
                }
            ],
            "how_pairings_work": "Omega-3s are fat-soluble, meaning they need healthy fats to be absorbed properly. Adding healthy fats ensures that Omega-3s are efficiently utilized by the body.",
            "avoid": [
                "Too much Omega-6 (found in processed vegetable oils) competes with Omega-3 absorption.",
                "Fried foods can oxidize Omega-3s, reducing their effectiveness."
            ]
        },
        "antioxidant_absorption": {
            "title": "Antioxidant Absorption ",
            "pairings": [
                {
                    "food1": "Tomatoes",
                    "food2": "Olive Oil",
                    "description": "Fat improves lycopene absorption for better skin health."
                },
                {
                    "food1": "Carrots",
                    "food2": "Almond Butter",
                    "description": "Beta-carotene in carrots needs fat to be absorbed efficiently."
                },
                {
                    "food1": "Blueberries",
                    "food2": "Dark Chocolate",
                    "description": "Polyphenols work together for enhanced antioxidant effects."
                },
                {
                    "food1": "Kale",
                    "food2": "Coconut Oil",
                    "description": "Coconut oil helps absorb kale’s fat-soluble antioxidants."
                },
                {
                    "food1": "Turmeric",
                    "food2": "Black Pepper + Olive Oil",
                    "description": "Piperine in black pepper enhances curcumin absorption from turmeric."
                },
                {
                    "food1": "Green Tea",
                    "food2": "Lemon",
                    "description": "Vitamin C in lemon increases antioxidant absorption from green tea."
                }
            ],
            "how_pairings_work": "Many antioxidants, like lycopene and beta-carotene, are fat-soluble, meaning they require fats to be absorbed. Curcumin in turmeric is better absorbed when combined with black pepper and healthy fats.",
            "avoid": [
                "Cooking some antioxidants (like Vitamin C) at high heat can destroy their potency.",
                "Too much sugar can counteract antioxidant benefits."
            ]
        },
        "b_vitamin_absorption": {
            "title": "B Vitamin Absorption ",
            "pairings": [
                {
                    "food1": "Eggs",
                    "food2": "Leafy Greens",
                    "description": "B12 in eggs supports folate absorption from greens."
                },
                {
                    "food1": "Lentils",
                    "food2": "Avocado",
                    "description": "Folate needs healthy fats for better metabolism."
                },
                {
                    "food1": "Chicken",
                    "food2": "Brown Rice",
                    "description": "B vitamins help convert carbohydrates into energy."
                },
                {
                    "food1": "Nutritional Yeast",
                    "food2": "Almond Milk",
                    "description": "Vegan-friendly source of B12 with calcium."
                },
                {
                    "food1": "Fish",
                    "food2": "Quinoa",
                    "description": "B6 supports nerve function and energy levels."
                }
            ],
            "how_pairings_work": "Folate and B12 work together to support red blood cell formation. B vitamins are water-soluble, so they are best absorbed when eaten in a balanced diet.",
            "avoid": [
                "Alcohol depletes B vitamins in the body.",
                "Cooking at high temperatures can destroy B vitamins."
            ]
        },
        "calcium_vitamin_d": {
            "title": "Calcium & Vitamin D ",
            "pairings": [
                {
                    "food1": "Milk",
                    "food2": "Sunlight Exposure",
                    "description": "Vitamin D from sunlight enhances calcium use."
                },
                {
                    "food1": "Tofu",
                    "food2": "Mushrooms",
                    "description": "Mushrooms provide plant-based Vitamin D."
                },
                {
                    "food1": "Sardines",
                    "food2": "Kale",
                    "description": "Vitamin d in salmon can enhance absorption of calcium from yogurt."
                },
                {
                    "food1": "Salomon",
                    "food2": "Yogurt",
                    "description": "Vitamin K and calcium prevent bone loss."
                },
                {
                    "food1": "Greek Yogurt",
                    "food2": "Almond Butter",
                    "description": "Magnesium aids calcium metabolism."
                },
                {
                    "food1": "Sesame Seeds",
                    "food2": "Spinach",
                    "description": "Nutrient synergy strengthens bones."
                }
            ],
            "how_pairings_work": "Vitamin D enhances calcium absorption. Magnesium and Vitamin K support calcium metabolism.",
            "avoid": [
                "Excess caffeine, soft drinks, and processed foods hinder calcium retention."
            ]
        },
        "magnesium_absorption": {
            "title": "Magnesium Absorption ",
            "pairings": [
                {
                    "food1": "Dark Chocolate",
                    "food2": "Pumpkin Seeds",
                    "description": "Both are rich in magnesium and improve absorption."
                },
                {
                    "food1": "Bananas",
                    "food2": "Almond Butter",
                    "description": "Potassium and healthy fats support magnesium uptake."
                },
                {
                    "food1": "Spinach",
                    "food2": "Cashews",
                    "description": "Leafy greens and nuts enhance magnesium bioavailability."
                },
                {
                    "food1": "Avocado",
                    "food2": "Sunflower Seeds",
                    "description": "Healthy fats and magnesium work together for nerve function."
                },
                {
                    "food1": "Legumes",
                    "food2": "Brown Rice",
                    "description": "Combination improves mineral absorption."
                }
            ],
            "how_pairings_work": "Magnesium requires Vitamin B6 and healthy fats for efficient absorption. Combining magnesium with Vitamin D enhances bioavailability.",
            "avoid": [
                "Excess caffeine depletes magnesium levels.",
                "High sugar intake inhibits magnesium absorption."
            ]
        },
        "zinc_absorption": {
            "title": "Zinc Absorption ",
            "pairings": [
                {
                    "food1": "Pumpkin Seeds",
                    "food2": "Chickpeas",
                    "description": "Plant-based zinc sources work best with protein."
                },
                {
                    "food1": "Eggs",
                    "food2": "Cheese",
                    "description": "Animal-based zinc is highly bioavailable with protein."
                },
                {
                    "food1": "Lentils",
                    "food2": "Garlic",
                    "description": "Sulfur in garlic enhances zinc absorption."
                },
                {
                    "food1": "Cashews",
                    "food2": "Cocoa Powder",
                    "description": "Copper and zinc together support enzyme function."
                },
                {
                    "food1": "Beef",
                    "food2": "Quinoa",
                    "description": "Red meat contains zinc, and whole grains improve uptake."
                }
            ],
            "how_pairings_work": "Zinc is better absorbed with protein-rich foods. Sulfur-containing foods (garlic, onions) enhance zinc absorption.",
            "avoid": [
                "Excess calcium interferes with zinc absorption.",
                "Too much phytate (in unsoaked grains) inhibits zinc uptake."
            ]
        },
        "selenium_absorption": {
            "title": "Selenium Absorption ",
            "pairings": [
                {
                    "food1": "Brazil Nuts",
                    "food2": "Dark Chocolate",
                    "description": "Selenium and polyphenols boost antioxidant activity."
                },
                {
                    "food1": "Eggs",
                    "food2": "Garlic",
                    "description": "Sulfur compounds improve selenium absorption."
                },
                {
                    "food1": "Salmon",
                    "food2": "Brown Rice",
                    "description": "Protein aids selenium uptake."
                },
                {
                    "food1": "Mushrooms",
                    "food2": "Walnuts",
                    "description": "Both provide selenium and essential fats."
                },
                {
                    "food1": "Sunflower Seeds",
                    "food2": "Lentils",
                    "description": "Improves mineral bioavailability."
                }
            ],
            "how_pairings_work": "Selenium requires proteins and sulfur compounds for absorption. Antioxidants enhance selenium’s effectiveness.",
            "avoid": [
                "High sugar intake disrupts selenium metabolism.",
                "Too much processed food reduces selenium levels."
            ]
        },
        "Vitamin K": {
            "title": "Vitamin K",
            "pairings": [
                {
                    "food1": "Kale",
                    "food2": "Olive Oil",
                    "description": "Vitamin K is fat-soluble, so pairing it with healthy fats improves absorption."
                },
                {
                    "food1": "Spinach",
                    "food2": "Avocado",
                    "description": "Vitamin K is fat-soluble, so pairing it with healthy fats improves absorption."
                },
                {
                    "food1": "Broccoli",
                    "food2": "Almonds",
                    "description": "Vitamin K is fat-soluble, so pairing it with healthy fats improves absorption."
                },
                {
                    "food1": "Brussels Sprouts",
                    "food2": "Sesame Seeds",
                    "description": "Vitamin K is fat-soluble, so pairing it with healthy fats improves absorption."
                },
                {
                    "food1": "Egg Yolks",
                    "food2": "Leafy Greens",
                    "description": "Vitamin K2 (found in animal products) is more bioavailable than K1 (found in plants)."
                }
            ],
            "how_pairings_work": "Vitamin K is fat-soluble, so pairing it with healthy fats improves absorption. Vitamin K2 (found in animal products) is more bioavailable than K1 (found in plants).",
            "avoid": [
                "Excess alcohol reduces Vitamin K levels.",
                "High doses of Vitamin E may interfere with Vitamin K absorption."
            ]
        },
        "Vitamin E": {
            "title": "Vitamin E",
            "pairings": [
                {
                    "food1": "Almonds",
                    "food2": "Dark Chocolate",
                    "description": "Vitamin E is fat-soluble and needs dietary fats for proper absorption."
                },
                {
                    "food1": "Sunflower Seeds",
                    "food2": "Avocado",
                    "description": "Vitamin E is fat-soluble and needs dietary fats for proper absorption."
                },
                {
                    "food1": "Sweet Potatoes",
                    "food2": "Olive Oil",
                    "description": "Vitamin E is fat-soluble and needs dietary fats for proper absorption."
                },
                {
                    "food1": "Nuts",
                    "food2": "Spinach",
                    "description": "Vitamin E is fat-soluble and needs dietary fats for proper absorption."
                },
                {
                    "food1": "Hazelnuts",
                    "food2": "Berries",
                    "description": "Antioxidants like Vitamin C help stabilize Vitamin E."
                }
            ],
            "how_pairings_work": "Vitamin E is fat-soluble and needs dietary fats for proper absorption. Antioxidants like Vitamin C help stabilize Vitamin E.",
            "avoid": [
                "Avoid frying Vitamin E-rich foods, as high heat destroys the nutrient.",
                "Too much Omega-6 (from processed oils) may reduce Vitamin E effectiveness."
            ]
        },
        "Vitamin A": {
            "title": "Vitamin A",
            "pairings": [
                {
                    "food1": "Carrots",
                    "food2": "Olive Oil",
                    "description": "Vitamin A is fat-soluble and needs healthy fats for absorption."
                },
                {
                    "food1": "Eggs",
                    "food2": "Spinach",
                    "description": "Vitamin A is fat-soluble and needs healthy fats for absorption."
                },
                {
                    "food1": "Mango",
                    "food2": "Yogurt",
                    "description": "Vitamin A is fat-soluble and needs healthy fats for absorption."
                },
                {
                    "food1": "Pumpkin seeds",
                    "food2": "Carrots",
                    "description": "Zinc in pumpkin seeds helps transport vitamin A."
                },

                {
                    "food1": "Sweet Potatoes",
                    "food2": "Walnuts",
                    "description": "Vitamin A is fat-soluble and needs healthy fats for absorption."
                },
                {
                    "food1": "Bell Peppers",
                    "food2": "Avocado",
                    "description": "Vitamin A is fat-soluble and needs healthy fats for absorption."
                }
            ],
            "how_pairings_work": "Vitamin A is fat-soluble and needs healthy fats for absorption. Beta-carotene from plants converts to active Vitamin A in the body.",
            "avoid": [
                "Low-fat diets hinder Vitamin A absorption.",
                "Excess alcohol depletes Vitamin A stores in the liver."
            ]
        },
        "Protein": {
            "title": "Protein",
            "pairings": [
                {
                    "food1": "Lentils",
                    "food2": "Rice",
                    "description": "Combining plant proteins creates a complete amino acid profile."
                },
                {
                    "food1": "Eggs",
                    "food2": "Cheese",
                    "description": "Healthy fats and probiotics enhance protein digestion and absorption."
                },
                {
                    "food1": "Chicken",
                    "food2": "Quinoa",
                    "description": "Healthy fats and probiotics enhance protein digestion and absorption."
                },
                {
                    "food1": "Tofu",
                    "food2": "Sesame Seeds",
                    "description": "Combining plant proteins creates a complete amino acid profile."
                },
                {
                    "food1": "Greek Yogurt",
                    "food2": "Almonds",
                    "description": "Healthy fats and probiotics enhance protein digestion and absorption."
                }
            ],
            "how_pairings_work": "Combining plant proteins creates a complete amino acid profile. Healthy fats and probiotics enhance protein digestion and absorption.",
            "avoid": [
                "Excess alcohol hinders protein synthesis.",
                "Too much fiber can interfere with protein digestion."
            ]
        },
        "Potassium": {
            "title": "Potassium",
            "pairings": [
                {
                    "food1": "Bananas",
                    "food2": "Peanut Butter",
                    "description": "Potassium helps regulate fluid balance, nerve signals, and muscle contractions."
                },
                {
                    "food1": "Avocados",
                    "food2": "Black Beans",
                    "description": "Potassium helps regulate fluid balance, nerve signals, and muscle contractions."
                },
                {
                    "food1": "Spinach",
                    "food2": "Sweet Potatoes",
                    "description": "Potassium helps regulate fluid balance, nerve signals, and muscle contractions."
                },
                {
                    "food1": "Coconut Water",
                    "food2": "Chia Seeds",
                    "description": "Potassium helps regulate fluid balance, nerve signals, and muscle contractions."
                },
                {
                    "food1": "Oranges",
                    "food2": "Yogurt",
                    "description": "Proper sodium-potassium balance supports heart health and blood pressure control."
                }
            ],
            "how_pairings_work": "Potassium helps regulate fluid balance, nerve signals, and muscle contractions. Proper sodium-potassium balance supports heart health and blood pressure control.",
            "avoid": [
                "Excess sodium reduces potassium effectiveness.",
                "Too much caffeine may deplete potassium levels."
            ]
        },
        "Fiber": {
            "title": "Fiber",
            "pairings": [
                {
                    "food1": "Oats",
                    "food2": "Chia Seeds",
                    "description": "Fiber promotes gut health by feeding beneficial bacteria."
                },
                {
                    "food1": "Apples",
                    "food2": "Almond Butter",
                    "description": "Fiber promotes gut health by feeding beneficial bacteria."
                },
                {
                    "food1": "Lentils",
                    "food2": "Tomatoes",
                    "description": "Fiber promotes gut health by feeding beneficial bacteria."
                },
                {
                    "food1": "Berries",
                    "food2": "Yogurt",
                    "description": "Fiber promotes gut health by feeding beneficial bacteria."
                },
                {
                    "food1": "Brown Rice",
                    "food2": "Black Beans",
                    "description": "Fiber promotes gut health by feeding beneficial bacteria."
                }
            ],
            "how_pairings_work": "Fiber promotes gut health by feeding beneficial bacteria. Soluble fiber slows sugar absorption, while insoluble fiber aids bowel movements.",
            "avoid": [
                "Low water intake can cause bloating with high-fiber diets.",
                "Excess processed foods reduce fiber benefits."
            ]
        },
        "Sodium": {
            "title": "Sodium",
            "pairings": [
                {
                    "food1": "Coconut Water",
                    "food2": "Sea Salt",
                    "description": "Sodium helps maintain hydration, nerve function, and muscle contractions."
                },
                {
                    "food1": "Avocado",
                    "food2": "Himalayan Salt",
                    "description": "Sodium helps maintain hydration, nerve function, and muscle contractions."
                },
                {
                    "food1": "Beets",
                    "food2": "Feta Cheese",
                    "description": "Sodium helps maintain hydration, nerve function, and muscle contractions."
                },
                {
                    "food1": "Bone Broth",
                    "food2": "Spinach",
                    "description": "Sodium helps maintain hydration, nerve function, and muscle contractions."
                },
                {
                    "food1": "Tomatoes",
                    "food2": "Olives",
                    "description": "Balancing sodium with potassium prevents high blood pressure."
                }
            ],
            "how_pairings_work": "Sodium helps maintain hydration, nerve function, and muscle contractions. Balancing sodium with potassium prevents high blood pressure.",
            "avoid": [
                "Excess sodium can lead to water retention and high blood pressure.",
                "Processed foods often contain unhealthy sodium levels."
            ]
        },
        "Phosphorus": {
            "title": "Phosphorus",
            "pairings": [
                {
                    "food1": "Salmon",
                    "food2": "Quinoa",
                    "description": "Phosphorus is crucial for bones, teeth, and energy metabolism."
                },
                {
                    "food1": "Eggs",
                    "food2": "Whole Wheat Toast",
                    "description": "Phosphorus is crucial for bones, teeth, and energy metabolism."
                },
                {
                    "food1": "Chicken",
                    "food2": "Pumpkin Seeds",
                    "description": "Phosphorus is crucial for bones, teeth, and energy metabolism."
                },
                {
                    "food1": "Yogurt",
                    "food2": "Sunflower Seeds",
                    "description": "Phosphorus works with calcium and vitamin D to maintain bone density."
                },
                {
                    "food1": "Lentils",
                    "food2": "Cheese",
                    "description": "Phosphorus is crucial for bones, teeth, and energy metabolism."
                }
            ],
            "how_pairings_work": "Phosphorus is crucial for bones, teeth, and energy metabolism. Works with calcium and vitamin D to maintain bone density.",
            "avoid": [
                "Excess phosphorus (especially from processed foods) can weaken bones.",
                "Too much soda interferes with calcium-phosphorus balance."
            ]
        },
        "Choline": {
            "title": "Choline",
            "pairings": [
                {
                    "food1": "Eggs",
                    "food2": "Spinach",
                    "description": "Choline is essential for neurotransmitter production and liver detox."
                },
                {
                    "food1": "Beef Liver",
                    "food2": "Avocado",
                    "description": "Choline is essential for neurotransmitter production and liver detox."
                },
                {
                    "food1": "Chicken",
                    "food2": "Broccoli",
                    "description": "Choline helps prevent fatty liver disease and supports brain function."
                },
                {
                    "food1": "Salmon",
                    "food2": "Brussels Sprouts",
                    "description": "Choline helps prevent fatty liver disease and supports brain function."
                },
                {
                    "food1": "Peanuts",
                    "food2": "Greek Yogurt",
                    "description": "Choline is essential for neurotransmitter production and liver detox."
                }
            ],
            "how_pairings_work": "Choline is essential for neurotransmitter production and liver detox. Helps prevent fatty liver disease and supports brain function.",
            "avoid": [
                "Choline deficiency may impair memory and liver function.",
                "Excess alcohol reduces choline metabolism."
            ]
        },
        "Iodine": {
            "title": "Iodine",
            "pairings": [
                {
                    "food1": "Seaweed",
                    "food2": "Sesame Seeds",
                    "description": "Iodine is essential for thyroid hormone production."
                },
                {
                    "food1": "Fish",
                    "food2": "Garlic",
                    "description": "Iodine is essential for thyroid hormone production."
                },
                {
                    "food1": "Eggs",
                    "food2": "Dairy",
                    "description": "Iodine works with selenium to regulate metabolism and energy levels."
                },
                {
                    "food1": "Shrimp",
                    "food2": "Brown Rice",
                    "description": "Iodine works with selenium to regulate metabolism and energy levels."
                },
                {
                    "food1": "Strawberries",
                    "food2": "Yogurt",
                    "description": "Iodine is essential for thyroid hormone production."
                }
            ],
            "how_pairings_work": "Iodine is essential for thyroid hormone production. Works with selenium to regulate metabolism and energy levels.",
            "avoid": [
                "Too much cruciferous vegetables (raw) may hinder iodine absorption.",
                "Fluoride and bromine compete with iodine uptake."
            ]
        }
    }
    
    const [selectedNutrient, setSelectedNutrient] = useState("");

    const handleChange = (event) => {
        setSelectedNutrient(event.target.value);
    };

    const nutrient = nutrientPairings[selectedNutrient];

    return (
        <div className="nutrient-page">
            <div className="disease-selector1">
                <label htmlFor="disease" className="disease-label" style={{ fontWeight: 'bold' }}>
                    Choose a Nutrient-Specific Pairing:
                </label>
                
                <p className="disclaimer">
                    <strong>Select a nutrient</strong> to explore the ideal food pairings. Each nutrient is followed by a list of foods that complement its absorption and effectiveness, including options for veg, non-veg, and vegan diets. This interactive guide aims to provide helpful insights into optimizing nutrition through thoughtful food combinations.
                </p>

                <select
                    id="disease"
                    className="disease-select"
                    onChange={handleChange}
                    value={selectedNutrient}
                >
                    <option value="" disabled>
                        -- Select Nutrient --
                    </option>
                    {Object.keys(nutrientPairings).map((nutrientKey) => (
                        <option key={nutrientKey} value={nutrientKey}>
                            {nutrientPairings[nutrientKey].title}
                        </option>
                    ))}
                </select>
                <br></br>
                <br></br>

                {nutrient && (
                    <><div className="description">
                        <h2><b>{nutrient.title} Absorption</b></h2>

                        <ul>
                            {nutrient.pairings.map((pairing, index) => (
                                <li key={index}>
                                    <strong><b>{pairing.food1}</b></strong> + <strong><b>{pairing.food2}</b></strong>: {pairing.description}
                                </li>
                            ))}
                        </ul>

                        <h3>How These Pairings Work:</h3>
                        <ul>
                            <li>{nutrient.how_pairings_work}</li>
                        </ul>

                        <h3>What to Avoid:</h3>
                        <ul>
                            {nutrient.avoid.map((avoidance, index) => (
                                <li key={index}>{avoidance}</li>
                            ))}
                        </ul>
                        </div>
                    </>
                )}
           
            </div>
        </div>
    );
};

export default NutrientSpecificPairings;
