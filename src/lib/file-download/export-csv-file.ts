export function exportCsvFile(fileName: string, content: string) {
  fileName += '.csv';
  const a = document.createElement('a');
  const blob = new Blob(['\uFEFF' + content], {type: 'text/csv;charset=utf-8;'});

  a.href = window.URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
