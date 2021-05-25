import React from 'react';
import {View, Text,ImageBackground,Pressable} from 'react-native';
import styles from "./styles";
const StyledButton = (props) =>{
    
    const type = props.type;
    const content = props.content;
    const backColor = type === 'primary' ? 'black' : 'white';
    const txtColor = type === 'primary' ? 'white': 'black';
    return(
     <View style={styles.container}>
         <Pressable
            style={[styles.button,{backgroundColor: backColor}]}
            onPress={() => {
                console.warn('Hey There' )
            }}
         >
             <Text style={[styles.text,{color: txtColor}]}>{content}</Text>
         </Pressable>
     </View>   
        
    );
};

export default StyledButton;