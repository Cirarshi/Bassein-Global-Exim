<template>
  <Navbar />

  <main>
    <Hero />

    <About />

    <WhyChooseUs />

    <Services />

    <ProductPreview />

    <ManufacturingProcess />

    <ExportCountries />

    <Certifications />

    <Founders />

    <Testimonials />

    <FAQ />

    <CTASection />

    <Contact />
  </main>

  <Footer />

  <FloatingButtons />
</template>

<script setup>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import FloatingButtons from "../components/layout/FloatingButtons.vue";

import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import WhyChooseUs from "../components/home/WhyChooseUs.vue";
import Services from "../components/home/Services.vue";
import ProductPreview from "../components/home/ProductPreview.vue";
import ManufacturingProcess from "../components/home/ManufacturingProcess.vue";
import ExportCountries from "../components/home/ExportCountries.vue";
import Certifications from "../components/home/Certifications.vue";
import Founders from "../components/home/Founders.vue";
import Testimonials from "../components/home/Testimonials.vue";
import FAQ from "../components/home/FAQ.vue";
import CTASection from "../components/home/CTASection.vue";
import Contact from "../components/home/Contact.vue";
</script>

<style scoped>
main {
  overflow: hidden;
}
</style>
