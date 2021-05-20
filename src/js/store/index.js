import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cardData: null,
  },
  mutations: {
    SET_CARD_DATA(state, val) {
      state.cardData = val
    },
  },
  actions: {
    async UPDATE_DATA(context) {
      await new Promise((resolve, reject) => {
        axios.get('json/test.json')
          .then((res) => {
            context.commit('SET_CARD_DATA', res.data.orders)
            console.log(res.data.orders)
            resolve(true)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})

export default store
