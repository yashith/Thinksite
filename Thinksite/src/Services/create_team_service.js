import API from '../Services/Base'

export async function Submitteam(data) {
    // return await API.post('user/checke',{email:data})
    // .then((res)=>{res.data.email})
    return await API.post('team/create',data).then(res=>res.data.success)
    
}