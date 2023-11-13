<script lang="ts">
    import Header from '../../components/header.svelte'
    import ProjectCard from '../../components/project-card.svelte';
    import '@material/web/chips/filter-chip'
    import '@material/web/chips/_filter-chip.scss'
    import {onMount} from "svelte";
    import type {Category, Project} from "../../types";

    let projects: Array<Project> = [];
    let categories: Array<Category> = [];

    onMount(async () => {
        const response = await fetch("https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/closkv9m2uctv01t7gerrdt2q/master", {
            method: "POST",
            body: JSON.stringify({
                query: "{projects{id slug title author{...on Author{id name title}}thumbnail{url altText}categories{name}}categories{name}}"
            })
        });

        const json = await response.json();
        const data = json.data

        projects = data.projects
        categories = data.categories
    });
</script>

<div>
    <Header/>
    <div class="projects-page">
        <h1 class="title">Our Projects</h1>
        <p class="subtitle">A handful of the projects made by our Delta students.</p>
    </div>
    <div class="project-filters">
        <md-chip-set aria-labelledby="dates-label">
            {#each categories as category}
                <md-filter-chip class="project-filters-chip" label="{category.name}" aria-label="{category.name}"/>
            {/each}
        </md-chip-set>
    </div>
    <section class="projects-overview">
        {#each projects as project}
            <ProjectCard project="{project}"/>
        {/each}
    </section>
</div>

<style>
    :root {
        /* general */
        --md-filter-chip-container-shape: 20px;
        --md-filter-chip-label-text-font: 'Montserrat', Arial, Helvetica, sans-serif;

        /* button */
        --md-filter-chip-outline-color: #CECECE; /* btn border color */
        --md-filter-chip-hover-outline-color: #663366;
        --md-sys-color-secondary-container: #663366; /* btn background color */
        --md-filter-chip-selected-hover-label-text-color: #FFF; /* Text color hover */
        --md-filter-chip-selected-label-text-color: #FFF; /* selected text color */
        --md-filter-chip-focus-label-text-color: #CECECE;
        --md-filter-chip-hover-label-text-color: #663366;
        --md-filter-chip-label-text-color: #CECECE; /* not selected text color */
        --md-sys-color-on-secondary-container: #FFF; /* icon color */
    }

    .projects-page {
        color: #663366;
        height: 20rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 3.5rem;
    }

    .subtitle {
        font-family: 'Crimson text', Georgia, 'Times New Roman', Times, serif;
        font-size: 1.5rem;
    }

    .project-filters {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project-filters-chip {
        margin: 0 .25rem;
    }

    .projects-overview {
        padding: 2rem 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
