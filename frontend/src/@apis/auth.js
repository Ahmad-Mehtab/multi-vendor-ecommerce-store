import { PrivateAxios, PublicAxios } from "../@config"

export const doRegister = async (formData) => {
        const response = await PrivateAxios({
            method: 'POST',
            url: "/api/v2/user/create-user",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        });
          return response.data;
        
   
}

export const doLogin = ({data}) =>{
    return PublicAxios({
        method:'POST',
        url:"/api/v2/user/login-user",
        data:data,  
        // withCredentials: true,
    })
}   

export const getActivationTaken = async (activation_token) => {

    try {
        const response = await PublicAxios({
            method: 'POST',
            url: `/api/v2/user/activation/${activation_token}`,
            headers: { "Content-Type": "application/json" }
        });
        console.log("-------------",response.data);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch job details");
    }
};
