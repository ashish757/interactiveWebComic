import { ASSETS, type AudioKey } from "../data/assets";
import { useStore } from "../store/useStore";

class AudioEngine {
  private cache: Map<AudioKey, HTMLAudioElement[]> = new Map();
  private maxInstances = 5;

  private getAudioInstance(key: AudioKey): HTMLAudioElement {
    if (!this.cache.has(key)) {
      this.cache.set(key, []);
    }

    const instances = this.cache.get(key)!;
    
    let freeInstance = instances.find(audio => audio.paused || audio.ended);

    if (!freeInstance && instances.length < this.maxInstances) {
      freeInstance = new Audio(ASSETS.audio[key]);
      instances.push(freeInstance);
    }

    if (!freeInstance) {
      freeInstance = instances[0];
      freeInstance.currentTime = 0;
    }

    return freeInstance;
  }

  public play(key: AudioKey, l: boolean = false, volume: number = 1.0) {
    const isMuted = useStore.getState().isMuted;
    if (isMuted) return;

    try {
      const audio = this.getAudioInstance(key);
      audio.currentTime = 0;
      audio.volume = volume;
      audio.loop = l;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn(`Audio playback prevented for ${key}:`, error);
        });
      }
    } catch (error) {
      console.error(`Failed to play audio ${key}:`, error);
    }
  }

  public preload(keys: AudioKey[]) {
    keys.forEach(key => {
      this.getAudioInstance(key);
    });
  }
}

export const audioEngine = new AudioEngine();
