import React from 'react'
import { RulesContainer, SearchText, Rule } from './StyledComponents'
import { Route } from 'react-router-dom'


export const pathMaker = (chapter, searchValue, searchedRulesArray, rulesArray) => {
  if(searchValue.current !== '') {
    return (
      <RulesContainer key={Math.random()}><SearchText>{searchedRulesArray.length} search result for {searchValue.current}</SearchText> {searchedRulesArray.map(rule => <Rule key = {rule + Math.random()}> {rule}</Rule>)}</RulesContainer>)

  }else{
    return (
      <Route key = {Math.random()} path= {'/' + chapter}>
        <RulesContainer>{ruleParser(chapter, rulesArray).map(rule => <Rule key = {rule + Math.random()}> {rule}</Rule>)} </RulesContainer>
      </Route>
    )
  }
}
export const ruleParser = (chapter, rulesArray) => {
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