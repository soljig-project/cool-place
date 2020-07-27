<template>
  <v-dialog v-model="showDescription" persistent>
    <v-card>
      <v-card-title class="description-title">
        <h2>Description</h2>
        <v-btn color="primary" small @click="closeDescription">CLOSE</v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pt-5">
        설명
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" small @click="closeDescription">CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Description',
  computed: {
    ...mapState({
      showDescription: state => state.common.showDescription
    })
  },
  methods: {
    closeDescription() {
      this.$store.commit('toggleShowDescription', false);
    }
  }
}
</script>

<style scoped>
.description-title {
  display: flex;
  justify-content: space-between;
}
</style>