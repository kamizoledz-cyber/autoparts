const VehicleDetails = (() => {

    function show(result) {

        const box = document.getElementById("results");

        box.innerHTML = `

<div class="results-card">

<button id="vehicleBackBtn">

⬅ Back

</button>

<div class="vehicle-header">

<h2>

🚗 ${result.manufacturer?.name ?? ""} ${result.model?.name ?? ""}

</h2>

<p>

${result.generation?.name ?? "-"}

</p>

</div>

<div class="vehicle-info">

<p><strong>📅 Year</strong><br>${result.vehicle.productionYear}</p>

<p><strong>⚙ Engine</strong><br>${result.engine?.code ?? "-"}</p>

<p><strong>🚘 Body</strong><br>${result.vehicle.bodyType}</p>

<p><strong>🏷 Trim</strong><br>${result.vehicle.trim}</p>

<p><strong>🌍 Market</strong><br>${result.market?.name ?? "-"}</p>

<p><strong>🔄 Transmission</strong><br>${result.transmission?.name ?? "-"}</p>

</div>

<hr>

<h3>Compatible Parts (${result.parts.length})</h3>

<div class="parts-list">

${result.parts.map(item=>`

<div class="part-card">

<h4>

🔧 ${item.part.name}

</h4>

<p>

${item.part.description}

</p>

<button class="vehicle-part-btn"

data-part='${JSON.stringify(item).replace(/'/g,"&#39;")}'

>

View Part

</button>

</div>

`).join("")}

</div>

</div>

`;

        

        document
.getElementById("vehicleBackBtn")
.addEventListener("click",()=>{

    Renderer.render(App.lastResults);

});

        document

        .querySelectorAll(".vehicle-part-btn")

        .forEach(button=>{

            button.addEventListener("click",()=>{

                const part = JSON.parse(button.dataset.part);

                Details.showPart(part);

            });

        });

    }

    return {

        show

    };

})();
