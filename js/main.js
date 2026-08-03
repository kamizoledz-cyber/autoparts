const App = {

    data: {},

    async init() {

        try {

            this.showLoading();

            this.data.manufacturers = await Data.manufacturers();
            this.data.models = await Data.models();
            this.data.parts = await Data.parts();

            this.render();

        } catch (error) {

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

        document
            .getElementById("searchBtn")
            .addEventListener("click", () => {

                const query = document
                    .getElementById("searchInput")
                    .value;

                const results = Search.search(query, this.data);

                Renderer.render(results);

            });

    }

};

App.init();
