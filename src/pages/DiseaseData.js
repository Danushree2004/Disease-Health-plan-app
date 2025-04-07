const diseaseData = [
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
      name: "PCOD(Polycystic Ovarian Disorder)",
      vegetarian_pairings: [
        { foods: ["Brown Rice", "Leafy Greens"], benefit: "Helps insulin resistance." }
      ],
      non_vegetarian_pairings: [
        { foods: ["Eggs", "Vegetables"], benefit: "Supports hormone balance." }
      ],
      vegan_pairings: [
        { foods: ["Tofu", "Avocado"], benefit: "Supports healthy fats and hormones." }
      ]
    }
  ];
  
  export default diseaseData;
  