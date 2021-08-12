
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { getAll } from './RuleService'
import {
  BrowserRouter as Router,
 Link, Switch, Route
} from "react-router-dom"
// import background from './images/pexels-greg-2418664.jpg'
import page from './images/pexels-page.jpg'
import wood from './images/pexels-wood.jpg'
// import aurora from './images/pexels-stein-egil-liland-1933316.jpg'
// import mountain from './images/pexels-mariia-kamenska-756799.jpg'
// import aurora2 from './images/pexels-benjamin-suter-3617500.jpg'
import lightning from './images/pexels-raychel-sanner-4870641.jpg'


//https://css-tricks.com/snippets/css/a-guide-to-flexbox/#background
const FlexParent = styled.div `
display: flex;
height:1000px;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
background: url(${lightning})no-repeat center fixed; 
background-size: cover;
`

const MainContainer = styled.div `
display: flex;
flex-flow: row nowrap;
justify-content: center;
height: 500px;
width: 1100px;
border-image: url(${wood}) 30 round;
border: 24px solid rgba(207,195,219,0.3)
;
border-radius: 20px 20px 20px 20px;

`
const ContentTable = styled.div `
display: flex;
flex-flow: column;
justify-content: flex-start;
margin: auto;
height:100%;
width: 30%;
overflow:auto;
padding: 2px;
background: url(${page})no-repeat center fixed; 
background-size: cover;
background: rgba(235,213,179,0.60);
font-family: Avara;
`

const RulesContainer = styled.div `
display: flex;
flex-flow: column;
margin: auto;
height: 100%;
width: 70%;
padding: 2px;
overflow: auto;
background: rgba(235,213,179, 0.60);

&::-webkit-scrollbar {
    width: 10px;
    border: 3px solid black;

}





// `

const Rule = styled.div `
display: flex;
padding 10px;
font-family: Alegreya;



`
const Chapter = styled.div `
display: flex;
padding 10px;
font-family: Avara;
font-size: 22px;
border-style: groove;
`

const Heading = styled.h1 `
font-family: Avara;
font-size: 30px;
font-weight: bold;
margin: 15px 0 5px;
text-align: left;
color: rgba(150,135,174,255)

;

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
      <Heading>Magic: The Gathering Rulebook</Heading> 
      <MainContainer>
        <ContentTable>
          <ul>
        {contentsArray.map(row => <Chapter key = {row + Math.random() }>
          
          <Link key = {row + Math.random()} to = {row[0] + row[1]+ row[2]}>{row}</Link>
          </Chapter>)}
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

//Footer
//“[Title of your Fan Content] is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.”