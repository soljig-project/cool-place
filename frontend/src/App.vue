<template>
  <v-app>
    <Header v-if="this.$route.path !== '/'"></Header>
    <section :class="this.$route.path === '/' ? '' : 'header-area'">
      <router-view id="page-view" />
    </section>
    <transition name="fade">
      <div class="scorll-top-button" v-if="fab" @click="goTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </transition>
  </v-app>
</template>

<script>
import Header from '@/components/Common/Header.vue';
import '@/assets/css/default.css';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      fab: false
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      let scrollHegiht = document.scrollingElement.scrollTop;
      this.fab = scrollHegiht >= 180;
    })
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    }
  },
}
</script>

<style scoped>
.header-area {
  margin-top: 56px;
}

.scorll-top-button {
  position: fixed;
  right: 20px;
  bottom: 14px;
  padding: 16px 18px;
  border-radius: 50%;
  background-color: darkgray;
  font-size: 19px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
}

.scorll-top-button:hover {
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>