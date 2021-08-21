import React from 'react'
import { Link
} from 'react-router-dom'
import { Chapter, ContentsHeader, ContentTable } from '../artsy/StyledComponents'

const ContentsTable = ({ contentsArray }) => {
  return (
    <ContentTable>
      <ContentsHeader>Contents</ContentsHeader>
      {contentsArray.map(row => <Chapter key = {row + Math.random()}>
        <Link key = {row + Math.random()}  to = {`/chapter/${row.slice(0,3)}`}>{row}</Link>
      </Chapter>)}
    </ContentTable>
  )
}

export default ContentsTable


