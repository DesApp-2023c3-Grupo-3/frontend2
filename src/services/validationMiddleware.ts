import keycloak from "./keycloak/keycloack";

const userMok = {
    id: 1,
    name: "user.name",
    role: {
        id: 1,
        name: "user.role.name"
    }
}

export const getPayload =  () => {
    const tokenRoleId = userMok.role.id; 
    const userId = userMok.id;
    const name = userMok.name;
    const rol = userMok.role.name;
    return {
        userId,
        tokenRoleId,
        name,
        rol
    };
}



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