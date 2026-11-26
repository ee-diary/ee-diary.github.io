(function () {
  var items = [];
  function nativeFs(){return document.fullscreenElement||document.webkitFullscreenElement;}
  function isFs(c){return nativeFs()===c||c.classList.contains('sch-pseudo');}
  function refit(it){try{it.pz.resize();it.pz.fit();it.pz.center();it.lbl.textContent='100%';}catch(e){}}
  function attach(it){
    try{if(it.pz)it.pz.destroy();}catch(e){}
    it.pz=svgPanZoom(it.svg,{controlIconsEnabled:false,fit:true,center:true,minZoom:.5,maxZoom:20,
      zoomScaleSensitivity:.3,onZoom:function(z){it.lbl.textContent=Math.round(z*100)+'%';}});
  }
  function toggleFs(it){
    var c=it.card;
    if(isFs(c)){
      if(nativeFs()===c){(document.exitFullscreen||document.webkitExitFullscreen).call(document);}
      else{c.classList.remove('sch-pseudo');setTimeout(function(){refit(it);},60);}
      return;
    }
    var rq=c.requestFullscreen||c.webkitRequestFullscreen;
    if(!rq){c.classList.add('sch-pseudo');setTimeout(function(){refit(it);},60);return;}
    try{var p=rq.call(c);if(p&&p.catch)p.catch(function(){c.classList.add('sch-pseudo');});}catch(e){c.classList.add('sch-pseudo');}
  }
  function build(svg, anchor, title){
    var card=document.createElement('div');card.className='sch-card';
    card.innerHTML='<div class="sch-bar"><span class="sch-title"></span>'+
      '<span class="sch-grp"><button type="button" data-a="out" aria-label="Zoom out">&minus;</button>'+
      '<span class="sch-zoom">100%</span><button type="button" data-a="in" aria-label="Zoom in">+</button></span>'+
      '<span class="sch-grp"><button type="button" data-a="fit" aria-label="Reset">&#x26F6;</button>'+
      '<button type="button" data-a="fs" aria-label="Full screen">&#x2922;</button></span></div>'+
      '<div class="sch-stage"></div><div class="sch-hint">Scroll to zoom · Drag to pan · Double-click to zoom in</div>';
    card.querySelector('.sch-title').textContent=title;
    var stage=card.querySelector('.sch-stage');
    anchor.parentNode.insertBefore(card,anchor);
    anchor.remove();
    stage.appendChild(svg);
    svg.removeAttribute('width');svg.removeAttribute('height');
    var it={card:card,svg:svg,lbl:card.querySelector('.sch-zoom')};
    attach(it);items.push(it);
    card.addEventListener('click',function(e){
      var b=e.target.closest('[data-a]');if(!b)return;
      var a=b.dataset.a;
      if(a==='in')it.pz.zoomIn();else if(a==='out')it.pz.zoomOut();
      else if(a==='fit')refit(it);else if(a==='fs')toggleFs(it);
    });
  }
  function skipInline(svg){
    if(svg.hasAttribute('data-no-zoom')||svg.closest('.sch-card'))return true;
    if(svg.parentNode.closest&&svg.parentNode.closest('svg'))return true;
    if(svg.closest('button,a.popup,.js-plotly-plot,.plotly,.svg-container,.highcharts-container,.apexcharts-canvas,[class*="chart"],[id*="chart"],[class*="plot"],[id*="plot"],[class*="graph"],[id*="graph"]'))return true;
    if(svg.classList.contains('main-svg'))return true;
    var r=svg.getBoundingClientRect();return r.width<300||r.height<120;
  }
  function run(){
    var root=document.querySelector('article .content')||document.querySelector('.post-content');
    if(!root||typeof svgPanZoom!=='function')return;
    // 1) <img class="svg-zoom"> or any <img> pointing to .svg
    root.querySelectorAll('img.svg-zoom, img[src$=".svg"]:not([data-no-zoom])').forEach(function(img){
      if(img.dataset.done)return;img.dataset.done=1;
      fetch(img.src).then(function(r){return r.text();}).then(function(txt){
        var doc=new DOMParser().parseFromString(txt,'image/svg+xml');
        var svg=doc.documentElement;if(svg.nodeName.toLowerCase()!=='svg')return;
        svg=document.importNode(svg,true);
        var anchor=img.closest('a')||img;           // unwrap Chirpy's lightbox link
        build(svg,anchor,img.dataset.title||img.alt||'Circuit schematic');
      }).catch(function(){});
    });
    // 2) inline <svg> pasted directly
    root.querySelectorAll('svg').forEach(function(svg){
      if(skipInline(svg))return;
      build(svg,svg,svg.getAttribute('data-title')||svg.getAttribute('aria-label')||'Circuit schematic');
    });
  }
  if(document.readyState==='complete')run();else window.addEventListener('load',run);
})();