// Components/FilmItemMini.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmItemMini extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title : this.props.film.title,
      isTitle: true
    }
  }

  _toggleTitle() {
    if (this.state.isTitle) {
      this.setState ({
        title: 'Sorti le ' + moment(new Date(this.props.film.release_date)).format('DD/MM/YYYY'),
        isTitle: false
      })
      return
    }
    this.setState ({
      title: this.props.film.title,
      isTitle: true
    })
  }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <FadeIn>
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForFilm(film.id)}
          onLongPress={() => this._toggleTitle()}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.poster_path)}}
          />
          <View style={styles.content_container}>
              <Text style={styles.title_text}>{this.state.title}</Text>
          </View>
        </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
    margin: 5
  },
  content_container: {
    flex: 3,
    margin: 30,
    justifyContent: 'center'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  }
})

export default FilmItemMini
