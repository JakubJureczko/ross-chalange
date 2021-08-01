<template>
  <div id="app">
    <div class="articles">
      <Search
        numberLimit="13"
        @findArticle="findArticle"
        @hideResultArticles="hideResultArticles"
      >
        <template v-if="!isResultHidden" v-slot:articlesSlot>
          <div v-if="articlesResult.length === 0">
            <p>Artykuł o kodzie {{ articlesSearchValue }} nie istnieje</p>
          </div>
          <div v-else>
            <p>Nazwa: {{ articlesResult[0].name }}</p>
            <p>Kod artykułu: {{ articlesResult[0].code }}</p>
            <p>Cena: {{ articlesResult[0].price }}</p>
            <p>Stok: {{ articlesResult[0].stock }}</p>
          </div>
        </template>
      </Search>
    </div>
    <div class="boxes">
      <Search numberLimit="6">
        <template v-slot:boxesSlot> <p>boxes</p> </template>
      </Search>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import articles from "./objects/articles.json";
import boxes from "./objects/boxes.json";

export default {
  name: "App",
  components: {
    Search,
  },
  data() {
    return {
      articlesArray: articles.articles,
      articlesResult: [],
      articlesSearchValue: null,
      boxesArray: boxes.boxes,

      isResultHidden: true,
    };
  },
  methods: {
    findArticle(value) {
      this.articlesResult = this.articlesArray.filter(
        (e) => e.code === parseInt(value)
      );
      this.articlesSearchValue = value;
      this.isResultHidden = false;
    },
    hideResultArticles() {
      this.isResultHidden = true;

      console.log(this.isResultHidden);
    },
  },
};
</script>
