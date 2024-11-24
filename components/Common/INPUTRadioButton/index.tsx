import {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style.ts';

interface INPUTRadioProps {
  name: string;
  isOn: boolean;
  onPressButton: (state: INPUTRadioState) => void;
}

export interface INPUTRadioState {
  isOn: boolean;
  key: string;
}

const INPUTRadioButton: FC<INPUTRadioProps> = (props: INPUTRadioProps) => {
  const [state, setState] = useState<INPUTRadioState>({
    isOn: false,
    key: props.name,
  });
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
          // eslint-disable-next-line react-native/no-inline-styles
          {backgroundColor: props.isOn ? '#000' : 'none'},
        ]}
      />
    </TouchableOpacity>
  );
};

export default INPUTRadioButton;
