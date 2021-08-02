<template>
  <div class="section-right">
    <div class="div"></div>
    <h1 contenteditable spellcheck="none">Deniz Sultanoğlu</h1>
    <h3 contenteditable spellcheck="none">Web Developer</h3>
    <div class="baslik">
      <i class="fa fa-briefcase icons" aria-hidden="true"></i>
      <h1>Experience</h1>
    </div>
    <hr style="width: 80%; general-column or: black" />

    <div v-for="ex in experience" :key="ex.id" class="genel-content ">
      <div class="general-column ">
        <p
          v-text="ex.date"
          contenteditable
          spellcheck="none"
          @click="ex.date = ''"
        ></p>
        <p
          v-text="ex.company"
          contenteditable
          spellcheck="none"
          @click="ex.company = ''"
        ></p>
      </div>
      <div class="general-column ">
        <p
          v-text="ex.title"
          contenteditable
          spellcheck="none"
          @click="ex.title = ''"
        ></p>
        <p
          v-text="ex.description"
          contenteditable
          spellcheck="none"
          @click="ex.description = ''"
        ></p>
      </div>
    </div>

    <button style="margin: 5px" class="btn" @click="field('experience')">
      <i class="fa fa-plus" style="general-column or: black" aria-hidden="true"></i>
    </button>

    <div class="baslik">
      <i class="fas fa-school icons" aria-hidden="true"></i>
      <h1>Education</h1>
    </div>
    <hr style="width: 80%; general-column or: black" />

    <div v-for="ex in education" :key="ex.id" class="genel-content ">
      <div class="general-column ">
        <p
          v-text="ex.date"
          contenteditable
          spellcheck="none"
          @click="ex.date = ''"
        ></p>
        <p
          v-text="ex.company"
          contenteditable
          spellcheck="none"
          @click="ex.company = ''"
        ></p>
      </div>
      <div class="general-column ">
        <p
          v-text="ex.title"
          contenteditable
          spellcheck="none"
          @click="ex.title = ''"
        ></p>
        <p
          v-text="ex.description"
          contenteditable
          spellcheck="none"
          @click="ex.description = ''"
        ></p>
      </div>
    </div>

    <button style="margin: 5px" class="btn" @click="field('education')">
      <i class="fa fa-plus" style="general-column or: black" aria-hidden="true"></i>
    </button>

    <div class="baslik">
      <i class="fas fa-pen-alt icons" aria-hidden="true"></i>
      <h1>References</h1>
    </div>
    <hr style="width: 80%; general-column or: black" />

    <div v-for="ex in references" :key="ex.id" class="genel-content ">
      <div class="general-column ">
        <p v-text="ex.date" contenteditable spellcheck="none" @click="ex.date = ''">
       
        </p>
        <p v-text="ex.company" contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p v-text="ex.company" contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p v-text="ex.company" contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
      </div>
      <div class="general-column ">
        <p v-text="ex.date" contenteditable spellcheck="none" @click="ex.date = ''">
          {{ ex.date }}
        </p>
        <p v-text="ex.company" contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p v-text="ex.company" contenteditable spellcheck="none" @click="ex.company = ''">
          {{ ex.company }}
        </p>
        <p v-text="ex.company" contenteditable spellcheck="none" @click="ex.company = ''">
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
    look() {
      console.log(this.education);
    },

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

