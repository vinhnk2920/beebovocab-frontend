import axios from 'axios'

/**
 *
 * @param { function } commit
 * @param params
 * @param { string } data
 */

export function getVocabSets({ commit, state }, params) {
  return axios.get(`/vocabulary_sets`, { params })
}

export function getDefaultSets({ commit, state }, params) {
  return axios.get(`/vocabulary_sets/default`, { params })
}

export function createVocabSet({ commit, state }, params) {
  return axios.post(`/vocabulary_sets/create`, params)
}
