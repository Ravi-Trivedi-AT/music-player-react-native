import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {icons} from '../constants/icons';
import {sizes} from '../constants/sizes';
import {colors} from '../constants/colors';
interface PlayPauseProps {
  isPlaying: boolean;
}
export const PreviousButton = () => {
  return (
    <TouchableOpacity>
      <Foundation
        name={icons.PreviousIcon}
        size={sizes[10]}
        color={colors.primary['100']}
      />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = ({isPlaying}: PlayPauseProps) => {
  return (
    <TouchableOpacity>
      <AntDesign
        name={isPlaying ? icons.PauseIcon : icons.PlayIcon}
        size={sizes[10]}
        color={colors.primary['100']}
      />
    </TouchableOpacity>
  );
};
export const ForwardButton = () => {
  return (
    <TouchableOpacity>
      <Foundation
        name={icons.Next}
        size={sizes[10]}
        color={colors.primary['100']}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
