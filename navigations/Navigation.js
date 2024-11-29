import { TouchableOpacity, StyleSheet, } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Course, ClassInstance, CourseDetail, ClassInstanceDetail } from "../screens";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function NavigationApp(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Course"
        screenOptions={{
          headerTintColor: colors.green700,
        }}
      >
        <Stack.Screen
          name="Course"
          component={Course}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="ClassInstance"
          component={ClassInstance}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: route.params?.nameCourse || "Class Instance",
            headerStyle: { backgroundColor: colors.white },
            headerTintColor: colors.green700,
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color={colors.green700} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: route.params?.nameCourse ? route.params.nameCourse + " detail" : "Course Detail",
            headerStyle: { backgroundColor: colors.white },
            headerTintColor: colors.green700,
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color={colors.green700} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ClassInstanceDetail"
          component={ClassInstanceDetail}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: "Class Instance Detail",
            headerStyle: { backgroundColor: colors.white },
            headerTintColor: colors.green700,
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color={colors.green700} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
