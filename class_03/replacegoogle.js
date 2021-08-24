//Declare DOM Node
let googleLogo = document.querySelector("img.lnXdpd");
let centerOne = document.querySelectorAll("center")[1]; //Since there are 2 NodeList the [x] will identified which node list I want to use
let yahooSearch = centerOne.querySelector("input.gNO89b");

//Setting New Attribute
let changeLogo = googleLogo.setAttribute(
  "src",
  "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
);
let changeYahoo = yahooSearch.setAttribute("value", "Yahooo!");

//Remove Attribute
let removeSecondLogo = googleLogo.removeAttribute("srcset");
