import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2FA',
  },

  bgAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    opacity: 0.4,
  },

  scrollContent: {
    flexGrow: 1,
  },

  // Header
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restoreButton: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#00000033',
  },
  restoreText: {
    fontSize: 14,
    color: '#FFFFFFCC',
    fontWeight: '500',
  },

  illustrationSpacer: {
    height: 220,
  },

  contentCard: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4B3FD8',
    marginTop: 130,
    letterSpacing: 0.09,
  },

  // Features
  featureList: {
    marginTop: 16,
    marginBottom: 16,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 11,
    backgroundColor: '#4B3FD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },

  // Plan Cards
  planCardsContainer: {
    gap: 10,
    marginBottom: 16,
  },
  planCardWrapper: {
    marginTop: 8,
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E0E0EE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  planCardSelected: {
    borderColor: '#4B3FD8',
    backgroundColor: '#FFFFFF',
  },
  planCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },

  // Radio
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CCCCDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#635BFF',
  },
  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#635BFF',
  },
  planName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#262626',
  },
  planPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262626',
  },

  // Discount Badge
  discountBadge: {
    position: 'absolute',
    top: 1,
    alignSelf: 'center',
    zIndex: 10,
    backgroundColor: '#635BFF',
    borderBottomRightRadius: 59,
    borderBottomLeftRadius: 50,
    height: 16,
    width: 119,
  },
  discountText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // CTA
  ctaButton: {
    backgroundColor: '#4B3FD8',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 20,
    letterSpacing: 0.4,
  },

  // Footer
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  viewAllPlans: {
    fontSize: 12,
    fontWeight: '600',
    color: '#171717',
  },
  viewborder: {
    borderTopWidth: 1,
    borderColor: '#171717',
  },
  cancelText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
    marginTop: 8,
  },
  linksRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 12,
    color: '#635BFF',
    fontWeight: '500',
  },
  viewborder1: {
    borderTopWidth: 2,
    borderColor: '#635BFF',
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: '#635BFF',
    marginHorizontal: 8,
  },
});

export default style;