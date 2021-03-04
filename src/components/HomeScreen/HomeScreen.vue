<template>
  <section>
    <div class="hidden md:block lg:block xl:block">
      <div class="relative bg-transparent overflow-hidden pt-10">
        <div class="max-w-7xl mx-auto">
          <div
            class="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 sm:max-w-2xl  sm:w-full lg:max-w-2xl  lg:w-full lg:pb-28 xl:pb-32"
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
            <main
              class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
            >
              <div class="sm:text-left lg:text-left">
                <h1
                  class="text-4xl tracking-tight font-extrabold text-white lg:text-6xl sm:text-4xl md:text-4xl"
                >
                  <span class="block xl:inline"
                    >We Design
                    <span style="color: rgb(0, 210, 91)">Products</span></span
                  >
                </h1>
                <h1
                  class="text-4xl md:h-10 mt-3 lg:text-4xl tracking-tight font-extrabold text-white sm:text-2xl md:text-xl"
                >
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
                      <span
                        class="typing block text-indigo-600 xl:inline"
                      ></span>
                    </h1>
                  </vue-typed-js>
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 lg:text-xl lg:pr-10 sm:mt-5 sm:text-xl sm:w-full sm:pr-72 md:mt-5 md:text-sm lg:mx-0"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start"
                >
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-6"
                    >
                      Contact Us
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
          class="hidden sm:hidden md:hidden lg:block xl:block 2xl:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2 md:absolute md:inset-y-0 md:right-0 md:w-1/2 mt-16 animate__animated animate__fadeIn"
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
        <div
          class="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2 md:absolute md:inset-y-0 md:right-0 md:w-1/2 mt-16 animate__animated animate__fadeIn"
        >
          <div v-show="firstLotti">
            <lottie
              :options="defaultOptions"
              :height="350"
              :width="350"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <div v-show="secondtLotti">
            <lottie
              :options="defaultOptions2"
              :height="350"
              :width="350"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <div v-show="thirdtLotti">
            <lottie
              :options="defaultOptions3"
              :height="350"
              :width="350"
              v-on:animCreated="handleAnimation"
            />
          </div>
        </div>
        <!-- <SubHome /> -->
      </div>
    </div>
    <div class="md:hidden lg:hidden xl:hidden">
      <section class="text-gray-600 body-font relative">
        <div
          class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
        >
          <div class="animate__animated animate__fadeIn">
            <div v-show="firstLotti">
              <lottie
                :options="defaultOptions"
                :height="270"
                :width="360"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div v-show="secondtLotti">
              <lottie
                :options="defaultOptions2"
                :height="270"
                :width="360"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div v-show="thirdtLotti">
              <lottie
                :options="defaultOptions3"
                :height="270"
                :width="360"
                v-on:animCreated="handleAnimation"
              />
            </div>
          </div>
          <div class="text-center mt-6 w-full">
            <h1
              class="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">We Design Products</span>
            </h1>
            <div class="w-full px-10 mx-auto mb-5">
              <h1
                class="text-2xl text-center w-full mx-auto mt-3 tracking-tight font-extrabold text-white"
              >
                <vue-typed-js
                  :showCursor="false"
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
            </div>
            <p class="mb-8 leading-relaxed text-base text-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="flex justify-center">
              <button
                class="tracking-tight font-semibold text-white inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <img
          style="z-index: -1"
          class="w-80 h-80 absolute left-0 top-0"
          src="/img/webpointer-left.svg"
        />
      </section>
    </div>
  </section>
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