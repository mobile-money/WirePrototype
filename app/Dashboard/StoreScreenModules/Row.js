import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import image_google from '../../img/g.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={image_google} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.name}`}
    </Text>
  </View>
);

export default Row;
