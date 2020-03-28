import React, { Component } from 'react'
import { getList, addItem, deleteItem, updateItem } from './ListFunctions'
class List extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: '',
            description: '',
            price: '',
            stock: '',
            arttitle: '',
            artbody: '',
            editDisabled: false,
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState(
                {
                    title: '',
                    description: '',
                    price: '',
                    stock: '',
                    items: [...data]

                },
                () => {
                    console.log(this.state.items)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addItem(this.state.title, this.state.description, this.state.price, this.state.stock).then(() => {
            this.getAll()
        })
        this.setState({
            title: '',
            description: '',
            price: '',
            stock: '',

        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.title, this.state.description, this.state.price, this.state.stock, this.state.id).then(() => {
            this.getAll()
        })
        this.setState({
            editDisabled: ''
        })
    }

    onEdit = (itemid, e) => {
        e.preventDefault()

        var data = [...this.state.items]
        data.forEach((item, index) => {
            if (item.id === itemid) {
                this.setState({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    stock: item.stock,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter(function (item, index) {
            if (item.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })

    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ 'margin': "50px 0px 50px 0" }}>
                        <label htmlFor="title">Ürün Başlığı</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={this.state.title || ''}
                                    onChange={this.onChange.bind(this)} />

                            </div>
                        </div>
                        <label htmlFor="description">Ürün Açıklaması</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={this.state.description || ''}
                                    onChange={this.onChange.bind(this)} />

                            </div>
                        </div>
                        <label htmlFor="price">Fiyatı</label>
                        <div className="row">
                            <div className="col-md-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={this.state.price || ''}
                                    onChange={this.onChange.bind(this)} />

                            </div>
                        </div>
                        <label htmlFor="stock">Stok Miktarı</label>
                        <div className="row">
                            <div className="col-md-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="stock"
                                    name="stock"
                                    value={this.state.stock || ''}
                                    onChange={this.onChange.bind(this)} />

                            </div>
                        </div>

                    </div>
                    {!this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onSubmit.bind(this)}
                            className="btn btn-success btn-block">
                            ÜRÜN EKLE
                        </button>
                    ) : (
                            ''
                        )}
                    {this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onUpdate.bind(this)}
                            className="btn btn-primary btn-block"
                        >
                            ÜRÜN GÜNCELLE
                        </button>
                    ) : (
                            ''
                        )}
                </form>
                <div className="row justify-content-md-center">
                    {this.state.items.map((item, index) => (
                        <div className="col-md-3 card card-style" key={index}>
                            <div className="card-body ">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{item.price} ₺</li>
                                    <li class="list-group-item">{item.stock} adet</li>
                                </ul>
                                <p className="card-text"></p>
                                <button
                                    href=""
                                    className="btn btn-info mr-1"
                                    disabled={this.state.editDisabled}
                                    onClick={this.onEdit.bind(
                                        this,
                                        item.id
                                    )}
                                >
                                    Düzenle
                                    </button>
                                <button
                                    href=""
                                    className="btn btn-danger"
                                    disabled={this.state.editDisabled}
                                    onClick={this.onDelete.bind(
                                        this,
                                        item.id
                                    )}
                                >
                                    Sil
                                    </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        )
    }
}

export default List
