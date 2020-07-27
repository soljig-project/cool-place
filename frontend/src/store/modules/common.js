const state = {
  showDescription: false
}

const mutations = {
  toggleShowDescription(state, value) {
    state.showDescription = value;
  }
}

export default {
  state,
  mutations
}