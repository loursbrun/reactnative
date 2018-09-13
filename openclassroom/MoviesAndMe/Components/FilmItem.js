// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View name="left_container" style={{ backgroundColor: 'green', flex:1}}>
        <View name="image_container" style={{ backgroundColor: 'blue', flex:1, margin:10}}>
        </View>
        </View>
        <View name="right_container" style={{ backgroundColor: 'red', flex:2, margin: 10}}>
             <View name="title_top_container" style={{ backgroundColor: 'grey', flex:1, flexDirection: 'row'}}>
                <View name="title_left_container" style={{ backgroundColor: 'yellow', flex:2}}></View>
                <View name="note_right_container" style={{ backgroundColor: 'orange', flex:1}}></View>
             </View>
             <View name="description_container" style={{ backgroundColor: 'pink', flex:3}}></View>
             <View name="date_bottom_container" style={{ backgroundColor: 'brown', flex:1}}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 200,
    backgroundColor: 'grey',
    marginBottom: 20,
    flexDirection: 'row'
  },
  title_text: {
    
  }
})

export default FilmItem