<template>
  <div>
    <input
      type="text"
      v-model="searchValue"
      v-on:keypress="isNumber($event)"
      @keyup.enter="handleClick"
      :maxlength="numberLimit"
    />
    <button @click="handleClick">{{ btn }}</button>
  </div>
</template>

<script>
export default {
  props: ["numberLimit", "which", "btn"],
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
      if (charCode < 48 || charCode > 57) {
        e.preventDefault();
      } else {
        return true && this.$emit("hideArticles") && this.$emit("hideBoxes");
      }
    },
    handleClick() {
      this.$emit("findArticle", this.searchValue, this.which);
      this.$emit("findBoxes", this.searchValue);
    },
  },
};
</script>
