/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme, Text} from 'react-native';
import Main from './components/Main';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Main backgroundColor={backgroundStyle}>
      <Text>테스트 중입니다.</Text>
    </Main>
  );
}

export default App;
