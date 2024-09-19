import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default class TheWaspScreen extends React.Component {

 static navigationOptions = ({ navigation }) => ({   
     title: "The Wasp Family",   
 });
  render() {
   return (
     <View style={{ flex: 1 , backgroundColor : '#eee' }}>
       <Image
         source={{ uri : "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1574/15746725/3410496-antmanandthewasp-spoilertalk-site.jpg"  }} 
         style={{width: '100%', height: 200}}
        />
        <View style={{ flex: 1 , backgroundColor : '#eee' }}>
       <Image
         source={{ uri : "https://cdn3.movieweb.com/i/article/Oi0Q2edcVVhs4p1UivwyyseezFkHsq/738:50/Ant-Man-3-Talks-Michael-Douglas-Update.jpg"  }}           style={{width: '100%', height: 200}}         />
       <Button
         title="Go to Ant... again"
         onPress={() => this.props.navigation.push('Ant')}
       />									
       <Button
         title="Go to The Wasp"
         onPress={() => this.props.navigation.push('TheWasp')}
       />
       <Button
         title="Go to Home"
         onPress={() => this.props.navigation.navigate('Home')}
       />
       <Button
         title="Go back"
         onPress={() => this.props.navigation.goBack()}
       />
     </View>
  
       
     </View>
   );
 }
}
