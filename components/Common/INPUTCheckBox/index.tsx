import {FC, useState} from 'react';
import styles from './style.ts';
import {TouchableOpacity, View} from 'react-native';
import SVGBlackChk from './SVGBlackChk.tsx';
import SVGGrayChk from './SVGGrayChk.tsx';

interface INPUTCheckBoxProps {
  name: string;
}

interface INPUTCheckBoxState {
  isOn: boolean;
}

const INPUTCheckBox: FC<INPUTCheckBoxProps> = (props: INPUTCheckBoxProps) => {
  const [state, setState] = useState<INPUTCheckBoxState>({isOn: false});
  return (
    <TouchableOpacity
      key={props.name}
      style={styles.container}
      onPress={() => {
        setState({...state, isOn: !state.isOn});
      }}>
      <View style={styles.thumbnail}>
        {state.isOn ? <SVGBlackChk /> : <SVGGrayChk />}
      </View>
    </TouchableOpacity>
  );
};

export default INPUTCheckBox;
