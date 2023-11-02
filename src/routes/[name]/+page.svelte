<script>
    import {MATCHES} from "$lib/constants";
    import ConfirmationWord from "$lib/ConfirmationWord.svelte";

    export let data;
    const {name} = data;
    const match = MATCHES[name];
</script>
<ConfirmationWord/>
<div class="outer">
    <div>
        <h1>You Are Buying Gifts For</h1>
        <h2>{match}</h2>
    </div>
</div>
<style lang="scss">

  .outer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
    color: var(--xmas-red);
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
    margin-bottom: 1rem;
    text-align: center;

  }

  h2 {
    font-family: 'Dancing Script', cursive;
    color: var(--xmas-green);
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 5rem;
    }
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: center;
  }
</style>
