import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },

  slide: {
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  skipButton: {
    position: 'absolute',
    top: 9,
    right: 20,
    zIndex: 10,
    paddingVertical: 6,
    paddingHorizontal: 18,
    backgroundColor: '#D4D4D4',
    borderRadius: 36,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },

  imageContainer: {
    width: 398,
    height: 500,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
    marginTop: 122,
    borderRadius: 16,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },

  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 14,
    right: 0,
    height: 140,
  },

  contentContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 28,
    paddingTop: 24,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#635BFF',
    textAlign: 'center',
    letterSpacing: -0.9,
    marginBottom: 12,
  },

  description: {
    fontSize: 18,
    color: '#525252',
    textAlign: 'center',
    paddingHorizontal: 16,
  },

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
  },
  dot: {
    height: 8,
    borderRadius: 100,
  },
  activeDot: {
    width: 28,
    backgroundColor: '#6366F1',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: '#D1D5DB',
  },

  nextButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 36 : 24,
    left: 16,
    right: 16,
    height: 54,
    backgroundColor: '#6366F1',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 58,
  },
  nextButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',

  },
});

export default style;
