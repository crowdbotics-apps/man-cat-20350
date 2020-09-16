import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps102619Navigator from '../features/Maps102619/navigator';
import Add-Item102618Navigator from '../features/Add-Item102618/navigator';
import Maps102614Navigator from '../features/Maps102614/navigator';
import UserProfile102610Navigator from '../features/UserProfile102610/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps102619: { screen: Maps102619Navigator },
Add-Item102618: { screen: Add-Item102618Navigator },
Maps102614: { screen: Maps102614Navigator },
UserProfile102610: { screen: UserProfile102610Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
