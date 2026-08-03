const Renderer = (() => {

    function render(results) {

        const box = document.getElementById("results");

        box.innerHTML = "";

        results.manufacturers.forEach(item => {

            box.innerHTML += `

<div class="results-card">

<h3>🏭 ${item.name}</h3>

<p>Country: ${item.country}</p>

</div>

`;

        });

        results.models.forEach(item => {

            box.innerHTML += `

<div class="results-card">

<h3>🚗 ${item.name}</h3>

<p>Segment: ${item.segment}</p>

<p>Production: ${item.productionStart} - ${item.productionEnd ?? "Present"}</p>

</div>

`;

        });

        results.parts.forEach(item => {

            const category = App.data.categories.find(

                c => c.id === item.categoryId

            );

            const manufacturer = App.data.manufacturers.find(

                m => m.id === item.manufacturerId

            );

            box.innerHTML += `

<div class="results-card">

<h3>🔧 ${item.name}</h3>

<p>${item.description}</p>

<p><strong>Category:</strong> ${category ? category.name : "-"}</p>

<p><strong>Manufacturer:</strong> ${manufacturer ? manufacturer.name : "-"}</p>

<p><strong>Status:</strong> ${item.status}</p>

</div>

`;

        });

        if (

            results.manufacturers.length === 0 &&
            results.models.length === 0 &&
            results.parts.length === 0

        ) {

            box.innerHTML = `

<div class="results-card">

<h3>No Results</h3>

<p>Try another search.</p>

</div>

`;

        }

    }

    return {

        render

    };

})();
