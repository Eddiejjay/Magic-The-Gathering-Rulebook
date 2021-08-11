
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { getAll } from './RuleService'
import {
  BrowserRouter as Router,
 Link, Switch, Route
} from "react-router-dom"


//https://css-tricks.com/snippets/css/a-guide-to-flexbox/#background


const MainContainer = styled.div `
display: flex;
flex-flow: row nowrap;
justify-content: center;
border-style: solid;
height: 500px;
width: 1000px;
margin:auto;
border-color: green;
padding: 1%

`

const FlexParent = styled.div `
display: flex;
flex-flow: column nowrap;
justify-content: center;
`

const ContentTable = styled.div `
display: flex;
flex-flow: column;
border-style: dotted;
justify-content: flex-start;
margin: auto;
height:80%;
width: 50%;
border-color: yellow;
overflow:auto;
padding: 5px;
`

const RulesContainer = styled.div `
display: flex;
flex-flow: column;
border-style: dotted; 
margin: auto;
height: 80%;
width: 50%;
border-color: blue;
overflow: auto;

// `
// const getRules = async () => await getAll()


const  App = () => {
  const [txtArray, setTxtArray] = useState ([])
  const [contentsArray, setContentsArray] = useState ([])
  const [rulesArray, setRulesArray] = useState ([])
  // const [chapter100, setChapter100] = useState ([])

  useEffect(() => {  
  getAll()
  .then(response => {
    const array = response.split("\n")
    // console.log('Koko tiedosto taulukkona', array)
    setTxtArray(array)
    const cArray = array.slice(10,161)
    setContentsArray(cArray)
    const rulArray = array.slice(169,5757)
    setRulesArray(rulArray)
    
    
  })
}, [])

console.log('txtArray', txtArray)
console.log('contents array', contentsArray)
// console.log('contents lenght ', contentsArray.length)
// console.log('rules arra', rulesArray)

    // const cArray = array.slice(10,161)
    // setContentsArray(cArray)
    // console.log('txtARRAY = ', txtArray)
    // console.log('contentsArra 9', contentsArray)
   

const ruleParser = (chapter) => {
let chapArray = []
for (let i = 0; i < rulesArray.length ; i++) {
   let alkio = rulesArray[i]
  //  let alkioneka = alkio[0]
   let alkion3ekaa = alkio[0] + alkio[1] + alkio[2]
  if (alkion3ekaa === chapter) {
    console.log(rulesArray[i])
    chapArray.push(rulesArray[i])
  }
}

return chapArray
}

console.log('chapArray 2', ruleParser('2'))
  //  console.log('alkion eka  ', alkion3ekaa)
  //  console.log('typeofAlkuibeia', typeof(alkion3ekaa))

  const pathMaker = (chapter) => {

    return (
     
      <Route path= {"/" + chapter}>
      <RulesContainer>{ruleParser(chapter).map(rule => <li key = {rule}> {rule}</li>)} </RulesContainer>
      </Route>

    )
   

  }




  return (
    <Router>
    <FlexParent>
      <h1>Magic: The Gathering</h1> 
      <MainContainer>
        <ContentTable>
          <ul>
        {contentsArray.map(row => <li key = {row + Math.random() }>
          
          <Link key = {row + Math.random()} to = {row[0] + row[1]+ row[2]}>{row}</Link>
          </li>)}
        </ul>
        </ContentTable>
        <Switch>

        {contentsArray.map(chapter => pathMaker(chapter[0]+chapter[1]+chapter[2]))}

{/* 
        <Route path="/100">
        <RulesContainer>{ruleParser("100").map(rule => <li key = {rule}> {rule}</li>)} </RulesContainer>
        </Route>


        <Route path="/200">
        </Route>
        <Route path="300"> 
         </Route> */}
      </Switch>
      </MainContainer>
    </FlexParent>
    
  
    </Router>
  )
}

export default App;
