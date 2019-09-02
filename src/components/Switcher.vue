<template>
   <v-app>
     <v-container>
      <v-icon  @click="show=!show">mdi-translate</v-icon>
  <ul v-show="show">
      <li v-for="lang in languages" :key="lang" @click="changeLang(lang)">{{lang}}</li>
  </ul>
     </v-container>
   </v-app>
</template>

<script>
export default {
  name: "Switcher",
  data: () => ({show:false,
   languages: ["sv", "en"] }),
  methods: {
   
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>