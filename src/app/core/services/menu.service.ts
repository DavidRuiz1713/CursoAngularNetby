import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interface/menu/menu';
import { MenuResponse } from '../models/menu/menu-response';
import { MenuMapper } from '../mappers/menu/menu-mappers';

type BaseResponse = { [key: string]: unknown };

@Injectable({
  providedIn: 'root',
})
export class MenuServices {
  private httpClient = inject(HttpClient);

  private allMenuSubject: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>(
    []
  );
  allMenu$: Observable<Menu[]> = this.allMenuSubject.asObservable();

  getAllMenu(): Observable<Menu[]> {
    return this.httpClient
      .get<BaseResponse[]>('http://localhost:5000/menu')
      .pipe(
        delay(5000),
        map((response: BaseResponse[]) =>
          response.map((menu) => new MenuResponse(menu))
        ),
        map((response: MenuResponse[]) =>
          response.map((menu) => MenuMapper.map(menu))
        ),
        tap((response) => this.allMenuSubject.next(response))
      );
  }
  postNewCategory(bodyRequest: Menu): Observable<boolean> {
    return this.httpClient
      .post('http://localhost:5000/menu', MenuMapper.toJson(bodyRequest))
      .pipe(
        tap((response) => console.log(response)),
        map(() => {
          this.getAllMenu().subscribe();
          return true;
        })
      );
  }
}
