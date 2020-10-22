import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  currentArticle: [
    {
      id :"1",
      title: "Soju the wolf snow"
    },
    {
      id :"2",
      title: "Busy living or get busy dying"
    }
  ]
})

export const mutations = {
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  }
}


