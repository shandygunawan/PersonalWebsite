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
      <div class="p-col p-lg-4 p-text-center">
        <Card data-aos="fade-up" style="height: 100%">
          <template #title>
            <span class="text-section-subtitle">About Me</span>
          </template>
          <template #content>
            As a programmer, I enjoy building meaningful things for others. This enjoyment gives me a huge motivation to dedicate myself for the job. I'm also believe collaboration is the key to achieve great things. This is the reason why I want to create a good relationship with my colleagues so we can help each other to be more than we personally could.
          </template>
        </Card>
      </div>
      <div class="p-col p-lg-4 p-text-center">
        <img :src="avatar_image" :alt="avatar_alt" class="img-avatar" data-aos="flip-left">
      </div>
      <div class="p-col p-lg-4 p-text-center">
        <Card data-aos="fade-up" style="height: 100%">
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
  <div class="bg-fullscreen bg-color-tan p-d-flex p-flex-column p-ai-center">
    <span class="text-section-title p-my-4">Experiences</span>
  </div>
</template>

<script>
import image_avatar from '../assets/images/index_avatar.jpg';

export default {
  data() {
    return {
      avatar_image: image_avatar,
      avatar_alt: "Shandy"
    };
  }
}
</script>

<style scoped>
/* BG */
.bg-fullscreen {
  height: 100vh;
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

/* IMAGE */
.img-avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

</style>