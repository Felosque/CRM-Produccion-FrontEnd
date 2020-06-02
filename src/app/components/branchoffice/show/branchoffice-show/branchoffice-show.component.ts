import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { BranchofficeService } from 'src/app/services/branchoffice.services'
import { Branchoffice } from 'src/app/model/branchoffice';
@Component({
  selector: 'app-branchoffice-show',
  templateUrl: './branchoffice-show.component.html',
  styleUrls: ['./branchoffice-show.component.css']
})
export class BranchofficeShowComponent implements OnInit {

  public branchoffices: Branchoffice[];
  public title = "Datos de Sucursales";
  constructor(
    private _branchofficeService: BranchofficeService
  ) { }

  ngOnInit(): void {
    this._branchofficeService.getBranchoffices().subscribe(response=>{
      this.branchoffices=response;
    })
  }


  deletebranchoffice(code){
    this._branchofficeService.deleteBranchoffice(code).subscribe(
      response =>{
        this.ngOnInit();
      }
    )
  }

}
