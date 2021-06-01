import React from 'react';
import {AuthProvider} from './contexts/authContext';
import {RootNavigator} from './navigations/root-navigator';
const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;
