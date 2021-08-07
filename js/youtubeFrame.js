"use strict";
export function createIframe() {
  const youtubeBox = document.querySelector(".youtube");

  // Find a poster for a video, knowing the youtube ID of it
  youtubeBox.style.backgroundImage =
    "url(http://i.ytimg.com/vi/"
    + youtubeBox.id
    + "/sddefault.jpg)";

  // Place the Play button above the poster to create a video player effect
  const play = document.createElement("div");
  play.setAttribute("class", "play");
  youtubeBox.appendChild(play);

  youtubeBox.addEventListener("click", function () {
    /**
     *  Create an iFrame and start playing the video immediately 
     *  because the video autoplay attribute has value 1
     **/
    const iframe = document.createElement("iframe");
    iframe.classList.add('iframe');

    // The height and width of IFRAME will be like a parent element
    iframe.style.width = this.offsetWidth + "px";
    iframe.style.height = this.offsetHeight + "px";

    // Replacing the initial image (poster) on iFrame
    this.parentNode.replaceChild(iframe, this);

    // Adding all of the needed attributes
    const iframe_url =
      "https://www.youtube.com/embed/"
      + this.id
      + "?autoplay=1&autohide=1";
    if (iframe.getAttribute("data-params")) {
      return iframe_url += "&" + iframe.getAttribute("data-params")
    };
    iframe.setAttribute("src", iframe_url);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", true);

    // refresh the iframe container
    document.getElementsByTagName("iframe")[0].src = document.getElementsByTagName("iframe")[0].src
  });

}