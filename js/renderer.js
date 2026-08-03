const Renderer = (() => {

    function render(results) {

        const box = document.getElementById("results");

        box.innerHTML = "";

        if (!results.length) {

            box.innerHTML = `
                <div class="results-card">
                    <h3>No Results Found</h3>
                    <p>Try another search.</p>
                </div>
            `;

            return;
        }

        results.forEach(result => {

            box.innerHTML += `

<div class="results-card">

<h2>
🚗 ${result.manufacturer?.name ?? ""}
${result.model?.name ?? ""}
</h2>

<p>

<b>Generation:</b>
${result.generation?.name ?? "-"}

</p>

<p>

<b>Engine:</b>
${result.engine?.code ?? "-"}

</p>

<p>

<b>Year:</b>
${result.vehicle.productionYear}

</p>

<p>

<b>Body:</b>
${result.vehicle.bodyType}

</p>

<p>

<b>Trim:</b>
${result.vehicle.trim}

</p>

<hr>

<h3>Compatible Parts</h3>

${
result.parts.length

?

result.parts.map(item => `

<div class="part-card">

<b>${item.part.name}</b>

<br>

${item.part.description}

<br>

Category:
${item.category?.name ?? "-"}

<br>

Manufacturer:
${item.manufacturer?.name ?? "-"}

</div>

`).join("")

:

"<p>No compatible parts.</p>"

}

</div>

`;

        });

    }

    return {

        render

    };

})();
