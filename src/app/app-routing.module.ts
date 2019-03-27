import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-area', loadChildren: './area/add-area/add-area.module#AddAreaPageModule' },
  { path: 'edit-area', loadChildren: './area/edit-area/edit-area.module#EditAreaPageModule' },
  { path: 'list', loadChildren: './area/areas-arborescence/areas-arborescence.module#AreasArborescencePageModule' },
  { path: 'details', loadChildren: './operations/details/details.module#DetailsPageModule' },  { path: 'add-operation', loadChildren: './operations/add-operation/add-operation.module#AddOperationPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
