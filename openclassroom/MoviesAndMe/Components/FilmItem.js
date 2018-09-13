// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View name="left_container" style={styles.left_container}>
            <View name="image_container" style={styles.image_container}></View>
        </View>
        <View name="right_container" style={styles.right_container}>
             <View name="title_top_container" style={styles.title_top_container}>
                <View name="title_left_container" style={styles.title_left_container}><Text name="title_text" style={styles.title_text}>Titre du film</Text></View>
                <View name="note_right_container" style={styles.note_right_container}><Text name="vote_text" style={styles.vote_text}>Vote</Text></View>
             </View>
             <View name="description_container" style={styles.description_container}><Text name="description_text" style={styles.description_text}>Description</Text></View>
             <View name="date_bottom_container" style={styles.date_bottom_container}><Text name="date_text" style={styles.date_bottom_container}>Sortie le 00/00/00</Text></View>
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
  left_container: {
    backgroundColor: 'green', 
    flex:1
  },
  image_container: {
    backgroundColor: 'blue', 
    flex:1, 
    margin:10
  },
  right_container: {
    backgroundColor: 'red', 
    flex:2, 
    margin: 10
  },
  title_top_container:{
    backgroundColor: 'grey', 
    flex:1, 
    flexDirection: 'row'
  },
  title_left_container: {
    backgroundColor: 'yellow', 
    flex:2
  },
  title_text: {
    fontSize: 20, 
    fontWeight: '600'
  },
  note_right_container:{
    backgroundColor: 'orange', 
    flex:1
  },
  vote_text: {
    fontSize: 30, 
    fontWeight: '600', 
    textAlign: 'right'
  },
  description_container: {
    backgroundColor: 'pink', 
    flex:3
  },
  description_text: {
    fontStyle:'italic'
  },
  date_bottom_container: {
    backgroundColor: 'brown', 
    flex:1
  },
  date_text :{
    fontSize: 14, 
    fontWeight: '600', 
    flexDirection:'column',  
    backgroundColor:'red', 
    position:'absolute', 
    bottom: 0, 
    right: 0
  }
})

export default FilmItem