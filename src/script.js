function calculateRate() {
  let principal = document.querySelector("#principal").value;
  let interest = document.querySelector("#interest").value;
  let years = document.querySelector("#years").value;

  interest = interest / 100;

  principal = Number(principal);
  interest = Number(interest);
  years = Number(years);

  if (principal < 0 || interest < 0 || years < 0) {
    alert("Please enter valid positive numbers.");
  }

  let rate = principal * (1 + interest * years);

  let formattedRate = rate.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  document.getElementById("totalAmount").innerHTML = formattedRate;
}
