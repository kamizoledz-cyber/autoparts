const VehicleEngine = (() => {

    function resolve(vehicleVersionId, data) {

        const vehicle = data.vehicleVersions.find(
            item => item.id === vehicleVersionId
        );

        if (!vehicle) return null;

        const generation = data.generations.find(
            item => item.id === vehicle.generationId
        );

        if (!generation) return null;

        const model = data.models.find(
            item => item.id === generation.modelId
        );

        if (!model) return null;

        const manufacturer = data.manufacturers.find(
            item => item.id === model.manufacturerId
        );

        const engine = data.engines.find(
            item => item.id === vehicle.engineId
        );

        const transmission = data.transmissions.find(
            item => item.id === vehicle.transmissionId
        );

        const market = data.markets.find(
            item => item.id === vehicle.marketId
        );

        return {

            vehicleVersion: vehicle,

            generation,

            model,

            manufacturer,

            engine,

            transmission,

            market

        };

    }

    return {

        resolve

    };

})();
