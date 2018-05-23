const graduation_date = new Date(2018, 5, 25, 18);
const end_of_exams_date = new Date(2018, 5, 19, 14);

function SchoolDay(start, end) {
  if (start.valueOf() > end.valueOf()) {
    return undefined;
  } else {
    this.start = start;
    this.end = end;
  }
  // Contains:
  // returns true if other (Date) is in this (SchoolDay)
  this.contains = function(other) {
    let other_millis = other.valueOf();
    return other_millis > this.start.valueOf() && other_millis < this.end.valueOf();
  };
  
  this.contains_today = function() {
    return this.contains(new Date());
  };
  
  // time_left:
  // takes other (Date)
  // if other is before today, return length of day in milliseconds
  // otherwise, return difference between this.end and other in millisecond
  this.time_left = function(other) {
    if (other.valueOf() < this.start.valueOf()) {
      return this.end.valueOf() - this.start.valueOf();
    } else if (!this.contains(other)) {
      return 0;
    } else {
      return this.end.valueOf() - other.valueOf();
    }
  };
  
  this.time_left_today = function() {
    return this.time_left(new Date());
  };
  
  this.school_hours_after = function() {
    if (this.start.getMonth() === 5 && this.start.getDate() > 18) return 0;
    else {
      return (is_holiday(this.start) ? 0 : this.time_left_today()) + this.tomorrow().school_hours_after();
    }
  };
  
  this.clone = function() {
    return new SchoolDay(
      new Date(this.start.valueOf()),
      new Date(this.end.valueOf())
    );
  };
  
  this.tomorrow = function() {
    return new SchoolDay(
      new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate()+1, 7, 24),
      new Date(this.end.getFullYear(), this.end.getMonth(), this.end.getDate()+1, 14)
    );
  };
}

function new_schoolday(month, day) {
  return new SchoolDay(new Date(2018, month, day, 7, 24), new Date(2018, month, day, 14));
}


function is_holiday(d) {
  return (d.getMonth() === 4 && d.getDate() === 28) // Memorial day
    || (d.getDay() === 0 || d.getDay() === 6) // Weekend
    || (d.getMonth() === 5 && d.getDate() > 18); // After Senior Exams
}

function school_time() {
  var today = new Date();
  return new_schoolday(today.getMonth(), today.getDate()).school_hours_after();
}
