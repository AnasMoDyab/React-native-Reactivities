import  React from 'react';

import { Button, View, StyleSheet, Text, ActivityIndicator  } from 'react-native';
import {ListItem, Avatar, Image, Divider } from 'react-native-elements'
 import TouchableScale from 'react-native-touchable-scale';
import ActivitiesListItem from './ActivitiesListItem'


export default function ActivitiesDashboard({ navigation }: any) {

    if(false)  return (   
                  <View style={[styles.container, styles.horizontal]}>     
                      <ActivityIndicator size="large" color="#0000ff" />
                    </View>)
    
    return (
      <ActivitiesListItem />
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});