(function(){
  const copy={
    en:{eye:"BUSINESS SYSTEM PREVIEW",title:"See how one connected system can run your operation.",lead:"Select an industry to explore a realistic management overview. The interface adapts to the workflow, priorities and information that matter.",industries:["Hotel","Restaurant","Agriculture"],nav:["Overview","Operations","Team","Costs","Reports"],period:"LIVE OPERATIONS · TODAY",status:"System operational",metrics:[["Occupancy","Arrivals","Open tasks","Revenue"],["Orders today","Average order","Kitchen time","Revenue"],["Workers active","Tasks complete","Season cost","Net result"]],tables:["Property operations","Order flow","Season operations"],cols:[["Unit","Guest / status","Assignment"],["Order","Status","Value"],["Team / field","Status","Cost"]],activities:["Recent activity","Operational priorities","Live activity"],foot:"INTERACTIVE SYSTEM CONCEPT · CUSTOM-BUILT FOR EACH BUSINESS",cta:"Explore a custom solution"},
    sr:{eye:"PRIKAZ POSLOVNOG SISTEMA",title:"Pogledajte kako jedan povezan sistem može da vodi poslovanje.",lead:"Izaberite delatnost i pogledajte realističan upravljački pregled. Interfejs se prilagođava načinu rada, prioritetima i važnim informacijama.",industries:["Hotel","Restoran","Gazdinstvo"],nav:["Pregled","Operacije","Tim","Troškovi","Izveštaji"],period:"AKTIVNO POSLOVANJE · DANAS",status:"Sistem radi",metrics:[["Popunjenost","Dolasci","Otvoreni zadaci","Prihod"],["Porudžbine danas","Prosečna porudžbina","Vreme kuhinje","Prihod"],["Aktivni radnici","Završeni zadaci","Trošak sezone","Neto rezultat"]],tables:["Operacije objekta","Tok porudžbina","Operacije sezone"],cols:[["Jedinica","Gost / status","Zaduženje"],["Porudžbina","Status","Vrednost"],["Tim / parcela","Status","Trošak"]],activities:["Nedavne aktivnosti","Operativni prioriteti","Aktivnosti uživo"],foot:"KONCEPT INTERAKTIVNOG SISTEMA · IZRAĐUJE SE PO MERI POSLOVANJA",cta:"Istražite rešenje po meri"},
    de:{eye:"GESCHÄFTSSYSTEM-VORSCHAU",title:"Sehen Sie, wie ein vernetztes System Ihren Betrieb steuern kann.",lead:"Wählen Sie eine Branche und erkunden Sie eine realistische Verwaltungsübersicht. Die Oberfläche passt sich Arbeitsabläufen, Prioritäten und wichtigen Informationen an.",industries:["Hotel","Restaurant","Landwirtschaft"],nav:["Übersicht","Betrieb","Team","Kosten","Berichte"],period:"LIVE-BETRIEB · HEUTE",status:"System betriebsbereit",metrics:[["Auslastung","Anreisen","Offene Aufgaben","Umsatz"],["Bestellungen heute","Ø Bestellung","Küchenzeit","Umsatz"],["Aktive Mitarbeiter","Aufgaben erledigt","Saisonkosten","Nettoergebnis"]],tables:["Betriebsübersicht","Bestellablauf","Saisonbetrieb"],cols:[["Einheit","Gast / Status","Zuweisung"],["Bestellung","Status","Wert"],["Team / Feld","Status","Kosten"]],activities:["Letzte Aktivitäten","Betriebliche Prioritäten","Live-Aktivitäten"],foot:"INTERAKTIVES SYSTEMKONZEPT · INDIVIDUELL FÜR JEDEN BETRIEB",cta:"Individuelle Lösung entdecken"}
  };
  const data=[
    {values:["84%","12","7","€ 18.420"],trend:["+6.2%","4 checked in","3 high priority","+11.4%"],bars:[42,58,51,76,68,88,81],rows:[["A-204","Arriving · 14:30","Reception"],["B-108","Cleaning in progress","Housekeeping"],["C-301","Maintenance scheduled","Technical team"]],activity:[["14:22","Room A-204 prepared"],["13:48","Direct booking confirmed"],["12:35","Heating task assigned"]]},
    {values:["146","€ 38,40","11 min","€ 5.606"],trend:["+18 today","+4.6%","Within target","+9.8%"],bars:[36,52,48,70,61,83,77],rows:[["#1482","Kitchen · preparing","€ 86,40"],["#1481","Ready for service","€ 42,80"],["#1480","Completed","€ 118,20"]],activity:[["14:22","Order #1482 confirmed"],["14:16","Dinner group imported"],["13:55","Kitchen report updated"]]},
    {values:["24","87%","€ 42.180","€ 28.460"],trend:["+3 today","41 of 47","+2.1%","+14.2%"],bars:[31,47,55,62,59,78,91],rows:[["Harvest team A","Active · North field","€ 1.920"],["Transport team","2 routes completed","€ 640"],["Field 07","Harvest recorded","€ 8.460"]],activity:[["14:22","Daily wages calculated"],["13:40","Field 07 yield recorded"],["12:15","Fuel expense approved"]]}
  ];
  const local={
    en:{center:"Control Center",days:"Last 7 days"},
    sr:{center:"Kontrolni centar",days:"Poslednjih 7 dana",rows:[
      [["A-204","Dolazak · 14:30","Recepcija"],["B-108","Čišćenje u toku","Sobarice"],["C-301","Zakazano održavanje","Tehnički tim"]],
      [["#1482","Kuhinja · priprema","€ 86,40"],["#1481","Spremno za posluženje","€ 42,80"],["#1480","Završeno","€ 118,20"]],
      [["Berba · tim A","Aktivno · severna parcela","€ 1.920"],["Transportni tim","Završene 2 rute","€ 640"],["Parcela 07","Berba evidentirana","€ 8.460"]]
    ],activity:[
      [["14:22","Soba A-204 je pripremljena"],["13:48","Potvrđena direktna rezervacija"],["12:35","Dodeljen zadatak za grejanje"]],
      [["14:22","Potvrđena porudžbina #1482"],["14:16","Uvezena grupa za večeru"],["13:55","Ažuriran izveštaj kuhinje"]],
      [["14:22","Obračunate dnevnice"],["13:40","Evidentiran prinos parcele 07"],["12:15","Odobren trošak goriva"]]
    ]},
    de:{center:"Kontrollzentrum",days:"Letzte 7 Tage",rows:[
      [["A-204","Anreise · 14:30","Rezeption"],["B-108","Reinigung läuft","Housekeeping"],["C-301","Wartung geplant","Technikteam"]],
      [["#1482","Küche · Zubereitung","€ 86,40"],["#1481","Bereit zum Servieren","€ 42,80"],["#1480","Abgeschlossen","€ 118,20"]],
      [["Ernteteam A","Aktiv · Nordfeld","€ 1.920"],["Transportteam","2 Routen erledigt","€ 640"],["Feld 07","Ernte erfasst","€ 8.460"]]
    ],activity:[
      [["14:22","Zimmer A-204 vorbereitet"],["13:48","Direktbuchung bestätigt"],["12:35","Heizungsaufgabe zugewiesen"]],
      [["14:22","Bestellung #1482 bestätigt"],["14:16","Abendgruppe importiert"],["13:55","Küchenbericht aktualisiert"]],
      [["14:22","Tageslöhne berechnet"],["13:40","Ertrag von Feld 07 erfasst"],["12:15","Kraftstoffkosten genehmigt"]]
    ]}
  };
  let scenario=0;
  const root=document.querySelector("#demo-lab");
  root?.remove();
  return;
  const lang=()=>copy[document.documentElement.lang]||copy.en;
  function render(){
    const w=lang(),d=data[scenario];
    root.innerHTML='<div class="system-intro"><div><p class="eyebrow">'+w.eye+'</p><h2>'+w.title+'</h2></div><p>'+w.lead+'</p></div><div class="industry-switch" role="tablist">'+w.industries.map((x,i)=>'<button type="button" role="tab" aria-selected="'+(i===scenario)+'" data-industry="'+i+'"><span>0'+(i+1)+'</span>'+x+'</button>').join("")+'</div><div class="business-system"><aside class="system-sidebar"><div class="system-mark"><img src="./public/logo/panta-portal-ivory.svg" alt=""><span><b>PANTA</b><small>OPERATIONS</small></span></div><nav>'+w.nav.map((x,i)=>'<span class="'+(i===0?"active":"")+'"><i>'+["▦","◫","◉","◇","↗"][i]+'</i>'+x+'</span>').join("")+'</nav><div class="system-user"><i>MP</i><span><b>Miloš Pantić</b><small>Administrator</small></span></div></aside><div class="system-main"><header><div><small>'+w.period+'</small><h3>'+w.industries[scenario]+' Control Center</h3></div><span><i></i>'+w.status+'</span></header><div class="system-metrics">'+w.metrics[scenario].map((x,i)=>'<article><small>'+x+'</small><b>'+d.values[i]+'</b><span>'+d.trend[i]+'</span></article>').join("")+'</div><div class="system-chart"><div class="chart-head"><span><b>'+w.metrics[scenario][3]+'</b><small>Last 7 days</small></span><strong>'+d.values[3]+'</strong></div><div class="chart-bars">'+d.bars.map((x,i)=>'<i style="--v:'+x+'%"><span>'+["M","T","W","T","F","S","S"][i]+'</span></i>').join("")+'</div></div><div class="system-table"><div class="table-title"><b>'+w.tables[scenario]+'</b><span>•••</span></div><div class="table-row table-labels">'+w.cols[scenario].map(x=>'<small>'+x+'</small>').join("")+'</div>'+d.rows.map((r,i)=>'<div class="table-row"><b>'+r[0]+'</b><span><i class="dot d'+i+'"></i>'+r[1]+'</span><strong>'+r[2]+'</strong></div>').join("")+'</div></div><aside class="system-activity"><div class="activity-head"><small>LIVE</small><b>'+w.activities[scenario]+'</b></div>'+d.activity.map(a=>'<article><time>'+a[0]+'</time><span><i></i>'+a[1]+'</span></article>').join("")+'<div class="activity-health"><span><i></i>CORE</span><span><i></i>SYNC</span><span><i></i>REPORTS</span></div></aside></div><div class="system-foot"><span>'+w.foot+'</span><a href="#contact">'+w.cta+' ↗</a></div>';
    const code=document.documentElement.lang, l=local[code]||local.en;
    root.querySelector(".system-main h3").textContent=w.industries[scenario]+" · "+l.center;
    root.querySelector(".chart-head small").textContent=l.days;
    if(l.rows){
      root.querySelectorAll(".system-table .table-row:not(.table-labels)").forEach((row,i)=>{
        const cells=l.rows[scenario][i]; row.querySelector("b").textContent=cells[0]; row.querySelector("span").lastChild.textContent=cells[1]; row.querySelector("strong").textContent=cells[2];
      });
      root.querySelectorAll(".system-activity article").forEach((row,i)=>{row.querySelector("time").textContent=l.activity[scenario][i][0];row.querySelector("span").lastChild.textContent=l.activity[scenario][i][1]});
    }
    root.querySelectorAll("[data-industry]").forEach(b=>b.onclick=()=>{scenario=+b.dataset.industry;render()});
  }
  document.querySelectorAll(".language-switch button").forEach(b=>b.addEventListener("click",()=>setTimeout(render,30)));
  render();
})();
