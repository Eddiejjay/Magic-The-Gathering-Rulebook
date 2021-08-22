import styled from 'styled-components'
import lightning from './images/pexels-raychel-sanner-4870641.jpg'

export const StyledInput = styled.input`

max-padding:6px;
max-font-size: 25px;
font-family: Avara;
border-width: 0px;
box-shadow: 0px 0px 5px rgba(66,66,66,.75);
   background: transparent;
   border: 5px groove rgba(20,20,20,0.17);
   &:hover {
    background: rgb(250, 249, 249,0.4)
    
  }

  `

export const StyledButton = styled.button `
padding:5x;
background: transparent;
border: 5px groove rgba(20,20,20,0.17);
&:hover {
  background:rgb(255,240,219,0.5)
  
}
`
export const ButtonText = styled.div `
  max-padding: 5px;
  color: #766a95;;
  font-family: Avara;
  font-size: 25px;
`


export const SearchFieldContainer = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
padding : 7px;

`

export const FlexParent = styled.div `
display: flex;
height:1000px;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
background: url(${lightning})no-repeat center fixed; 
background-size: cover;
`

export const MainContainer = styled.div `
display: flex;
flex-flow: row nowrap;
margin-left: 1%;
margin-right: 1%;
justify-content: center;
align-items: center;
height: 500px;
max-width: 1000x;
border: 24px solid rgba(207,195,219,0.3)
;
border-radius: 20px 20px 20px 20px;

`
export const ContentTable = styled.div `
display: flex;
flex-flow: column;
justify-content: flex-start;
margin: auto;
height:100%;
max-width: 35%;
overflow:auto;
padding: 5px;
background-size: cover;
background: rgba(235,213,179,0.60);
font-family: Avara;
&::-webkit-scrollbar {
    width: 20px;
    border: 3px solid rgba(207,195,219,0.3);
    background: transparent;
    thumb: 

}
::-webkit-scrollbar-thumb {
    background: rgba(118,106,149, 0.5);
    border: 3px solid rgba(207,195,219,0.3);
    border-radius: 36px;
  }

`

export const RulesContainer = styled.div `
display: flex;
flex-flow: column;
align-items: flex-center;
margin: auto;
height: 100%;
width: 70%;
padding: 5px;
overflow: auto;
background: rgba(235,213,179, 0.60);
word-break: break-word;

&::-webkit-scrollbar {
    width: 20px;
    border: 3px solid rgba(207,195,219,0.3);
    background: transparent;
    thumb: 

}
::-webkit-scrollbar-thumb {
    background: rgba(118,106,149, 0.5);
    border: 3px solid rgba(207,195,219,0.3);
    border-radius: 36px;
  }

// `

export const Rule = styled.div `
padding 10px;
max-font-size: 20px;
font-family: Alegreya;


`
export const Chapter = styled.div `
display: flex;
padding 7px;
font-family: Avara;
max-font-size: 22px;
border-style: groove;
overflow-wrap: anywhere;
`

export const Heading = styled.h1 `
font-family: Avara;
max-font-size: 35px;
font-weight: bold;
margin: 15px 0 5px;
text-align: left;
color: #766a95;
text-shadow: rgb(255, 255, 254) 2px 0px 0px, rgb(255, 255, 254) 1.75517px 0.958851px 0px, rgb(255, 255, 254) 1.0806px 1.68294px 0px, rgb(255, 255, 254) 0.141474px 1.99499px 0px, rgb(255, 255, 254) -0.832294px 1.81859px 0px, rgb(255, 255, 254) -1.60229px 1.19694px 0px, rgb(255, 255, 254) -1.97998px 0.28224px 0px, rgb(255, 255, 254) -1.87291px -0.701566px 0px, rgb(255, 255, 254) -1.30729px -1.5136px 0px, rgb(255, 255, 254) -0.421592px -1.95506px 0px, rgb(255, 255, 254) 0.567324px -1.91785px 0px, rgb(255, 255, 254) 1.41734px -1.41108px 0px, rgb(255, 255, 254) 1.92034px -0.558831px 0px;


`

export const SearchText = styled.div `
font-family: Avara;
font-size: 15px;
text-align: center;

`
export const InfoText = styled.div `
font-family: Avara;
max-font-size: 25px;
text-align: center;
justify-content: center;
`

export const ContentsHeader = styled.div `
font-Family: Avara;
max-font-size: 25px;
text-align: center;

`