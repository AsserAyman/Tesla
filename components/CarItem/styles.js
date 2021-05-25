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
      backImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
});

export default styles;