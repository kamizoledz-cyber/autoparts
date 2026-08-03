const Search = (() => {

    function normalize(text) {

        if (!text) return "";

        return text
            .toString()
            .trim()
            .toLowerCase();

    }

    function contains(text, query) {

        return normalize(text).includes(query);

    }

    function search(query, data) {

        query = normalize(query);

        if (!query) {

            return {

                manufacturers: [],
                models: [],
                parts: []

            };

        }

        const manufacturers = data.manufacturers.filter(item =>

            contains(item.name, query) ||
            contains(item.country, query)

        );

        const models = data.models.filter(item =>

            contains(item.name, query) ||
            contains(item.segment, query)

        );

        const parts = data.parts.filter(item =>

            contains(item.name, query) ||
            contains(item.description, query)

        );

        return {

            manufacturers,
            models,
            parts

        };

    }

    return {

        search

    };

})();
