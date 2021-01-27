import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  NativeModules,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import WavyHeader from '../components/WavyHeader';
import {PlantContext} from '../screens/context';
const {height, width} = Dimensions.get('window');
export function PlantUpdateDetails(props) {
  const {navigation, route} = props;
  const {category, name} = route.params;

  const {state, setState} = React.useContext(PlantContext);
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
  const [formState, setFormState] = React.useState({
    plantName: '',
    task: '',
    taskDetail: '',
    taskRequirements: '',
    image: '',
  });

  React.useEffect(() => {
    const data = state[category].filter((e) => e.plantName === name)
    console.log(data,'data...')
    setFormState(data[0])
    // console.log(state[category], category,name)
    //  setFormState(state[category][name])
  },[])

  const getImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((imageResponse) => {
        setFormState({...formState, image: imageResponse.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Header = () => (
    <WavyHeader
      customStyles={styles.svgCurve}
      customHeight={height * 0.13}
      customTop={height * 0.089}
      viewBox="10 70 1400 60"
      customBgColor="#3b9c52"
      //customWavePattern="M0,256L1440,224L1440,0L0,0Z"
      //customWavePattern="M0,288L48,261.3C96,235,192,181,288,165.3C384,149,480,171,576,192C672,213,768,235,864,224C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    />
  );
  const handleChageText = (text, name) => {
    setFormState({...formState, [name]: text});
  };
  const Form = () => (
    <View style={{flex:1}}>
      <KeyboardAwareScrollView
     
        // style={{marginTop: height * 0.095 - HEIGHT}}
        style={{paddingTop: height * 0.095 - HEIGHT, flex:1}}
        contentContainerStyle={{alignItems: 'center'}}>
        {[
          {label: 'Plant Name', name: 'plantName'},
          {label: 'Task', name: 'task'},
          {label: 'Task Detail', name: 'taskDetail'},
          {label: 'Task Requirements', name: 'taskRequirements'},
        ].map((e, index) => (
          <View
            style={{
              height: 'auto',
              borderRightWidth: 5,
              borderLeftWidth: 5,
              width: width * 0.95,
              marginBottom: 5,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            key={index}>
            <View
              style={{
                borderBottomWidth: 2,
                marginBottom: 5,
                height: height * 0.04,
                width: width * 0.8,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  backgroundColor: 'black',
                  borderRadius: 10,
                  position: 'absolute',
                  right: 0,
                  paddingRight: 10,
                  paddingLeft: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                {e.label}
              </Text>
            </View>
            {e.label === 'Task Requirements' ? (
              <TextInput
                style={{
                  textAlignVertical: 'top',
                  height: height * 0.1,
                  backgroundColor: '#fff',
                  borderBottomWidth: 5,
                  borderRightWidth: 2,
                  borderLeftWidth: 2,
                  width: width * 0.8,
                  borderRadius: 10,
                }}
                multiline={true}
                value={formState[e.name]}
                onChangeText={(text, label) => handleChageText(text, e.name)}
                numberOfLines={4}
              />
            ) : (
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 4,
                  height: height * 0.05,
                  borderRightWidth: 2,
                  borderLeftWidth: 2,
                  width: width * 0.8,
                  borderRadius: 10,
                }}
                value={formState[e.name]}
                onChangeText={(text, label) => handleChageText(text, e.name)}
              />
            )}
          </View>
        ))}
        <ImageButton />
      </KeyboardAwareScrollView>
    </View>
  );
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
          Update Details
        </Text>
      </View>
      <View style={{}}>
        <Text></Text>
      </View>
    </View>
  );

  const handleSubmit = () => {
    const index = state[category].findIndex(e => e.plantName === name);
    [...state[category].splice(index,1,formState)]
    setState(state)
    navigation.goBack()
  };

  const ImageButton = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.95,
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        onPress={() => getImage()}
        activeOpacity={0.5}
        style={{
          height: height * 0.13,
          width: height * 0.13,
          borderRadius: 10,
          borderWidth: 2,
          justifyContent: 'center',
        }}>
        {!formState.image.length ? (
          <View>
            <View>
              <Icon type="entypo" name="plus" size={height * 0.07} />
            </View>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Add Image
            </Text>
          </View>
        ) : (
          <Image
            source={{uri: formState.image}}
            resizeMode="stretch"
            style={{
              height: height * 0.125,
              width: height * 0.125,
              borderRadius: 10,
            }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.5}
        style={{
          borderWidth: 1,
          height: height * 0.07,
          width: height * 0.23,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#c48d56',
          borderRadius: 19,
          borderBottomWidth: 5,
          borderRightWidth: 3,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          update
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#f1faed'}}>
      <Header />
      <HeaderContent />
      {Form()}
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
