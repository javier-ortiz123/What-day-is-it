var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("let's get the week started!");
} else if (weekday === "Wednesday") {
  console.log("let's get the week started!");
} else if (weekday === "Thursday") {
  console.log("let's get the week started!");
} else if (weekday === "Friday") {
  console.log("let's get the week started!");
} else {
  console.log("WEEKEND, YAYYY!!!");
}
