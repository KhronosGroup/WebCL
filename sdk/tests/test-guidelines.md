Contributing WebCL conformance tests Guidelines
===============================================

Thank you for contibuting to the WebCL conformance tests.
Please try to follow these guidelines when submitting a test.

*   If you're new to git [here's a terse set of instructions](http://www.khronos.org/webgl/wiki/Using_Github_To_Contribute "Using Github to Contribute").

*   All changes and/or new tests should go in the sdk/tests/conformance folder

The tests under conformance-suites are snapshots and are only to be updated by
the WebCL Working Group when "official" snapshots are taken.

*   Please use the Khronos Group License (MIT)

These lines appear at the top of every html and js file under sdk/tests/conformance

    <!--
    /*
    ** Copyright (c) 2014 The Khronos Group Inc.
    **
    ** Permission is hereby granted, free of charge, to any person obtaining a
    ** copy of this software and/or associated documentation files (the
    ** "Materials"), to deal in the Materials without restriction, including
    ** without limitation the rights to use, copy, modify, merge, publish,
    ** distribute, sublicense, and/or sell copies of the Materials, and to
    ** permit persons to whom the Materials are furnished to do so, subject to
    ** the following conditions:
    **
    ** The above copyright notice and this permission notice shall be included
    ** in all copies or substantial portions of the Materials.
    **
    ** THE MATERIALS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    ** EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    ** MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    ** IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    ** CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    ** TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    ** MATERIALS OR THE USE OR OTHER DEALINGS IN THE MATERIALS.
    */
    -->

*   Please use code similar to the code in existing tests

    Ideally, copy an existing test and modify it for your new test. Try not to duplicate
    code that already exists where approriate. In particular

    *   Do not use browser specific code.

        *   Do not check the browser version. Use feature detection.

        *   If you do need feature detection consider putting it into WebCLTestUtils so that
            other tests can go through the same abstraction and the workaround is isolated
            to one place.

        *   Vendors may place test harness specific code in the testing infrustructure.

                resources/js-test-pre.js
                conformance/more/unit.js

    *   Indent with spaces not tabs. (not everyone uses your tab settings).

    *   All HTML files must have a `<!DOCTYPE html>`

    *   All HTML files must have a `<meta charset="utf-8">`

    *   All JavaScript must start with "use strict";

    *   use the functions in WebCLTestUtils rather than duplicating functionality.

        In particular, as much as possible, keep the WebCL code in your test specific
        to the issue being tested and try to use the helper functions to handle
        common setup.

    *   TODO: ADD MORE SPECIFIC INSTRUCTIONS.


*   If adding a new test edit the approriate 00_test_list.txt file

    Each folder has a 00_test_list.txt file that lists the test in that folder.
    Each new test should be prefixed with the option `--min-version <version>` where
    version is 1 more than the newest official verison. At the time of this writing
    all new tests should be prefixed with `--min-version 1.0.0`
