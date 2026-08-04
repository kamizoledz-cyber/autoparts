const AppState = (() => {

    const state = {

        page: "home",

        lastResults: [],

        currentVehicle: null,

        currentPart: null,

        currentManufacturer: null

    };

    function get(key) {

        return state[key];

    }

    function set(key, value) {

        state[key] = value;

    }

    function reset() {

        state.page = "home";

        state.lastResults = [];

        state.currentVehicle = null;

        state.currentPart = null;

        state.currentManufacturer = null;

    }

    return {

        get,

        set,

        reset

    };

})();
