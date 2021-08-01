<template>
  <div id="app">
    <div class="articles">
      <Search
        numberLimit="13"
        which="articles"
        btn="Sprawdź kod"
        @findResult="findResult"
        @hideResult="hideResult"
      >
      </Search>
      <div
        :class="[
          !isResultHidden ? 'articles__result' : 'articles__result hidden',
        ]"
        v-if="!isResultHidden"
      >
        <div v-if="articlesResult.length === 0">
          <p>Artykuł o kodzie {{ articlesSearchValue }} nie istnieje</p>
        </div>
        <div v-else>
          <p>Nazwa: {{ articlesResult[0].name }}</p>
          <p>Kod artykułu: {{ articlesResult[0].code }}</p>
          <p>Cena: {{ articlesResult[0].price }}</p>
          <p>Stok: {{ articlesResult[0].stock }}</p>
        </div>
      </div>
    </div>
    <div class="boxes">
      <Search
        numberLimit="6"
        btn="Sprawdź i dodaj"
        which="boxes"
        @findResult="findResult"
        @hideResult="hideResult"
      >
        <template v-slot:boxesSlot> <p>boxes</p> </template>
      </Search>
      <div
        :class="[!isResultHidden ? 'boxes__result' : 'boxes__result hidden']"
        v-if="!isResultHiddenBoxes"
      >
        <div v-if="boxesResult.length === 0">
          <p>
            Pojemnik o kodzie {{ boxesSearchValue }} nie istnieje lub jest
            nieaktywny
          </p>
        </div>
      </div>
      <div class="boxes__list">
        <div v-for="box in boxesUserArray" :key="box.BoxCode">
          <div>
            <p>{{ box.BoxCode }}</p>
            <button @click="deleteBox(box)">delete</button>
          </div>

          <!-- <p>Kod pojemnika: {{ boxesResult[0].BoxCode }}</p>
          <p>Szerokość: {{ boxesResult[0].Width }}</p>
          <p>Wysokość: {{ boxesResult[0].Height }}</p>
          <p>Głębokość: {{ boxesResult[0].Depth }}</p> -->
        </div>
      </div>
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
      boxesResult: [],
      boxesSearchValue: null,
      boxesUserArray: [],

      isResultHidden: true,
      isResultHiddenBoxes: true,
    };
  },
  methods: {
    findResult(value) {
      if (value.which === "articles") {
        this.articlesResult = this.articlesArray.filter(
          (e) => e.code === parseInt(value.value)
        );
        this.articlesSearchValue = value.value;
        this.isResultHidden = false;
      } else if (value.which === "boxes") {
        this.boxesResult = this.boxesArray.filter(
          (e) => e.BoxCode === value.value
        );
        this.boxesSearchValue = value.value;
        this.isResultHiddenBoxes = false;
        if (
          this.boxesResult.length !== 0 &&
          !this.boxesUserArray.includes(this.boxesResult[0])
        ) {
          this.boxesUserArray.push(this.boxesResult[0]);
        }
      }
    },
    hideResult(value) {
      if (value === "articles") {
        this.isResultHidden = true;
      } else if (value === "boxes") this.isResultHiddenBoxes = true;
    },
    deleteBox(box) {
      this.boxesUserArray = this.boxesUserArray.filter((item) => {
        return box !== item;
      });
    },
  },
};
</script>
