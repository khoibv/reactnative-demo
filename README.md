Install required packages

    yarn add @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-vector-icons
    cd ios && pod install

Start

    yarn android
    yarn ios

Dummy data

    json-server --watch data/data.json
