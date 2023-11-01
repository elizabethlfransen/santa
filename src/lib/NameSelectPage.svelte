<script>
    import "@fontsource/dancing-script"
    import NameSelect from "$lib/NameSelect.svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        dispatch('change', {
            name: data.get("name")
        })
        return false;
    }
</script>
<form on:submit={handleSubmit} class="outer">
    <div>
        <label for="name">Select Your Name</label>
        <div class="inner">
            <NameSelect name="name"/>
            <button type="submit">go</button>
        </div>
    </div>
</form>
<style lang="scss">
  button {
    height: 4.4em;
    width: 4.4em;
    margin-left: 1rem;
    background-color: var(--xmas-green);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    color: #eee;
    font-family: 'Dancing Script', cursive;
    font-size: 1em;
    letter-spacing: .2rem;

    &:hover {
      background-color: var(--xmas-dark-green);
    }
  }

  .outer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .inner {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  label {
    font-family: 'Dancing Script', cursive;
    color: var(--xmas-red);
    font-size: 3rem;
    @media screen and (min-width: 768px) {
      font-size: 7rem;
    }
    margin-bottom: 2rem;
  }
</style>
