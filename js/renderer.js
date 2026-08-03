const Renderer = (() => {

    function render(results) {

        const box = document.getElementById("results");

        box.innerHTML = "";

        if (!results.length) {

            box.innerHTML = `
                <div class="results-card empty-result">
                    <h2>🔍 No Results Found</h2>
                    <p>Try another keyword or vehicle.</p>
                </div>
            `;

            return;

        }

        results.forEach(result => {

            box.innerHTML += `

<div class="results-card">

<div class="vehicle-header">

<h2>

🚗 ${result.manufacturer?.name ?? ""} ${result.model?.name ?? ""}

</h2>

<p>

${result.generation?.name ?? "-"}

</p>

</div>

<div class="vehicle-info">

<p><strong>📅 Year:</strong> ${result.vehicle.productionYear}</p>

<p><strong>⚙ Engine:</strong> ${result.engine?.code ?? "-"}</p>

<p><strong>🚘 Body:</strong> ${result.vehicle.bodyType}</p>

<p><strong>🏷 Trim:</strong> ${result.vehicle.trim}</p>

<p><strong>🌍 Market:</strong> ${result.market?.name ?? "-"}</p>

<p><strong>🔄 Transmission:</strong> ${result.transmission?.name ?? "-"}</p>

</div>

<hr>

<h3>Compatible Parts (${result.parts.length})</h3>

<div class="parts-list">

${

result.parts.length

?

result.parts.map(item => `

<div class="part-card">

<h4>

🔧 ${item.part.name}

</h4>

<p>

${item.part.description}

</p>

<p>

<strong>Category:</strong>

${item.category?.name ?? "-"}

</p>

<p>

<strong>Manufacturer:</strong>

${item.manufacturer?.name ?? "-"}

</p>

<p>

<strong>Status:</strong>

${item.part.status}

</p>

</div>

`).join("")

:

`<p>No compatible parts.</p>`

}

</div>

</div>

`;

        });

    }

    return {

        render

    };

})();
