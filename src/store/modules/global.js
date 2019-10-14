import axios from 'axios'

const global = {
  state: {
    data: null
  },

  mutations: {
    setData: (state, data) => state.data = data.filter(item => item.id <= 19)
  },

  actions: {
    load ({ commit }) {
      return new Promise((resolve) => axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {
          commit('setData', data)
          resolve()
        })
      )
    }
  },
  
  getters: {
    data: state => state.data
  }
}

export default global