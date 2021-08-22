
import React from 'react'
import { useParams } from 'react-router-dom'
import { RulesContainer, Rule } from '../artsy/StyledComponents'
import { hyperLinkCreator } from '../utils/Tools'

const SingleRule = ({ rulesArray }) => {
  const ruleNumber = useParams().rule
  const rule = rulesArray.find(rule => rule.slice(0,ruleNumber.length) === ruleNumber)
  return (
    <RulesContainer><Rule>{hyperLinkCreator(rule)}</Rule> </RulesContainer>
  )
}

export default SingleRule