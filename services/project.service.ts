import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';

@Injectable()
export class ProjectService{
	public url: string;
	
	constructor(
		private _http: HttpClient
	){
		this.url = 'http://localhost:3700/';
	}
	
	addProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.url+'save-project/', params, {headers: headers});
	}
	
	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'get-projects/', {headers: headers});
	}
	
	getProject(id: string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'get-project/'+id, {headers: headers});
	}
	
	deleteProject(id: string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.delete(this.url+'delete-project/'+id, {headers: headers});
	}
	
	updateProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'update-project/'+project._id, params, {headers: headers});
	}
}

