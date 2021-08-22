import { StyledInput, StyledButton, SearchFieldContainer, InfoText
} from '../artsy/StyledComponents'
import React, { useState } from 'react'

const UrlForm = ({ setAlternativeUrl }) => {

  const [inputText, setInputText] = useState ('')
  const [show, setShow] = useState (false)

  const loadFile = () => {
    setAlternativeUrl(inputText)
    setShow(!show)
  }

  const handleKeypress = event => {
    if (event.key === 'Enter') {
      loadFile()
    }
  }

  const changeShowStatus = () => {
    setShow(!show)
  }

  return (
    <SearchFieldContainer>
      <StyledButton onClick = {changeShowStatus}>{!show && <InfoText>Use another rulefile</InfoText>}{show&&<InfoText>Back</InfoText>}</StyledButton>
      {show && <StyledInput placeholder='Type url here...' value = {inputText} onKeyPress={handleKeypress} onChange = {(event) => setInputText(event.target.value)}></StyledInput>}
      {show && <StyledButton onClick ={loadFile}><InfoText>Load</InfoText></StyledButton>}
    </SearchFieldContainer>

  )
}

export default UrlForm