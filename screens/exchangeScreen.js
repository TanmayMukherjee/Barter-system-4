import React from 'react';
import {View,Text,TouchableOpacity,Form,TextInput,StyleSheet} from 'react-native';

export default class ExchangeScreen extends React.Component{
    render(){
      return(
        <View>
          <TextInput
                    style={[styles.formTextInput, { height:50,justifyContent:'center',alignSelf:'center',marginTop:100, borderColor: '#40e0d0',borderRadius: 10,borderWidth: 1 }]}
                    multiline
                    numberOfLines={1}
                    placeholder={"Item Name"}
                    onChangeText={(text) => {
                      this.setState({
                        itemName: text
                      })
                    }}
                   
                  />
          <TextInput
                    style={[styles.formTextInput, { height: 200,width:300,justifyContent:'center',alignSelf:'center',marginTop:50, borderColor: '#40e0d0',
borderRadius: 10,borderWidth: 1, }]}
                    multiline
                    numberOfLines={8}
                    placeholder={"Description"}
                    onChangeText={(text) => {
                      this.setState({
                       description: text
                      })
                    }}
                  
                  />
          
          <TouchableOpacity 
          style={[styles.button,{marginTop:10}]}
            onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}
            >
              <Text style={{color:'#40e0d0', fontSize:18, fontWeight:'bold',justifyContent:'center',alignSelf:'center',marginTop:25}}>Add Item</Text>
          </TouchableOpacity>
        </View>
         
       
      )
    }
  }
const styles = StyleSheet.create({

})
