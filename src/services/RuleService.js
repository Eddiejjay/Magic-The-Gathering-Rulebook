/* eslint-disable no-undef */
import axios from 'axios'


const CORSPROXY = process.env.REACT_APP_CORSPROXY
const RULESURL = process.env.REACT_APP_RULESURL
const url = `${CORSPROXY}/${RULESURL}`


export const getAll = async (alternativeUrl) => {
  if (!alternativeUrl) {
    const response = await axios.get(url)
    return response.data }

  else {
    const response = await axios.get(`${CORSPROXY}/${alternativeUrl}`)
    return response.data
  }
}



