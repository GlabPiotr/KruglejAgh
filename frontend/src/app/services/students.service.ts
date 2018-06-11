// import {Injectable} from "@angular/core";
//
// @Injectable()
// export class StudentsService {
//
//   url = '/students';
//
//   constructor(private http: Http) {
//   }
//
//   // getStudents(): Observable<Student[]> {
//   //   return this.http.get(this.url)
//   //     .map(this.extractData)
//   //     .catch(this.handleError);
//   // }
//   //
//   // getStudentById(id: number): Observable<Student[]> {
//   //   return this.http.get(this.url + '/' + id, this.getOptions())
//   //     .map(this.extractData)
//   //     .catch(this.handleError);
//   // }
//   //
//   // createStudent(data: Student): Observable<any> {
//   //   return this.http.post(this.url, data, this.getOptions())
//   //     .map(this.extractData)
//   //     .catch(this.handleError);
//   // }
//   //
//   // modifyStudent(data: Student, identityNumber: number): Observable<any> {
//   //   return this.http.put(this.url + '/' + identityNumber, data, this.getOptions())
//   //     .map(this.extractData)
//   //     .catch(this.handleError);
//   // }
//   //
//   // deleteStudent(id: number): Observable<any> {
//   //   return this.http.delete(this.url + '/' + id, this.getOptions())
//   //     .map(this.extractData)
//   //     .catch(this.handleError);
//   // }
//
//   private getHeaders(): any {
//     const myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
//     return myHeaders;
//   }
//
//   // private getOptions(): any {
//   //   return new RequestOptions({headers: this.getHeaders()});
//   //   ;
//   // }
//
//   private extractData(res: Response) {
//     return res.json() || {};
//   }
//
//   // private handleError(error: Response | any) {
//   //   console.error(error.message || error);
//   //   return Observable.throw(error.message || error);
//   // }
// }
