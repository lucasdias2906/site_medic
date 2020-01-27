import React, { Component } from 'react';
import ListMedic from '../components/ListMedic'
import EditMedic from '../components/EditMedic'
import DeleteMedic from '../components/DeleteMedic'
import Axios from 'axios';

export default class View extends Component {

    state = {
        medic: [],
        showEditModal: false,
        showDeleteModal: false,
        medicModify: {}
    }
    componentDidMount() {
        this.getMedic()
    }
    renderList = () => {
        return this.state.medic.map((medic, index) => {
            return <ListMedic editMedic={this.editMedic} medic={medic} key={index} />

        })
    }

    renderList = () => {
        return this.state.medic.map((medic, index) => {
            return <ListMedic deleteMedic={this.deleteMedic} medic={medic} key={index} />

        })
    }

    getMedic = () => {
        Axios.get("https://challengermedic.herokuapp.com/medic").then((medic) => {
            let { data } = medic.data
            let newArray = [] = data
            // newArray = 
            let arrayModify = data.map((medic) => {
                let objModify
                objModify = {
                    id_medico: medic.id_medico,
                    name: medic.name,
                    crm: medic.crm,
                    phone: medic.phone,
                    state: medic.state,
                    city: medic.city,
                    specialty: medic.specialty
                }
                if (newArray.includes(medic)) {
                    objModify.specialty = objModify.specialty + ", " + medic.specialty
                }
                return objModify
            })
          
            console.log(arrayModify)

            this.setState({ medic: arrayModify })
        }).catch((err) => {
            console.log("error getMedic =>", err)
        })
    }

    openCloseModal = () => {
        this.setState({ showEditModal: !this.state.showEditModal })
    }

    openCloseModal = () => {
        this.setState({ showDeleteModal: !this.state.showDeleteModal })
    }

    editMedic = (medicModifymedic) => {
        this.setState({ showEditModal: true, medicModifymedic })
    }

    deleteMedic = (medicDeletemedic) => {
        this.setState({ showDeleteModal: true, medicDeletemedic })
    }

    render() {


        return (
            <div>
                <p>Bem vindo para vizualizar os medicos</p>
                <br />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr className="text-center bg-info text-light">
                            <th>Name</th>
                            <th>CRM</th>
                            <th>Phone</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Specialty</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderList()}
                    </tbody>

                </table>
                <div>
                    {this.state.showEditModal &&

                        <EditMedic openCloseModal={this.openCloseModal} />
                    }

                    {this.state.showDeleteModal &&

                        <DeleteMedic openCloseModal={this.openCloseModal} />
                    }
                </div>
            </div>
        )
    }
}

