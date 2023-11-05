import { createContext } from 'react';

const defaultCity = {
  nome: '',
  estado: '',
  temperatura: 0,
  data: '0/00/0000',
  horas: '00:00',
  chuva: 0.0,
  fase_lua: '',
  dias_seguintes: {
    segunda: {
      nome: '',
      max: 22,
      min: 16,
      condição: 'clear_day'
    },
    terça: {
      nome: '',
      max: 24,
      min: 18,
      condição: 'clear_day'
    },
    quarta: {
      nome: '',
      max: 28,
      min: 19,
      condição: 'clear_day'
    },
    quinta: {
      nome: '',
      max: 20,
      min: 11,
      condição: 'clear_day'
    },
    sexta: {
      nome: '',
      max: 11,
      min: 1,
      condição: 'clear_day'
    },
    sábado: {
      nome: '',
      max: 22,
      min: 10,
      condição: 'clear_day'
    },
    domingo: {
      nome: '',
      max: 28,
      min: 19,
      condição: 'clear_day'
    }
  }
}

export const CurrentCityContext = createContext(defaultCity);