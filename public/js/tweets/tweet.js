window.addEventListener("DOMContentLoaded", () => {
  bindTweet();
});

function bindTweet() {
  const elements = document.querySelectorAll(".btn-danger");
  const tweetContainer = document.querySelector("#tweet-list-container");

  console.log(tweetContainer);
  elements.forEach((elt) => {
    elt.addEventListener("click", (event) => {
      const tweetId = event.target.getAttribute("tweetid");
      axios
        .delete("/tweets/" + tweetId)
        .then((response) => {
          tweetContainer.innerHTML = response.data;
          bindTweet();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}
