import React from 'react'
import { View } from 'react-native'
import ProfileHeader from '../components/EditProfileComponents/ProfileHeader';
import MyDataEffect from '../../hooks/MyDataEffect';

export default function EditProfile() {

    const {profileData} = MyDataEffect();

    return (
        <View>
            <ProfileHeader name={profileData.user_firstname} lastname={profileData.user_lastname} img={profileData.user_image_photo} port={profileData.user_image_photo} ></ProfileHeader>
        </View>
    )
}
