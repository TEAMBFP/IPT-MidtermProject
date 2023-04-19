import * as React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

  render() {

    this.props.navigation.setOptions({
      headerBackTitle: '',
      headerShown: false,
    })

    return (
      <View style={styles.container} >
        <ImageBackground source={require('./assets/images/pink.png')} style={styles.bg}>
        </ImageBackground>


        <Text style={styles.hello}>TEAM DROPLIST </Text>

        <View style={{ flexDirection: 'row', margin: 200, paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.login}
          >
            <Text style={styles.loginText}>Get Started</Text>
          </TouchableOpacity>

        </View>

      </View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},

bg: {
    flex: 1,
    width: '100%',
    height: '270%',
  },
  hello: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  login: {
    backgroundColor: '#FFC0CB',
    padding: 10,
    width: 150,
    borderRadius: 40,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#000000',

  },
  loginText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
  },
 
});