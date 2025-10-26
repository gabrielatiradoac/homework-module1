// Digital Clock Script
    (function(){
      function pad2(n){ return (n < 10 ? '0' : '') + n; }

      function currentTime(){
        const now = new Date();

        let hr24 = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();

        const ampm = hr24 >= 12 ? 'PM' : 'AM';
        let hr12 = hr24 % 12;
        if(hr12 === 0) hr12 = 12;

        const timeText = hr12 + ':' + pad2(min) + ':' + pad2(sec);

        const offsetMin = -now.getTimezoneOffset();
        const sign = offsetMin >= 0 ? '+' : '−';
        const absMin = Math.abs(offsetMin);
        const offH = Math.trunc(absMin / 60);
        const offM = absMin % 60;
        const tzText = 'GMT' + ((offH === 0 && offM === 0) ? '±0' : (sign + offH + (offM ? (':' + pad2(offM)) : '')));

        var tNode = document.getElementById('clock-time');
        var aNode = document.getElementById('clock-ampm');
        var zNode = document.getElementById('clock-tz');
        if(tNode){ tNode.textContent = timeText; }
        if(aNode){ aNode.textContent = ampm; }
        if(zNode){ zNode.textContent = tzText; }
      }

    currentTime();
    setInterval(currentTime, 1000);
  })();