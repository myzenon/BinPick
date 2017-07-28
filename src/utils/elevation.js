import { Platform } from 'react-native'
export default (elevation) => {
    if (Platform.OS === 'ios') {
        // alert(elevation)
        return {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
                height: 0.6 * elevation,
            }
        }
    }
    return {
        elevation
    }
}
