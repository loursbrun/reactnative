// Components/Favorites.js

import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Seen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.props.seenFilm}
          navigation={this.props.navigation}
          seenList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    seenFilm: state.toggleSeen.seenFilm
  }
}

export default connect(mapStateToProps)(Seen)
