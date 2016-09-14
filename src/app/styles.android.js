import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width, height} =  Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    borderBottomWidth: 1
  },
  box: {
    margin: 20,
    height: 29,
    width: width * .80,
    borderRadius: 20,
    backgroundColor: 'white'

  },
  textEdit: {
    backgroundColor: 'white',
    fontSize: 20,
    margin: 5,
    height: 50,
    width: width * .70,
    left: width * .05
  },
  text: {
    backgroundColor: 'teal',
    color: 'aquamarine',
    fontSize: 20,
    height: 40,
    width: width * .70,
    left: width * .2
  }
});
