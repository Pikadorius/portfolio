import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Infoblock from './components/Infoblock/Infoblock';
import HideAppBar from './common/AppBar/AppBar';

function App() {

    return (
        <div className="App">
            <HideAppBar children={<Header/>}/>
                <div className={'divider'}>
                    <Infoblock/>
                    <Main/>
                </div>
        </div>
    );
}

export default App;
