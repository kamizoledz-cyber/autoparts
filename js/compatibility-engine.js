const CompatibilityEngine = (() => {

    function getParts(vehicleVersionId, data) {

        const links = data.compatibility.filter(

            item => item.vehicleVersionId === vehicleVersionId

        );

        return links.map(link => {

            const part = data.parts.find(

                item => item.id === link.partId

            );

            if (!part) return null;

            const category = data.categories.find(

                item => item.id === part.categoryId

            );

            const manufacturer = data.manufacturers.find(

                item => item.id === part.manufacturerId

            );

            return {

                compatibility: link,

                part,

                category,

                manufacturer

            };

        }).filter(Boolean);

    }

    return {

        getParts

    };

})();
