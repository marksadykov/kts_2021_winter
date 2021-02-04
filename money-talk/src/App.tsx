import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
    AppRoot,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    Cell,
    CardScroll,
    Card,
    Root,
    CellButton
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from "./components/Home/Home";

function App () {

    return (
        <Home />
    );
}

export default App;
