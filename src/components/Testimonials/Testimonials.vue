<template>
  <section>
    <div class="hidden md:block lg:block xl:block">
      <div class="relative">
        <img
          class="w-96 h-96 absolute right-0 bottom-36"
          src="/img/webpointer.svg"
        />
        <div class="container px-24">
          <div class="flex flex-col text-center w-full mb-0">
            <h1
              class="text-7xl font-medium text-left title-font tracking-tight font-extrabold mb-4 text-white"
            >
              Our <span style="color: rgb(0, 210, 91)">Pillars</span>
            </h1>
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <vueper-slides :arrows="false">
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :title="slide.title"
              :content="slide.content"
            />
          </vueper-slides>
        </section>
      </div>
    </div>
    <div class="md:hidden lg:hidden xl:hidden">
      <div class="relative">
        <img
          class="w-96 h-96 absolute right-0 bottom-36"
          src="/img/webpointer.svg"
        />
        <div class="container px-10">
          <div class="flex flex-col text-left w-full mb-10">
            <h1
              class="text-4xl font-medium text-left title-font tracking-tight font-extrabold mb-4 text-white"
            >
              Our <span style="color: rgb(0, 210, 91)">Pillars</span>
            </h1>
            <p class="leading-relaxed text-lg text-gray-400">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk.
            </p>
          </div>
        </div>
        <carousel :per-page="1" :mouse-drag="false" :autoplay="true">
          <slide>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-4 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <img
                    class="lg:w-2/6 md:w-3/6 w-48 mx-auto h-48 mb-10 object-cover object-center rounded-full"
                    alt="hero"
                    src="/img/insta_one.jpg"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path
                      d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                    ></path>
                  </svg>
                  <p class="leading-relaxed text-lg text-white">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span
                    class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
                  ></span>
                  <h2
                    class="text-gray-400 font-medium title-font tracking-wider text-sm"
                  >
                    HOLDEN CAULFIELD
                  </h2>
                  <p class="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
            </section>
          </slide>
          <slide>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-4 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <img
                    class="lg:w-2/6 md:w-3/6 w-48 mx-auto h-48 mb-10 object-cover object-center rounded-full"
                    alt="hero"
                    src="/img/insta_one.jpg"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path
                      d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                    ></path>
                  </svg>
                  <p class="leading-relaxed text-lg text-white">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span
                    class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
                  ></span>
                  <h2
                    class="text-gray-400 font-medium title-font tracking-wider text-sm"
                  >
                    HOLDEN CAULFIELD
                  </h2>
                  <p class="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
            </section>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Testimonials",
  data() {
    return {
      slides: [
        {
          title: "",
          content: ` <div
        class="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center"
      >
        <div class="w-96 mb-10 md:mb-0">
          <img
            class="object-cover w-40 h-40 object-center rounded-full"
            alt="hero"
            src="/img/insta_one.jpg"
          />
        </div>
        <div
          class="flex flex-col md:items-start md:text-left ml-10 items-center text-center"
        >
          <h1
            class="title-font tracking-tight font-extrabold sm:text-4xl text-3xl mb-4 font-medium text-white"
          >
            Ajay Bendre
          </h1>
          <p
            class="mb-8 pr-56 leading-relaxed tracking-tight text-white font-semibold"
          >
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-indigo-500 mt-0 mb-2"
          ></span>
          <h2
            class="text-gray-700 font-medium title-font tracking-wider text-sm"
          >
            HOLDEN CAULFIELD
          </h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-36 h-36 text-gray-400 mb-2"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="container px-72 mb-20">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-60 h-full bg-indigo-500"></div>
        </div>
      </div>
      `,
        },
        {
          title: "",
          content: ` <div
        class="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center"
      >
        <div class="w-96 mb-10 md:mb-0">
          <img
            class="object-cover w-40 h-40 object-center rounded-full"
            alt="hero"
            src="/img/insta_one.jpg"
          />
        </div>
        <div
          class="flex flex-col md:items-start md:text-left ml-10 items-center text-center"
        >
          <h1
            class="title-font tracking-tight font-extrabold sm:text-4xl text-3xl mb-4 font-medium text-white"
          >
            Sagar Chavan
          </h1>
          <p
            class="mb-8 pr-56 leading-relaxed tracking-tight text-white font-semibold"
          >
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-indigo-500 mt-0 mb-2"
          ></span>
          <h2
            class="text-gray-700 font-medium title-font tracking-wider text-sm"
          >
            HOLDEN CAULFIELD
          </h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-36 h-36 text-gray-400 mb-2"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="container px-72 mb-20">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-60 h-full bg-indigo-500"></div>
        </div>
      </div>
      `,
        },
      ],
    };
  },
  components: { VueperSlides, VueperSlide },
};
</script>
<style scoped>
</style>