import {
  Button,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FC, ReactNode, useState} from 'react';
import styles from './style.ts';
import SVGDateDesc from './SVGDateDesc.tsx';
import SVGEng from './SVGEng.tsx';
import SVGEnded from './SVGEnded.tsx';

interface FilterModalProps {
  filterOnChange: (state: FilterState) => void;
  visibility: boolean;
}

interface FilterState {
  isShowing: boolean;
  isDateDesc: boolean;
  isEng: boolean;
  isEnded: boolean;
}

const FilterModal: FC<FilterModalProps> = (props: FilterModalProps) => {
  const [_, setFilterState] = useState<FilterState>({
    isShowing: false,
    isDateDesc: false,
    isEng: false,
    isEnded: false,
  });

  const _onPressDateArea = () => {
    setFilterState(prevState => {
      const newState = {...prevState, isDateDesc: !prevState.isDateDesc};
      props.filterOnChange(newState);
      return newState;
    });
  };

  const _onPressEngArea = () => {
    setFilterState(prevState => {
      const newState = {...prevState, isEng: !prevState.isEng};
      props.filterOnChange(newState);
      return newState;
    });
  };

  const _onPressEndedArea = () => {
    setFilterState(prevState => {
      const newState = {...prevState, isEnded: !prevState.isEnded};
      props.filterOnChange(newState);
      return newState;
    });
  };

  const _onPressClose = () => {
    setFilterState(prevState => {
      const newState = {...prevState, isShowing: !prevState.isShowing};
      props.filterOnChange(newState);
      return newState;
    });
  };

  const itemModels: {
    name: string;
    thumbnail: ReactNode;
    onPress: () => void;
  }[] = [
    {
      name: '날짜 내림차순',
      thumbnail: <SVGDateDesc />,
      onPress: _onPressDateArea,
    },
    {name: '영어만 보이기', thumbnail: <SVGEng />, onPress: _onPressEngArea},
    {
      name: '이미 끝난 이슈',
      thumbnail: <SVGEnded />,
      onPress: _onPressEndedArea,
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
            <Text style={styles.title}>필터</Text>
            <Button title={'X'} onPress={_onPressClose} />
          </View>

          {itemModels.map(item => {
            return (
              <TouchableOpacity
                key={item.name}
                style={styles.item}
                onPress={item.onPress}>
                
                <View style={styles.itemThumbnail}>{item.thumbnail}</View>
                <Text>{item.name}</Text>
                
              </TouchableOpacity>
            );
          })}
        </View>
      </Pressable>
    </Modal>
  );
};

export default FilterModal;
