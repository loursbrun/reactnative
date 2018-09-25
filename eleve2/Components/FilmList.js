// Components/FilmList.js

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import FilmItemMini from './FilmItemMini'
import { connect } from 'react-redux'

class FilmList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  _displayDetailForFilm = (idFilm) => {
    console.log("Display film " + idFilm)
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  _renderItemType(item) {
    if (this.props.seenList) {
      return (
        <FilmItemMini
          film={item}
          displayDetailForFilm={this._displayDetailForFilm}
        />
      )
    }
    else{
      return(
        <FilmItem
          film={item}
          isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false} // Bonus pour différencier les films déjà présent dans notre state global et qui n'ont donc pas besoin d'être récupérés depuis l'API
          displayDetailForFilm={this._displayDetailForFilm}
        />
      )
    }
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => this._renderItemType(item)}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!this.props.favoriteList && this.props.films.length > 0 && this.props.page < this.props.totalPages) {
              this.props.loadFilms()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    seenFilm: state.toggleSeen.seenFilm
  }
}

export default connect(mapStateToProps)(FilmList)
