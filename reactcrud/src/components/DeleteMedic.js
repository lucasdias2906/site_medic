import React from "react"

export default props => {
    return (
        <div id="overlay" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Deletar Medico</h5>
                        <button type="button" onClick={()=>props.openCloseModal()} className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className=" modal-body p-4">
                        <h4 class ="text-danger"> você quer realmente excluir esse Medico ?</h4>
                        <h5>você esta deletando{props.name}</h5>
                        <hr></hr>
                        <button class="btn btn-danger btn-lg">YES</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-danger btn-lg">NO</button>
                            </div>
                            </div>
                    </div>
                </div>
            
        
    )
}