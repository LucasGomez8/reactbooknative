
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useUserContext } from '../client/context/UserContext'

export default GetNoFollows = (id) => {
    const {noFollows, getUserToFollow} = useUserContext();

    useEffect(()=> {
        getUserToFollow({"id": id});
    }, [id]);

    return { noFollows }
}