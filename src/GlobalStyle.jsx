
import styled, { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`


*{
margin:0;
padding:0;
box-sizing:border-box;
}

`;

export const Container = styled.div` 
  width:80vw;
  height:80vh;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  

  @media screen and (max-width:800px){
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center
  }



  .ImgContainer{
    width:30vw ;
    height:45vh;
    box-shadow: 1px 1px 35px grey;
    display:flex;
    justify-content:center;
    padding:15px;
    margin:50px;

    @media screen and (max-width:780px){
      width:30vw;
      height:30vw;
    }
    @media screen and (max-width:700px){
      display:none;

    }
  }

  .StyledContainer{
    display:flex;
    flex-direction:column;
    box-shadow: 1px 1px 15px grey;
    justify-content:center;
    align-items:center;
    margin:15px;
    padding:10px;
    width:800px;
    height:600px;

    .para{
      font-weight:bold;
      font-size:35px;
      position:relative;
      margin:10px;
      }
    
 
 
    .Form{
 
     .Styledlabel{ 
      font-weight:semi-bold;
      font-family:sans-mono;
      font-size:15px;
    
     }
    
     .StyledInput{
      display:block;
      width:500px;
      height:25px;
      margin-top:8px;
      margin-bottom:8px;
      border-radius: 10px;
      padding:15px;
      border: 1px solid grey;

      @media screen and (max-width:1230px){
        width:40vw;

      }
      @media screen and (max-width:1100px){
        width:35vw;
      }

      @media screen and (max-width:700px){
        width:300px;
      }
     }
    
     .StyledP{
      text-align:center;
    margin-top:25px;
    font-size:18px;
    
     }
    
     .Icon{
      position:relative;
      bottom:32px;
      left:470px;
      cursor:pointer;

      @media screen and (max-width:1230px){
        left:90%;
      }
     }
    
     .StyledButton{
      background-color:#1F51FF;
      padding:5px;
      width:430px;
      position :relative;
      border:none;
      top:25px;
      left:40px;
      padding:15px;
      border-radius:10px;
      color:white;
      font-weight:bold;
      font-size:15px;
      margin-bottom:20px;
      cursor:pointer;

      &:hover{
        background-color:#0096FF;
      }

      @media screen and (max-width:1230px){
        left:13%;
        width:30vw;
      }

      @media screen and (max-width:1230px){
        left:15%;
        width:25vw;
      }

      @media screen and (max-width:700px){
        left:8px;
        width:300px;
      }
     }
     
     .StyledDiv{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:-15px;
    margin-bottom:6px;
    
      .OrangeText{
        color:orange;
    font-size:15px;
    cursor:pointer;
    
      }
     }
    
     .StyledSpan{
      color:orange;
      font-size:17px;
      text-decoration:underline;
      cursor:pointer;
     }
    
     .BottomText{
      color:orange;
    font-size:18px;
    font-weight:bold;
    text-decoration:underline;
    cursor:pointer;
     
    @media  screen and ( max-width:850px){
     display:block;
     }
    }

    @media screen and (max-width:1230){
      padding:8px;
    }

  }

    @media  screen and ( max-width:1230px){
      width:50vw;
      height:70vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

    }

    @media  screen and ( max-width:700px){
      width:400px;
      height:600px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }


  }
  
`

export default GlobalStyle;