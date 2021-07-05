import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
const word = "Hello";
function App() {
    return (
        <div>
        <WordCard value="hello"/>
        </div>
        );
}
export default App;