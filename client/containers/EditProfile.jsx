import React, {useEffect} from 'react'
import { View } from 'react-native'
import ProfileHeader from '../components/EditProfileComponents/ProfileHeader';
import MyDataEffect from '../../hooks/MyDataEffect';
import ProfileContent from '../components/EditProfileComponents/ProfileContent';

export default function EditProfile() {

    const {profileData} = MyDataEffect();

    return (
        <View>
            <ProfileHeader name={profileData.user_firstname} lastname={profileData.user_lastname} img={profileData.user_image_photo} port={profileData.user_image_photo} numofposts={profileData.num_postings} ></ProfileHeader>
            <ProfileContent></ProfileContent>
        </View>
    )
}
