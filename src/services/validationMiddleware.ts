import keycloak from "./keycloak/keycloack";

export const getHeaders = () => {
    return {headers: {
        'Authorization': `Bearer ${keycloak.token}`
    }}
}

export const handleCall = async (callBack: any, args: any[]) => {
    try {
        try {
            const serverResponse = await callBack(...args, getHeaders());
            return serverResponse;
        } catch (error) {
            await keycloak.updateToken(30)
            const serverResponse = await callBack(...args, getHeaders());
            return serverResponse;
        }
    } catch (error) {
        console.error("Refresh Token Erroradsasd:", error);
    }
}