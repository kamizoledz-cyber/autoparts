const VehicleEngine = (() => {

    function createMap(array) {

        const map = new Map();

        array.forEach(item => {

            map.set(item.id, item);

        });

        return map;

    }

    function resolve(vehicleVersionId, data) {

        const vehicleVersions = createMap(data.vehicleVersions);
        const generations = createMap(data.generations);
        const models = createMap(data.models);
        const manufacturers = createMap(data.manufacturers);
        const engines = createMap(data.engines);
        const transmissions = createMap(data.transmissions);
        const markets = createMap(data.markets);

        const vehicle = vehicleVersions.get(vehicleVersionId);

        if (!vehicle) return null;

        const generation = generations.get(vehicle.generationId);

        if (!generation) return null;

        const model = models.get(generation.modelId);

        if (!model) return null;

        return {

            vehicleVersion: vehicle,

            generation,

            model,

            manufacturer: manufacturers.get(model.manufacturerId),

            engine: engines.get(vehicle.engineId),

            transmission: transmissions.get(vehicle.transmissionId),

            market: markets.get(vehicle.marketId)

        };

    }

    return {

        resolve

    };

})();
