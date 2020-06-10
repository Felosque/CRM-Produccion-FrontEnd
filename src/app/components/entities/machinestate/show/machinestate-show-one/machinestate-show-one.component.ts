import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { MachinestateService } from 'src/app/services/machinestate.services';
import { Machinestate } from 'src/app/model/machinestate';

@Component({
  selector: 'app-machinestate-show-one',
  templateUrl: './machinestate-show-one.component.html',
  styleUrls: ['./machinestate-show-one.component.css'],
  providers: [MachinestateService]
})
export class MachinestateShowOneComponent implements OnInit {
  public machinestate: Machinestate;
  public url: string;
  constructor(
    private macinestateService: MachinestateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.macinestateService.getMachineState(code).subscribe(
        response => {
          this.machinestate = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }
}
