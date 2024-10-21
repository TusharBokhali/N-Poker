import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation, useRootNavigation } from "expo-router";

const index = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.Content}>
            <View style={styles.heading}>
                <Text style={styles.Text}>Poker Game</Text>
                <Text style={styles.Normal}>V. 1.0.0</Text>
            </View>
            <View style={styles.Start}>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Start')}}>
                        <Text style={styles.Buttons}>Start</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.Buttons}>Privacy</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    Main:{
        flex:1,
    },
    Content:{
        width:'100%',
        height:'100%',
        padding:15,
        backgroundColor:"#3d3838",
        justifyContent:'flex-start'
    },
    heading:{
        width:'100%',
        height:'50%',
        marginTop:20,
    },
    Text:{
        color:'white',
        fontSize:32,
        textAlign:'center',
        fontWeight:'600',
    },
    Normal:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    Start:{
        width:'100%',
        height:'auto',
        alignItems:'center',
        justifyContent:'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius:10,
        width:'80%',
        margin:'auto',
        marginTop:20,
    },
    Buttons:{
        fontSize:22,
        color:'white',
    }

})