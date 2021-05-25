import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:'100%',
      },
      titles:{
        marginTop: '40%',
        width:'100%',
        alignItems: 'center',
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle:{
        fontSize: 17,
        color: '#5c5e62', 
      },
      taglineCTA:{
        textDecorationLine:'underline',
        color: 'black' 
      },
      backImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsContainer:{
        width: '100%',
        bottom: 50,
        position: 'absolute',
      }
});

export default styles;