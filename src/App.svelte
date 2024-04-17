<script>
  import "./app.css";
  import NavBar from "./lib/Nav.svelte";
  import Alerts from "./lib/Alerts.svelte";
  import HeroCard from "./lib/HeroCard.svelte";
  import SecondaryCard from "./lib/SecondaryCard.svelte";
  import TertiaryCards from "./lib/TertiaryCards.svelte";
  import Footer from "./lib/Footer.svelte";
  import logo from "./assets/cdle-logo.svg";
  import emblem from "./assets/cdle-emblem.svg";
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div
      class="w-full sm:px-6 md:px-9 navbar bg-base-100 border-b border-base-200"
    >
      <div class="flex-1 px-2">
        <a href="https://coloradoui.gov/">
          <img
            src={logo}
            alt="CDLE logo"
            class="md:block hidden w-[200px] h-auto"
          />
          <img src={emblem} alt="CDLE emblem" class="md:hidden w-auto h-9" />
        </a>
      </div>
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer-3"
          aria-label="open sidebar"
          class="btn btn-active btn-ghost"
        >
          Menu
        </label>
      </div>

      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li>
            <a
              href="https://cdle.colorado.gov/unemployment/ui-claimant-guide"
              target="_blank">Claimant Guide</a
            >
          </li>
          <li>
            <a
              href="https://cdle.colorado.gov/unemployment/assistance-programs"
              target="_blank">Assistance Programs</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <main class="px-2 sm:px-6 md:px-9 pt-4">
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
      <!-- Sidebar content here -->
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
