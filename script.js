function do_update() {
  setInterval(do_school, 900);
  setInterval(do_full, 100);
  setInterval(do_exam, 100);
}

function do_full() {
  let now = Date.now();
  let graduation = graduation_date.valueOf();
  let diff_millis = graduation-now;
  var string = remainder_string(diff_millis);
  if (diff_millis>0) document.getElementById("full-content").innerText = string;
  else document.getElementById("full-content").innerText = "None!";
}

function do_exam() {
  let now = Date.now();
  let graduation = end_of_exams_date.valueOf();
  let diff_millis = graduation-now;
  var string = remainder_string(diff_millis);
  if (diff_millis>0) document.getElementById("exam-content").innerText = string;
  else document.getElementById("exam-content").innerText = "None!";
}

function do_school() {
  var acc = school_time();
  console.log(acc);
  var string = remainder_hour_string(acc);
  if (acc > 0) document.getElementById("school-content").innerText = string;
  else document.getElementById("school-content").innerText = "None!";
}

function remainder_string(diff_millis) {
  let diff_secs = Math.floor(10*(diff_millis%(60*1000)))/10000;
  let diff_mins = Math.floor(Math.floor(diff_millis%(60*60*1000))/(60*1000));
  let diff_hours  = Math.floor(Math.floor(diff_millis%(24*60*60*1000))/(60*60*1000));
  let diff_days  = Math.floor(diff_millis/(24*60*60*1000));
  var string = diff_days.toString();
  string = string.concat(" Days, ", diff_hours.toString(), " hours, ",
    diff_mins.toString(), " minutes and ", diff_secs.toFixed(1).toString(), " seconds.");
  return string;
}

function remainder_hour_string(diff_millis) {
  let diff_secs = Math.floor(10*(diff_millis%(60*1000)))/10000;
  let diff_mins = Math.floor(Math.floor(diff_millis%(60*60*1000))/(60*1000));
  let diff_hours  = Math.floor(diff_millis/(60*60*1000));
  var string = diff_hours.toString();
  string = string.concat(" hours, ",
    diff_mins.toString(), " minutes and ", diff_secs.toFixed(0).toString(), " seconds.");
  return string;
}
