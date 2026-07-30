<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <div class="section-title">
        <h2>Why Choose Us</h2>

        <p>
          We combine traditional organic farming practices with modern
          manufacturing standards to deliver premium-quality products across the
          globe.
        </p>
      </div>

      <div class="why-grid">
        <div v-for="item in features" :key="item.title" class="why-card">
          <div class="icon">
            {{ item.icon }}
          </div>

          <h3>{{ item.title }}</h3>

          <p>{{ item.description }}</p>
        </div>
      </div>

      <div class="counter-section">
        <div class="counter">
          <h2>1000+</h2>

          <span>Happy Customers</span>
        </div>

        <div class="counter">
          <h2>20+</h2>

          <span>Countries Served</span>
        </div>

        <div class="counter">
          <h2>4</h2>

          <span>Organic Products</span>
        </div>

        <div class="counter">
          <h2>100%</h2>

          <span>Organic Materials</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "🌱",
    title: "100% Organic",
    description:
      "Manufactured using natural cow-based resources without harmful chemicals.",
  },

  {
    icon: "🏭",
    title: "Modern Processing",
    description:
      "Clean processing units with strict quality checks and hygienic packaging.",
  },

  {
    icon: "🚢",
    title: "Global Export",
    description:
      "Reliable logistics and export-ready packaging for international buyers.",
  },

  {
    icon: "🤝",
    title: "Trusted Partnership",
    description:
      "Long-term relationships with distributors, wholesalers and agricultural businesses.",
  },
];
</script>

<style scoped>
@import "../../css/whyChooseUs.css";
</style>
