import axios from 'axios'


export const postData=(data:any)=>{
    return axios.post("http://localhost:3000/users",data)

}


export const editLoudUser=(id:any)=>{
    return axios.get(`http://localhost:3000/users/${id}`)
}

export const editSubmit=(id:any,data1:any)=>{
    return axios.put(`http://localhost:3000/users/${id}`,data1)
}

export const handlemodaldelete =(selected:any)=>{
    return axios.delete(`http://localhost:3000/users/${selected}`)

}