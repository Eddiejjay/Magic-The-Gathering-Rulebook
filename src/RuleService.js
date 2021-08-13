import axios from 'axios'

const corsProxy= 'https://young-island-54491.herokuapp.com'
const url = `${corsProxy}/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`
export const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}




