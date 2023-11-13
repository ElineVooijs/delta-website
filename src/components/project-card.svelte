<script lang="ts">
    import type {Project} from "../types";

    export let project: Project;
</script>

<div class="card">
    <img src={project.thumbnail.url} class="card-img" alt="{project.thumbnail.altText}">
    <div class="card-title">{project.title}</div>
</div>

<style>
    .card {
        width: 20rem;
        /* padding: 1rem 2rem; */
        margin: 0 1rem;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    .card-title {
        font-size: 1.5rem;
    }

    .card-img {
        width: 100%;
        overflow: hidden;
    }

    .card:hover .card-img {
        filter: blur(5px);
    }
</style>
