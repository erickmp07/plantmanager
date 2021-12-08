import React from "react";
import { 
    Dimensions, 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { CommonActions, useNavigation } from "@react-navigation/core";

import wateringImage from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {
    const navigation = useNavigation();
    
    function handleStart() {
        navigation.dispatch(CommonActions.navigate({ name: "UserIdentification" }));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Manage your plants {'\n'} easily
                </Text>

                <Image 
                    source={wateringImage} 
                    style={styles.image}
                    resizeMode="contain" 
                />

                <Text style={styles.subtitle}>
                    Don't forget to water your plants anymore. We take care to remind you whenever you need it.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather 
                        name="chevron-right" 
                        style={styles.buttonIcon} 
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    image: {
        height: Dimensions.get("window").width * 0.7
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
});