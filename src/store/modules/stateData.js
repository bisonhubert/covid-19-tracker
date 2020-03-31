import * as types from '@/store/mutation-types'
import api from '@/services/api/stateData'
import { buildSuccess, handleError } from '@/utils/utils.js'

const getters = {
  states: state => state.states,
  totalStates: state => state.totalStates
}

const actions = {
  getStatesHistorical({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .getStatesHistorical(payload)
        .then(response => {
          if (response.status === 200) {
            commit(types.STATES, response.data)
            commit(types.TOTAL_STATES, response.data.length)
            resolve()
          }
        })
        .catch(error => {
          handleError(error, commit, reject)
        })
    })
  }
}

const mutations = {
  [types.STATES](state, states) {
    console.log('state.states = states', states)
    state.states = states
  },
  [types.TOTAL_STATES](state, count) {
    state.totalStates = count
  }
}

const state = {
  states: [],
  totalStates: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
