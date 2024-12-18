var darkmode = false;
var cookiesAccepted = false;


// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie - set expiration in past so cookie is removed immediately when this session ends
function deleteCookie(cname) {
  if (getCookie("user_cookie_consent")!="")
  {
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
  }
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
  }
})()

function toggleTheme() {
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
    if (document.getElementById("ThemeToggleImg").getAttribute("status") == "day")
    {
      DarkOrLightMode(true);
      setCookie("theme", 'dark', "30");
      document.getElementById("ThemeToggleImg").setAttribute("status", "night");
      document.getElementById("ThemeToggleImg").src="images/sun-icon.png";
    }
    else
    {
      DarkOrLightMode(false);
      deleteCookie("theme");
      document.getElementById("ThemeToggleImg").setAttribute("status", "day");
      document.getElementById("ThemeToggleImg").src="images/moon-icon.png";
    }
  }
  else
  {
    DarkOrLightMode(false);
    document.getElementById("ThemeToggleImg").src="images/moon-icon.png";
  }
}

$(document).ready(function(){
  
    //const body = document.querySelector('body');
    if (darkmode)
    {
      $('#theme_switch').prop("checked", true);
      document.getElementById("ThemeToggleImg").src="images/sun-icon.png";
    }
    else
    {
      $('#theme_switch').prop("checked", false);
      document.getElementById("ThemeToggleImg").src="images/moon-icon.png";
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
        document.getElementById("ThemeToggleImg").src="images/sun-icon.png";
      }
      else
      {
        DarkOrLightMode(false);
        $('#theme_switch').prop("checked", false);
        document.getElementById("ThemeToggleImg").src="images/moon-icon.png";
      }
    });
});

