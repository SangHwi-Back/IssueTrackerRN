import {View} from 'react-native';
import {FC, useEffect, useState} from 'react';
import {SettingIcon, FilterIcon, GridIcon} from '../iconsSvg/CommonIcons.tsx';
import styles from './style.ts';
import FilterModal from '../Modal/Filter';
import GridModal from '../Modal/Grid';
import SettingModal from '../Modal/Setting';

interface FilterModalState {
  isOn: boolean;
}

interface GridModalState {
  isOn: boolean;
}

interface SettingModalState {
  isOn: boolean;
}

interface HeaderProps {
  grid: GridModalState;
  filter: FilterModalState;
  setting: SettingModalState;
}

const Header: FC<HeaderProps> = ({grid, filter, setting}: HeaderProps) => {
  const [gridModalState, setGridModalState] = useState<GridModalState>(grid);
  const [filterModalState, setFilterModalState] = useState<FilterModalState>(filter);
  const [settingModalState, setSettingModalState] = useState<SettingModalState>(setting);

  useEffect(() => {}, [gridModalState, filterModalState]);

  const _gridButtonTapped = () => {
    setGridModalState(prevState => {
      return {...prevState, isOn: !prevState.isOn};
    });
  };

  const _filterButtonTapped = () => {
    setFilterModalState(prevState => {
      return {...prevState, isOn: !prevState.isOn};
    });
  };

  const _settingButtonTapped = () => {
    setSettingModalState(prevState => {
      return {...prevState, isOn: !prevState.isOn};
    });
  };

  return (
    <View style={styles.container}>
      <FilterIcon onPress={_filterButtonTapped} style={styles.button} />
      <FilterModal
        filterOnChange={state => {
          const newState = {...filterModalState, isOn: !state.isShowing};
          setFilterModalState(newState);
        }}
        visibility={filterModalState.isOn}
      />
      <GridIcon onPress={_gridButtonTapped} style={styles.button} />
      <GridModal
        gridOnChange={state => {
          const newState = {...gridModalState, isOn: !state.isShowing};
          setGridModalState(newState);
        }}
        visibility={gridModalState.isOn}
      />
      <SettingIcon onPress={_settingButtonTapped} style={styles.button} />
      <SettingModal
        settingOnChange={state => setSettingModalState({isOn: state.isShowing})}
        visibility={settingModalState.isOn}
      />
    </View>
  );
};

export default Header;
