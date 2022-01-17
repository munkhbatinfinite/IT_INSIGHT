let custom = {
  currency: function (a, b) {
    try {
      if (isNaN(a * 1)) {
        return a;
      }
      a = a * 1;
      if (b === "full") {
        let c = a
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
          .split(".");
        let i = 0;
        let d = "";
        while (c.length - 1 > i) {
          d = d + "" + c[i];
          i++;
        }
        return d;
      }
      return a.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    } catch (error) {
      return a;
    }
  },
  getCookie: function (cname) {
    var name = cname + "=";
    if (process.browser) {
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  },
  setCookie: function (key, value) {
    document.cookie = key + "=" + value + "; path=/";
  },
  check_json: function (json) {
    let pass = 1;
    try {
      JSON.parse(json);
    } catch (e) {
      pass = 0;
    }
    return pass;
  },
};

export default custom;
