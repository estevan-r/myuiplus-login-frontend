<script>
  import emblem from "../assets/cdle-emblem.svg";
  import Modal1 from "./Modal1.svelte";
  import Modal2 from "./Modal2.svelte";
  let showModal1 = false;
  let showModal2 = false;
  const year = new Date().getFullYear();
</script>

<div
  class="mt-4 sm:mt-9 p-6 md:px-14 md:py-9 w-full bg-base-200 border-t border-t-base-300"
>
  <div class="max-w-[1420px] m-auto flex flex-col gap-9">
    <div class="flex flex-wrap justify-between items-center gap-9">
      <ul
        class="link flex flex-wrap justify-center md:justify-start gap-x-9 gap-y-6 text-sm sm:text-base underline-offset-4"
      >
        <li>
          <button
            on:click={() => (showModal1 = true)}
            class="flex items-center gap-1"
          >
            Privacy Statement
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <Modal1 bind:showModal1>
            <h3 slot="header" class="font-bold text-lg">Data Privacy</h3>
            <div class="flex flex-col py-4 gap-4 text-pretty">
              <p>
                The Colorado Department of Labor and Employment is interested in
                ensuring that the data privacy rights of users are protected.
                The site does use "cookies" (data stored on a client machine
                which can later be retrieved by the Web Server). The only
                information the cookie contains is a system-generated session
                identification number. This information is used only to maintain
                continuity and security of the pages you access. Additional
                information collected when you access this site is your IP
                address (source address of the client computer) which is used
                only for analyzing traffic patterns or other system maintenance.
                It is not released to any third parties. No private or nonpublic
                data is collected without your permission.
              </p>
              <p>
                Our pages are continually under development. This site may
                contain hypertext links to information or sites created by other
                public or private organizations that you may also be interested
                in. Please be aware that we do not control the content or
                quality of these other sites or services.
              </p>
            </div>
          </Modal1>
        </li>
        <li>
          <button
            on:click={() => (showModal2 = true)}
            class="flex items-center gap-1"
          >
            Accessibility
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <Modal2 bind:showModal2>
            <h3 slot="header" class="font-bold text-lg">Accessibility</h3>
            <div class="flex flex-col py-4 gap-4 text-pretty">
              <p>
                The State of Colorado Department of Labor and Employment has
                made every reasonable attempt to ensure accessibility, using
                simple text with related links when the page is read
                sequentially.
              </p>
              <p>
                The Unemployment Insurance website has been tested using various
                tools for validation, including screen readers and Rational
                Policy Tester. This website is in conformance with Section 508
                of the U.S. Rehabilitation Act.
              </p>
            </div>
          </Modal2>
        </li>
        <li>
          <a
            href="https://myui.clouduim.cdle.state.co.us/Static/Core/ViewingTips.html"
            class="flex items-center gap-1"
          >
            Viewing Tips
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3 text-sm sm:text-base text-balance">
        <img src={emblem} alt="CDLE emblem" class="h-6 w-auto" />
        <p>©{year} Colorado Department of Labor and Employment</p>
      </div>
    </div>

    <div class="flex flex-col gap-4 text-sm text-pretty">
      <h4 class="font-semibold tracking-wider">WARNING</h4>
      <p>
        This system may contain U.S. Government information, which is restricted
        to authorized users ONLY. Unauthorized access, use, misuse, or
        modification of this computer system or of the data contained herein or
        in transit to/from this system constitutes a violation of Title 18,
        United States Code, Section 1030, and may subject the individual to
        Criminal and Civil penalties pursuant to Title 26, United States Code,
        Sections 7213, 7213A (the Taxpayer Browsing Protection Act), and 7431.
      </p>
      <p>
        This system and equipment are subject to monitoring to ensure proper
        performance of applicable security features or procedures. Such
        monitoring may result in the acquisition, recording and analysis of all
        data being communicated, transmitted, processed or stored in this system
        by a user. If monitoring reveals possible evidence of criminal activity,
        such evidence may be provided to Law Enforcement Personnel.
      </p>
      <p class="font-semibold tracking-wider">
        ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH MONITORING.
      </p>
    </div>
  </div>
</div>
