const Renderer = (() => {

    function render(results) {

        const box = document.getElementById("results");

        box.innerHTML = "";

        results.manufacturers.forEach(item => {

            box.innerHTML += `
                <div class="results-card">
                    <h3>🏭 ${item.name}</h3>
                    <p>🌍 ${item.country}</p>
                </div>
            `;

        });

        results.models.forEach(item => {

            box.innerHTML += `
                <div class="results-card">
                    <h3>🚗 ${item.name}</h3>
                    <p>${item.segment}</p>
                </div>
            `;

        });

        results.parts.forEach(item => {

            box.innerHTML += `
                <div class="results-card">
                    <h3>🔧 ${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            `;

        });

        if (
            results.manufacturers.length === 0 &&
            results.models.length === 0 &&
            results.parts.length === 0
        ) {

            box.innerHTML = `
                <div class="results-card">
                    <p>No results found.</p>
                </div>
            `;

        }

    }

    return {

        render

    };

})();
