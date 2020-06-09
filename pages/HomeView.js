//This is an Example of Card Using react-native-paper
import * as React from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Card} from 'react-native-paper';

export default class HomeView extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor : "white"}}>
        <View style={styles.container}>
          <Card>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                }}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </View>
            <Text style={styles.paragraph}>If you are in distress or need to talk to someone about your mental wellbeing, call or text the free 24/7 mental wellbeing helpline for your location.</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
  },
});
