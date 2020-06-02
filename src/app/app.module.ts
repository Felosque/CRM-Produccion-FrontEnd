import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MachinstateCreateComponent } from './components/machinestate/create/machinstate-create/machinstate-create.component';
import { MachinstateShowComponent } from './components/machinestate/show/machinstate-show/machinstate-show.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MachinstateDialogComponent } from './components/machinestate/create/machinstate-dialog/machinstate-dialog.component';
import { MachinestateEditComponent } from './components/machinestate/edit/machinestate-edit/machinestate-edit.component';
import { MachinestateShowOneComponent } from './components/machinestate/show/machinestate-show-one/machinestate-show-one.component';
import { RequeststatusShowComponent } from './components/requeststatus/show/requeststatus-show/requeststatus-show.component';
import { RequeststatusShowOneComponent } from './components/requeststatus/show/requeststatus-show-one/requeststatus-show-one.component';
import { RequeststatusEditComponent } from './components/requeststatus/edit/requeststatus-edit/requeststatus-edit.component';
import { RequeststatusCreateComponent } from './components/requeststatus/create/requeststatus-create/requeststatus-create.component';
import { RequeststatusCreateDialogComponent } from './components/requeststatus/create/requeststatus-create-dialog/requeststatus-create-dialog.component';
import { StatebranchofficeCreateDialogComponent } from './components/statebranchoffice/create/statebranchoffice-create-dialog/statebranchoffice-create-dialog.component';
import { StatebranchofficeCreateComponent } from './components/statebranchoffice/create/statebranchoffice-create/statebranchoffice-create.component';
import { StatebranchofficeEditComponent } from './components/statebranchoffice/edit/statebranchoffice-edit/statebranchoffice-edit.component';
import { StatebranchofficeShowComponent } from './components/statebranchoffice/show/statebranchoffice-show/statebranchoffice-show.component';
import { StatebranchofficeShowOneComponent } from './components/statebranchoffice/show/statebranchoffice-show-one/statebranchoffice-show-one.component';
import { HomeComponent } from './components/home/home.component';
import { RequestanalysisShowComponent } from './components/requestanalysis/show/requestanalysis-show/requestanalysis-show.component';
import { RequestanalysisShowOneComponent } from './components/requestanalysis/show/requestanalysis-show-one/requestanalysis-show-one.component';
import { RequestanalysisEditComponent } from './components/requestanalysis/edit/requestanalysis-edit/requestanalysis-edit.component';
import { RequestanalysisCreateComponent } from './components/requestanalysis/create/requestanalysis-create/requestanalysis-create.component';
import { RequestanalysisCreateDialogComponent } from './components/requestanalysis/create/requestanalysis-create-dialog/requestanalysis-create-dialog.component';
import { BranchofficeCreateDialogComponent } from './components/branchoffice/create/branchoffice-create-dialog/branchoffice-create-dialog.component';
import { BranchofficeCreateComponent } from './components/branchoffice/create/branchoffice-create/branchoffice-create.component';
import { BranchofficeEditComponent } from './components/branchoffice/edit/branchoffice-edit/branchoffice-edit.component';
import { BranchofficeShowComponent } from './components/branchoffice/show/branchoffice-show/branchoffice-show.component';
import { BranchofficeShowOneComponent } from './components/branchoffice/show/branchoffice-show-one/branchoffice-show-one.component';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MachinstateCreateComponent,
    MachinstateShowComponent,
    MachinstateDialogComponent,
    MachinestateEditComponent,
    MachinestateShowOneComponent,
    RequeststatusShowComponent,
    RequeststatusShowOneComponent,
    RequeststatusEditComponent,
    RequeststatusCreateComponent,
    RequeststatusCreateDialogComponent,
    StatebranchofficeCreateDialogComponent,
    StatebranchofficeCreateComponent,
    StatebranchofficeEditComponent,
    StatebranchofficeShowComponent,
    StatebranchofficeShowOneComponent,
    HomeComponent,
    RequestanalysisShowComponent,
    RequestanalysisShowOneComponent,
    RequestanalysisEditComponent,
    RequestanalysisCreateComponent,
    RequestanalysisCreateDialogComponent,
    BranchofficeCreateDialogComponent,
    BranchofficeCreateComponent,
    BranchofficeEditComponent,
    BranchofficeShowComponent,
    BranchofficeShowOneComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
