import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//components
import Posts from './components/posts';
import Profiles from './components/profiles';
import Home from './components/home';

const App = ()=>{
    return(
        <BrowserRouter>
            <div>
                <header>
                    Header
                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/profiles" component={Profiles}/>
                <Route path="/home" component={Home}/>
            </div>
        </BrowserRouter>
    )   
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);