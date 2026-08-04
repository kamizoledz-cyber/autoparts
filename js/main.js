
const App = {

    data: {},
    lastResults: [],
    async init() {

        try {

            this.showLoading();

            this.data = {

                manufacturers: await Data.manufacturers(),
                models: await Data.models(),
                generations: await Data.generations(),
                vehicleVersions: await Data.vehicleVersions(),
                engines: await Data.engines(),
                transmissions: await Data.transmissions(),
                markets: await Data.markets(),
                categories: await Data.categories(),
                parts: await Data.parts(),
                compatibility: await Data.compatibility()

            };

            this.render();

            this.bindEvents();

        } catch (error) {

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

<h1>Find Any Auto Part Worldwide</h1>

<p>Search by Manufacturer, Model, Generation or Engine</p>

<div class="search-box">

<input
id="searchInput"
type="text"
placeholder="Toyota, Corolla, E210, M20A-FKS...">

<button id="searchBtn">

🔍 Search

</button>

</div>

<div id="results"></div>

</section>

`;

    },

    bindEvents() {

        const input = document.getElementById("searchInput");

        const button = document.getElementById("searchBtn");

        button.addEventListener("click", () => {

            this.executeSearch();

        });

        input.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                this.executeSearch();

            }

        });

    },

    executeSearch() {

        const query = document
            .getElementById("searchInput")
            .value
            .trim();

        if (!query) {

            document.getElementById("results").innerHTML = `

                <div class="results-card">

                    <p>Please enter a search term.</p>

                </div>

            `;

            return;

        }

        const results = Search.search(

            query,

            this.data
        this.lastResults = results;
        );

        Renderer.render(results);

    }

};

App.init();
