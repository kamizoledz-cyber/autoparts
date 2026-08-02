
const app = document.getElementById("app");

app.innerHTML = `

<header class="header">

    <div class="logo">
        🚗 PartMatrix
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

<h1>
Find Any Auto Part Worldwide
</h1>

<p>
Search Manufacturers, Vehicles, OEM Numbers and Parts
</p>


<div class="search-box">

<input id="searchInput"
placeholder="Toyota, Corolla, Oil Filter, OEM Number...">

<button id="searchBtn">
🔍 Search
</button>

</div>


<div id="results"></div>


</section>

`;


let parts = [];
let vehicles = [];
let manufacturers = [];



Promise.all([

fetch("parts.json").then(r => r.json()),

fetch("vehicles.json").then(r => r.json()),

fetch("manufacturers.json").then(r => r.json())

])

.then(data => {

parts = data[0];
vehicles = data[1];
manufacturers = data[2];

});




document.getElementById("searchBtn")
.addEventListener("click",()=>{


let value =
document.getElementById("searchInput")
.value
.toLowerCase()
.trim();



let manufacturerResults =
manufacturers.filter(item =>

item.name.toLowerCase().includes(value) ||
item.country.toLowerCase().includes(value)

);



let vehicleResults =
vehicles.filter(item =>

item.brand.toLowerCase().includes(value) ||
item.model.toLowerCase().includes(value) ||
item.engine.toLowerCase().includes(value)

);



let partResults =
parts.filter(item =>

item.brand.toLowerCase().includes(value) ||
item.model.toLowerCase().includes(value) ||
item.part.toLowerCase().includes(value) ||
item.oem.toLowerCase().includes(value)

);



let box = document.getElementById("results");

box.innerHTML = "";



manufacturerResults.forEach(item=>{

box.innerHTML += `

<div class="results-card">

<h3>
🏭 ${item.name}
</h3>

<p>
🌍 Country: ${item.country}
</p>

</div>

`;

});



vehicleResults.forEach(item=>{

box.innerHTML += `

<div class="results-card">

<h3>
🚗 ${item.brand} ${item.model}
</h3>

<p>
📅 Year: ${item.year}
</p>

<p>
⚙️ Engine: ${item.engine}
</p>

</div>

`;

});



partResults.forEach(item=>{

box.innerHTML += `

<div class="results-card">

<h3>
🔧 ${item.part}
</h3>

<p>
🚗 ${item.brand} ${item.model}
</p>

<p>
📅 Year: ${item.year}
</p>

<p class="oem-number">
OEM: ${item.oem}
</p>

</div>

`;

});



if(
manufacturerResults.length === 0 &&
vehicleResults.length === 0 &&
partResults.length === 0
){

box.innerHTML =
"<p>No results found</p>";

}


});
