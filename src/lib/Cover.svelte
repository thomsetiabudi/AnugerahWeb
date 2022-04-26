<script lang="ts">
  import { onMount } from "svelte";

  const END = 8;
  let i = 0,
    j = 0;
  let toFade;

  function roll() {
    setTimeout(() => {
      toFade.classList.add("opacity-0");
      j = j == END ? 0 : j + 1;
      setTimeout(() => {
        i = i == END ? 0 : i + 1;
        toFade.classList.remove("opacity-0");
        roll();
      }, 1000);
    }, 4000);
  }

  onMount(roll);
</script>

<div class="absolute inset-0">
  <div class="cover" style="background-image: url('/cover/{j}.jpeg');" />
  <div
    bind:this={toFade}
    class="cover transition duration-1000"
    style="background-image: url('/cover/{i}.jpeg');"
  />
  <div class="cover bg-primary opacity-80" />
</div>

<style>
  .cover {
    @apply absolute inset-0 bg-cover w-full h-full bg-center;
  }
</style>
