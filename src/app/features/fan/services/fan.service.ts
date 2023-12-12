import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {Observable} from "rxjs";
import {FanDTO, FanForm, FanModel} from "../models/fan.model";

@Injectable({
  providedIn: 'root'
})
export class FanService {

  baseUrl!: string;

  constructor(
    private readonly _http: HttpClient
  ) {
    this.baseUrl = environment.baseApiUrl + "fan";
  }

  getAll(): Observable<FanDTO[]> {
    return this._http.get<FanDTO[]>(this.baseUrl);
  }

  getOne(id: number): Observable<FanModel> {
    return this._http.get<FanModel>(this.baseUrl + '/' + id);
  }

  create(form: FanForm): Observable<FanModel>{
    return this._http.post<FanModel>(this.baseUrl,form);
  }

  update(form: FanForm,id:number): Observable<FanModel>{
    return this._http.put<FanModel>(this.baseUrl + '/' + id,form);
  }

  delete(id: number) {
    return this._http.delete(this.baseUrl + '/' + id);
  }
}
