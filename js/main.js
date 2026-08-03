
const App = {

    data: {},

    async init() {

        try {

            this.showLoading();

            const [

                manufacturers,
                models,
                parts,
                categories

            ] = await Promise.all([

                Data.manufacturers(),
                Data.models(),
                Data.parts(),
                Data.categories()

            ]);

            this.data = {

                manufacturers,
                models,
                parts,
                categories

            };

            this.render();

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

<p>Search Manufacturers, Models and Parts</p>

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

        const input = document.getElementById("searchInput");

        const button = document.getElementById("searchBtn");

        button.addEventListener("click", () => {

            this.runSearch();

        });

        input.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                this.runSearch();

            }

        });

    },

    runSearch() {

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
