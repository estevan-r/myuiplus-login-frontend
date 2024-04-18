<script>
  import "./app.css";
  import Nav from "./lib/Nav.svelte";
  import Alerts from "./lib/Alerts.svelte";
  import HeroCard from "./lib/HeroCard.svelte";
  import SecondaryCard from "./lib/SecondaryCard.svelte";
  import TertiaryCards from "./lib/TertiaryCards.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <Nav />

    <main class="max-w-[1500px] m-auto px-2 sm:px-6 md:px-9 pt-4">
      <Alerts />
      <HeroCard />
      <SecondaryCard />
      <TertiaryCards />
    </main>
    <Footer />
  </div>

  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu p-6 gap-6 sm:w-80 w-72 min-h-full bg-base-200">
      <li>
        <a
          href="https://cdle.colorado.gov/unemployment/ui-claimant-guide"
          target="_blank"
          class="btn btn-active btn-ghost">Claimant Guide</a
        >
      </li>
      <li>
        <a
          href="https://cdle.colorado.gov/unemployment/assistance-programs"
          target="_blank"
          class="btn btn-active btn-ghost">Assistance Programs</a
        >
      </li>
    </ul>
  </div>
</div>
