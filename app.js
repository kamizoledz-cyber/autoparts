const app = document.getElementById("app");

app.innerHTML = `
<header class="header">

    <div class="logo">
        🚗 GAPHub
        <span>Global Auto Parts & Compatibility Hub</span>
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
        OEM Numbers • Cross References • Tire Calculator • Global Brands
    </p>

    
    <div class="search-box">

    <input
        type="text"
        placeholder="Search OEM Number, Part Name or Brand..."
    >

    <button>
        🔍 Search
    </button>

</div>

</section>
`;
