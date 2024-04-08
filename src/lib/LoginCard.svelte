<div class="card shrink-0 w-[360px] max-w-sm shadow-2xl bg-base-100">
  <form class="card-body">
    <h1 class="text-2xl font-semibold pb-8 tracking-tight">Claimant Login</h1>
    <div class="form-control">
      <label for="ss-number" class="label">
        <span class="label-text">Social Security Number</span>
      </label>
      <input
        type="email"
        id="ss-number"
        name="ss-number"
        class="input input-bordered"
        required
      />
    </div>
    <div class="form-control">
      <div class="flex justify-between">
        <label for="password" class="label">
          <span class="label-text">Password</span>
        </label>
        <label for="password" class="label">
          <a href="/" class="label-text-alt link link-hover">Forgot password?</a
          >
        </label>
      </div>
      <input
        type="password"
        id="password"
        name="password"
        class="input input-bordered"
        required
      />
    </div>
    <div class="form-control mt-6">
      <input
        type="submit"
        value="Login"
        class="btn btn-primary border-none bg-co-blue-p hover:bg-co-blue-s"
      />
    </div>
    <p class="pt-8 text-xs">
      This system is for Official Use Only and contains Personally Identifiable
      Information (PII). Any misuse or unauthorized disclosure of information
      may result in both Civil and Criminal penalties.
    </p>
  </form>
</div>
