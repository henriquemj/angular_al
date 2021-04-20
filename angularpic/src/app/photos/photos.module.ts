import { HttpClientXsrfModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [ PhotoComponent ],
    exports: [ PhotoComponent ] ,
    imports: [HttpClientXsrfModule]
})
export class PhotosModule {}