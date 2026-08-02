const app = document.getElementById("app");

app.innerHTML = `
<header class="header">
    <div class="logo">
        🚗 GAPHub
    </div>

    <nav class="menu">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">Vehicles</a>
        <a href="#">Tires</a>
        <a href="#">About</a>
    </nav>
</header>

<main class="hero">
    <h1>Global Auto Parts & Compatibility Hub</h1>
    <p>
        Search OEM part numbers, compare compatibility,
        decode tire specifications, and explore trusted aftermarket brands.
    </p>

    <button class="start-btn">
        Start Searching
    </button>
</main>
`;
