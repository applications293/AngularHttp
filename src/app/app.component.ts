import { InfoService } from './service/info.service';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API App';
  profile ;
  
  constructor(private _info: InfoService, private http: HttpClient){/*for injecting*/
  
      this._info.getUser().subscribe(profile=> {
      //this.profile = res.json();
      this.profile = profile;
      console.log(this.profile);
    });

      
  

  }

}
