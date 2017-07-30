// Original Source Code by sreejithr/react-native-slide-button
// Improve & Edit by Zenon 'SI

import React, { Component } from 'react'
import { View, StyleSheet, PanResponder, Animated } from 'react-native'

class SlideButton extends Component {

    isSlideSuccessful() {
        const percent = this.props.successfulSlidePercent ? this.props.successfulSlidePercent / 100 : 0.4
        return this.state.dx > (this.width.wrapper * percent)
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {},

            onPanResponderMove: (evt, gestureState) => {
                if ((gestureState.dx <= this.width.wrapper - this.width.mover) && (gestureState.dx >= 0)) {
                    this.setState({
                        dx: gestureState.dx
                    });
                }
                
            },

            onPanResponderRelease: (evt, gestureState) => {
                if (this.isSlideSuccessful()) {
                    // Move the button out
                    this.moveButtonOut(() => {
                        this.props.onSlideSuccess()
                    })

                    // Slide it back in after 1 sec
                    setTimeout(() => {
                        this.snapToPosition(() => {
                            this.setState({
                                released: false,
                                dx: this.state.initialX
                            })
                        })
                    }, 1000)

                } else {
                    this.snapToPosition(() => {
                        this.setState({
                            released: false,
                            dx: this.state.initialX
                        })
                    })
                }
            },

            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
                this.snapToPosition(() => {
                    this.setState({
                        released: false,
                        dx: this.state.initialX
                    });
                });
            },

            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from
                // becoming the JS responder. Returns true by default. Is currently only
                // supported on android.
                return true
            }
        })
    }

    moveButtonOut(onCompleteCallback) {
        const startPos = this.state.initialX + this.state.dx
        const endPos = this.width.wrapper - this.width.mover
        this.moverFromTo(startPos, endPos, onCompleteCallback)
    }

    snapToPosition(onCompleteCallback) {
        const startPos = this.state.initialX + this.state.dx
        const endPos = this.state.initialX
        this.moverFromTo(startPos, endPos, onCompleteCallback)
    }

    moverFromTo(startPos, endPos, onCompleteCallback) {
        this.setState(
            {
                released: true,
                animatedX: new Animated.Value(startPos)
            },
            () => {
                Animated
                    .timing(
                        this.state.animatedX,
                        { toValue: endPos }
                    )
                    .start(onCompleteCallback)
            }
        )
    }


    width = {}
    state = {
        initialX: 0,
        dx: 0,
        animatedX: new Animated.Value(0),
        released: false
    }

    moverLayout() {
        this.refs.mover.measure((fx, fy, width, height, px, py) => {
            this.width.mover = width
        })
    }

    wrapperLayout() {
        this.refs.wrapper.measure( (fx, fy, width, height, px, py) => {
            this.width.wrapper = width
        })

    }
    render() {
        let mover = null
        if (this.state.released) {
            const moverStyles = [styles.mover, { left: this.state.animatedX } ]
            mover = (
                <Animated.View style={moverStyles}>
                    {this.props.children}
                </Animated.View>
            )
        }
        else {
            const moverStyles = [styles.mover, { left: this.state.dx } ]
            mover = (
                <View ref="mover" onLayout={this.moverLayout.bind(this)} style={moverStyles}>
                    {this.props.children}
                </View>
            )
        }
        return (
            <View
                ref="wrapper"
                onLayout={this.wrapperLayout.bind(this)}
                style={[styles.wrapper, this.props.style]}
                {...this.panResponder.panHandlers}
            >
                {mover}
            </View>
        )
    }
}

SlideButton.propTypes = {
    onSlideSuccess: React.PropTypes.func.isRequired,
    successfulSlidePercent: React.PropTypes.number
}

export default SlideButton

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden'
    },
    mover: {
        position: 'absolute',
    }
})
