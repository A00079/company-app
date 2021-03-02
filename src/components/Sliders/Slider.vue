<template>
  <div>
    <vueper-slides>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
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
    };
  },
  components: { VueperSlides, VueperSlide },
};
</script> 