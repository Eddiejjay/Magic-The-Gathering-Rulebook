import { StyledInput, StyledButton, SearchFieldContainer, ButtonText,
} from '../artsy/StyledComponents'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchForm = ({ setSearchedRulesArray, rulesArray, setSearchValue }) => {
  const history = useHistory()
  const [inputText, setInputText] = useState ('')

  const searchClicked = () => {
    setSearchValue(inputText)
    let searchedRules = rulesArray.filter(rule => rule.toLowerCase().includes(inputText.toLowerCase().trim()))
    setSearchedRulesArray(searchedRules)
    setInputText('')
    history.push(`/search/${inputText}`)
  }

  const handleKeypress = event => {
    if (event.key === 'Enter') {
      searchClicked()
    }
  }

  return (
    <SearchFieldContainer>
      <StyledInput  value = {inputText} onKeyPress={handleKeypress} onChange = {(event) => setInputText(event.target.value)}></StyledInput>
      <StyledButton onClick ={searchClicked}><ButtonText>Search</ButtonText></StyledButton>
    </SearchFieldContainer>

  )
}

export default SearchForm