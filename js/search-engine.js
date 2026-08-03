const SearchEngine = (() => {

    function search(query, data) {

        query = query.trim().toLowerCase();

        if (!query) return [];

        const results = [];

        data.vehicleVersions.forEach(vehicle => {

            const info = VehicleEngine.resolve(

                vehicle.id,

                data

            );

            if (!info) return;

            const text = [

                info.manufacturer?.name,

                info.model?.name,

                info.generation?.name,

                info.engine?.code,

                vehicle.trim,

                vehicle.bodyType,

                vehicle.productionYear

            ].join(" ").toLowerCase();

            if (!text.includes(query)) return;

            const parts = CompatibilityEngine.getParts(

                vehicle.id,

                data

            );

            results.push({

                vehicle,

                info,

                parts

            });

        });

        return results;

    }

    return {

        search

    };

})();
