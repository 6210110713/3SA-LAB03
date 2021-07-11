import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
const word =["Luffy","Usop","Sanji","Nami","zoro","jinbe"]
const randomm = word[Math.floor(Math.random()*word.length)]

function App() {  
    if(randomm == "Luffy"){
    return (
        <div class="clr2">
        <font color="#00FF00" face="verdana" size="20" align="center" >ONE PIECE Chacrecter</font>
        <div class="font">
        <WordCard value={randomm} /></div>
        <img src="https://static.wikia.nocookie.net/thai-one-piece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20150322133149"></img>
        </div>
        );
}
    if(randomm == "Usop"){
    return (
        <div class="clr2">
        <font color="#00FF00" face="verdana" size="20" align="center" >ONE PIECE Chacrecter</font>
        <div class="font">
        <WordCard value={randomm} /></div>
        <img src="https://static.wikia.nocookie.net/thai-one-piece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20150322135842"></img>
        </div>
        );
}
    if(randomm == "Sanji"){
    return (
        <div class="clr2">
        <font color="#00FF00" face="verdana" size="20" align="center" >ONE PIECE Chacrecter</font>
        <div class="font">
        <WordCard value={randomm} /></div>
        <img src="https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20170625125657"></img>
        </div>
        );
}
    if(randomm == "Nami"){
    return (
        <div class="clr2">
        <font color="#00FF00" face="verdana" size="20" align="center" >ONE PIECE Chacrecter</font>
        <div class="font">
        <WordCard value={randomm} /></div>
        <img src="https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190720162446"></img>
        </div>
        );
    }
    if(randomm == "zoro"){
        return (
            <div class="clr2">
            <font color="#00FF00" face="verdana" size="20" align="center" >ONE PIECE Chacrecter</font>
            <div class="font">
            <WordCard value={randomm} /></div>
            <img src="https://static.wikia.nocookie.net/thai-one-piece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20150322134127"></img>
            </div>
            );
    }
    if(randomm == "jinbe"){
        return (
            <div class="clr2">
            <font color="#00FF00" face="verdana" size="20" align="center" >ONE PIECE Chacrecter</font>
            <div class="font">
            <WordCard value={randomm} /></div>
            <img src="https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png/revision/latest?cb=20170521201349"></img>
            </div>
            );
    }
    


}
export default App;
