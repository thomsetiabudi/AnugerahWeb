<script lang="ts">
  import { showNav, clickInternalURL, url } from "./state";

  import iconInsta from "../assets/img/instagram-circle-w.png";
  import iconLoc from "../assets/img/location-circle-w.png";
  import iconWA from "../assets/img/whatsapp-circle-w.png";

  const NAVS = [
    { href: "/", name: "Beranda" },
    { href: "/kisah", name: "Kisah Kami" },
    { href: "/gembala", name: "Tim Gembala" },
    { href: "/komunitas", name: "Komunitas" },
    { href: "/connect", name: "CONNECT" },
  ];

  url.subscribe(() => {
    showNav.set(false);
  });
</script>

<div
  class="transition ease-in duration-300 z-30 absolute inset-0 bg-primary {$showNav
    ? ''
    : 'translate-x-full'}"
>
  <div class="w-full h-full relative">
    <div class="nav">
      {#each NAVS as n}
        <a
          on:click={clickInternalURL}
          href={n.href}
          class={$url.pathname == n.href ? "active" : ""}>{n.name}</a
        >
      {/each}
    </div>
    <div class="info absolute bottom-6">
      <p class="hidden lg:block">Buka</p>
      <br class="hidden lg:block" />
      <p class="hidden lg:block">Senin-Jumat 09:00-17:00</p>
      <p class="hidden lg:block">Sabtu-Minggu 09:00-12:00</p>
      <br class="hidden lg:block" />
      <p>
        <a href="tel:+62213844777">(021) 3844 777</a>
      </p>
      <p>
        <a href="mailto:elroianugerah@gmail.com">elroianugerah@gmail.com</a>
      </p>
      <br />
      <p class="hidden md:block">GKMI Anugerah Jakarta</p>
      <p class="hidden md:block">Wisma Anugerah</p>
      <p class="hidden md:block">Jl. Taman Tanah Abang III/2</p>
      <p class="hidden md:block">10160 - Jakarta Pusat</p>
      <br class="hidden md:block" />
      <div
        class="justify-start items-end h-full lg:h-auto lg:justify-end flex flex-row gap-2"
      >
        <a href="https://instagram.com/gkmi_anugerah"
          ><img class="w-8" src={iconInsta} alt="Instagram" /></a
        >
        <a href="https://goo.gl/maps/aPQFoLxrTEo"
          ><img class="w-8" src={iconLoc} alt="Google Map" /></a
        >
        <a
          href="https://web.whatsapp.com/send?phone=628176904755&text=Halo%20Pak%20Febri%2C%20tentang%20GKMI%20Anugerah"
          ><img class="w-8" src={iconWA} alt="Whatsapp" /></a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .info {
    @apply p-6 pb-0 md:p-8;
  }
  .info > p,
  .info > br {
    @apply text-xs;
    letter-spacing: 2px;
  }
  .nav {
    @apply absolute h-full justify-center right-6 flex flex-col gap-4;
  }
  .nav > a {
    @apply text-right text-2xl text-white/50 tracking-widest hover:text-white transition duration-300;
  }
  .nav > a.active {
    @apply underline text-white;
  }
</style>
