<script>
  import LoginCard from "./LoginCard.svelte";
</script>

<div
  class="hero rounded-2xl mt-4 p-6 md:p-9 bg-gradient-to-b from-co-blue-p to-co-blue-s"
>
  <div
    class="hero-content p-0 sm:p-4 flex-col lg:flex-row-reverse gap-6 sm:gap-9 justify-between"
  >
    <LoginCard />

    <img
      src="src/assets/ui-hero.jpg"
      alt="Woman at a table typing on her computer."
      class="hidden max-w-sm rounded-lg shadow-2xl w-72 h-auto"
    />

    <div class="flex flex-col gap-4 sm:gap-6">
      <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-base-100">
        Apply for Benefits
      </h2>
      <p class="text-base-100 sm:text-2xl font-light text-balance">
        If you received $2,500 or more in wages on a W-2 from any employer where
        taxes were withheld in the last 18 months, you are likely eligible to
        file a claim for unemployment benefits.
      </p>
      <p class="text-base-100 sm:text-2xl font-light text-balance">
        Gather your income-related information, such as pay stubs, and be
        prepared to provide information about your work history in the last 18
        months, including the name and address of the business, dates you
        worked, and rate of pay.
      </p>
      <a
        href="https://myui.clouduim.cdle.state.co.us/Claimant/Benefits/Claims/Initial/ViewPrelimInfo.ASPX"
      >
        <button
          class="btn w-full btn-md md:w-auto sm:btn-lg btn-outline text-base-100 sm:text-xl border-co-yellow-p hover:bg-co-yellow-p hover:text-base-content"
        >
          Apply
        </button>
      </a>
    </div>
  </div>
</div>
