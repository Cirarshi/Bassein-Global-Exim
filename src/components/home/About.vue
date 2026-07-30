<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>About Bassein Global Exim</h2>

        <p>
          Delivering premium organic cow-based agricultural products with
          sustainability, quality, and global standards.
        </p>
      </div>

      <div class="about-wrapper">
        <!-- Left Side -->

        <div class="about-image">
          <img src="../../assets/images/about.jpg" alt="Organic Farming" />

          <div class="experience-card">
            <h2>10+</h2>

            <span>Years of Experience</span>
          </div>
        </div>

        <!-- Right Side -->

        <div class="about-content">
          <span class="small-title"> Who We Are </span>

          <h2>Sustainable Agriculture Starts With Nature</h2>

          <p>
            Bassein Global Exim is committed to manufacturing and exporting
            high-quality organic products derived from natural cow resources.
            Our products improve soil fertility, enhance crop productivity, and
            promote environmentally friendly farming practices.
          </p>

          <p>
            Every product undergoes strict quality control to meet domestic and
            international standards. Our mission is to support farmers,
            distributors, nurseries, and agricultural businesses with
            eco-friendly alternatives.
          </p>

          <div class="about-features">
            <div class="feature">
              <div class="icon">🌱</div>

              <div>
                <h4>100% Organic</h4>

                <p>No harmful chemicals.</p>
              </div>
            </div>

            <div class="feature">
              <div class="icon">🚢</div>

              <div>
                <h4>Export Ready</h4>

                <p>Worldwide shipping standards.</p>
              </div>
            </div>

            <div class="feature">
              <div class="icon">♻️</div>

              <div>
                <h4>Eco Friendly</h4>

                <p>Supporting sustainable farming.</p>
              </div>
            </div>

            <div class="feature">
              <div class="icon">🧪</div>

              <div>
                <h4>Quality Tested</h4>

                <p>Premium quality assurance.</p>
              </div>
            </div>
          </div>

          <RouterLink to="/bulk-quote" class="btn btn-primary">
            Request Bulk Quote
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import "../../css/about.css";
</style>
