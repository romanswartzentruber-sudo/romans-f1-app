const teams=[
{id:'ferrari',name:'Ferrari',a:'#e10600',b:'#ffd200',drivers:['Charles Leclerc','Lewis Hamilton'],reserve:'Antonio Giovinazzi',car:'SF-26',carPhoto:'https://img.band.com.br/image/2026/02/10/ferrari-sf-26-10273.jpg',power:'Ferrari',position:'2nd',points:405,wins:2,podiums:10,amazon:'https://www.amazon.com/s?k=Ferrari+F1+merchandise'},
{id:'mercedes',name:'Mercedes',a:'#00d2be',b:'#c0c0c0',drivers:['George Russell','Kimi Antonelli'],reserve:'Fred Vesti',car:'W17',carPhoto:'https://img.band.com.br/image/2026/01/22/mercedes-divulga-primeiras-imagens-do-w17-carro-para-a-temporada-2026-71059.png',power:'Mercedes',position:'1st',points:556,wins:11,podiums:21,amazon:'https://www.amazon.com/s?k=Mercedes+F1+merchandise'},
{id:'mclaren',name:'McLaren',a:'#ff8700',b:'#47c7fc',drivers:['Lando Norris','Oscar Piastri'],reserve:'Leonardo Fornaroli / Pato O’Ward',car:'MCL40',carPhoto:'https://img.band.com.br/image/2026/02/09/mclaren-mcl40-13523.png',power:'Mercedes',position:'3rd',points:316,wins:2,podiums:7,amazon:'https://www.amazon.com/s?k=McLaren+F1+merchandise'},
{id:'redbull',name:'Red Bull Racing',a:'#3671c6',b:'#f7d117',drivers:['Max Verstappen','Isack Hadjar'],reserve:'Yuki Tsunoda',car:'RB22',carPhoto:'https://img.band.com.br/image/2026/02/10/red-bull-rb22-103153.jpg',power:'Red Bull Ford',position:'4th',points:298,wins:1,podiums:10,amazon:'https://www.amazon.com/s?k=Red+Bull+Racing+F1+merchandise'},
{id:'racingbulls',name:'Racing Bulls',a:'#6692ff',b:'#ffffff',drivers:['Liam Lawson','Arvid Lindblad'],reserve:'Yuki Tsunoda',car:'VCARB 03',carPhoto:'https://img.band.com.br/image/2026/02/10/racing-bulls-vcarb-03-103427.jpg',power:'Red Bull Ford',position:'5th',points:90,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Racing+Bulls+F1+merchandise'},
{id:'aston',name:'Aston Martin',a:'#006f62',b:'#cedc00',drivers:['Fernando Alonso','Lance Stroll'],reserve:'Jak Crawford',car:'AMR26',carPhoto:'https://img.band.com.br/image/2026/02/10/aston-martin-amr26-73959.jpg',power:'Honda',position:'10th',points:7,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Aston+Martin+F1+merchandise'},
{id:'haas',name:'Haas',a:'#eeeeee',b:'#b40016',drivers:['Esteban Ocon','Oliver Bearman'],reserve:'Jack Doohan / Ryo Hirakawa',car:'VF-26',carPhoto:'https://img.band.com.br/image/2026/01/19/haas-vf-26-111951.jpg',power:'Ferrari',position:'7th',points:27,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Haas+F1+merchandise'},
{id:'audi',name:'Audi',a:'#e00000',b:'#eeeeee',drivers:['Nico Hulkenberg','Gabriel Bortoleto'],reserve:'TBA',car:'R26',carPhoto:'https://img.band.com.br/image/2026/01/20/audi-apresenta-modelo-r26-para-temporada-2026-da-f1-155458.jpg',power:'Audi',position:'8th',points:17,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Audi+F1+merchandise'},
{id:'alpine',name:'Alpine',a:'#0090ff',b:'#ff4f9a',drivers:['Pierre Gasly','Franco Colapinto'],reserve:'Paul Aron / Kush Maini',car:'A526',carPhoto:'https://img.band.com.br/image/2026/01/23/alpine-apresenta-visual-do-a526-para-temporada-2026-da-f1-93214.jpg',power:'Mercedes',position:'6th',points:68,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Alpine+F1+merchandise'},
{id:'williams',name:'Williams',a:'#00a3e0',b:'#ffffff',drivers:['Carlos Sainz','Alexander Albon'],reserve:'TBA',car:'FW48',carPhoto:'https://img.band.com.br/image/2026/02/03/williams-fw48-114249.jpg',power:'Mercedes',position:'9th',points:12,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Williams+F1+merchandise'},
{id:'cadillac',name:'Cadillac',a:'#b9c0c7',b:'#111111',drivers:['Sergio Perez','Valtteri Bottas'],reserve:'Zhou Guanyu',car:'MAC-26',carPhoto:'https://img.band.com.br/image/2026/02/09/cadillac-f1-2026-72133.jpg',power:'Ferrari',position:'11th',points:0,wins:0,podiums:0,amazon:'https://www.amazon.com/s?k=Cadillac+F1+merchandise'}
];
const portraits={bearman:'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/haas/olibea01/2026haasolibea01right.webp',hamilton:'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp',bottas:'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp'};
const home=document.getElementById('home'),page=document.getElementById('teamPage');
const teamStats=document.getElementById('teamStats'),merchGrid=document.getElementById('merchGrid');

function theme(t){document.documentElement.style.setProperty('--a',t.a);document.documentElement.style.setProperty('--b',t.b)}

function carPhoto(t){
 const safeName=(t.name+' '+t.car).replace(/&/g,'&amp;').replace(/\"/g,'&quot;');
 return `<div class="car-photo-wrap"><img class="car-photo" src="${t.carPhoto}" alt="Actual ${safeName} 2026 Formula 1 car" loading="eager" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${t.carPhoto}';"><div class="car-photo-caption"><span>ACTUAL 2026 CAR PHOTO</span><b>${t.car}</b></div></div>`;
}

const histories={
ferrari:'Ferrari has competed in every F1 World Championship season since 1950 and remains one of the sport’s most successful teams.',
mercedes:'Mercedes became the defining force of the hybrid era, winning eight consecutive Constructors’ Championships from 2014 through 2021.',
mclaren:'Founded by Bruce McLaren, the team entered F1 in 1966 and has built one of the sport’s greatest racing legacies.',
redbull:'Red Bull entered F1 as a works team in 2005 and developed into a championship powerhouse with multiple Drivers’ and Constructors’ titles.',
racingbulls:'Racing Bulls traces its roots to Minardi and has raced under several names while developing future Red Bull stars.',
aston:'Aston Martin returned under its current name in 2021 and is building around major investment, Adrian Newey and Honda power for the new era.',
haas:'Haas debuted in 2016 as an American-led team and continues to compete with Ferrari power.',
audi:'Audi takes over the Sauber operation for 2026, beginning a new works-team chapter with the R26.',
alpine:'The Alpine name arrived in F1 in 2021 after the Renault era, carrying forward a long French motorsport tradition.',
williams:'Williams is one of F1’s historic giants, with nine Constructors’ Championships and seven Drivers’ Championships.',
cadillac:'Cadillac joined the grid in 2026 as F1’s 11th team, pairing Sergio Perez and Valtteri Bottas for its debut season.'
};

function renderHomeCards(){
 teamStats.innerHTML=teams.map((t,i)=>`<article class="team-stat-card" style="--tc:${t.a}">
   <div class="stat-rank">P${t.position.replace('st','').replace('nd','').replace('rd','').replace('th','')}</div>
   <div class="stat-main"><div class="stat-accent"></div><div><div class="stat-name">${t.name}</div><div class="stat-drivers">${t.drivers.join('  •  ')}</div></div></div>
   <div class="stat-grid"><div><b>${t.points}</b><span>POINTS</span></div><div><b>${t.wins}</b><span>WINS</span></div><div><b>${t.podiums}</b><span>PODIUMS</span></div></div>
   <div class="stat-footer"><span>${t.car}</span><span>${t.power}</span></div>
 </article>`).join('');
 merchGrid.innerHTML=teams.map(t=>`<article class="merch-card" style="--mc:${t.a}"><h3>${t.name}</h3><a href="${t.amazon}" target="_blank" rel="noopener">SHOP ON AMAZON →</a></article>`).join('');
}
renderHomeCards();

document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>showTeam(btn.dataset.team)));
function showTeam(id){
 const t=teams.find(x=>x.id===id); if(!t)return;
 theme(t);home.hidden=true;page.hidden=false;
 document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.team===id));
 document.getElementById('teamLabel').textContent=t.name.toUpperCase()+' / 2026';
 document.getElementById('teamTitle').textContent=t.name;
 document.getElementById('teamBio').textContent=histories[id];
 document.getElementById('teamId').textContent=String(teams.indexOf(t)+1).padStart(2,'0');
 document.getElementById('driverList').innerHTML=t.drivers.map((d,i)=>`<div class="driver"><span>DRIVER ${i+1}</span><b>${d}</b></div>`).join('');
 document.getElementById('reserve').textContent=t.reserve;
 document.getElementById('currentCar').textContent=t.car;
 document.getElementById('carPower').textContent=t.power;
 document.getElementById('bigCar').innerHTML=carPhoto(t);
 document.getElementById('carPosition').textContent=t.position;
 document.getElementById('carPoints').textContent=t.points;
 document.getElementById('carWins').textContent=t.wins;
 document.getElementById('carPodiums').textContent=t.podiums;
 const search=encodeURIComponent('Formula 1 '+t.name+' 2026 best result highlight');
 document.getElementById('resultTitle').textContent='2026 TEAM HIGHLIGHT';
 document.getElementById('resultLink').href='https://www.youtube.com/results?search_query='+search;
 document.getElementById('historyText').textContent=histories[id];
 document.getElementById('shopLink').href=t.amazon;
 page.scrollIntoView({behavior:'smooth',block:'start'});
}

document.getElementById('homeBtn').addEventListener('click',e=>{e.preventDefault();home.hidden=false;page.hidden=true;theme({a:'#d40000',b:'#111'});document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));window.scrollTo({top:0,behavior:'smooth'})});
const overlay=document.getElementById('searchOverlay'),input=document.getElementById('searchInput'),results=document.getElementById('searchResults');
document.getElementById('searchBtn').onclick=()=>{overlay.classList.add('open');input.focus()};
document.getElementById('closeSearch').onclick=()=>overlay.classList.remove('open');
input.oninput=()=>{const q=input.value.toLowerCase().trim();if(!q){results.innerHTML='';return}const hits=teams.filter(t=>[t.name,...t.drivers,t.reserve,t.car,t.power].join(' ').toLowerCase().includes(q));results.innerHTML=hits.map(t=>`<div class="search-result" data-id="${t.id}"><b>${t.name}</b><span>${t.car} • ${t.drivers.join(' / ')}</span></div>`).join('')||'<p style="color:#777">No result found.</p>';document.querySelectorAll('.search-result').forEach(x=>x.onclick=()=>{overlay.classList.remove('open');showTeam(x.dataset.id)})};
document.addEventListener('keydown',e=>{if(e.key==='Escape')overlay.classList.remove('open')});
document.getElementById('merchBtn').addEventListener('click',()=>{home.hidden=false;page.hidden=true;theme({a:'#d40000',b:'#111'});document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'))});
