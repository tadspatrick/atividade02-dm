import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "./styles";

class Chrono extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      millisecond: 0,
      action: "Start",
      savesecond: 0,
      savemillisecond: 0,
      time: 0,
    };

    this.timer = null;
  }

  start() {
    if (this.timer == null) {
      this.setState({
        action: "Stop",
      });
      this.timer = setInterval(() => {
        if (this.state.second < 99) {
          this.setState({ millisecond: this.state.millisecond + 1 });
          if (this.state.millisecond > 9) {
            this.setState({ second: this.state.second + 1, millisecond: 0 });
          }
        } else {
          this.setState({ second: 0, millisecond: 0 });
        }
      }, 100);
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        action: "Start",
      });
    }
  }

  clear() {
    this.setState({ millisecond: 0, second: 0 });
  }

  save() {
    this.setState({
      savesecond: this.state.second,
      savemillisecond: this.state.millisecond,
    });
  }

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.props.backColor }]}
      >
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.button}>
            <Button
              title={this.state.action}
              color="#313030"
              onPress={() => this.start()}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="CLEAR"
              color="#313030"
              onPress={() => this.clear()}
            />
          </View>
          <View style={styles.button}>
            <Button title="SAVE" color="#313030" onPress={() => this.save()} />
          </View>
        </View>
        <View style={styles.center}>
          <Image source={require("../../assets/chrono.png")} />
          <Text style={styles.textChrono}>
            {this.state.second}.{this.state.millisecond}
          </Text>
        </View>

        <Text>
          {this.state.second}.{this.state.millisecond}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.textSave}>
            {this.state.savesecond}.{this.state.savemillisecond}
          </Text>
        </View>
      </View>
    );
  }
}

export default Chrono;
