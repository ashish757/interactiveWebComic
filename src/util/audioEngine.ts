import { ASSETS, type AudioKey } from "../data/assets";
import { useStore } from "../store/useStore";

class AudioEngine {
  private cache: Map<AudioKey, HTMLAudioElement[]> = new Map();
  private maxInstances = 5; // Allow up to 5 overlapping sounds of the same type

  private getAudioInstance(key: AudioKey): HTMLAudioElement {
    if (!this.cache.has(key)) {
      this.cache.set(key, []);
    }

    const instances = this.cache.get(key)!;
    
    // Find an instance that has finished playing
    let freeInstance = instances.find(audio => audio.paused || audio.ended);

    // If none are free and we haven't hit the limit, create a new one
    if (!freeInstance && instances.length < this.maxInstances) {
      freeInstance = new Audio(ASSETS.audio[key]);
      instances.push(freeInstance);
    }

    // If we've hit the limit, just reuse the oldest one (force reset)
    if (!freeInstance) {
      freeInstance = instances[0];
      freeInstance.currentTime = 0;
    }

    return freeInstance;
  }

  public play(key: AudioKey, volume: number = 1.0) {
    // Check global mute state
    const isMuted = useStore.getState().isMuted;
    if (isMuted) return;

    try {
      const audio = this.getAudioInstance(key);
      // Reset time in case it was paused or reused
      audio.currentTime = 0;
      audio.volume = volume;
      
      // We must handle the promise returned by play() to catch Autoplay policy errors
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay policy prevented playback, this is expected before user interaction
          console.warn(`Audio playback prevented for ${key}:`, error);
        });
      }
    } catch (error) {
      console.error(`Failed to play audio ${key}:`, error);
    }
  }

  public preload(keys: AudioKey[]) {
    keys.forEach(key => {
      // Create at least one instance to trigger the network fetch
      this.getAudioInstance(key);
    });
  }
}

export const audioEngine = new AudioEngine();
