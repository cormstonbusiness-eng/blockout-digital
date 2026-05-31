/* ============================================================
   BLOCKOUT DIGITAL – interactions
   ============================================================ */
(function(){
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  /* ---------- NAV ---------- */
  function initNav(){
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.nav__burger');
    const mobile = document.querySelector('.nav__mobile');
    if(nav){
      const onScroll = ()=> nav.classList.toggle('scrolled', window.scrollY > 20);
      onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
    }
    if(burger && mobile){
      const toggle = (open)=>{
        burger.classList.toggle('open', open);
        mobile.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      };
      burger.addEventListener('click', ()=> toggle(!mobile.classList.contains('open')));
      mobile.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> toggle(false)));
    }
  }

  /* ---------- SCROLL REVEAL ---------- */
  function initReveal(){
    const els = document.querySelectorAll('.reveal');
    const animOn = document.documentElement.classList.contains('anim');
    if(reduce || !animOn || !('IntersectionObserver' in window)){ return; } // content already visible
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    els.forEach(e=> io.observe(e));
  }

  /* ---------- CUSTOM CURSOR ---------- */
  function initCursor(){
    if(!fine) return;
    document.body.classList.add('cursor-on');
    const dot = document.createElement('div'); dot.className='cursor-dot';
    const ring = document.createElement('div'); ring.className='cursor-ring';
    document.body.append(dot, ring);
    let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
    window.addEventListener('mousemove', e=>{
      mx=e.clientX; my=e.clientY;
      dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
    });
    (function loop(){
      rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
      ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hot = 'a,button,.btn,.link-arrow,.draggable,input,textarea,select,.hero-switch button,.card';
    document.addEventListener('mouseover', e=>{ if(e.target.closest(hot)) ring.classList.add('hot'); });
    document.addEventListener('mouseout', e=>{ if(e.target.closest(hot)) ring.classList.remove('hot'); });
    window.addEventListener('mousedown', ()=> ring.classList.add('down'));
    window.addEventListener('mouseup', ()=> ring.classList.remove('down'));
    document.addEventListener('mouseleave', ()=>{ dot.style.opacity=0; ring.style.opacity=0; });
    document.addEventListener('mouseenter', ()=>{ dot.style.opacity=1; ring.style.opacity=1; });
  }

  /* ---------- MAGNETIC BUTTONS ---------- */
  function initMagnetic(){
    if(!fine || reduce) return;
    document.querySelectorAll('[data-magnetic]').forEach(el=>{
      el.addEventListener('mousemove', e=>{
        const r=el.getBoundingClientRect();
        const x=e.clientX-(r.left+r.width/2), y=e.clientY-(r.top+r.height/2);
        el.style.transform=`translate(${x*0.25}px,${y*0.3}px)`;
      });
      el.addEventListener('mouseleave', ()=> el.style.transform='');
    });
  }

  /* ---------- PARALLAX BLOBS ---------- */
  function initParallax(){
    if(!fine || reduce) return;
    const els = [...document.querySelectorAll('[data-parallax]')];
    if(!els.length) return;
    window.addEventListener('mousemove', e=>{
      const dx=(e.clientX/innerWidth-.5), dy=(e.clientY/innerHeight-.5);
      els.forEach(el=>{
        const s=parseFloat(el.dataset.parallax)||20;
        el.style.translate=`${dx*s}px ${dy*s}px`;
      });
    });
  }

  /* ---------- DRAGGABLE STICKERS ---------- */
  function initDraggable(){
    document.querySelectorAll('.draggable').forEach(el=>{
      let sx,sy,ox=0,oy=0,dragging=false;
      const down = (e)=>{
        dragging=true; el.style.zIndex=50; el.style.transition='none';
        const p = e.touches ? e.touches[0] : e;
        sx=p.clientX; sy=p.clientY;
        const m = el.style.translate.match(/-?\d+\.?\d*/g);
        ox = m ? parseFloat(m[0]) : 0; oy = m && m[1] ? parseFloat(m[1]) : 0;
        e.preventDefault();
      };
      const move = (e)=>{
        if(!dragging) return;
        const p = e.touches ? e.touches[0] : e;
        el.style.translate = `${ox+(p.clientX-sx)}px ${oy+(p.clientY-sy)}px`;
      };
      const up = ()=>{
        if(!dragging) return; dragging=false; el.style.zIndex='';
        el.style.transition='translate .5s cubic-bezier(.34,1.56,.64,1)';
      };
      el.addEventListener('mousedown', down); el.addEventListener('touchstart', down, {passive:false});
      window.addEventListener('mousemove', move); window.addEventListener('touchmove', move, {passive:false});
      window.addEventListener('mouseup', up); window.addEventListener('touchend', up);
    });
  }

  /* ---------- HERO SWITCHER ---------- */
  function initHeroSwitch(){
    const sw = document.querySelector('.hero-switch');
    if(!sw) return;
    const variants = document.querySelectorAll('.hero-variant');
    const btns = sw.querySelectorAll('button');
    const saved = parseInt(localStorage.getItem('bo_hero')||'0',10);
    const set = (i)=>{
      variants.forEach((v,n)=> v.classList.toggle('show', n===i));
      btns.forEach((b,n)=> b.classList.toggle('active', n===i));
      localStorage.setItem('bo_hero', i);
      // retrigger reveals inside the now-visible hero
      const active = variants[i];
      if(active) active.querySelectorAll('.reveal').forEach(r=> r.classList.add('in'));
    };
    btns.forEach((b,i)=> b.addEventListener('click', ()=> set(i)));
    set(isNaN(saved)||saved>=variants.length ? 0 : saved);
  }

  /* ---------- CONTACT FORM ---------- */
  function initForm(){
    const form = document.querySelector('#contact-form');
    if(!form) return;
    const fields = form.querySelectorAll('[required]');
    const showErr = (f, msg)=>{
      const wrap = f.closest('.field');
      wrap.classList.add('field--err');
      let e = wrap.querySelector('.field__err');
      if(!e){ e=document.createElement('div'); e.className='field__err'; wrap.append(e); }
      e.textContent = msg;
    };
    const clearErr = (f)=>{ const w=f.closest('.field'); w.classList.remove('field--err'); const e=w.querySelector('.field__err'); if(e) e.textContent=''; };
    fields.forEach(f=> f.addEventListener('input', ()=> clearErr(f)));

    // budget chips
    form.querySelectorAll('.chip').forEach(c=> c.addEventListener('click', ()=>{
      c.parentElement.querySelectorAll('.chip').forEach(x=> x.classList.remove('on'));
      c.classList.add('on');
      const hid = form.querySelector('#budget'); if(hid) hid.value = c.dataset.val;
    }));
    // service toggle chips (multi)
    form.querySelectorAll('.svc-chip').forEach(c=> c.addEventListener('click', ()=> c.classList.toggle('on')));

    form.addEventListener('submit', e=>{
      e.preventDefault();
      let ok=true;
      fields.forEach(f=>{
        if(!f.value.trim()){ showErr(f,'Don\'t leave us hanging!'); ok=false; }
        else if(f.type==='email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value)){ showErr(f,'Hmm, check that email?'); ok=false; }
        else clearErr(f);
      });
      if(!ok){ form.querySelector('.field--err input,.field--err textarea')?.focus(); return; }
      const card = document.querySelector('#form-card');
      const done = document.querySelector('#form-success');
      if(card&&done){ card.style.display='none'; done.style.display='flex'; done.scrollIntoView?.({block:'nearest'}); confetti(); }
    });
  }

  /* ---------- TINY CONFETTI (canvas-free, DOM) ---------- */
  function confetti(){
    if(reduce) return;
    const colors=['#F85008','#16110D','#FFB088','#fff'];
    for(let i=0;i<46;i++){
      const p=document.createElement('div');
      const s=8+Math.random()*10;
      p.style.cssText=`position:fixed;z-index:9998;top:46%;left:50%;width:${s}px;height:${s}px;
        background:${colors[i%colors.length]};border:2px solid #16110D;border-radius:${Math.random()>.5?'50%':'4px'};
        pointer-events:none;`;
      document.body.append(p);
      const ang=Math.random()*Math.PI*2, vel=120+Math.random()*260;
      const tx=Math.cos(ang)*vel, ty=Math.sin(ang)*vel-160;
      p.animate([
        {transform:'translate(-50%,-50%) rotate(0deg)',opacity:1},
        {transform:`translate(calc(-50% + ${tx}px),calc(-50% + ${ty+420}px)) rotate(${Math.random()*720-360}deg)`,opacity:0}
      ],{duration:1100+Math.random()*700,easing:'cubic-bezier(.2,.6,.3,1)'}).onfinish=()=>p.remove();
    }
  }

  /* ---------- YEAR ---------- */
  function initYear(){ document.querySelectorAll('[data-year]').forEach(e=> e.textContent=new Date().getFullYear()); }

  /* ---------- INIT ---------- */
  function boot(){
    initNav(); initReveal(); initCursor(); initMagnetic();
    initParallax(); initDraggable(); initHeroSwitch(); initForm(); initYear();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
