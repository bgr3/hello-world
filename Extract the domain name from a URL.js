function domainName(url){
  return url.replace(/(https*:\/\/)*(w*\.)*([\w-]+)(\.\w+)+(\/)*(\w+)*(\/)*(\.\w+)*/i, "$3");
}
