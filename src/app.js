import { StackNavigator } from 'react-navigation';
import { WelcomePage } from './pages/welcome';
import { DashboardPage } from './pages/dashboard';

export const MenchesterGames = StackNavigator(
  {
    Welcome: {screen: WelcomePage},
    Dashboard: {screen: DashboardPage}
  },
  {
    headerMode: 'none'
  }
);