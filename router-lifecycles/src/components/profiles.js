import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profiles = (props)=> {
    
    const redir = () => {
        console.log(props)
        return(
            props.history.push('/')
        )
    }


    return(
        <div>
        <Link to={{
            pathname: `${props.match.url}/posts`
        }}>take me to /profiles/posts</Link>

        {redir()}
        </div>
    )
}

export default Profiles;

