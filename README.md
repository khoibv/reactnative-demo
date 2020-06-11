# Demo app

### Install required packages

    yarn add @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-vector-icons
    cd ios && pod install

### Dummy data:

Using [json-server](https://github.com/typicode/json-server) to provide API

    json-server --watch data/data.json

### Open port 3000

    yarn adb

### Start

    yarn android
    yarn ios
