<template>
  <section id="home" class="hero">
    <div class="hero-overlay">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-tag"> 🌿 Premium Organic Export Products </span>

          <h1>Sustainable Cow-Based Organic Solutions for Agriculture</h1>

          <p>
            Export-quality cow dung products including dung cakes, vermicompost,
            manure, and cow dung powder for farms, nurseries, industries, and
            global buyers.
          </p>

          <div class="hero-buttons">
            <RouterLink to="/products/cow-dung-cakes" class="btn btn-primary">
              Explore Products
            </RouterLink>

            <RouterLink to="/bulk-quote" class="btn btn-outline">
              Request Bulk Quote
            </RouterLink>
          </div>

          <div class="hero-badges">
            <div class="badge">🌱 100% Organic</div>

            <div class="badge">🚢 Export Quality</div>

            <div class="badge">🌍 Worldwide Shipping</div>
          </div>
        </div>

        <div class="hero-stats">
          <div class="stat-card">
            <h2>20+</h2>
            <p>Export Countries</p>
          </div>

          <div class="stat-card">
            <h2>4</h2>
            <p>Core Products</p>
          </div>

          <div class="stat-card">
            <h2>1000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span></span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import "../../css/hero.css";
</style>
