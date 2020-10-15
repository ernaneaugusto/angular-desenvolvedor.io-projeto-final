import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponent } from './conta.app.component';

const ROUTES: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            { path: 'cadastro', component: CadastroComponent },
            { path: 'login', component: LoginComponent },

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ContaRoutingModule { }