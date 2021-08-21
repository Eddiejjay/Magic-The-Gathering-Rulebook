
// eslint-disable-next-line no-undef
import React, { useState, useEffect } from 'react'
import { getAll } from './servises/RuleService'
import {  Switch, Route } from 'react-router-dom'
import { FlexParent, MainContainer, Heading, RulesContainer, InfoText } from './artsy/StyledComponents'
import SearchForm from './components/SearchForm'
import ContentsTable from './components/ContentsTable'
import Rules from './components/Rules'
import SingleRule from './components/SingleRule'
import SearchedRules from './components/SearchedRules'

const  App = () => {
  const [contentsArray, setContentsArray] = useState ([])
  const [rulesArray, setRulesArray] = useState ([])
  const [searchValue, setSearchValue] = useState ('')
  const [searchedRulesArray, setSearchedRulesArray] = useState ([])

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
      })

  }, [])

  return (
    <FlexParent>
      <Heading>Magic: The Gathering Rulebook</Heading>
      <SearchForm setSearchedRulesArray ={setSearchedRulesArray} rulesArray={rulesArray} setSearchValue={setSearchValue}></SearchForm>
      <MainContainer>
        <ContentsTable contentsArray = {contentsArray}/>
        <Switch>
          <Route path="/chapter/:chapter">
            <Rules rulesArray ={rulesArray}></Rules>
          </Route>
          <Route path="/rule/:rule">
            <SingleRule rulesArray={rulesArray}></SingleRule>
          </Route>
          <Route path="/search/:searchText">
            <SearchedRules searchedRulesArray={searchedRulesArray} searchValue = {searchValue} ></SearchedRules>
          </Route>
          <Route path= "/" >
            <RulesContainer style = {{ justifyContent: 'center' }}><InfoText > Choose a chapter of rules or search by a keword </InfoText></RulesContainer>
          </Route>
        </Switch>
      </MainContainer>
    </FlexParent>
  )
}
export default App