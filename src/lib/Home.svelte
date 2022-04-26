<script lang="ts">
  import { clickInternalURL, showNav } from "./state";
</script>

<div class="absolute inset-0 flex flex-col md:flex-row">
  <div class="grow md:grow-0 md:w-1/2 md:h-full flex flex-row pt-8">
    <div
      class="flex flex-col pl-8 md:pl-10 lg:pl-24 pt-36 shrink justify-start"
    >
      <div
        class="{$showNav
          ? 'opacity-0'
          : ''} transition duration-300 grow flex flex-col gap-2 md:gap-4"
      >
        <p class="text-2xl md:text-3xl uppercase">Ibadah Minggu</p>
        <p class="text-2xl md:text-3xl">
          08:00 <span class="text-base md:text-xl">WIB</span>
        </p>
        <a
          href="https://www.youtube.com/channel/UCbatukszpiB9Y9LvDvLwXKg/featured"
          class="md:text-lg underline hover:opacity-70 transition duration-300"
        >
          Join Online
        </a>

        <div class="relative flex-1">
          <div class="info">
            <p>Buka</p>
            <br />
            <p>Senin-Jumat 09:00-17:00</p>
            <p>Sabtu-Minggu 09:00-12:00</p>
            <br />
            <a href="tel:+62213844777">(021) 3844 777</a>
            <a href="mailto:elroianugerah@gmail.com">elroianugerah@gmail.com</a>
            <br />
            <br />
            <p>GKMI Anugerah Jakarta</p>
            <p>Wisma Anugerah</p>
            <p>Jl. Taman Tanah Abang III/2</p>
            <p>10160 - Jakarta Pusat</p>
            <br />
            <div
              class="justify-start items-end h-full lg:h-auto flex flex-row gap-2"
            >
              <a href="https://instagram.com/gkmi_anugerah"
                ><img
                  class="w-8"
                  src="/icon/instagram-circle-w.png"
                  alt="Instagram"
                /></a
              >
              <a href="https://goo.gl/maps/aPQFoLxrTEo"
                ><img
                  class="w-8"
                  src="/icon/location-circle-w.png"
                  alt="Google Map"
                /></a
              >
              <a
                href="https://web.whatsapp.com/send?phone=628176904755&text=Halo%20Pak%20Febri%2C%20tentang%20GKMI%20Anugerah"
                ><img
                  class="w-8"
                  src="/icon/whatsapp-circle-w.png"
                  alt="Whatsapp"
                /></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="{$showNav
      ? 'opacity-0'
      : ''} transition duration-300 h-36 md:h-auto md:grow flex flex-col"
  >
    <div class="top flex-1 flex flex-row">
      <a class="group page bg-hover" href="/kisah" on:click={clickInternalURL}>
        <span class="md:group-hover:-translate-y-full">Kisah Kami</span>
      </a>
      <a
        class="group page bg-hover"
        href="/gembala"
        on:click={clickInternalURL}
      >
        <span class="md:group-hover:-translate-y-full">Tim Gembala</span></a
      >
    </div>
    <div class="bottom flex-1 flex flex-row">
      <a
        class="group page bg-hover"
        href="/connect"
        on:click={clickInternalURL}
      >
        <span class="md:group-hover:-translate-y-full">Connect</span>
      </a>
      <a
        class="group page bg-hover"
        href="/komunitas"
        on:click={clickInternalURL}
      >
        <span class="md:group-hover:-translate-y-full">Komunitas</span>
      </a>
    </div>
  </div>
  <div class="hidden md:flex w-24" />
</div>

<style>
  .page {
    @apply cursor-pointer transition duration-500 flex-1 font-thin border border-white/50 hover:border-white relative;
  }
  .page > span {
    @apply whitespace-nowrap text-neutral-50/[80] text-xs font-thin uppercase transition duration-500 absolute bottom-6 left-6;
    letter-spacing: 3px;
  }
  .top > * {
    @apply lg:border-t-0;
  }
  .bottom > * {
    @apply border-b-0;
  }
  .info {
    @apply max-w-full overflow-auto w-full pt-6 lg:h-full lg:pt-12;
  }
  .info > p,
  .info > a,
  .info > br {
    @apply hidden lg:block;
    font-size: 0.6rem;
    letter-spacing: 2px;
  }
</style>
