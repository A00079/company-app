<template>
  <section class="text-gray-600 body-font">
    <div class="hidden md:block lg:block xl:block">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="text-4xl text-left w-full  md:text-4xl  lg:text-5xl  xl:text-5xl  2xl:text-5xl tracking-tight font-extrabold text-white mb-4"
          >
            <span class="block xl:inline"
              >We Need <span style="color: rgb(0, 210, 91)">Support</span></span
            >
          </h1>
          <h1
            class="text-4xl h-10 md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl tracking-tight font-extrabold text-white mb-4"
          >
            <vue-typed-js
              :typeSpeed="100"
              :backSpeed="70"
              :fadeOut="true"
              :loop="true"
              :strings="['FaceBook', 'Instagram', 'Twitter', 'Email']"
            >
              <h1>
                We are Available on
                <span class="typing block text-indigo-600 xl:inline"></span>
              </h1>
            </vue-typed-js>
          </h1>
        </div>
        <!-- component -->
        <infinite-slide-bar delay="2s" duration="6s">
          <div class="h-full flex items-center">
            <div class="max-w-7xl w-full mx-0 py-0 sm:px-1 lg:px-1">
              <div
                class="flex flex-col md:flex-row md:space-x-2 lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"
              >
                <div class="w-full lg:w-1/4 md:w-1/4 md:mt-2 lg:mt-0">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/whatapp.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Whats App
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/twitter.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Twitter
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/facebook.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          FaceBook
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/gmail.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Email
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </infinite-slide-bar>
        <infinite-slide-bar delay="0s" duration="8s">
          <div class="h-full flex items-center">
            <div class="max-w-7xl w-full mx-0 py-0 sm:px-1 lg:px-1">
              <div
                class="flex flex-col md:flex-row md:space-x-2 lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"
              >
                <div class="w-full lg:w-1/4 md:w-1/4 md:mt-2 lg-mt-0">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/twitter.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Twitter
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/whatapp.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          What App
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/gmail.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Email
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/facebook.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          FaceBook
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </infinite-slide-bar>
        <infinite-slide-bar delay="6s" duration="5s">
          <div class="h-full flex items-center">
            <div class="max-w-7xl w-full mx-0 py-0 sm:px-1 lg:px-1">
              <div
                class="flex flex-col md:flex-row  md:space-x-2 lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"
              >
                <div class="w-full lg:w-1/4 md:w-1/4 md:mt-2 lg:mt-0">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/gmail.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Email
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/whatapp.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Whats App
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/twitter.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Twitter
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/4 md:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/facebook.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          FaceBook
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </infinite-slide-bar>

        <!-- <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
            <p class="leading-relaxed">Users</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path
                d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
              ></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
            <p class="leading-relaxed">Files</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-indigo-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
            <p class="leading-relaxed">Places</p>
          </div>
        </div>
      </div> -->
      </div>
      <img class="w-96 h-96 absolute right-0" src="/img/webpointer.svg" style="z-index:-1;" />
    </div>
    <div class="md:hidden lg:hidden xl:hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="text-4xl text-center w-full md:text-center md:text-5xl lg:text-center lg:text-5xl xl:text-center xl:text-5xl 2xl:text-center 2xl:text-5xl tracking-tight font-extrabold text-white md:text-8xl mb-4"
          >
            <span class="block xl:inline"
              >We Need <span style="color: rgb(0, 210, 91)">Support</span></span
            >
          </h1>
          <h1
            class="text-4xl h-14 md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl tracking-tight font-extrabold text-white md:text-3xl mb-4"
          >
            <vue-typed-js
              :showCursor="false"
              :typeSpeed="100"
              :backSpeed="70"
              :fadeOut="true"
              :loop="true"
              :strings="['FaceBook', 'Instagram', 'Twitter', 'Email']"
            >
              <h1>
                We are Available on
                <span class="typing block text-indigo-600 xl:inline"></span>
              </h1>
            </vue-typed-js>
          </h1>
        </div>
        <div class="main-content">
          <div class="flex flex-row justify-between">
            <div class="p-2 w-full">
              <div
                class="h-full flex flex-col items-center border-gray-200 border p-2 rounded-lg"
              >
                <img
                  alt="team"
                  class="w-14 h-14 mx-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src="/img/whatapp.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-300 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div class="p-2 w-full">
              <div
                class="h-full flex flex-col items-center border-gray-200 border p-2 rounded-lg"
              >
                <img
                  alt="team"
                  class="w-14 h-14 mx-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src="/img/twitter.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-300 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between">
            <div class="p-2 w-full">
              <div
                class="h-full flex flex-col items-center border-gray-200 border p-2 rounded-lg"
              >
                <img
                  alt="team"
                  class="w-14 h-14 mx-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src="/img/facebook.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-300 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div class="p-2 w-full">
              <div
                class="h-full flex flex-col items-center border-gray-200 border p-2 rounded-lg"
              >
                <img
                  alt="team"
                  class="w-14 h-14 mx-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl"
                  src="/img/gmail.png"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-300 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- component -->
        <!-- <infinite-slide-bar delay="2s" duration="6s">
          <div class="h-full flex items-center">
            <div class="max-w-7xl w-full mx-0 py-0 sm:px-1 lg:px-1">
              <div
                class="flex flex-row flex-wrap justify-center lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"
              >
                <div class="w-80 lg:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/whatapp.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Whats App
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-80 lg:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/twitter.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Twitter
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-80 lg:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/facebook.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          FaceBook
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-80 lg:w-1/4">
                  <div
                    class="flex max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden"
                  >
                    <div class="w-2 bg-gray-800"></div>
                    <div class="flex items-center px-2 py-3">
                      <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="/img/gmail.png"
                      />
                      <div class="mx-3">
                        <h2 class="text-xl font-semibold text-gray-800">
                          Email
                        </h2>
                        <p class="text-gray-600">Sara was replied on...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </infinite-slide-bar> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HelpSupport",
};
</script>
<style scoped>
</style>