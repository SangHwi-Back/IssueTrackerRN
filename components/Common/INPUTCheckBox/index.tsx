import {FC, useState} from 'react';
import styles from './style.ts';
import {TouchableOpacity, View} from 'react-native';
import SVGBlackChk from './SVGBlackChk.tsx';
import SVGGrayChk from './SVGGrayChk.tsx';

interface INPUTCheckBoxProps {
  name: string;
  onClick: (state: INPUTCheckBoxState) => void;
}

export interface INPUTCheckBoxState {
  isOn: boolean;
  key: string;
}

const INPUTCheckBox: FC<INPUTCheckBoxProps> = (props: INPUTCheckBoxProps) => {
  const [state, setState] = useState<INPUTCheckBoxState>({isOn: false, key: props.name});
  return (
    <TouchableOpacity
      key={props.name}
      style={styles.container}
      onPress={() => {
        setState((prevState) => {
          const newState = {...prevState, isOn: !state.isOn};
          props.onClick(newState);
          return newState;
        });
      }}>
      <View style={styles.thumbnail}>
        {state.isOn ? <SVGBlackChk /> : <SVGGrayChk />}
      </View>
    </TouchableOpacity>
  );
};

export default INPUTCheckBox;
