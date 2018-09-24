import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';

// Para consumir api
import { HttpClient } from '@angular/common/http';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  // displayedColumns = ['id', 'name', 'email'];
  displayedColumns = ['codigo_str', 'nombre', 'precio', 'urlFoto'];
  dataSource: MatTableDataSource<ProductosData>;

  searchText: any;
  urlDataServices = 'http://dataservices.creaxis.xyz/';
  categoria: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // Consultar categorias al cargar
    this.consultarCategorias();
    this.consultarProductos();
  }

  consultarCategorias() {
    const api = 'api/categoriaslistaapi';
    const urlConsulta = this.urlDataServices + api;

    this.httpClient.get(urlConsulta).subscribe((data: Array<object>) => {
      console.log(data);
      data.forEach(c => {
        this.categoria.push(c);
      });
    });
  }

  consultarProductos() {
    const api = 'api/productosapi';
    const urlConsulta = this.urlDataServices + api;

    this.httpClient.get(urlConsulta).subscribe((data: Array<object>) => {
      console.log(data);
      const productos: ProductosData[] = [];

      data.forEach(c => {
        const cAny: any = c;
        productos.push(cAny);
      });

      this.dataSource = new MatTableDataSource(productos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

    console.log(this.dataSource.filter);
  }

  categoriaPresionada(categoria) {
    // this.searchText = categoria;
    console.log(categoria.toString());

    if (categoria === '0') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = categoria.toString();
    }

    console.log(this.dataSource.filter);
  }


}

export interface CategoriaData {
  codigo: string;
  nombre: string;
}

export interface ProductosData {
  codigo_str: string;
  nombre: string;
  precio: string;
  urlFoto: string;
  codigo_categoria: string;
  existencia: string;
  id: string;
  info: string;
}
