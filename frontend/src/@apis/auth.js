import { PrivateAxios, PublicAxios } from "../@config"

export const doRegister = ({ data }) => {
    return PrivateAxios({
        method: 'POST',
        url: "/api/v2/user/create-user",
        data: data,
    })
}

export const doLogin = ({data}) =>{
    return PublicAxios({
        method:'POST',
        url:"/api/v2/user/login-user",
        data:data,  
    })
}   
