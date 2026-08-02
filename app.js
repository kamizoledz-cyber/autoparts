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

<section class="brands">

    <h2>Popular Manufacturers</h2>

    <div class="brand-grid">

        <div class="brand-card">Toyota</div>
        <div class="brand-card">BMW</div>
        <div class="brand-card">Mercedes</div>
        <div class="brand-card">VAG Group</div>
        <div class="brand-card">Ford</div>
        <div class="brand-card">Hyundai</div>
        <div class="brand-card">Renault</div>
        <div class="brand-card">Stellantis</div>
        <div class="brand-card">GM</div>
        <div class="brand-card">Geely</div>

    </div>

</section>

`;
