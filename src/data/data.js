import { v4 as uuidv4 } from "uuid";
export const recipes = [
  {
    name: "Crock Pot Roast",
    id: uuidv4,
    cusine: "contental",
    ingredients: [
      {
        quantity: "1",
        name: " beef roast",
        type: "Meat",
      },
      {
        quantity: "1 package",
        name: "brown gravy mix",
        type: "Baking",
      },
      {
        quantity: "1 package",
        name: "dried Italian salad dressing mix",
        type: "Condiments",
      },
      {
        quantity: "1 package",
        name: "dry ranch dressing mix",
        type: "Condiments",
      },
      {
        quantity: "1/2 cup",
        name: "water",
        type: "Drinks",
      },
    ],
    steps: [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours.",
    ],
    timers: [0, 0, 0, 420],
    imageURL:
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    originalURL: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
  },
  {
    name: "Roasted Asparagus",
    id: uuidv4,
    cusine: "continental",
    ingredients: [
      {
        quantity: "1 lb",
        name: " asparagus",
        type: "Produce",
      },
      {
        quantity: "1 1/2 tbsp",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "1/2 tsp",
        name: "kosher salt",
        type: "Baking",
      },
    ],
    steps: [
      "Preheat oven to 425°F.",
      "Cut off the woody bottom part of the asparagus spears and discard.",
      'With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.",string.", and if you eat asparagus you know what I mean by that).',
      "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
      "Sprinkle with salt.",
      "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
      "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
      "They should be tender when pierced with the tip of a knife.",
      "The tips of the spears will get very brown but watch them to prevent burning.",
      "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.",
    ],
    timers: [0, 0, 0, 0, 0, 0, 10, 0, 0, 0],
    imageURL:
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
    originalURL: "http://www.food.com/recipe/roasted-asparagus-50847",
  },
  {
    name: "Curried Lentils and Rice",
    id: uuidv4(),
    cusine: "Asian",
    ingredients: [
      {
        quantity: "1 quart",
        name: "beef broth",
        type: "Misc",
      },
      {
        quantity: "1 cup",
        name: "dried green lentils",
        type: "Misc",
      },
      {
        quantity: "1/2 cup",
        name: "basmati rice",
        type: "Misc",
      },
      {
        quantity: "1 tsp",
        name: "curry powder",
        type: "Condiments",
      },
      {
        quantity: "1 tsp",
        name: "salt",
        type: "Condiments",
      },
    ],
    steps: [
      "Bring broth to a low boil.",
      "Add curry powder and salt.",
      "Cook lentils for 20 minutes.",
      "Add rice and simmer for 20 minutes.",
      "Enjoy!",
    ],
    timers: [0, 0, 20, 20, 0],
    imageURL:
      "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg",
  },
];
