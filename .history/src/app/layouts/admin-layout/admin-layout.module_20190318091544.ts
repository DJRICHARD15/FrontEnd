import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../inicio/inicio.component';
import { OrdenGastoComponent } from '../../orden-gasto/orden-gasto.component';
import { InputMaskModule} from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    NgxSpinnerModule,
    DialogModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ToastModule,
    TableModule,
    TooltipModule,
    InputMaskModule
  ],
  declarations: [
    InicioComponent,
    OrdenGastoComponent
  ]
})

export class AdminLayoutModule {}
