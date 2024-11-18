import {View} from 'react-native';
import {FC, useEffect, useState} from 'react';
import {SettingIcon, FilterIcon, GridIcon} from '../iconsSvg/CommonIcons.tsx';
import styles from './style.ts';
import FilterModal from '../Modal/Filter';
import GridModal from '../Modal/Grid/GridModal.tsx';

interface FilterModalState {
  isOn: boolean;
}

interface GridModalState {
  isOn: boolean;
}

interface HeaderProps {
  grid: GridModalState;
  filter: FilterModalState;
}

const Header: FC<HeaderProps> = ({grid, filter}: HeaderProps) => {
  const [gridModalState, setGridModalState] = useState<GridModalState>(grid);
  const [filterModalState, setFilterModalState] = useState<FilterModalState>(filter);

  useEffect(() => {}, [gridModalState, filterModalState]);

  const _gridButtonTapped = () => {
    setGridModalState(prevState => {
      return {isOn: !prevState.isOn};
    });
  };

  const _filterButtonTapped = () => {
    setFilterModalState(prevState => {
      return {isOn: !prevState.isOn};
    });
  };

  const _settingButtonTapped = () => {};

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
    </View>
  );
};

export default Header;
