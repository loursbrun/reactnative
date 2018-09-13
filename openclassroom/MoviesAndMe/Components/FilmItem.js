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
                <View name="title_left_container" style={{ backgroundColor: 'yellow', flex:2}}><Text style={{ fontSize: 20, fontWeight: '600'}}>Titre du film</Text></View>
                <View name="note_right_container" style={{ backgroundColor: 'orange', flex:1}}><Text style={{ fontSize: 30, fontWeight: '600', textAlign: 'right'}}>Vote</Text></View>
             </View>
             <View name="description_container" style={{ backgroundColor: 'pink', flex:3}}><Text style={{ fontStyle:'italic'}}>Description</Text></View>
             <View name="date_bottom_container" style={{ backgroundColor: 'brown', flex:1}}><Text style={{ fontSize: 14, fontWeight: '600', flexDirection:'column',  backgroundColor:'red', position:'absolute', bottom: 0, right: 0 }}>Sortie le 00/00/00</Text></View>
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