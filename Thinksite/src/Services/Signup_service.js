import API from '../Services/Base'

export async function signuppost(data){
    await API.post('user/signup',data)
    .then((res)=>{console.log(res)})
}

