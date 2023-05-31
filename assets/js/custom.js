var darkmode = false;
var cookiesAccepted = false;


// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent(Accepted){
  deleteCookie('user_cookie_consent');
  if(Accepted)
  {
    setCookie('user_cookie_consent', 1, 30);
    cookiesAccepted=true;
  }
  else
  {
    cookiesAccepted=false;
  }
  document.getElementById("cookieNotice").style.display = "none";
}

function DarkOrLightMode(darkMode){
  if (darkMode)
  {
    document.documentElement.className = 'dark-theme';
    const footer = document.getElementById('footer');
    darkmode=true
  }
  else
  {
    document.documentElement.className = '';
    darkmode=false
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (getCookie("theme")=="dark"){
    DarkOrLightMode(true);
    console.log("Mmm cookies")
  }
  else
  {
    console.log("Awwwh no cookies :(")
  }
})()

$(document).ready(function(){
  
    //const body = document.querySelector('body');
    if (darkmode)
    {
      $('#theme_switch').prop("checked", true);
    }
    else
    {
      $('#theme_switch').prop("checked", false);
    }
    $('#theme_switch').change(function() {
      var cookie_consent = getCookie("user_cookie_consent");
      if(cookie_consent != ""){
          document.getElementById("cookieNotice").style.display = "none";
          cookiesAccepted=true;
      }else{
          document.getElementById("cookieNotice").style.display = "block";
          cookiesAccepted=false;
      }
      if(cookiesAccepted)
      {
        if($(this).is(':checked'))
        {
          DarkOrLightMode(true);
          setCookie("theme", 'dark', "30");
        }
        else
        {
          DarkOrLightMode(false);
          deleteCookie("theme");
        }
      }
      else
      {
        DarkOrLightMode(false);
        $('#theme_switch').prop("checked", false);
      }
    });
});

function test(){
    console.log("Test2");

}


