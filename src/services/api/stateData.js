import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://covidtracking.com/api',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStatesHistorical() {
    console.log('getStatesHistorical calling apiClient')
    return apiClient.get('/states/daily')
  }
}
