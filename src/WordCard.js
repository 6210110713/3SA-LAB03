import React, { useState } from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';
const prepareStateFromWord = given_word => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: '',
 completed: false
 }
}
export default function WordCard(props){
 const[state,setState] = useState(prepareStateFromWord(props.value))
 const activationHandler = c => {
    console.log(`${c} has been activated.`)
    let x = setState({...state, completed: true})
    let guess = state.guess + c
    setState({...state, guess})
    
    
    if(guess.length == state.word.length){
       if(guess == state.word){
        alert("Is True!!! ");
        setState({...state, completed: true})
    }else{
        alert("Reset Play Again!!!!");
        setState({...state, guess: '', attempt: state.attempt + 1})
    }
    }
    }
    {
    return (
 <div>{
     state.chars.map((c, i) => 
     <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
 )  }
    <form onSubmit={props}>
      <button class="button" type="submit">Next</button>
        </form>

    

      
 </div>
 );
}}
