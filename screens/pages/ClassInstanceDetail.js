import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function ClassInstanceDetail({ navigate, route }) {
  const { date, teacher, description } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Class Instance Detail</Text>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.detailText}>{date}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Teacher:</Text>
          <Text style={styles.detailText}>{teacher}</Text>
        </View>

        <View style={styles.detailTextContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.detailText}>{description}</Text>
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
