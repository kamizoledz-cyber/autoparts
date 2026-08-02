const app = document.getElementById("app");

app.innerHTML = `

<header class="header">

    <div class="logo">
        🚗 GAPHub
        <span>Global Auto Parts & Compatibility Platform</span>
    </div>

    <div class="language">
        <button>🇺🇸 EN</button>
        <button>🇸🇦 AR</button>
        <button>🇫🇷 FR</button>
        <button>🇪🇸 ES</button>
    </div>

</header>


<section class="hero">

    <h1>Find Any Auto Part Worldwide</h1>

    <p>
        Search OEM Numbers, Parts and Brands
    </p>


    <div class="search-box">

        <input id="searchInput"
        type="text"
        placeholder="Search Toyota, Oil Filter, OEM Number...">

        <button id="searchBtn">
        🔍 Search
        </button>

    </div>


    <div id="results"></div>


</section>


<section class="stats">

<div class="stat-card">
<h2>120K+</h2>
<p>OEM Parts</p>
</div>

<div class="stat-card">
<h2>80+</h2>
<p>Manufacturers</p>
</div>

<div class="stat-card">
<h2>400+</h2>
<p>Vehicle Models</p>
</div>

<div class="stat-card">
<h2>4</h2>
<p>Languages</p>
</div>

</section>

`;


let parts = [];


fetch("./parts.json")
.then(response => response.json())
.then(data => {
    parts = data;
});


document.getElementById("searchBtn")
.addEventListener("click",()=>{

    let value =
    document.getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();


    let results =
    parts.filter(item =>

        item.brand.toLowerCase().includes(value) ||
        item.model.toLowerCase().includes(value) ||
        item.part.toLowerCase().includes(value) ||
        item.oem.toLowerCase().includes(value)

    );


    let box =
    document.getElementById("results");


    if(results.length === 0){

        box.innerHTML =
        "<p>No parts found</p>";

        return;

    }


    box.innerHTML =
    results.map(item =>`

        <div class="results-card">

            <h3>
            🚗 ${item.brand} ${item.model}
            </h3>

            <p>
            📅 Year: ${item.year}
            </p>

            <p>
            🔧 Part: ${item.part}
            </p>

            <p class="oem-number">
            OEM: ${item.oem}
            </p>

        </div>

    `).join("");

});
