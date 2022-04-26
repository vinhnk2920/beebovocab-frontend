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

export function getDefaultTopics({ commit, state }, params) {
  return axios.get(`/topics`, { params })
}

export function getSet({ commit, state }, id) {
  return axios.get(`/vocabulary_sets/` + id)
}

export function findSetByTopic({ commit, state }, {id, page}) {
  return axios.get(`/vocabulary_sets/findByTopicId/` + id + '?page=' + page)
}

export function createVocabSet({ commit, state }, params) {
  return axios.post(`/vocabulary_sets/create`, params)
}

export function updateVocabSet({ commit, state }, params) {
  return axios.post(`/vocabulary_sets/update`, params)
}

export function deleteVocabSet({ commit, state }, params) {
  return axios.post(`/vocabulary_sets/delete`, params)
}

export function deleteVocab({ commit, state }, params) {
  return axios.post(`/vocabs/delete`, params)
}

export function updateVocab({ commit, state }, params) {
  return axios.post(`/vocabs/update`, params)
}

export function createVocabularies({ commit, state }, params) {
  return axios.post(`/vocabs/create`, params)
}

export function showVocabularies({ commit, state }, id) {
  return axios.get(`/vocabs/` + id)
}
