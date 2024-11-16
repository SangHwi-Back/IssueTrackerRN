import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import SVGGrid from './SVGGrid.tsx';
import SVGFilter from './SVGFilter.tsx';
import SVGSetting from './SVGSetting.tsx';
const defaultWidth: number = 35;
const defaultHeight: number = 35;

const styles = StyleSheet.create({
  commonTouchArea: {
    width: 40,
    height: 40,
  },
});

/* SETTING ICON START */

interface SettingIconProps {
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const SettingIcon: FC<SettingIconProps> = ({
  width = defaultWidth,
  height = defaultHeight,
  onPress,
}: SettingIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        width: width > defaultWidth ? width : styles.commonTouchArea.width,
        height: height > defaultHeight ? height : styles.commonTouchArea.height,
      }}>
      <SVGSetting/>
    </TouchableOpacity>
  );
};

/* FILTER ICON START */

interface FilterIconProps {
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const FilterIcon: FC<FilterIconProps> = ({
  width = defaultWidth,
  height = defaultHeight,
  onPress,
}: FilterIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        width: width > defaultWidth ? width : styles.commonTouchArea.width,
        height: height > defaultHeight ? height : styles.commonTouchArea.height,
      }}>
      <SVGFilter/>
    </TouchableOpacity>
  );
};

/* GRID ICON START*/

interface GridIconProps {
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const GridIcon: FC<GridIconProps> = ({
  width = defaultWidth,
  height = defaultHeight,
  onPress,
}: GridIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        width: width > defaultWidth ? width : styles.commonTouchArea.width,
        height: height > defaultHeight ? height : styles.commonTouchArea.height,
      }}>
      <SVGGrid/>
    </TouchableOpacity>
  );
};
