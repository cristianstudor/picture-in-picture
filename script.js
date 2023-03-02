const videoElement = document.getElementById("video");
const startButton = document.getElementById("start");
const shareButton = document.getElementById("share");

// Prompt to select a media screen, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("error:", error);
  }
}

startButton.addEventListener("click", async () => {
  // Disable Button
  startButton.disabled = true;
  // Start picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  startButton.disabled = false;
});

// Select media screen
shareButton.addEventListener("click", selectMediaStream);
