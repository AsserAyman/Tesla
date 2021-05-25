import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from "./styles";
import StyledButton from '../StyledButton';
const CarItem = (props) =>{
  const {name, price, image,taglineCTA} = props;         
  return(
    <View style={styles.carContainer}>
        <ImageBackground 
        source={image} 
        style={styles.backImage} 
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {price}
            <Text style={styles.taglineCTA} >{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton  type='primary' content = 'Custom Order' onPress = {() => {console.warn("Custom Order Pressed");}}/>
          <StyledButton  type='secondary' content = 'Existing Inventory' onPress = {() => {console.warn("Existing Order Pressed");}}/>  
        </View>
        

    </View>
    );
};

export default CarItem