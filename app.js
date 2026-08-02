
const app = document.getElementById("app");

app.innerHTML = `
<header class="header">
    <div class="logo">
        🚗 PartMatrix
        <span>Global Auto Parts & Compatibility Platform</span>
    </div>
</header>

<section class="hero">

<h1>Find Any Auto Part Worldwide</h1>

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
let compatibility = [];


Promise.all([

fetch("parts.json").then(res => res.json()),

fetch("vehicles.json").then(res => res.json()),

fetch("manufacturers.json").then(res => res.json()),

fetch("compatibility.json").then(res => res.json())

])
.then(data => {

parts = data[0];
vehicles = data[1];
manufacturers = data[2];
compatibility = data[3];

});



document.getElementById("searchBtn")
.addEventListener("click", ()=>{


let value = document
.getElementById("searchInput")
.value
.toLowerCase()
.trim();


let box = document.getElementById("results");

box.innerHTML = "";



let manufacturerResults = manufacturers.filter(item =>
item.name.toLowerCase().includes(value) ||
item.country.toLowerCase().includes(value)
);



let vehicleResults = vehicles.filter(item =>
item.brand.toLowerCase().includes(value) ||
item.model.toLowerCase().includes(value) ||
item.engine.toLowerCase().includes(value)
);



let partResults = parts.filter(item =>
item.brand.toLowerCase().includes(value) ||
item.model.toLowerCase().includes(value) ||
item.part.toLowerCase().includes(value) ||
item.oem.toLowerCase().includes(value)
);



manufacturerResults.forEach(item=>{

box.innerHTML += `

<div class="results-card">

<h3>
🏭 ${item.name}
</h3>

<p>
🌍 ${item.country}
</p>

</div>

`;

});




vehicleResults.forEach(car=>{


let compatibleParts = compatibility
.filter(link => link.vehicleId === car.id)
.map(link => 
parts.find(part => part.id === link.partId)
)
.filter(Boolean);



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


<h4>
🔗 Compatible Parts
</h4>

${
compatibleParts.length ?

compatibleParts.map(part => `

<p>
🔧 ${part.part}
<br>
OEM: ${part.oem}
</p>

`).join("")

:

"<p>No compatible parts found</p>"

}

</div>

`;

});




partResults.forEach(part=>{


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



if(
manufacturerResults.length === 0 &&
vehicleResults.length === 0 &&
partResults.length === 0
){

box.innerHTML = "<p>No results found</p>";

}


});
