import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Student } from "./student";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class StudentService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getStudents(): Observable<Student[]> {
        return this.http.get<any>(`${this.apiServerUrl}/students`);
    }

    public addStudent(student:Student): Observable<Student> {
        return this.http.post<any>(`${this.apiServerUrl}/student`, student);
    }

    public deleteStudent(studentId: number): Observable<void> {
        return this.http.delete<any>(`${this.apiServerUrl}/student/${studentId}`);
    }

}