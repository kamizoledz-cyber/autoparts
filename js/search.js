
const Search = (() => {

    function normalize(value) {

        return (value || "")
            .toString()
            .trim()
            .toLowerCase();

    }

    function search(query, data) {

        query = normalize(query);

        if (!query) return [];

        const results = [];

        data.vehicleVersions.forEach(vehicle => {

            const vehicleInfo = VehicleEngine.resolve(
                vehicle.id,
                data
            );

            if (!vehicleInfo) return;

            const searchText = [

                vehicleInfo.manufacturer?.name,
                vehicleInfo.model?.name,
                vehicleInfo.generation?.name,
                vehicleInfo.engine?.code,
                vehicle.bodyType,
                vehicle.trim,
                vehicle.productionYear

            ].join(" ").toLowerCase();

            if (!searchText.includes(query))
                return;

            const compatibleParts =
                CompatibilityEngine.getParts(
                    vehicle.id,
                    data
                );

            results.push({

                vehicle: vehicle,

                manufacturer:
                    vehicleInfo.manufacturer,

                model:
                    vehicleInfo.model,

                generation:
                    vehicleInfo.generation,

                engine:
                    vehicleInfo.engine,

                transmission:
                    vehicleInfo.transmission,

                market:
                    vehicleInfo.market,

                parts:
                    compatibleParts

            });

        });

        return results;

    }

    return {

        search

    };

})();
