// components/GoogleSignIn.tsx
import React, { useState, useEffect } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const GoogleSignIn: React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
  });

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      getUserInfo(authentication.accessToken);
    }
  }, [response]);

  const getUserInfo = async (token: string) => {
    if (token) {
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`);
      const user = await response.json();
      setUserInfo(user);
    }
  };

  return (
    <View>
        <TouchableOpacity
        style={styles.google_button}
          onPress={() => {
                  promptAsync();
                }}
        >
          <Image style={styles.image} source={require('../assets/images/googleicon.png')} />
            <Text>Sign in with Google</Text>
        </TouchableOpacity>
    </View>
  );
};

 const styles= StyleSheet.create({
     google_button:{
         backgroundColor: '#fff',
         borderRadius: 10,
         width: 160,
         fontSize: 18,
         height: 50,
         borderWidth: 1,
         borderColor: '#000',
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 20,
         marginBottom: 10,
         display: 'flex',
         flexDirection: 'row',
         paddingHorizontal: 15,
         },
         image: {
           width: 25,
           height: 25,
          marginRight: 10,
         }
     });
export default GoogleSignIn;
