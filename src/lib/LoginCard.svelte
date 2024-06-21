<script>
  import idMeLogo from "../assets/idme-logo.svg";
  import idMeLogoWhite from "../assets/idme-logo-white.svg";
</script>

<div
  class="card card-compact sm:card-normal rounded-lg shrink-0 md:w-[312px] lg:w-[360px] lg:max-w-sm shadow-2xl bg-base-100"
>
  <form class="card-body">
    <h1
      class="text-2xl font-semibold pb-6 sm:pb-8 lg:pb-12 xl:pb-8 tracking-tight"
    >
      Claimant Login
    </h1>
    <div class="form-control">
      <span class="label label-text">Sign in with an existing account</span>
      <a
        href="/"
        class="flex btn btn-primary border-none bg-idme-green text-white lg:text-lg hover:opacity-80 hover:bg-idme-green"
      >
        Sign in with <img
          src={idMeLogoWhite}
          alt="ID.me"
          class="lg:w-14 w-12 h-auto"
        />
      </a>
    </div>
    <div class="divider mb-3 text-sm font-bold">OR</div>
    <div class="form-control">
      <span class="label label-text">Create an account</span>
      <a
        href="/"
        class="flex btn btn-outline border-idme-green lg:text-lg hover:bg-white hover:border-idme-green hover:text-base-content hover:opacity-80"
      >
        Create an account <img
          src={idMeLogo}
          alt="ID.me"
          class="lg:w-14 w-12 h-auto"
        />
      </a>
    </div>
    <p class="pt-6 text-xs text-pretty">
      This system is for Official Use Only and contains Personally Identifiable
      Information (PII). Any misuse or unauthorized disclosure of information
      may result in both Civil and Criminal penalties.
    </p>
  </form>
</div>
