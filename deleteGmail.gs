// 指定した件名のメールを一括削除する。

function deleteOldMail() {
  //検索条件を指定
  var deleteThreads = GmailApp.search("from:yahoo");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:yahoo");
  }


  //検索条件を指定
  var deleteThreads = GmailApp.search("from:peatix");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:peatix");
  }

  //検索条件を指定
  var deleteThreads = GmailApp.search("from:googlealerts");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:googlealerts");
  }

  //検索条件を指定
  var deleteThreads = GmailApp.search("from:Medium");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:Medium");
  }
  
  //検索条件を指定
  var deleteThreads = GmailApp.search("from:rikunabi");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:rikunabi");
  }
  
  //検索条件を指定
  var deleteThreads = GmailApp.search("from:rikunabi");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:rikunabi");
  }
  
  //検索条件を指定
  var deleteThreads = GmailApp.search("from:itmedia");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:itmedia");
  }

  //検索条件を指定
  var deleteThreads = GmailApp.search("from:seshop");

  while(deleteThreads.length > 0){
    //検索条件に合致するメールをゴミ箱に移動
    for (var i = 0; i < deleteThreads.length; i++) {
      deleteThreads[i].moveToTrash();
    }
    deleteThreads = GmailApp.search("from:seshop");
  }
 
}