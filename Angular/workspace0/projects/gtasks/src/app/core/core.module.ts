import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components';
@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, PagesModule, CoreRoutingModule],
  exports: [HeaderComponent, PagesModule],
})
export class CoreModule {}
