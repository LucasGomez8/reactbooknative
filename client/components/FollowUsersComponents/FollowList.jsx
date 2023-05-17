import React from 'react'
import { FlatList, View } from 'react-native'
import FollowItem from './FollowItem'
import GetNoFollows from '../../../hooks/GetNoFollows';

export default function FollowList({id}) {
 
    const { noFollows } = GetNoFollows(id);
  return (
    <FlatList
        data={noFollows}
        ItemSeparatorComponent={<View></View>}
        renderItem={({item: user}) => (
            <FollowItem {...user}></FollowItem>
           )}
    ></FlatList>
  )
}