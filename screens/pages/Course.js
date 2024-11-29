import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { fetchYogaClasses } from "../../apis/Firebase";  // Ensure proper import

export default function Course({ navigation }) {
  const [yogaClasses, setYogaClasses] = useState([]); // State to store data
  const [searchText, setSearchText] = useState("");

  // Fetch data from Firebase on component mount
  useEffect(() => {
    fetchYogaClasses((data) => setYogaClasses(data)); // Fetch data and set it to state
  }, []);

  const filteredClasses = yogaClasses.filter((item) =>
    item.nameCourse.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderYogaClass = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.card,
        index % 2 === 0 ? styles.cardLeft : styles.cardRight,
      ]}
      onPress={() => navigation.navigate("ClassInstance", { courseId: item.id, nameCourse: item.nameCourse, dayOfWeek: item.dayOfWeek, timeOfCourse: item.timeOfCourse, capacity: item.capacity, duration: item.duration, price: item.price, type: item.type, cDescription: item.description })}
    >
      <Text style={styles.className}>{item.nameCourse}</Text>
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{item.duration} mins</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello guy!</Text>
      <Text style={styles.subtitle}>Have a great day</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search yoga class"
          placeholderTextColor={colors.green700}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color={colors.green700} />
        </TouchableOpacity>
      </View>

      {filteredClasses.length === 0 ? (
        <Text style={styles.noResultsText}>No results found</Text>
      ) : (
        <FlatList
          data={filteredClasses}
          renderItem={renderYogaClass}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
          ListHeaderComponent={<View style={{ height: 25 }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    marginTop: 50,
    fontSize: 49,
    fontWeight: "bold",
    color: colors.green500,
  },
  subtitle: {
    fontSize: 20,
    color: colors.green700,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.green700,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.green700,
    paddingVertical: 10,
  },
  searchButton: {
    padding: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: colors.green500,
    borderRadius: 30,
    padding: 25,
    marginBottom: 15,
    marginHorizontal: 7,
    maxWidth: '46%',
    color: colors.beige,
  },
  cardLeft: {
    marginTop: -15,
    marginBottom: 30,
  },
  cardRight: {
    marginBottom: -15,
    marginTop: 30,
  },
  className: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.beige,
  },
  durationContainer: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  durationText: {
    fontSize: 14,
    color: colors.green700,
    fontWeight: "bold",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.green700,
    marginTop: 20,
  },
});
