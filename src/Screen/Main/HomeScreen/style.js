import {Dimensions, StyleSheet} from 'react-native';
import {fontSize} from '../../../Component/fontsize';
import {colors} from '../../../Component/colors';
import {
  widthPrecent as wp,
  heightPercent as hp,
} from '../../../Component/ResponsiveScreen/responsive';

const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    //  paddingBottom: hp(7),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
    elevation: 5,
    gap: 15,
  },
  headerview: {
    flexDirection: 'row',
  },
  logoText: {
    fontSize: fontSize.Twenty,
    fontWeight: 'bold',
    color: colors.Headertext,
    fontFamily: 'Poppins-SemiBold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: colors.ordercolor,
    borderRadius: 20,
    elevation: 3,
    paddingHorizontal: 15,
  },
  searchInput: {
    width: '80%',
    // flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: fontSize.Fourteen,
    paddingHorizontal: 10,
    color: colors.heading,
    paddingVertical: 10,
  },
  welcomeCard: {
    marginTop: 10,
  },

  servicesContainer: {
    paddingHorizontal: 0,
    paddingBottom: 25,
  },

  listContainer: {
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 5,
  },

  bottomCardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 4,
    marginHorizontal: 15,
    marginTop: wp(6),
    marginBottom: hp(7),
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(0.8),
  },
  cardContainer: {
    height: wp(22),
    width: wp(30),
    margin: wp(1.2),
    backgroundColor: colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 4,
  },
  smallCardContainer: {
    height: wp(23),
    width: wp(30),
    // margin: 5,
    margin: wp(1.2),
    backgroundColor: '#FFF1CC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 4,
  },
  itemContainer: {
    height: wp(29),
    width: screenWidth <= 750 ? wp(30) : wp(34),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer1: {
    width: wp(46),
    height: wp(40),
    borderRadius: 10,
    borderWidth: 0.4,
    margin: 5,
    overflow: 'hidden',
  },
  cardContainer2: {
    width: wp(90),
    minHeight: wp(35),
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DFE7EF',
    shadowColor: '#a2adb3',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 6,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  cardContainer3: {
    borderRadius: 10,
    borderColor: colors.grey,
    borderWidth: 0.5,
    margin: 5,
    overflow: 'hidden',
  },
  third: {
    fontSize: fontSize.Fifteen,
    color: colors.orange,
    fontFamily: 'Poppins-Medium',
  },
  third1: {
    marginTop: -8,
    fontSize: fontSize.Eighteen,
    color: colors.heading,
    fontFamily: 'Poppins-Medium',
  },
  third2: {
    fontSize: fontSize.Fourteen,
    color: '#51575C',
    fontFamily: 'Poppins-Regular',
  },
  third3: {
    fontSize: fontSize.Ten,
    color: '#143F71',
    fontFamily: 'Poppins-Regular',
  },
  contain: {
    marginHorizontal: 13,
    marginTop: hp(5),
    marginBottom: 10,
  },

  contain1: {
    // borderWidth:1,
    paddingHorizontal: 15,
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  service: {
    fontSize: fontSize.Twenty,
    color: colors.heading,
    fontFamily: 'Poppins-Medium',
  },
  service1: {
    fontSize: fontSize.Fourteen,
    color: colors.Headertext,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
  },
  text: {
    marginTop: hp(1),
    paddingHorizontal: 5,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Regular',
    color: colors.heading,
    textAlign: 'center',
  },
  smallCardtext: {
    marginTop: 8,
    paddingHorizontal: 0,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Regular',
    color: colors.heading,
    textAlign: 'center',
  },
  imageOpacity: {
    // opacity: 0.5, // Adjust the opacity to make the text stand out
  },
  text1: {
    marginTop: hp(1),
    width: '90%',
    fontSize: fontSize.Seventeen,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 10,
  },
  bottomCardtext: {
    marginTop: hp(1),
    paddingHorizontal: 5,
    fontSize: fontSize.Thirteen,
    fontFamily: 'Poppins-Regular',
    color: colors.heading,
    textAlign: 'center',
    maxWidth: '85%',
  },

  cardContainer5: {
    // margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },

  cardContainer0: {
    // margin: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  card: {
    width: wp(65),
    backgroundColor: '#FBF5F2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardInfo: {
    padding: 15,
    gap: 6,
  },
  DateText: {
    color: colors.Headertext,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Medium',
  },
  titleText: {
    minHeight: wp(11),
    marginTop: -6,
    fontSize: fontSize.Fourteen,
    color: colors.heading,
    fontFamily: 'Poppins-SemiBold',
  },
  prodNameText: {
    color: '#143F71',
    marginTop: -6,
    fontSize: fontSize.Sixteen,
    fontFamily: 'Poppins-Medium',
  },
  prodPriceText: {
    color: '#001227',
    marginTop: -6,
    fontSize: fontSize.Sixteen,
    fontFamily: 'Poppins-Regular',
  },
  regularText: {
    color: '#51575C',
    fontSize: fontSize.Fourteen,
    fontFamily: 'Poppins-Regular',
    width: '90%',
  },
  price: {
    fontSize: fontSize.Fourteen,
    color: colors.heading,
    fontFamily: 'Poppins-Bold',
  },
  cardBtn: {
    marginVertical: 5,
    color: colors.white,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Medium',
    backgroundColor: colors.orange,
    padding: 10,
    width: '45%',
    textAlign: 'center',
    borderRadius: 6,
  },
  filterBtn: {
    position: 'absolute',
    right: 8,
    backgroundColor: colors.white,
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  itemImg: {
    height: '30%',
    width: '30%',
    resizeMode: 'contain',
  },

  switchBtnContainer: {
    marginHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF5F2',
    padding: wp(2),
    borderRadius: 10,
    marginBottom: wp(3),
  },
  button: {},

  switchBtn: {
    flex: 1,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(2),
  },
  switchText: {
    textAlign: 'center',
    fontSize: fontSize.Sixteen,
    color: colors.recorded,
    fontFamily: 'Poppins-Regular',
  },
  activeBtn: {
    backgroundColor: colors.orange,
    color: colors.white,
    borderRadius: wp(2),
    shadowColor: '#D87C51',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 12,
  },
  bagIcon: {
    position: 'absolute',
    right: 15,
  },

  itemCount: {
    backgroundColor: '#EF6024',
    marginTop: -15,
    borderRadius: 10,
    zIndex: 1,
    bottom: -10,
    left: 7,
    height: 15,
    width: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical:.5
  },
  countText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: fontSize.Ten,
  },

  consultationSection: {
    backgroundColor: '#F1FBFF',
    paddingBottom: 30,
  },
  cardImage: {
    borderRadius: 10,
    width: '36%',
    height: '93%',
    resizeMode: 'contain',
  },
  infoSection: {
    width: '64%',
    gap: 3,
  },
  arrowNext: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: -2,
    alignSelf: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.grey,
    margin: 5,
  },
  activeDot: {
    backgroundColor: colors.Headertext, // Active dot color
    width: '8%',
  },
  viewLine: {
    alignSelf: 'center',
    width: 0.5,
    height: '80%',
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
  },
  bannerContainer: {
    height: wp(40),
    width: wp(85),
    marginHorizontal: 10,
    // borderWidth: 1,
  },
  bannerImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  subHeadText: {
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    fontSize: fontSize.Thirteen,
    color: '#52B0E8',
    fontFamily: 'Poppins-Regular',
  },
  prodCard: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.placeholder,
    backgroundColor: '#fff',
  },
  addToCartBtn: {
    position: 'absolute',
    top: 20,
    right: 10,
    marginVertical: 5,
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 15,
  },
  addCartIcon: {
    height: wp(6),
    width: wp(6),
    resizeMode: 'contain',
  },
  contain2: {
    paddingVertical: 10,
    backgroundColor: '#FAF6ED',
    marginVertical: wp(3),
  },
  prodCrossPriceText: {
    color: '#A4A4A4',
    marginTop: -4,
    fontSize: fontSize.Twelve,
    textDecorationLine: 'line-through',
    fontFamily: 'Poppins-Regular',
  },
  imgContainer: {
    backgroundColor: '#f3f3f3',
    height: hp(40),
    margin: 10,
    borderRadius: 10,
  },
  discountTag: {
    position: 'absolute',
    color: colors.white,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Medium',
    backgroundColor: colors.orange,
    paddingVertical: 4,
    paddingHorizontal: 6,
    width: '35%',
    textAlign: 'center',
    borderBottomRightRadius: 20,
  },
  cardContainer4: {
    // height: 770,
    // height: '22%',
    backgroundColor: '#143f71',
    paddingVertical: 0,
    borderRadius: 20,
    marginTop: -hp(20),
    marginBottom: hp(26),
  },
  serialNoText: {
    position: 'absolute',
    fontSize: fontSize.Thirty,
    fontFamily: 'Poppins-Bold',
    color: colors.orange,
    textAlign: 'center',
    right: 0,
    left: 0,
    bottom: 35,
  },
  text2: {
    marginTop: hp(1),
    textAlign: 'center',
    width: '100%',
    fontSize: fontSize.Eighteen,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 20,
  },
  contain4: {
    marginVertical: hp(3),
    // marginBottom: -hp(6),
  },
  formContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: wp(8),
    // paddingVertical: 20,
    borderRadius: 20,
    marginBottom: -hp(25),
  },
  textInputContainer: {
    height: wp(14),
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    // paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#E9E9E9',
    marginBottom: 10,
  },
  textInput: {
    marginVertical: 'auto',
    fontSize: fontSize.Fourteen,
    color: colors.heading,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: wp(13),
    width: '100%',
    backgroundColor: 'white',
    borderColor: colors.lightGrey,
  },
  inputText: {
    height: '100%',
    fontSize: fontSize.Sixteen,
    fontFamily: 'Poppins-Regular',
    color: colors.heading,
  },
  selectedText: {
    fontSize: fontSize.Sixteen,
    fontFamily: 'Poppins-Regular',
    color: colors.heading,
  },
  submitBtn: {
    borderColor: colors.white,
    width: '100%',
    fontSize: fontSize.Sixteen,
    fontFamily: 'Poppins-Medium',
    borderWidth: 1,
    paddingVertical: 13,
  },
  extraBoldText: {
    color: colors.white,
    fontSize: fontSize.Thirty,
    fontFamily: 'Poppins-Bold',
  },
  smallHeadText: {
    color: colors.white,
    textDecorationLine: 'none',
    marginBottom: -10,
  },
  CoreValues: {
    fontFamily: 'Poppins-Regular',
    fontSize: fontSize.Sixteen,
    color: '#001227',
    width: '95%',
  },
  cirleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cirleItem: {
    height: wp(15),
    width: '65%',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#B2E0FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cirle: {
    color: '#52B0E8',
    fontSize: fontSize.TwentyTwo,
    fontFamily: 'Poppins-Bold',
    // borderWidth:1,
    paddingTop: 8,
  },
  cirletext: {
    marginTop: 10,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Medium',
    color: '#001227',
    width: '90%',
    textAlign: 'center',
  },
  testimonalSection: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#faf6ed',
    opacity: 1.9,
  },
  Testimonals: {
    fontSize: fontSize.Twenty,
    fontFamily: 'Poppins-Medium',
    color: '#324356',
    marginTop: 20,
  },
  testimonalsCardWrapper: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  testimonalsCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(90),
    height: wp(90),
    paddingHorizontal: 10,
    paddingVertical: wp(10),
    backgroundColor: '#fff',
    borderRadius: wp(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    position: 'relative', // Required for positioning the image
    marginTop: wp(12), // Adds space for the image above the card
    marginBottom: 20,
  },
  cardUserNameText: {
    fontSize: fontSize.Twenty,
    color: '#143F71',
    fontFamily: 'Poppins-Bold',
    marginTop: wp(2),
  },
  testimonalsCardContant: {
    fontSize: fontSize.Sixteen,
    color: '#001227',
    fontFamily: 'Poppins-Regular',
    width: '90%',
    textAlign: 'center',
    marginTop: wp(3),
    lineHeight: wp(6),
  },
  CardProfileImage: {
    width: wp(22),
    height: wp(22),
    borderRadius: wp(11), // Circular Image
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Prevents cutting
    position: 'absolute', // Makes the image float
    top: 0, // Places the image on top of the card
    alignSelf: 'center', // Centers the image horizontally with the card
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  costCalBannerImg: {
    height: wp(80),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
  costCalBannerText: {
    position: 'absolute',
    bottom: 50,
    color: '#fff',
    fontSize: fontSize.TwentyTwo,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingHorizontal: '10%',
  },
  videoContianer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 10,
  },
  highlightImg: {
    height: wp(50),
    width: wp(85),
    marginRight: 10,
    borderRadius: 20,
  },
  btnFontSize: {
    fontSize: fontSize.Sixteen,
  },
  blogCard: {
    margin: 0,
    marginLeft: 15,
    backgroundColor: '#fff',
    width: wp(80),
    borderRadius: 10,
    overflow: 'hidden',
  },
  blogCardHeadText: {
    minHeight: wp(11),
    marginTop: -6,
    fontSize: fontSize.Eighteen,
    color: '#143F71',
    fontFamily: 'Poppins-Medium',
  },
  blogCardContantText: {
    color: '#001227',
    fontSize: fontSize.Fifteen,
    fontFamily: 'Poppins-Regular',
    width: '90%',
  },
  blogCardBtnText: {
    color: colors.white,
    fontSize: fontSize.Twelve,
    fontFamily: 'Poppins-Medium',
    color: colors.orange,
    marginTop: 20,
    borderRadius: 6,
  },
  bannerImg2: {
    width: '100%',
    height: hp(50),
    resizeMode: 'cover',
  },
});
