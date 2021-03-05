import React from 'react';
import { Image, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens';
import { COLORS, icons} from '../constants';


const Tab = createBottomTabNavigator()

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%',
        backgroundColor: COLORS.black,
    },
};

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={tabOptions}
        screenOptions={({route}) =({
            tabBarIcon: ({ focused}) => {
                const tintColor = focused ? COLORS.white : COLORS.gray;

                switch(route.name){
                    case 'Home':
                        return(
                            <Image
                            source={icons.dashboard_icon}
                            resizeMode='contain'
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                            />
                        )
                    case 'Search':
                        return(
                            <Image
                            source={icons.menu_icon}
                            resizeMode='contain'
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                            />
                        )
                    case 'Notifications':
                        return(
                            <Image
                            source={icons.notification_icon}
                            resizeMode='contain'
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                                }}
                                />
                        )
                    case 'Notifications':
                        return(
                        <Image
                            source={icons.notification_icon}
                            resizeMode='contain'
                            style={{
                            tintColor: tintColor,
                            width: 25,
                            height: 25
                            }}
                            />
                            )
                }
            }
        })}
        >
            <Tab.Screen
            name="Home"
            component={Home}
            />
             <Tab.Screen
            name="Search"
            component={Home}
            />
             <Tab.Screen
            name="Home"
            component={Home}
            />
             <Tab.Screen
            name="Home"
            component={Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs