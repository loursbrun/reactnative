// Components/AlreadySeen.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class AlreadySeen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.props.filmsSeenAlready}
          navigation={this.props.navigation}
          isFilmVuItem = {true} // pour indiquer qu'on est dans la liste des films vus
          favoriteList={false} // Ici j'ai simplement ajouté un booléen à false pour indiquer qu'on n'est pas dans le cas de l'affichage de la liste des films favoris. Et ainsi pouvoir déclencher le chargement de plus de films lorsque l'utilisateur scrolle.
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  
})

const mapStateToProps = state => {
  return {
    filmsSeenAlready: state.hasBeenAlreadySeen.filmsSeenAlready
  }
}

export default connect(mapStateToProps)(AlreadySeen)
