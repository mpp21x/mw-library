import * as R from 'ramda';

export function escapeHtml(param) {
  const mapArr = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };
  if (R.is(Object, param)) {
    param = JSON.stringify(param);
  } else if (R.is(Number, param)) {
    return param + '';
  }

  if (!R.is(String, param)) {
    return param;
  }
  return param.replace(/[&<>"']/g, (m) => mapArr[m]);
}
