// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Profile Screen
          </Text>
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          Tel: (02) 8243 5600
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
        Email: info@navigatorgroup.com.au
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;