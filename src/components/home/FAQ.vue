<template>
  <section id="faq" class="faq">
    <div class="container">
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to common questions about our products, packaging, export
          process, and international shipping.
        </p>
      </div>

      <div class="faq-wrapper">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <button class="faq-question" @click="toggle(index)">
            <span>{{ item.question }}</span>

            <span class="icon">
              {{ activeIndex === index ? "−" : "+" }}
            </span>
          </button>

          <div v-show="activeIndex === index" class="faq-answer">
            <p>
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};

const faqs = [
  {
    question: "What products do you export?",
    answer:
      "We export Cow Dung Cakes, Cow Dung Powder, Organic Manure, and Vermi Compost in various packaging options.",
  },

  {
    question: "Do you provide private label packaging?",
    answer:
      "Yes. We offer OEM and private label packaging for wholesalers and distributors.",
  },

  {
    question: "What is your minimum order quantity?",
    answer:
      "The minimum order quantity depends on the product and destination country. Please contact us for details.",
  },

  {
    question: "Which countries do you export to?",
    answer:
      "We serve customers across Asia, Europe, the Middle East, Africa, Australia, and North America.",
  },

  {
    question: "Can I request product samples?",
    answer: "Yes. Samples can be arranged before confirming bulk orders.",
  },

  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on production schedules and shipping destination. We'll provide an estimated timeline with your quotation.",
  },

  {
    question: "What payment methods do you accept?",
    answer:
      "We support bank transfers and other internationally accepted payment methods as agreed during the order process.",
  },
];
</script>

<style scoped>
@import "../../css/faq.css";
</style>
