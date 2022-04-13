import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';


const CircularProgress = () => {
  const [percentage, setPercentage] = useState(0);
 
  return (
    <View style={styles.main}>
      <ProgressCircle
        percent={Number(percentage)}
        radius={150}
        borderWidth={25}
        color="green"
        shadowColor="#999"
        bgColor="#fff">
        <Text style={styles.text}>{percentage}%</Text>
      </ProgressCircle>
      <TextInput
        onChangeText= {setPercentage}
        style={styles.input}
        placeholder="Enter %"
        keyboardType="numeric">
          </TextInput> 
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{fontSize: 60,
     color:'tomato',
      fontWeight: 'bold'
    },
  input: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    width: 120,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#763437',
    backgroundColor: 'lightgreen',
  },
});

export default CircularProgress;
