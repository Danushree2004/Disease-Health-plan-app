import React, { useState } from 'react';
import './MythsAndFacts.css';
import { FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const MythsAndFacts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const mythsAndFacts = [
    {
      myth: "Eating raw vegetables is always healthier than cooked vegetables.",
      fact: "Cooking some vegetables (like tomatoes and carrots) increases the bioavailability of nutrients like lycopene and beta-carotene. Some vitamins like vitamin C are heat-sensitive though.",
    },
    {
      myth: "Drinking milk is the best way to get strong bones.",
      fact: "Milk contains calcium, but it needs vitamin D and K for proper absorption. Pairing dairy with salmon or kale enhances bone health.",
    },
    {
      myth: "Spinach is the best source of iron.",
      fact: "Spinach contains non-heme iron, which is harder to absorb. Pair it with vitamin C-rich foods like lemon or bell peppers for better absorption.",
    },
    {
      myth: "All fats are bad for your health.",
      fact: "Healthy fats like olive oil, avocado, and nuts are essential for absorbing fat-soluble vitamins. Trans fats should be avoided, but healthy fats are beneficial.",
    },
    {
      myth: "Drinking tea or coffee with meals has no effect on nutrient absorption.",
      fact: "Tannins and polyphenols in tea and coffee can reduce iron absorption. It's better to consume them between meals.",
    },
    {
      myth: "Calcium and iron can be taken together for maximum benefit.",
      fact: "Calcium inhibits iron absorption. Take them at separate meals to maximize benefit.",
    },
    {
      myth: "Vitamin C is only good for immunity.",
      fact: "Vitamin C also aids iron absorption, collagen production, and acts as a powerful antioxidant.",
    },
    {
      myth: "You should eat protein alone for better digestion.",
      fact: "Pairing protein with fiber (e.g., chicken and veggies) helps with digestion and stable blood sugar levels.",
    },
    {
      myth: "Bananas and milk make the best post-workout meal.",
      fact: "Add a healthy fat source like peanut butter to enhance recovery and sustained energy.",
    },
    {
      myth: "More supplements mean better nutrient absorption.",
      fact: "Whole foods provide better synergy. Excessive supplements can be harmful—especially vitamins A and E.",
    },
    {
      myth: "You should always eat fruit on an empty stomach.",
      fact: "While fruits digest quickly, pairing them with protein or healthy fats sustains energy and balances blood sugar.",
    },
    {
      myth: "Carrots are the best source of vitamin A.",
      fact: "Carrots contain beta-carotene, which must be converted. Liver and eggs provide preformed vitamin A, which is more bioavailable.",
    },
    {
      myth: "Cooking garlic destroys its health benefits.",
      fact: "Let chopped garlic sit for 10 mins before cooking to preserve allicin, its active compound.",
    },
    {
      myth: "Dairy is the only good source of calcium.",
      fact: "Leafy greens, tofu, almonds, and sesame seeds are excellent non-dairy calcium sources.",
    },
    {
      myth: "More protein means better muscle growth.",
      fact: "The body can only absorb so much. Combine with healthy carbs for better muscle recovery.",
    },
    {
      myth: "Citrus fruits erode tooth enamel, so avoid them.",
      fact: "Rinse your mouth with water after eating citrus to protect enamel while still gaining their benefits.",
    },
    {
      myth: "Eating too many eggs raises cholesterol levels dangerously.",
      fact: "Eggs don’t significantly raise cholesterol in most people. Pair with fiber-rich foods to boost heart health.",
    },
    {
      myth: "You should drink water while eating for better digestion.",
      fact: "Drinking large amounts of water may dilute digestive juices. Sip small amounts or hydrate before/after meals.",
    },
    {
      myth: "Nuts should be avoided because they are high in fat.",
      fact: "Nuts contain heart-healthy fats, fiber, and protein. Eaten in moderation, they support weight and nutrient absorption.",
    },
    {
      myth: "Frozen fruits and vegetables are less nutritious.",
      fact: "Frozen produce is picked at peak ripeness and can retain more nutrients than fresh produce that sits too long.",
    },
  ];

  return (
    <div className="myths-facts-container">
      <h1>🧠 Myths vs Facts</h1>

      <p className="disclaimer">
        <strong>📢 </strong> Click a myth to reveal the fact. This interactive guide helps debunk health & nutrition myths!
      </p>

      <div className="myth-fact-list">
        {mythsAndFacts.map((item, index) => (
          <div
            key={index}
            className={`myth-fact-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleActive(index)}
          >
            <div className="myth">
              <FaLightbulb className="icon myth-icon" />
              <strong>Myth:</strong> {item.myth}
            </div>
            {activeIndex === index && (
              <div className="fact">
                <FaCheckCircle className="icon fact-icon" />
                <strong>Fact:</strong> {item.fact}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MythsAndFacts;