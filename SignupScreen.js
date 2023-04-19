import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        errMsg: ""
    }

    onLogin = () => {
        if (this.state.username == 'abe' && this.state.password == 'pretty') {
            this.props.navigation.navigate('Main')
        } else {
            this.validateInput.current.shake(800)
            this.setState({ errMsg: 'Invalid login details. Try again!' })
        }
    }

    onLogin = () => {
        if (this.state.username == 'abe' && this.state.password == 'pretty') {
            this.props.navigation.navigate('Main')
        } else {
            this.validateInput.current.shake(800)
            this.setState({ errMsg: 'Invalid login details. Try again!' })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/images/pink.png')} style={styles.bg}>
                </ImageBackground>

                <Animatable.View
                    ref={this.validateInput}
                >
                    <Text>Email address</Text>
                    <TextInput
                        style={styles.fields}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ username: text })
                        }
                        }
                    />
                    <Text>Username</Text>
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Password</Text>
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>First Name</Text>
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Last Name</Text>
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Birthdate</Text>
                    <TextInput
                        style={styles.fields}
                        placeholder="dd/mm/yyyy"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Gender</Text>
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>



                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.onLogin()}
                        style={{ width: 200, backgroundColor: '#FFC0CB', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40,  borderWidth: 1, borderColor: '#000000' }}
                    >
                        <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.login}
                    >
                        <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16, marginBottom: 30, }}>Already have an account? Login.</Text>
                    </TouchableOpacity>


                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {

        flex: 1,
        width: '100%',
        height: '5000%',
    },
    fields: {
        height: 45,
        width: 300,
        borderColor: 'white',
        borderWidth: 1,
        padding: 13,
        margin: 13,
    },

});