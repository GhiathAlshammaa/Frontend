import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule,
    PagesModule,
    SharedModule,
    // CoreRoutingModule
  ],
  exports: [HeaderComponent, PagesModule],
})
export class CoreModule {}
