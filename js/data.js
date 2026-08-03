const Data = (() => {

    const cache = {};

    const indexes = {};

    async function load(file) {

        if (cache[file]) {
            return cache[file];
        }

        const response = await fetch(`${file}.json`);

        if (!response.ok) {
            throw new Error(`Cannot load ${file}.json`);
        }

        const json = await response.json();

        cache[file] = json;

        return json;

    }

    function createIndex(name, array) {

        indexes[name] = new Map();

        array.forEach(item => {

            indexes[name].set(item.id, item);

        });

    }

    async function buildIndexes() {

        createIndex("manufacturers", await load("manufacturers"));

        createIndex("models", await load("models"));

        createIndex("generations", await load("generations"));

        createIndex("vehicleVersions", await load("vehicle_versions"));

        createIndex("engines", await load("engines"));

        createIndex("transmissions", await load("transmissions"));

        createIndex("markets", await load("markets"));

        createIndex("categories", await load("categories"));

        createIndex("parts", await load("parts"));

    }

    function getIndex(name) {

        return indexes[name];

    }

    return {

        manufacturers: () => load("manufacturers"),

        models: () => load("models"),

        generations: () => load("generations"),

        vehicleVersions: () => load("vehicle_versions"),

        engines: () => load("engines"),

        transmissions: () => load("transmissions"),

        markets: () => load("markets"),

        categories: () => load("categories"),

        parts: () => load("parts"),

        compatibility: () => load("compatibility"),

        vehicles: () => load("vehicles"),

        config: () => load("config"),

        buildIndexes,

        getIndex

    };

})();
