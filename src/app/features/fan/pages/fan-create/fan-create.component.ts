import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FanService} from "../../services/fan.service";
import {Router} from "@angular/router";
import {FanForm} from "../../models/fan.model";

@Component({
  selector: 'app-fan-create',
  templateUrl: './fan-create.component.html',
  styleUrls: ['./fan-create.component.scss']
})
export class FanCreateComponent {

  fanForm!: FormGroup;

  constructor(
    private readonly _fanService: FanService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router
  ) {
    this.fanForm = this._fb.group({
      name : [null,[Validators.required]],
      birthdate: [null,[Validators.required]],
      series : this._fb.array([])
    });
  }

  get series(): FormArray{
    return this.fanForm.get('series') as FormArray;
  }

  addSerie(){
    this.series.push(new FormControl(null,Validators.required));
  }

  removeSerie(i: number){
    this.series.removeAt(i);
  }

  onSubmit(){
    this.fanForm.markAllAsTouched();
    if(!this.fanForm.valid){
      return;
    }
    let newFan: FanForm = {
      name: this.fanForm.get('name')?.value,
      birthdate: this.fanForm.get('birthdate')?.value,
      series: this.fanForm.get('series')?.value.map((title: string) => ({title}))
    }
    this._fanService.create(newFan).subscribe({
      next : (data) => {
        console.log(data);
        this._router.navigate(['/']);
      },
      error : (error) => {
        console.log(error);
      }
    });
  }
}
