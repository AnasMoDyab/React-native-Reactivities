import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ActivitiesListItem() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:'tomato'}}>
      <ListItem
        Component={TouchableScale}
        bottomDivider
        onPress={(event) => navigation.navigate('activityDetails')}
      
      >
        <Avatar
          rounded
          size="medium"
          source={require('./images/user2.png')}
        />
        <ListItem.Content style={styles.subtitleView}>
          <ListItem.Title style={{ color: 'tomato', fontWeight: 'bold' }}>
            Future Activity 2
            </ListItem.Title>
          <ListItem.Title style={{ color: 'black', borderRadius: 20, borderColor: 'red' }}>
            Hoset by
                    <ListItem.Subtitle style={{ color: 'tomato', fontWeight: 'bold' }}>  Bob </ListItem.Subtitle>
          </ListItem.Title>

          <ListItem.Subtitle style={{ color: 'black', fontWeight: 'bold' }}>
            07 05 2021 12:44 PMJamies Italian
            </ListItem.Subtitle>
          <ListItem.Subtitle style={{ color: 'black' }}>
            Vice Chairman
            </ListItem.Subtitle>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10, justifyContent: 'space-between' }}>
            <Avatar
              rounded
              size="small"
              source={require('./images/user2.png')}
            />
            <View style={{ flex: 0.05 }} />
            <Avatar
              rounded
              size="small"
              source={require('./images/user2.png')}
            />
            <View style={{ flex: 0.05 }} />
            <Avatar

              rounded
              size="small"
              source={require('./images/user2.png')}
            />
          </View>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  subtitleView: {
    borderRadius: 10,

    height: 140,
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 40,
  },
  listItems: {
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,

  }
})