
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { getAll } from './RuleService'
import {
  BrowserRouter as Router,
 Link, Switch, Route
} from "react-router-dom"
import background from './images/pexels-greg-2418664.jpg'
import page from './images/pexels-page.jpg'
import wood from './images/pexels-wood.jpg'


//https://css-tricks.com/snippets/css/a-guide-to-flexbox/#background


const MainContainer = styled.div `
display: flex;
flex-flow: row nowrap;
justify-content: center;
border-style: solid;
height: 500px;
width: 1000px;
border-color: green;
padding: 1%
background: url(${wood}); 

`

// const Container = styled.div`
// height:2000px;
// flex-direction: column;
// align-items: center;
// text-align: center;
//  background: url(${backgroundMountain})no-repeat center fixed; 
//  background-size: cover;

// `

const FlexParent = styled.div `
display: flex;
height:2000px;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
background: url(${background})no-repeat center fixed; 
background-size: cover;
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
background: url(${page})no-repeat center fixed; 
background-size: cover;
opacity: 0.5;
`

const RulesContainer = styled.div `
display: flex;
flex-flow: column;
border-style: dotted; 
margin: auto; opacity: 0.6;
height: 80%;
width: 50%;
border-color: blue;
overflow: auto;
background: url(${page})no-repeat center fixed; 

// `

const Rule = styled.div `
display: flex;
padding 10px;


`
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
      <RulesContainer>{ruleParser(chapter).map(rule => <Rule key = {rule}> {rule}</Rule>)} </RulesContainer>
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