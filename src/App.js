import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere, 
} from 'react-vr';

export default class office extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rotation: 0
    };
  }

  componentDidMount() {
    setInterval(this.incrementRotation, 50);
  }

  incrementRotation = () => {
    this.setState({
        rotation: this.state.rotation+1
    })
  }

  render() {
    return (
      <View>
        <Pano source={asset('mac.jpg')}/>
        <Sphere
          radius={1.0}
          widthSegments={15}
          heightSegments={10}
          style={{
            position: "absolute",
            transform: [{translate: [5*Math.sin(this.state.rotation/180), 0, -5*Math.cos(this.state.rotation/180)]}, {rotateY: -this.state.rotation}, {rotateZ: -5}] ,
          }}
          texture={asset('gruver.jpg')}
        />
        <Sphere
          radius={1.0}
          widthSegments={15}
          heightSegments={10}
          style={{
            position: "absolute",
            transform: [{translate: [-5*Math.sin(this.state.rotation/90), 0, 5*Math.cos(this.state.rotation/90)]}, {rotateY: this.state.rotation}, {rotateZ: 0}] ,
          }}
          texture={asset('oliviera.jpg')}
        />
        {/*<Text
          style={{
            position: "absolute",
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Garrett is cool
        </Text>*/}
      </View>
    );
  }
};