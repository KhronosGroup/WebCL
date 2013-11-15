// Extracts WebIDL code from <pre class="idl"> elements

function generateWebIDL(document) {
  var s = Array.prototype.slice.call(document.querySelectorAll("pre.idl")).map(function(n) { return n.textContent; }).join('\n\n'); 
  document.open("text/plain");
  document.write(s);
  document.close();
}
