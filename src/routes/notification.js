import { StackNavigator } from 'react-navigation';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import navigationOptions from './navigationOptions';

const NotifStack = StackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
    },
  },
  {
    navigationOptions: navigationOptions(83),
  },
);

export default NotifStack;
