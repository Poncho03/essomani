import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromise } from '../interfaces/compromise';
import { Specialities } from '../interfaces/specialities';
import { Values } from '../interfaces/values';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private valuesUrl: string = "assets/json/values.json";
  private compromiseUrl: string = "assets/json/compromise.json";
  private specialitiesUrl: string = "assets/json/specialities.json";

  constructor(private http: HttpClient) { }

  public getValues(): Observable<Values[]>{
    return this.http.get(this.valuesUrl) as Observable<Values[]>;
  }

  public getCompromise(): Observable<Compromise[]>{
    return this.http.get(this.compromiseUrl) as Observable<Compromise[]>;
  }

  public getSpecialities(): Observable<Specialities[]> {
    return this.http.get(this.specialitiesUrl) as Observable<Specialities[]>;
  }
}
