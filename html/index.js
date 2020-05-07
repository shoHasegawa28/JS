function clickTest() {
      target = document.getElementById("anime_test");
      if (target.className == null || target.className=="") {
        target.className = "active2";
      } else {
        target.className = "";
      }
    }
