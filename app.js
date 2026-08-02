
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
Search Vehicles, OEM Numbers and Parts
</p>


<div class="search-box">

<input id="searchInput"
placeholder="Toyota, Corolla, OEM Number...">

<button id="searchBtn">
🔍 Search
</button>

</div>


<div id="results"></div>


</section>

`;


let parts = [];
let vehicles = [];


Promise.all([

fetch("parts.json").then(r => r.json()),

fetch("vehicles.json").then(r => r.json())

])

.then(data => {

parts = data[0];

vehicles = data[1];

});



document.getElementById("searchBtn")
.addEventListener("click",()=>{


let value =
document.getElementById("searchInput")
.value
.toLowerCase()
.trim();



let partResults =
parts.filter(item =>

item.brand.toLowerCase().includes(value) ||
item.model.toLowerCase().includes(value) ||
item.part.toLowerCase().includes(value) ||
item.oem.toLowerCase().includes(value)

);



let vehicleResults =
vehicles.filter(item =>

item.brand.toLowerCase().includes(value) ||
item.model.toLowerCase().includes(value) ||
item.engine.toLowerCase().includes(value)

);



let box =
document.getElementById("results");



box.innerHTML = "";



vehicleResults.forEach(car => {

box.innerHTML += `

<div class="results-card">

<h3>
🚗 ${car.brand} ${car.model}
</h3>

<p>
📅 Year: ${car.year}
</p>

<p>
⚙️ Engine: ${car.engine}
</p>

</div>

`;

});



partResults.forEach(part => {

box.innerHTML += `

<div class="results-card">

<h3>
🔧 ${part.part}
</h3>

<p>
🚗 ${part.brand} ${part.model}
</p>

<p>
📅 Year: ${part.year}
</p>

<p class="oem-number">
OEM: ${part.oem}
</p>

</div>

`;

});



if(vehicleResults.length === 0 && partResults.length === 0){

box.innerHTML =
"<p>No results found</p>";

}


});
