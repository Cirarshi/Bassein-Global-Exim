<template>
  <div class="floating-buttons">
    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="fab whatsapp">
      💬
    </a>

    <a href="tel:+91XXXXXXXXXX" class="fab call"> 📞 </a>

    <button class="fab top" @click="scrollTop">↑</button>
  </div>
</template>

<script setup>
const scrollTop = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};
</script>

<style scoped>
@import "../../css/floating.css";
</style>
