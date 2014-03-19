<?php
$static_title = 'hronos WebCL API Registry';
$static_breadcrumb = array(
    '/registry/' => 'Registry',
    'NOLINK' => 'WebCL Registry'
);
include_once("../../assets/static_pages/khr_page_top.php");
?>

<h1 style="text-align:center"> Khronos WebCL API Registry </h1>

<p> The WebCL API registry contains specifications of the core API;
    specifications of Khronos- and vendor-approved WebCL extensions;
    IDL files corresponding to the specifications; and other related
    documentation.</p>

<h6> WebCL Core API Specification, IDL, and Documentation </h6>

<p><a href="specs/latest/1.0">WebCL current draft specification</a>.</p>
<!-- <p><a href="specs/latest/1.0/webcl.idl"> webcl.idl </a>
     WebIDL description of the WebCL API. </p> -->

<h6 id="otherextspecs">WebCL Extensions</h6>
<p><a href="extensions/">WebCL extension registry</a></p>

<?php include_once("../../assets/static_pages/khr_page_bottom.php"); ?>
</body>
</html>
