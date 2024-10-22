import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import FarmerDashboardScreen from './screens/FarmerDashboardScreen';
import StudentDashboardScreen from './screens/StudentDashboardScreen';
import WeatherFocastsScreen from './screens/WeatherForecastsScreen';
import MarketPricesScreen from './screens/MarketPricesScreen';
import FarmingTipsScreen from './screens/FarmingTipsScreen';
import NewsScreen from './screens/NewsScreen';
import StudyGuideScreen from './screens/StudyGuideScreen';
import StudyTechniquesScreen from './screens/StudyTechniquesScreen';
import TutorialsScreen from './screens/TutorialsScreen';
import MathematicsScreen from './screens/MathematicsScreen';
import PhysicsScreen from './screens/PhysicsScreen';
import ChemistryScreen from './screens/ChemistryScreen';
import EnglishScreen from './screens/EnglishScreen';
import BiologyScreen from './screens/BiologyScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="FarmerDashboard" component={FarmerDashboardScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboardScreen} />
        <Stack.Screen name="WeatherForecasts" component={WeatherFocastsScreen} />
        <Stack.Screen name="MarketPrices" component={MarketPricesScreen} />
        <Stack.Screen name="FarmingTips" component={FarmingTipsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="StudyGuide" component={StudyGuideScreen} />
        <Stack.Screen name="StudyTechniques" component={StudyTechniquesScreen} />
        <Stack.Screen name="Tutorials" component={TutorialsScreen} />
        <Stack.Screen name="Mathematics" component={MathematicsScreen} />
        <Stack.Screen name="Physics" component={PhysicsScreen} />
        <Stack.Screen name="Chemistry" component={ChemistryScreen} />
        <Stack.Screen name="English" component={EnglishScreen} />
        <Stack.Screen name="Biology" component={BiologyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
