import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "6b25ac97e7msh0bbc486c55f1bbdp13cccfjsnd968eb1e3df4",
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
