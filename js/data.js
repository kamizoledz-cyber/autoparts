const Data = (() => {

    const cache = {};

    async function load(file) {

        if (cache[file]) {
            return cache[file];
        }

        const response = await fetch(`data/${file}.json`);

        if (!response.ok) {
            throw new Error(`Cannot load ${file}.json`);
        }

        const json = await response.json();

        cache[file] = json;

        return json;
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

        config: () => load("config")

    };

})();
