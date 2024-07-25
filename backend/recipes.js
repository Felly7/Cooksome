const Recipe = require('./models/Recipe');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

 connectDB();

 const recipes = [
  {
    id: '1',
    title: 'Jollof',
    image: 'http://localhost:3000:/1.jpg',
    cookingMinutes: '45-60',
    dairyFree: 'false',
    dishType: ['lunch', 'main course', 'main dish', 'dinner'], // Array of strings
    ingredients: [
      {
        id: '1',
        originalName: 'Long-grain rice',
        unit: 'cups',
        amount: 2-3,
      },
      {
        id: '2',
        originalName: 'Onions',
        unit: 'pieces',
        amount: 2,
      },
      {
        id: '3',
        originalName: 'Oil',
        unit: 'tbsp',
        amount: 4-8,
      },
      {
        id: '4',
        originalName: 'Garlic',
        unit: 'cloves',
        amount: 2,
      },
      {
        id: '5',
        originalName: 'Fresh ginger',
        unit: 'inch',
        amount: 1,
      },
      {
        id: '6',
        originalName: 'Tomato puree',
        unit: 'tbsp',
        amount: 2-3,
      },
      {
        id: '7',
        originalName: 'Fresh tomatoes',
        unit: 'pieces',
        amount: 4-6,
      },
      {
        id: '8',
        originalName: 'Seasoning',
        unit: 'cube',
        amount: 1,
      },
      {
        id: '9',
        originalName: 'Bell pepper',
        unit: 'piece',
        amount: 1,
      },
      {
        id: '10',
        originalName: 'Carrots',
        unit: 'pieces',
        amount: 1-2,
      },

    ],
    CookingProcedure: '1. Take a heavy-bottomed pan, turn on the heat, and add the cooking oil.2. Dice your onions. Add the diced onion and fry until golden.3. Mince your garlic and grate your ginger. Add the garlic and ginger and stir for a few seconds.4. Add the tomato puree or paste and fry for under a minute.5. Blend your fresh tomatoes, chop your bell pepper.6. Add the blended tomatoes and chopped bell pepper.7. Add salt and seasoning. Taste to see if okay.8. Cook the sauce for about 15 to 20 minutes. Stir continuously to prevent burning.9. Allow the stew to continue cooking. Meanwhile, rinse the rice and soak it in hot (boiled) water.10. Strain the soaked rice and add it to the pot. Adjust the salt and seasoning. (if need be)11.  Add enough water to cook the rice. Bring to a boil, then lower the heat to simmer.12.  Add the carrots when the moisture has nearly gone.13. Cover the pot with clean napkin to lock in moisture and add natural cooking pressure. Next close the pot with an airtight lid and reduce the heat to low. Allow to cook gently for 20 minutes.14. Note the bottom of the pot will have a layer of caramelised Jollof with concentrated flavour. Take off the heat, and serve hot with any protein of your choice',
  },
{
    id: '2',
    title: ' Banku ',
    image: 'http://localhost:3000:/2.jpg',
    cookingMinutes: '40-60mins',
    dairyFree: 'false',
    dishType: ['lunch', 'main course', 'main dish', 'dinner'],
    ingredients: [
      {
        id: '1',
        originalName: 'corn dough',
        unit: 'cups',
        amount: 2-3,
      },
      {
        id: '2',
        originalName: 'Cassava dough',
        unit: 'cups',
        amount: 1,
      },
      {
        id: '3',
        originalName: 'Salt',
        unit: 'tbsp',
        amount: 2,
      },
      {
        id: '4',
        originalName: 'Water',
        unit: 'cups',
        amount: 2-4,
      },
    ],
    CookingProcedure: '1. Mix 1 cup of water and cassava dough in a pan. Pour the mixture through a sieve to remove any residue or unmilled pieces of cassava.2. Add the corn dough to the cassava dough.3. Add the salt and mix thoroughly until the mixture becomes thin and smooth. Put the mixture in acooking pot.4.  Place the cooking pot over medium fire and continue stirring. The banku will harden as it continues to cook. Continue stirring the mixture to avoid the formation of lumps.5.  Add about one cup of water to the mixture as you continue stirring. Next, cover the pot for 5minutes to allow the Banku to cook. You can turn it over a few times to ensure even cooking6.  When ready, shape it into a small ball using a spoon. Alternatively, scoop the preferred amountinto a wet bowl and swirl around to form balls.  ',
  },
{
    id: '3',
    title: 'Garden Egg Stew  ',
    image: 'http://localhost:3000:/3.jpg',
    cookingMinutes: '20-30mins',
    dairyFree: 'false',
    dishType: ['lunch', 'main course', 'main dish', 'dinner'],
    ingredients: [
      {
        id: '1',
        originalName: 'Garden eggs',
        unit: 'pieces',
        amount: 5-20,
      },
      {
        id: '2',
        originalName: 'Garlic',
        unit: 'cloves',
        amount: 1-3,
      },
      {
        id: '3',
        originalName: 'Onions',
        unit: 'pieces',
        amount: 3-5,
      },
      {
        id: '4',
        originalName: 'Fresh Tomatoes',
        unit: 'pieces',
        amount: 4-5,
      },
      {
        id: '5',
        originalName: 'Medium sized Tomato paste',
        unit: 'sachet',
        amount: 1,
      },
      {
        id: '6',
        originalName: 'Red pepper ',
        unit: 'pieces',
        amount: 6-8,
      },
      {
        id: '7',
        originalName: 'Thumb sized fresh ginger',
        unit: 'pieces',
        amount: 1,
      },
      {
        id: '8',
        originalName: 'Oil',
        unit: 'tbsp',
        amount: 5-8,
      },
      {
        id: '9',
        originalName: 'Salt ',
        unit: 'tbsp',
        amount: 2-3,
      },
{
        id: '10',
        originalName: 'Bell pepper ',
        unit: 'pieces',
        amount: 1-2,
      },
{
        id: '11',
        originalName: 'Curry powder',
        unit: 'tbsp',
        amount: 0.5,
      },
    ],
    CookingProcedure: '1.  Clean the garden eggs under running water. Cut the tops, then cut them in halves.2.  Place the halved garden eggs in a saucepan, add water, and boil for boil until soft. Set aside to cool down.3.  Place another saucepan on medium heat, add oil, and sauté the diced onions. Meanwhile, blend the second onion, garlic, ginger, tomatoes, and bell pepper.4.  Add the tomato paste to the sautéd onions and allow to cook for about 2-3 minutes. 5.  Add the blended mixture and let everything cook down on medium heat for about 10 mins.6.  Add a small amount curry powder and continue cooking for 10 minutes or until thick. Meanwhile, remove the seeds from the garden eggs (optional).7.  Dice the garden eggs, then add them to the sauce. Lower the heat and let the garden eggs simmer for about 5 minutes to absorb the flavour.8. Add appreciable amount of salt to the sauce. Taste to see if okay. Add sardine (optional)9. Turn off the heat and serve with boiled yams or plantains.',
  },
{
    id: '4',
    title: 'Waakye',
    image: 'http://localhost:3000:/4.jpg',
    cookingMinutes: '60',
    dairyFree: 'false',
    dishType: ['lunch', 'main course', 'main dish', 'dinner'],
    ingredients: [
      {
        id: '1',
        originalName: 'Rice',
        unit: 'cups',
        amount: 2-3,
      },
      {
        id: '2',
        originalName: 'Black-eyed beans',
        unit: 'cups',
        amount: 1-1.5,
      },
      {
        id: '3',
        originalName: 'Waakye leaves/ Red sorghum leaf sheaths',
        unit: 'leaves',
        amount: 6-8,
      },
      {
        id: '4',
        originalName: 'Salt',
        unit: 'tbsp',
        amount: 2-3,
      },
    ],
    CookingProcedure: '1. Sort the beans and wash them. Place them in a cooker.2.  Wash the waakye leaves and add them to the cooker. Add water and pressure cook until the beans are fully cooked.3. Turn off the heat and allow it to cool for about 5 minutes. 4. Pour the beans with the waakye leaves and cooking liquid into another pot. Wash the rice and add it to the pot. Add more water, if needed, so there is enough to cook the rice. Add some salt and cover the pot.5. Turn on the heat and allow the rice to cook 6. Turn off the heat, remove the waakye leaves, and serve hot. Many people serve waakye with beef stew, shito, gari, spaghetti, lettuce and any protein of their choice.',
  },
  {
    id: '5',
    title: 'Braised Rice with Red Hot pepper',
    image: 'http://localhost:3000:/5.jpg',
    cookingMinutes: '25-40',
    dairyFree: 'false',
    dishType: ['lunch', 'main course', 'main dish', 'dinner'],
    ingredients: [
      {
        id: '1',
        originalName: 'Rice',
        unit: 'cups',
        amount: 2-3,
      },
      {
        id: '2',
        originalName: 'Cooking oil',
        unit: 'tbsp',
        amount: 3-5,
      },
      {
        id: '3',
        originalName: 'Onions',
        unit: 'pieces',
        amount: 1-2,
      },
      {
        id: '4',
        originalName: 'Salt',
        unit: 'tbsp',
        amount: 1-1.5,
      },
      {
        id: '5',
        originalName: 'Pepper',
        unit: 'pieces',
        amount: 4-6,
      },

    ],
    CookingProcedure: '1. 2. 3. 4. .5. ',
  },
  // {
  // id: '',
  // title: '',
  // image: 'http://localhost:3000:/.jpg',
  // cookingMinutes: '',
  // dairyFree: 'false',
  // dishType: ['lunch', 'main course', 'main dish', 'dinner'],
  // ingredients: [
  //   {
  //     id: '1',
  //     originalName: '',
  //     unit: '',
  //     amount: ,
  //   },
  //   {
  //     id: '2',
  //     originalName: '',
  //     unit: '',
  //     amount: ,
  //   },
  //   {
  //     id: '3',
  //     originalName: '',
  //     unit: '',
  //     amount: 1-2,
  //   },
  

 ]

 const saveRecipes = async () => {
  try {
    await Recipe.insertMany(recipes);
    console.log('Recipes saved!');
  } catch (error) {
    console.error('Error saving recipes:', error);
  }
};

saveRecipes();