<script>
    import logo from '../assets/Delta-wordmark-white@2x.png';
    import { page } from '$app/stores'
</script>

<header class={$page.url.pathname = '/' ? 'header' : ''}>
    <img src={logo} class="logo" alt="logo">
    <ul class="navigation">
        <li class="nav-item">
            <a href="/">
                Home
            </a>
        </li>
        <li class="nav-item">
            <a href="/projects">
                Projects
            </a>
        </li>
        <li class="nav-item">
            <a href="/">
                About Delta
            </a>
        </li>
    </ul>
</header>

<style>
    .header {
        width: 100%;
        height: 5rem;
        background-color: #663366;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    .header-transparent {
        width: 100%;
        background-color: transparent;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    .logo {
        height: 2rem;
        width: auto;
    }

    .navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        list-style-type: none;
        text-decoration: none;
    }

    .nav-item {
        padding: 5px 15px;
    }
</style>