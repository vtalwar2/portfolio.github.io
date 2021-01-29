(function () {})();

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function login() {
  let obj = {
    userId: "09872526",
    userEmail: "test@gmail.com",
    userMobile: "9988228822",
  };
  omni.userLogin("129292", obj, "wksjiwhdihwidh");
}

function logout() {
  let obj = {
    userId: "09872526",
    userEmail: "test@gmail.com",
    userMobile: "9988228822",
  };
  omni.userLogout("889928", obj, "wdiwhhidhwdh");
}

function getData() {
  const Http = new XMLHttpRequest();
  const url = "https://api.wazirx.com/api/v2/market-status";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
}
