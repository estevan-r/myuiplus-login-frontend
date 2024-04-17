<script>
  import logo from "../assets/cdle-logo.svg";
  import emblem from "../assets/cdle-emblem.svg";
</script>

<header>
  <nav class="navbar justify-between">
    <div>
      <a href="https://coloradoui.gov/">
        <img
          src={logo}
          alt="CDLE logo"
          class="md:block hidden w-[200px] h-auto"
        />
        <img src={emblem} alt="CDLE emblem" class="md:hidden w-auto h-9" />
      </a>
    </div>

    <ul class="hidden menu menu-horizontal px-1 gap-8">
      <li>
        <a href="/">Find a Job</a>
      </li>
      <li>
        <a href="/">Report Fraud</a>
      </li>
      <li>
        <a href="/">Claimant Guide</a>
      </li>
      <li>
        <a href="/">Maintaining Eligibility</a>
      </li>
      <li>
        <a href="/">Assistance Programs</a>
      </li>
    </ul>
  </nav>
  <div class="w-full h-[1px] bg-base-200 my-3"></div>
</header>
