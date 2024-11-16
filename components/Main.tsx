import {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import Header from './Header.tsx';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface MainProps {
  children: ReactNode;
  backgroundColor: typeof Colors;
}

const Main = ({children, backgroundColor}: MainProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={[styles.headerContainer, backgroundColor]}>
          <Header grid={{isOn: false}} filter={{isOn: false}} />
        </View>
      </SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.contentsContainer}>
        {children}
      </ScrollView>
      <View style={styles.actionBarContainer}>
        <Text>액션바입니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  headerContainer: {
    height: 50,
  },
  contentsContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  actionBarContainer: {
    height: 50,
    backgroundColor: 'blue',
  },
});

export default Main;
