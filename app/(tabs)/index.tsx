import {SafeAreaView, StyleSheet} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

import Constants from 'expo-constants';

const name = Constants.expoConfig?.name;
const appDefinition = Constants.expoConfig?.extra?.appdefinition;

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText darkColor={appDefinition.colors.text.dark} lightColor={appDefinition.colors.text.light} type="title">{name}</ThemedText>
                <HelloWave />
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
});