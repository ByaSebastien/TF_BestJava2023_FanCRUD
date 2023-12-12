import {Component, OnInit} from '@angular/core';
import {FanModel} from "../../models/fan.model";
import {FanService} from "../../services/fan.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fan-details',
  templateUrl: './fan-details.component.html',
  styleUrls: ['./fan-details.component.scss']
})
export class FanDetailsComponent implements OnInit {

  fan!: FanModel;

  constructor(
    private readonly _fanService: FanService,
    private readonly _ar: ActivatedRoute,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    let id: number = this._ar.snapshot.params["id"];
    this._fanService.getOne(id).subscribe({
      next: (data) => {
        this.fan = data;
        console.log(data);
      },
      error : (error) => {
        console.log(error);
        this._router.navigate(['/']);
      }
    })
  }
}
