class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
  }
  getCityInfo(city) {
    return fetch(`${'https://api.hgbrasil.com'}/weather?city_name=${city}`, {
      method: 'GET'
    })
      .then((res) => {
        console.log(res)
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
});

export default api;