import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text";

  return (
    <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
            <Image
                style={styles.headerImage}
                resizeMode="contain"
                source={require("../../assets/banner.jpeg")}
            />
            <Text style={styles.mainHeader}>Welcome to</Text>
            <Text
                style={[
                    styles.mainHeader,
                    { fontSize: 33, color: "#4c5dab", marginTop: 0 },
                ]}
                >
                Classes
            </Text>
            <Text style={styles.paraStyle}>{description}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});

export default Home;