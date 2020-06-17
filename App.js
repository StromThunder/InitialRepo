import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import SecondScreen from "./src/screens/SecondScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import colorScreen from "./src/screens/ColorsScreen";
import ColorBlockScreen from "./src/screens/ColorBlock";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Nextpage: SecondScreen,
    ListPage:ListScreen,
    ImagePage:ImageScreen,    
    ColorPage:colorScreen,
    ColorBlockPage:ColorBlockScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
