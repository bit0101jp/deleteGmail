// 指定した From のメールを一括削除する。

function deleteGMail() {
  let from = new Array();
  let getCell = (spreadsheet, cellPos) => {return spreadsheet.getSheetByName("address").getRange(cellPos).getValue()};

  // deleteGmailフォルダを取得
  let folder = DriveApp.getFolderById('14_CKs7TdA8pDXvlG1W23mVI51wEy8AqN'); 
  // ファイルを取得
  let files = folder.getFiles()

  while (files.hasNext()) {
    let file = files.next();

    // スプレッドシートであるかチェック
    if (file.getMimeType() == "application/vnd.google-apps.spreadsheet") {
      let spreadsheet = SpreadsheetApp.openById(file.getId());
      let row = 1;
      let cellPos = "A" + String(row);
      let cell = getCell(spreadsheet, cellPos);
      while(cell != "<EOF>"){
        from.push(cell);
        row ++;
        cellPos = "A" + String(row);
        cell = getCell(spreadsheet, cellPos);
      }
    }
  }

  Logger.log(from);

  for(let i = 0; i < from.length; i++){

    // 検索対象から受信トレイを除きメールを検索
    let delMail = GmailApp.search("from:" + from[i] + " -in:inbox");

    while(delMail.length > 0){
      for (let j = 0; j < delMail.length; j++) {
        delMail[j].moveToTrash();
      }
      delMail = GmailApp.search("from:" + from[i] + " -in:inbox");
    }
  }
}