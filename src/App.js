
import React, { useState, useEffect, useRef } from 'react';
import { getAll } from './RuleService'
import {
  BrowserRouter as Router,
 Link, Switch, Route
} from "react-router-dom"
// import background from './images/pexels-greg-2418664.jpg'
import { StyledInput, StyledButton, SearchFieldContainer, ButtonText, FlexParent,
   MainContainer, RulesContainer, SearchText, InfoText, ContentTable, Rule,
    Chapter, Heading,  } from './StyledComponents';



const  App = () => {
  // const [txtArray, setTxtArray] = useState ([])
  const [contentsArray, setContentsArray] = useState ([])
  const [rulesArray, setRulesArray] = useState ([])
  const searchValue = useRef('')
  const [searchedRulesArray, setSearchedRulesArray] = useState ([])

  useEffect(() => {  
  getAll()
  .then(response => {
    const array = response.split("\n")
    const cArray = array.slice(10,161)
    setContentsArray(cArray)
    const rulArray = array.slice(169,5757)
    setRulesArray(rulArray)
    
    
  })
}, [])

  
const searchClicked = (event) => {
  event.preventDefault()
  console.log('searchValue ', searchValue)
  let searchedRules = rulesArray.filter(rule => rule.includes(searchValue.current))
  console.log('Searcherd rules', searchedRules)
  setSearchedRulesArray(searchedRules)

}

const clearSearch = () => {
setSearchedRulesArray([])
searchValue.current = ''
document.getElementById('searchInput').value=''

}

const ruleParser = (chapter) => {
let chapArray = []
for (let i = 0; i < rulesArray.length ; i++) {
   let alkio = rulesArray[i]
   let alkion3ekaa = alkio[0] + alkio[1] + alkio[2]
  if (alkion3ekaa === chapter) {
     chapArray.push(rulesArray[i])
  }
}

return chapArray
}

  const pathMaker = (chapter) => {
if(searchValue.current !== '') {
  return (
  <RulesContainer><SearchText>Search result for {searchValue.current}</SearchText> {searchedRulesArray.map(rule => <Rule key = {rule}> {rule}</Rule>)}</RulesContainer>)
  
}else{
    return (
      <Route path= {"/" + chapter}>
      <RulesContainer>{ruleParser(chapter).map(rule => <Rule key = {rule}> {rule}</Rule>)} </RulesContainer>
      </Route>
    )
  }
}

  return (
    <Router>
    <FlexParent>
      <Heading>Magic: The Gathering Rulebook</Heading> 
      <SearchFieldContainer>
      <StyledInput id = 'searchInput' name = 'searchInput' onChange = {(event) => searchValue.current = (event.target.value)}></StyledInput>
      <StyledButton onClick ={searchClicked}><ButtonText>Search</ButtonText></StyledButton>
      </SearchFieldContainer>
      <MainContainer>
        <ContentTable>
          <ul>
        {contentsArray.map(row => <Chapter key = {row + Math.random() }>
          
          <Link onClick = {clearSearch} key = {row + Math.random()} to = {row[0] + row[1]+ row[2]}>{row}</Link>
          </Chapter>)}
        </ul>
        </ContentTable>
        <Switch>
        {contentsArray.map(chapter => pathMaker(chapter[0]+chapter[1]+chapter[2]))}
            <Route path= "/" >
        <RulesContainer style={{"justify-content": "center"}}><InfoText > Choose a chapter of rules or search by a keword </InfoText></RulesContainer>
      </Route>
      </Switch>
      
      </MainContainer>
    </FlexParent>
  
  
    </Router>
  )
}

export default App;
