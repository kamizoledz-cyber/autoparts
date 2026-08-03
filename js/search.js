const Search = (() => {

    function contains(text, value) {

        if (!text) return false;

        return text
            .toString()
            .toLowerCase()
            .includes(value);

    }

    function search(query, data) {

        const value = query
            .trim()
            .toLowerCase();

        if (!value) {

            return {

                manufacturers: [],
                models: [],
                parts: []

            };

        }

        const manufacturers = data.manufacturers.filter(item =>

            contains(item.name, value) ||

            contains(item.country, value)

        );

        const models = data.models.filter(item =>

            contains(item.name, value) ||

            contains(item.segment, value)

        );

        const parts = data.parts.filter(item =>

            contains(item.name, value) ||

            contains(item.description, value)

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
