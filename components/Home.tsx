import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import axios from "axios";
import { WeatherResponse } from "../models/weather";
import { BASE_URL, API_KEY } from "..";
import * as Location from "expo-location";
import { unixToDate } from "../utils/utils";

// import WeatherServices from "../services/weather.service";

const Home = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState("");
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [temp, setTemp] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [weather, setWeather] = useState("");
  const [sunset, setSunset] = useState("00:00");
  const [sunrise, setSunrise] = useState("00:00");
  const [wind, setWind] = useState(0);
  const toInHg = 0.029529983071;
  const cityInput = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(latitude, longitude);

  const getWeather = (city: string) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=9b97a2f30e66fc9d109b91ea4c0fbe0e`
      )
      .then((res) => {
        setCity(res.data.name);
        setFeelsLike(res.data.main.feels_like);
        setHumidity(res.data.main.humidity);
        setPressure(res.data.main.pressure);
        setTemp(res.data.main.temp);
        setTempMax(res.data.main.temp_max);
        setTempMin(res.data.main.temp_min);
        setWeather(res.data.weather[0].main);
        setSunset(unixToDate(res.data.sys.sunset));
        setSunrise(unixToDate(res.data.sys.sunrise));
        setWind(res.data.wind.speed);

        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    Keyboard.dismiss();
    cityInput.current.clear();
  };

  const onChange = (city: string) => setCity(city);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>{city || "No city found"}</Text>
      </View>

      <View>
        <Text style={styles.temp}>{Math.floor(temp)}°</Text>
      </View>

      <View>
        <Text style={styles.weather}>{weather}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          ref={cityInput}
          style={styles.input}
          placeholder="e.g. Tokyo"
          placeholderTextColor="#282c35"
          onChangeText={onChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            getWeather(city);
          }}
        >
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.extraStatsContainer}>
        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{Math.floor(tempMin)}°</Text>
          <Text style={styles.extraTitles}>Min Temp</Text>
        </View>

        <View style={styles.border}></View>

        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{Math.floor(feelsLike)}°</Text>
          <Text style={styles.extraTitles}>Feels Like</Text>
        </View>

        <View style={styles.border}></View>

        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{Math.floor(tempMax)}°</Text>
          <Text style={styles.extraTitles}>Max Temp</Text>
        </View>
      </View>

      <View style={styles.extraStatsContainer}>
        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{humidity}%</Text>
          <Text style={styles.extraTitles}>Humidity</Text>
        </View>

        <View style={styles.border}></View>

        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>
            {Math.floor(pressure * toInHg)} inHg
          </Text>
          <Text style={styles.extraTitles}>Pressure</Text>
        </View>
        <View style={styles.border}></View>

        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{wind} m²/s</Text>
          <Text style={styles.extraTitles}>Wind</Text>
        </View>
      </View>

      <View style={styles.extraStatsContainer}>
        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{sunrise}</Text>
          <Text style={styles.extraTitles}>Sunrise</Text>
        </View>

        <View style={styles.border}></View>

        <View style={styles.eachStats}>
          <Text style={styles.extraStats}>{sunset}</Text>
          <Text style={styles.extraTitles}>Sunset</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa7c4",
    paddingTop: 40,
    paddingHorizontal: 20,
    color: "#283D3B",
  },
  city: {
    textTransform: "uppercase",
    fontSize: 25,
    marginTop: 20,
    color: "#282c35",
  },
  temp: {
    fontSize: 150,
    color: "#282c35",
  },
  weather: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 25,
    marginTop: -170,
    fontWeight: "bold",
    color: "#282c35",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderColor: "black",
    borderRadius: 15,
    width: 250,
    color: "#282c35",
  },
  button: {
    backgroundColor: "#282c35",
    padding: 8,
    margin: 10,
    borderRadius: 20,
    width: 55,
    alignSelf: "center",
  },
  searchButton: {
    color: "#ffa7c4",
  },
  extraStatsContainer: {
    backgroundColor: "#282c35",
    opacity: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    borderWidth: 0.6,
  },
  extraStats: {
    fontSize: 25,
    textAlign: "center",
    color: "#ffa7c4",
  },
  extraTitles: {
    textAlign: "center",
    fontSize: 13,
    color: "#ffa7c4",
  },
  eachStats: {
    padding: 15,
  },
  border: {
    borderWidth: 0.6,
    borderColor: "#ffa7c4",
    height: 20,
    marginTop: 25,
  },
});
