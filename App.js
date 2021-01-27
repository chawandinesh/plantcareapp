import React from 'react';
import {View, Text} from 'react-native';
import Navigators from './src/navigation';
import Context from './src/screens/context';
export default function App() {
  return (
    <Context>
      <Navigators />
    </Context>
  );
}
