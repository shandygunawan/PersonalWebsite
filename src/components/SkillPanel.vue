<template>
  <Fieldset :legend="legend" :data-aos="animation">
    <div class="p-grid p-ai-end">
      <div 
        class="p-col-6 p-lg-3 p-text-center" 
        v-for="skill in skills"
        :key="skill.name">
        <img :src="skill.image" :alt="skill.name" class="img-logo">
        <br/>
        <span class="text-section-subtitle p-text-center p-mt-1">{{ skill.name }}</span>
      </div>
    </div>
  </Fieldset>
</template>

<script>
export default {
  props: ["legend", "animation", "skills"]
}
</script>

<style scoped>
.text-section-subtitle {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:var(--blue-400);
}

.img-logo {
  width: 100px;
  width: 100px;
}

/* MOBILE */
@media only screen and (max-width: 600px) {
  .img-logo {
    width: 75px;
    width: 75px;
  }
}

</style>