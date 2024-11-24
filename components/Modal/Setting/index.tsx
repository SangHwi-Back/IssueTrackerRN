import {FC, useState} from 'react';
import {
  Button,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style.ts';
import INPUTCheckBox, {INPUTCheckBoxState} from '../../Common/INPUTCheckBox';
import INPUTRadioButton, {INPUTRadioState} from '../../Common/INPUTRadioButton';

// MARK: - Navigation Start
interface NavigationIconProps {
  name: string;
  onClick: () => void;
}

const NavigationText: FC<NavigationIconProps> = navigationProps => {
  return (
    <TouchableWithoutFeedback
      style={styles.item}
      onPress={navigationProps.onClick}>
      <Text>
        {navigationProps.name}
        <Text style={styles.navigationText}>{'>'}</Text>
      </Text>
    </TouchableWithoutFeedback>
  );
};
// MARK: - Navigation End

type INPUTState = RadioSettingState | ParentSettingState | CheckSettingState;

type RadioSettingState = {isOn: boolean};
const isRadioSettingState = (state: any): state is RadioSettingState => {
  return typeof state === 'object' && 'isOn' in state;
};

type ParentSettingState = {childState: SettingRowState[]};
const isParentSettingState = (state: any): state is ParentSettingState => {
  return (
    typeof state === 'object' &&
    'childState' in state &&
    Array.isArray(state.childState) &&
    state.childState.every((item: any) => {
      return 'key' in item && 'style' in item && 'name' in item;
    })
  );
};

type CheckSettingState = {isOn: boolean};
const isCheckSettingState = (state: any): state is CheckSettingState => {
  return typeof state === 'object' && 'isOn' in state;
};

interface SettingRowState {
  key: string;
  style: SettingStyle;
  name: string;
  state: INPUTState;
}

enum SettingStyle {
  radio,
  parent,
  check,
}

interface SettingModalProps {
  settingOnChange: (state: SettingModalState) => void;
  visibility: boolean;
}

interface SettingModalState {
  currentKey?: string;
  rowState: SettingRowState[];
  isShowing: boolean;
}

const SettingModal: FC<SettingModalProps> = (props: SettingModalProps) => {
  const [state, setStateSetting] = useState<SettingModalState>({
    currentKey: undefined,
    rowState: [
      {
        key: '0',
        style: SettingStyle.check,
        name: 'Checkbox 스타일',
        state: {isOn: false} as CheckSettingState,
      },
      {
        key: '1',
        style: SettingStyle.radio,
        name: 'Radio 스타일1',
        state: {isOn: true} as RadioSettingState,
      },
      {
        key: '2',
        style: SettingStyle.radio,
        name: 'Radio 스타일2',
        state: {isOn: false} as RadioSettingState,
      },
      {
        key: '3',
        style: SettingStyle.parent,
        name: 'Navigation 스타일',
        state: {childState: []} as ParentSettingState,
      },
    ],
    isShowing: props.visibility,
  });

  const _onCloseButton = () => {
    const newState = {...state, isShowing: state.isShowing};
    setStateSetting(newState);
    props.settingOnChange(newState);
  };

  function getRows(): SettingRowState[] {
    if (state.currentKey) {
      const result = state.rowState.find(
        value => value.key === state.currentKey,
      );

      if (result && isParentSettingState(result.state)) {
        return result.state.childState;
      } else {
        return [];
      }
    } else {
      return state.rowState;
    }
  }

  return (
    <Modal
      animationType={'slide'}
      visible={props.visibility}
      transparent={true}
      onRequestClose={_onCloseButton}>
      <Pressable onPress={_onCloseButton} style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.titleArea}>
            <Text style={styles.title}>설정</Text>
            <Button title={'X'} onPress={_onCloseButton} />
          </View>

          {getRows().map(item => {
            switch (item.style) {
              case SettingStyle.check:
                const checkBoxOnClick = (checkBoxState: INPUTCheckBoxState) => {
                  setStateSetting(prevState => {
                    let rowState = prevState.rowState;

                    rowState = rowState.map((value, index) => {
                      if (
                        value.key === checkBoxState.key &&
                        isCheckSettingState(value.state)
                      ) {
                        (rowState[index].state as CheckSettingState).isOn =
                          !value.state.isOn;
                      }
                      return rowState[index];
                    });

                    return {...prevState, rowState: rowState};
                  });
                };

                return (
                  <View key={item.key} style={styles.item}>
                    <Text>{item.name}</Text>
                    <INPUTCheckBox name={item.key} onClick={checkBoxOnClick} />
                  </View>
                );

              case SettingStyle.radio:
                const radioOnClick = (radioState: INPUTRadioState) => {
                  setStateSetting(prevState => {
                    let rowState = prevState.rowState;

                    for (let i = 0; i < rowState.length; i++) {
                      if (isRadioSettingState(rowState[i].state)) {
                        (rowState[i].state as RadioSettingState).isOn =
                          radioState.key === rowState[i].key;
                      }
                    }

                    return {...prevState, rowState: rowState};
                  });
                };

                return (
                  <View key={item.key} style={styles.item}>
                    <Text>{item.name}</Text>
                    <INPUTRadioButton
                      name={item.key}
                      isOn={(item.state as RadioSettingState).isOn}
                      onPressButton={radioOnClick}
                    />
                  </View>
                );
              case SettingStyle.parent:
                return (
                  <NavigationText
                    key={item.key}
                    name={item.name}
                    onClick={() => {
                      console.log('hello');
                    }}
                  />
                );
            }
          })}
        </View>
      </Pressable>
    </Modal>
  );
};

export default SettingModal;
