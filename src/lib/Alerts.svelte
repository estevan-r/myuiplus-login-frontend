<script>
  let alert;
  function Hide(hideId) {
    hideId.style.display = "none";
  }
</script>

<div
  bind:this={alert}
  class="relative alert alert-info items-start text-left shadow-lg sm:p-6 mt-4"
>
  <div class="sm:hidden absolute top-0 right-0 p-4">
    <button
      type="button"
      on:click={() => Hide(alert)}
      class="min-h-6 h-6 w-6 btn btn-circle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="stroke-current shrink-0 w-6 h-6 text-base-content"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>

  <ul
    class="text-base-content flex flex-col gap-3 px-4 md:px-6 text-sm lg:text-base"
  >
    <li>
      <p>
        A claim must be fully processed, and payments are held until all pending
        issues are resolved. <strong
          >While issues are pending or during appeals, you must request payment
          each week to avoid your claim closing.</strong
        > The amount of time claims take to process varies and may take up to 5 to
        7 weeks from the file date.
      </p>
    </li>
    <li>
      <p>
        If you have a Program Integrity Issue on your claim, please ensure you
        upload a copy of your Driver's License or ID, a picture of yourself, a
        picture of your Social Security Card or Birth Certificate, and a current
        bill reflecting your current address matching your claim information at
        a minimum. Additional documents may be requested to resolve this issue.
      </p>
    </li>
    <li>
      <p>
        If you do not provide documents requested by us, your claim may be
        denied. Uploads can be made directly into the issue in MyUI+ or on our
        website under the "Upload Documents" section at <a
          target="_blank"
          href="https://coloradoui.gov/"
          class="link">ColoradoUI.gov</a
        >.
      </p>
    </li>
  </ul>

  <button
    type="button"
    on:click={() => Hide(alert)}
    class="hidden sm:inline-flex min-h-6 h-6 w-6 btn btn-circle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-4 w-4"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>

<style>
  ul {
    list-style-type: disc;
  }

  p {
    text-wrap: pretty;
  }
</style>
