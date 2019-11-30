import { Component, OnInit, Inject } from '@angular/core';

import { LOCAL_STORAGE , WebStorageService } from 'angular-webstorage-service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  model:any={};
   user:string;
   sessionVal;
  
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService , private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.model.name=="athul"||this.model.name=="amal" && this.model.password=="1234"){
      this.storage.set("uname",this.model.name)
      alert("login success")
      this.router.navigate(['home'])
    }

  }

}
