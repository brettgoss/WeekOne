function tagCreator(tagName) {
  return function(content) {
    return "<" + tagName + ">" + content + "</" + tagName + ">";
  }
}
var spanTag = tagCreator("span");
var divTag = tagCreator("div");
var articleTag = tagCreator("article");
console.log(tagCreator("a"));
//console.log('spanTag is: ' + spanTag);


// Closure example: write a function that can produce html elements
console.log(spanTag("Content goes here."));
// <span>Content goes here</span>

console.log(divTag("Content goes here."));
// <div>Content goes here</div>

console.log(articleTag("Content goes here."));
// <article>Content goes here</article>

// Using closures, we can write a function that can create a *Tag function
