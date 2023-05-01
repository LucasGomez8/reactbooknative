import React, { useEffect, useState } from 'react'
import { useUserContext } from '../client/context/UserContext'

export default function MyDataEffect() {
  
    const {userLogin_data} = useUserContext();
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        if( userLogin_data && userLogin_data.length > 0){
            setProfileData(userLogin_data[0]);
        }
    },[userLogin_data]);


    return { profileData }

}