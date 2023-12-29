import { URL } from "./config";
import axios, { AxiosResponse } from "axios";

export async function getLinksRequest(): Promise<AxiosResponse<any, any>> {
    let response = axios.get(URL + "links/?format=json", { method: 'POST', })

    return response
}