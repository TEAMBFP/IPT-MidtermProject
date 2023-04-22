import * as React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {

  render() {

    this.props.navigation.setOptions({
      headerBackTitle: '',
      headerShown: false,
    })

    return (
      <LinearGradient style={styles.container}
        colors={["#FBD3E9", "#BB377D"]}>


        <Text style={styles.hello}>TEAM BFP </Text>

        <View style={{ flexDirection: 'row', margin: 200, paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.login}
          >
            <Text style={styles.loginText}>Get Started</Text>
          </TouchableOpacity>

        </View>

      </LinearGradient>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hello: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 500,
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