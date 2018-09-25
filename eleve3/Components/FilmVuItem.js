// Components/FilmVuItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'
import moment from 'moment'

class FilmVuItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            textValue: undefined
        }
        this.film = this.props.film
        this.isTitleShowing = true
    }

    

    _onLongPress = () => {
        const titleText = (this.isTitleShowing) ? "Sorti le " + moment(new Date(this.film.release_date)).format('DD/MM/YYYY') : this.film.title
        this.isTitleShowing = !this.isTitleShowing
        this.setState({
            textValue: titleText
        })
    }

   

  render() {
    const { displayDetailForFilm } = this.props
    return (
      <FadeIn>
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForFilm(this.film.id)}
          onLongPress={() => this._onLongPress()}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(this.film.poster_path)}}
          />
          <View style={styles.content_container}>
              <Text style={styles.title_text}>{this.state.textValue || this.film.title}</Text>           
          </View>

        </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 110,
    flexDirection: 'row'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5
  },
  content_container: {
    margin: 5
  },
  title_text: {
    fontSize: 20,
    flexWrap: 'wrap',
    paddingRight: 5,
    marginTop: 20
  }
})

export default FilmVuItem
