<script>
    import {CONFIRMATION_WORD,CURRENT_YEAR} from "$lib/constants"
</script>
<span>
    {CONFIRMATION_WORD}
    <br/>
    {CURRENT_YEAR}
</span>

<style lang="scss">
  span {
    text-transform: uppercase;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #aaa;
    font-size: 1.5rem;
    font-family: sans-serif;
    text-align: right;
  }
</style>