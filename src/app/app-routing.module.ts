import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FanListComponent} from "./features/fan/pages/fan-list/fan-list.component";
import {FanDetailsComponent} from "./features/fan/pages/fan-details/fan-details.component";
import {FanCreateComponent} from "./features/fan/pages/fan-create/fan-create.component";
import {FanUpdateComponent} from "./features/fan/pages/fan-update/fan-update.component";

const routes: Routes = [
  {path: '', component: FanListComponent},
  {path: 'create', component: FanCreateComponent},
  {path: 'update/:id', component: FanUpdateComponent},
  {path: ':id', component: FanDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
