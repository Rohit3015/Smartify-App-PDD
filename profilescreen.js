import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={styles.headerIcons}>
        </View>
      </View>

      {/* User Info Section */}
      <TouchableOpacity 
        style={styles.userInfo} 
        onPress={() => navigation.navigate("userprofile")} 
      >
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.userImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>User</Text>
          <Text style={styles.userEmail}>User@gmail.com</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>



        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={() => navigation.navigate("logout")}
        >
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons 
          name="home-outline" 
          size={28} 
          color="gray" 
          onPress={() => navigation.navigate("main")} // Navigate to Main Screen
        />
        <Ionicons name="person" size={28} color="blue" />
      </View>
    </View>
  );
};

// Function to render each list item
const renderListItem = (title, iconName) => (
  <TouchableOpacity style={styles.listItem}>
    <Ionicons name={iconName} size={24} color="black" />
    <Text style={styles.listText}>{title}</Text>
    <Ionicons name="chevron-forward" size={24} color="gray" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingHorizontal: 20 
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  headerIcons: { flexDirection: "row" },
  userInfo: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#f8f9fb", 
    borderRadius: 10, 
    margin: 10 
  },
  userImage: { width: 50, height: 50, borderRadius: 25 },
  userDetails: { flex: 1, marginLeft: 15 },
  userName: { fontSize: 18, fontWeight: "bold" },
  userEmail: { color: "gray" },
  listContainer: { marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 20, marginLeft: 20, color: "gray" },
  listItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: "#f0f0f0" 
  },
  listText: { flex: 1, fontSize: 16, marginLeft: 10 },
  logoutButton: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 5, 
    margin: 15 
  },
  logoutText: { color: "red", fontSize: 16, marginLeft: 10, fontWeight: "bold" },
  bottomNav: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    padding: 15, 
    backgroundColor: "#fff", 
    position: "absolute", 
    bottom: 0, 
    left: 0, 
    right: 0 
  }
});

export default ProfileScreen;
