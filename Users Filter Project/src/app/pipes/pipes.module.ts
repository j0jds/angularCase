import { NgModule } from '@angular/core';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DataPipe } from './data.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe, DataPipe],
  exports: [PhonePipe, AddressPipe, StatusPipe],
})
export class PipesModule {}
