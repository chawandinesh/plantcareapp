import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import {PlantContext} from './context';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import WavyHeader from '../components/WavyHeader';
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function PlantViewAllDetails(props) {
  const {navigation} = props;
  const {state, setState} = React.useContext(PlantContext);
  console.log(state);
  const [dataItems, setDataItems] = React.useState([]);
  const allKeys = Object.keys(state);
  const allValues = Object.values(state);
  console.log(allKeys, allValues.flat(1));
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);
  const Header = () => (
    <WavyHeader
      customStyles={styles.svgCurve}
      customHeight={height * 0.15}
      customTop={height * 0.14}
      viewBox="0 80 1400 190"
      customBgColor="#3b9c52"
      customWavePattern="M0,96L48,112C96,128,192,160,288,
                    186.7C384,213,480,235,576,213.3C672,192,768,128,864,
                    128C960,128,1056,192,1152,208C1248,224,1344,192,1392,
                    176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,
                    0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,
                    0,96,0,48,0L0,0Z"
    />
  );


  const HeaderContent = () => (
    <View
      style={{
        zIndex: 4,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: HEIGHT,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{padding: 5}}>
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
          All Details
        </Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );

  const ViewsContainer = () => (
    <ScrollView
      style={{zIndex: 0, flex: 1}}
      contentContainerStyle={{
        marginTop: height * 0.14 - HEIGHT,
        paddingBottom: height * 0.1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {dataItems.length ? (
        dataItems.map((e, idx) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PlantShowDetails', {
               data:e
              })
            }
            activeOpacity={0.7}
            style={{
              height: width * 0.4,
              width: width * 0.4,
              elevation: 3,
              margin: height * 0.02,
            }}
            key={idx}>
            <LinearGradient
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 5,
                borderRightWidth: 2,
              }}
              colors={['#fff', '#e3d3aa']}
              start={{x: 0, y: 0.5}}>
              <TouchableOpacity
                style={{position: 'absolute', top: 10, right: 10}}>
                <Text
                  style={{
                    color: '#fff',
                    backgroundColor: 'green',
                    borderRadius: 10,
                    padding: 2,
                  }}>
                  {e.type}
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: height * 0.04, textAlign: 'center'}}>
                {e.plantName}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            height: height * 0.5,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#c0ebae',
              padding: 20,
              justifyContent: 'center',
              height: height * 0.1,
              width: width * 0.9,
              borderBottomWidth: 5,
              borderRightWidth: 3,
            }}>
            <Text
              style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
              No data found, Click on "+" to add Data
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
  return (
    <View style={{flex: 1}}>
      <Header />
      <HeaderContent />
      <ViewsContainer />
      {/* {dataItems.map((e) => (
        <Text>{e.plantName}</Text>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    // zIndex: 4,
    width: Dimensions.get('window').width,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
