<script>
    import Header from '../../components/+header.svelte'
    import Card from '../../components/+card.svelte';

    import '@material/web/chips/filter-chip'
    import '@material/web/chips/_filter-chip.scss'
</script>

<div>
    <Header />
    <div class="projects-page">
        <h1 class="title">Our Projects</h1>
        <p class="subtitle">A handful of the projects made by our Delta students.</p>
    </div>
    <div class="project-filters">
        <md-chip-set aria-labelledby="dates-label">
            <md-filter-chip label="Digital media" aria-label="Digital media"></md-filter-chip>
            <md-filter-chip label="Research" aria-label="Research"></md-filter-chip>
            <md-filter-chip label="Data science" aria-label="Data science"></md-filter-chip>
            <md-filter-chip label="Hardware" aria-label="Hardware"></md-filter-chip>
        </md-chip-set>
    </div>
    <section class="projects-overview">
        <Card />
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

    .projects-overview {
        padding: 2rem 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
