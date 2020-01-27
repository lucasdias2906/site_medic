import React from "react"

export default props => {
    return (
        <div id="overlay" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Atualizar Medico</h5>
                        <button type="button" onClick={()=>props.openCloseModal()} className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className=" modal-body p-4">
                        <div >
                            <div className="form-group">
                                <input type="text" placeholder="Nome" value={props.name} className="form-control form-control-lg" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="CRM" value={props.crm} className="form-control form-control-lg" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Telefone" value={props.phone} className="form-control form-control-lg" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Estado" value={props.state} className="form-control form-control-lg" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Cidade" value={props.city} className="form-control form-control-lg" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Especialidade" value={props.city} className="form-control form-control-lg" />
                               <br/>
                                <div className="form-group">
                                    <button className="btn btn-info btn-block btn-lg" >Atualizar Medico</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}