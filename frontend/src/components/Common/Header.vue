<template>
  <div>
    <v-app-bar
      absolute
      color="#98B8DA"
      elevate-on-scroll
      height="56px"
      dense>
      <v-app-bar-nav-icon @click="onDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>COOL PLACE</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list
        nav
        dense>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4">
          <v-list-item @click="goMain">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="showDescription">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>How to use</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Description v-show="this.$store.state.common.showDescription" />
  </div>
</template>

<script>
import Description from '@/components/Common/Description.vue';

export default {
  name: 'Header',
  components: {
    Description,
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    onDrawer() {
      this.drawer = true;
    },
    goMain() {
      this.$router.push('/');
    },
    showDescription() {
      this.drawer = false;
      this.$store.commit('toggleShowDescription', true);
    }
  }
}
</script>

<style scoped>

</style>