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
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {PlantContext} from '../screens/context';
import {useIsFocused} from '@react-navigation/native';
import WavyHeader from '../components/WavyHeader';

const {height, width} = Dimensions.get('window');
export function PlantDetails(props) {
  const {navigation, route} = props;
  const {category} = route.params;
  const {state, setState} = React.useContext(PlantContext);
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props, isFocused]);

  const Header = () => (
    <WavyHeader
      customStyles={styles.svgCurve}
      customHeight={height * 0.15}
      customTop={height * 0.13}
      viewBox="0 80 1400 210"
      customBgColor="#3b9c52"
      />
      );
      /**
       customWavePattern="M0,288L60,266.7C120,245,240,203,360,176C480,149,600,139,720,160C840,181,960,235,1080,261.3C1200,288,1320,288,1380,288L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
   * 
   */
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
          {category}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PlantAddDetails', {category: category})
        }
        style={{padding: 5}}>
        <Icon
          name="ios-add-circle-outline"
          color="#fff"
          type="ionicon"
          size={height * 0.05}
        />
      </TouchableOpacity>
    </View>
  );
  const handleDelete = (e, idx) => {
    console.log(e, idx);
    setState({
      ...state,
      [category]: state[category].filter((e, index) => index !== idx),
    });
  };

  const ViewsContainer = () => (
    <ScrollView
      style={{flex: 1, zIndex: 0}}
      contentContainerStyle={{
        marginTop: height * 0.14 - HEIGHT,
        paddingBottom: height * 0.1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {state[category].length ? (
        state[category].map((e, idx) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PlantUpdateDetails', {
                category: category,
                name: e.plantName,
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
                style={{position: 'absolute', top: 10, right: 10}}
                onPress={(a, b) => handleDelete(e, idx)}>
                <Icon
                  name="delete-circle-outline"
                  type="material-community"
                  size={height * 0.04}
                  color="red"
                />
              </TouchableOpacity>
              <Text style={{fontSize: height * 0.04, textAlign:'center'}}>{e.plantName}</Text>
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
          <View style={{backgroundColor: '#c0ebae', padding: 20, justifyContent:'center',height: height * 0.1,width: width * 0.9, borderBottomWidth: 5,borderRightWidth:3}}>
            <Text style={{fontSize: 20, textAlign:'center',fontWeight: 'bold'}}>
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
