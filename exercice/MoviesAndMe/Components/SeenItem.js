// Components/SeenView.js

import React from 'react'
import { StyleSheet, View } from 'react-native'

class SeenItem extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <Text>Test Seen Component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'red'
    }
})

export default SeenItem;