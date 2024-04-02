import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

export async function getLocation(updateLocation: (location: Location.LocationObject | null) => void): Promise<void> {
    const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    updateLocation(null);
    return;
  }

  let location: LocationObject = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
  updateLocation(location); 
  console.log(location);
}
