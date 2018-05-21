function do_update() {
  console.log("update");
  do_full();
  do_school();
  setInterval(do_update, 150);
}

function do_full() {
  let now = Date.now();
  let graduation = new Date(2018, 5, 24, 18).valueOf();
  let diff_millis = graduation-now;
  let diff_secs = Math.floor(10*(diff_millis%(60*1000)))/10000;
  let diff_mins = Math.floor(Math.floor(diff_millis%(60*60*1000))/(60*1000));
  let diff_hours  = Math.floor(Math.floor(diff_millis%(24*60*60*1000))/(60*60*1000));
  let diff_days  = Math.floor(diff_millis/(24*60*60*1000));
  var string = diff_days.toString();
  string = string.concat(" Days, ", diff_hours.toString(), " hours, ",
    diff_mins.toString(), " minutes and ", diff_secs.toFixed(1).toString(), " seconds.")
  if (diff_millis>0) document.getElementById("full-content").innerText = string;
  else document.getElementById("full-content").innerText = "None!";
}
