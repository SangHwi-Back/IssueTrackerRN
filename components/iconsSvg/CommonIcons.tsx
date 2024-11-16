import {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import SVGGrid from './SVGGrid.tsx';
import SVGFilter from './SVGFilter.tsx';
import SVGSetting from './SVGSetting.tsx';

const touchAreaSizeValue: number = 40;
const defaultWidth: number = 35;
const defaultHeight: number = 35;

/* SETTING ICON START */

interface SettingIconProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
  onPress?: (() => void) | undefined;
}

function getTouchableStyle(
  width: number | undefined | string,
  height: number | undefined | string,
) {
  function getValue(value: number | string | undefined) {
    if (typeof value === 'undefined') {
      return 0;
    } else if (typeof value === 'string') {
      if (value.endsWith('%')) {
        const percent = parseInt(value.substring(0, value.length - 1), 10);
        const percentValue = touchAreaSizeValue * (percent / 100);
        return Math.max(percentValue, defaultWidth);
      } else {
        return defaultWidth;
      }
    } else {
      return Math.max(value, defaultWidth);
    }
  }

  const touchableStyle: ViewStyle = {
    width: Math.max(getValue(width), touchAreaSizeValue),
    height: Math.max(getValue(height), touchAreaSizeValue),
    justifyContent: 'center',
    alignItems: 'center',
  };
  return touchableStyle;
}

export const SettingIcon: FC<SettingIconProps> = ({
  width = defaultWidth,
  height = defaultHeight,
  style = {},
  onPress,
}: SettingIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => (onPress === undefined ? () => {} : onPress())}
      style={[getTouchableStyle(width, height), style]}>
      <SVGSetting />
    </TouchableOpacity>
  );
};

/* FILTER ICON START */

interface FilterIconProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
  onPress?: () => void;
}

export const FilterIcon: FC<FilterIconProps> = ({
  width = defaultWidth,
  height = defaultHeight,
  style = {},
  onPress,
}: FilterIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => (onPress === undefined ? () => {} : onPress())}
      style={[getTouchableStyle(width, height), style]}>
      <SVGFilter />
    </TouchableOpacity>
  );
};

/* GRID ICON START*/

interface GridIconProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
  onPress?: () => void;
}

export const GridIcon: FC<GridIconProps> = ({
  width = defaultWidth,
  height = defaultHeight,
  style = {},
  onPress,
}: GridIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => (onPress === undefined ? () => {} : onPress())}
      style={[getTouchableStyle(width, height), style]}>
      <SVGGrid />
    </TouchableOpacity>
  );
};
