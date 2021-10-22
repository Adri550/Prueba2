import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Productos from './Components/Productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Listado from './Components/Listado';
import Swal from 'sweetalert2';

class App extends Component {

  constructor() {

    super();
    this.state = {
      carrito: [],
      total: 0,
      productosLista: [
        { codigo: 1, descripcion: "Huawei Matebook D 15", precio: 15899, url: 'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg' },
        { codigo: 2, descripcion: "Samsung Galaxy S10", precio: 13999, url: 'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg' },
        { codigo: 3, descripcion: "Samsung Galaxy A01", precio: 1850, url: 'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg' },
        { codigo: 4, descripcion: "Xiaomi Redmi Note 9s", precio: 5949, url: 'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg' },
        { codigo: 5, descripcion: "Mochila Xiaomi", precio: 699, url: 'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg' },
        { codigo: 6, descripcion: "Teclado Primus Gaming Ballista", precio: 1999, url: 'https://www.primusgaming.com/media/PKS-301_620.jpg' },
      ],
    };
  }

  agregar = (producto) => {
    let existencia = this.state.carrito.find((x)=> x.codigo===producto.codigo);
    let temp_lista = this.state.carrito;
    let guardarProducto ; 
    
    if (existencia !== undefined){
      guardarProducto = {
        cantidad : existencia.cantidad + 1, //guarda la cantidad
        codigo:producto.codigo,
        descripcion:producto.descripcion,
        precio:producto.precio
        // en esta parte del codigo estamos guardando el numero de veces que se esta agregando el mismo producto
      }

      temp_lista = this.state.carrito.filter(x=>x.codigo!==producto.codigo)
      console.log(temp_lista)// imprimo el resultado de lo que guardo del carrito
    }
    else {
      guardarProducto={
        cantidad :1,  ...producto
      }
    }
    this.setState({
      carrito:[...temp_lista, guardarProducto], 
      total: this.state.total+producto.precio
    })  
    Swal.fire({
      title: 'Se añadio el producto',
      icon: 'success',
      position: 'center',
      showConfirmButton: true,  
    })
  }

  eliminar=(a,index)=>{
    let temporal; 
    if(a.cantidad===1){
      temporal= this.state.carrito.filter((a,i)=>i!=index)
    }
    else {
      const producto_temp={
        cantidad:a.cantidad-1,
        codigo:a.codigo,
        descripcion:a.descripcion,
        precio:a.precio,
      }
      temporal=this.state.carrito.filter((a,i)=>i!=index)
      temporal=[...temporal,producto_temp]
    }
    this.setState({
      carrito:temporal,
      total:this.state.total-a.precio
    })
    Swal.fire({
      icon: 'warning',
      title: 'Producto eliminado',
      position: 'center',
      showConfirmButton: false,
    })
  }

  eliminarCarrito(){
    const swalWithBootstrapButton = Swal.mixin({
    customClass:{
      confirmButton:'btn btn-success',
      cancelButton:'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButton.fire({

    title:'¿Quieres eliminar este producto?',
    text:"No se puede devolverse ",
    icon: 'warning',
    showCancelButton:true,
    confirmButtonText:'si, eliminar',
    cancelButtonText:'No, cancelar',
    reverseButtons:true
  }).then((result)=> {
    if (result.isConfirmed) {
      swalWithBootstrapButton.fire(
        'Eliminado!',
        'Vacío.',
      )
      this.setState({
        carrito:[],
        total:0
      })
  }
  else if (

    result.dismiss === Swal.DismissReason.cancel
  ) {

    swalWithBootstrapButton.fire(
      'Cancelado',
      'Sigues en el',
      'Error'
    )
  }
})
  }
  render() {
    return (
      <div className="App">

        <Header />
        <div className="Containers">

          <Productos productosLista={this.state.productosLista} agregar={this.agregar} />
          <Listado lista={this.state.carrito} Total={this.state.total} eliminar={this.eliminar} eliminarCarrito={this.eliminarCarrito} />

        </div>


      </div>
    )
  };
}

export default App;
