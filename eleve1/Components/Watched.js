// Components/Watched.js

import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Watched extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.props.watchedFilms}
          navigation={this.props.navigation}
          watchedList={true}
          itemType='watched'
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

const mapStateToProps = (state) => {
  return {
    watchedFilms: state.toggleWatched.watchedFilms
  }
}

export default connect(mapStateToProps)(Watched)
