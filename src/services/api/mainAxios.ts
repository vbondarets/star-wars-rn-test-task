/* eslint-disable unicorn/no-useless-promise-resolve-reject */
import type { AxiosResponse } from 'axios'
import axios from 'axios'

export const mainAxios = axios.create({
  withCredentials: true,
})

mainAxios.interceptors.response.use(
  (response: any): AxiosResponse<unknown, unknown> => {
    return response
  },
  async (error: { response: { status: number } }) => {
    return Promise.reject(error)
  },
)
