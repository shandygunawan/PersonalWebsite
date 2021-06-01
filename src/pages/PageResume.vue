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
        <span>{{slotProps.item.date}}</span>
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
            <div class="text-content p-text-left">
              {{slotProps.item.description}}
            </div>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>

  <!-- Skills -->
  <div class="bg-fullscreen bg-color-light-green p-d-flex p-flex-column p-ai-center">
    <span class="text-section-title p-my-4">Skills</span>
    <div class="p-grid p-mb-4" style="width: 100%">
      <div class="p-col-12">
        <skill-panel
          legend="Preferred Language"
          animation="zoom-in"
          :skills="skills_language"
        />
      </div>
      <div class="p-col-12">
        <skill-panel
          legend="Backend"
          animation="zoom-in"
          :skills="skills_backend"
        />
      </div>
      <div class="p-col-12">
        <skill-panel
          legend="Frontend"
          animation="zoom-in"
          :skills="skills_frontend"
        />
      </div>
      <div class="p-col-12">
        <skill-panel
          legend="Database"
          animation="zoom-in"
          :skills="skills_database"
        />
      </div>
    </div>
  </div>

  <!-- Awards -->
  <div class="bg-fullscreen bg-color-light-yellow p-d-flex p-flex-column p-ai-center">
    <span class="text-section-title p-my-5">Awards</span>
    <Carousel 
      class="carousel-sizing"
      :value="awards" 
      :numVisible="1" 
      :numScroll="1"
      data-aos="flip-left"
      >
      <template #item="slotProps">
        <Card>
          <template #header>
            <img :src="slotProps.data.image" style="wid: 15rem;">
          </template>
          <template #title>
            {{slotProps.data.title}}
          </template>
          <template #subtitle>
            {{slotProps.data.date}}
          </template>
          <template #content>
            {{slotProps.data.description}}
          </template>
        </Card>
      </template>
    </Carousel>
  </div>

</template>

<script>
import image_avatar from '../assets/images/avatar.jpg';
import SkillPanel from '../components/SkillPanel.vue';

export default {
  components: {
    SkillPanel
  },
  data() {
    return {
      avatar_image: image_avatar,
      avatar_alt: "Shandy",
      experiences: [
        {
          company: "Institut Teknologi Bandung",
          role: "Computer Science Student",
          date: "Aug 2016 - Apr 2021",
          description: `Learn a lot of Computer Science fundamentals, 
such as Algorithm and Data Structures, Object-Oriented Programming, Software Engineering, etc.`
        },
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
- Building code with Jenkins,
- Developing pipeline scripts,
- Delivering code to UAT stage.
          `
        }
      ],
      awards: [
        {
          image: require("../assets/images/awards_jenius.jpg"),
          alt: "Jenius Hackathon 2019 - National Top 7",
          date: "Feb 2019",
          title: "Jenius Hackathon 2019 - National Top 7",
          description: `Developed a group banking product called CashTroops.
CashTroops is projected to be an extension feature of Jenius' already existing mobile app and offers multiple Jenius users' account to be united into one or more groups.
Group's abilities including shared account, set incoming events, ease of payments (QR), and transparency. CashTroops is developed with the goal to ease an organization or best friends management of money.
          `
        },
        {
          image: require("../assets/images/awards_telestra.jpg"),
          alt: "Telestra IoT Cloud Computing Competition - 1st Place",
          date: "Nov 2018",
          title: "Telestra IoT Cloud Computing Competition - 1st Place",
          description: `Developed an IoT heartbeat detector called HerB.
HerB is developed with the goal to improve people's awareness of their heart condition and start to live their life healthier. HerB is created using NodeMCU as the detector, Android as the mobile application, and Firebase as the real time database.
          `
        }
      ],
      skills_language: [
        {
          "name": "Python",
          "image": require("../assets/images/logo_python.svg")
        },
        {
          "name": "Kotlin",
          "image": require("../assets/images/logo_kotlin.svg")
        },
        {
          "name": "JavaScript",
          "image": require("../assets/images/logo_javascript.svg")
        },
        {
          "name": "Java",
          "image": require("../assets/images/logo_java.svg")
        },

      ],
      skills_backend: [
        {
          "name": "Django",
          "image": require("../assets/images/logo_django.svg")
        },
        {
          "name": "Flask",
          "image": require("../assets/images/logo_flask.svg")
        },
        {
          "name": "AdonisJS",
          "image": require("../assets/images/logo_adonis.svg")
        },
        {
          "name": "Rails",
          "image": require("../assets/images/logo_rails.svg")
        },
      ],
      skills_frontend: [
        {
          "name": "Bootstrap",
          "image": require("../assets/images/logo_bootstrap.svg")
        },
        {
          "name": "Materialize",
          "image": require("../assets/images/logo_materialize.svg")
        },
        {
          "name": "VueJS",
          "image": require("../assets/images/logo_vue.svg")
        },
      ],
      skills_database: [
        {
          "name": "PostgreSQL",
          "image": require("../assets/images/logo_postgresql.svg")
        },
        {
          "name": "SQLite",
          "image": require("../assets/images/logo_sqlite.svg")
        },
        {
          "name": "MongoDB",
          "image": require("../assets/images/logo_mongodb.svg")
        }
      ],
      galleriaResponsiveOptions: [
				{
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '960px',
          numVisible: 4
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
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

.bg-color-light-green {
  background-color: #C9FFB1;
}

.bg-color-light-yellow {
  background-color: #FCFD95;
}

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
  color:var(--blue-300);
}

.text-section-subtitle {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:var(--blue-400);
}

.text-section-content {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.text-content {
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

/* WEB */
@media only screen and (min-width: 800px) {
  .carousel-sizing {
    width: 70%;
  }
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

  .text-content {
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