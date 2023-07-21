import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [profileImage, setProfileImage] = useState();

  const handleLogout = () => {
    // remove saved authentication credentials
    // navigate back to Authentication screen
    navigation.navigate("LoginScreen");
  };

  const handleSaveChanges = () => {
    // save changes to user profile
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://isorepublic.com/wp-content/uploads/2023/05/iso-republic-arizona-natural-landscape-768x512.jpg",
        }}
        style={styles.imgbackground}
      />
      <TouchableOpacity>
        <Image
          style={styles.profileImage}
          source={require("./../assets/profile.jpeg")}
        />
        <View //background under the plus sign on picture
          style={{
            width: 22,
            height: 22,
            borderRadius: 75,
            backgroundColor: "#fff",
            zIndex: 0,
            marginTop: -23,
            marginLeft: 52,
          }}
        >
          <Entypo name="circle-with-plus" size={20} color="blue" />
        </View>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>First Name</Text>
        <Text style={{ color: "red", marginLeft: 55, marginTop: -20 }}>*</Text>
        <TextInput
          style={styles.formInput}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.formLabel}>Last Name</Text>
        <Text style={{ color: "red", marginLeft: 55, marginTop: -20 }}>*</Text>
        <TextInput
          style={styles.formInput}
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.formLabel}>Email Address</Text>
        <Text style={{ color: "red", marginLeft: 72, marginTop: -20 }}>*</Text>
        <TextInput
          style={styles.formInput}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.formLabel}>Phone Number</Text>
        <TextInput
          style={styles.formInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Text style={styles.formLabel}>Mail Address</Text>
        <TextInput
          style={styles.formInput}
          value={mailAddress}
          onChangeText={setMailAddress}
        />
        <TouchableOpacity
          style={styles.saveChangesButton}
          onPress={handleSaveChanges}
        >
          <Text style={styles.saveChangesButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  imgbackground: {
    width: "100%",
    height: 120,
    borderBottomColor: "gray",
    zIndex: 0,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginTop: -40,
  },
  formContainer: {
    width: "80%",
    flex: 1,
    marginTop: 50,
  },
  formLabel: {
    fontSize: 11,
    fontWeight: "bold",
    borderBottomWidth: 0.2,
    borderColor: "gray",
  },
  formInput: {
    borderBottomW: 1,
    borderColor: "#ccc",
    padding: 5,
    marginBottom: 5,
  },
  saveChangesButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  saveChangesButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 3,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
