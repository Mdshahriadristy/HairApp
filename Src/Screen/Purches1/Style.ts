import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // Layout
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 34,
    alignItems: 'center',
  },

  // Close Button
  closeButton: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 6,
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Toggle
  toggleWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#F0EFFF',
    borderRadius: 8,
    height: 54,
    width: 398,
    padding: 4,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  toggleBtnActive: {
    backgroundColor: '#635BFF',
    borderRadius: 6,
    shadowColor: '#635BFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  toggleBtnText: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Manrope',
  },
  toggleBtnTextActive: {
    color: '#FFFFFF',
  },
  toggleBtnTextInactive: {
    color: '#525252',
  },

  // Hero
  heroSection: {
    alignItems: 'center',
    marginTop: 28,
    paddingHorizontal: 28,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#635BFF',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.3,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#525252',
    textAlign: 'center',
  },

  // Cards Container
  cardsContainer: {
    width: '100%',
    paddingHorizontal: 18,
    marginTop: 16,
    gap: 10,
  },

  // Card
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#ECECF5',
    shadowColor: '#5B5FCF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  cardHeaderText: {
    flex: 1,
    marginRight: 8,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#29343D',
    marginBottom: 9,
  },
  planSubtitle: {
    fontSize: 14,
    color: '#526B7A',
  },

  // Popular Badge
  popularBadge: {
    backgroundColor: '#DAD9FF',
    height: 29,
    width: 85,
    borderRadius: 36,
    marginTop: 2,
  },
  popularBadgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5B5FCF',
    letterSpacing: 0.8,
    alignSelf: 'center',
    marginTop: 4,
  },

  // Price
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  priceDollar: {
    fontSize: 37.57,
    fontWeight: '700',
    color: '#635BFF',
    lineHeight: 44,
  },
  priceAmount: {
    fontSize: 37.57,
    fontWeight: '800',
    color: '#635BFF',
    lineHeight: 41.75,
    letterSpacing: -0.94,
  },
  priceUnit: {
    fontSize: 16,
    color: '#526B7A',
    marginLeft: 3,
    marginBottom: 6,
  },
  textWhite: {
    color: '#FFFFFF',
  },

  // Features
  featureList: {
    gap: 9,
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  //  Circle Checkmark
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E0F2F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  featureText: {
    fontSize: 14,
    color: '#29343D',
    fontWeight: '500',
  },

  // Purchase Button — default (inactive)
  purchaseButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#F0EFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#635BFF',
    letterSpacing: 0.1,
  },

  //  Purchase Button — active/selected state
  purchaseButtonActive: {
    backgroundColor: '#635BFF',
    shadowColor: '#635BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  purchaseButtonTextActive: {
    color: '#FFFFFF',
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
    marginTop: 28,
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
    borderTopWidth: 1,
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
