const games = [
    {
      id: 1,
      name: "The Last of Us",
      company: "Naughty Dog",
      yearReleased: 2013,
      gameType: "Action-Adventure"
    },
    {
      id: 2,
      name: "World of Warcraft",
      company: "Blizzard Entertainment",
      yearReleased: 2004,
      gameType: "MMORPG"
    },
    {
      id: 3,
      name: "Grand Theft Auto V",
      company: "Rockstar Games",
      yearReleased: 2013,
      gameType: "Action-Adventure"
    },
    {
      id: 4,
      name: "Minecraft",
      company: "Mojang",
      yearReleased: 2011,
      gameType: "Sandbox"
    },
    {
      id: 5,
      name: "Red Dead Redemption 2",
      company: "Rockstar Games",
      yearReleased: 2018,
      gameType: "Action-Adventure"
    },
    {
      id: 6,
      name: "The Witcher 3: Wild Hunt",
      company: "CD Projekt Red",
      yearReleased: 2015,
      gameType: "RPG"
    },
    {
      id: 7,
      name: "Portal 2",
      company: "Valve",
      yearReleased: 2011,
      gameType: "Puzzle"
    },
    {
      id: 8,
      name: "God of War",
      company: "Santa Monica Studio",
      yearReleased: 2018,
      gameType: "Action-Adventure"
    },
    {
      id: 9,
      name: "Age of Empires",
      company: "Ensemble Studios",
      yearReleased: 1997,
      gameType: "RTS"
    },
    {
      id: 10,
      name: "The Elder Scrolls V: Skyrim",
      company: "Bethesda",
      yearReleased: 2011,
      gameType: "RPG"
    },
    {
      id: 11,
      name: "Overwatch",
      company: "Blizzard Entertainment",
      yearReleased: 2016,
      gameType: "FPS"
    },
    {
      id: 12,
      name: "Mass Effect 2",
      company: "BioWare",
      yearReleased: 2010,
      gameType: "Action RPG"
    },
    {
      id: 13,
      name: "Super Mario Odyssey",
      company: "Nintendo",
      yearReleased: 2017,
      gameType: "Platform"
    },
    {
      id: 14,
      name: "Age of Empires II",
      company: "Ensemble Studios",
      yearReleased: 1999,
      gameType: "RTS"
    },
    {
      id: 15,
      name: "Elden Ring",
      company: "FromSoftware",
      yearReleased: 2022,
      gameType: "Action RPG"
    },
    {
      id: 16,
      name: "Among Us",
      company: "InnerSloth",
      yearReleased: 2018,
      gameType: "Social Deduction"
    },
    {
      id: 17,
      name: "Horizon Zero Dawn",
      company: "Guerrilla Games",
      yearReleased: 2017,
      gameType: "Action RPG"
    },
    {
      id: 18,
      name: "Stardew Valley",
      company: "ConcernedApe",
      yearReleased: 2016,
      gameType: "Simulation"
    },
    {
      id: 19,
      name: "Death Stranding",
      company: "Kojima Productions",
      yearReleased: 2019,
      gameType: "Action"
    },
    {
      id: 20,
      name: "Control",
      company: "Remedy Entertainment",
      yearReleased: 2019,
      gameType: "Action-Adventure"
    },
    {
      id: 21,
      name: "Hades",
      company: "Supergiant Games",
      yearReleased: 2020,
      gameType: "Roguelike"
    },
    {
      id: 22,
      name: "Disco Elysium",
      company: "ZA/UM",
      yearReleased: 2019,
      gameType: "RPG"
    },
    {
      id: 23,
      name: "Hollow Knight",
      company: "Team Cherry",
      yearReleased: 2017,
      gameType: "Metroidvania"
    },
    {
      id: 24,
      name: "It Takes Two",
      company: "Hazelight Studios",
      yearReleased: 2021,
      gameType: "Co-op Adventure"
    },
    {
      id: 25,
      name: "Persona 5",
      company: "Atlus",
      yearReleased: 2016,
      gameType: "JRPG"
    }
  ];


let id9 = games.find(game => game.id === 9);
console.table(id9);

let devValve = games.find(game => game.company.toLowerCase() === 'vALvE'.toLowerCase());
console.table(devValve);

let pre2015 = games.filter(game => game.yearReleased < 2016);
console.table(pre2015);

let rpg = games.filter(game => game.gameType === 'RPG');
console.table(rpg);

