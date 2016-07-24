/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Moment from 'moment';

import DayItem from './src/day-item.js';


class weekdays2 extends Component {

  days() {
    let dayItems = [];
    for (let i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem key={i} day={day} daysUntil={i} />
      );
    }

    return dayItems;
  }

  // This JSX will turn to React.createClass (that is why you need to import React)
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //flex-end, flex-start, center
  container: {
    flex: 1, // width 100%, height 100% (flexDirection standard is 'column')
    justifyContent: 'center', // justify in the y direction (height) --> flex-end, center, flex-start
    alignItems: 'center', // justify in the x direction (width) --> flex-end, center, flex-start
    backgroundColor: '#FFFFFF'

    // Whenever we use flexDirection: 'row'
    // justifyContent: 'flex-end' // Moves stuff width wise
    // alignItems: 'flex-start' // Moves stuff heigth wise
  }
});

AppRegistry.registerComponent('weekdays2', () => {
  return weekdays2;
});
