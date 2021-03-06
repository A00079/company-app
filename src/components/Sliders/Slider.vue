<template>
  <div>
    <div class="hidden md:block lg:block xl:block">
      <carousel :per-page="1" :mouse-drag="false" :autoplay="true">
        <slide
          ><div class="flex flex-wrap md:-m-2 -m-1 px-16">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-indigo-900 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover p-2 h-full object-center block"
                    src="/img/AdsRevenue1.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-gray-800 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover p-2 h-full object-center block"
                    src="/img/Curvicare1.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-full">
                <div class="bg-yellow-500 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full h-60 object-cover p-2 object-center block"
                    src="/img/Curvicare5.PNG"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <div class="bg-purple-600 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full h-60 object-cover p-2 object-center block"
                    src="/img/curvicaredashboard.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-red-900 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full p-2 object-center block"
                    src="/img/AdsRevenue3.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-black rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full p-2 object-center block"
                    src="/img/ReachBuy1.PNG"
                  />
                </div>
              </div>
            </div></div
        ></slide>
        <slide
          ><div class="flex flex-wrap md:-m-2 -m-1 px-16">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-indigo-900 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover p-2 h-full object-center block"
                    src="/img/ReachBuy2.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-gray-800 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover p-2 h-full object-center block"
                    src="/img/Curvicare3.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-full">
                <div class="bg-yellow-500 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full h-60 object-cover p-2 object-center block"
                    src="/img/Curvicare2.PNG"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <div class="bg-purple-600 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full h-60 object-cover p-2 object-center block"
                    src="/img/ReachBuy3.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-red-900 rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full p-2 object-center block"
                    src="/img/ReachBuy5.PNG"
                  />
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <div class="bg-black rounded-sm">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full p-2 object-center block"
                    src="/img/AdsRevenue4.PNG"
                  />
                </div>
              </div>
            </div></div
        ></slide>
      </carousel>
    </div>
    <div class="md:hidden lg:hidden xl:hidden mb-20">
      <vueper-slides>
        <vueper-slide
          v-for="(slide, i) in mobileSlides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
        />
      </vueper-slides>
    </div>
  </div>
</template>
 
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "MyComponent",
  data() {
    return {
      slides: [
        {
          title: "",
          content: `
      <div class="flex flex-wrap md:-m-2 -m-1 px-16">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-indigo-900 rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover p-6 h-full object-center block"
                src="https://dummyimage.com/400x200"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-gray-800 rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover p-6 h-full object-center block"
                src="https://dummyimage.com/400x200"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-full">
            <div class="bg-yellow-500 rounded-sm">
              <img
                alt="gallery"
                class="w-full h-60 object-cover p-6 object-center block"
                src="https://dummyimage.com/600x260"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <div class="bg-purple-600 rounded-sm">
              <img
                alt="gallery"
                class="w-full h-60 object-cover p-6 object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-red-900 rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover h-full p-6 object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-black rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover h-full p-6 object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    `,
        },
        {
          title: "",
          content: `
      <div class="flex flex-wrap md:-m-2 -m-1 px-16">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-indigo-900 rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover p-6 h-full object-center block"
                src="https://dummyimage.com/400x200"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-gray-800 rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover p-6 h-full object-center block"
                src="https://dummyimage.com/400x200"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-full">
            <div class="bg-yellow-500 rounded-sm">
              <img
                alt="gallery"
                class="w-full h-60 object-cover p-6 object-center block"
                src="https://dummyimage.com/600x260"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <div class="bg-purple-600 rounded-sm">
              <img
                alt="gallery"
                class="w-full h-60 object-cover p-6 object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-red-900 rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover h-full p-6 object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <div class="bg-black rounded-sm">
              <img
                alt="gallery"
                class="w-full object-cover h-full p-6 object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
   `,
        },
      ],
      mobileSlides: [
        {
          title: "",
          content: `<section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img class="w-full mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
        </section>`,
        },
        {
          title: "",
          content: `<section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img class="w-full mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
        </section>`,
        },
      ],
    };
  },
  components: { VueperSlides, VueperSlide },
};
</script> 