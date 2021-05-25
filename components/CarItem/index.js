import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from "./styles";
import StyledButton from '../StyledButton';
const CarItem = (props) =>{
    return(
           
    <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/ModelS.jpeg')} 
        style={styles.backImage} 
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
        <StyledButton  type='primary' content = 'Custom Order' onPress = {() => {console.warn("Custom Order Pressed");}}/>
        <StyledButton  type='secondary' content = 'Existing Inventory' onPress = {() => {console.warn("Existing Order Pressed");}}/>

    </View>
    );
};

export default CarItem