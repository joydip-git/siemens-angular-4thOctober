import { Observable } from "rxjs";
import { ApiResponse } from "./api-response.model";

export interface IAppService<T> {
    getRecords(): Observable<ApiResponse<T[]>>;
    getRecord(id: number): Observable<ApiResponse<T>>;
    addRecord(obj: T): Observable<ApiResponse<T[]>>;
    updateRecord(obj: T): Observable<ApiResponse<T[]>>;
    deleteRecord(id: number): Observable<ApiResponse<T[]>>;
}