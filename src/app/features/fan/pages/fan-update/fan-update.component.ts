import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FanService} from "../../services/fan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FanForm, FanModel} from "../../models/fan.model";

@Component({
  selector: 'app-fan-update',
  templateUrl: './fan-update.component.html',
  styleUrls: ['./fan-update.component.scss']
})
export class FanUpdateComponent implements OnInit {

  fanForm!: FormGroup;
  fanId!: number;
  currentFan!: FanModel;

  constructor(
    private readonly _fanService: FanService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _ar: ActivatedRoute
  ) {
    this.fanForm = this._fb.group({
      name: [null, [Validators.required]],
      birthdate: [null, [Validators.required]],
      series: this._fb.array([])
    });
  }

  ngOnInit(): void {
    this.fanId = this._ar.snapshot.params['id'];
    this._fanService.getOne(this.fanId).subscribe({
      next: (data) => {
        this.currentFan = data;
        this.fanForm.get('name')?.patchValue(this.currentFan.name);
        this.fanForm.get('birthdate')?.patchValue(this.currentFan.birthdate);
        for(let serie of this.currentFan.series){
          this.addSerieWithTitle(serie.title);
        }
      },
      error: (error) => {
        console.log(error);
        this._router.navigate(['/']);
      }
    });
  }

  get series(): FormArray {
    return this.fanForm.get('series') as FormArray;
  }

  addSerie() {
    this.series.push(new FormControl(null, Validators.required));
  }
  addSerieWithTitle(title: string) {
    this.series.push(new FormControl(title, Validators.required));
  }

  removeSerie(i: number) {
    this.series.removeAt(i);
  }

  onSubmit() {
    this.fanForm.markAllAsTouched();
    if (!this.fanForm.valid) {
      return;
    }
    let newFan: FanForm = {
      name: this.fanForm.get('name')?.value,
      birthdate: this.fanForm.get('birthdate')?.value,
      series: this.fanForm.get('series')?.value.map((title: string) => ({title}))
    }
    this._fanService.update(newFan,this.fanId).subscribe({
      next: (data) => {
        console.log(data);
        this._router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
