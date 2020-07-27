<template>
  <div>
    <SearchKeyword />
    <router-view />
  </div>
</template>

<script>
import SearchKeyword from '@/components/Map/SearchKeyword.vue';

export default {
  components: {
    SearchKeyword
  }
}
</script>