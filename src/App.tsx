import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Infoblock from './components/Infoblock/Infoblock';


function App() {

    return (
        <div className="App">
            <Header />
            <div className={'divider'}>
                <Infoblock/>
                <Main/>

            </div>

        </div>
    );
}

export default App;
