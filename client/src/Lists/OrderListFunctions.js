import axios from 'axios'

export const getListOrder = () => {
    return axios
        .get('http://localhost:8000/api/order', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItemOrder = (customer_id, product_id,customer_adress, total) => {
    return axios
        .post(
            'http://localhost:8000/api/order',
            {
                customer_id: customer_id,
                product_id:product_id,
                customer_adress: customer_adress,
                total: total,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function (response) {
            console.log(response)
        })
}

export const deleteItemOrder = id => {
    axios
        .delete(`http://localhost:8000/api/order/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const updateItemOrder = (customer_id, product_id, total, customer_adress, id) => {
    return axios
        .put(
            `http://localhost:8000/api/order/${id}`,
            {
                customer_id: customer_id,
                product_id: product_id,
                total: total,
                customer_adress: customer_adress
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function (response) {
            console.log(response)
        })
}