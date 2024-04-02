import * as Location from 'expo-location';

let locationSubscription: Location.LocationSubscription | null = null;

async function watchLocation() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.warn('Permission to access location was denied');
    return;
  }

  locationSubscription = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 5000,
      distanceInterval: 0,
    },
    (newLocation) => {
      console.log(newLocation);
    }
  );
}

function stopWatchingLocation() {
  locationSubscription?.remove();
  locationSubscription = null;
}
