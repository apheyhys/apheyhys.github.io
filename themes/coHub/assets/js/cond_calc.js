ReCalc()
function ReCalc() {
    let Qu, Q1;
    window_orientation = document.getElementsByName('window_orientation')[0].value;    
    if ((window_orientation == 3) || (window_orientation == 4))
      Qu = 35;
    else if (window_orientation == 2)
      Qu = 40;
    else
      Qu = 30;

    document.getElementsByName('s')[0].value;
    document.getElementsByName('h')[0].value;
  
    Q1 = Qu * (document.getElementsByName('s')[0].value) * (document.getElementsByName('h')[0].value);
    Qa = Q1 + (document.getElementsByName('teh')[0].value * 300) + (document.getElementsByName('man')[0].value * 100);
    Qd = Qa / 20;
    Qmin = Math.round((Qa - Qd) / 10) / 100;
    Qmax = Math.round((Qa + document.getElementsByName('room_type')[0].value * Qd) / 10) / 100;

    document.getElementById('qa').textContent = Math.round(Qa / 10) / 100;
    document.getElementById('dq').textContent = "от " + Qmin + " до " + Qmax;
  }