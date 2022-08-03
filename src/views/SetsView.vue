<template>
  <h1>Sets</h1>
<li v-for="set in sets" :key="set.name">
<h2>{{set.name}}</h2>

</li>
    

</template>


<script>


export default {
  data() {

return {

sets: [
   {
    "set_num": "10263-1",
    "name": "Winter Village Fire Station",
    "year": 2018,
    "theme_id": 228,
    "num_parts": 1166
  },
  {
    "set_num": "10264-1",
    "name": "Corner Garage",
    "year": 2019,
    "theme_id": 155,
    "num_parts": 2569
  },
  {
    "set_num": "10265-1",
    "name": "Ford Mustang",
    "year": 2019,
    "theme_id": 673,
    "num_parts": 1471
  },
  {
    "set_num": "10266-1",
    "name": "NASA Apollo 11 Lunar Lander",
    "year": 2019,
    "theme_id": 673,
    "num_parts": 1087
  },
  {
    "set_num": "10267-1",
    "name": "Gingerbread House",
    "year": 2019,
    "theme_id": 228,
    "num_parts": 1477
  },
  {
    "set_num": "10268-1",
    "name": "Vestas Wind Turbine",
    "year": 2018,
    "theme_id": 673,
    "num_parts": 834
  },
  {
    "set_num": "10269-1",
    "name": "Harley-Davidson Fat Boy",
    "year": 2019,
    "theme_id": 673,
    "num_parts": 1023
  },
  {
    "set_num": "10270-1",
    "name": "Bookshop",
    "year": 2020,
    "theme_id": 155,
    "num_parts": 2504
  },
  {
    "set_num": "1027-1",
    "name": "Vehicles",
    "year": 1985,
    "theme_id": 516,
    "num_parts": 32
  },
  {
    "set_num": "10271-1",
    "name": "Fiat 500",
    "year": 2020,
    "theme_id": 673,
    "num_parts": 960
  },
  {
    "set_num": "10272-1",
    "name": "Old Trafford - Manchester United",
    "year": 2020,
    "theme_id": 673,
    "num_parts": 3898
  },
  {
    "set_num": "10273-1",
    "name": "Haunted House",
    "year": 2020,
    "theme_id": 721,
    "num_parts": 3232
  },
  {
    "set_num": "10274-1",
    "name": "ECTO-1",
    "year": 2020,
    "theme_id": 721,
    "num_parts": 2352
  },
  {
    "set_num": "10275-1",
    "name": "Elf Club House",
    "year": 2020,
    "theme_id": 227,
    "num_parts": 1197
  },
  {
    "set_num": "10276-1",
    "name": "Colosseum",
    "year": 2020,
    "theme_id": 721,
    "num_parts": 9036
  },
  {
    "set_num": "10277-1",
    "name": "Crocodile Locomotive",
    "year": 2020,
    "theme_id": 721,
    "num_parts": 1279
  },
  {
    "set_num": "10278-1",
    "name": "Police Station",
    "year": 2021,
    "theme_id": 155,
    "num_parts": 2924
  },
  {
    "set_num": "10279-1",
    "name": "Volkswagen T2 Camper Van",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 2207
  },
  {
    "set_num": "10280-1",
    "name": "Flower Bouquet",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 756
  },
  {
    "set_num": "1028-1",
    "name": "6 x 12 Base Bricks",
    "year": 1985,
    "theme_id": 516,
    "num_parts": 6
  },
  {
    "set_num": "10281-1",
    "name": "Bonsai",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 878
  },
  {
    "set_num": "10282-1",
    "name": "adidas Originals Superstar",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 731
  },
  {
    "set_num": "10282-2",
    "name": "Footshop x Adidas Originals Superstar 'Blueprinting' Bundle",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 0
  },
  {
    "set_num": "10283-1",
    "name": "NASA Space Shuttle Discovery",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 2355
  },
  {
    "set_num": "10284-1",
    "name": "Camp Nou - FC Barcelona",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 5509
  },
  {
    "set_num": "10285-1",
    "name": "Compass Sensor for Mindstorms NXT",
    "year": 2011,
    "theme_id": 259,
    "num_parts": 1
  },
  {
    "set_num": "10287-1",
    "name": "Intelligent NXT Brick (Black)",
    "year": 2009,
    "theme_id": 259,
    "num_parts": 1
  },
  {
    "set_num": "10289-1",
    "name": "Bird of Paradise",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 1173
  },
  {
    "set_num": "10290-1",
    "name": "Pickup Truck",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 1678
  },
  {
    "set_num": "1029-1",
    "name": "Milk Delivery Truck - Tine",
    "year": 1999,
    "theme_id": 50,
    "num_parts": 91
  },
  {
    "set_num": "10291-1",
    "name": "Queer Eye: The Fab 5 Loft",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 974
  },
  {
    "set_num": "10292-1",
    "name": "Friends - The Apartments",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 2048
  },
  {
    "set_num": "10293-1",
    "name": "Santa's Visit",
    "year": 2021,
    "theme_id": 227,
    "num_parts": 1445
  },
  {
    "set_num": "10294-1",
    "name": "Titanic",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 9092
  },
  {
    "set_num": "10295-1",
    "name": "Porsche 911 Turbo & 911 Targa",
    "year": 2021,
    "theme_id": 721,
    "num_parts": 1458
  },
  {
    "set_num": "10297-1",
    "name": "Boutique Hotel",
    "year": 2022,
    "theme_id": 155,
    "num_parts": 3068
  },
  {
    "set_num": "10298-1",
    "name": "Vespa 125",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 1106
  },
  {
    "set_num": "10299-1",
    "name": "Real Madrid – Santiago Bernabéu Stadium",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 5876
  },
  {
    "set_num": "102A-1",
    "name": "Front-End Loader",
    "year": 1970,
    "theme_id": 416,
    "num_parts": 64
  },
  {
    "set_num": "102A-2",
    "name": "Front-End Loader",
    "year": 1970,
    "theme_id": 416,
    "num_parts": 56
  },
  {
    "set_num": "10-3",
    "name": "Locomotive Wheels",
    "year": 1977,
    "theme_id": 456,
    "num_parts": 8
  },
  {
    "set_num": "10300-1",
    "name": "Back to the Future Time Machine",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 1872
  },
  {
    "set_num": "1030-1",
    "name": "TECHNIC I: Simple Machines Set",
    "year": 1985,
    "theme_id": 1,
    "num_parts": 211
  },
  {
    "set_num": "10302-1",
    "name": "Optimus Prime",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 1508
  },
  {
    "set_num": "10303-1",
    "name": "Loop Coaster",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 3756
  },
  {
    "set_num": "10304-1",
    "name": "Chevrolet Camaro Z/28 1969",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 1455
  },
  {
    "set_num": "10305-1",
    "name": "Lion Knight's Castle",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 0
  },
  {
    "set_num": "10306-1",
    "name": "Atari 2600",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 2529
  },
  {
    "set_num": "10309-1",
    "name": "Succulents",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 771
  },
  {
    "set_num": "103-1",
    "name": "4.5V Motor Set with Rubber Tracks",
    "year": 1969,
    "theme_id": 473,
    "num_parts": 24
  },
  {
    "set_num": "1031-1",
    "name": "Building Cards - 1030",
    "year": 1983,
    "theme_id": 532,
    "num_parts": 20
  },
  {
    "set_num": "10311-1",
    "name": "Orchid",
    "year": 2022,
    "theme_id": 721,
    "num_parts": 608
  },
  {
    "set_num": "103-2",
    "name": "Imagination Set 3",
    "year": 1971,
    "theme_id": 366,
    "num_parts": 568
  },
  {
    "set_num": "1032-1",
    "name": "TECHNIC II Set {4.5v}",
    "year": 1985,
    "theme_id": 507,
    "num_parts": 280
  },
  {
    "set_num": "1033-1",
    "name": "Building Cards - 1032",
    "year": 1985,
    "theme_id": 532,
    "num_parts": 20
  },
  {
    "set_num": "1034-1",
    "name": "Teachers Resource Set",
    "year": 1985,
    "theme_id": 532,
    "num_parts": 1534
  },
  {
    "set_num": "1038-1",
    "name": "ERBIE the Robo-Car",
    "year": 1985,
    "theme_id": 1,
    "num_parts": 120
  },
  {
    "set_num": "1039-1",
    "name": "Manual Control Set 1",
    "year": 1986,
    "theme_id": 1,
    "num_parts": 39
  },
  {
    "set_num": "1040-1",
    "name": "Farm (with Picture Book)",
    "year": 1991,
    "theme_id": 516,
    "num_parts": 88
  },
  {
    "set_num": "10401-1",
    "name": "Rainbow Fun",
    "year": 2018,
    "theme_id": 621,
    "num_parts": 85
  },
  {
    "set_num": "1040-2",
    "name": "Farm Set",
    "year": 1986,
    "theme_id": 516,
    "num_parts": 88
  },
  {
    "set_num": "10402-1",
    "name": "Fun Future",
    "year": 2018,
    "theme_id": 621,
    "num_parts": 186
  },
  {
    "set_num": "1040-3",
    "name": "Universal Building Set",
    "year": 1976,
    "theme_id": 504,
    "num_parts": 126
  },
  {
    "set_num": "10403-1",
    "name": "World Fun",
    "year": 2018,
    "theme_id": 621,
    "num_parts": 295
  },
  {
    "set_num": "10404-1",
    "name": "Ocean's Bottom",
    "year": 2018,
    "theme_id": 621,
    "num_parts": 579
  },
  {
    "set_num": "10405-1",
    "name": "Mission to Mars",
    "year": 2018,
    "theme_id": 621,
    "num_parts": 871
  },
  {
    "set_num": "104-1",
    "name": "Replacement 4.5V Motor",
    "year": 1970,
    "theme_id": 235,
    "num_parts": 1
  },
  {
    "set_num": "1041-1",
    "name": "Harbor",
    "year": 1986,
    "theme_id": 516,
    "num_parts": 77
  }]
  
}

  
  }

};
</script>
