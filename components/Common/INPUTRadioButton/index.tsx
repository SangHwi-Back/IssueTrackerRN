import {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style.ts';

interface INPUTRadioProps {
  name: string;
  onPressButton: (state: INPUTRadioState) => void;
}

interface INPUTRadioState {
  isOn: boolean;
}

const INPUTRadioButton: FC<INPUTRadioProps> = (props: INPUTRadioProps) => {
  const [state, setState] = useState<INPUTRadioState>({isOn: false});
  return (
    <TouchableOpacity
      key={props.name}
      style={styles.container}
      onPress={() => {
        const newState: INPUTRadioState = {...state, isOn: !state.isOn};
        props.onPressButton(newState);
        setState(newState);
      }}>
      <View
        style={[
          styles.thumbnail,
          {backgroundColor: state.isOn ? '#000' : 'none'},
        ]}
      />
    </TouchableOpacity>
  );
};

export default INPUTRadioButton;
