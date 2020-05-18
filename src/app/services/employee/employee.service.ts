import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get('server/api/v1/employees');
  }

  getEmployee(id: string) {
    return this.http.get('server/api/v1/employees/' + id);
  }

  // getEmployeeWithQueryParams() {
  //   const params = new HttpParams()
  //     .set('idEmployee', '1');
  //   return this.http.get('server/api/v1/employees/new/', {params});
  // }

  createEmployee(employee) {
    alert('esti in employee service');
    const body = JSON.stringify(employee);
    return this.http.post('server/api/v1/employees', body, httpOptions);
  }

  updateEmployee(employee) {
    const id = employee.id;
    return this.http.put('server/api/v1/employees/' + id, employee, httpOptions);
  }

  deleteEmployeeById(id: string) {
    return this.http.delete('server/api/v1/employees/' + id);
  }
}
