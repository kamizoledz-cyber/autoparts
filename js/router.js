const Router = (() => {

    let currentView = "search";

    function go(view, payload = null) {

        currentView = view;

        AppState.setView(view);

        console.log("Navigate:", view, payload);

    }

    function back() {

        currentView = "search";

        AppState.setView("search");

    }

    function current() {

        return currentView;

    }

    return {

        go,

        back,

        current

    };

})();
