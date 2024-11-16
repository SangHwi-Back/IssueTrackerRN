import {StyleSheet, View} from 'react-native';
import {FC, useEffect, useState} from 'react';
import {SettingIcon, FilterIcon, GridIcon} from './iconsSvg/CommonIcons.tsx';

interface FilterState {
  isOn: boolean;
}

interface GridState {
  isOn: boolean;
}

interface HeaderProps {
  grid: GridState;
  filter: FilterState;
}

const Header: FC<HeaderProps> = ({grid, filter}: HeaderProps) => {
  const [gridState, setGridState] = useState<GridState>(grid);
  const [filterState, setFilterState] = useState<FilterState>(filter);

  useEffect(() => {}, [gridState, filterState]);

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
      <FilterIcon onPress={_filterButtonTapped} />
      <GridIcon onPress={_gridButtonTapped} />
      <SettingIcon onPress={_settingButtonTapped} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {width: 35, height: 35, borderRadius: 5},
});

export default Header;
