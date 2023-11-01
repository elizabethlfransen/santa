<script>
    import {NAMES} from "$lib/constants"
    /** @type {string} name of input */
    export let name;
</script>
<select id={name} name={name}>
    <option value=""></option>
    {#each NAMES as name}
        <option value={name}>{name}</option>
    {/each}
</select>
<style lang="scss">
  select {
    background: transparent;
    border: 2px solid var(--xmas-dark-green);
    border-radius: 8px;
    color: var(--xmas-light-green);
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
    flex-grow: 1;

    &:hover {
      background-color: var(--xmas-dark-green);
    }
  }
</style>