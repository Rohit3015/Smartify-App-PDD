import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const userprofile = ({ navigation }) => {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("User@gmail.com");
  const [phone, setPhone] = useState("+91");
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>My Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWithIcon}>
          <Ionicons name="mail-outline" size={18} color="gray" />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        </View>

        <View style={styles.inputWithIcon}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" }}
            style={styles.flagIcon}
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginLeft: 15 },
  profileImageContainer: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 90, height: 90, borderRadius: 50 },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "blue",
    borderRadius: 15,
    padding: 5,
  },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "bold", marginBottom: 5, color: "gray" },
  input: { backgroundColor: "#f8f8f8", padding: 10, borderRadius: 8, fontSize: 16 },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 2,
    borderRadius: 100,
  },
});

export default userprofile;
