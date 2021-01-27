<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-transparent overflow-hidden pt-10">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-28 text-transparent transform translate-x-1/2"
          fill="currentColor"
          viewBox="60 0 100 70"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close main menu</span>
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
          </div>
        </div>

        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">We Design Products</span>
            </h1>
            <h1 class="text-4xl mt-3 tracking-tight font-extrabold text-white sm:text-5xl md:text-4xl">
              <vue-typed-js
                :typeSpeed="100"
                :backSpeed="70"
                :fadeOut="true"
                :loop="true"
                :strings="[
                  'People Love To Use.',
                  'To help Doctors',
                  'Students Engage With',
                  'Our Clients Enjoy To Work.',
                ]"
              >
                <h1>
                  <span class="typing block text-indigo-600 xl:inline"></span>
                </h1>
              </vue-typed-js>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <!-- <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a> -->
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div
      class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-16 animate__animated animate__fadeIn"
    >
      <div v-show="firstLotti">
        <lottie
          :options="defaultOptions"
          :height="520"
          :width="580"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <div v-show="secondtLotti">
        <lottie
          :options="defaultOptions2"
          :height="520"
          :width="580"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <div v-show="thirdtLotti">
        <lottie
          :options="defaultOptions3"
          :height="520"
          :width="580"
          v-on:animCreated="handleAnimation"
        />
      </div>
    </div>
    <SubHome />
  </div>
</template>
<script>
import animationData from "@/assets/animations/teste.json";
import animationData2 from "@/assets/animations/man-on-working.json";
import animationData3 from "@/assets/animations/TestigTechColored.json";

import SubHome from "./SubHome.vue";

export default {
  name: "HomeScreen",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      defaultOptions3: { animationData: animationData3, loop: true },
      animationSpeed: 1,
      firstLotti: true,
      secondtLotti: false,
      thirdtLotti: false,
    };
  },
  mounted() {
    let self = this;
    setInterval(() => {
      if (self.firstLotti) {
        self.firstLotti = false;
        self.secondtLotti = true;
        self.thirdtLotti = false;
      } else if (self.secondtLotti) {
        self.firstLotti = false;
        self.secondtLotti = false;
        self.thirdtLotti = true;
      } else {
        self.firstLotti = true;
        self.secondtLotti = false;
        self.thirdtLotti = false;
      }
    }, 6000);
  },
  components: {
    SubHome,
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>
<style scoped>
:root {
  --animate-duration: 1000ms;
  --animate-delay: 2s;
}
</style>