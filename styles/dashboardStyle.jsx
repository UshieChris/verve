import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {padding: 20},
  flex: {flexDirection: 'row'},
  dateBox: {
    marginLeft: 'auto',
    columnGap: 5,
    fontFamily: 'AvertaStd-ExtraBold',
  },
  post: {
    lineHeight: 16,
    color: '#00425F',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Averta-Light',
  },
  postInterest: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'space-between',
    marginBottom: 50,
    textAlign: 'left',
  },
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  imageCover: {
    flex: 1,
    position: 'relative',
    width: screenWidth / 3,
    height: screenHeight / 6,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  postTitle: {
    color: '#FFFFFF',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 55,
    fontSize: 9,
    fontFamily: 'AvertaStd-Bold',
    lineHeight: 16,
  },
  postBody: {
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 10,
    fontFamily: 'AvertaStd-Bold',
    lineHeight: 14,
  },
  lastp: {
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 8,
    fontFamily: 'AvertaStd-Light',
    lineHeight: 16,
  },
  verveOffer: {
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 50,
  },
  verveText: {
    color: '#00425F',
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'AvertaStd-Light',
    marginBottom: 7,
  },
  verveImage: {
    justifyContent: 'center',
    maxWidth: screenWidth,
    width: '100%',
    resizeMode: 'cover',
    objectFit: 'cover',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default styles;
