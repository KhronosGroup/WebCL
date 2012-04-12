/**
 * Converts plaintext type names into hyperlinks pointing to the
 * respective type definitions.  All occurrences of each TypeName
 * inside the given html elements are replaced with the following:
 *
 *   <a href="#TYPENAME">TypeName</a>
 *
 * @param typeDefs a jQuery array of type names to search for
 * @param elements a jQuery array of html elements to search in
 *
 * @author Tomi Aarnio, Nokia Research, 2012
 * @copyright The Khronos Group, 2012
 */
function generateHrefs(typeDefs, elements)
{
  typeDefs.each(function() {
    var className = this.innerHTML;
    var classPlainRegExp = new RegExp(className+" ", "g");
    var classNullableRegExp = new RegExp(className+"\\?", "g");
    var classArrayRegExp = new RegExp(className+"\\[", "g");
    var classLink = "<a href='#" + className.toUpperCase() + "'>" + className + "<\/a>";
    elements.each(function() {
      if (this.innerHTML.indexOf(className) !== -1) {
        this.innerHTML = this.innerHTML.replace(classPlainRegExp, classLink+" ");
        this.innerHTML = this.innerHTML.replace(classNullableRegExp, classLink+"?");
        this.innerHTML = this.innerHTML.replace(classArrayRegExp, classLink+"[");
      }
    });
  });
}
