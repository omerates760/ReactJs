import axios from 'axios'

export const getList = () => {
    return axios
        .get('http://localhost:8000/api/product', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (title,description,price,stock) => {
    return axios
        .post(
            'http://localhost:8000/api/product',
            {
                title: title,
                description:description,
                price:price,
                stock:stock
           
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
        .delete(`http://localhost:8000/api/product/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateItem = (title,description,price,stock,id) => {
    return axios
        .put(
            `http://localhost:8000/api/product/${id}`,
            {
                title: title,
                description:description,
                price:price,
                stock:stock
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}