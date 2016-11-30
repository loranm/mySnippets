(function(){
  var articles = 1000;
  var parPage = 5;
  var pages = [];
  var compteur = 0;

  function createPages(articles, parPage){
    if(articles > parPage){
      compteur ++;
      pages.push(compteur);
      articles -= parPage;
      createPages(articles, parPage);
    }
    return pages;
  }

  console.dir(createPages(articles,parPage));
})();
