<script lang="ts">
  import { clickInternalURL, showNav, url } from "./lib/state";

  import Nav from "./lib/Nav.svelte";
  import Home from "./lib/Home.svelte";
  import Page from "./lib/Page.svelte";
  import Cover from "./lib/Cover.svelte";

  import "../app.postcss";
</script>

<div class="absolute inset-0 bg-sky-900/75 overflow-hidden">
  <Cover />
  <Nav />
  <a href="/" on:click={clickInternalURL}
    ><div
      class="z-50 absolute hidden lg:flex top-10 left-8 w-8 h-10 bg-contain bg-no-repeat"
      style="background-image: url('/logo-sm.png');"
    /></a
  >
  <a href="/" on:click={clickInternalURL}
    ><img
      class="z-50 absolute max-h-16 md:max-h-24 left-8 md:left-10 lg:left-24 top-6 lg:top-10"
      src="/logo-text.png"
      alt="Logo GKMI Anugerah"
    /></a
  >
  <div
    id="qunci-button"
    class="z-50 fixed right-[1.65rem] top-4 bg-primary rounded-full"
  />
  <div
    class="cursor-pointer z-40 absolute right-4 top-16 lg:top-20 flex items-center w-min"
    on:click={() => {
      showNav.set(!$showNav);
    }}
  >
    <span class="uppercase tracked text-xs">Menu</span><span
      class="text-sm material-icons">{$showNav ? "close" : "menu"}</span
    >
  </div>
  {#if $url.pathname == "/"}
    <Home />
  {:else}
    <Page />
  {/if}
</div>

<style>
</style>
