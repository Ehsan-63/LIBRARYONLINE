import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    // perform authentication with email and password
    // then navigate to home screen

    // Check if email and password are valid
    if (email === "" && password === "") {
      // Save authentication credentials
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);

      // Navigate to home screen
      navigation.navigate("Home");
    } else {
      // Login failed
      setErrorMsg("Invalid email or password");
    }
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate("RegisterScreen");
  };

  // Check if credentials are already saved when the screen mounts
  useEffect(() => {
    const checkCredentials = async () => {
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");

      if (email && password) {
        navigation.navigate("Home");
      }
    };

    checkCredentials();
  }, []);

  // Remove credentials when the user logs out
  const handleLogout = async () => {
    // Remove saved authentication credentials
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("password");

    // Navigate back to Authentication screen
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        source={{
          uri: "https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      >
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Button title="Login" onPress={handleLogin} />
          <Button title="Sign up" onPress={handleRegister} />
          {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    zIndex: 1,
  },
  form: {
    width: "80%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 3,
  },
  signUpButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 3,
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
