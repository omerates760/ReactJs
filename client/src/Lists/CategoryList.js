import React, { Component } from 'react'
import { getList, addItem, deleteItem, updateItem } from './CategoryListFunctions'
class CategoryList extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            description: '',
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
                    name: '',
                    description:'',
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
        addItem(this.state.name,this.state.description).then(() => {
            this.getAll()
        })
        this.setState({
            name: '',
            description:'',
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.name,this.state.description,this.state.id).then(() => {
            this.getAll()
        })
        this.setState({
            editDisabled: ''
        })
        this.getAll()
    }

    onEdit = (itemid, e) => {
        e.preventDefault()

        var data = [...this.state.items]
        data.forEach((item, index) => {
            if (item.id === itemid) {
                this.setState({
                    id: item.id,
                    name: item.name,
                    description:item.description,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

	    var data = [...this.state.items]
        data.filter(function(item, index) {
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
                        <label htmlFor="name">Kategori Adı</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={this.state.name || ''}
                                    onChange={this.onChange.bind(this)}/>
                                    
                            </div>
                        </div>
                        <label htmlFor="description">Kategori Açıklama</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={this.state.description || ''}
                                    onChange={this.onChange.bind(this)}/>
                                    
                            </div>
                        </div> 
                    </div>
                    {!this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onSubmit.bind(this)}
                            className="btn btn-success btn-block">
                            Ekle
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
                            Güncelle
                        </button>
                    ) : (
                        ''
                    )}
                </form>
                <div className="row justify-content-md-center">
                        {this.state.items.map((item, index) => (
                            <div className="col-md-3 card card-style" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                              
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

export default CategoryList
