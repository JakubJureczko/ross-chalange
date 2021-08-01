<template>
  <div>
    <input
      type="text"
      v-model="searchValue"
      v-on:keypress="
        isNumber($event);
        hideResult();
      "
      @keyup.enter="handleClick"
      :maxlength="numberLimit"
    />
    <button @click="handleClick">Sprawdź kod</button>
    <!-- <div v-for="article in articlesArray" :key="article.code">
      <p>{{ article.filter((e) => e.code === searchValue) }}</p>

    </div> -->
    <div>
      <slot name="articlesSlot"> </slot>
    </div>
    <div>
      <slot name="boxesSlot"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["numberLimit", "articlesActive"],
  data() {
    return {
      searchValue: "",
      isResultHidden: true,
    };
  },
  methods: {
    isNumber(e) {
      e = e ? e : window.event;
      var charCode = e.which ? e.which : e.keyCode;
      if (charCode < 48 || charCode > 57 || charCode === 8) {
        e.preventDefault();
      } else {
        return true;
      }
    },
    handleClick() {
      this.$emit("findArticle", this.searchValue);
    },
    hideResult() {
      this.$emit("hideResultArticles");
    },
  },

  updated() {
    // if (this.searchValue.length < 10) {
    //   this.searchValue;
    // }
    // const arrayCodes = this.articlesArray.map((e) => e.code);
    // console.log(arrayCodes);
    // console.log(
    //   this.articlesArray.filter((article) => {
    //     return article.code === this.searchValue;
    //   })
    // );
  },
  // computed: {
  //   filteredList() {
  //     return this.articlesArray.filter((article) => {
  //       console.log(article.code.includes(this.searchValue));
  //     });
  //   },
  // },
};
</script>
