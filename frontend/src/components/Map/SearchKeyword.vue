<template>
  <v-form class="search-form" @submit.prevent="searchKeyword">
    <v-text-field
      class="search-form-keyword"
      color="#8ABCF0"
      v-model="keyword"
      placeholder="키워드를 입력해주세요."
    ></v-text-field>
    <v-btn color="#8ABCF0">검색</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchKeyword() {
      if (!this.keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요.');
        return;
      }
      console.log(this.keyword);
    }
  }
}
</script>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
}

.search-form-keyword {
  margin-right: 0.75rem;
}
</style>