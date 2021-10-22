import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from '../App';
import './Productos.css'

 const Lista= (props) => {

    return (

        <div className= 'Lista'>
            {
            <Table striped bordered hover>
            
            <thead> 
                <tr>
                    <th>Código</th> 
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    </tr>     
            </thead> 
            <tbody>{
            
            props.productosLista.map((a,index) =>
                <tr key={index}>
                    <td>{a.codigo}</td>
                    <td>{a.descripcion}</td>
                    <td> <img src={a.url} alt= 'ImagenProducto' id='imgproducto'/></td>
                    <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.agregar(a)} variant="success">Agregar</Button></td>              
                </tr>
                )
                }
            </tbody>
            
            </Table>

            }
        </div> 
    );
 }
 export default Lista;