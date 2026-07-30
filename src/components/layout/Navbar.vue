<template>
  <header
    class="navbar"
    :class="{
      scrolled: isScrolled,
      open: mobileOpen,
    }"
  >
    <div class="container nav-container">
      <!-- Logo -->

      <RouterLink to="/" class="logo">
        <img
          :src="isScrolled ? darkLogo : whiteLogo"
          alt="Bassein Global Exim"
        />
      </RouterLink>

      <!-- Desktop Menu -->

      <nav class="desktop-nav">
        <a
          v-for="item in menu"
          :key="item.id"
          :href="'#' + item.id"
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Right -->

      <div class="right-section">
        <!-- Search -->

        <button class="icon-btn">🔍</button>

        <!-- Cart -->

        <RouterLink to="/cart" class="cart">
          🛒

          <span class="badge">
            {{ cartCount }}
          </span>
        </RouterLink>

        <!-- Quote -->

        <RouterLink to="/bulk-quote" class="btn btn-primary">
          Get Quote
        </RouterLink>

        <!-- Mobile -->

        <button class="hamburger" @click="mobileOpen = !mobileOpen">☰</button>
      </div>
    </div>

    <!-- Mobile Menu -->

    <transition name="slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <a
          v-for="item in menu"
          :key="item.id"
          href="#"
          @click.prevent="
            scrollTo(item.id);
            mobileOpen = false;
          "
        >
          {{ item.name }}
        </a>

        <RouterLink to="/bulk-quote" class="mobile-btn">
          Request Quote
        </RouterLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import darkLogo from "../../assets/logo/logo.png";
import whiteLogo from "../../assets/logo/logo-white.png";

const mobileOpen = ref(false);

const isScrolled = ref(false);

const cartCount = ref(0);

const menu = [
  {
    id: "about",
    name: "About",
  },

  {
    id: "products",
    name: "Products",
  },

  {
    id: "manufacturing",
    name: "Process",
  },

  {
    id: "certifications",
    name: "Certifications",
  },

  {
    id: "faq",
    name: "FAQ",
  },

  {
    id: "contact",
    name: "Contact",
  },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60;
};

const scrollTo = (id) => {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import "../../css/navbar.css";
</style>
