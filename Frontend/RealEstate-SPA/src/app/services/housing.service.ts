import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"
import { IProperty } from '../property/IProperty.interface';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  public getAllProperties(): Observable<IProperty[]> {
    return this.http
      .get('data/properties.json')
      .pipe(
        map(data => data as IProperty[])
      );
 }
}





/* getAllProperties(SellRent: number): Observable<any[]>{
  return this.http.get<any>('assets/Data/Properties.json').pipe(
    map(data => {
       const propertiesArray: Array<any> = [];
       for (const id in data) {
         if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
         propertiesArray.push(data[id]);
       }
      }
      return propertiesArray;
    })
  );
  }
} */ 
