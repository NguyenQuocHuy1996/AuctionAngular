export class FileUpload{
  /* This method will worked for single file upload, if you need multipule file upload then replace formData.append("uploads", files[i], files[i].name); to formData.append("uploads[]", files[i], files[i].name);
  */
  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
          return new Promise((resolve, reject) => {
              var formData: any = new FormData();
              var xhr = new XMLHttpRequest();
              for(var i = 0; i < files.length; i++) {
                  formData.append("uploads", files[i], files[i].name);
              }
              xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                      if (xhr.status == 200) {
                          resolve(JSON.parse(xhr.response));
                      } else {
                          reject(xhr.response);
                      }
                  }
              }
              xhr.open("POST", url, true);
              xhr.send(formData);
          });
      }
  }
