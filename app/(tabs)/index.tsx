import { StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { LocationObject } from 'expo-location'; // Import the type directly

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { getLocation } from '@/services/getLocation';

export default function TabOneScreen() {
  const [locationData, setLocationData] = useState<LocationObject | null>(null);

  const handleGetLocation = () => {
    getLocation((location: LocationObject | null) => setLocationData(location));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>Test retrieving geoposition with expo-location on high accuracy</Text>

      <Button title='geopositionning' onPress={() => handleGetLocation()}/>
      {locationData && (
        <View>
          <Text>Latitude: {locationData.coords.latitude}</Text>
          <Text>Longitude: {locationData.coords.longitude}</Text>
          <Text>Altitude: {locationData.coords.altitude ?? 'N/A'} meters</Text>
          <Text>Accuracy: {locationData.coords.accuracy} meters</Text>
        </View>
      )}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
