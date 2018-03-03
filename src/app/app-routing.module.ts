import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
