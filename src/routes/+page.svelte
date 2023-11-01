<script>
    import NameSelectPage from "$lib/NameSelectPage.svelte";
    import ResultPage from "$lib/ResultPage.svelte";
    import {MATCHES} from "$lib/constants"

    /** @type {string} */
    let name = "";

    function handle(data) {
        name = data.detail.name;
    }
</script>
{#if name === ""}
    <NameSelectPage on:change={handle}/>
{:else}
    <ResultPage match={MATCHES[name]}/>
{/if}