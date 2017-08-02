import { Platform } from 'react-native';
import WaveAnimationViewIOS from './index.ios.js';
import WaveAnimationViewAndroid from './index.android.js';

const WaveAnimationView = Platform.OS === 'ios'
    ? WaveAnimationViewIOS
    : WaveAnimationViewAndroid;

export default WaveAnimationView;