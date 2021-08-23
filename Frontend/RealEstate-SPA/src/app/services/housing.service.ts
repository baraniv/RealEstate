import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  public getAllProperties(): Observable<IPropertyBase[]> {
    return this.http
      .get('data/properties.json')
      .pipe(
        map(data => data as IPropertyBase[])
      );
 }

 addProperty(property: Property){
   localStorage.setItem('newProp', JSON.stringify(property));
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
