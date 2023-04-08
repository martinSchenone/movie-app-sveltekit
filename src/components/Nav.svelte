<nav>
    <a href="/movies" sveltekit:prefetch>Home</a>
    <a href="/top" sveltekit:prefetch>Top Rated</a>
    <a href="https://www.linkedin.com/in/martin-schenone-578241236">Contact</a>
</nav>
<style>
    nav{
        position: sticky;
        top: 0;
        z-index: 1;
        display: flex;
        min-height: 10vh;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid #ccc;
        background-color: #ececec;
    }
    a{
        padding: 0rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
</style>

