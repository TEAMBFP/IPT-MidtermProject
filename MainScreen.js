import * as React from 'react'
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
const window = Dimensions.get('window')

export default class MainScreen extends React.Component {

    render() {
        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false
        })

        return (
            <View
                style={{
                    flex: 1,

                }}>
                <ImageBackground source={require('./assets/images/pink.png')} style={styles.bg}>
                </ImageBackground>

                {/* --- TITLE BAR --- */}
                <View
                    style={{
                        flexDirection: 'row',
                        height: 100,
                        width: '100%',
                        alignItems: 'center',
                        paddingTop: 60,
                        paddingHorizontal: 20,
                        justifyContent: 'space-between'
                    }}>
                    <TouchableOpacity
                        onPress={() => alert('Profile - Coming soon')}>
                        <Ionicons
                            name="md-person"
                            size={25}
                            color="#1976d2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('Search - Coming soon')}>
                        <Ionicons
                            name="md-search"
                            size={25}
                            color="#1976d2"
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView>

                    {/* --- WELCOME SECTION --- */}
                    <View >
                        <ImageBackground source={require('./assets/images/login.png')} style={styles.cover}>
                        </ImageBackground>

                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: window.height / 2.5,
                                width: window.width,
                                borderBottomRightRadius: 50,
                                borderBottomLeftRadius: 50,
                                backgroundColor: '#00000050',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: '#FFF'
                                }}>
                                Welcome to
                            </Text>
                            <Text
                                style={{
                                    fontSize: 21,
                                    color: '#FFF',
                                    fontWeight: 'bold'
                                }}>
                                TEAM BFP APP
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ paddingLeft: 20, marginVertical: 20 }}
                    >
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }}>
                            <View style={{ marginLeft: 10 }}>
                                <ImageBackground source={require('./assets/images/abe.png')} style={styles.bfp}>
                                </ImageBackground>
                                <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Abegail</Text>
                            </View>

                            <View style={{ marginLeft: 10 }}>
                                <ImageBackground source={require('./assets/images/ashly.png')} style={styles.bfp}>
                                </ImageBackground>
                                <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Ashly</Text>
                            </View>

                            <View style={{ marginLeft: 10 }}>
                                <ImageBackground source={require('./assets/images/dave.png')} style={styles.bfp}>
                                </ImageBackground>
                                <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Dave</Text>
                            </View>

                            <View style={{ marginLeft: 10 }}>
                                <ImageBackground source={require('./assets/images/jesse.png')} style={styles.bfp}>
                                </ImageBackground>
                                <Text style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>Jesse</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ backgroundColor: '#FFC0CB', height: 300, margin: 20, borderRadius: 10, alignItems: 'center', }} >
                    <ImageBackground source={require('./assets/images/main.png')} style={styles.top}>
                                </ImageBackground>

                        <Text style={{ color: '#000000', fontSize: 16, marginTop: 15 }}>Safety Amidst Waves</Text>
                        <Text style={{ color: '#000000', fontSize: 16, marginTop: 5 }}>of</Text>
                        <Text style={{ color: '#000000', fontSize: 17, marginTop: 5, fontWeight: 'bold' }}>Fire</Text>

                    </View>

                </ScrollView>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: '100%',
        height: '800%',
    },
    cover: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: window.width,
        height: window.height / 2.5
    },
    bfp: {
        height: 100,
        width: 120,
        borderRadius: 5,
    },
    top: {
        height: 200, 
        width: '100%', 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10

    },
})