import axios from "axios";

axios.defaults.baseURL = "https://api.privatbank.ua/p24api";

export default {
  async getOfficeAddress(cityName) {
    try {
      const data = await axios.get(`/pboffice?json&city=${cityName}&address=`);
    }
  },
};
