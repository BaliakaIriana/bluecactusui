import {Component, OnInit} from '@angular/core';
import {EmployeService} from "../../services/employe.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  employes: Employe[] = [
    {nom: 'ANDRIATIANA', prenom: 'Baliaka', age: 24, poste: 'Developpeur'}
  ];
  displayedColumns = ['id', 'nom', 'prenom', 'poste'];

  constructor(private employeService: EmployeService, private router: Router) {
  }

  ngOnInit(): void {
    this.employeService.getEmployes().subscribe(data => {
      console.log(data);
    }, (error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.router.navigate(['/signin']);
      }
    });
  }

}


export interface Employe {
  nom: string,
  prenom: string,
  age: number,
  poste: string,
}
