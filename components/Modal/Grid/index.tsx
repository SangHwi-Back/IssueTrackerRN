import {FC, useState} from 'react';
import {
  Button,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style.ts';
import SVGGridOne from './SVGGridOne.tsx';
import SVGGridTwo from './SVGGridTwo.tsx';
import SVGGridThree from './SVGGridThree.tsx';

interface GridModalProps {
  gridOnChange: (sate: GridState) => void;
  visibility: boolean;
}

enum ColumnState {
  one,
  two,
  three,
}

interface GridState {
  isShowing: boolean;
  columnState: ColumnState;
}

const GridModal: FC<GridModalProps> = (props: GridModalProps) => {
  const [_, setGridState] = useState<GridState>({
    isShowing: false,
    columnState: ColumnState.two,
  });

  const _onPressButton = (columnState: ColumnState) => {
    setGridState(prevState => {
      const newState = {...prevState, columnState: columnState};
      props.gridOnChange(newState);
      return newState;
    });
  };

  const _onPressClose = () => {
    setGridState(prevState => {
      const newState = {...prevState, isShowing: !prevState.isShowing};
      props.gridOnChange(newState);
      return newState;
    });
  };

  const itemModels = [
    {
      state: ColumnState.one,
      thumbnail: <SVGGridOne />,
      onPress: () => {
        _onPressButton(ColumnState.one);
      },
    },
    {
      state: ColumnState.two,
      thumbnail: <SVGGridTwo />,
      onPress: () => {
        _onPressButton(ColumnState.two);
      },
    },
    {
      state: ColumnState.three,
      thumbnail: <SVGGridThree />,
      onPress: () => {
        _onPressButton(ColumnState.three);
      },
    },
  ];

  return (
    <Modal
      animationType={'slide'}
      visible={props.visibility}
      transparent={true}
      onRequestClose={_onPressClose}>
      <Pressable style={styles.overlay} onPress={_onPressClose}>
        <View style={styles.container}>
          <View style={styles.titleArea}>
            <Text style={styles.title}>그리드</Text>
            <Button title={'X'} onPress={_onPressClose} />
          </View>

          <View style={styles.contents}>
            {itemModels.map(item => {
              return (
                <TouchableOpacity
                  key={item.state}
                  style={styles.gridIcon}
                  onPress={item.onPress}>
                  {item.thumbnail}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default GridModal;
