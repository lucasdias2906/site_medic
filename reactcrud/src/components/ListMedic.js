import React from "react"


export default props => {
    return (
        <tr key={props.medic.key} className="text-center" v-for="medico em medicos">
            <td>{props.medic.name}</td>
            <td>{props.medic.crm}</td>
            <td>{props.medic.phone}</td>
            <td>{props.medic.state}</td>
            <td>{props.medic.city}</td>
            <td> {props.medic.specialty}</td>
            <td><a href="#" onClick={() => props.editMedic(props.medic)} className="text-success"><i className="fa fa-edit"></i></a>
            </td>
            <td><a href="#" className="text-danger" ><i className="fa fa-trash"></i></a></td>
        </tr>

    )
}