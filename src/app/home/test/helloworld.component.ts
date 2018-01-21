import { Component } from '@angular/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',

  // Location of the template for this component
  template: `
  <div id="preview" class="preview">
  <img src="">
</div>
<form>
  <input type="file" (change)="fileChange($event)" placeholder="Upload file">
</form>
  `,
  styles: [`
    .preview img{
      max-height: 50px;
    }
  `]
})
export class HelloWorld {

  // Declaring the variable for binding with initial value
  yourName: string = '';

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      var img = document.querySelector("#preview img");
      img.file = file;

      var reader = new FileReader();
      reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
  }
}
