const apiUrl =
  location.protocol +
  "//" +
  location.hostname +
  ":8080" +
  process.env.BASE_URL +
  "api";

export default {
  fetchNodes() {
    return fetch(apiUrl + "/nodes/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .catch((reason) => {
        console.log("Error fetching node data: ", reason);
      });
  },
  fetchSelectedNode(pubkey) {
    return fetch(apiUrl + "/nodes/" + pubkey)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .catch((reason) => {
        console.log("Error fetching node data: ", reason);
      });
  },
};
