import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBAApi'

class FilmDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        console.log("didMount")
        console.log(data)
        getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }

    _displayFilm() {
        const film = this.state.film
        if (film != undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>
               <View style={ styles.image_container }></View>
                    <Text style={ styles.title_container }>{film.title}</Text>
                    <Text style={ styles.description_container }>{film.overview}</Text>
                    <Text style={ styles.informations_container }>Sortie le {film.release_date}</Text>
                    <Text style={ styles.informations_container }>Note : {film.vote_average}/10</Text>
                    <Text style={ styles.informations_container }>Nombre de votes: {film.id}</Text>
                    <Text style={ styles.informations_container }>Budget: {film.budget} $</Text>
                    <Text style={ styles.informations_container }>Genre(s) : {film.genres[0].name}</Text>
                </ScrollView>
            )
        }
    }

    _dispalyLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    } 

    render() {
        console.log("render")
        const idFilm = this.props.navigation.state.params.idFilm
        return (
            <View style={styles.main_container}>
                {this._displayFilm()}
                {this._dispalyLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image_container: {
        backgroundColor: 'green', 
        height: 200, 
        flex:1
    },
    description_container :{
        backgroundColor: 'grey', 
        fontSize: 14, 
        margin: 5, 
        marginBottom: 20,  
        fontStyle: 'italic', 
        flex:1
    }, 
    title_container: {
        backgroundColor: 'red', 
        fontSize: 30, 
        textAlign: 'center', 
        fontWeight: '600', 
        margin: 10, flex: 1
    },
    informations_container: {
        backgroundColor: 'pink', 
        fontSize: 16, 
        margin: 5, 
        fontWeight: '600',  
        flex:1
    }
})

export default FilmDetail