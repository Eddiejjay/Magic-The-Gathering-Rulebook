/* eslint-disable react/display-name */
import React from 'react'
import { Link } from 'react-router-dom'
import regexifyString from 'regexify-string'

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
  let m = /([1-9][0-9][0-9]\.?[0-9]?[0-9]?[0-9][a-z|\.|0-9])/g
  return (
    regexifyString ({
      pattern: m,
      decorator: (match, index ) => {
        switch (index) {
        case 0: return match
        default: return <Link key = {match + Math.random()}to = {'/rule/'+ match}> {match} </Link>
        }
      },
      input: rule
    })
  )

}
