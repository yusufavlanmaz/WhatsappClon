import React from 'react';
import {Alert,Text,View,TouchableHighlight,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './App.style';

const App =()=>{
  return(

   <View style={styles.container}>
     
     <View style={styles.header} >
       <Text style={styles.whatsapp} >
         WHATSAPP
        </Text>
        <TouchableHighlight style={styles.search}>
        <Icon  name='search' size={30} color='white' />
        </TouchableHighlight>
        <TouchableHighlight style={styles.dotmenu}>
          
        <Icon  name='more-vert' size={30} color='white' />
        </TouchableHighlight>
     </View>
     <View style={styles.menu} >
       <TouchableHighlight style={styles.camera} >
       <Icon  name='local-see' size={30} color='white' />
       </TouchableHighlight>
       <Text style={styles.text} >SOHBETLER</Text>
       <Text style={styles.text} >DURUM</Text>
       <Text style={styles.text} >ARAMALAR</Text>
     </View>


     <View style={styles.inner_container}>
       <View style={styles.body} >
       <View style={styles.image_container} >
       <Image
        style={styles.image}
        source={{
          uri:'https://gorevvakfi.org/wp-content/uploads/2021/11/profile.jpeg'
        }}
      />
       </View>
       <View style={styles.chats} >
        <Text style={styles.user_name} >yusuf avlanmaz</Text>
        <Icon name='done-all' size={25} /> 
        
       </View>
       <Text style={styles.slm} >slm</Text>
       </View>
       <View style={styles.messages} >
         <TouchableHighlight style={styles.messages_button} onPress={()=>{Alert.alert('Send Message')}} >
         <Icon name='message'  size={23} color='white' />
         </TouchableHighlight>
       </View>
     </View>
   </View>
  
  )
}
export default App;
