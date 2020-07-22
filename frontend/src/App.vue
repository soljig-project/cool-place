<template>
  <div id="app">
    <!-- Header -->
    <Header></Header>
    <!-- Main Contents -->
    <section>
      <router-view id="page-view" />
    </section>
    <!-- Footer -->
    <Footer></Footer>
    <transition name="fade">
      <div class="scorllTopBtn" v-if="fab" @click="goTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Common/Header.vue';
import Footer from '@/components/Common/Footer.vue';
import '@/assets/css/default.css';

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
.scorllTopBtn {
  position: fixed;
  right: 20px;
  bottom: 14px;
  padding: 16px 18px;
  border-radius: 50%;
  background-color: darkgray;
  font-size: 19px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
}

.scorllTopBtn:hover {
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