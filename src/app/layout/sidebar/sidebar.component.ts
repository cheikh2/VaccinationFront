import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private roles:string[];
  constructor() { }

  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem("roles"));
    //this.roles= ["CAISSIER"];
    console.log(this.roles);
  }

  /*isSuperAdmin(){
    if(this.roles[0] == "SUPERADMIN")return true;
  }

  isAdmin(){
    if(this.roles[0] == "ADMIN")return true;
  }

  isCaissier(){
    if(this.roles[0] == "CAISSIER")return true;
  }

  isParAdmin(){
    if(this.roles[0] == "PARTENAIRE" || this.roles[0] == "ADMIN_PARTENAIRE")return true;
  }*/

}
