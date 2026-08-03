
const App = {

    data: {},

    async init() {

        try {

            this.showLoading();

            const [

                manufacturers,
                models,
                generations,
                vehicleVersions,
                engines,
                transmissions,
                markets,
                categories,
                parts,
                compatibility

            ] = await Promise.all([

                Data.manufacturers(),
                Data.models(),
                Data.generations(),
                Data.vehicleVersions(),
                Data.engines(),
                Data.transmissions(),
                Data.markets(),
                Data.categories(),
                Data.parts(),
                Data.compatibility()

            ]);

            this.data = {

                manufacturers,
                models,
                generations,
                vehicleVersions,
                engines,
                transmissions,
                markets,
                categories,
                parts,
                compatibility

            };

            this.render();

        }

        catch (error) {

            console.error(error);

            document.getElementById("app").innerHTML = `

                <div class="results-card">

                    <h2>Loading Error</h2>

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

Search by Manufacturer, Model, Generation or Engine

</p>

<div class="search-box">

<input

id="searchInput"

placeholder="Toyota, Corolla, E210, M20A-FKS...">

<button id="searchBtn">

🔍 Search

</button>

</div>

<div id="results"></div>

</section>

`;

        const button = document.getElementById("searchBtn");

        const input = document.getElementById("searchInput");

        button.addEventListener("click", () => {

            this.executeSearch();

        });

        input.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                this.executeSearch();

            }

        });

    },

    executeSearch() {

        const query = document

            .getElementById("searchInput")

            .value;

        const results = Search.search(

            query,

            this.data

        );

        Renderer.render(results);

    }

};

App.init();
