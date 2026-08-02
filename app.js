const app = document.getElementById("app");

app.innerHTML = `

<header class="header">

    <div class="logo">
        🚗 GAPHub
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

    <h1>Find Any Auto Part Worldwide</h1>

    <p>
        OEM Numbers • Cross References • Tire Calculator • Global Brands
    </p>

    <div class="search-box">

        <input
            type="text"
            placeholder="Search OEM Number, Part Name or Brand..."
        >

        <button>🔍 Search</button>

    </div>

</section>

<section class="stats">

    <div class="stat-card">
        <h2>120K+</h2>
        <p>OEM Parts</p>
    </div>

    <div class="stat-card">
        <h2>80+</h2>
        <p>Manufacturers</p>
    </div>

    <div class="stat-card">
        <h2>400+</h2>
        <p>Vehicle Models</p>
    </div>

    <div class="stat-card">
        <h2>4</h2>
        <p>Languages</p>
    </div>

</section>

<section class="brands">

    <h2>Popular Manufacturers</h2>

    <div class="brand-grid">

        <div class="brand-card">Toyota</div>
        <div class="brand-card">BMW</div>
        <div class="brand-card">Mercedes</div>
        <div class="brand-card">Ford</div>
        <div class="brand-card">Hyundai</div>
        <div class="brand-card">Renault</div>
        <div class="brand-card">Volkswagen</div>
        <div class="brand-card">Honda</div>

    </div>

</section>

<footer class="footer">

    <p>
        © 2026 GAPHub — Global Auto Parts & Compatibility Platform
    </p>

</footer>

`;
