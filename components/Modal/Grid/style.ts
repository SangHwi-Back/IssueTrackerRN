import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    width: '95%',
    backgroundColor: '#fff',
    height: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  titleArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    height: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  gridIcon: {
    height: 70,
    width: 70,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
