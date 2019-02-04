import React from 'react';
import {Link} from 'react-router-dom';

const Profiles = (props)=> {
    console.log(props);
    return(
        <Link to={{
            pathname: `${props.match.url}/posts`
        }}>take me to /profiles/posts</Link>
    )
}

export default Profiles;

