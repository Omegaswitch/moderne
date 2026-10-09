const menu=document.querySelector('.menu'),nav=document.querySelector('.nav-links'),header=document.querySelector('.header'),heroSection=document.querySelector('.hero');
    const updateHeader=()=>header.classList.toggle('is-visible',heroSection.getBoundingClientRect().bottom<=0);
    addEventListener('scroll',updateHeader,{passive:true});addEventListener('resize',updateHeader);updateHeader();
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
    const dialog=document.querySelector('dialog'),large=dialog.querySelector('img'),lightbox=dialog.querySelector('.lightbox');let closeTimer;
    const showImage=img=>{clearTimeout(closeTimer);large.src=img.src;large.alt=img.alt;if(!dialog.open)dialog.showModal();requestAnimationFrame(()=>lightbox.classList.add('is-open'))};
    const closeViewer=()=>{if(!dialog.open)return;lightbox.classList.remove('is-open');closeTimer=setTimeout(()=>dialog.close(),340)};
    document.querySelectorAll('.render,.kit-image').forEach(img=>{img.addEventListener('click',()=>showImage(img));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showImage(img)}})});
    dialog.querySelector('button').addEventListener('click',closeViewer);dialog.addEventListener('click',e=>{if(e.target===dialog||e.target===lightbox)closeViewer()});dialog.addEventListener('cancel',e=>{e.preventDefault();closeViewer()});
    const colorChoices=['#e20f2a','#efa900','#07559c','#d8d1c1','#171615','#e39ab9','#81817f','#ee671e','#f0eee6'];
    document.querySelectorAll('.nav-links a').forEach(link=>{const pick=()=>link.style.setProperty('--hover-color',colorChoices[Math.floor(Math.random()*colorChoices.length)]);link.addEventListener('pointerenter',pick);link.addEventListener('focus',pick)});
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches){let pending=false;const hero=document.querySelector('.hero-image');const move=()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{const y=scrollY;hero.style.transform=`translate3d(0,${Math.min(y*.12,100)}px,0)`;pending=false})};addEventListener('scroll',move,{passive:true})}
