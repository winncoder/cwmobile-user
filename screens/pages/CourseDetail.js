import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function CourseDetail({ route }) {
    const { nameCourse, dayOfWeek, timeOfCourse, capacity, duration, price, type, cDescription } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{nameCourse}</Text>
      </View>

      <View style={styles.detailContainer}>


        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Day Of Week:</Text>
          <Text style={styles.detailText}>{dayOfWeek}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Time Of Course:</Text>
          <Text style={styles.detailText}>{timeOfCourse}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Capacity:</Text>
          <Text style={styles.detailText}>{capacity}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.detailText}>{duration}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.detailText}>{price}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.detailText}>{type}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.detailText}>{cDescription}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.green500,
  },
  detailContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green500,
  },
  detailTextContainer: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
    color: colors.green500,
    borderRadius: 50,
    borderColor: colors.green500,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
});
