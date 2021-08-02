<template>
  <div class="search">
    <input
      placeholder="wpisz kod"
      class="input"
      type="text"
      v-model="searchValue"
      v-on:keypress="isNumber($event)"
      @keyup.enter="handleClick"
      :maxlength="numberLimit"
    />
    <button class="btn" @click="handleClick">{{ btn }}</button>
  </div>
</template>

<script>
export default {
  props: ["numberLimit", "which", "btn"],
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    isNumber(e) {
      e = e ? e : window.event;
      var charCode = e.which ? e.which : e.keyCode;
      if (charCode < 48 || charCode > 57) {
        e.preventDefault();
      } else {
        return true && this.$emit("hideResult", this.which);
      }
    },
    handleClick() {
      this.$emit("findResult", { value: this.searchValue, which: this.which });
    },
  },
};
</script>
