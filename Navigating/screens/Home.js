import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cam } from './Camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Appbar} from 'react-native-paper'
import { Camera, CameraType } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import {Modal, Image} from "react-native";

//                          HomeScreen                          //

function HomeScreen({ navigation }) {
  return (
    <View style = {{flexDirection: 'column',flex: 1}}>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="BrainT" />
            <Appbar.Action icon="brain" onPress={() => {}} />
        </Appbar.Header>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style = {{flexDirection: 'row', padding: 5, margin: 3}}>
                <Button style = {{color: 'black', backgroundColor: 'purple', paddingHorizontal: 20, paddingVertical: 30, marginRight: 5, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
                <Button style = {{color: 'black', backgroundColor: 'purple', paddingVertical: 30, paddingHorizontal: 20, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
            </View>
            <View style = {{flexDirection: 'row', padding: 5, margin: 3}}>
                <Button style = {{color: 'black', backgroundColor: 'purple', paddingHorizontal: 20, paddingVertical: 30, marginRight: 5, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
                <Button style = {{color: 'black', backgroundColor: 'purple', paddingVertical: 30, paddingHorizontal: 20, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
            </View>
            <View style = {{flexDirection: 'row', padding: 5, margin: 3}}>
                <Button style = {{color: 'black', backgroundColor: 'purple', paddingHorizontal: 20, paddingVertical: 30, marginRight: 5, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
                <Button style = {{color: 'black', backgroundColor: 'purple', paddingVertical: 30, paddingHorizontal: 20, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
            </View>
            <Button style = {{color: 'black', backgroundColor: 'purple', paddingVertical: 5, paddingHorizontal: 90, marginTop: 20, justifyContent: 'center'}}>
                    <Icon name="warning" size={20} color="#fff" />
                    <Text style= {{color: 'white'}}>  Records</Text>
                </Button>
            <View>
                
            </View>
        </View>
    </View>
  );
}

//                          HomeScreen                          //

//                          Bottom Navigation                   //

const HomeStack = createBottomTabNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size = {30} color = '#C8A2C8' />
        )}} />
      <HomeStack.Screen name="Camera" component={Cammie} options={{tabBarIcon: ({color, size}) => (
            <Ionicons name="camera" color = '#C8A2C8' size={30}/>
        )}}/>
      <HomeStack.Screen name="Account" component={Userr} options={{tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color = '#C8A2C8' size={30}/>
        )}}/>
    </HomeStack.Navigator>
  );
}

//                          Bottom Navigation                   //

//                 Camera              //


function Cammie() {
    const CameraModule = (props) => {
        const [cameraRef, setCameraRef] = useState(null);
        const [type, setType] = useState(Camera.Constants.Type.back);
     return (
         <Modal
           animationType="slide"
           transparent={true}
           visible={true}
           onRequestClose={() => {
             props.setModalVisible();
           }}
         >
           <Camera
             style={{ flex: 1 }}
             ratio="16:9"
             flashMode={Camera.Constants.FlashMode.on}
             type={type}
             ref={(ref) => {
               setCameraRef(ref);
             }}
           >
             <View
               style={{
                 flex: 1,
                 backgroundColor: "transparent",
                 justifyContent: "flex-end",
               }}
             >
               <View
                 style={{
                   backgroundColor: "black",
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                 }}
               >
                 <Button
                   icon="close"
                   style={{ marginLeft: 12 }}
                   mode="outlined"
                   color="white"
                   onPress={() => {
                   props.setModalVisible();
                   }}
                 >
                   Close
                 </Button>
                <TouchableOpacity
                   onPress={async () => {
                     if (cameraRef) {
                       let photo = await cameraRef.takePictureAsync();
                       //api call to send this photo object to backend servers
                       props.setImage(photo);
                       props.setModalVisible();
                     }
                   }}
                 >
                   <View
                     style={{
                       borderWidth: 2,
                       borderRadius: 50,
                       borderColor: "white",
                       height: 50,
                       width: 50,
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       marginBottom: 16,
                       marginTop: 16,
                     }}
                   >
                     <View
                       style={{
                         borderWidth: 2,
                         borderRadius: 50,
                         borderColor: "white",
                         height: 40,
                         width: 40,
                         backgroundColor: "white",
                       }}
                     ></View>
                   </View>
                 </TouchableOpacity>
            <Button
                   icon="axis-z-rotate-clockwise"
                   style={{ marginRight: 12 }}
                   mode="outlined"
                   color="white"
                   onPress={() => {
                     setType(
                       type === Camera.Constants.Type.back
                         ? Camera.Constants.Type.front
                         : Camera.Constants.Type.back
                     );
                   }}
                 >
                {type === Camera.Constants.Type.back ? "Front" : "Back "}
                 </Button>
               </View>
             </View>
           </Camera>
         </Modal>
       );
    };
    const [image, setImage] = useState(null);
    const [camera, setShowCamera] = useState(true);
    const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);
  if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

  //code for what is shown on the screen begins

  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#eeee",
            width: 150,
            height: 150,
            borderRadius: 100,
            marginBottom: 8,
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: 150, height: 150, borderRadius: 25 }}
          />
        </View>
        <Button
          style={{ width: "45%"}}
          icon="camera"
          mode="contained"
          onPress={() => {
            setShowCamera(true);
          }}
        >
          Take Another
        </Button>
        <Button
         style={{ width: "35%", marginTop: 15}}
         icon="check"
         backgroundColor="green"
         mode="contained"
         onPress={() => {
           //send "image" to backend
           setImage(null);
         }}
        >
        Upload
        </Button>
      {camera && (
          <CameraModule
            showModal={camera}
            setModalVisible={() => setShowCamera(false)}
            setImage={(result) => setImage(result.uri)}
          />
        )}
      </View>
    );
}

//                 Camera              //

//                 User Page                //

function Userr() {
    return(
        <View style = {{justifyContent: 'center', flex: 1, justifyContent: 'flex-start'}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {}} />
                <Appbar.Content title="BrainT" />
                <Appbar.Action icon="brain" onPress={() => {}} />
            </Appbar.Header>
            <View style={{alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <View style = {{alignContent: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 35, paddingHorizontal: 20, marginVertical: 10,  }}>
                    <View style = {{ borderColor: '#000000',  shadowOffset: {width: -2, height: 4}, shadowColor: '#171717', shadowOpacity: 0.9, shadowRadius: 9,  backgroundColor: 'white'}}>
                        <View style = {{flex: 0,  flexDirection: 'row' ,justifyContent: 'flex-end', }}>
                            <Ionicons name = "person-circle-outline" size={50} color={"purple"}></Ionicons>
                            <Text style = {{marginTop: 10, fontSize: 30, fontWeight: '100', color: 'purple'}}>Divyansh Chawla</Text>
                        </View>
                        <View style = {{justifyContent: 'center', paddingTop: 20, paddingHorizontal: 20}}>
                            <Text>Mail Id: 9920102029@mail.jiit.ac.in</Text>
                            <Text>Contact Number: 123456789</Text>
                            <Text>Father's Name: Chawla Ji</Text>
                            <Text>Blood Group: A+</Text>
                            <Text>Current State: Healthy</Text>

                        </View>
                        <View style = {{height: 230}}></View>
                        <Text style = {{ alignContent: 'flex-end',justifyContent: 'flex-end', marginLeft: 69}}>Here's to a healthy life</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

//                  User Page               //

export default function BotHome() {
  return (
    <View>
        <Text>This is a dummy function</Text>
    </View>
  );
}