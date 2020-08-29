<div class="home">
  <p class="home__explanations">Rentre ton pseudo et chosis la file pour afficher tes informations!</p>
  <form class="home__form" on:submit|preventDefault={submitUser}>
    <input type="text" placeholder="Enter your player name" bind:value={playerName}>
    <div class="home__form-radios">
      <div>
        <input type="radio" id="soloQ" name="queue" bind:group={selectedQueue} on:change={submitUser} value="soloQ" checked>
        <label for="soloQ">soloQ</label>
      </div>
      <div>
        <input type="radio" id="flexQ" name="queue" bind:group={selectedQueue} on:change={submitUser} value="flexQ">
        <label for="flexQ">flexQ</label>
      </div>
    </div>
  </form>
  {#if playerData.loaded}
    <div>
      <p>{playerData.infos.summonerName} est classé {playerData.infos.tier} {playerData.infos.rank} {playerData.infos.leaguePoints} lp</p>
    </div>
  {/if}
  {#if playerData.error}
    <div>
      <p>{playerData.error}</p>
    </div>
  {/if}
</div>

<script>
  import { getPlayerData } from "../../services/apiCalls/playerData"

  let playerData = {
    loaded: false,
    infos: {}
  }
  let playerName = ''
  let selectedQueue = 'soloQ'

  const submitUser = async () => {
    playerData = {}
    if (playerName.length) {
      const res = await getPlayerData(playerName)
      if (res.data) {
        selectedQueue === 'soloQ' ? playerData['infos'] = res.data[1] : playerData['infos'] = res.data[0]
        playerData.loaded = true
      } else if (res.error) {
        playerData.error = res.error
      } else if (res.status.message) {
        playerData.error = res.status.message
      }
    }
  }
</script>

<style lang="scss">
  .home {

    &__explanations {
      margin: 20px 0 20px;
      text-align: center;
    }

    &__form {
      text-align: center;
    }

    &__form-radios {
      display: flex;
      justify-content: space-between;
      width: 150px;
      margin: 20px auto 0;
    }
  }
</style>