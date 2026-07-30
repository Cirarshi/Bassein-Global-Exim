<template>
  <section id="certifications" class="certifications">
    <div class="container">
      <div class="section-title">
        <h2>Quality Assurance & Certifications</h2>

        <p>
          We follow strict manufacturing, packaging, and quality control
          processes to ensure our products meet international expectations.
        </p>
      </div>

      <div class="certification-grid">
        <div
          class="certificate-card"
          v-for="item in certifications"
          :key="item.title"
        >
          <img :src="item.image" :alt="item.title" />

          <h3>{{ item.title }}</h3>

          <p>{{ item.description }}</p>
        </div>
      </div>

      <div class="quality-banner">
        <div class="banner-left">
          <h2>Our Quality Promise</h2>

          <p>
            Every shipment is carefully inspected before dispatch. We prioritize
            product consistency, hygienic processing, secure packaging, and
            customer satisfaction.
          </p>
        </div>

        <div class="banner-right">
          <div class="quality-item">✔ Moisture Checked</div>

          <div class="quality-item">✔ Export Packaging</div>

          <div class="quality-item">✔ Batch Tested</div>

          <div class="quality-item">✔ Eco-Friendly Production</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ISO from "../../assets/certificates/iso.png";
import Organic from "../../assets/certificates/organic.png";
import Quality from "../../assets/certificates/quality.png";
import Export from "../../assets/certificates/export.png";

const certifications = [
  {
    image: ISO,
    title: "ISO Standards",
    description:
      "Manufacturing processes aligned with international quality practices.",
  },

  {
    image: Organic,
    title: "Organic Production",
    description:
      "Products made using natural and environmentally friendly methods.",
  },

  {
    image: Quality,
    title: "Quality Assurance",
    description: "Each batch is inspected before packaging and shipping.",
  },

  {
    image: Export,
    title: "Export Compliance",
    description:
      "Packaging and documentation suitable for international trade.",
  },
];
</script>

<style scoped>
@import "../../css/certifications.css";
</style>
