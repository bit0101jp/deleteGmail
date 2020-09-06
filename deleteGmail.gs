// 指定した From のメールを一括削除する。

function deleteGMail() {
  let from = ["yahoo", "peatix"];

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