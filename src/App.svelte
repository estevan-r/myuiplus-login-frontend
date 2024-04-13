<script>
  import "./app.css";
  import NavBar from "./lib/Nav.svelte";
  import Alerts from "./lib/Alerts.svelte";
  import HeroCard from "./lib/HeroCard.svelte";
  import SecondaryCard from "./lib/SecondaryCard.svelte";
  import TertiaryCards from "./lib/TertiaryCards.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main class="px-2 pt3 sm:px-9 sm:pt-8">
  <NavBar />
  <Alerts />
  <HeroCard />
  <SecondaryCard />
  <TertiaryCards />
</main>
<Footer />
