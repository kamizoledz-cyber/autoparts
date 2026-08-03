const CompatibilityEngine = (() => {

    function createMap(array) {

        const map = new Map();

        array.forEach(item => {

            map.set(item.id, item);

        });

        return map;

    }

    function getParts(vehicleVersionId, data) {

        const partsMap = createMap(data.parts);
        const categoriesMap = createMap(data.categories);
        const manufacturersMap = createMap(data.manufacturers);

        const uniqueParts = new Set();

        const results = [];

        data.compatibility.forEach(link => {

            if (link.vehicleVersionId !== vehicleVersionId)
                return;

            if (uniqueParts.has(link.partId))
                return;

            uniqueParts.add(link.partId);

            const part = partsMap.get(link.partId);

            if (!part)
                return;

            results.push({

                compatibility: link,

                part,

                category: categoriesMap.get(part.categoryId),

                manufacturer: manufacturersMap.get(part.manufacturerId)

            });

        });

        return results;

    }

    return {

        getParts

    };

})();
