import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import WavyHeader from '../components/WavyHeader';
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;

const {height, width} = Dimensions.get('window');
const Header = () => (
  <WavyHeader
    customStyles={styles.svgCurve}
    customHeight={height * 0.15}
    customTop={height * 0.14}
    viewBox="0 80 1400 190"
    customBgColor="#3b9c52"
  />
);

const HeaderContent = ({navigation}) => (
  <View
    style={{
      justifyContent: 'space-between',
      zIndex: 10,
      flexDirection: 'row',
      marginTop: HEIGHT,
      alignItems: 'center',
    }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name="ios-arrow-back"
        color="#fff"
        type="ionicon"
        size={height * 0.05}
      />
    </TouchableOpacity>
    <View>
      <Text
        style={{
          fontSize: height * 0.04,
          color: '#fff',
          fontWeight: 'bold',
        }}>
        About Us
      </Text>
    </View>
    <View style={{}}>
      <Text></Text>
    </View>
  </View>
);

const AboutUsNote = () => (
  <View
    style={{
      width: width,
      marginTop: HEIGHT,
      alignItems: 'center',
      height: height * 0.7,
      padding: height * 0.02,
      backgroundColor: '#fcf5ed',
      justifyContent: 'center',
    }}>
    <Text style={{fontSize: 18, marginBottom: 10}}>
      An easy to use, amazing and ads free app for the plant lovers to help them
      to take care of their Fishes .
    </Text>
    <Text style={{fontSize: 23, fontWeight: 'bold', color: 'green'}}>
      Features of the app
    </Text>
    <Text style={{fontSize: 18, color: 'gray'}}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}></Text>
      <Text style={{fontSize: 20, color: 'black',paddingBottom: height * 0.05, fontWeight: 'bold'}}>
        Choose Category
      </Text>{' '}
      - User can choose the category of care plant they have to take care.{' '}
      {'\n'}
      <Text style={{fontSize: 20, color: 'black',marginBottom: 10, fontWeight: 'bold'}}>
        Add details
      </Text>{' '}
      - User can add the details of plant, they have to care. {'\n'}
      <Text style={{fontSize: 20, color: 'black', marginBottom: 10, fontWeight: 'bold'}}>
        View Details
      </Text>{' '}
      - User can view the list of plant to take care in the choose category.{' '}
      {'\n'}
      <Text style={{fontSize: 20, color: 'black',marginBottom: 10,  fontWeight: 'bold'}}>
        Delete Details{' '}
      </Text>{' '}
      - User can delete the details of plant that they find not necessary
      anytime.{'\n'}
    </Text>
    <Text style={{color: '#56f', fontWeight: 'bold', fontSize: 20}}>
      Download the app and manage your plant more.
    </Text>
  </View>
);

export const AboutUs = (props) => {
    const {navigation} = props
  return (
    <View>
      <Header />
      <HeaderContent navigation={navigation} />
      <AboutUsNote />
    </View>
  );
};

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    zIndex: 4,
    width: Dimensions.get('window').width,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
