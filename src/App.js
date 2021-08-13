import React, { useState, useEffect, useRef } from 'react'
import { getAll } from './RuleService'
import {
  BrowserRouter as Router,
  Link, Switch, Route
} from 'react-router-dom'
import { StyledInput, StyledButton, SearchFieldContainer, ButtonText, FlexParent,
  MainContainer, RulesContainer,InfoText, ContentTable,
  Chapter, Heading, ContentsHeader } from './StyledComponents'
import {  pathMaker } from './Tools'

const  App = () => {
  const [contentsArray, setContentsArray] = useState ([])
  const [rulesArray, setRulesArray] = useState ([])
  const searchValue = useRef('')
  const [searchedRulesArray, setSearchedRulesArray] = useState ([])

  useEffect(() => {
    getAll()
      .then(response => {
        const array = response.split('\n')
        let cArray = array.slice(10,161)
        cArray = cArray.filter(content => content.length > 2)
        cArray = cArray.slice(2,cArray.length)
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
            <ContentsHeader>Contents</ContentsHeader>
            {contentsArray.map(row => <Chapter key = {row + Math.random()}>
              <Link key = {row + Math.random()} onClick = {clearSearch} to = {row[0] + row[1]+ row[2]}>{row}</Link>
            </Chapter>)}
          </ContentTable>
          <Switch>
            {contentsArray.map(chapter => pathMaker(chapter[0]+chapter[1]+chapter[2], searchValue, searchedRulesArray, rulesArray))}
            <Route path= "/" >
              <RulesContainer style = {{ justifyContent: 'center' }}><InfoText > Choose a chapter of rules or search by a keword </InfoText></RulesContainer>
            </Route>
          </Switch>
        </MainContainer>
      </FlexParent>
    </Router>
  )
}

export default App
