<template>
  <div class="background">
    <div class="p-d-flex p-flex-column p-p-5">
      <h1>Projects</h1>
      <Chips v-model="chips" @add="updateProjectsList" @remove="updateProjectsList" />
      <br/>
      <div class="p-grid">
        <div class="p-col-12 p-md-6 p-lg-4" v-for="project in projects_filtered" :key="project.name">
          <Card >
            <template #title>
              {{project.name}}
            </template>
            <template #subtitle>
              Category: {{project.category}}
            </template>
            <template #content>
              <div class="p-d-flex p-flex-column">
                <p>{{project.description}}</p>
                <table>
                  <tr>
                    <td><b>Language</b></td>
                    <td>: {{project.languages}}</td>
                  </tr>
                  <tr>
                    <td><b>Tools</b></td>
                    <td>: {{project.tools}}</td>
                  </tr>
                </table>
              </div>
            </template>
            <template #footer>
              <Button class="p-button-secondary" v-if="project.url_github !== ''">
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              </Button>
              <Button class="p-button-info p-ml-3" v-if="project.url_external !== ''">
                <font-awesome-icon :icon="['fas', 'link']" size="lg" />
              </Button>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Projects",
  data() {
    return {
      chips: ["web", "other"],
      projects_filtered: [],
      projects_all: [
        {
          "name": "Personal Website",
          "category": "web",
          "description": "My Personal website is created as a place to share my CV, my projects, and my thoughts through blog.",
          "summary": "My Personal Website.",
          "languages": "JavaScript",
          "tools": "VueJS, PrimeVue, Firebase",
          "url_github": "https://github.com/shandygunawan/PersonalWebsite",
          "url_external": "shandywebsite.web.app"
        },
        {
          "name": "Interactive IR",
          "category": "other",
          "description": "Interactive IR simulates how an Information Retrieval (IR) system works. In this app, user can choose configurations on how the IR system works along with the result type (experimental or interactive). Experimental gives a query-by-query performances while interactive gives relevance documents (like a search engine).",
          "summary": "IR simulation with user's custom configuration.",
          "languages": "JavaScript, Python",
          "tools": "ReactJS, Bootstrap, Flask",
          "url_github": "https://github.com/shandygunawan/InteractiveIR",
          "url_external": "https://interactive-ir.herokuapp.com/"
        },
      ]
    }
  },
  methods: {
    updateProjectsList(){
      this.projects_filtered = this.projects_all.filter((el) => {
        return this.chips.includes(el.category);
      });
    }
  },
  mounted(){
    this.projects_filtered = this.projects_all;
  }
}
</script>

<style scoped>
.background {
  background-color: #F3EFE0;
  min-height: 100vh;
}

.border-black {
  border: 1px solid black;
}

</style>