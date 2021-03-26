import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  TextInput} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValueUs: "",
      textValueCon: "",
      count: "",
    };
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
    count: this.state.count = "Ingresaste",
  });
  };

  render() {
    return(
      <View style = {styles.container}>
        <View style={styles.text}>
          <Text style={styles.text}>LOGIN</Text>
          
        </View>
        
        <Image source={require('./img/login.png')}/>
        <View style={styles.lo}>
        <Text style={{color:'white', textAlign:'left'}}>Usuario: </Text>
        <TextInput
          style = {{height: 40, borderColor: 'red', borderWidth:2, width: 150,  borderRadius:15,marginLeft:10, color:'white', textAlign: 'center',}}
         
        /> 
     
        <Text style={styles.a}>Contraseña:</Text>
        <TextInput
          style = {{height: 40, borderColor: 'green', borderWidth:2, width: 150, textAlign: 'center',
           borderRadius:15, marginLeft: 10, color:'white'}} secureTextEntry={true}
          
        > </TextInput>
        
        </View>
        <TouchableOpacity style = {styles.button} onPress={this.onPress}>
          <Text style={styles.textb}>Ingresar</Text>
        </TouchableOpacity>

        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
        </View>
        </View>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 80,
    color: 'blue',
    
    
  },

  textb: {
    color: 'white',
    
  },

  lo:{ alignItems:'flex-start',

  },

  a: {
    color: 'white' 
  },
  
  button: {
    top: 10,
    color: 'white',
    borderColor: 'black',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: 'red',
  },   

  img:{
    maxWidth: 400,
    maxHeight: 400,
  },
});
