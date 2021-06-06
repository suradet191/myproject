import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotvComponent } from './line/dotv/dotv.component';
import { Flex2htmlComponent } from './line/flex2html/flex2html.component';
import { LoginComponent } from './line/login/login.component';

const routes: Routes = [
  { path: 'line/login/:liffId', component: LoginComponent },
  { path: '', component: Flex2htmlComponent },
  { path: 'line/dotv', component: DotvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
