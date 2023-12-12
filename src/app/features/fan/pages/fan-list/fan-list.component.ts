import {Component, OnInit} from '@angular/core';
import {FanDTO} from "../../models/fan.model";
import {FanService} from "../../services/fan.service";

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent implements OnInit{

  fans!: FanDTO[];

  constructor(
    private readonly _fanService: FanService
  ) {
  }

  ngOnInit(): void {
    this._fanService.getAll().subscribe((data) => {
      this.fans = data;
      console.log(this.fans)
    });
  }

  delete(id: number){
    this._fanService.delete(id).subscribe(() => {
      this._fanService.getAll().subscribe((data) => {
        this.fans = data;
        console.log(this.fans)
      });
    });

  }
}
