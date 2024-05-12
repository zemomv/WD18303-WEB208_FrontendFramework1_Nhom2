
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartTableData {

  constructor() { }

  getData(): any[] {

    return [
      { id: 1, firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'john@example.com', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', username: 'janedoe', email: 'jane@example.com', age: 25 }

    ];
  }
}

