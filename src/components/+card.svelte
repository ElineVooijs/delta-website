<script>
    import farmbot from '../assets/projects/Farmbot.jpeg';
    import mrrDrones from '../assets/projects/MRR-Drones.jpeg';
    import strijpHotspots from '../assets/projects/strijp-t-hotspots.jpeg';
</script>

<div class="card">
    <img src={farmbot} class="card-img" alt="farmbot">
    <h4>Delta website</h4>
</div>
<div class="card">
    <img src={mrrDrones} class="card-img" alt="mrrDrones">
    <h4>Delta website</h4>
</div>
<div class="card">
    <img src={strijpHotspots} class="card-img" alt="strijpHotspots">
    <h4>Delta website</h4>
</div>

<style>
    .card {
        height: 20rem;
        width: 20rem;
        /* padding: 1rem 2rem; */
        margin: 0 1rem;
        color: white;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 1rem;
        overflow: hidden;
    }

    .card:hover .card-img {
        filter: blur(5px);
    }
</style>