import { Component, OnInit } from '@angular/core';
import { toastr } from 'toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
test(){
  toastr.success('Bienvenue !', 'connexion réussie')
}
}
