<template>
  <div class="background">
    <div class="p-d-flex p-flex-column p-p-5">
      <h1>Projects</h1>
      <span>Type any category then press Enter to filter</span>
      <Chips v-model="chips" @add="updateProjectsList" @remove="updateProjectsList" />
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
              <Button class="p-button-secondary" v-if="project.url_github !== ''">
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              </Button>
              <Button class="p-button-info p-ml-3" v-if="project.url_external !== ''">
                <font-awesome-icon :icon="['fas', 'link']" size="lg" />
              </Button>
            </template>
          </Card>
        </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Projects",
  data() {
    return {
      chips: [],
      projects_filtered: [],
      projects_all: [
        {
          "name": "Personal Website",
          "category": "Web",
          "description": `
          My Personal website is created as a place to share my CV, my projects, and my thoughts through blog.
          Created as a Single-Page Application that allow for seamless client-side experience.
          `,
          "languages": "JavaScript",
          "tools": "VueJS, PrimeVue, Firebase",
          "url_github": "https://github.com/shandygunawan/PersonalWebsite",
          "url_external": "shandywebsite.web.app"
        },
        {
          "name": "Interactive IR",
          "category": "Other",
          "description": `
          Interactive IR simulates how an Information Retrieval (IR) system works. 
          In this app, user can choose configurations on how the IR system works along with the result type (experimental or interactive). 
          Experimental gives a query-by-query performances while interactive gives relevance documents (like a search engine).
          `,
          "languages": "JavaScript, Python",
          "tools": "ReactJS, Bootstrap, Flask",
          "url_github": "https://github.com/shandygunawan/InteractiveIR",
          "url_external": "https://interactive-ir.herokuapp.com/"
        },
        {
          "name": "InventoryStore",
          "category": "Web",
          "description": `
          InventoryStore is a web app to manage a store's inventory and cashflow. 
          It features low stock alert, IGOG charts, stock price history, etc.
          `,
          "languages": "Python",
          "tools": "Bootstrap, Django",
          "url_github": "https://github.com/shandygunawan/InventoryStore",
          "url_external": ""
        },
        {
          "name": "Enhanced Hot Event Detection",
          "category": "Algorithm",
          "description": `
          My undergraduate thesis. 
          Enhanced Hot Event Detection improves the original by adding additional steps to improve the accuracy and effectiveness.
          Added steps: TF-IDF, Semantic Similarity, NER Model, and Event Merging.
          `,
          "languages": "Python",
          "tools": "Pandas, spaCy, YAKE, scikit-learn, NLTK",
          "url_github": "https://github.com/shandygunawan/EnhancedHotEventDetection",
          "url_external": ""
        },
        {
          "name": "Cashtroops",
          "category": "Android",
          "description": `
          CashTroops is projected to be an extension feature of Jenius' already existing mobile app and offers multiple Jenius users' account to be united into one or more groups. 
          Group's abilities including shared account, set incoming events, ease of payments (QR), and transparency. 
          CashTroops is developed with the goal to ease an organization or best friends management of money.
          `,
          "languages": "Java",
          "tools": "Firebase, Glide",
          "url_github": "https://github.com/shandygunawan/Cashtroops",
          "url_external": ""
        },
        {
          "name": "Jabar-Plan-Milestone-2",
          "category": "Web",
          "description": `
          Jabar-Plan-Milestone-2 is the codename for my team's official project with the West Java government.
          The project is a website providing users the ability to add, edit, and track procurement process of all West Java government's programs.
          My contributions in this group project are: Create database's model, Retrieve and parse all data from sources to database, Create APIs for Front End to access database (details, statistics, etc).
          `,
          "languages": "JavaScript",
          "tools": "AdonisJS, MySQL",
          "url_github": "",
          "url_external": ""
        },
      ]
    }
  },
  methods: {
    updateProjectsList(){
      if (this.chips.length === 0) {
        this.projects_filtered = this.projects_all;
      } else {
        this.projects_filtered = this.projects_all.filter((el) => {
          return this.chips.includes(el.category);
        });
      }
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