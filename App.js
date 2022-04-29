import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);

	return (
		<View style={styles.container}>
			<Text>Eu renderizei {count} vezes!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
