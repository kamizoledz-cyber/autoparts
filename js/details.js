
const Details = (() => {

    function showPart(partData) {

        const box = document.getElementById("results");

        box.innerHTML = `

<div class="results-card">

<button id="backBtn">

⬅ Back

</button>

<div class="vehicle-header">

<h2>

🔧 ${partData.part.name}

</h2>

<p>

${partData.part.description}

</p>

</div>

<div class="vehicle-info">

<p>

<strong>ID</strong><br>

${partData.part.id}

</p>

<p>

<strong>Category</strong><br>

${partData.category?.name ?? "-"}

</p>

<p>

<strong>Manufacturer</strong><br>

${partData.manufacturer?.name ?? "-"}

</p>

<p>

<strong>Status</strong><br>

${partData.part.status}

</p>

</div>

</div>

`;

        document

            .getElementById("backBtn")

            .addEventListener("click", () => {

                history.back();

                location.reload();

            });

    }

    return {

        showPart

    };

})();
