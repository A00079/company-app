<template>
  <section>
    <div
      style="visibility: hidden; position: absolute; width: 0px; height: 0px"
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 0 24 24" id="expand-more">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
        <symbol viewBox="0 0 24 24" id="close">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
      </svg>
    </div>
    <div class="flex flex-wrap items-center m-0">
      <div
        class="w-full md:w-1/2 mt-8"
        v-for="(items, index) in questionData"
        :key="index"
      >
        <details class="items-center m-0">
          <summary>
            <span style="color: #00d25b">{{ items.question }}</span>
            <svg
              class="control-icon control-icon-expand ml-14"
              width="24"
              height="24"
              role="presentation"
            >
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#expand-more"
              />
            </svg>
            <svg
              class="control-icon control-icon-close ml-10"
              width="24"
              height="24"
              role="presentation"
            >
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#close"
              />
            </svg>
          </summary>
          <small class="font-semibold text-gray700">{{ items.answer }}</small>
        </details>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      questionData: [
        {
          question: "How much does a new website cost?",
          answer:
            "There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your small business. We’ll ask a lot of questions, assess your needs, and give you a quote based on that assessment. Most of our sites run in the $3,000 – $5,000 range, but can be more or less depending on needs.",
        },
        {
          question: "How long will it take to get a new website?",
          answer:
            "On average, we shoot for a six to eight week turnaround, but the pace of any project is set by each client. How much input you can provide during the initial stages, your availability with feedback, how soon the content is ready – all this affects the speed of completion. The functionality needs may also play a role – more complex sites will take more time to develop.",
        },
        {
          question: "Do you only create WordPress websites?",
          answer:
            "Yes. WordPress is a great content management system that now powers more than 30% of the web. Its huge market share is due to it’s flexibility and ease of use. Don’t worry, we’ll teach you how to manage it and help you along the way.",
        },
        {
          question: "Do I have to be local to work with you?",
          answer:
            "Nope! We work with clients all over the world. Our whole team works remotely, allowing us to find the absolute best team for our business.",
        },
        {
          question:
            "Will I be able to update the site myself when it’s finished?",
          answer:
            "Yes! We love it when our clients take control of their website and learn to manage it on their own. We’ll provide you with a set of comprehensive video tutorials to help you learn your way around, as well provide you with a training session to help get you on your way.    (Note: We love to answer your questions!)",
        },
        {
          question: "Will you maintain my site for me?",
          answer:
            "We can! We provide on-going support for many of our clients. Check out our WordPress Support Packages.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a variety of devices.",
        },
        {
          question: "When do I pay?",
          answer:
            "We offer a variety of payment options, varying from a one-time, up-front payment to six automated monthly payments. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept checks, PayPal, and all major credit cards.",
        },
        {
          question: "How much input do I have in the process?",
          answer:
            "A lot! Your input and feedback is crucial to this process. We’ll start with a lot of questions about your needs, your likes, your wants and work with you to develop just the right look and functionality.",
        },
        {
          question: "Who writes the content for the site?",
          answer:
            "Usually that is you. You are the expert on your business, so it’s usually best if it comes from you. If you need help, we have a copywriter on our team who can help clean up or write original content for you at an additional cost.",
        },
        {
          question: "Where should my website be hosted?",
          answer:
            "Hosting is super important! When it comes to hosting, you get what you pay for. We’ve developed a list of our absolute favorite hosts to help you find the right host at the right price. Check out our list.",
        },
        {
          question: "I’m on a strict budget. Do you have any low cost options?",
          answer:
            "A custom website can be a big investment and not all small businesses have the budget for you. We offer a budget package which will help get you online with a nice looking website fast. Learn more about our budget package.",
        },
        {
          question: "What if I need help on my site down the road?",
          answer:
            "We are only an email away! We’re here to help you as much or as little as you need, and we won’t disappear once the site is launched. We’ve been doing this for 12 years, so we aren’t going anywhere anytime soon.",
        },
      ],
    };
  },
};
</script>
<style scoped>
details {
  min-height: 5px;
  padding: 10px 20px 10px 20px;
  margin: 0 auto;
  position: relative;
  font-size: 22px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.3s;
}

details + details {
  margin-top: 20px;
}

details[open] {
  min-height: 50px;
  background-color: #f6f7f8;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
}

summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

summary:focus {
  outline: none;
}

summary:focus::after {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  /* box-shadow: 0 0 0 5px rebeccapurple; */
}

summary::-webkit-details-marker {
  display: none;
}

.control-icon {
  fill: rebeccapurple;
  transition: 0.3s ease;
  pointer-events: none;
}

.control-icon-close {
  display: none;
}

details[open] .control-icon-close {
  display: initial;
  transition: 0.3s ease;
}

details[open] .control-icon-expand {
  display: none;
}
</style>