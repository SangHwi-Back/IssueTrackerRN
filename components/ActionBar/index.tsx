import {Text, View} from 'react-native';
import styles from './style.ts';

const ActionBar = () => {
  // DeviceInfo 를 사용하면 빈 화면이 되어 버림. 이유는 모르겠음.
  // const brand = DeviceInfo.getBrand().toLowerCase();
  // const iosVersion = parseInt(DeviceInfo.getSystemVersion(), 10);
  // let isHomeButtonExist = false;
  // if (iosVersion < 11 && brand === 'apple') {
  //   isHomeButtonExist = true;
  // }
  //
  // let bottomStyle: ViewStyle = {};
  // if (isHomeButtonExist) {
  //   bottomStyle = { bottom: 1 };
  // }
  return (
    <View style={styles.actionBarContainer}>
      <Text>액션바입니다.</Text>
    </View>
  );
};

export default ActionBar;
