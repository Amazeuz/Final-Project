import { CurrentCityContext } from "../../contexts/CurrentCityContext"
import { useContext } from "react";

export default function ApiData() {
  const currentCity = useContext(CurrentCityContext)
  console.log(currentCity)

  return (
    <div className="api-data">
      <h1 className="api-data__title">Dados da API</h1>
      <pre className="api-data__data">
        {JSON.stringify(currentCity, null, 2)}
      </pre>
    </div>
  )
}