import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import BookmarkScreen from '../Screens/BookmarkScreen'
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'

const HomeStack = createStackNavigator();
function HomeStackComponent () {
  return (
    <HomeStack.Navigator headerMode="float">
      <HomeStack.Screen name = "Home" component={HomeScreen} />
      {/* <HomeStack.Screen name = "UserProfile" component={UserProfileScreen} /> */}
    </HomeStack.Navigator>
  );
}

const BookmarkStack = createStackNavigator();
function BookmarkStackComponent () {
  return (
    <BookmarkStack.Navigator headerMode="float">
      <BookmarkStack.Screen name = "Bookmark" component = {BookmarkScreen}/>
      <BookmarkStack.Screen name = "BookmarkViewer" component = {BookmarkViewerScreen}/>
    </BookmarkStack.Navigator>
  );
}


const TabNav = createBottomTabNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='HomeTab'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
        
            if (route.name === 'HomeTab') {
              iconName = 'home';
            } else if (route.name === 'BookmarkTab') {
              iconName = 'bookmark';
            }
        
            // You can return any component that you like here!
            return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: Colors.black,
          showLabel: true,
        }}>
        <TabNav.Screen name="HomeTab" component={HomeStackComponent} />
        {/* <TabNav.Screen name="BookmarkTab" component={BookmarkStackComponent} /> */}
      </TabNav.Navigator>
    </NavigationContainer>
  );
}