<script>
  import logo from "../assets/cdle-logo.svg";
  import emblem from "../assets/cdle-emblem.svg";
</script>

<div
  class="w-full sm:px-6 md:px-9 2xl:px-0 max-w-[1428px] m-auto navbar lg:py-4 bg-base-100 border-b border-base-200"
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
    <ul class="menu menu-horizontal gap-6">
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
