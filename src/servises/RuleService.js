/* eslint-disable no-undef */
import axios from 'axios'

// const CORSPROXY = process.env.REACT_APP_CORSPROXY
// const RULESURL = process.env.REACT_APP_RULESURL
// // const url = `${CORSPROXY}/${RULESURL}`
const url2 = 'https://young-island-54491.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'



export const getAll = async () => {
  const response = await axios.get(url2)
  console.log('url'. url )
  return response.data
}




