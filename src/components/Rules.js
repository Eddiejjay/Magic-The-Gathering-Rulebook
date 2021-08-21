
import React from 'react'
import { useParams } from 'react-router-dom'
import { RulesContainer, Rule } from '../artsy/StyledComponents'
import { ruleParser, hyperLinkCreator } from '../utils/Tools'

const Rules = ({ rulesArray }) => {
  const chapter = useParams().chapter
  return (
    <RulesContainer>{ruleParser(chapter, rulesArray,3).map(rule => <Rule key = {rule + Math.random()}>{hyperLinkCreator(rule)}</Rule>)}</RulesContainer>
  )
}

export default Rules