<script>
  import SmallCards from "./SmallCards.svelte";
</script>

<div
  class="card card-compact sm:card-normal mt-4 sm:mt-9 w-full bg-base-100 border border-base-300"
>
  <div class="card-body">
    <div class="flex justify-between flex-row-reverse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[30px] h-[30px] sm:w-12 sm:h-12 text-co-blue-p shrink-0"
      >
        <path
          fill-rule="evenodd"
          d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
          clip-rule="evenodd"
        />
      </svg>
      <h2 class="card-title text-3xl sm:text-5xl tracking-tight">
        Next Steps After Filing Your Claim
      </h2>
    </div>
    <p class="sm:text-2xl text-balance sm:py-4">
      Once you've opened your unemployment claim, there are a few things you
      need to do in order to remain eligible for benefits and receive payments
      on time.
    </p>
    <SmallCards />
    <p class="text-sm sm:text-base font-light italic pt-2">
      For more information, visit the <a
        href="https://cdle.colorado.gov/eligibility-and-work-search-requirements"
        class="link">Eligibility and Work Search Requirements</a
      > page on our website.
    </p>
  </div>
</div>
