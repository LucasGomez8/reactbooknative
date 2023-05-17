import React, { useEffect, useState } from 'react';
import { useUserContext } from '../client/context/UserContext';


export default GettAllPosts = (id) => {

    const {getPosts, allPost} = useUserContext();

    if(id != -1){
        useEffect(() => {
                getPosts({"id": id});
        }, [id])
    }
    else{
        useEffect(() => {
            getPosts();
        }, [])
    }

    return { allPost }
}