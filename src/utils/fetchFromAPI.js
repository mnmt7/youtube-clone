import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
console.log(process.env);
const options = {
  params: {
    maxResults: 10,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  // const response = await fetch(`${BASE_URL}/${url}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(options),
  // });
  // const { data } = await response.json();
  // console.log(data);
  // return data;

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
