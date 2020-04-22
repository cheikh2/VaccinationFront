import { RegistreService } from './../../services/registre.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
  registreForm: FormGroup;
  role: Role;

  constructor(private service:RegistreService) { }

  ngOnInit() {
    this.registreForm = new FormGroup({
      nomcomplet: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
  });

  this.service.getRole()
  // clone the data object, using its known Config shape
  .subscribe(
    data => {this.role = data['hydra:member'];
           console.log(data['hydra:member']
      );});

}


addregistre() {
  console.log(this.registreForm.value);
  this.service.registre(this.registreForm.value).subscribe(
    data => {

      console.log(data);


    },
    error => {
        console.log(error);
    }
  );
  //this.router.navigate(['listeUsers']);

}
}
