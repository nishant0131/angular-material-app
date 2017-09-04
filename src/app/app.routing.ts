import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from './app.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',redirectTo: 'registration',pathMatch: 'full'},
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', pathMatch:'full', redirectTo: 'registration' }
];

export const appRouting = RouterModule.forRoot(routes);