import {View} from 'react-native';
import {FC, useEffect, useState} from 'react';
import {SettingIcon, FilterIcon, GridIcon} from '../iconsSvg/CommonIcons.tsx';
import styles from './style.ts';
import FilterModal from '../Modal/Filter';

interface FilterModalState {
  isOn: boolean;
}

interface GridState {
  isOn: boolean;
}

interface HeaderProps {
  grid: GridState;
  filter: FilterModalState;
}

const Header: FC<HeaderProps> = ({grid, filter}: HeaderProps) => {
  const [gridState, setGridState] = useState<GridState>(grid);
  const [filterModalState, setFilterState] = useState<FilterModalState>(filter);

  useEffect(() => {}, [gridState, filterModalState]);

  const _gridButtonTapped = () => {
    setGridState(prevState => {
      return {isOn: !prevState.isOn};
    });
  };

  const _filterButtonTapped = () => {
    setFilterState(prevState => {
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
          setFilterState(newState);
        }}
        visibility={filterModalState.isOn}
      />
      <GridIcon onPress={_gridButtonTapped} style={styles.button} />
      <SettingIcon onPress={_settingButtonTapped} style={styles.button} />
    </View>
  );
};

export default Header;
