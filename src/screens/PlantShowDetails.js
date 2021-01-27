import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  NativeModules,
} from 'react-native';
import WavyHeader from '../components/WavyHeader';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
export function PlantShowDetails(props) {
  const {route, navigation} = props;
  const {data} = route.params;
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
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
          {data.plantName}
        </Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );

  return (
    <View>
      <Header />
      <HeaderContent />
      <View
        style={{
          marginTop: height * 0.14 - HEIGHT,
          height: height * 0.2,
          alignItems: 'center',
        }}>
        {data.image ? (
          <Image
            source={{uri: data.image}}
            style={{height: height * 0.2, width: width * 0.5}}
            resizeMode="stretch"
          />
        ) : (
          <View
            style={{
              width: width * 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#dbcea9',
              height: height * 0.2,
            }}>
            <Text style={{fontSize: 20}}>No image</Text>
          </View>
        )}

        <View
          style={{
            height: 'auto',
            backgroundColor: '#dbcea9',
            width: width * 0.8,
            padding: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginTop: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 20}}>Plant Name: </Text>
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {data.plantName}
              </Text>
            </View>
          </View>
          {data.task ? (
            <View
              style={{
                justifyContent: 'space-between',
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 20}}>Task: </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {data.task}
                </Text>
              </View>
            </View>
          ) : null}

          {data.taskDetail ? (
            <View
              style={{
                justifyContent: 'space-between',
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 20}}>Task Details: </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {data.taskDetail}
                </Text>
              </View>
            </View>
          ) : null}
          {data.taskRequirements ? (
            <View
              style={{
                justifyContent: 'space-between',
                borderWidth: 1,
                padding: 10,
                marginBottom: 10,
                flexDirection: 'column',
              }}>
              <View>
                <Text style={{fontSize: 20}}>Task Requirements: </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {data.taskRequirements}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    zIndex: 2,
    width: Dimensions.get('window').width,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
