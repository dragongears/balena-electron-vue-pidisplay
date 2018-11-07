const state = {
  weather: {}
}

const mutations = {
  UPDATE_WEATHER (state, payload) {
    state.weather = payload
  }
}

const actions = {
  updateWeather ({ commit }) {
    // do something async
    commit('UPDATE_WEATHER')
  }
}

export default {
  state,
  mutations,
  actions
}
