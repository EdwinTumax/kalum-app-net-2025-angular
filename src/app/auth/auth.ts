import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _token?: string;
  private _user?: User;

  public get user(): User {
    if(this._user != null) {
      return this._user;
    } else if(this._user == null && localStorage.getItem('user') != null) {
      this._user = JSON.parse(localStorage.getItem('user') as string) as User;
      return this._user;
    }
    return new User();
  }

  public get token(): any {
    if(this._token != null && this._token !== undefined && this._token !== '') {
      return this._token;
    } else if(this._token == null && localStorage.getItem('token') != null) {
      this._token = JSON.stringify(localStorage.getItem('token') as string);
      return this._token;
    }
    return null;
  }

  constructor(private http: HttpClient) {

  }

  login( user:User ) {
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost:5125/kalum-auth/v1/accounts/login',user,{ headers: httpHeaders });
  }

  logout(): void {
    this._token = '';
    this._user == null;
    localStorage.clear();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  getPayload(token: string): any {
    if(token && token != null){
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  saveUser(payload: any):void {
    this._user = new User();
    this._user.username = payload.Username;
    this._user.email = payload.email;
    this._user.identityUser = payload.IdentityUser;
    this._user.roles = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    localStorage.setItem('user',JSON.stringify(this._user)); 
  }

  saveToken(token: string) : void {
    this._token = token;
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    if(this.token != null) {
      let payload = this.getPayload(this.token);
      if(payload != null && payload.Username && payload.Username.length > 0) {
        return true;
      }
    }
    return false;
  }

  isTokenExpired(): boolean {
    let now = new Date().getTime() / 1000;
    if(this.getPayload(this.token).exp < now) {
      return true;
    }
    return false;
  }

}
