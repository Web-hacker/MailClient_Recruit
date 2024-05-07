import React from 'react';
import './Home.css';
import Header from './Header';
import Side from './Side';
import UpperSide from './UpperSide';
import Inbox from './Inbox';

function Home(){
    const [show,setshow]=React.useState(false);
    function handleover(){
        setshow(true);
    }
    function handleout(){
        setshow(false);
    }
    function handletoggle(){
        setshow(!show);
    }
    return (
        <div>
            <Header handleToggle={handletoggle} />
            <div style={{display: "flex", position: "relative"}}>
            <Side handleOver={handleover} />
            <UpperSide Show={show} handleOut={handleout} />
            <Inbox />
            </div>
        </div>

    )
}

export default Home;