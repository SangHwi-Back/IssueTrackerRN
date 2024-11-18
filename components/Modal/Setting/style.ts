import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '95%',
    height: 400,
    padding: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
