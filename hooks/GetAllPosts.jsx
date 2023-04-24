import React, { useEffect, useState } from 'react';
import { useUserContext } from '../client/context/UserContext';


export default GettAllPosts = () => {

    const {getPosts, allPost} = useUserContext();

    useEffect( () => {
        getPosts();
    }, [])


    return { allPost }
}