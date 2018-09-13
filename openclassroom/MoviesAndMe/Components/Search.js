import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Titre du film"></TextInput>
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => { }} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        height: 50,
        paddingLeft: 5
    }
})

export default Search