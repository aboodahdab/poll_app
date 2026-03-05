const everythingDiv = document.querySelector("#the-everything-div");

function makeHtml(voteName, choices) {
  console.log(voteName, choices);
  let htmlElements = "";
  for (let i = 0; i < choices.length; i += 1) {
    let choice = choices[i];
    htmlElements += `<div>${choice}</div>`;
  }
  everythingDiv.innerHTML += htmlElements;
}
async function gatherInfo() {
  const infoFetch = await fetch("/get_info", {
    method: "POST",
    body: JSON.stringify({
      unique_id: unique_id,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!infoFetch.ok) {
    console.log("not working not okay", infoFetch.status);
    return;
  }
  const jsoned_data = await infoFetch.json();
  console.log(jsoned_data);
  makeHtml(
    jsoned_data["intel_info"]["voting_name"],
    jsoned_data["intel_info"]["voting_options"],
  );
}
gatherInfo();
