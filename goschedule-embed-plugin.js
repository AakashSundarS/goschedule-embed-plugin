const hostName = "https://goschedule.io";

window.GoscheduleAPI = {
  openPlugin: function (orgName, serviceName) {
      if (document.getElementById("goScheduleiFrame") == null) {
        var iFrame = document.createElement("iframe");
        iFrame.src = `${hostName}/${orgName}/${serviceName}?src=popup`;
        iFrame.id = "goScheduleiFrame";
        iFrame.setAttribute(
            "style",
            "width: 100%;right: 0;position: fixed;top: 0;height: 100%;border: 0px none transparent;display: block;z-index: 9999"
        );
        iFrame.style.background = "rgba(160,160,160,0.7)";
        document.body.appendChild(iFrame);
      }
  },
};

window.addEventListener(
  "message",
  function (event) {
      if (event.origin == `${hostName}`) {
          if (event.data == "close") {
              document.getElementById("goScheduleiFrame").remove();
          }
      }
  },
  false
);