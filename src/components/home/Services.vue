<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-title">
        <h2>Our Products & Services</h2>

        <p>
          From premium organic products to complete export solutions, we help
          businesses worldwide with reliable supply and quality.
        </p>
      </div>

      <div class="services-wrapper">
        <!-- Products -->

        <div class="service-column">
          <h3>🌿 Organic Products</h3>

          <div
            v-for="product in products"
            :key="product.title"
            class="service-card"
          >
            <div class="icon">
              {{ product.icon }}
            </div>

            <div>
              <h4>{{ product.title }}</h4>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>

        <!-- Services -->

        <div class="service-column">
          <h3>🚢 Export Services</h3>

          <div
            v-for="service in services"
            :key="service.title"
            class="service-card"
          >
            <div class="icon">
              {{ service.icon }}
            </div>

            <div>
              <h4>{{ service.title }}</h4>

              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    icon: "🌾",
    title: "Cow Dung Cakes",
    description:
      "Traditional organic fuel and religious-purpose cow dung cakes.",
  },

  {
    icon: "🌱",
    title: "Cow Dung Powder",
    description:
      "Fine powdered cow dung suitable for agriculture and industries.",
  },

  {
    icon: "🪴",
    title: "Organic Manure",
    description:
      "Rich organic fertilizer improving soil fertility and crop yield.",
  },

  {
    icon: "🌿",
    title: "Vermi Compost",
    description: "Premium compost enriched with earthworm nutrients.",
  },
];

const services = [
  {
    icon: "🚢",
    title: "Bulk Export",
    description: "Reliable export of organic products worldwide.",
  },

  {
    icon: "📦",
    title: "Private Label Packaging",
    description: "Customized branding and packaging solutions.",
  },

  {
    icon: "🏭",
    title: "OEM Manufacturing",
    description: "Manufacturing according to your specifications.",
  },

  {
    icon: "🌍",
    title: "Global Logistics",
    description: "Efficient worldwide shipping and documentation.",
  },
];
</script>

<style scoped>
@import "../../css/services.css";
</style>
