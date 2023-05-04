import React, { useEffect, useState } from 'react';
import { useUserContext } from '../client/context/UserContext';


export default GettAllPosts = (id) => {

    const {getPosts, allPost} = useUserContext();

    useEffect( () => {
        if(id){
            getPosts();
        }
        else{
            getPosts({"id": id});
        }
    }, [])


    return { allPost }
}