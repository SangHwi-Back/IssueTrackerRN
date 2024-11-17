import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 200,
    width: '95%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    paddingBottom: 8,
  },
  closeButton: {
    width: 20,
    height: 20,
    backgroundColor: '#0000ff',
    opacity: 0.5,
    color: '#fff',
  },
  item: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 4,
  },
  itemThumbnail: {
    borderRadius: 4,
    aspectRatio: 1.0,
    paddingHorizontal: 4,
  },
  itemText: {
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'center',
  },
});

export default styles;
