/* eslint-disable no-undef */
import axios from 'axios'

const CORSPROXY = process.env.REACT_APP_CORSPROXY
const RULESURL = process.env.REACT_APP_RULESURL
const url = `${CORSPROXY}/${RULESURL}`

export const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}




