import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  View,
  FlatList
  
} from "react-native";

import * as ongsAction from '../store/ongs_actions';
import OngComponent from "../components/OngComponent";

const OngScreen = props => {
  const ongList = useSelector(state => state.ongs.ongList);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();  

  const loadPage = useCallback( async () => {  // memoization 
      setLoading(true);
      await dispatch(ongsAction.loadOngs());
      setLoading(false);
  }, [dispatch])

  useEffect(() => {  // componentDidMount + componentDidUpdate 
      loadPage();
  }, [loadPage])

  if (loading) {
      return <View style={styles.container}><ActivityIndicator size="large" color="#f1f1f1" /></View>
  }

  return (
      <ScrollView>

          <View style={styles.container}>
              <FlatList
                  data={ongList}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => <OngComponent
                      ong={item} navigation={props.navigation}
                  />}
              />
          </View>
      </ScrollView>

  )
}

export default OngScreen;

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  botoes: {
      width: '100%',
      flexDirection: "row",
      justifyContent: 'space-around',
      marginTop: 20
  },
  background: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.3
  }
})