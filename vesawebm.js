// ==UserScript==
// @name vesawebm
// @namespace http://www.vesabbs.com/*
// @include http://*vesabbs.com/*
// @include http://*vesa.kopps.fi/*
// ==/UserScript==



/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


var webms = new Array(

/// Webmit tähän muodossa "koodi||urli",
/// Ei pilkkua viimeselle riville

"heston||http://a.pomf.se/qhjbsm.webm",
"antonio||http://a.pomf.se/vesglb.webm",
"arje||https://zippy.gfycat.com/YawningBleakArrowana.webm"


);

//////////////////////////////////////////////////////////////////////////////
// Älä koske alemmaksi

//////////////////////////////////////////////////////////////////////////////

var textarea = document.getElementsByName("message");
if( textarea[0] != undefined) 
{
	textarea[0].addEventListener("blur", tagreplace, false);
}



function tagreplace()
{
  var textarea = document.getElementsByName("message")[0];
  for(webm in webms)
  {
    var split = webms[webm].split("||");
    var tag = new RegExp(";;" + split[0], "gi");
    var img = "[W]" + split[1] + "[/W]"; 
    textarea.value = textarea.value.replace(tag, img);
  }
}
