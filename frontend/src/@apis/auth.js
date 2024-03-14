import { PrivateAxios, PublicAxios } from "../@config"

export const doRegister = async (formData) => {
    try {
        const response = await PrivateAxios({
            method: 'POST',
            url: "/api/v2/user/create-user",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        });
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch job details");
    }
}

export const doLogin = ({data}) =>{
    return PublicAxios({
        method:'POST',
        url:"/api/v2/user/login-user",
        data:data,  
    })
}   
