import API from '../Services/Base'

export async function signuppost(data){
    return await API.post('user/signup',data).then(res=>res.data.success)
    
}

export async function checkemail(data) {
    // return await API.post('user/checke',{email:data})
    // .then((res)=>{res.data.email})
    return await API.post('user/checke',{email:data}).then(res=>res.data.email)
    
}
export async function checkuser(data) {
    // return await API.post('user/checke',{email:data})
    // .then((res)=>{res.data.email})
    return await API.post('user/checku',{username:data}).then(res=>res.data.username)
    
}