//You'll need another service for the panels themselves, I think
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Comic from '../interfaces/comic';
import Comics from '../interfaces/comics';

@Injectable({
  providedIn: 'root',
})
export class ComicDataService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Comic[]> {
    return this._http.get<Comic[]>(
      `http://localhost:5000/api/Biankaquest/comics`
    );
  }

  get(id: string): Observable<Comics> {
    return this._http.get<Comics>(
      `http://localhost:5000/api/Biankaquest/comics/id/${id}`
    );
  }

  //Might need to be panels instead of panel?
  createPanel(data: any) {
    return this._http.post<any>(
      `http://localhost:5000/api/Biankaquest/comics/panel`,
      data
    );
  }

  updatePanel(data: any) {
    return this._http.put(
      `http://localhost:5000/api/Biankaquest/comics/panel`,
      data
    );
  }
  deletePanel(panel_id: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        panel_id: panel_id
      }
    };
    return this._http.delete(
      `http://localhost:5000/api/Biankaquest/comics/panel`,
      options
    );
  }
}
