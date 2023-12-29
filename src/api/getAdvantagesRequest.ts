import { URL } from "./config";
import axios, { AxiosResponse } from "axios";

export async function getAdvantagesRequest(): Promise<AxiosResponse<any, any>> { 
    let response = axios.get(URL + "advs/?format=json", { method: 'POST', })

    return response
}