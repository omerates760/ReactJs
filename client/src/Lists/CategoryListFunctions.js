import axios from 'axios'
export const getList = () => {
    return axios
        .get('http://localhost:8000/api/category', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (name,description) => {
    return axios
        .post(
            'http://localhost:8000/api/category',
            {
                name: name,
                description: description,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}
export const deleteItem = id => {
    axios
        .delete(`http://localhost:8000/api/category/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
}
export const updateItem = (name,description,id) => {
    return axios
        .put(
            `http://localhost:8000/api/category/${id}`,
            {
                name: name,
                description:description,
           
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}