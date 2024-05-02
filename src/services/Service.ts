import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-exdl.onrender.com/'
})

// Services -> Funções que vão realizar as requisições ao Back
export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}