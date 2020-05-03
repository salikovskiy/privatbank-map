import axios from "axios";

axios.defaults.baseURL = "https://api.privatbank.ua/p24api";

export default {
  async getOfficeAddress(cityName = "") {
    try {
      const data = await axios.get(
        `/pboffice?json&city=%D0%A2%D1%8F%D1%87%D0%B5%D0%B2&address=`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getData(cityName = "") {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      console.log(xhr.responseText);
    });

    xhr.open(
      "GET",
      `https://api.privatbank.ua/p24api/pboffice?json&city=${cityName}&address=`
    );
    xhr.send();
  },
};
