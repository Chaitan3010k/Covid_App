import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    Button,
    ImageBackground
 } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView } 
    from 'react-native-gesture-handler' 

    export default class SymoPre extends Component {

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/unnamed.jpg")}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{width:"50%"}}>
                            <Icon name="md-remove" color="#FFF" size={26}/>
                            <Icon
                                name="md-remove"
                                color="#FFF"
                                size={26}
                                style={styles.minusIcon}
                            />
                        </View>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../images/1.jpeg')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>CORONA DASH</Text>

                    <View style={styles.colContainer}>
                        <Text style={styles.textSymptons}>SYMPTOMS OF COVID-19</Text>
                        <ion-icon name="information-circle-outline"></ion-icon>
                        <View style={styles.reloadContainer}>
                            <Icon name="" size={24} color="red"/>
                        </View>
                    </View>
                </ImageBackground>
              
                <ScrollView 
                    style={{marginTop:170}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
    </View>
         ) }
        }
