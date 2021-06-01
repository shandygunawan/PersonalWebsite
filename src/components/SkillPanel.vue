<template>
  <Fieldset :legend="legend" :data-aos="animation">
    <div class="p-grid p-ai-end">
      <div 
        class="p-col-6 p-lg-3 p-text-center" 
        v-for="skill in skills"
        :key="skill.name">
        <figure>
          <img :src="skill.image" :alt="skill.name" class="img-logo">
          <figcaption class="text-section-subtitle p-mt-1">{{ skill.name }}</figcaption>
        </figure>
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

</style>