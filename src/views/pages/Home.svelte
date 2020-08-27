<div class="home">
  <h1>Hello</h1>
</div>

<script>
  import { onMount } from 'svelte';
  import { getPlayerData } from "../../services/apiCalls/playerData";

  let playerData = null

  onMount(async () => {
    const res = await getPlayerData();
    playerData = res;
  });
</script>

<style lang="scss">
</style>