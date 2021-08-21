
import React from 'react'
import { RulesContainer, Rule, SearchText } from '../artsy/StyledComponents'
import { hyperLinkCreator } from '../utils/Tools'

const SearchedRules = ({ searchedRulesArray, searchValue  }) => {
  return (
    <RulesContainer key={Math.random()}><SearchText>{searchedRulesArray.length} search result for {searchValue}</SearchText> {searchedRulesArray.map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)}</RulesContainer>
  )
}

export default SearchedRules