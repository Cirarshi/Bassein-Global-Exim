<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Get In Touch</h2>

        <p>
          Ready to place an order or discuss your requirements? Contact our team
          today.
        </p>
      </div>

      <div class="contact-wrapper">
        <!-- Left Side -->

        <div class="contact-info">
          <h3>Bassein Global Exim</h3>

          <p>
            We supply premium organic products to domestic and international
            buyers with reliable logistics and export support.
          </p>

          <div class="info-box">
            <div class="info-item">
              <span>📍</span>

              <div>
                <h4>Address</h4>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div class="info-item">
              <span>📞</span>

              <div>
                <h4>Phone</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div class="info-item">
              <span>✉️</span>

              <div>
                <h4>Email</h4>
                <p>info@basseinglobalexim.com</p>
              </div>
            </div>

            <div class="info-item">
              <span>🕒</span>

              <div>
                <h4>Business Hours</h4>
                <p>Mon - Sat : 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side -->

        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="row">
              <input
                type="text"
                placeholder="Full Name"
                v-model="form.name"
                required
              />

              <input
                type="text"
                placeholder="Company Name"
                v-model="form.company"
              />
            </div>

            <div class="row">
              <input
                type="email"
                placeholder="Email Address"
                v-model="form.email"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                v-model="form.phone"
                required
              />
            </div>

            <div class="row">
              <input type="text" placeholder="Country" v-model="form.country" />

              <select v-model="form.product">
                <option value="">Product Interested In</option>

                <option>Cow Dung Cakes</option>
                <option>Cow Dung Powder</option>
                <option>Organic Manure</option>
                <option>Vermi Compost</option>
              </select>
            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your requirements..."
              v-model="form.message"
            ></textarea>

            <button class="btn btn-primary" type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  message: "",
});

const submitForm = () => {
  console.log(form);

  // Later we'll connect this to backend

  alert("Thank you! Your inquiry has been submitted.");
};
</script>

<style scoped>
@import "../../css/contact.css";
</style>
