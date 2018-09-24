import { Component, OnInit, ViewChild } from '@angular/core';

// Para consumir api
import { HttpClient } from '@angular/common/http';

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dataSource: MatTableDataSource<PhotosData>;
  photosArray: any;
  observableData: Observable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    this.httpClient.get(url).subscribe((data: Array<Object>) => {
      console.log(data);
      this.photosArray = data;

      const photos: PhotosData[] = [];

      data.forEach(element => {
        const elementAny: any = element;
        photos.push(elementAny);
      });

      this.dataSource = new MatTableDataSource(photos);
      this.observableData = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;

    });
  }

}

export interface PhotosData {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
