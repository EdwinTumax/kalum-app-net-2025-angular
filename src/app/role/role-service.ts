import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './model/role.model';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  endPointRole = environment.BASE_URL_KALUM_AUTH;

  constructor(private httpclient: HttpClient) {

  }
  
  getListRole() : Observable<any> {
    return this.httpclient.get<any[]>(`${this.endPointRole}/roles`);
  }

  createRole(role: Role) : Observable<any> {
    return this.httpclient.post<any>(`${this.endPointRole}/roles`,{roleName: role.name});
  }

}
