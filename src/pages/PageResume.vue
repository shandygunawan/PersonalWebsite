<template>
  <!-- Title -->
  <div 
    class="bg-fullscreen p-d-flex p-flex-column p-jc-center p-ai-center" 
    style="background:linear-gradient(120deg, #00adee, #000000);">
    
    <span class="text-landing-name">Shandy</span>
    <span class="text-landing-resume">--------------</span>
    <span class="text-landing-resume">Resume</span>

  </div>

  <!-- Profile -->
  <div class="bg-fullscreen p-d-flex p-flex-column p-ai-center">
    <span class="text-section-title p-my-4">Profile</span>
    <div class="p-grid p-mt-5 p-px-4" style="width: 100%">
      <div class="p-col-12 p-lg-4 p-text-center">
        <Card style="height: 100%" data-aos="fade-up">
          <template #title>
            <span class="text-section-subtitle">About Me</span>
          </template>
          <template #content>
            As a programmer, I enjoy building meaningful things for others. This enjoyment gives me a huge motivation to dedicate myself for the job. I'm also believe collaboration is the key to achieve great things. This is the reason why I want to create a good relationship with my colleagues so we can help each other to be more than we personally could.
          </template>
        </Card>
      </div>
      <div class="p-col-12 p-lg-4 p-text-center">
        <img :src="avatar_image" :alt="avatar_alt" class="img-avatar">
      </div>
      <div class="p-col-12 p-lg-4 p-mb-4 p-text-center">
        <Card style="height: 100%" data-aos="fade-up">
          <template #title>
            <span class="text-section-subtitle">Details</span>
          </template>
          <template #content>
            <span class="text-section-content p-text-bold">Name:</span>
            <br/>
            <span class="text-section-content">Shandy</span>
            <br/><br/>
            <span class="text-section-content p-text-bold">Age:</span>
            <br/>
            <span class="text-section-content">22 Years Old</span>
            <br/><br/>
            <span class="text-section-content p-text-bold">Location:</span>
            <br/>
            <span class="text-section-content">Jakarta, Indonesia</span>
          </template>
        </Card>
      </div>
    </div>
  </div>

  <!-- Experiences -->
  <div class="bg-fullscreen bg-color-tan p-d-flex p-flex-column p-ai-center">
    <span class="text-section-title p-my-4">Experiences</span>

    <Timeline :value="experiences" align="alternate" class="p-mt-4" data-aos="fade-down">
      <template #opposite="slotProps">
        {{slotProps.item.date}}
      </template>
      <template #content="slotProps">
        <Card class="p-mb-5" data-aos="flip-up">
          <template #title>
            <div class="p-text-left">
              {{slotProps.item.company}}
            </div>
          </template>
          <template #subtitle>
            <div class="p-text-left">
              {{slotProps.item.role}}
            </div>
          </template>
          <template #content>
            <div class="text-card-content p-text-left">
              {{slotProps.item.description}}
            </div>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>


</template>

<script>
import image_avatar from '../assets/images/index_avatar.jpg';

export default {
  data() {
    return {
      avatar_image: image_avatar,
      avatar_alt: "Shandy",
      experiences: [
        {
          company: "Qontak", 
          role: "Android Developer Intern", 
          date:"May 2019 - Aug 2019",
          description: `Working on company's mobile application using Kotlin: 
- Create and update existing User Interfaces (XML and dynamic UIs),
- Add filters for contacts list and products list,
- Implement voice recording and playback capability when adding and editing notes,
- Integrate CRM with Qiscus Multichannel (Server-side, non-Mobile).
`
        },
        {
          company: "Learncy", 
          role: "Part Time Full Stack Developer", 
          date:"Dec 2019 - Jan 2020" ,
          description:`Working on company's various features:
- Creating history for CyCash transactions,
- Integrating CyCash top up with Midtrans Payment Gateway,
- Creating "Rasionalisasi" feature (Full Stack).
          `
        },
        {
          company: "BCA", 
          role: "Software Quality Improvement Intern", 
          date:"Mar 2021 - Now",
          description:`Helping delivery and operations:
          1. Building code with Jenkins,
          2. Developing pipeline scripts,
          3. Delivering code to UAT stage.
          `
        }
      ]
    };
  }
}
</script>

<style scoped>
/* BG */
.bg-fullscreen {
  min-height: 100vh;
}

/* COlOR */

.bg-color-tan {
  background-color: #F3EFE0;
}

/* TEXT */
.text-landing-name {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 5rem;
  color:var(--blue-100);
}

.text-landing-resume {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 200;
  font-size: 3rem;
  color:var(--blue-100);
}

.text-section-title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 100;
  font-size: 4rem;
  color:var(--blue-400);
}

.text-section-subtitle {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:var(--blue-400);
}

.text-section-content {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.text-card-content {
  white-space: pre-wrap;
}

/* IMAGE */
.img-avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: transform 1s;
}

.img-avatar:hover {
  transform: scale(1.2);
}

/* OTHER */
.border-black {
  border: 1px solid black;
}

/* MOBILE */
@media only screen and (max-width: 600px) {
  /* BG */
  .bg-fullscreen {
    height: 100%;
  }

  /* TEXT */
  .text-section-title {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 100;
    font-size: 3rem;
    color:var(--blue-400);
  }

  .text-card-content {
    white-space: pre-wrap;
  }

    /* IMAGE */
  .img-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: transform 0.2s;
  }

  .img-avatar:hover {
    transform: scale(1.1);
  }
}

</style>