<script>
  import emblem from "../assets/cdle-emblem.svg";
  const year = new Date().getFullYear();
</script>

<div
  class="mt-4 sm:mt-9 p-6 md:px-14 md:py-9 flex flex-col gap-9 w-full bg-base-200 border-t border-t-base-300"
>
  <div class="flex flex-wrap justify-between items-center gap-9">
    <ul
      class="link flex flex-wrap justify-center md:justify-start gap-x-9 gap-y-6 text-sm md:text-base underline-offset-4"
    >
      <li>
        <a
          href="https://myui.clouduim.cdle.state.co.us/Static/Benefits/Privacy.html"
          >Privacy Statement &nearr;</a
        >
      </li>
      <li>
        <a
          href="https://myui.clouduim.cdle.state.co.us/Static/Core/Accessibility.html"
          >Accessibility &nearr;</a
        >
      </li>
      <li>
        <a
          href="https://myui.clouduim.cdle.state.co.us/Static/Core/ViewingTips.html"
          >Viewing Tips &nearr;</a
        >
      </li>
    </ul>
    <div class="flex items-center gap-3 text-sm md:text-base text-balance">
      <img src={emblem} alt="CDLE emblem" class="h-6 w-auto" />
      <p>©{year} Colorado Department of Labor and Employment</p>
    </div>
  </div>

  <div class="flex flex-col gap-4 text-sm text-pretty">
    <h4 class="font-semibold tracking-wider">WARNING</h4>
    <p>
      This system may contain U.S. Government information, which is restricted
      to authorized users ONLY. Unauthorized access, use, misuse, or
      modification of this computer system or of the data contained herein or in
      transit to/from this system constitutes a violation of Title 18, United
      States Code, Section 1030, and may subject the individual to Criminal and
      Civil penalties pursuant to Title 26, United States Code, Sections 7213,
      7213A (the Taxpayer Browsing Protection Act), and 7431.
    </p>
    <p>
      This system and equipment are subject to monitoring to ensure proper
      performance of applicable security features or procedures. Such monitoring
      may result in the acquisition, recording and analysis of all data being
      communicated, transmitted, processed or stored in this system by a user.
      If monitoring reveals possible evidence of criminal activity, such
      evidence may be provided to Law Enforcement Personnel.
    </p>
    <p class="font-semibold tracking-wider">
      ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH MONITORING.
    </p>
  </div>
</div>
