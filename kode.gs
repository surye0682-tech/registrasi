function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}

// Proses simpan data
function simpanData(formData) {
  var ss = SpreadsheetApp.openById("13MFtzgpkwDa57m10eJzt3Bk78GGsJcfeh6P3GQekzLU"); // ganti dengan ID spreadsheet
  var sheet = ss.getSheetByName("database"); // ganti nama sheet sesuai punya kamu
  sheet.appendRow([new Date(), formData.nama, formData.email, formData.pesan]);
  return "Data berhasil disimpan!";
}
