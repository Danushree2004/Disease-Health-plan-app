import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a balanced diet?",
      answer: "A balanced diet includes a variety of foods in the right proportions, and enough nutrients and calories to maintain health, energy, and wellbeing."
    },
    {
      question: "How much water should I drink daily?",
      answer: "Generally, 8–10 cups (around 2–2.5 liters) of water a day is recommended, but it varies based on climate, activity level, and individual needs."
    },
    {
      question: "Is skipping breakfast bad?",
      answer: "Skipping breakfast may lead to overeating later in the day and affect metabolism. A healthy breakfast can boost energy and concentration."
    },
    {
      question: "Are carbs bad for weight loss?",
      answer: "Not necessarily. Whole carbs like fruits, veggies, and grains provide essential energy and fiber. Avoid refined carbs like sugar and white bread."
    },
    {
      question: "Is snacking unhealthy?",
      answer: "Smart snacking with fruits, nuts, or yogurt can be healthy. Overeating processed snacks may lead to weight gain and nutrient imbalance."
    }
  ];

  return (
    <div className="faq-container">
      <h1>🙋 Frequently Asked Questions</h1>
      <p className="faq-disclaimer">
        <FaQuestionCircle className="icon" /> Click on a question to view the answer.
      </p>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
