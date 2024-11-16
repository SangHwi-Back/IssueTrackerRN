import {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ActionBar from './ActionBar';

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
      <ActionBar />
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
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  contentsContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default Main;
