// TODO: Persistir obtencion del token
import { tokenApi } from "./auth"

export const getTokens = () => {
    let accessToken = localStorage.getItem("accessToken");
    let refreshToken = localStorage.getItem("refreshToken")
    if (!accessToken) {
        localStorage.setItem("accessToken", ``);
        accessToken = ''
    }
    if (!refreshToken) {
        localStorage.setItem("refreshToken", ``);
        refreshToken = ''
    }
    return {
        accessToken,
        refreshToken
    }
}

export const setTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", `Bearer ${accessToken}`);
    localStorage.setItem("refreshToken", refreshToken);
}

export const getHeaders = () => {
    const accessToken = getTokens().accessToken
    return {headers: {
        'Authorization': accessToken
    }}
}

export var handleCall = async (callBack: any, args: any[]) => {
    try {
        const serverResponse = await callBack(...args, getHeaders());
        return serverResponse
    } catch (error) {
        try {
            const {data} = await tokenApi.refresh({"refreshToken": `${getTokens().refreshToken}`});
            getHeaders().headers.Authorization = `Bearer ${data.accessToken}`;
            setTokens(data.accessToken, data.refreshToken);
            const serverResponse = await callBack(...args, getHeaders());
            return serverResponse
        } catch (error) {
            console.error("Refresh Token Error:", error)
        }
    }
};