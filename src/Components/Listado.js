import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import bote from '../basura.jpg';


const listado = (props) => {
  return (
    <div className="List">
      <h3> Bolsa </h3>
      <h4>Total:${(props.total)}</h4>
      <img src={bote} onClick={()=>props.eliminarCarrito()} alt="basuraIcon" width="50" height="30"></img>
      <Table striped bordered hover style= {{verticalAlign:'middle'}}>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          {props.lista.map((a,index)=>
            <tr key={index}>
              <td>{a.cantidad}</td>
              <td>{a.codigo}</td>
              <td>{a.descripcion}</td>
              <td>${a.precio}</td>
              <td>${(a.cantidad*a.precio)}</td>
              <td><Button onClick={()=> props.eliminar(a.codigo)} variant="danger">Eliminar</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default listado;
