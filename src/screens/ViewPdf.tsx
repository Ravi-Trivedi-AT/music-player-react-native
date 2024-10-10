import {
  Alert,
  Button,
  Dimensions,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {RootNativeStackParamList} from '../types/navigation';
import RNFS from 'react-native-fs';

import Pdf from 'react-native-pdf';
interface ViewPdfProps {
  navigation: NavigationProp<RootNativeStackParamList>;
}
const ViewPdf = ({navigation}: ViewPdfProps) => {
  const source = {
    uri: 'https://www.w3.org/WAI/WCAG21/working-examples/pdf-table/table.pdf',
    cache: false,
  };

  //   useEffect(() => {
  //     const requestPermissions = async () => {
  //       try {
  //         const granted = await PermissionsAndroid.requestMultiple([
  //           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         ]);

  //         if (
  //           granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
  //             PermissionsAndroid.RESULTS.GRANTED &&
  //           granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
  //             PermissionsAndroid.RESULTS.GRANTED
  //         ) {
  //           console.log('You can use the external storage');
  //         } else {
  //           Alert.alert(
  //             'Permission Denied!',
  //             'You need to give permission to use this feature.',
  //           );
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     };

  //     requestPermissions();
  //   }, []);

  const downloadFile = async () => {
    const url =
      'https://www.w3.org/WAI/WCAG21/working-examples/pdf-table/table.pdf'; // PDF URL
    const fileName = 'table.pdf'; // File name
    const downloadDest = `${RNFS.ExternalDirectoryPath}/${fileName}`;
    console.log('downloadDest ---', downloadDest);

    const options = {
      fromUrl: url,
      toFile: downloadDest,
      progress: (res: any) => {
        const progress = (res.bytesWritten / res.contentLength) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);
      },
      background: true,
      discretionary: true,
    };

    try {
      const ret = await RNFS.downloadFile(options).promise;
      console.log('ret --', ret);

      if (ret.statusCode === 200) {
        Alert.alert('Download Successful', 'File downloaded successfully!', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else {
        Alert.alert('Download Failed', 'Failed to download file.', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Download Error',
        'An error occurred while downloading the file.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Download PDF" onPress={downloadFile} />
    </View>
  );
};

export default ViewPdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
