<template>
  <div class="section-right">
    <div class="div"></div>
    <h1 contenteditable spellcheck="none">Deniz Sultanoğlu</h1>
    <h3 contenteditable spellcheck="none">Web Developer</h3>
    <div class="baslik">
      <i class="fa fa-briefcase icons" aria-hidden="true"></i>
      <h1>Experience</h1>
    </div>
    <hr style="width: 80%; color: black" />

    <div v-for="ex in experience" :key="ex.id" class="container">
      <div class="col">
        <p contenteditable spellcheck="none" @click="ex.date = ''">
          {{ ex.date }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
      </div>
      <div class="col">
        <p contenteditable spellcheck="none" @click="ex.title = ''">
          {{ ex.title }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.description = ''">
          {{ ex.description }}
        </p>
      </div>
    </div>

    <button style="margin: 5px" class="btn" @click="field('experience')">
      <i class="fa fa-plus" style="color: black" aria-hidden="true"></i>
    </button>

    <div class="baslik">
      <i class="fas fa-school icons" aria-hidden="true"></i>
      <h1>Education</h1>
    </div>
    <hr style="width: 80%; color: black" />

    <div v-for="ex in education" :key="ex.id" class="container">
      <div class="col">
        <p contenteditable spellcheck="none" @click="ex.date = ''">
          {{ ex.date }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
      </div>
      <div class="col">
        <p contenteditable spellcheck="none" @click="ex.title = ''">
          {{ ex.title }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.description = ''">
          {{ ex.description }}
        </p>
      </div>
    </div>

    <button style="margin: 5px" class="btn" @click="field('education')">
      <i class="fa fa-plus" style="color: black" aria-hidden="true"></i>
    </button>

    <div class="baslik">
      <i class="fas fa-pen-alt icons" aria-hidden="true"></i>
      <h1>References</h1>
    </div>
    <hr style="width: 80%; color: black" />

    <div v-for="ex in references" :key="ex.id" class="container">
      <div class="col">
        <p contenteditable spellcheck="none" @click="ex.date = ''">
          {{ ex.date }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
      </div>
      <div class="col">
        <p contenteditable spellcheck="none" @click="ex.date = ''">
          {{ ex.date }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
      </div>
    </div>

    <b-alert
      v-model="showBottom"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000"
      variant="warning"
      dismissible
    >
      En fazla 4 özellik ekleyebilirsiniz.
    </b-alert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBottom: false,
      experience: [
        {
          title: "Çalıştığınız pozisyonu giriniz",
          company: "Şirket adını giriniz",
          description: "Açıklama giriniz",
          date: "İşe başlama ve bitiş tarihizi giriniz",
        },
      ],
      education: [
        {
          title: "Çalıştığınız pozisyonu giriniz",
          company: "Şirket adını giriniz",
          description: "Açıklama giriniz",
          date: "İşe başlama ve bitiş tarihizi giriniz",
        },
      ],
      references: [
        {
          name: "Çalıştığınız pozisyonu giriniz",
          company: "Şirket adını giriniz",
          description: "Açıklama giriniz",
          date: "İşe başlama ve bitiş tarihizi giriniz",
        },
      ],
    };
  },

  methods: {
    field(data) {
      if (data === "experience") {
        if (this.experience.length > 2) {
          this.showBottom = true;
        } else {
          this.experience.push({
            title: this.experience[0].title,
            company: this.experience[0].company,
            description: this.experience[0].description,
            date: this.experience[0].date,
          });
        }
      } else {
        if (this.education.length > 2) {
          this.showBottom = true;
        } else {
          this.education.push({
            title: this.education[0].title,
            company: this.education[0].company,
            description: this.education[0].description,
            date: this.education[0].date,
          });
        }
      }
    },
  },
};
</script>

