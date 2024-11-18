import {FC, useState} from 'react';
import {Button, Modal, Pressable, Text, View} from 'react-native';

type RadioSettingState = {isOn: boolean};
type ParentSettingState = {childState: SettingRowState[]};
type CheckSettingState = {isOn: boolean};

interface SettingRowState {
  key: string;
  style: SettingStyle;
  name: string;
  state: RadioSettingState | ParentSettingState | CheckSettingState;
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
        state: {isOn: false} as RadioSettingState,
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
        name: 'Checkbox 스타일',
        state: {childState: []} as ParentSettingState,
      },
    ],
    isShowing: false,
  });

  const _onCloseButton = () => {
    setStateSetting(prevState => {
      const newState = {...prevState, isShowing: !prevState.isShowing};
      props.settingOnChange(newState);
      return newState;
    });
  };

  // const _onPressSetting = () => {};

  // const _onPressValueOfSetting = () => {};

  function getRows(): SettingRowState[] {
    if (state.currentKey) {
      let currentState = state.rowState;

      function isParentState(value: any): value is ParentSettingState {
        return ['childState'].includes(value);
      }

      while (true) {
        const result = state.rowState.find(
          value => value.key === state.currentKey,
        );

        if (result && isParentState(result.state)) {
          currentState = result.state.childState;
        } else {
          break;
        }
      }

      return currentState;
    } else {
      return [];
    }
  }

  return (
    <Modal
      animationType={'slide'}
      visible={props.visibility}
      transparent={true}
      onRequestClose={_onCloseButton}>
      <Pressable
        onPress={_onCloseButton}
        style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff',
            position: 'absolute',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>설정</Text>
            <Button title={'X'} onPress={_onCloseButton} />
          </View>

          {getRows().map(item => {
            const valueArea = () => {
              switch (item.style) {
                case SettingStyle.check:
                  return <input type={'checkbox'} />;
                case SettingStyle.parent:
                  return <Text>{'>'}</Text>;
                case SettingStyle.radio:
                  return <input type={'radio'} />;
              }
            };

            return (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text>{item.name}</Text>
                {valueArea()}
              </View>
            );
          })}
        </View>
      </Pressable>
    </Modal>
  );
};

export default SettingModal;
