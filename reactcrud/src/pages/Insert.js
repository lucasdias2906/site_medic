import React, { Component } from 'react';
import Axios from 'axios';

export default class Insert extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            CRM: '',
            telefone: '',
            estado: '',
            cidade: '',
            especialidade: ''
        }

    }

    changeValue = (name, value) => {
        this.setState({ [name]: event.target.value })
    }

    onSubmit(e) {


        const obj = {
            nome: this.state.nome,
            CRM: this.state.CRM,
            telefone: this.state.telefone,
            cidade: this.state.cidade,
            especialidade: this.state.especialidade
        };


        Axios.post('https://challengermedic.herokuapp.com/medic', obj)
            .then(res => console.log(res.data));

        //console.log(obj)
    }

    render() {
        console.log("this", this.state)
        return (


            <div style={{ marginTop: 10 }}>
                <h3>Adicionar novo Medico</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" className="form-control"
                            value={this.state.primeiro_nome}
                            onChange={value => this.changeValue("nome", value)}
                        />
                    </div>
                    <div className="form-group">
                        <label> CRM: </label>
                        <input type="text" className="form-control"
                            value={this.state.CRM}
                            onChange={value => this.changeValue("CRM", value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefone: </label>
                        <input type="text" className="form-control"
                            value={this.state.telefone}
                            onChange={value => this.changeValue("telefone", value)}
                        />
                    </div>
                    <div className="form-group">
                        <label> Estado: </label>
                        <input type="text" className="form-control"
                            value={this.state.estado}
                            onChange={value => this.changeValue("estado", value)}
                        />
                    </div>
                    <div className="form-group">
                        <label> Cidade: </label>
                        <input type="text" className="form-control"
                            value={this.state.cidade}
                            onChange={value => this.changeValue("cidade", value)}
                        />
                    </div>
                    <div className="form-group">
                        <label> Especialidade: </label>
                        <input type="text" className="form-control"
                            value={this.state.especialidade}
                            onChange={value => this.changeValue("especialidade", value)}
                        />
                    </div> }
                    <div className="form-group">
                        <input type="submit" value="Cadastrar Medico" className="btn btn-primary" />
                    </div>
                </form>
            </div>


        )
    }
}