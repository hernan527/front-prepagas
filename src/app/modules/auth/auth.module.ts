import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
    imports: [SharedModule, AuthRoutingModule, SigninComponent],
})
export class AuthModule {}
