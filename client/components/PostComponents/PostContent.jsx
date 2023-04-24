import React, { useState } from 'react'
import { Pressable, StyleSheet, View, Text, Animated} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'


export default function PostContent(props) {

    const [like, setLike] = useState(false)

    const parseThousands = (nm) => {
        return nm > 1000 ? (nm / 1000) + 'k' : nm
    }

    const changeStatus = () => {
        setLike(!like);
    }

  return (
    <View style={style.content_container}>
        <Text style={style.text_content}>{props.post_content}</Text>
        <View style={style.like_container}>
            <Text style={style.like_number}>{parseThousands(props.post_likes)}</Text>
            <Pressable onPress={() => changeStatus()}> 
                <Icon name={ like ? 'heart' : 'heart-o'} color={ like ? '#C82E2E' : '#fff'}/>
            </Pressable>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    content_container: {
        marginLeft: 100,
        marginTop: 2
    },
    text_content: {
        color: '#FFFFFF',
        fontSize: 16
    },
    like_container: {
        paddingTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    like_number: {
        color: '#FFFFFF',
        fontSize: 12
    }
})
