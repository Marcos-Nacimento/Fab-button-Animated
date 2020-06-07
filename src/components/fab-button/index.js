import React, { Component } from 'react'

import 
{
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Animated,

} from 'react-native'

import { AntDesign, Entypo } from '@expo/vector-icons'

export default class Fab extends Component {
    animation = new Animated.Value(0)

    toggle = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 6,
        }).start()

        this.open = !this.open
    }
    render(){
        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg']
                    })
                }
            ]
        }

        const cameraStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const likeStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }
        return(
            <View style={styles.container}>

                <TouchableWithoutFeedback >
                    <Animated.View style={[styles.btn, styles.menu, likeStyle]}>
                        <AntDesign name='heart' size={24} color='#fff' />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback >
                    <Animated.View style={[styles.btn, styles.menu, cameraStyle]}>
                        <AntDesign name='camera' size={24} color='#fff' />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggle} >
                    <Animated.View style={[styles.btn, styles.menu, rotation]}>
                        <AntDesign name='plus' size={24} color='#fff' />
                    </Animated.View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
        right: 60,
        position: 'absolute'
    },
    menu: {
        backgroundColor: '#7159c1'
    },
    btn: {
        width: 60,
        height: 60,
        position: 'absolute',
        borderRadius: 60 / 2,
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#7159c1',
        justifyContent: 'center',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        }
    },
    subMenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#7159c1',
    } 
})