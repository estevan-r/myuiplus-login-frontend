<script>
  import LoginCard from "./LoginCard.svelte";
  import hero from "../assets/ui-hero.jpg";
</script>

<div
  class="hero rounded-2xl mt-4 p-6 md:p-6 bg-gradient-to-b from-co-blue-p to-co-blue-s"
>
  <div
    class="hero-content max-w-none p-0 sm:p-4 flex-col lg:flex-row gap-6 sm:gap-8 justify-between"
  >
    <div class="md:flex md:gap-9 md:items-center">
      <LoginCard />

      <img
        src={hero}
        alt="Woman at a table typing on her computer."
        class="hidden md:block lg:hidden max-w-sm rounded-lg shadow-2xl w-auto h-[340px] object-cover"
      />
    </div>

    <div
      class="md:max-w-[600px] lg:max-w-none flex flex-col gap-4 sm:gap-6 px-4"
    >
      <h2
        class="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-base-100"
      >
        Apply for Benefits
      </h2>
      <p class="text-base-100 sm:text-xl 2xl:text-2xl font-light text-balance">
        If you received $2,500 or more in wages on a W-2 from any employer where
        taxes were withheld in the last 18 months, you are likely eligible to
        file a claim for unemployment benefits.
      </p>
      <p class="text-base-100 sm:text-xl 2xl:text-2xl font-light text-balance">
        Gather your income-related information, such as pay stubs, and be
        prepared to provide information about your work history in the last 18
        months, including the name and address of the business, dates you
        worked, and rate of pay.
      </p>
      <button
        class="btn w-full btn-md md:w-1/3 lg:w-fit sm:btn-lg btn-outline text-base-100 sm:text-lg border-co-yellow-p hover:bg-co-yellow-p hover:text-base-content"
      >
        <a
          href="https://myui.clouduim.cdle.state.co.us/Claimant/Benefits/Claims/Initial/ViewPrelimInfo.ASPX"
        >
          Apply
        </a>
      </button>
    </div>
    <img
      src={hero}
      alt="Woman at a table typing on her computer."
      class="hidden xl:block max-w-sm rounded-lg shadow-2xl w-64 2xl:w-80 h-auto object-cover"
    />
  </div>
</div>
