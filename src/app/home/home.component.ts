import { Component, OnInit , Inject } from '@angular/core';
import { LOCAL_STORAGE , WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService , private router:Router) { 
    
  }
  message:string;

  ngOnInit() {if(this.storage.get('uname')=="athul"||"amal"){
    this.message="love you all";
  }
  }
  LogOut(){
      this.storage.remove("uname")
      this.router.navigate([''])
      alert("logout success")
  }

}
