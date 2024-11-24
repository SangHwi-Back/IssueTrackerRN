import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  radioOn: {
// {backgroundColor: props.isOn ? '#000' : 'none'}
    backgroundColor: '#000',
  },
  radioOff: {
    backgroundColor: 'none',
  },
});

export default styles;
