<script>
    import Header from '../components/+header.svelte'
    import heroVideo from '../assets/missiontech_2.mp4'
    import logo from '../assets/Delta-wordmark-white@2x.png';
</script>

<div>
    <Header />
    <div>
        <video src={heroVideo} class="hero-video" autoplay aria-hidden="true" />
        <img src={logo} alt="delta logo">
    </div>
</div>

<style>
    .hero-video {
        width: 100%;
        height: auto;
    }
</style>
