<template>
  <section id="founders" class="founders">
    <div class="container">
      <div class="section-title">
        <h2>Meet Our Leadership</h2>

        <p>
          Passionate leaders dedicated to sustainable agriculture, innovation,
          and global customer satisfaction.
        </p>
      </div>

      <div class="founders-grid">
        <div class="founder-card" v-for="person in founders" :key="person.name">
          <div class="image-wrapper">
            <img :src="person.image" :alt="person.name" />
          </div>

          <div class="content">
            <h3>{{ person.name }}</h3>

            <span>{{ person.role }}</span>

            <p>
              {{ person.description }}
            </p>

            <div class="socials">
              <a :href="person.linkedIn" target="_blank"> LinkedIn </a>

              <a :href="person.email" target="_blank"> Email </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Founder1 from "../../assets/founders/avi.jpg";
import Founder2 from "../../assets/founders/bhalu.jpg";
import Founder3 from "../../assets/founders/shailu.jpg";
import Founder4 from "../../assets/founders/pappu.jpg";
import Founder5 from "../../assets/founders/saurabh.jpg";
import Founder6 from "../../assets/founders/uk.jpg";

const founders = [
  {
    name: "Avinash Bacchav",
    role: "Managing Director",
    description:
      "Leading the company with a vision to promote sustainable organic farming solutions across global markets.",
    image: Founder1,
  },

  {
    name: "Bhalendra Rathore",
    role: "Operations Director",
    description:
      "Driving manufacturing excellence, quality assurance, and international business relationships.",
    image: Founder2,
  },
  {
    name: "Shailender Singh",
    role: "Chief Operating Officer",
    description:
      "Overseeing daily operations, production efficiency, quality control, and supply chain management.",
    image: Founder3,
  },
  {
    name: "Pappu Kumar",
    role: "Director of Manufacturing",
    description:
      "Managing production facilities, process optimization, safety standards, and manufacturing excellence.",
    image: Founder4,
  },
  {
    name: "Saurabh Singh Rajawat",
    role: "Quality Assurance Director",
    description:
      "Ensuring all products comply with national and international quality standards through rigorous testing and continuous improvement.",
    image: Founder5,
  },
  {
    name: "Utkarsh Kapoor",
    role: "Technology & Web Development Lead",
    description:
      "Developing and maintaining the company's digital platforms, optimizing website performance, implementing modern technologies, and enhancing customer experience through secure and scalable solutions.",
    image: Founder6,
    linkedIn: "https://www.linkedin.com/in/utkarsh-kapoor-6b3200127/",
    email: "mailto:22.utkarsh.kapoor@gmail.com",
  },
];
</script>

<style scoped>
@import "../../css/founders.css";
</style>
