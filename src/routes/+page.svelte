<script>
    import NameSelectPage from "$lib/NameSelectPage.svelte";
    import ResultPage from "$lib/ResultPage.svelte";
    import {MATCHES, CONFIRMATION_WORD} from "$lib/constants"

    /** @type {string} */
    let name = "";

    function handle(data) {
        name = data.detail.name;
    }
</script>
<span>
    {CONFIRMATION_WORD}
</span>
{#if name === ""}
    <NameSelectPage on:change={handle}/>
{:else}
    <ResultPage match={MATCHES[name]}/>
{/if}
<style lang="scss">
    span {
      text-transform: uppercase;
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: #aaa;
      font-size: 1.5rem;
      font-family: sans-serif;
    }
</style>