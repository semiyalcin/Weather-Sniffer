import axios from "axios";
import { BASE_URL, API_KEY } from "../index";
import { WeatherResponse } from "../models/weather";

const WeatherServices = async (city: string): Promise<WeatherResponse> => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9b97a2f30e66fc9d109b91ea4c0fbe0e`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export default WeatherServices;
