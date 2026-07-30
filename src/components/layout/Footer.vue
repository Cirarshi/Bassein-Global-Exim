<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Company -->

        <div class="footer-column">
          <img
            src="../../assets/logo/logo.png"
            class="footer-logo"
            alt="Logo"
          />

          <p>
            Bassein Global Exim is committed to supplying premium organic
            cow-based agricultural products worldwide with quality,
            sustainability, and trust.
          </p>
        </div>

        <!-- Quick Links -->

        <div class="footer-column">
          <h3>Quick Links</h3>

          <RouterLink to="/">Home</RouterLink>

          <a href="#about">About</a>

          <a href="#products">Products</a>

          <a href="#contact">Contact</a>

          <RouterLink to="/bulk-quote"> Bulk Quote </RouterLink>
        </div>

        <!-- Products -->

        <div class="footer-column">
          <h3>Products</h3>

          <RouterLink to="/products/cow-dung-cakes">
            Cow Dung Cakes
          </RouterLink>

          <RouterLink to="/products/cow-dung-powder">
            Cow Dung Powder
          </RouterLink>

          <RouterLink to="/products/organic-manure">
            Organic Manure
          </RouterLink>

          <RouterLink to="/products/vermi-compost"> Vermi Compost </RouterLink>
        </div>

        <!-- Contact -->

        <div class="footer-column">
          <h3>Contact</h3>

          <p>📍 Mumbai, Maharashtra, India</p>

          <p>📞 +91 XXXXX XXXXX</p>

          <p>✉ info@basseinglobalexim.com</p>

          <p>🕘 Mon - Sat : 9AM - 6PM</p>
        </div>
      </div>

      <div class="newsletter">
        <div>
          <h3>Subscribe to our Newsletter</h3>

          <p>Get updates about products and export opportunities.</p>
        </div>

        <form @submit.prevent>
          <input type="email" placeholder="Enter your email" />

          <button class="btn btn-primary">Subscribe</button>
        </form>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Bassein Global Exim. All Rights Reserved.</p>

        <div class="socials">
          <a href="#">Facebook</a>

          <a href="#">Instagram</a>

          <a href="#">LinkedIn</a>

          <a href="#">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
@import "../../css/footer.css";
</style>
