<script>
  import LoginCard from "./LoginCard.svelte";
</script>

<div
  class="hero rounded-2xl mt-4 p-9 bg-gradient-to-b from-co-blue-p to-co-blue-s"
>
  <div class="hero-content flex-col lg:flex-row-reverse gap-9">
    <div
      class="max-w-sm rounded-lg shadow-2xl w-full h-96 bg-hero bg-[center_right_-7.5rem] bg-no-repeat bg-[length:250%]"
    ></div>
    <div>
      <h2 class="text-5xl font-bold tracking-tight text-base-100">
        Apply for Benefits
      </h2>
      <p class="py-6 text-base-100 text-2xl font-light text-pretty">
        If you received $2,500 or more in wages on a W-2 from any employer where
        taxes were withheld in the last 18 months, you are likely eligible to
        file a claim for unemployment benefits. <br /><br />Gather your
        income-related information, such as pay stubs, and be prepared to
        provide information about your work history in the last 18 months,
        including the name and address of the business, dates you worked, and
        rate of pay.
      </p>
      <a
        href="https://myui.clouduim.cdle.state.co.us/Claimant/Benefits/Claims/Initial/ViewPrelimInfo.ASPX"
      >
        <button
          class="btn btn-lg btn-outline text-base-100 text-xl border-co-yellow hover:bg-co-yellow hover:text-base-content"
        >
          Apply
        </button>
      </a>
    </div>
    <LoginCard />
  </div>
</div>
