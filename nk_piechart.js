// piechart
(function() {
    "use strict";
    let piechart = document.querySelectorAll('.nk_piechart');
    let piechartCount = piechart.length;
    if(piechartCount > 0){
        for (let i = 0; i < piechartCount; i++) {
            let during = 1300;
            let p = parseInt(piechart[i].textContent);
            let p2 = p;
            if(p == 100) p2 = 101;
            if(piechart[i].classList.contains('animated')){
                piechart[i].innerHTML = '<svg viewBox="0 0 32 32"><linearGradient id="grd" y2="30%"><stop offset="0%" stop-color="#2fab8b"/><stop offset="100%" stop-color="#49d0aa"/></linearGradient><circle class="c1" stroke="url(#grd)" style="animation:spin'+i+' '+during+'ms ease-out forwards;" r="16" cx="16" cy="16"></circle><circle class="c2" r="12.9" cx="16" cy="16"></circle><style><![CDATA[@keyframes spin'+i+' {to{stroke-dasharray:'+p2+' 100;}]]></style></svg><div>'+p+'%</div>';
                let div = piechart[i].querySelector('div');
                let t = 0;
                let inerval = parseInt(during / p);
                let tm = setInterval(function(){
                    if (t <= p){
                        div.textContent = t + '%';
                        t++;
                    } else {
                        clearInterval(tm);
                    }
                }, inerval);
            } else {
                piechart[i].innerHTML = '<svg viewBox="0 0 32 32"><linearGradient id="grd" y2="30%"><stop offset="0%" stop-color="#2fab8b"/><stop offset="100%" stop-color="#49d0aa"/></linearGradient><circle class="c1" stroke="url(#grd)" stroke-dasharray="'+p+' 100" r="16" cx="16" cy="16"></circle><circle class="c2" r="12.9" cx="16" cy="16"></circle></svg><div>'+p+'%</div>';
            }
        }
    }
})();