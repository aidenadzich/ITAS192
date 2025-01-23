class Pokémon {
    name;
    type;
    hp;
    cp;
    quickMove;
    chargeMove;

    constructor(name, type, hp, cp, quickMove, chargeMove) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.cp = cp;
        this.quickMove = quickMove;
        this.chargeMove = chargeMove;
    }

    getUpperName() {
        return this.name.toUpperCase();
    }

    checkOffenseDefense() {
        if (this.cp > this.hp) {
            return `offense`;
        } else {
            return `defense`;
        }
    }

}

let pokemonClasses = [];
pokemonList.forEach((className) => {
    let newClass = new Pokémon(...className);
    pokemonClasses.push(newClass);    
});

console.table(pokemonClasses);

let pokeSort = pokemonClasses.sort((a, b) => a.type.localeCompare(b.type));
let currentType = "";

pokeSort.forEach((pokemon) => {
    if (pokemon.type === 'Leaf') {
        pokemon.type = 'Grass';
    }
    if (pokemon.type !== currentType) {
        console.log(`\n${pokemon.type} type Pokémon:`);
        currentType = pokemon.type;
    }
    console.log(`${pokemon.getUpperName()} has attacks ${pokemon.quickMove} and ${pokemon.chargeMove} and is best for ${pokemon.checkOffenseDefense()}`);
});

