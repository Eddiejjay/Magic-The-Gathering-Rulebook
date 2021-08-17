import React from 'react'
import { RulesContainer, SearchText, Rule } from './StyledComponents'
import { Route, Link } from 'react-router-dom'
import regexifyString from 'regexify-string'



export const routeMaker = (chapter, searchValue, searchedRulesArray, rulesArray) => {
  if(searchValue.current !== '') {
    return (
      <RulesContainer key={Math.random()}><SearchText>{searchedRulesArray.length} search result for {searchValue.current}</SearchText> {searchedRulesArray.map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)}</RulesContainer>)

  }else{
    return (
      <Route key = {Math.random()} path= {'/' + chapter}>
        <RulesContainer>{ruleParser(chapter, rulesArray).map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)} </RulesContainer>
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

export const ruleParser2 = (number, rulesArray) => {
  let chapArray = []
  for (let i = 0; i < rulesArray.length ; i++) {
    let alkio = rulesArray[i]
    let alkion6ekaa = alkio[0] + alkio[1] + alkio[2] + alkio[3]+ alkio[4]+ alkio[5]
    if (alkion6ekaa === number) {
      chapArray.push(rulesArray[i])
    }
  }
  return chapArray
}


export const hyperLinkCreator = (rule) => {
  // eslint-disable-next-line no-useless-escape
  let m = /([1-9][0-9][0-9]\.?[0-9]?[0-9]?[0-9][a-z|\.])/g
  return (
    regexifyString ({
      pattern: m,
      // eslint-disable-next-line react/display-name
      decorator: (match, index ) => {
        switch (index) {
        case 0: return match
        default: return <Link key = {match + Math.random()}to = {'/'+ match}> {match} </Link>
        }
      },
      input: rule
    })
  )

}


export const matchExtractor = (rule) => {
  // eslint-disable-next-line no-useless-escape
  let m = /([1-9][0-9][0-9]\.?[0-9]?[0-9]?[0-9][a-z|\.])/g
  return (
    regexifyString ({
      pattern: m,
      // eslint-disable-next-line react/display-name
      decorator: (match) => {
        return (
          match
        )
      },
      input: rule
    })
  )

}

export const ruleNumberRouteMaker = (number, rulesArray) => {
  return (
    <Route name = {Math.random()} id = {Math.random()} key = {Math.random()} path= {'/' + number}>
      <RulesContainer>{ruleParser2(number, rulesArray).map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)} </RulesContainer>
    </Route>
  )
}