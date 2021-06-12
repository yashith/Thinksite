import API from './Base'


         
export async function Submitteam(data) {
    // return await API.post('user/checke',{email:data})
    // .then((res)=>{res.data.email})
    const conf={
        "Content-type": "application/json",
         "Authorization": `Bearer ${localStorage.getItem("token")}`
       }
    return await API.post('team/create',data,{headers:conf}).then(res=>res.data.success)
    
}