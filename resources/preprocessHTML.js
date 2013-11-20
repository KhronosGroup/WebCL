/**
 * A simple jQuery-based HTML preprocessor for the WebCL specification
 * and extension. The preprocessing consists of three operations:
 * 
 * 1) Generate a hyperlinked Table of Contents.
 *
 * 2) Convert plaintext WebCL class names into hyperlinks pointing to
 * their respective definitions.  All occurrences of each ClassName in
 * function signatures are replaced with the following:
 *
 *   <a href="baseURI#CLASSNAME">ClassName</a>
 *
 * 3) Replace inverse quotation marks with opening and closing 'code'
 * tags. For example `foo` will be converted to <code>foo</code>.
 *
 * @author Tomi Aarnio, Nokia Research, 2013
 * @copyright The Khronos Group, 2013
 */

window.onload = preprocessHTML;

function preprocessHTML() {

  // Generate a hyperlinked Table of Contents

  if (window.generateTOC) {
    generateTOC(document.querySelector('#toc'));
  }

  // Convert WebCL class names occurring in function signatures into
  // hyperlinks to the respective type definitions.  In case of the
  // core spec, we use relative URLs and generate the list of WebCL
  // class names from <dfn> elements.  In case of an extension spec,
  // we use absolute URLs to the core spec, and a hardcoded list of
  // class names (which must be kept up to date!).

  var isExtension = (document.title.indexOf("Extension") !== -1);
  var classNames;
  if (isExtension) {
    var specURI = "http://www.khronos.org/registry/webcl/specs/latest/1.0/";
    classNames = [
      "WebCL",
      "WebCLPlatform",
      "WebCLDevice",
      "WebCLContext", 
      "WebCLCommandQueue", 
      "WebCLMemoryObject",
      "WebCLBuffer",
      "WebCLImage",
      "WebCLSampler",
      "WebCLProgram",
      "WebCLKernel",
      "WebCLEvent",
      "WebCLUserEvent",
      "WebCLException",
      "WebCLCallback",
      "WebCLContextProperties",
      "WebCLImageDescriptor",
      "WebCLKernelArgInfo",
    ];
  } else {
    classNames = [];
    $("dfn").each(function(i) { classNames[i] = this.innerHTML; });
  };
  var funcDefs = $("pre.idl, dt.idl-code");
  convertTypeNamesToHyperlinks(classNames, funcDefs, specURI || "");

  // Replace inverse quotation marks with opening and closing 'code'
  // tags.

  var regExp = new RegExp("\`[\\w\\s\\.\\-\\[\\]\\*\\(\\)]*\`", "igm");
  var allText = $("p, dd, li, h2, h3");
  allText.each(function() {
    var matches = this.innerHTML.match(regExp);
    for (var i=0; matches && i < matches.length; i++) {
      var keyword = matches[i].substring(1, matches[i].length-1);
      var wrappedKeyword = "<code>"+keyword+"</code>";
      this.innerHTML = this.innerHTML.replace(matches[i], wrappedKeyword);
    }
  });
};

/**
 * Converts plaintext type names into hyperlinks pointing to the
 * respective type definitions.  All occurrences of each TypeName
 * inside the given html elements are replaced with the following:
 *
 *   <a href="baseURI#TYPENAME">TypeName</a>
 *
 * @param classNames a JavaScript array of class names to search for
 * @param elements a jQuery array of html elements to search & replace in
 * @param baseURI an optional base URI to prefix the generated links with
 *
 * @author Tomi Aarnio, Nokia Research, 2013
 * @copyright The Khronos Group, 2013
 */

function convertTypeNamesToHyperlinks(typeNames, elements, baseURI)
{
  typeNames.forEach(function(typeName) {
    var typePlainRegExp = new RegExp(typeName+" ", "g");
    var typeNullableRegExp = new RegExp(typeName+"\\?", "g");
    var typeArrayRegExp = new RegExp(typeName+"\\[", "g");
    var typeSequenceRegExp = new RegExp(typeName+"&gt;", "g");
    var typeLink = "<a href='" + baseURI + "#" + typeName.toUpperCase() + "'>" + typeName + "<\/a>";
    elements.each(function() {
      if (this.innerHTML.indexOf(typeName) !== -1) {
        this.innerHTML = this.innerHTML.replace(typePlainRegExp, typeLink+" ");
        this.innerHTML = this.innerHTML.replace(typeNullableRegExp, typeLink+"?");
        this.innerHTML = this.innerHTML.replace(typeArrayRegExp, typeLink+"[");
        this.innerHTML = this.innerHTML.replace(typeSequenceRegExp, typeLink+"&gt;");
      }
    });
  });
};
