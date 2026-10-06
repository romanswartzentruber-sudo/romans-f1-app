const teams=[{"id": "ferrari", "name": "Ferrari", "short": "SCUDERIA FERRARI", "colors": ["#e10600", "#ffd100"], "drivers": ["Charles Leclerc", "Lewis Hamilton"], "reserve": ["Antonio Giovinazzi"], "first": "Ferrari 125 F1", "best": "2026 — Lewis Hamilton, P3, Bahrain GP", "video": "https://www.youtube.com/results?search_query=Formula+1+Ferrari+Hamilton+Bahrain+2026+P3", "amazon": "https://www.amazon.com/s?k=Ferrari+F1+merchandise"}, {"id": "mercedes", "name": "Mercedes", "short": "MERCEDES-AMG PETRONAS", "colors": ["#00d2be", "#c0c0c0"], "drivers": ["George Russell", "Kimi Antonelli"], "reserve": ["Fred Vesti"], "first": "Mercedes W196", "best": "2026 — Kimi Antonelli, P2, Bahrain GP", "video": "https://www.youtube.com/results?search_query=Formula+1+Mercedes+Antonelli+Bahrain+2026+P2", "amazon": "https://www.amazon.com/s?k=Mercedes+F1+merchandise"}, {"id": "mclaren", "name": "McLaren", "short": "MCLAREN FORMULA 1", "colors": ["#ff8700", "#47c7fc"], "drivers": ["Lando Norris", "Oscar Piastri"], "reserve": ["Leonardo Fornaroli", "Pato O"Ward"], "first": "McLaren M2B", "best": "2026 — Oscar Piastri, P6, Bahrain GP", "video": "https://www.youtube.com/results?search_query=Formula+1+McLaren+Piastri+Bahrain+2026+P6", "amazon": "https://www.amazon.com/s?k=McLaren+F1+merchandise"}, {"id": "redbull", "name": "Red Bull Racing", "short": "ORACLE RED BULL RACING", "colors": ["#3671c6", "#f7d117"], "drivers": ["Max Verstappen", "Isack Hadjar"], "reserve": ["Yuki Tsunoda"], "first": "Red Bull RB1", "best": "2026 — Max Verstappen, P1, Bahrain GP", "video": "https://www.youtube.com/results?search_query=Formula+1+Max+Verstappen+Bahrain+2026+win", "amazon": "https://www.amazon.com/s?k=Red+Bull+Racing+F1+merchandise"}, {"id": "racingbulls", "name": "Racing Bulls", "short": "RACING BULLS", "colors": ["#6692ff", "#ffffff"], "drivers": ["Liam Lawson", "Arvid Lindblad"], "reserve": ["Yuki Tsunoda", "Ayumu Iwasa"], "first": "Minardi M195", "best": "2026 — Liam Lawson, P7, Bahrain GP", "video": "https://www.youtube.com/results?search_query=Formula+1+Liam+Lawson+Bahrain+2026+P7", "amazon": "https://www.amazon.com/s?k=Racing+Bulls+F1+merchandise"}, {"id": "aston", "name": "Aston Martin", "short": "ASTON MARTIN ARMCO", "colors": ["#006f62", "#cedc00"], "drivers": ["Fernando Alonso", "Lance Stroll"], "reserve": ["Jak Crawford", "Stoffel Vandoorne"], "first": "Jordan 191 / Aston lineage", "best": "2026 — Fernando Alonso, P8, Bahrain GP", "video": "https://www.youtube.com/results?search_query=Formula+1+Fernando+Alonso+Bahrain+2026+P8", "amazon": "https://www.amazon.com/s?k=Aston+Martin+F1+merchandise"}, {"id": "haas", "name": "Haas", "short": "TGR HAAS F1 TEAM", "colors": ["#f0f0f0", "#b40016"], "drivers": ["Esteban Ocon", "Oliver Bearman"], "reserve": ["Jack Doohan", "Ryo Hirakawa"], "first": "Haas VF-16", "best": "2025 — Ollie Bearman, P4, Mexico City GP", "video": "https://www.youtube.com/watch?v=F-LPveMlcFY", "amazon": "https://www.amazon.com/s?k=Haas+F1+merchandise"}, {"id": "audi", "name": "Audi", "short": "AUDI REVOLUT F1 TEAM", "colors": ["#e00000", "#eeeeee"], "drivers": ["Nico Hulkenberg", "Gabriel Bortoleto"], "reserve": ["TBC"], "first": "Sauber C12 / Audi era", "best": "2026 — Nico Hulkenberg, best 2026 result", "video": "https://www.youtube.com/results?search_query=Formula+1+Audi+Hulkenberg+2026+best+result", "amazon": "https://www.amazon.com/s?k=Audi+F1+merchandise"}, {"id": "alpine", "name": "Alpine", "short": "BWT ALPINE F1 TEAM", "colors": ["#0090ff", "#ff4f9a"], "drivers": ["Pierre Gasly", "Franco Colapinto"], "reserve": ["Paul Aron", "Kush Maini"], "first": "Renault RS01 lineage", "best": "2026 — Pierre Gasly, best 2026 result", "video": "https://www.youtube.com/results?search_query=Formula+1+Alpine+Gasly+2026+best+result", "amazon": "https://www.amazon.com/s?k=Alpine+F1+merchandise"}, {"id": "williams", "name": "Williams", "short": "ATLASSIAN WILLIAMS RACING", "colors": ["#00a3e0", "#ffffff"], "drivers": ["Carlos Sainz", "Alexander Albon"], "reserve": ["Luke Browning"], "first": "Williams FW06", "best": "2026 — Carlos Sainz / Alexander Albon best result", "video": "https://www.youtube.com/results?search_query=Formula+1+Williams+Sainz+Albon+2026+best+result", "amazon": "https://www.amazon.com/s?k=Williams+F1+merchandise"}, {"id": "cadillac", "name": "Cadillac", "short": "CADILLAC FORMULA 1 TEAM", "colors": ["#b9c0c7", "#111111"], "drivers": ["Sergio Perez", "Valtteri Bottas"], "reserve": ["Zhou Guanyu"], "first": "Cadillac 2026 F1", "best": "2026 — Cadillac"s best 2026 result", "video": "https://www.youtube.com/results?search_query=Formula+1+Cadillac+Perez+Bottas+2026+best+result", "amazon": "https://www.amazon.com/s?k=Cadillac+F1+merchandise"}];
const histories={
ferrari:"Ferrari is the only team to have competed in every Formula 1 World Championship season since 1950. The Scuderia has won 16 Constructors' Championships and 15 Drivers' Championships.",
mercedes:"Mercedes returned as a works team in 2010 and became the dominant force of the hybrid era, winning eight consecutive Constructors' Championships from 2014 through 2021.",
mclaren:"Founded by Bruce McLaren, the team debuted in 1966 and became one of F1's most successful names, with 10 Constructors' and 13 Drivers' Championships.",
redbull:"Red Bull entered F1 in 2005 and became a championship power. Sebastian Vettel won four straight Drivers' titles from 2010–2013, followed by Max Verstappen's four from 2021–2024.",
racingbulls:"The team traces its roots to Minardi and has raced as Toro Rosso, AlphaTauri and RB before becoming Racing Bulls. It has produced two Grand Prix winners.",
aston:"The modern Aston Martin team began in 2021 after the Racing Point era. Fernando Alonso delivered multiple podiums for the team in its breakthrough 2023 season.",
haas:"Haas debuted in 2016 as an American-led F1 team. Oliver Bearman delivered the team's best result in 2025 with fourth place in Mexico City.",
audi:"Audi takes over the Sauber operation in 2026 as a new works team, pairing its own new-era identity with drivers Nico Hulkenberg and Gabriel Bortoleto.",
alpine:"Alpine became a Renault Group works team in 2021. Its modern era includes a Grand Prix victory and several podiums.",
williams:"Williams is one of F1's great historic teams, with nine Constructors' and seven Drivers' Championships across its history.",
cadillac:"Cadillac joined the grid in 2026 as Formula 1's 11th team, bringing an American manufacturer identity and experienced drivers Sergio Perez and Valtteri Bottas."
};
const nav=document.getElementById("teamNav");
const carGrid=document.getElementById("carGrid");
const merchGrid=document.getElementById("merchGrid");

function setTheme(t){document.documentElement.style.setProperty("--a",t.colors[0]);document.documentElement.style.setProperty("--b",t.colors[1]);}
function carArt(t,big=false){return `<div class="${big?'big-car-art':''}" style="--tc:${t.colors[0]}">${car_svg(t.colors[0],t.colors[1])}</div>`}

teams.forEach((t,i)=>{
  const b=document.createElement("button");b.textContent=t.name.toUpperCase();b.onclick=()=>showTeam(t);nav.appendChild(b);
  carGrid.innerHTML+=`<article class="car-card" style="--tc:${t.colors[0]}"><div class="car-art">${car_svg(t.colors[0],t.colors[1])}</div><h3>${t.name}</h3><p>FIRST F1 MACHINE • ${t.first}</p></article>`;
  merchGrid.innerHTML+=`<article class="merch-card" style="--mc:${t.colors[0]}"><h3>${t.name}</h3><a href="${t.amazon}" target="_blank">SHOP ON AMAZON →</a></article>`;
});

function showTeam(t){
  setTheme(t);
  document.getElementById("home").hidden=true;
  document.getElementById("teamPage").hidden=false;
  document.getElementById("teamKicker").textContent=t.short;
  document.getElementById("teamName").textContent=t.name;
  document.getElementById("teamIntro").textContent=histories[t.id];
  document.getElementById("teamNumber").textContent=(teams.indexOf(t)+1).toString().padStart(2,"0");
  document.getElementById("carName").textContent=t.first;
  document.getElementById("reserveName").textContent=t.reserve.join(" • ");
  document.getElementById("bestResult").textContent=t.best;
  document.getElementById("bestVideo").href=t.video;
  document.getElementById("teamHistory").textContent=histories[t.id];
  document.getElementById("driverCards").innerHTML=t.drivers.map((d,i)=>`<div class="driver"><span>DRIVER ${i+1}</span><b>${d}</b></div>`).join("");
  document.getElementById("teamCar").innerHTML=car_svg(t.colors[0],t.colors[1]);
  document.getElementById("teamPage").scrollIntoView({behavior:"smooth",block:"start"});
}
function showHome(){
  setTheme({colors:["#e10600","#fff"]});
  document.getElementById("home").hidden=false;
  document.getElementById("teamPage").hidden=true;
  location.hash="home";
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelector(".logo").onclick=(e)=>{e.preventDefault();showHome()};

const searchPanel=document.getElementById("searchPanel"), input=document.getElementById("searchInput"), results=document.getElementById("searchResults");
document.getElementById("searchOpen").onclick=()=>{searchPanel.classList.add("open");input.focus()};
document.getElementById("searchClose").onclick=()=>searchPanel.classList.remove("open");
input.oninput=()=>{
  const q=input.value.trim().toLowerCase();
  if(!q){results.innerHTML="";return}
  const hits=teams.filter(t=>[t.name,...t.drivers,...t.reserve,t.first,t.best].join(" ").toLowerCase().includes(q));
  results.innerHTML=hits.length?hits.map(t=>`<div class="result" onclick="searchPick('${t.id}')"><b>${t.name}</b><span>${t.drivers.join(" / ")}</span></div>`).join(""):`<p style="color:#777;padding:25px 0">No F1 match found.</p>`;
};
function searchPick(id){searchPanel.classList.remove("open");showTeam(teams.find(t=>t.id===id))}
document.addEventListener("keydown",e=>{if(e.key==="Escape")searchPanel.classList.remove("open")});
