class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._key = options.key
  }
  getCityInfo(city) {
    return fetch(`${this._baseUrl}/weather?format=json-cors&key=${this._key}&city_name=${city}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Algo deu errado: ${res.status}`);
      })
      .catch((err) => {
        console.log("Erro. A solicitação falhou: ", err);
      })
  }
}


const api = new Api({
  baseUrl: "https://api.hgbrasil.com",
  key: process.env.REACT_APP_API_KEY
});

export default api;