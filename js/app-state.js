const AppState = (() => {

    const state = {

        currentView: "search",

        currentVehicle: null,

        currentPart: null,

        lastResults: []

    };

    function setView(view) {

        state.currentView = view;

    }

    function getView() {

        return state.currentView;

    }

    function setVehicle(id) {

        state.currentVehicle = id;

    }

    function getVehicle() {

        return state.currentVehicle;

    }

    function setPart(id) {

        state.currentPart = id;

    }

    function getPart() {

        return state.currentPart;

    }

    function setResults(results) {

        state.lastResults = results;

    }

    function getResults() {

        return state.lastResults;

    }

    return {

        setView,

        getView,

        setVehicle,

        getVehicle,

        setPart,

        getPart,

        setResults,

        getResults

    };

})();
