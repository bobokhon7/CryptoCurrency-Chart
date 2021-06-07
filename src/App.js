import React, { Component } from "react";
import Cards from "./Component/Cards/Cards";
import Chart from "./Component/Chart/Chart";
import CounrtyPicker from "./Component/CountryPicker/CounrtyPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards getData={data} />
        <CounrtyPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
