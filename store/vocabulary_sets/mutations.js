import { ADD_DEFAULT_SETS, ADD_PAGE, ADD_VOCAB_SETS, RESET_VOCAB_SETS, SET_DATA, RESET_DEFAULT_SETS } from './mutation-types'
export default {
  /**
   *
   * @param state
   * @param { string } data
   */
  [SET_DATA](state, { data }) {
    state.data = data
  },

  [ADD_VOCAB_SETS](state, sets) {
    state.vocabulary_sets.push(...sets)
  },

  [ADD_PAGE](state){
    ++state.query.page
  },

  [RESET_VOCAB_SETS](state){
    state.vocabulary_sets = []
    state.query.page = 1
  },

  [RESET_DEFAULT_SETS](state) {
    state.default_sets = []
    state.query.page = 1
  },

  [ADD_DEFAULT_SETS](state, sets){
    state.default_sets.push(...sets)
  }
}
