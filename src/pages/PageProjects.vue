<template>
  <div class="background">
    <div class="p-d-flex p-flex-column p-p-5">
      <h1>Projects</h1>
      <span>Type one or more category then press Enter to filter. (Case-insensitive)</span>
      <Chips class="p-mt-2" v-model="chips" @add="updateProjectsList" @remove="updateProjectsList" />
      <br/>
      <div class="p-grid">
        <transition-group name="project-list">
        <div class="p-col-12 p-md-6 p-lg-4" v-for="project in projects_filtered" :key="project.name">
          <Card>
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
              <a :href="project.url_github">
                <Button class="p-button-secondary" v-if="project.url_github !== ''">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                </Button>
              </a>
              <a :href="project.url_external">
                <Button class="p-button-info p-ml-3" v-if="project.url_external !== ''">
                  <font-awesome-icon :icon="['fas', 'link']" size="lg" />
                </Button>
              </a>
            </template>
          </Card>
        </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebaseInit.js";
const db = firebase.firestore();

export default {
  title: "Projects",
  data() {
    return {
      chips: [],
      projects_filtered: [],
      projects_all: []
    }
  },
  methods: {
    updateProjectsList() {
      if (this.chips.length === 0) {
        this.projects_filtered = this.projects_all;
      } else {
        this.projects_filtered = this.projects_all.filter((el) => {
          var chips_lowercase = [];
          for (var i = 0; i < this.chips.length; i++) {
            chips_lowercase.push(this.chips[i].toLowerCase());
          }
          // console.log(chips_lowercase);
          return chips_lowercase.includes(el.category.toLowerCase());
        });
      }
    },
    readProjects() {
      this.projects_all = [];
      db.collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((project) => {
            this.projects_all.push(project.data());
          });
        })
    }
  },
  created() {
    // this.projects_filtered = this.projects_all;
    this.readProjects();
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

.project-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.project-list-enter-active {
  transition: all 0.5s ease-out;
}

.project-list-enter-to,
.project-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.project-list-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.project-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.project-list-move {
  transition: transform 0.8s ease;
}

</style>