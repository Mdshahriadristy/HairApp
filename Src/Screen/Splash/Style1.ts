import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#635BFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 84,
    marginRight: 84,
    gap: 10,
  },
  logo: {
    width: 27,
    height: 23.62,
  },
  progressBarContainer: {
    flex: 1,
    height: 6,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#16CDC7',
    borderRadius: 28,
  },
});

export default style;
