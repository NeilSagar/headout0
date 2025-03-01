import destinationModel from "../models/mongodb/Destination.js";
import questionModel from "../models/mongodb/Question.js";

const data = [
    {destName: "Venice", funFacts: ["Built on 118 islands.", "Gondolas must be painted black by law."]},
    {destName: "Amsterdam", funFacts: ["Has more bicycles than people.", "Built on wooden stilts."]},
    {destName: "Barcelona", funFacts: ["Sagrada Familia is still under construction.", "Has the largest football stadium in Europe."]},
    {destName: "Istanbul", funFacts: ["The only city on two continents.", "Was once called Byzantium and Constantinople."]},
    {destName: "Vienna", funFacts: ["Home to the world’s oldest zoo.", "Coffee houses are UNESCO cultural heritage."]},
    {destName: "Stockholm", funFacts: ["Built on 14 islands.", "Home to the Nobel Prize."]},
    {destName: "Lisbon", funFacts: ["Has the world's oldest operating bookstore.", "Built on seven hills like Rome."]},
    {destName: "Prague", funFacts: ["Has the world’s oldest working astronomical clock.", "Nicknamed ‘City of a Hundred Spires’."]},
    {destName: "Warsaw", funFacts: ["85% of the city was destroyed in WWII.", "Has one of the world's tallest clock towers."]},
    {destName: "Copenhagen", funFacts: ["Home to the world's oldest amusement park.", "Bicycles outnumber cars."]},
    {destName: "Brussels", funFacts: ["Birthplace of the Smurfs.", "Home to the EU headquarters."]},
    {destName: "Edinburgh", funFacts: ["Has an underground city.", "Hosts the world’s largest arts festival."]},
    {destName: "Dublin", funFacts: ["Guinness beer originated here.", "Has more than 750 pubs."]},
    {destName: "Zurich", funFacts: ["One of the world’s most expensive cities.", "Has over 1,200 drinking fountains."]},
    {destName: "Helsinki", funFacts: ["Has more saunas than cars.", "One of the world's happiest cities."]},
    {destName: "Oslo", funFacts: ["Has a sculpture park dedicated to one artist.", "Home to the Nobel Peace Prize ceremony."]},
    {destName: "Budapest", funFacts: ["Has the world’s largest thermal bath system.", "Divided into Buda and Pest."]},
    {destName: "Athens", funFacts: ["One of the world's oldest cities.", "Birthplace of democracy."]},
    {destName: "Sofia", funFacts: ["One of Europe’s cheapest capitals.", "Has natural hot springs in the city center."]},
    {destName: "Belgrade", funFacts: ["One of the oldest cities in Europe.", "Has more floating nightclubs than any other city."]},
    {destName: "Hanoi", funFacts: ["Has the world's longest mosaic wall.", "Home to over 600 temples and pagodas."]},
    {destName: "Jakarta", funFacts: ["Has no subway system.", "Sinks by up to 25 cm per year."]},
    {destName: "Manila", funFacts: ["One of the most densely populated cities.", "Jeepneys are the main mode of transport."]},
    {destName: "Kuala Lumpur", funFacts: ["Home to the Petronas Twin Towers.", "Has the world’s tallest twin skyscrapers."]},
    {destName: "Singapore", funFacts: ["Has a night zoo, the first in the world.", "Chewing gum is banned."]},
    {destName: "Taipei", funFacts: ["Has one of the world’s fastest elevators.", "Night markets are an essential part of life."]},
    {destName: "Shanghai", funFacts: ["Has the world’s fastest train.", "The Bund features historic European buildings."]},
    {destName: "Hong Kong", funFacts: ["Has the most skyscrapers in the world.", "Home to the world’s longest outdoor escalator."]},
    {destName: "Delhi", funFacts: ["Has the largest spice market in Asia.", "India Gate was inspired by the Arc de Triomphe."]},
    {destName: "Lahore", funFacts: ["Known as the ‘Heart of Pakistan.’", "Home to Badshahi Mosque, one of the largest in the world."]},
    {destName: "Karachi", funFacts: ["Pakistan’s largest city.", "Home to the world’s largest deep-sea port."]},
    {destName: "Riyadh", funFacts: ["Has the world’s largest camel market.", "The Kingdom Tower has a sky bridge."]},
    {destName: "Tehran", funFacts: ["Located near one of the world's highest volcanoes.", "Home to the world’s largest collection of Persian carpets."]},
    {destName: "Casablanca", funFacts: ["One of Africa’s busiest ports.", "Has the third-largest mosque in the world."]},
    {destName: "Nairobi", funFacts: ["Has a national park inside the city.", "Known as the ‘Green City in the Sun.’"]},
    {destName: "Lagos", funFacts: ["Africa’s most populous city.", "Has one of the world’s busiest ports."]},
    {destName: "Johannesburg", funFacts: ["Has the world’s largest urban forest.", "Built on the world’s largest gold deposit."]},
    {destName: "Buenos Aires", funFacts: ["Has the widest avenue in the world.", "Tango originated here."]},
    {destName: "Lima", funFacts: ["The only capital in South America on the Pacific Ocean.", "Has the largest fountain complex in the world."]},
    {destName: "Santiago", funFacts: ["Surrounded by the Andes Mountains.", "Has the tallest building in South America."]},
    {destName: "Bogotá", funFacts: ["Has the most extensive bike path network in Latin America.", "Located at an altitude of 2,640 meters."]},
    {destName: "Caracas", funFacts: ["Home to the world's tallest slum.", "One of the most oil-rich cities."]},
    {destName: "Mexico City", funFacts: ["Built on a lake and is sinking.", "Has the second-highest number of museums in the world."]},
    {destName: "Guadalajara", funFacts: ["The birthplace of mariachi music.", "Home to Mexico’s largest indoor market."]},
    {destName: "Monterrey", funFacts: ["One of Mexico’s wealthiest cities.", "Home to the world's second-largest square."]},
    {destName: "Toronto", funFacts: ["More than 140 languages are spoken here.", "Has the largest underground shopping mall."]},
    {destName: "Montreal", funFacts: ["Has an underground city.", "Has the highest number of restaurants per capita in Canada."]},
    {destName: "Vancouver", funFacts: ["One of the world’s most livable cities.", "Has the largest Asian population in Canada."]},
    {destName: "Calgary", funFacts: ["Famous for the Calgary Stampede.", "Has the largest urban park system in North America."]},
    {destName: "Honolulu", funFacts: ["The only U.S. state capital with a royal palace.", "Has the most isolated major city in the world."]},
    {destName: "Las Vegas", funFacts: ["The Strip is not in the city limits.", "Over 300 weddings happen daily here."]},
    {destName: "Austin", funFacts: ["The live music capital of the world.", "Home to the largest urban bat colony."]},
    {destName: "Philadelphia", funFacts: ["Home to America’s first library.", "Has the world's largest cheesesteak."]}
]

const questions = [
    { clues: ["Built on 118 islands.", "Gondolas must be painted black by law."], ans: "Venice" },
    { clues: ["Has more bicycles than people.", "Built on wooden stilts."], ans: "Amsterdam" },
    { clues: ["Sagrada Familia is still under construction.", "Has the largest football stadium in Europe."], ans: "Barcelona" },
    { clues: ["The only city on two continents.", "Was once called Byzantium and Constantinople."], ans: "Istanbul" },
    { clues: ["Home to the world’s oldest zoo.", "Coffee houses are UNESCO cultural heritage."], ans: "Vienna" },
    { clues: ["Built on 14 islands.", "Home to the Nobel Prize."], ans: "Stockholm" },
    { clues: ["Has the world's oldest operating bookstore.", "Built on seven hills like Rome."], ans: "Lisbon" },
    { clues: ["Has the world’s oldest working astronomical clock.", "Nicknamed ‘City of a Hundred Spires’."], ans: "Prague" },
    { clues: ["85% of the city was destroyed in WWII.", "Has one of the world's tallest clock towers."], ans: "Warsaw" },
    { clues: ["Home to the world's oldest amusement park.", "Bicycles outnumber cars."], ans: "Copenhagen" },
    { clues: ["Birthplace of the Smurfs.", "Home to the EU headquarters."], ans: "Brussels" },
    { clues: ["Has an underground city.", "Hosts the world’s largest arts festival."], ans: "Edinburgh" },
    { clues: ["Guinness beer originated here.", "Has more than 750 pubs."], ans: "Dublin" },
    { clues: ["One of the world’s most expensive cities.", "Has over 1,200 drinking fountains."], ans: "Zurich" },
    { clues: ["Has more saunas than cars.", "One of the world's happiest cities."], ans: "Helsinki" },
    { clues: ["Has a sculpture park dedicated to one artist.", "Home to the Nobel Peace Prize ceremony."], ans: "Oslo" },
    { clues: ["Has the world’s largest thermal bath system.", "Divided into Buda and Pest."], ans: "Budapest" },
    { clues: ["One of the world's oldest cities.", "Birthplace of democracy."], ans: "Athens" },
    { clues: ["One of Europe’s cheapest capitals.", "Has natural hot springs in the city center."], ans: "Sofia" },
    { clues: ["One of the oldest cities in Europe.", "Has more floating nightclubs than any other city."], ans: "Belgrade" },
    { clues: ["Has the world's longest mosaic wall.", "Home to over 600 temples and pagodas."], ans: "Hanoi" },
    { clues: ["Has no subway system.", "Sinks by up to 25 cm per year."], ans: "Jakarta" },
    { clues: ["One of the most densely populated cities.", "Jeepneys are the main mode of transport."], ans: "Manila" },
    { clues: ["Home to the Petronas Twin Towers.", "Has the world’s tallest twin skyscrapers."], ans: "Kuala Lumpur" },
    { clues: ["Has a night zoo, the first in the world.", "Chewing gum is banned."], ans: "Singapore" },
    { clues: ["Has one of the world’s fastest elevators.", "Night markets are an essential part of life."], ans: "Taipei" },
    { clues: ["Has the world’s fastest train.", "The Bund features historic European buildings."], ans: "Shanghai" },
    { clues: ["Has the most skyscrapers in the world.", "Home to the world’s longest outdoor escalator."], ans: "Hong Kong" },
    { clues: ["Has the largest spice market in Asia.", "India Gate was inspired by the Arc de Triomphe."], ans: "Delhi" },
    { clues: ["Known as the ‘Heart of Pakistan.’", "Home to Badshahi Mosque, one of the largest in the world."], ans: "Lahore" },
    { clues: ["Pakistan’s largest city.", "Home to the world’s largest deep-sea port."], ans: "Karachi" },
    { clues: ["Has the world’s largest camel market.", "The Kingdom Tower has a sky bridge."], ans: "Riyadh" },
    { clues: ["Located near one of the world's highest volcanoes.", "Home to the world’s largest collection of Persian carpets."], ans: "Tehran" },
    { clues: ["One of Africa’s busiest ports.", "Has the third-largest mosque in the world."], ans: "Casablanca" },
    { clues: ["Has a national park inside the city.", "Known as the ‘Green City in the Sun.’"], ans: "Nairobi" },
    { clues: ["Africa’s most populous city.", "Has one of the world’s busiest ports."], ans: "Lagos" },
    { clues: ["Has the world’s largest urban forest.", "Built on the world’s largest gold deposit."], ans: "Johannesburg" },
    { clues: ["Has the widest avenue in the world.", "Tango originated here."], ans: "Buenos Aires" },
    { clues: ["The only capital in South America on the Pacific Ocean.", "Has the largest fountain complex in the world."], ans: "Lima" },
    { clues: ["Surrounded by the Andes Mountains.", "Has the tallest building in South America."], ans: "Santiago" },
    { clues: ["Has the most extensive bike path network in Latin America.", "Located at an altitude of 2,640 meters."], ans: "Bogotá" },
    { clues: ["Home to the world's tallest slum.", "One of the most oil-rich cities."], ans: "Caracas" }
];

  
  async function insertCities() {
    try {
        await destinationModel.insertMany(data);
        console.log("100 destinations inserted successfully!");
        await questionModel.insertMany(questions);
        console.log("100 questions inserted successfully!");
    } catch (error) {
        console.error("Error inserting cities:", error);
    }
}

export default insertCities;