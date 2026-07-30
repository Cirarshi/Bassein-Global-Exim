<template>
  <section id="manufacturing" class="manufacturing">
    <div class="container">
      <div class="section-title">
        <h2>Our Manufacturing Process</h2>

        <p>
          Every product passes through a carefully monitored process to ensure
          premium quality, hygiene, and sustainability.
        </p>
      </div>

      <div class="timeline">
        <div
          v-for="(step, index) in process"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-image">
            <img :src="step.image" :alt="step.title" />
          </div>

          <div class="timeline-content">
            <span class="step-number">
              {{ index + 1 }}
            </span>

            <h3>{{ step.title }}</h3>

            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Collection from "../../assets/process/collection.jpg";
import Drying from "../../assets/process/drying.jpg";
import Processing from "../../assets/process/processing.jpg";
import Quality from "../../assets/process/quality.jpg";
import Packaging from "../../assets/process/packaging.jpg";
import Shipping from "../../assets/process/shipping.jpg";

const process = [
  {
    title: "Raw Material Collection",
    description:
      "Fresh cow dung is collected from healthy cattle maintained under hygienic conditions.",
    image: Collection,
  },

  {
    title: "Natural Drying",
    description:
      "Materials are naturally dried to preserve nutrients and reduce moisture.",
    image: Drying,
  },

  {
    title: "Processing",
    description:
      "Products are processed using modern equipment while maintaining organic integrity.",
    image: Processing,
  },

  {
    title: "Quality Inspection",
    description:
      "Every batch is checked for quality, moisture, consistency and packaging standards.",
    image: Quality,
  },

  {
    title: "Packaging",
    description:
      "Products are packed in durable export-quality bags suitable for international transportation.",
    image: Packaging,
  },

  {
    title: "Worldwide Shipping",
    description:
      "Orders are dispatched with complete export documentation and reliable logistics partners.",
    image: Shipping,
  },
];
</script>

<style scoped>
@import "../../css/manufacturing.css";
</style>
