import axios from "axios";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const fetchData = async () => {
  let changeableUrl = url;
  try {
    const { data } = await axios.get(changeableUrl);
    return { data };
  } catch (error) {
    return error;
  }
};
