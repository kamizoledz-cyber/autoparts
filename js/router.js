const Router = (() => {

    let currentView = "search";

    function go(view, payload = null) {

        currentView = view;

        console.log("Navigate:", view, payload);

    }

    function current() {

        return currentView;

    }

    return {

        go,

        current

    };

})();
