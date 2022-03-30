import {
  SET_DATA,
  SET_STATUSES,
  SET_STATION_AREA,
  SET_GROUP,
  SET_DETAIL_STATION_AREA,
  RESET_DETAIL_STATION_AREA,
} from './mutation-types'
import axios from 'axios'

/**
 *
 * @param { function } commit
 * @param { string } data
 */
export function setData({ commit }, { data }) {
  commit(SET_DATA, { data })
}

export function resetDetailStationAreas({ commit }, params) {
  commit(RESET_DETAIL_STATION_AREA)
}

export function getStationAreas({ commit }, params) {
  return axios
    .get('/areas')
    .then((response) => {
      if (response.data.data.length) {
        commit(SET_STATION_AREA, response.data.data)
      }
    })
    .catch((err) => console.log(err))
}

export function getDetailStationAreas({ commit }, params) {
  return axios
    .get('/detail_areas', { params })
    .then((response) => {
      if (response.data.data.length) {
        commit(SET_DETAIL_STATION_AREA, response.data.data)
      }
    })
    .catch((err) => console.log(err))
}

export function getGroups({ commit }, params) {
  return axios
    .get('/groups')
    .then((response) => {
      if (response.data.data.length) {
        commit(SET_GROUP, response.data.data)
      }
    })
    .catch((err) => console.log(err))
}

export function getStatuses({ commit }, params) {
  return axios
    .get('/statuses')
    .then((response) => {
      if (response.data.data.length) {
        commit(SET_STATUSES, response.data.data)
      }
    })
    .catch((err) => console.log(err))
}
