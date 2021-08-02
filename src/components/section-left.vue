<template>
  <div class="section-left">
    <img @click="$refs.upload.click()" class="img" :src="src" alt="" />
    
    <div class="image-fill">
      <i class="fas fa-camera" style="background: transparent"> </i> Resim
      Seçiniz
    </div>


    <input
      ref="upload"
      @change="upload"
      type="file"
      style="display: none"
      accept="image/png, image/gif, image/jpeg"
    />

    <h1>Contact Me</h1>
    <hr style="width: 50%" />

    <ul class="ul-responsive">
      <li v-for="contact in contact" :key="contact.id" class="liste">
        <div class="div">
          <i :class="contact.icon"></i>
          <div class="adres" contenteditable spellcheck="none">
            {{ contact.title }}
          </div>
        </div>
      </li>
    </ul>

    <h1>Pro Skills</h1>
    <hr style="width: 50%" />
    <ul class="ul-responsive">
      <li class="liste" v-for="field in fields" :key="field.id">
        <label v-show="show === false">
          {{ field.title }}
        </label>

        <div class="div" v-show="show === false">
          <div class="ozellik" @click="giris">
            <b-progress>
              <b-progress-bar
                variant="light"
                :value="field.value"
              ></b-progress-bar>
            </b-progress>
          </div>
        </div>

        <div class="div" v-show="show == true">
          <input
            for="adres"
            v-model="field.title"
            v-on:blur="show = false"
            @keyup.enter="show = false"
          />
          <b-form-spinbutton
            class="textbox"
            style="background: grey !important"
            v-model="field.value"
            min="0"
            v-on:blur="show = false"
            @keyup.enter="show = false"
            max="100"
            step="10"
          ></b-form-spinbutton>
        </div>
      </li>

      <button class="btn" @click="field">
        <i class="fa fa-plus" style="color: white" aria-hidden="true"></i>
      </button>
    </ul>

    <h1>Follow Me</h1>
    <hr style="width: 50%" />
    <ul class="ul-responsive">
      <li v-for="contact in social" :key="contact.id" class="liste">
        <div class="div">
          <i :class="contact.icon"></i>
          <div class="adres" contenteditable spellcheck="none">
            {{ contact.title }}
          </div>
        </div>
      </li>
    </ul>
    <b-alert
      v-model="showBottom"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000; background: #fff3cd !important"
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
      image: null,

      fields: [
        {
          title: "Özellik",
          value: 50,
        },
      ],
      showBottom: false,
      show: false,
      src: "https://kstu.edu.tr/kstu-file/uploads/default-user-image.png",
      contact: {
        adres: {
          icon: "fas fa-map-marker-alt  icons",
          title:
            "Kazımdirik, 161. Sk., No: 11, Kat: 3, Daire: 301 - Bornova (Ergene Mah.) Şok marketin Üstü",
        },
        telefon: {
          icon: "fa fa-phone  icons",
          title: "05355141450",
        },
        web: {
          icon: "fa fa-globe  icons",
          title: "www.google.com",
        },
      },

      social: {
        facebook: {
          icon: "fab fa-facebook-f  icons",
          title: "www.facebook.com",
        },

        twitter: {
          icon: "fab fa-twitter  icons",
          title: "www.twitter.com",
        },
        linkedin: {
          icon: "fab fa-linkedin  icons",
          title: "www.linkedin.com",
        },
        github: {
          icon: "fab fa-github  icons",
          title: "www.github.com",
        },
      },
    };
  },
  methods: {
    field() {
      if (this.fields.length > 3) {
        this.showBottom = true;
      } else {
        this.fields.push({ title: "Özellik", value: "" });
      }
    },

    giris(e) {
      console.log(e);
      this.show = true;
    },

    upload(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.src = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>