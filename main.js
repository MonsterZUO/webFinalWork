let iCount = 2;
window.onload = function() {
  // 时间
  
  showDate();
  setInterval(showDate, 1000);
  
  //轮播图
  if (document.getElementById('a1') != null) {
    document.getElementById('a1').onclick = function() {
      iCount = 1;
      changebgcolor(iCount);
    };
  }
  if (document.getElementById('a2') != null) {
    document.getElementById('a2').onclick = function() {
      iCount = 2;
      changebgcolor(iCount);
    };
  }
  if (document.getElementById('a3') != null) {
    document.getElementById('a3').onclick = function() {
      iCount = 3;
      changebgcolor(iCount);
    };
  }
  if (document.getElementById('a4') != null) {
    document.getElementById('a4').onclick = function() {
      iCount = 4;
      changebgcolor(iCount);
    };
  }
  let iCarouselid = window.setInterval('carousel()', 2000);
  
  select();
};

function carousel() {
  let sImgSrc = eval('\'images/slider\'+iCount.toString()+\'.jpg\'');
  let sAchange = eval('\'a\'+iCount.toString()');
//  记录需要变回颜色的连接顺序
  let iA = iCount - 1;
  if (iA == 0) {
    iA = 4;
  }
  let sArestore = eval('\'a\'+iA.toString()');
  document.getElementById('banner').src = sImgSrc;
  document.getElementById(sAchange).style.backgroundColor = 'hsl(20,30%,50%)';
  document.getElementById(sArestore).style.backgroundColor = 'hsl(20,50%,30%)';
  iCount += 1;
  if (iCount == 5) {iCount = 1;}
}

function changebgcolor(iNum) {
  document.getElementById('banner').src = eval(
      '\'images/slider\'+iNum.toString()+\'.jpg\'');
  for (let iC = 1; iC <= 4; iC++) {
    let sA = eval('\'a\'+iC.toString()');
    if (iC == iNum) {
      document.getElementById(sA).style.backgroundColor = 'hsl(20,30%,50%)';
    } else {
      document.getElementById(sA).style.backgroundColor = 'hsl(20,50%,30%)';
    }
  }
}

function showDate() {
  let curDate = new Date();
  let year = curDate.getFullYear();
  let month = curDate.getMonth() + 1;//值在0-11 所以要+1
  let date = curDate.getDate();
  let day = curDate.getDay();
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  let hours = curDate.getHours();
  let minutes = curDate.getMinutes();
  let seconds = curDate.getSeconds();
  let str;
  str = year + '年' + time(month) + '月' + time(day) + '日&nbsp;&nbsp;' +
      week[day] + '&nbsp;&nbsp;' + time(hours) + '时' + time(minutes) + '分' +
      time(seconds) + '秒';
  // document.write(str);
  document.getElementById('showtime').innerHTML = str;
}

function showTicketCurDate() {
  let curDate = new Date();
  let month = curDate.getMonth() + 1;//值在0-11 所以要+1
  let day = curDate.getDay();
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  let str;
  str = week[day] + '&nbsp;' + time(month) + '-' + time(day);
  // document.write(str);
  document.getElementById('TicketCurTime').innerHTML = str;
}

function showTicketTomorrowDate() {
  let curDate = new Date();
  let month = curDate.getMonth() + 1;//值在0-11 所以要+1
  let day = curDate.getDay() + 1;
  
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  let str;
  str = week[day] + '&nbsp;' + time(month) + '-' + time(day);
  // document.write(str);
  document.getElementById('TicketCurTime').innerHTML = str;
}

// function isFull(y, m, d) {
//   let isY = y%
//   let month1 = [0,2,4,6,7,9,11];
//   if(m==1){
//     if(d>28)
//   }
//   else if(month1.includes(m)){
//     return true;
//   }
// }

function time(x) {
  return x > 9 ? x : 0 + x;
}
