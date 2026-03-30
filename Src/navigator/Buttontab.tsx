import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import StaffIcon from '../components/AllButttontab/Stafficon';
import DateIcon from '../components/AllButttontab/Date';
import Finance from '../components/AllButttontab/Finance';
import Statistics from '../components/AllButttontab/Statistics';
import Homeicon from '../components/AllButttontab/Homeicon';
import HomeScreenAll from '../Screen/HomeScreenAppoinments/HomeScreenAll/HomeScreenAll';


const TAB_LABELS: Record<string, string> = {
  Dashboard: 'Home',
  Stafficon: 'Staff',
  Calendar: 'Calendar',
  Finance: 'Finance',
  Statistics: 'Statistics',
};

const renderIcon = (routeName: string, isFocused: boolean) => {
  const iconColor = isFocused ? '#635BFF' : '#879DB1';

  switch (routeName) {
    case 'Dashboard':
      return <Homeicon color={iconColor} />;
    case 'Stafficon':
      return <StaffIcon color={iconColor} />;
    case 'Calendar':
      return <DateIcon color={iconColor} />;
    case 'Finance':
      return <Finance color={iconColor} />;
    case 'Statistics':
      return <Statistics color={iconColor} />;
    default:
      return null;
  }
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
   
    <View style={styles.tabBar}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const labelColor = isFocused ? '#635BFF' : '#879DB1';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <View style={styles.iconContainer}>
              {renderIcon(route.name, isFocused)}
            </View>
            <Text style={[styles.tabLabel, { color: labelColor }]}>
              {TAB_LABELS[route.name]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>

  );
};

const Tab = createBottomTabNavigator();

export default function ButtomTabs() {
  return (
    <Tab.Navigator
      tabBar={CustomTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={HomeScreenAll} />
      <Tab.Screen name="Stafficon" component={HomeScreenAll} />
      <Tab.Screen name="Calendar" component={HomeScreenAll} />
      <Tab.Screen name="Finance" component={HomeScreenAll} />
      <Tab.Screen name="Statistics" component={HomeScreenAll} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor:'#FFFFFF',
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 34,

  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 93,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
