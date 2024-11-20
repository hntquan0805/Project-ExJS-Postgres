'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
      id: '1',
      name: 'Apple',
      price: 1.99,
      description: 'Fresh and juicy apple',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '2',
      name: 'Banana',
      price: 0.99,
      description: 'Sweet and nutritious banana',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '3',
      name: 'Orange',
      price: 1.49,
      description: 'Citrusy and refreshing orange',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '4',
      name: 'Grapes',
      price: 2.99,
      description: 'Plump and delicious grapes',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '5',
      name: 'Watermelon',
      price: 4.99,
      description: 'Juicy and hydrating watermelon',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '6',
      name: 'Strawberries',
      price: 3.49,
      description: 'Sweet and tangy strawberries',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '7',
      name: 'Pineapple',
      price: 2.99,
      description: 'Tropical and refreshing pineapple',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '8',
      name: 'Mango',
      price: 2.49,
      description: 'Exotic and flavorful mango',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '9',
      name: 'Peach',
      price: 1.79,
      description: 'Sweet and juicy peach',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '10',
      name: 'Pear',
      price: 1.49,
      description: 'Crisp and refreshing pear',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '11',
      name: 'Cherry',
      price: 2.99,
      description: 'Tart and flavorful cherry',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '12',
      name: 'Plum',
      price: 1.99,
      description: 'Juicy and succulent plum',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '13',
      name: 'Kiwi',
      price: 0.99,
      description: 'Tropical and tangy kiwi',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '14',
      name: 'Pomegranate',
      price: 3.99,
      description: 'Seedy and antioxidant-rich pomegranate',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '15',
      name: 'Blueberries',
      price: 2.49,
      description: 'Small and nutrient-packed blueberries',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '16',
      name: 'Raspberry',
      price: 1.99,
      description: 'Sweet and tangy raspberry',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '17',
      name: 'Blackberry',
      price: 2.49,
      description: 'Juicy and flavorful blackberry',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '18',
      name: 'Mango',
      price: 2.99,
      description: 'Exotic and tropical mango',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '19',
      name: 'Papaya',
      price: 3.49,
      description: 'Buttery and tropical papaya',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '20',
      name: 'Coconut',
      price: 2.99,
      description: 'Creamy and tropical coconut',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '21',
      name: 'Avocado',
      price: 1.99,
      description: 'Creamy and nutritious avocado',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '22',
      name: 'Grapefruit',
      price: 1.49,
      description: 'Tangy and refreshing grapefruit',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '23',
      name: 'Lemon',
      price: 0.99,
      description: 'Sour and citrusy lemon',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '24',
      name: 'Lime',
      price: 0.99,
      description: 'Tart and zesty lime',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '25',
      name: 'Cantaloupe',
      price: 3.99,
      description: 'Sweet and juicy cantaloupe',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '26',
      name: 'Honeydew',
      price: 3.99,
      description: 'Mild and refreshing honeydew',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '27',
      name: 'Apricot',
      price: 1.99,
      description: 'Sweet and velvety apricot',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '28',
      name: 'Nectarine',
      price: 2.49,
      description: 'Juicy and aromatic nectarine',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '29',
      name: 'Cranberry',
      price: 2.99,
      description: 'Tart and tangy cranberry',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '30',
      name: 'Fig',
      price: 1.99,
      description: 'Sweet and chewy fig',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '31',
      name: 'Guava',
      price: 2.99,
      description: 'Tropical and fragrant guava',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '32',
      name: 'Passion Fruit',
      price: 3.49,
      description: 'Tangy and tropical passion fruit',
      category: ['snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '33',
      name: 'Pizza Margherita',
      price: 12.99,
      description: 'Classic Italian tomato and cheese pizza',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '34',
      name: 'Sushi Roll',
      price: 8.99,
      description: 'Fresh salmon and avocado roll',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '35',
      name: 'Beef Burger',
      price: 9.99,
      description: 'Juicy beef patty with fresh toppings',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '36',
      name: 'Caesar Salad',
      price: 7.99,
      description: 'Crisp romaine with classic dressing',
      category: ['lunch', 'dinner', 'salad']
      },
      {
      id: '37',
      name: 'Pasta Carbonara',
      price: 11.99,
      description: 'Creamy pasta with bacon and eggs',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '38',
      name: 'Chicken Wings',
      price: 8.99,
      description: 'Spicy buffalo-style wings',
      category: ['appetizer', 'snack']
      },
      {
      id: '39',
      name: 'Greek Yogurt',
      price: 3.99,
      description: 'Creamy protein-rich yogurt',
      category: ['breakfast', 'snack', 'vegetarian', 'gluten_free']
      },
      {
      id: '40',
      name: 'Chocolate Cake',
      price: 5.99,
      description: 'Rich dark chocolate layer cake',
      category: ['dessert']
      },
      {
      id: '41',
      name: 'Fish Tacos',
      price: 10.99,
      description: 'Grilled fish with fresh salsa',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '42',
      name: 'Pad Thai',
      price: 11.99,
      description: 'Traditional Thai noodle dish',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '43',
      name: 'French Fries',
      price: 3.99,
      description: 'Crispy golden potato fries',
      category: ['snack', 'side_dish', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '44',
      name: 'Ice Cream',
      price: 4.99,
      description: 'Vanilla bean ice cream',
      category: ['dessert']
      },
      {
      id: '45',
      name: 'Chicken Soup',
      price: 6.99,
      description: 'Homestyle chicken noodle soup',
      category: ['lunch', 'dinner', 'soup']
      },
      {
      id: '46',
      name: 'Spring Roll',
      price: 5.99,
      description: 'Fresh vegetable spring rolls',
      category: ['appetizer', 'snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '47',
      name: 'Greek Salad',
      price: 8.99,
      description: 'Mediterranean style with feta',
      category: ['lunch', 'dinner', 'salad', 'vegetarian']
      },
      {
      id: '48',
      name: 'Nachos',
      price: 7.99,
      description: 'Loaded cheese and bean nachos',
      category: ['appetizer', 'snack', 'vegetarian']
      },
      {
      id: '49',
      name: 'Smoothie Bowl',
      price: 6.99,
      description: 'Acai berry and fruit bowl',
      category: ['breakfast', 'snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '50',
      name: 'Ramen',
      price: 9.99,
      description: 'Japanese style pork ramen',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '51',
      name: 'Garlic Bread',
      price: 3.99,
      description: 'Toasted bread with garlic butter',
      category: ['appetizer', 'side_dish', 'vegetarian']
      },
      {
      id: '52',
      name: 'Hummus',
      price: 4.99,
      description: 'Creamy chickpea dip',
      category: ['appetizer', 'snack', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '53',
      name: 'Fried Rice',
      price: 8.99,
      description: 'Asian style vegetable rice',
      category: ['lunch', 'dinner', 'main_course', 'vegetarian', 'gluten_free']
      },
      {
      id: '54',
      name: 'Cheesecake',
      price: 5.99,
      description: 'Classic New York cheesecake',
      category: ['dessert']
      },
      {
      id: '55',
      name: 'Curry',
      price: 11.99,
      description: 'Spicy Indian chicken curry',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '56',
      name: 'Onion Rings',
      price: 4.99,
      description: 'Crispy battered onion rings',
      category: ['appetizer', 'snack', 'vegetarian']
      },
      {
      id: '57',
      name: 'Burrito',
      price: 8.99,
      description: 'Bean and cheese burrito',
      category: ['lunch', 'dinner', 'main_course', 'vegetarian']
      },
      {
      id: '58',
      name: 'Pancakes',
      price: 6.99,
      description: 'Fluffy buttermilk pancakes',
      category: ['breakfast', 'vegetarian']
      },
      {
      id: '59',
      name: 'Mozzarella Sticks',
      price: 5.99,
      description: 'Breaded cheese sticks',
      category: ['appetizer', 'snack', 'vegetarian']
      },
      {
      id: '60',
      name: 'Pho',
      price: 10.99,
      description: 'Vietnamese beef noodle soup',
      category: ['lunch', 'dinner', 'soup']
      },
      {
      id: '61',
      name: 'Apple Pie',
      price: 4.99,
      description: 'Classic American apple pie',
      category: ['dessert']
      },
      {
      id: '62',
      name: 'Falafel',
      price: 7.99,
      description: 'Crispy chickpea patties',
      category: ['lunch', 'dinner', 'main_course', 'vegetarian', 'vegan', 'gluten_free', 'dairy_free']
      },
      {
      id: '63',
      name: 'Club Sandwich',
      price: 8.99,
      description: 'Triple-decker turkey sandwich',
      category: ['lunch', 'dinner', 'main_course']
      },
      {
      id: '64',
      name: 'Tiramisu',
      price: 6.99,
      description: 'Italian coffee dessert',
      category: ['dessert']
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
