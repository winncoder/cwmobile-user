import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { fetchClassIntances } from "../../apis/Firebase";

export default function ClassInstance({ navigation, route }) {
  const { courseId, nameCourse, dayOfWeek, timeOfCourse, capacity, duration, price, type, cDescription } = route.params;
  const [classInstances, setClassInstances] = useState([]); // State để lưu trữ dữ liệu
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchClassIntances((data) =>
      setClassInstances(data.filter((item) => item.courseId === courseId)) // Lọc theo courseId
    );
  }, [courseId]);

  const filteredClasses = classInstances.filter((item) =>
    item.date.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderClassInstance = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ClassInstanceDetail", { classId: item.id, date: item.date, teacher: item.teacher, description: item.description })}>
      <View style={styles.classDetailsContainer}>
       <View>
        <Text style={styles.className}>* DATE</Text>
        <Text style={styles.classDate}>{item.date}</Text>
       </View>
       <View>
        <Text style={styles.teacherTitle}>Teacher</Text>
        <Text style={styles.teacherName}>{item.teacher}</Text>
       </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{nameCourse}</Text>
        
        {/* TouchableOpacity bọc phần Detail để điều hướng */}
        <TouchableOpacity 
          style={styles.subtitleContainer}
          onPress={() => {
            // Điều hướng sang CourseDetail và truyền các tham số
            navigation.navigate("CourseDetail", {
              courseId,
              nameCourse,
              dayOfWeek,
              timeOfCourse,
              capacity,
              duration,
              price,
              type,
              cDescription,
            });
          }}>
          <Text style={styles.subtitle}>Detail</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search class instance"
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
          renderItem={renderClassInstance}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    marginTop: 0,
    fontSize: 32,
    fontWeight: "bold",
    color: colors.green500,
    marginRight: 10,
  },
  subtitleContainer: {
    marginTop: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green500,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 13,
    color: colors.green500,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.green700,
    borderRadius: 12,
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    backgroundColor: colors.green500,
    borderRadius: 30,
    padding: 20,
    marginBottom: 15,
  },
  classDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    marginBottom: 10,
  },
  className: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.beige,
    flex: 1,
  },
  classDate: {
    fontSize: 20,
    color: colors.beige,
    fontWeight: "bold",
    borderRadius: 50,
    borderColor: colors.beige,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  teacherTitle: {
    borderRadius: 50,
    borderColor: colors.beige,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 13,
    color: colors.beige,
    marginBottom: 5,
    textAlign: "start",
  },
  teacherName: {
    fontSize: 20,
    color: colors.beige,
    fontWeight: "bold",
    textAlign: "start",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.green700,
    marginTop: 20,
  },
});
