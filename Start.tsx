import Buttons from '@/components/__tests__/Buttons';
import { Text,View,StyleSheet,Pressable,TextInput,Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
let val='';
function Start() {
  let [value,setvalue] = useState('');

  let LevelImages = [
    {Url:'',Ans:'',Level:'Level 1'},
  ]

  let ValueSet = (el) =>{
   val+=el;
    setvalue(val)
  }

  let cleaner = () =>{
    val='';
    setvalue("")
  }

  let Enter = () =>{
    val='';
    setvalue("")
  }

  return (
    <>
      <View style={style.main}>
          <View style={style.Content}>
            <View style={style.Descri}>
                <View style={style.member}>
                    <View style={style.seen}>
                        <View>
                          <Text style={style.headers}>{LevelImages[0].Level}</Text>
                        </View>
                    </View>
                    <View style={style.input}>
                              <TextInput style={style.inputs} placeholder='Enter' keyboardType="numeric" value={value}/>
                          <View style={style.fixContent}>
                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('9')}}>9</Text>
                          </Pressable>

                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('8')}}>8</Text>
                          </Pressable>


                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('7')}}>7</Text>
                          </Pressable>

                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('6')}}>6</Text>
                          </Pressable>

                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('5')}}>5</Text>
                          </Pressable>
                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('4')}}>4</Text>
                          </Pressable>
                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('3')}}>3</Text>
                          </Pressable>
                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('2')}}>2</Text>
                          </Pressable>
                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('1')}}>1</Text>
                          </Pressable>
                          <Pressable >
                            <Text style={style.Buttons} onPress={()=>{ValueSet('0')}}>0</Text>
                          </Pressable>
                          <Pressable >
                            <Text style={style.icons} onPress={cleaner}>
                            <Ionicons name="close" size={24} color="white" />
                            </Text>
                          </Pressable>
                          <Pressable>
                            <Text style={style.icons}>
                            <AntDesign name="enter" size={24} color="white" onPress={Enter}/>
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                </View>
            </View>
          </View>
      </View>
    </>
  )
}

export default Start

const style =  StyleSheet.create({
  main:{
    width:'100%',
    height:'100%',
    backgroundColor:'#413f3f'
  },
  Content:{
    width:'90%',
    height:'90%',
    margin:'auto',
  },
  Descri:{
    width:'100%',
    height:'100%',
    alignItems:'center',
  },
  member:{
    width:'100%',
    height:'100%',
   margin:'auto',
  },
  seen:{
    width:'100%',
    height:'50%',
  },
  input:{
    width:'100%',
    height:'50%',
  },
  inputs:{
    width:'100%',
    borderRadius:10,
    marginHorizontal:'auto',
    padding:8,
    color:'white',
    fontSize:20,
    shadowColor:'white',
    shadowOffset:{width: 2 ,height: 2},
    shadowOpacity:0.56,
    shadowRadius:5
  },
  fixContent:{
    width:'100%',
    flexDirection:'row',
    alignContent:'center',
    flexWrap:'wrap',
   marginHorizontal:'auto',
   justifyContent:'center',
   marginTop:20,
  },
  Buttons:{
   width:60,
   height:60,
   backgroundColor:'green',
   margin:5,
   paddingHorizontal:22 ,
   color:'white',
   fontSize:26,
   alignContent:'center',
   borderRadius:10,
  },
  icons:{
    width:60,
    height:60,
    backgroundColor:'green',
    margin:5,
    paddingHorizontal:15,
    color:'white',
   fontSize:22,
   alignContent:'center',
   borderRadius:10,
  },
  headers:{
    fontSize:28,
    fontWeight:'500',
    textAlign:'center',
    color:'white'
  }
})