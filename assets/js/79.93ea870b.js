(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{732:function(e,t,i){"use strict";i.r(t);var r=i(26),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"repository-directory-structure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#repository-directory-structure"}},[e._v("#")]),e._v(" Repository directory structure")]),e._v(" "),i("p",[e._v("A repository directory contains a collection of exercises. We expect this repository directory to have a specific structure:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("A "),i("code",[e._v("dirconfig.json")]),e._v(" file")]),e._v(": this file contains the "),i("a",{attrs:{href:"/en/references/exercise-config"}},[e._v("repository-wide configuration")]),e._v(". This configuration will be merged with the "),i("code",[e._v("config.json")]),e._v(" file in an exercise's directory. These values can be overridden by the config files in the lower directory.")]),e._v(" "),i("li",[i("strong",[e._v("A "),i("code",[e._v("public")]),e._v(" directory")]),e._v(": this directory contains files that can be used anywhere in Dodona:\nYou can add pictures or other resources that can then be referred to in the description of the course or a series. The URL to these files can be found on the repository page on Dodona. These are public elements, so these files should not be confidential.")]),e._v(" "),i("li",[i("strong",[e._v("A "),i("code",[e._v("media")]),e._v(" directory")]),e._v(": this directory contains media files that can be used in all exercise descriptions in that repository only. Dodona will automatically fallback to this folder if a media item is referred to but not found in the "),i("code",[e._v("media")]),e._v(" directory of the exercise it was used in.")]),e._v(" "),i("li",[i("strong",[e._v("Optionally multiple "),i("code",[e._v("exercise")]),e._v(" directories")]),e._v(": these directories contain the information for the individual exercises. For more information regarding their structure, please see the "),i("a",{attrs:{href:"/en/references/exercise-directory-structure"}},[e._v("exercise directory structure page")]),e._v(".")])]),e._v(" "),i("p",[e._v("Dodona ignores other files and directories. You can thus freely create additional files (for example, containing the solutions to your exercises) or create a personal exercise hierarchy. The only thing that isn't allowed is placing exercise directories inside other exercise directories.")]),e._v(" "),i("h2",{attrs:{id:"example-of-a-valid-repository-structure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-valid-repository-structure"}},[e._v("#")]),e._v(" Example of a valid repository structure")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("+-- README.md                      # Describes the repository\n+-- public                         # Contains files that belong to the course or series\n|   +-- CodersApprentice.png       # An example image to reuse throughout the course\n+-- media                          # Contains files that can be used in any exercise description\n|   +-- RedBlackTree.png           # An example image if you have multiple exercises involving red-black trees\n+-- dirconfig.json                 # Shared config for all exercises in subdirs\n+-- week01                         # We could group exercises per week\n|   +-- intsum                     # short name for the exercise\n|   |   +-- config.json            # configuration of the exercise\n|   |   +-- evaluation             #\n|   |   |   +-- intsum_test.hs     # A Haskell test file\n|   |   +-- description            #\n|   |   |   +-- description.nl.md  # The description in Dutch\n|   |   |   +-- description.en.md  # The description in English\n|   |   |   +-- media              #\n|   |   |   |   +-- some_image.png # An image used in the description\n|   |   |   +-- boilerplate        #\n|   |   |       +-- boilerplate    # Default (here Dutch?) boilerplate code\n|   |   |       +-- boilerplate.en # English boilerplate code\n|   |   +-- workdir                # current working dir for student code\n|   |       +-- intlines.txt       # a file available to the student\n|   :\n:\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);