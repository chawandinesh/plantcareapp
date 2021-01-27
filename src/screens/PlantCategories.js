import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  NativeModules,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import WavyHeader from '../components/WavyHeader';
import {PlantContext} from '../screens/context';
const {height, width} = Dimensions.get('window');
export function PlantCategories(props) {
  const {state, setState} = React.useContext(PlantContext);
  const {navigation} = props
  const data = Object.keys(state);
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
  /**
   * HeaderColor
   */
  const Header = () => (
    <WavyHeader
      customStyles={styles.svgCurve}
      customHeight={height * 0.15}
      customTop={height * 0.14}
      viewBox="0 80 1400 190"
      customBgColor="#3b9c52"
      />
      );
      /**
       customWavePattern="M0,96L48,112C96,128,192,160,288,
                       186.7C384,213,480,235,576,213.3C672,192,768,128,864,
                       128C960,128,1056,192,1152,208C1248,224,1344,192,1392,
                       176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,
                       0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,
                       0,96,0,48,0L0,0Z"
    * 
    */

  /**
   * HeaderContent data
   */
  const HeaderContent = () => (
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
          Category
        </Text>
      </View>
      <View style={{}}>
        <Text></Text>
      </View>
    </View>
  );

  /**
   * Optaions Container
   */
  const OptionsContainer = () => (
    <ScrollView
      style={{flex: 1, marginTop: height * 0.11 - HEIGHT, zIndex: 0}}
      showsVerticalScrollIndicator={false}>
      {data.sort().map((e, idx) => {
        return (
          <View>
          <View
            style={{
              marginTop: height * 0.02,
              marginBottom: height * 0.01,
              borderLeftWidth: 6,
              borderLeftColor: 'green',
            }}
            key={idx}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  height: height * 0.13,
                  width: width * 0.25,

                  justifyContent: 'center',
                }}>
                <Icon
                  name="tree"
                  size={height * 0.05}
                  color="green"
                  type="entypo"
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('PlantDetails', {category: e})}
                activeOpacity={0.5}
                style={{
                  height: height * 0.13,
                  width: width * 0.65,
                  backgroundColor: '#fff',
                  borderTopWidth: 5,
                  borderTopColor: 'green',
                  borderRightWidth: 3,
                  borderTopRightRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.8,
                  elevation: 5,
                  shadowRadius: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                  {e}
                </Text>
              </TouchableOpacity>
            </View>
             
          </View>
          <View style={{borderWidth: 3, borderColor:'#b87537' , width: width * 0.8, marginTop: height * 0.02, alignSelf:'center'}}></View>
          </View>
        );
      })}
    </ScrollView>
  );
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#ffe', '#ffe', '#e6caac']}
        style={styles.linearGradient}>
        <Header />
        <HeaderContent />
        <OptionsContainer />
      </LinearGradient>
    </View>
  );
}

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
