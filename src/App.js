import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
const word ="Stutus"
function App() {  
    return (
        <div class="clr2">
        <font color="#00FF00" face="verdana" size="20" align="center" >เกมทายคำ</font>
        <div class="font">
        <WordCard value="Stutus" /></div>
        </div>
        );
}
export default App;