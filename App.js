import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
// import TabNavigator from "./navigators/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
