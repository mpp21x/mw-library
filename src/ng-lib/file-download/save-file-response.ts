import {HttpResponse} from '@angular/common/http';

export function saveFileResponse(response: HttpResponse<Blob>, filename: string = null) {
  if (!filename) {
    const f: string = response.headers.get('content-disposition').split(';')[1];

    if (f.includes('filename=')) {
      filename = f.substring(10);
    }
  }

  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(response.body);
  a.download = filename;
  a.click();
}
