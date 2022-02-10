const selector = window.location.search.replace("?","");
console.log(selector);
window.location.href = selector;