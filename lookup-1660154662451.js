(function(window, undefined) {
  var dictionary = {
    "cb30b2c4-f62a-4bc3-afaa-94a69b24e86a": "Home page",
    "2fe1c076-a60d-488e-861b-ab02780da804": "Support",
    "42f5274d-becd-4dbd-92b6-f3e78dad8e21": "the green way",
    "ca3bb045-592e-4616-adc3-7a322139bb1d": "About",
    "fb5ce141-7ada-4f1e-91fc-0b8ebb82dbdf": "Cart",
    "8a1277e6-0428-4e77-8ce9-4839cc78fab3": "Funguy Collective",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);