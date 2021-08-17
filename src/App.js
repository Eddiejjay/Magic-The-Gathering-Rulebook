// eslint-disable-next-line no-undef
import React, { useState, useEffect, useRef } from 'react'
import { getAll } from './RuleService'
import {
  BrowserRouter as Router,
  Link, Switch, Route
} from 'react-router-dom'
import { StyledInput, StyledButton, SearchFieldContainer, ButtonText, FlexParent,
  MainContainer, RulesContainer,InfoText, ContentTable,
  Chapter, Heading, ContentsHeader } from './StyledComponents'
import {  routeMaker, matchExtractor } from './Tools'

const  App = () => {
  const [contentsArray, setContentsArray] = useState ([])
  const [rulesArray, setRulesArray] = useState ([])
  const searchValue = useRef('')
  const [searchedRulesArray, setSearchedRulesArray] = useState ([])
  const [ruleNumbers, setRuleNumbers] = useState ([])
  // const [ruleNumberRoutes, setRuleNumberRoutes] = useState ([])

  useEffect(() => {
    getAll()
      .then(response => {
        const array = response.split('\n')
        const cArray = array.slice(10,161)
          .filter(content => content.length > 2)
          .slice(2,151)
        setContentsArray(cArray)
        const rulArray = array.slice(169,5757)
        setRulesArray(rulArray)
        const matchArray = rulArray.map( rule => matchExtractor(rule)[1])
          .filter(match => match !== undefined)
        setRuleNumbers(matchArray)
        ruleNumbers
        // let ruleNRoutes = []
        // ruleNumbers.map(number => ruleNRoutes.push(ruleNumberRouteMaker(number, rulesArray)))
        // setRuleNumberRoutes(ruleNRoutes)
      })

  }, [])


  const searchClicked = () => {
    let searchedRules = rulesArray.filter(rule => rule.toLowerCase().includes(searchValue.current.toLowerCase().trim()))
    setSearchedRulesArray(searchedRules)
    document.getElementById('searchInput').value=''
  }

  const clearSearch = () => {
    setSearchedRulesArray([])
    searchValue.current = ''
    document.getElementById('searchInput').value=''

  }

  const handleKeypress = event => {

    if (event.key === 'Enter') {
      searchClicked()
    }
  }

  return (
    <Router>
      <FlexParent>
        <Heading>Magic: The Gathering Rulebook</Heading>
        <SearchFieldContainer>
          <StyledInput onKeyPress={handleKeypress} id = 'searchInput' name = 'searchInput' onChange = {(event) => searchValue.current = (event.target.value)}></StyledInput>
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
            {contentsArray.map(chapter => routeMaker(chapter[0]+chapter[1]+chapter[2], searchValue, searchedRulesArray, rulesArray))}
            {/* {ruleNumbers.map(number => ruleNumberRouteMaker(number, rulesArray))} */}
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
