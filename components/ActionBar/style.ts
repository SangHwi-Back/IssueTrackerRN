import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  actionBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    left: 10,
    right: 10,
    bottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF'
  }
});

export default styles;
