/* eslint-disable react/display-name */
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
        <RulesContainer>{ruleParser(chapter, rulesArray,3).map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)} </RulesContainer>
      </Route>
    )
  }
}

export const ruleParser = (matcher, rulesArray, n) => {
  let array = []
  for (let i = 0; i < rulesArray.length ; i++) {
    let firstNumbers = rulesArray[i].slice(0,n)
    if (firstNumbers === matcher) {
      array.push(rulesArray[i])
    }
  }

  return array
}


export const hyperLinkCreator = (rule) => {
  // eslint-disable-next-line no-useless-escape
  let m = /([1-9][0-9][0-9]\.?[0-9]?[0-9]?[0-9][a-z|\.])/g
  return (
    regexifyString ({
      pattern: m,
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
      <RulesContainer>{ruleParser(number, rulesArray, 6).map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)} </RulesContainer>
    </Route>
  )
}

export const sum = (a,b) => a+b