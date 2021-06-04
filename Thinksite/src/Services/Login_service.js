import API from './Base'

export async function login(data){
    return await API.post('user/login',data).then(res=>res.data).catch((err)=>{return({success:false})})
    
}