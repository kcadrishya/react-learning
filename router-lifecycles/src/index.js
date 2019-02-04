import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//alternative to Browser Router are HashRouter and MemoryRouter
//link can be replaced by NavLink which has option to add activeStyle and activeClassName as a property of link

// components
import Posts from './components/posts';
import Profiles from './components/profiles';
import Home from './components/home';
import PostItem from './components/post_item';

// myawesomeapp.com/posts
// myawesomeapp.com/profile/posts


const App = ()=>{
    return(
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to="/posts">Posts</Link><br/>
                    <Link to="/profiles">Profiles</Link><br/>
                    <hr/>
                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/posts/:id/:username" component={PostItem}/>
                <Route path="/profiles" component={Profiles}/>
                <Route path="/home" component={Home}/>
            </div>
        </BrowserRouter>
    )   
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);