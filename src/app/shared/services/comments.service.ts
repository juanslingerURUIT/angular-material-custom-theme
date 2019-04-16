import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from '../models';

@Injectable()
export class CommentService {
    constructor(private http: HttpClient) {}
    
    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments`);
    }
}