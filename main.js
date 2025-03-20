import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DeviceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const homeName = route.params?.homeName || "My Home";
  const newDevice = route.params?.newDevice;

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    if (newDevice) {
      setDevices((prevDevices) => {
        if (!prevDevices.some((device) => device.name === newDevice.name)) {
          return [...prevDevices, newDevice]; // Append new device
        }
        return prevDevices; // Avoid duplicates
      });
    }
  }, [newDevice]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (route.params?.newDevice) {
        setDevices((prevDevices) => {
          if (!prevDevices.some((device) => device.name === route.params.newDevice.name)) {
            return [...prevDevices, route.params.newDevice];
          }
          return prevDevices;
        });
      }
    });

    return unsubscribe; // Cleanup listener on unmount
  }, [navigation, route.params?.newDevice]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{homeName}</Text>
      </View>

      {/* All Devices Button */}
      <TouchableOpacity style={styles.allDevices}>
        <Text style={styles.allDevicesText}>All Devices</Text>
      </TouchableOpacity>

      {/* Device List */}
      <ScrollView contentContainerStyle={styles.deviceContainer}>
        {devices.length > 0 ? (
          devices.map((device, index) => (
            <TouchableOpacity
              key={index}
              style={styles.deviceButton}
              onPress={() =>
                navigation.navigate(device.name === "Smart Fan" ? "fancontrolscreen" : "controlbulbscreen")
              }
            >
              <Ionicons
                name={device.name === "Smart Fan" ? "fan" : "bulb"}
                size={24}
                color={device.name === "Smart Fan" ? "blue" : "yellow"}
              />
              <Text style={styles.deviceText}>{device.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <>
          </>
        )}

        {/* Add Device Section */}
        <View style={styles.deviceContainer}>
          {/* Smart Bulb */}
          <TouchableOpacity style={styles.deviceCard} onPress={() => navigation.navigate("connectbulb")}>
            <Image source={require("./assets/bulb.png")} style={styles.deviceImage} />
            <Text style={styles.deviceText}>Smart Bulb</Text>
          </TouchableOpacity>

          {/* Smart Fan */}
          <TouchableOpacity style={styles.deviceCard} onPress={() => navigation.navigate("connectfan")}>
            <Image source={require("./assets/fan.png")} style={styles.deviceImage} />
            <Text style={styles.deviceText}>Smart Fan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="blue" />
        <TouchableOpacity onPress={() => navigation.navigate("profilescreen")}>
          <Ionicons name="person-outline" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#f8f9fb" },
  headerContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 25, fontWeight: "bold" },
  allDevices: { marginTop: 18 },
  allDevicesText: { fontSize: 20, fontWeight: "bold", color: "black" },
  deviceContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 20 },
  noDeviceText: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20 },
  deviceButton: {
    padding: 20,
    backgroundColor: "#ddd",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 180,
    justifyContent: "center",
  },
  deviceText: { marginLeft: 10, fontSize: 18, fontWeight: "bold" },
  addDeviceTitle: { fontSize: 20, fontWeight: "bold", marginTop: 30, textAlign: "center" },
  deviceCard: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  deviceImage: { width: 80, height: 80, marginBottom: 10 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default DeviceScreen;
