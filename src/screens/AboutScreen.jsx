import React from 'react';
import {Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({}) => {
  return (
    <MainLayout>
      <>
        <Text>Dawson's Awesome To Do List App</Text>
        <Text>written by:Ryan Connell</Text>
        <Text>Version: 1.0</Text>
      </>
    </MainLayout>
  );
};

export default AboutScreen;