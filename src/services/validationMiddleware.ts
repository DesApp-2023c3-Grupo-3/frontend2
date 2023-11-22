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
    const { accessToken, refreshToken } = getTokens()
    return {headers: {
        'Authorization': accessToken,
        'RefreshToken': refreshToken
    }}
}

export var handleCall = async (callBack: any, args: any[], dataConfig: {}) => {
    try {
        const serverResponse = await callBack(...args, dataConfig);
        return serverResponse
    } catch (error) {
        try {
            const {data} = await tokenApi.refresh({"refreshToken": `${getTokens().refreshToken}`});
            getHeaders().headers.Authorization = `Bearer ${data}`;
            setTokens(data, getTokens().refreshToken);
            const serverResponse = await callBack(...args, getHeaders());
            return serverResponse
        } catch (error) {
            console.error("Refresh Token Error:", error)
        }
    }
};