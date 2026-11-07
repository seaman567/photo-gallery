/**
 * Map pins are derived from place aggregations (photos by city).
 * @see ./places.ts
 */
export { mapPins, type Place as MapPinPlace } from './places';

export function projectPin(lat: number, lon: number, width = 1000, height = 500) {
  return {
    x: ((lon + 180) / 360) * width,
    y: ((90 - lat) / 180) * height,
  };
}
