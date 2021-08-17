import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  top: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    margin: 2,
  },
  textSave: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#FFF",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textChrono: {
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    height: 90,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 90,
    backgroundColor: "#313030",
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
