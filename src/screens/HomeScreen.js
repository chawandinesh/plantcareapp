// React-native import
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
// Libraries import
import Svg, {Path} from 'react-native-svg';
// Components import
import WavyHeader from '../components/WavyHeader';
import {Divider, Rating, AirbnbRating} from 'react-native-elements';
import {PlantContext} from './context';
// constants
const {height, width} = Dimensions.get('window');

export function HomeScreen(props) {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = React.useState(false);
  /**
   * Title Component
   */
  const Title = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          width: width * 0.7,
          height: height * 0.15,
          borderBottomRightRadius: 30,
          borderBottomWidth: 10,
          borderBottomColor: '#b0823e',
          borderRightWidth: 5,
          borderRightColor: '#478fad',
          //   shadowOffset: {width:5, height:5},
          backgroundColor: 'rgba(255,255,255,0.8)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'green',
            fontSize: height * 0.05,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 1,
            fontWeight: 'bold',
          }}>
          Plant Care
        </Text>
      </View>
    </View>
  );

  const OptionComponent = ({name}) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        switch (name) {
          case 'Add Details':
            navigation.navigate('PlantCategories');
            break;
          case 'View Details':
            navigation.navigate('PlantViewAllDetails');
            break;
        }
      }}>
      <View
        style={{
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 10,
          width: width * 0.6,
          margin: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: height * 0.04,
            padding: 10,
            backgroundColor: '#903A27',
            borderRadius: 5,
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const ExtraOptions = ({name}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          switch (name) {
            case 'About Us':
              console.log('about');
              navigation.navigate('AboutUs');
              break;
            case 'Rate App':
              setModalVisible(true);
              // navigation.navigate('RateApp');
              break;
          }
        }}>
        <Text
          style={{
            color: '#d9f4ff',
            fontSize: height * 0.03,
            borderRadius: 20,
            backgroundColor: '#000',
            borderColor: '#8ff',
            borderWidth: 1,
            padding: 5,
          }}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };
  const Options = () => (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.3,
          alignItems: 'center',
          borderBottomWidth: 5,
          borderBottomColor: 'rgba(0,0,0,0)',
          borderRightColor: '#ff7',
          borderLeftColor: '#ff7',
          borderRightWidth: 10,
          borderLeftWidth: 10,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <OptionComponent name="Add Details" />
        <OptionComponent name="View Details" />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: width * 0.9,
          alignItems: 'center',
          height: height * 0.2,
        }}>
        <ExtraOptions name="About Us" />
        <ExtraOptions name="Rate App" />
      </View>
    </View>
  );
  return (
    <ImageBackground
      style={{flex: 1}}
      blurRadius={0.1}
      source={require('../assets/images/plant2.jpg')}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}>
        <Title />
        <Options />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: width * 0.2,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/images/plant2.jpg')}
            />
            <Text
              style={[{...styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
              Enjoying Plant Care?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
            <TouchableOpacity
              // style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={[
                  {
                    ...styles.textStyle,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    // change the color property for better output
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
