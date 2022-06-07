import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

//This is a default prop incase no props are passed into component
Header.defaultProps = {
  title: 'Abbeys Shopping List',
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    marginTop: 35,
    backgroundColor: 'darkslateblue',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
