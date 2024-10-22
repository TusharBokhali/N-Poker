import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import P1 from '@/assets/images/Poker6.png'
import P2 from '@/assets/images/Poker7.png'
import P3 from '@/assets/images/Poker8.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from 'expo-router'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const Start = () => {
  let Images = [P1,P2,P3,P1,P2,P3];

  let [click,setClick] = useState(0)
  let [score,setScore] = useState(0)

  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.Content}>
        <View style={styles.logo}>
        <AntDesign name="arrowleft" size={30} color="black" style={{textAlign:'center'}} onPress={()=>{navigation.navigate('index')}}/>
        </View>
            <View style={styles.ButtonF}>
              <View style={styles.Border}>
                  <Text style={styles.TextColor}>High Score</Text>
                  <Text style={styles.TextColor}>{score}</Text>
              </View>

              <View style={styles.Border}>
                  <Text style={styles.TextColor}>Move</Text>
                  <Text style={styles.TextColor}>{click}</Text>
              </View>
            </View>
              <View style={styles.Cards}>
                    {
                      Images.map((el,inx)=>{
                        return (
                          <TouchableOpacity style={styles.Card} onPress={()=>{setClick(click+1)}}>
                            <Image source={el} style={styles.Img} />
                          </TouchableOpacity>
                        )
                      })
                    }
              </View>
              <TouchableOpacity style={{width:'80%',marginHorizontal:'auto',backgroundColor:'#51c751',padding:10,marginTop:50,borderRadius:15,}}>
                    <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'500',}} onPress={()=>{navigation.navigate()}}>Reset</Text>
              </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Start

const styles = StyleSheet.create({
  Main:{
    width:'100%',
    backgroundColor:'#5555e7',
    height:'100%',
  },
  Content:{
    width:'100%',
    padding:15,
  },
  ButtonF:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
  },
  Border:{
    borderWidth:1,
    paddingHorizontal:25,
    margin:5,
    backgroundColor:'#1c1c80',
    borderRadius:8,
  },
  TextColor:{
    textAlign:'center',
    fontSize:20,
    color:'white',
  },
  Cards:{
    marginTop:15,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  Card:{
    width:'45%',
    height:150,
    margin:5,
    backgroundColor:'#64eb64',
    borderRadius:15,
  },
  Img:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  logo:{
    width:40,
    height:40,
    backgroundColor:'#e2a025',
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    marginBottom:20,
  }
})