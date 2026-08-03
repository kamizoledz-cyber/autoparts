const App = {

    data: {
        manufacturers: [],
        models: [],
        generations: [],
        vehicleVersions: [],
        categories: [],
        parts: [],
        compatibility: []
    },

    async init() {

        try {

            this.showLoading();

            const [

                manufacturers,
                models,
                generations,
                vehicleVersions,
                categories,
                parts,
                compatibility

            ] = await Promise.all([

                Data.manufacturers(),
                Data.models(),
                Data.generations(),
                Data.vehicleVersions(),
                Data.categories(),
                Data.parts(),
                Data.compatibility()

            ]);

            this.data.manufacturers = manufacturers;
            this.data.models = models;
            this.data.generations = generations;
            this.data.vehicleVersions = vehicleVersions;
            this.data.categories = categories;
            this.data.parts = parts;
            this.data.compatibility = compatibility;

            this.render();

        }

        catch (error) {

            console.error(error);

            document.getElementById("app").innerHTML = `
                <div class="results-card">
                    <h2>⚠️ Loading Error</h2>
                    <p>${error.message}</p>
                </div>
            `;

        }

    },

    showLoading() {

        document.getElementById("app").innerHTML = `
            <div class="results-card">
                <h2>Loading...</h2>
            </div>
        `;

    },

    render() {

        document.getElementById("app").innerHTML = `
<header class="header">

<div class="logo">
🚗 PartMatrix
<span>Global Auto Parts & Compatibility Platform</span>
</div>

</header>

<section class="hero">

<h1>
Find Any Auto Part Worldwide
</h1>

<p>
Search Manufacturers, Models and Parts
</p>

<div class="search-box">

<input
id="searchInput"
placeholder="Toyota, Corolla, Oil Filter...">

<button id="searchBtn">
🔍 Search
</button>

</div>

<div id="results"></div>

</section>
`;

        document
            .getElementById("searchBtn")
            .addEventListener("click", () => {

                alert(
                    "Search Engine will be connected in the next Sprint."
                );

            });

    }

};

App.init();
