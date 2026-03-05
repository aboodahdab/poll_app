const $submitButton = document.querySelector("button");
const $nameInput = document.querySelector("#name-input");
const $option1 = document.querySelector("#option1");
const $option2 = document.querySelector("#option2");
$submitButton.addEventListener("click", async () => {
  console.log("hi");
  const val = $nameInput.value;
  const option1Val = $option1.value;
  const option2Val = $option2.value;
  const createFetch = await fetch("/create", {
    method: "POST",
    body: JSON.stringify({
      question: val,
      options: [option1Val, option2Val],
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!createFetch.ok) {
    return;
  }

  const jsoned_result = await createFetch.json();
  console.log(jsoned_result, "it's result");
});
