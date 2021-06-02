<template>
  <div class="background">
    <div class="dark-layer">
      <div class="p-d-flex p-flex-column p-jc-center p-ai-center" style="height: 100vh; overflow:hidden;*">
        <img :src="avatar_image" :alt="avatar_alt" class="img-avatar">
        <div class="p-grid p-mt-1">
          <div class="p-col-12 p-text-center">
            <span class="text p-mt-4 p-text-center">
              Hi! I'm Shandy
              </span>      
          </div>
          <div class="p-col-12 p-lg-4 p-my-2 p-text-center">
            <router-link to="/resume">
              <Button class="p-button-link p-button-secondary p-button-outlined p-button-lg" label="Resume"></Button>
            </router-link>
          </div>
          <div class="p-col-12 p-lg-4 p-my-2 p-text-center">
            <router-link to="/projects">
              <Button class="p-button-link p-button-secondary p-button-outlined p-button-lg" label="Projects"></Button>
            </router-link>
          </div>
          <div class="p-col-12 p-lg-4 p-my-2 p-text-center">
            <Button class="p-button-link p-button-secondary p-button-outlined p-button-lg" label="Blogs"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image_avatar from '../assets/images/avatar.jpg';

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
.background {
  background-image: url('../assets/images/wallpaper.jpg');
  background-size: cover;
}

.dark-layer {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}

.text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color:var(--surface-400);
}

.img-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

@media only screen and (max-width: 600px) {
  .img-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }  
}

</style>