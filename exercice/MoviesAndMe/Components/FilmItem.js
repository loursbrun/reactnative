// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'
import moment from 'moment'
import SeenItem from './SeenItem'


class FilmItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentText: '',
      titleIsDate: false
    }
  }

  componentDidMount() {
    this.setState({currentText: this.props.film.title})
  }

  _displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      // Si la props isFilmFavorite vaut true, on affiche le 🖤
      return (
        <Image
          style={styles.favorite_image}
          source={require('../Images/ic_favorite.png')}
        />
      )
    }
  }

  updateText = (film) => {
    if(this.state.currentText !== film.title) {
      this.setState({currentText: film.title})
    } 
    else if(this.state.currentText === film.title) {
      this.setState({currentText: moment(new Date(film.release_date)).format('DD/MM/YYYY')})
    } 
  }

  _displayFavoritView({ film, displayDetailForFilm }) {
     if (this.props.navigation.state.routeName === 'Seens') {
      return (
        <TouchableOpacity
          style={styles.main_container_seen}
          onPress={() => displayDetailForFilm(film.id)}
          onLongPress={() => this.updateText(film)}>
          <Image
            style={styles.image_seen}
            source={{ uri: getImageFromApi(film.poster_path) }}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text_seen} onLongPress={() => this.updateText(film)}>{this.state.currentText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    else {
      return (
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForFilm(film.id)}>
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.poster_path) }}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              {this._displayFavoriteImage()}
              <Text style={styles.title_text}>{film.title}</Text>
              <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Sorti le 13/12/2017</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    
  }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <FadeIn>
        {this._displayFavoritView({ film, displayDetailForFilm })}
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  main_container_seen: {
    height: 100,
    flexDirection: 'row',
    marginTop: 10
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  image_seen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  title_text_seen: {
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default FilmItem
