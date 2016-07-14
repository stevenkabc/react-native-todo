import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef235f'
  },
  box: {
    backgroundColor: 'yellow',
    width: width * .5,
    height: height * .33,
    top: 30,
    borderRadius: 30,
    position: 'absolute'
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold'

  }
});
