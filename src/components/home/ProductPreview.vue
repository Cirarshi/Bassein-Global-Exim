<template>
  <section id="products" class="products">
    <div class="container">
      <div class="section-title">
        <h2>Featured Products</h2>

        <p>
          Explore our premium organic products trusted by farmers, distributors,
          and international buyers.
        </p>
      </div>

      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />

            <span class="product-badge">
              {{ product.badge }}
            </span>
          </div>

          <div class="product-content">
            <h3>{{ product.name }}</h3>

            <p>{{ product.shortDescription }}</p>

            <div class="price">
              Starting From
              <strong>{{ product.price }}</strong>
            </div>

            <RouterLink :to="`/products/${product.id}`" class="btn btn-primary">
              View Details
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import products from "../../data/products";
</script>

<style scoped>
@import "../../css/products.css";
</style>
