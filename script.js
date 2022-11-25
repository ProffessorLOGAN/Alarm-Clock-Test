function digitalAlarm() {
  let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let session = document.getElementById('session');

  if(hrs>= 12){
    session.innerHTML= 'PM';
  }else{
    session.innerHTML= 'Am';
  }

  document.getElementById('hours').innerHTML= hrs;
  document.getElementById('minutes').innerHTML= min;
  document.getElementById('seconds').innerHTML= sec;
}
setInterval(digitalAlarm, 10);
