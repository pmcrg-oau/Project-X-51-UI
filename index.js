import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';

import axios from './app/config/axios.config';

import App from './App';

const cache = new LRU({ max: 10 });

configure({ axios, cache });

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
