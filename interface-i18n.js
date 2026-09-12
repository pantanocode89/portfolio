(() => {
  const words = {
    en: {top:'Back to top',close:'Close image',preview:'Project image preview',enlarge:'Enlarge',official:'Visit official website ↗',menu:'Menu',country:'Austria',language:'Language',navigation:'Navigation',group:'GroupOrder administration dashboard',chalet:'Alpenchalets Flachauer Gutshof website',portrait:'Miloš Pantić at work',operations:'OPERATIONS',admin:'Administrator',live:'LIVE',core:'CORE',sync:'SYNC',reports:'REPORTS'},
    sr: {top:'Nazad na vrh',close:'Zatvori sliku',preview:'Pregled slike projekta',enlarge:'Uvećaj',official:'Posetite zvanični sajt ↗',menu:'Meni',country:'Austrija',language:'Jezik',navigation:'Navigacija',group:'GroupOrder — pregled upravljanja porudžbinama',chalet:'Sajt Alpenchalets Flachauer Gutshof',portrait:'Miloš Pantić na poslu',operations:'POSLOVANJE',admin:'Upravnik sistema',live:'UŽIVO',core:'JEZGRO',sync:'SINHRONIZACIJA',reports:'IZVEŠTAJI'},
    de: {top:'Nach oben',close:'Bild schließen',preview:'Projektbild-Vorschau',enlarge:'Vergrößern',official:'Offizielle Website besuchen ↗',menu:'Menü',country:'Österreich',language:'Sprache',navigation:'Navigation',group:'GroupOrder — Bestellverwaltung',chalet:'Website von Alpenchalets Flachauer Gutshof',portrait:'Miloš Pantić bei der Arbeit',operations:'BETRIEB',admin:'Systemverwaltung',live:'AKTUELL',core:'KERN',sync:'ABGLEICH',reports:'BERICHTE'}
  };
  const set=(selector,value)=>document.querySelectorAll(selector).forEach(el=>{if(el.textContent!==value)el.textContent=value;});
  const attr=(el,key,value)=>{if(el.getAttribute(key)!==value)el.setAttribute(key,value);};
  function apply(){
    const lang=document.documentElement.lang,c=words[lang]||words.en;
    set('.official-site',c.official);set('.menu-toggle',c.menu);
    set('.intro-code-rain',({en:'01 · IDEAS · DESIGN · DEVELOPMENT · RESULTS',sr:'01 · IDEJE · DIZAJN · RAZVOJ · REZULTATI',de:'01 · IDEEN · GESTALTUNG · ENTWICKLUNG · ERGEBNISSE'})[lang]||'');
    document.querySelectorAll('.back-to-top-button').forEach(el=>{attr(el,'aria-label',c.top);attr(el,'title',c.top);});
    document.querySelectorAll('.portfolio-lightbox').forEach(el=>attr(el,'aria-label',c.preview));
    document.querySelectorAll('.portfolio-lightbox button').forEach(el=>attr(el,'aria-label',c.close));
    document.querySelectorAll('.language-switch').forEach(el=>attr(el,'aria-label',c.language));
    document.querySelectorAll('nav').forEach(el=>attr(el,'aria-label',c.navigation));
    [['.grouporder-project-image',c.group],['.chalet-result img',c.chalet],['.panta-portrait img',c.portrait]].forEach(([selector,label])=>document.querySelectorAll(selector).forEach(el=>{attr(el,'alt',label);if(el.getAttribute('role')==='button')attr(el,'aria-label',label+' — '+c.enlarge);}));
    set('.system-mark small',c.operations);set('.system-user small',c.admin);set('.activity-head>small',c.live);
    document.querySelectorAll('.activity-health span').forEach((el,i)=>{const text=[c.core,c.sync,c.reports][i];if(el.lastChild?.nodeType===3&&el.lastChild.textContent!==text)el.lastChild.textContent=text;});
    const days={en:['M','T','W','T','F','S','S'],sr:['P','U','S','Č','P','S','N'],de:['M','D','M','D','F','S','S']}[lang]||[];
    document.querySelectorAll('.chart-bars i span').forEach((el,i)=>{if(days[i]&&el.textContent!==days[i])el.textContent=days[i];});
    const trends={sr:[['+6,2%','4 prijavljena gosta','3 visoka prioriteta','+11,4%'],['+18 danas','+4,6%','U predviđenom roku','+9,8%'],['+3 danas','41 od 47','+2,1%','+14,2%']],de:[['+6,2%','4 eingecheckt','3 hohe Prioritäten','+11,4%'],['+18 heute','+4,6%','Im Zeitplan','+9,8%'],['+3 heute','41 von 47','+2,1%','+14,2%']]};
    const active=Number(document.querySelector('[data-industry][aria-selected="true"]')?.dataset.industry||0);
    if(trends[lang])document.querySelectorAll('.system-metrics article>span').forEach((el,i)=>{const t=trends[lang][active][i];if(el.textContent!==t)el.textContent=t;});
    const contact={en:'Contact',sr:'Kontakt',de:'Kontakt'}[lang]||'Contact';
    document.querySelectorAll('.footer-contact').forEach(el=>attr(el,'aria-label',contact));
    document.querySelectorAll('.footer-contact a').forEach(el=>{const provider=el.href.startsWith('mailto:')?'E-mail':el.href.startsWith('viber:')?'Viber':'WhatsApp';attr(el,'aria-label',contact+' — '+provider);});
    const walker=document.createTreeWalker(document.querySelector('.legal-main')||document.createElement('div'),NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){const n=walker.currentNode;if(/^(Austria \/ Österreich|Austria|Austrija|Österreich)$/.test(n.textContent.trim())&&n.textContent!==c.country)n.textContent=c.country;}
    if(document.body.classList.contains('case-page')){
      const title=document.querySelector('h1')?.textContent;
      if(title)document.title=title+' | Torlac Solutions';
      const desc=document.querySelector('.case-hero .intro')?.textContent;
      const meta=document.querySelector('meta[name="description"]');if(meta&&desc)attr(meta,'content',desc);
    }
    ['og:title','twitter:title','og:description','twitter:description'].forEach(key=>{const el=document.querySelector(`[property="${key}"],[name="${key}"]`);if(el)attr(el,'content',key.endsWith('title')?document.title:document.querySelector('meta[name="description"]')?.content||'');});
  }
  let pending=false;
  const schedule=()=>{if(pending)return;pending=true;queueMicrotask(()=>{pending=false;apply();});};
  new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  apply();
})();
