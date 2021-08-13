import axios from 'axios'

// const baseUrl ='http:/localhost:3003/api/players'
// Alemmalla toimii

// const heroku = 'https://cors-anywhere.herokuapp.com'
// const url = `${heroku}/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`
const origUrl ='https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'

export const getAll = async () => {
  const response = await axios.get(origUrl)
  console.log('perse')
  console.log(typeof(response.data))
  // console.log(response.data)
   return response.data
}




