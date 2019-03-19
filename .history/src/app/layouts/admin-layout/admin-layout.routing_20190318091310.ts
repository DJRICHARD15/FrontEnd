import { Routes } from '@angular/router';

import { InicioComponent } from '../../inicio/inicio.component';
import { OrdenGastoComponent } from  '../../orden-gasto/orden-gasto.component';




export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'orden-gasto', component: OrdenGastoComponent}

];
