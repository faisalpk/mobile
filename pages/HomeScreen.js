// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./NavigatorLogo.png')}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </View>
            <Text style={styles.paragraph}>
              If you are in distress or need to talk to someone about your
              mental wellbeing, call or text the free 24/7 mental wellbeing
              helpline for your location.
            </Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details')}>
                <Text style={{color: 'white'}}>Need to Talk? just Tap</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('MessageStack', {screen: 'ChatScreen'})
                }>
                <Text style={{color: 'white'}}>Tap to message to Advisor</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Assessment')}>
                <Text style={{color: 'white'}}>Fill Assessment Form</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('SettingsStack', {screen: 'Settings'})
                }>
                <Text style={{color: 'white'}}>
                  Tap to check recommended trainings
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#297db6',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
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

export default HomeScreen;
