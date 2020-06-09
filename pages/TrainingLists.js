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

const TrainingLists = () => {
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
                source={require('./john.png')}
                style={{
                  width: 350,
                  height: 150,
                }}
              />
            </View>
            <Text style={styles.paragraph}>
            Mediation and Progressive Muscle Relaxation.
            </Text>
            <Text style={styles.paragraph}>
            Want to know how?
            </Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('SettingsStack', {screen: 'Settings'})
                }>
                <Text style={{color: 'white'}}>
                  Tap to start
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: '#297db6'}}>
          Tel: (02) 8243 5600
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: '#297db6'}}>
          Email: info@navigatorgroup.com.au
        </Text>
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
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default TrainingLists;
