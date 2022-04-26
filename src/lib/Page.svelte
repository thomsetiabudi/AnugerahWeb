<script lang="ts">
  import { url, showNav, pathToData, clickInternalURL } from "./state";
  import { marked } from "marked";
  import { each } from "svelte/internal";

  let page = {};
  let header = "";
  let side = "";
  let md = "";
  let err = false;
  let children = [];
  let contacts = {};
  let parent = "";

  function getName(pathname) {
    return pathname.replace("/", "").replace("-", " ");
  }

  function loadData(pathname) {
    err = false;
    page = pathToData[pathname];
    if (page) {
      if (page.content) {
        header = page.content.header;
        side = page.content.side;
        md = page.content.md;
        contacts = page.content.contacts;
      }
      if (page.children) {
        parent = pathname;
        children = page.children;
        if (!page.content) {
          let c = page.children[0];
          loadData(pathname + c);
        }
      } else {
        if (page.siblings) {
          parent = pathname.slice(0, pathname.lastIndexOf("/"));
          children = page.siblings;
        }
      }
    } else {
      err = true;
    }
  }
  $: if ($url) {
    loadData($url.pathname);
  }
</script>

<div
  class="{$showNav ? 'opacity-0' : ''} transition duration-500 absolute inset-0"
>
  {#if err}
    <div class="pt-48 px-8 md:px-10 lg:pr-24">
      <p class="text-3xl mb-4">Hilang arah?</p>
      <p class="font-sans">
        Akulah jalan dan kebenaran dan hidup. Tidak ada seorang pun yang datang
        kepada Bapa, kalau tidak melalui Aku.
      </p>
    </div>
  {:else}
    <div class="flex flex-row w-full h-full px-8 md:px-10 lg:pr-24">
      <div class="lg:grow w-full lg:w-auto flex flex-row pt-24 lg:pt-48">
        <div class="hidden lg:flex w-14 items-center">
          <div class="side">{side}</div>
        </div>
        <div class="grow w-full lg:max-w-xl flex flex-col gap-2">
          <div
            class="lg:hidden h-20 flex-none flex flex-row gap-6 items-center overflow-auto flex-nowrap w-full"
          >
            <a
              on:click={clickInternalURL}
              href="/"
              class="material-icons text-white/50 hover:text-white transition duration-300"
              >arrow_back</a
            >
            {#if children}
              {#each children as child}
                <a
                  on:click={clickInternalURL}
                  class="whitespace-nowrap capitalize hover:underline hover:text-white transition duration-300 {parent +
                    child ==
                  $url.pathname
                    ? 'underline text-white'
                    : 'text-white/50'}"
                  href={parent + child}>{getName(child)}</a
                >
              {/each}
            {/if}
          </div>
          <h1 class="shrink">{header}</h1>
          <div class="shrink flex flex-row gap-2">
            {#if contacts}
              {#each Object.keys(contacts) as k}
                <a href={contacts[k]}>
                  <div
                    class="w-8 h-8 bg-cover"
                    style="background-image: url('/icon/{k}-circle-w.png')"
                  />
                </a>
              {/each}
            {/if}
          </div>
          <div class="flex flex-col grow overflow-auto">
            {#if md}
              {@html marked.parse(md)}
            {/if}
          </div>
          <div class="h-4 w-1" />
        </div>
      </div>
      {#if children}
        <div
          class="hidden overflow-auto lg:flex flex-col h-full w-72 border-x border-white/50"
        >
          <a
            href="/"
            on:click={clickInternalURL}
            class="flex-none flex h-20 items-end pb-2 pl-12 capitalize bg-neutral-50/25 hover:bg-neutral-50/[0.4] transition duration-500 cursor-pointer"
          >
            <span
              class="{$url.pathname == parent
                ? 'text-white'
                : 'text-neutral-50/75 bg-neutral-100/[0.1]'} flex items-center transition duration-500"
            >
              Beranda</span
            ></a
          >
          {#each children as child}
            <a
              href={parent + child}
              on:click={clickInternalURL}
              class="{$url.pathname == parent + child
                ? 'bg-primary'
                : 'bg-neutral-100/[0.1]'} flex-none first:border-t-0 border-t last:border-b border-white/50 flex h-24 items-center pl-12 group capitalize bg-hover transition duration-500 cursor-pointer"
            >
              <span
                class="{$url.pathname == parent + child
                  ? 'text-white'
                  : 'text-neutral-50/75'} group-hover:text-white transition duration-500 group-hover:underline"
              >
                {getName(child)}</span
              >
            </a>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  h1 {
    letter-spacing: 3px;
    @apply text-2xl lg:text-3xl uppercase;
  }
  .side {
    letter-spacing: 5px;
    @apply text-xs absolute uppercase text-center origin-top-left -rotate-90;
  }
</style>
