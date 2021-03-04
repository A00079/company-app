<template>
  <section class="navbar">
    <!-- <div
      style="z-index: 9999; box-shadow: 0 15px 20px rgb(0, 0, 0, 0.9)"
      class="-top-10 -left-10 w-32 h-32 md:-top-7 -left-6 lg:-top-5 -left-16 xl:-top-7 -left-6 rounded-lg transform -rotate-45 shadow-xl fixed  inline-flex items-center justify-center bg-indigo-800 text-gray-400"
      :class="toggleDrawer_MobileMenu ? 'zIndexNegative' : ''"
    >
      <router-link to="/">
        <img
          class="h-8 w-auto sm:h-10 pl-7 mt-5 md:ml-5 mt-0 lg:pl-0 mt-0 xl:pl-0 mt-0"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt=""
        />
      </router-link>
    </div> -->
    <div
      class="bg-gray-900 border-b-2 border-gray-900 md:pb-0 lg:pb-0 xl:pb-0 pb-1 fixed z-50 w-full"
    >
      <div class="w-full lg:px-20 mx-auto lg:py-3 px-4 sm:px-10">
        <div
          class="flex justify-between items-center py-2 lg:justify-start md:justify-start sm:space-x-0 md:space-x-10 lg:space-x-20"
        >
          <div class="flex justify-start sm:w-full  sm:flex-1 lg:w-20 lg:flex-1">
            <div
              class="group rounded-md text-white inline-flex items-center md:text-xl lg:text-2xl text-base font-medium hover:text-gray-400 focus:outline-none mr-10 focus:text-indigo-500"
            >
              <span class="title-font tracking-tight font-extrabold lg:text-2xl text-2xl sm:text-sm">The <span style="color:#00d25b">Real</span> Devs</span>
            </div>
          </div>
          <div class="-mr-2 -my-2 pt-1 md:hidden">
            <button
              @click="toggleMobileMenu()"
              type="button"
              class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-900"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10 lg:pr-0 lg:space-x-10 lg:justify-start sm:space-x-7 sm:flex flex-wrap justify-start">
            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button
                class="group rounded-md sm:text-sm text-white inline-flex items-center md:text-sm text-base font-medium hover:text-gray-400 focus:outline-none mr-10 focus:text-indigo-500"
              >
                <span>Our Services</span>
              </button>
              <button
                @click="toggleDrawer('Loan')"
                class="group rounded-md sm:text-sm text-white inline-flex items-center md:text-sm text-base font-medium hover:text-gray-400 focus:outline-none focus:text-indigo-500"
              >
                <span>Technologics</span>
                <!--
              Heroicon name: chevron-down
              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
                <svg
                  v-show="!toggleDrawer_Loan"
                  class="ml-2 h-5 w-5 text-white group-hover:text-gray-500 transition-all duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-show="toggleDrawer_Loan"
                  class="w-6 h-6 transition-all duration-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.
            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
              <div
                v-show="toggleDrawer_Loan"
                class="z-50 transition-all duration-500 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div class="relative flex bg-white px-2 py-3">
                    <a
                      href="#"
                      class="-m-1 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: chart-bar -->
                      <img
                        src="/img/details.png"
                        class="flex-shrink-0 h-8 w-8 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Home Loan
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-1 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: cursor-click -->
                      <img
                        src="/img/email.png"
                        class="flex-shrink-0 h-8 w-8 mt-3"
                      />

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Personal Loan
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="relative flex bg-white px-2 py-1">
                    <a
                      href="#"
                      class="-m-1 p-3 flex bg-gray-100 mr-2 items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: chart-bar -->
                      <img
                        src="/img/ontime.png"
                        class="flex-shrink-0 h-8 w-8 mt-3"
                      />

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Card Loan
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-1 p-3 flex bg-gray-100 items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: cursor-click -->
                      <img
                        src="/img/responsive.png"
                        class="flex-shrink-0 h-8 w-8 mt-3"
                      />

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Educational Loan
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="relative flex bg-white px-2 py-2">
                    <a
                      href="#"
                      class="-m-1 p-3 w-72 bg-gray-100 flex items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: chart-bar -->
                      <img
                        src="/img/search.png"
                        class="flex-shrink-0 h-8 w-8 mt-3"
                      />

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Used Card Loan
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- <a
              href="#"
              class="text-base font-medium text-white hover:text-gray-300"
            >
              Pricing
            </a>
            <a
              href="#"
              class="text-base font-medium text-white hover:text-gray-400"
            >
              Docs
            </a> -->

            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button
                @click="toggleDrawer('Investment')"
                class="group rounded-md text-white inline-flex md:text-sm items-center text-base font-medium hover:text-gray-400 focus:outline-none focus:text-indigo-500"
              >
                <span>Feature API's</span>
                <!--
              Heroicon name: chevron-down
              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
                <svg
                  v-show="!toggleDrawer_Investment"
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-all duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-show="toggleDrawer_Investment"
                  class="w-6 h-6 transition-all duration-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <!--
            'More' flyout menu, show/hide based on flyout menu state.
            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
              <div
                v-show="toggleDrawer_Investment"
                class="z-50 absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="relative grid gap-8 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                  >
                    <a
                      href="#"
                      class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: support -->
                      <img
                        src="/img/search.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Demat Account
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get all of your questions answered in our forums or
                          contact support.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: bookmark-alt -->
                      <img
                        src="/img/documentation.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Savings Account
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Learn how to maximize our platform to get the most out
                          of it.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-5 p-3 bg-gray-100 flex items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: calendar -->
                      <img
                        src="/img/email.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Mutual Funds
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          See what meet-ups and other events we might be
                          planning near you.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-5 p-4 bg-gray-100 mt-1 flex items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: shield-check -->
                      <img
                        src="/img/safe.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Fixed Deposit
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Understand how we take your privacy seriously.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button
                @click="toggleDrawer('LearnResources')"
                class="group rounded-md text-white inline-flex md:text-sm items-center text-base font-medium hover:text-gray-400 focus:outline-none focus:text-indigo-500"
              >
                <span>Help & Support</span>
                <!--
              Heroicon name: chevron-down
              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
                <svg
                  v-show="!toggleDrawer_LearnResources"
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-all duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-show="toggleDrawer_LearnResources"
                  class="w-6 h-6 transition-all duration-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <!--
            'More' flyout menu, show/hide based on flyout menu state.
            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
              <div
                v-show="toggleDrawer_LearnResources"
                class="z-50 absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="relative grid gap-8 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                  >
                    <a
                      href="#"
                      class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: support -->
                      <img
                        src="/img/search.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Demat Account
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get all of your questions answered in our forums or
                          contact support.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: bookmark-alt -->
                      <img
                        src="/img/documentation.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Savings Account
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Learn how to maximize our platform to get the most out
                          of it.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-5 p-3 bg-gray-100 flex items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: calendar -->
                      <img
                        src="/img/email.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Mutual Funds
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          See what meet-ups and other events we might be
                          planning near you.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-5 p-4 bg-gray-100 mt-1 flex items-start rounded-lg hover:bg-gray-100"
                    >
                      <!-- Heroicon name: shield-check -->
                      <img
                        src="/img/safe.png"
                        class="flex-shrink-0 h-10 w-10 mt-3"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Fixed Deposit
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Understand how we take your privacy seriously.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              class="text-base md:text-sm mt-1 font-medium text-white hover:text-gray-300"
            >
              Contact
            </a>
          </nav>
          <div  class="hidden  md:flex items-center justify-end md:flex-1 lg:w-0">
            <!-- <a
              href="#"
              class="whitespace-nowrap sm:text-sm text-base font-medium text-white hover:text-gray-900"
            >
              Sign in
            </a> -->
            <a
              style="background: #fb117e"
              href="#"
              class="sm:ml-4 ml-8 whitespace-nowrap inline-flex items-center justify-center sm:text-sm sm:px-2 sm:py-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <!--
    Mobile menu, show/hide based on mobile menu state.
    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
      <div
        v-show="toggleDrawer_MobileMenu"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          style="overflow: scroll; height: 40rem"
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
        >
          <div class="pt-5 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  @click="toggleMobileMenu()"
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-2">
              <h4
                class="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
              >
                Loans
              </h4>
              <div class="flex flex-wrap -m-2">
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Home Loan
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Personal Loan
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Used Car Loan
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Car Loan
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Educational Loan
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-2 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
            <div class="mt-2">
              <h4
                class="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
              >
                Investment
              </h4>
              <div class="flex flex-wrap -m-2">
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Demat Account
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Saving Account
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Mutual Funds
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Fixed Deposit
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-2 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
            <div class="mt-2">
              <h4
                class="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
              >
                Learn & Resources
              </h4>
              <div class="flex flex-wrap -m-2">
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Demat Account
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Saving Account
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Mutual Funds
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Fixed Deposit
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40">
                  <div class="p-0">
                    <div class="h-full flex items-center p-2 rounded-lg">
                      <img
                        alt="team"
                        class="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-bold">
                          Demat Account
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3 px-5 space-y-2">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                <div class="flex flex-row">
                  <svg
                    class="w-6 h-6 mr-1 text-indigo-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p class="text-gray-900 title-font text-sm font-bold">
                    Help Center
                  </p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p class="mt-2 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggleDrawer_Loan: false,
      toggleDrawer_Investment: false,
      toggleDrawer_LearnResources: false,
      toggleDrawer_MobileMenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.toggleDrawer_MobileMenu = !this.toggleDrawer_MobileMenu;
    },
    toggleDrawer(listName) {
      if (listName === "Loan") {
        this.toggleDrawer_Investment = false;
        this.toggleDrawer_LearnResources = false;
        this.toggleDrawer_Loan = !this.toggleDrawer_Loan;
      }
      if (listName === "Investment") {
        this.toggleDrawer_Loan = false;
        this.toggleDrawer_LearnResources = false;
        this.toggleDrawer_Investment = !this.toggleDrawer_Investment;
      }
      if (listName === "LearnResources") {
        this.toggleDrawer_Loan = false;
        this.toggleDrawer_Investment = false;
        this.toggleDrawer_LearnResources = !this.toggleDrawer_LearnResources;
      }
    },
  },
};
</script>
<style scoped>
.zIndexNegative {
  z-index: -1 !important;
}
</style>