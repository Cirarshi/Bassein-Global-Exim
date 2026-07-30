<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-title">
        <h2>What Our Clients Say</h2>

        <p>
          We take pride in building long-term relationships with customers
          around the world.
        </p>
      </div>

      <Swiper
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :breakpoints="breakpoints"
      >
        <SwiperSlide v-for="client in testimonials" :key="client.name">
          <div class="testimonial-card">
            <img :src="client.image" :alt="client.name" />

            <div class="content">
              <div class="stars">⭐⭐⭐⭐⭐</div>

              <p>"{{ client.review }}"</p>

              <h3>{{ client.name }}</h3>

              <span>
                {{ client.company }}
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Client1 from "../../assets/testimonials/client1.jpg";
import Client2 from "../../assets/testimonials/client2.jpg";
import Client3 from "../../assets/testimonials/client3.jpg";

const testimonials = [
  {
    name: "John Smith",
    company: "Organic Imports Ltd., UK",
    review:
      "Excellent product quality and timely shipments. Highly recommended.",
    image: Client1,
  },

  {
    name: "Ahmed Hassan",
    company: "Green Farms LLC, UAE",
    review: "Professional export documentation and premium packaging.",
    image: Client2,
  },

  {
    name: "Sarah Wilson",
    company: "Eco Grow Inc., Australia",
    review: "Consistent quality and outstanding customer support.",
    image: Client3,
  },
];

const breakpoints = {
  768: {
    slidesPerView: 2,
  },

  1200: {
    slidesPerView: 3,
  },
};
</script>

<style scoped>
@import "../../css/testimonials.css";
</style>
