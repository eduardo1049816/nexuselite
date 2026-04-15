const nexusDB = {
    maquinas: [
        // PEITO (6)
        { n: "Supino Reto", f: "Peito", d: "Parte média do peitoral, além de envolver tríceps e deltoides anteriores.", icon: "fa-dumbbell", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto-com-halteres.gif" },
        { n: "Supino Inclinado", f: "Peito", d: "Região superior do peitoral.", icon: "fa-arrows-left-right", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-halteres.gif" },
        { n: "Voador", f: "Peito", d: "Isolamento do peitoral, principalmente fibras internas.", icon: "fa-up-right-from-square", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/pec-deck-butterfly-exercice-musculation.gif" },
        { n: "Crossover Polia", f: "Peito", d: " Peitoral interno e alongamento das fibras.", icon: "fa-arrows-to-dot", gif: "https://i.pinimg.com/originals/86/99/43/8699435cd110bbdbc4f06f56b6c4cf6e.gif" },
        { n: "Pullover máquina", f: "Peito", d: "Peitoral maior e também dorsais (costas).", icon: "fa-hand-fist", gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/09/pullover-muscles.gif" },
        { n: "Dips Máquina", f: "Peito", d: "Foco na porção inferior (infra) do peitoral e tríceps.", icon: "fa-arrow-down-z-a", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/dips-assiste-machine.gif" },
        // COSTAS (6)
        { n: "Lat Pulldown", f: "Costas", d: "Puxe a barra no peito superior fechando as escápulas.", icon: "fa-down-long", gif: "https://image.tuasaude.com/media/article/uh/yp/puxada-frontal_75625.gif?width=686&height=487" },
        { n: "Remada Baixa", f: "Costas", d: "Puxe o triângulo no umbigo com a coluna ereta.", icon: "fa-right-left", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-sentado-com-cabos-e-triangulo.gif" },
        { n: "Remada Cavalinho", f: "Costas", d: "Foco na espessura das costas.", icon: "fa-horse", gif: "https://tse1.mm.bing.net/th/id/OIP.0b16g-1El5RpNzYAB3wA0QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { n: "Puxada Articulada", f: "Costas", d: "Isolamento unilateral das dorsais.", icon: "fa-hands-holding", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2025/02/puxada-neutra.gif" },
        { n: "Pulldown Corda", f: "Costas", d: "Mantenha braços esticados para isolar a dorsal.", icon: "fa-line-columns", gif: "https://archive.org/download/lever-front-pulldown/CABLE%20STRAIGHT%20ARM%20PULLDOWN.gif" },
        { n: "Remada Unilateral", f: "Costas", d: "Excelente para corrigir assimetrias musculares.", icon: "fa-hand-back-fist", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif" },
        // PERNAS (6)
        { n: "Leg Press 45°", f: "Pernas", d: "Pés largura dos ombros. Desça até 90 graus.", icon: "fa-angles-up", gif: "https://static.wixstatic.com/media/2edbed_386962ac269a4ea7be16dcfc35244d6f~mv2.gif" },
        { n: "Cadeira Extensora", f: "Pernas", d: "Isolamento total do quadríceps.", icon: "fa-leg-action", gif: "https://image.tuasaude.com/media/article/ov/fb/cadeira-extensora_75064.gif?width=686&height=487" },
        { n: "Mesa Flexora", f: "Pernas", d: "Foco nos posteriores da coxa.", icon: "fa-person-falling", gif: "https://image.tuasaude.com/media/article/hz/mb/mesa-flexora_75623.gif?width=686&height=487" },
        { n: "Hack Squat", f: "Pernas", d: "Agachamento guiado para isolamento de quadríceps.", icon: "fa-truck-ramp-box", gif: "https://boxlifemagazine.com/wp-content/uploads/2023/09/hack-squat-min.gif" },
        { n: "Cadeira Abdutora", f: "Pernas", d: "Abra as pernas para focar no glúteo médio.", icon: "fa-arrows-left-right", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/lever-seated-hip-abduction.gif" },
        { n: "Panturrilha Máq", f: "Pernas", d: "Eleve os calcanhares para focar no músculo sóleo.", icon: "fa-shoe-prints", gif: "https://meutreinador.com/wp-content/uploads/2023/12/44_Panturrilha-em-Pe-na-Maquina.gif" },
        // OMBROS (6)
        { n: "Desenvolvimento", f: "Ombros", d: "Desenvolvimento sentado para deltoide anterior.", icon: "fa-up-long", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif" },
        { n: "Elevação Lateral", f: "Ombros", d: "Foco na cabeça média do ombro.", icon: "fa-arrows-left-right", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/08/elevations-laterales-exercice-musculation.gif" },
        { n: "Voador Inverso", f: "Ombros", d: "Foco no deltoide posterior.", icon: "fa-arrows-split-up-and-left", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2018/03/crucifixo-invertido-com-halteres.gif" },
        { n: "Elevação Frontal", f: "Ombros", d: "Puxe a polia baixa à frente do corpo.", icon: "fa-arrow-trend-up", gif: "https://image.tuasaude.com/media/article/sz/nf/elevacao-frontal_75624.gif?width=686&height=487" },
        { n: "Remada Alta Cabo", f: "Ombros", d: "Puxe a barra em direção ao queixo.", icon: "fa-arrow-up-long", gif: "https://tse1.mm.bing.net/th/id/OIP.etfbhHpUQ05TttcJOCKGlAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { n: "Encolhimento", f: "Ombros", d: "Isolamento de trapézio superior.", icon: "fa-person-rays", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2018/08/encolhimento-com-halteres.gif" },
        // BRAÇOS (6)
        { n: "Tríceps Pulley", f: "Braços", d: "Cotovelos fixos, empurre para baixo.", icon: "fa-arrow-down", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif" },
        { n: "Tríceps Corda", f: "Braços", d: "Abra a corda no final para maior contração.", icon: "fa-grip-lines-vertical", gif: "https://image.tuasaude.com/media/article/xe/cj/treino-de-superiores_74238.gif?width=686&height=487" },
        { n: "Rosca Scott Máq", f: "Braços", d: "Apoie os braços e flexione para isolar bíceps.", icon: "fa-arm-flex", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/Rosca-Scott-com-halteres-com-dois-bracos.gif" },
        { n: "Rosca Direta Cabo", f: "Braços", d: "Flexão de cotovelos com tensão constante.", icon: "fa-person-praying", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif" },
        { n: "Tríceps Francês", f: "Braços", d: "Extensão de braço acima da cabeça.", icon: "fa-head-side-virus", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2025/01/triceps-frances-com-um-halter-sentado.gif" },
        { n: "Rosca Martelo", f: "Braços", d: "Trabalha braquial e antebraço.", icon: "fa-hammer", gif: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_360,h_360/https://sportsgearpatrol.de/wp-content/uploads/2022/12/Hammercurl-Schraegbank.gif" },
         // ABDOMEN (6)
        { n: "Crunch", f: "ABDOMEN", d: "Elevação do tronco focando na contração do reto abdominal.", icon: "fa-circle-dot", gif: "https://www.body-burn.com/wp-content/uploads/2023/09/crunch-abdominaux-au-sol-exercice-musculation.gif" },
        { n: "Elevação de pernas", f: "ABDOMEN", d: "Foco na porção infra do abdômen.", icon: "fa-grip-lines-vertical", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal-elevacao-de-pernas-no-banco.gif" },
        { n: "Prancha", f: "ABDOMEN", d: "Isometria para fortalecimento do core.", icon: "fa-arm-flex", gif: "https://img.menshealth.de/_/bg:FFFFFF/f:best/h:241/rt:fill/w:430/plain/239624.jpg" },
        { n: "Abdominal bicicleta", f: "ABDOMEN", d: "Trabalha oblíquos e coordenação.", icon: "fa-person-praying", gif: "https://image.tuasaude.com/media/article/xw/bq/67dab99e69b48/original.gif?width=686&height=487" },
        { n: "Abdominal infra", f: "ABDOMEN", d: "Elevação pélvica para foco inferior.", icon: "fa-head-side-virus", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/Abdominal-infra-nas-paralelas.gif" },
        { n: "Prancha lateral", f: "ABDOMEN", d: "Isolamento lateral do abdômen.", icon: "fa-hammer", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/prancha-lateral.gif" },
         // CARDIO (6)
        { n: "corrida (esteira)", f: "cardio", d: "Cardiovascular de alta intensidade.", icon: "fa-person-running", gif: "https://tse4.mm.bing.net/th/id/OIP.GE-_00O2GaFVOE-SLH9YkwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { n: "Bicicleta ergométrica", f: "cardio", d: "Pedale mantendo ritmo constante.", icon: "fa-bicycle", gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/exercise-bike.gif" },
        { n: "Pular corda", f: "cardio", d: "Excelente para queima calórica rápida.", icon: "fa-bolt", gif: "https://th.bing.com/th/id/R.11572130785b519bd6319b828bcea174?rik=tS7wZd6Mbq33Jw&pid=ImgRaw&r=0" },
        { n: "Burpee", f: "cardio", d: "Movimento funcional de alta intensidade.", icon: "fa-fire", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/10/Jack-Burpees.gif" },
        { n: "Polichinelo", f: "cardio", d: "Aquecimento e coordenação.", icon: "fa-child", gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/polichinelos.gif" },
        { n: "Escada", f: "cardio", d: "Trabalha glúteos e condicionamento.", icon: "fa-stairs", gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/walking-on-stepmill.gif" },
        
    ],
    dietas: [
        { n: "Bulking Limpo", f: "Massa", icon: "fa-wheat-awn", d: "Ganho de massa com mínimo de gordura.", plano: [{h:"07:30", d:"Tapioca + 3 Ovos + Café"}, {h:"10:30", d:"Fruta + 30g de Whey"}, {h:"13:00", d:"200g Arroz + Frango + Salada"}, {h:"16:30", d:"Iogurte Grego + Aveia"}, {h:"20:00", d:"Macarrão + Carne Moída"}, {h:"22:30", d:"Abacate + Caseína"}] },
        { n: "Cutting Pro", f: "Definição", icon: "fa-fire", d: "Redução de gordura e retenção.", plano: [{h:"08:00", d:"Omelete (3 claras) + Chá Verde"}, {h:"12:30", d:"Tilápia + Brócolis + 1 Batata"}, {h:"16:00", d:"10 Amêndoas + Cafeína"}, {h:"19:30", d:"Frango Grelhado + Mix Folhas"}, {h:"21:30", d:"Whey Isolado"}] },
        { n: "Low Carb", f: "Gordura", icon: "fa-bacon", d: "Baixo carbo e alta proteína.", plano: [{h:"09:00", d:"Ovos com Bacon"}, {h:"13:00", d:"Carne Vermelha + Salada Verde"}, {h:"16:00", d:"Queijo Branco"}, {h:"20:00", d:"Omelete de Espinafre"}] },
        // ... (outras dietas ocultas para brevidade, mas você tem todas aí)
        { n: "Hormonal Fix", f: "Saúde", icon: "fa-dna", d: "Foco em testo.", plano: [{h:"Noite", d:"ZMA + Abacate + Nozes"}] },
        { n: "Proteína 15 dias", f: "Rápida", icon: "fa-drumstick-bite", d: "Perda rápida.", plano: [{h:"Dia", d:"Foco total em proteínas limpas"}] }
    ],
    treinos: {
        academia_massa: [
            { d: "Segunda", t: "Peito e Tríceps", desc: "Força Bruta", ex: [{n:"supino reto",s:"3x15"}, {n:"supino inclinado",s:"3x12"}, {n:"voador",s:"4x10"}, {n:"Tríceps Pulley", s:"3x12"}, {n:"Tríceps corda", s:"3x12"}, {n:"Tríceps testa", s:"3x12"}] },
            { d: "Terça", t: "Pernas (Quadriceps)", desc: "Tração Intensa", ex: [{n:"leg press 45°", s:"4x12"},{n:"cadeira extensora", s:"4x12"}, {n:"hack squat", s:"3x15"}, {n:"Esteira", s:"30 minutos"}] },
            { d: "Quarta", t: "Costas e Bíceps", desc: "Recuperação", ex: [{n:"Lat Pulldown", s:"4x12"}, {n:"remada baixa", s:"4x12"}, {n:"remada cavalino", s:"4x12"}, {n:"pulldown corda", s:"4x12"}, {n:"Rosca Scott Máq", s:"4x12"}, {n:"Rosca Direta Cabo", s:"4x12"}, {n:"Rosca Martelo", s:"4x12"}] },
            { d: "Quinta", t: "Ombro e Abdômen", desc: "Base e Potência", ex: [{n:"Desenvolvimento", s:"4x15"}, {n:"elevação lateral", s:"4x15"}, {n:"elevaçao frontal", s:"4x15"}, {n:"Encolhimento", s:"4x15"}, {n:"elevação de pernas", s:"3x15-20"}, {n:"Abdominal crunch", s:"3x15-20"}, {n:"Prancha", s:"3x60s"}] },
            { d: "Sexta", t: "Posterior", desc: "Estética V-Taper", ex: [{n:"Messa Flexora", s:"4x15"}, {n:"Cadeira Adutora", s:"4x15"}, {n:"corrida (Esteira)", s:"30 minutos"}, {n:"Panturilha Maquina", s:"4x10"}] },
            { d: "Sábado", t: "Full Cardio", desc: "Queima", ex: [{n:"Esteira", s:"30min"}, {n:"Bike", s:"30min"}, {n:"Eliptico", s:"30min"}, {n:"Prancha", s:"3x maximo"}, {n:"Abdominal infra", s:"3x20"}, {n:"Abdominal obliquo", s:"3x20"}] },
            { d: "Domingo", t: "OFF", desc: "Descanso", ex: [] }
        ]
    }
};

let user = { 
    xp: 0, 
    lvl: 1, 
    water: 0, 
    waterGoal: 3500, // Meta padrão de 3.5L
    activeDiet: null,
    lastBioDate: null 
};

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("Digite seu codinome de atleta!");
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('display-name').innerText = name;
    updateWaterUI(); // Atualiza o visual da água ao iniciar
    renderAll();
}

function renderAll() {
    renderLibrary('diet-grid', nexusDB.dietas, 'openDietModal');
    renderLibrary('machine-list', nexusDB.maquinas, 'openMachineModal');
    renderMetas();
    selectWorkoutDay(0);
}

function renderLibrary(containerId, data, clickFunc) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = data.map((item, i) => `
        <div class="lib-card" onclick="${clickFunc}(${i})">
            <span class="lib-badge">${item.f}</span>
            <i class="fas ${item.icon}"></i>
            <h4>${item.n}</h4>
        </div>
    `).join('');
}

function openDietModal(i) {
    const d = nexusDB.dietas[i];
    const planoHtml = d.plano.map(p => `
        <div class="exercise-row">
            <div class="diet-time">${p.h || 'Horário'}</div>
            <div class="diet-food">${p.d}</div>
        </div>
    `).join('');
    
    document.getElementById('modal-body').innerHTML = `
        <span class="lib-badge">${d.f}</span>
        <h2 class="text-gradient">${d.n}</h2>
        <p style="font-size:0.7rem; color:#888; margin-bottom:20px">${d.d}</p>
        <div style="background:#000; padding:15px; border-radius:20px; text-align:left; margin-bottom:20px;">
            ${planoHtml}
        </div>
        <button onclick="activateDiet(${i})" class="btn-activate-premium">ATIVAR PROTOCOLO NO DASHBOARD</button>
    `;
    document.getElementById('universal-modal').classList.remove('hidden');
}

function activateDiet(i) {
    const dietaOriginal = nexusDB.dietas[i];
    user.activeDiet = JSON.parse(JSON.stringify(dietaOriginal)); 
    user.activeDiet.plano.forEach(p => p.concluido = false);

    updateDashboardDiet();
    closeModal();
    addXP(100);
    showSection('dashboard');
}

function updateDashboardDiet() {
    const container = document.getElementById('diet-info-dash');
    if (!container || !user.activeDiet) return;

    const refeicoesHtml = user.activeDiet.plano.map((p, idx) => {
        const isDone = p.concluido;
        const checkIcon = isDone ? 'fa-check-circle' : 'fa-circle';
        
        return `
            <div onclick="toggleRefeicao(${idx})" class="diet-item ${isDone ? 'completed' : ''}">
                <i class="fas ${checkIcon}" style="color: ${isDone ? 'var(--primary)' : '#333'}; font-size: 1.2rem;"></i>
                <div style="flex: 1;">
                    <span style="color: var(--primary); font-weight: 900; font-size: 0.65rem; letter-spacing: 1px; display: block;">${p.h}</span>
                    <span style="color: #fff; font-size: 0.8rem; font-weight: 500;">${p.d}</span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <span style="font-size: 0.55rem; color: #666; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 5px;">Protocolo de Elite</span>
            <h2 class="text-gradient" style="font-size: 1.4rem; font-family: 'Syncopate'; margin: 0;">${user.activeDiet.n}</h2>
            <div style="display: inline-block; background: var(--primary-glow); padding: 2px 8px; border-radius: 4px; margin-top: 5px;">
                <span style="font-size: 0.55rem; color: var(--primary); font-weight: 900; text-transform: uppercase;">${user.activeDiet.f}</span>
            </div>
        </div>
        <div class="diet-list-container" style="max-height: 300px; overflow-y: auto; padding-right: 8px;">
            ${refeicoesHtml}
        </div>
    `;
}

function toggleRefeicao(index) {
    const refeicao = user.activeDiet.plano[index];
    refeicao.concluido = !refeicao.concluido;
    if (refeicao.concluido) addXP(20);
    updateDashboardDiet();
}

function openMachineModal(i) {
    const m = nexusDB.maquinas[i];
    document.getElementById('modal-body').innerHTML = `
        <span class="lib-badge">${m.f}</span>
        <h2 class="text-gradient">${m.n}</h2>
        <div class="demo-visual" style="margin:20px 0"><img src="${m.gif}"></div>
        <p style="font-size:0.8rem; color:#666">${m.d}</p>
        <button onclick="closeModal()" class="btn-action-s">VOLTAR</button>
    `;
    document.getElementById('universal-modal').classList.remove('hidden');
}

function selectWorkoutDay(idx) {
    const treino = nexusDB.treinos.academia_massa[idx];
    document.querySelectorAll('.day-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
    const display = document.getElementById('workout-display');
    if (treino.ex.length === 0) {
        display.innerHTML = `<h3>${treino.t}</h3><p style="color:#444">${treino.desc}</p>`;
    } else {
        const exHtml = treino.ex.map(e => `<div class="exercise-row"><span>${e.n}</span> <b>${e.s}</b></div>`).join('');
        display.innerHTML = `<h2>${treino.t}</h2><div>${exHtml}</div><button onclick="addXP(150); this.disabled=true; this.innerText='COMPLETO';" class="btn-action-s">FINALIZAR +150XP</button>`;
    }
}

function addXP(v) {
    user.xp += v;
    if(user.xp >= 500) { user.lvl++; user.xp = 0; }
    document.getElementById('xp-fill').style.width = (user.xp / 500 * 100) + "%";
    document.getElementById('lvl-num').innerText = user.lvl;
    document.getElementById('xp-val').innerText = user.xp;
}

// HIDRATAÇÃO DINÂMICA
function addWater(ml) {
    user.water += ml;
    updateWaterUI();
    addXP(20);
}

function updateWaterUI() {
    const currentL = (user.water / 1000).toFixed(1);
    const goalL = (user.waterGoal / 1000).toFixed(1);
    document.getElementById('water-text').innerText = `${currentL} / ${goalL}L`;
}

// BIO-STATUS COM RENOVAÇÃO DE 15 DIAS
function calculateIMC() {
    const hInput = document.getElementById('imc-h').value;
    const wInput = document.getElementById('imc-w').value;

    if(!hInput || !wInput) return alert("Preencha altura e peso!");

    const h = hInput / 100;
    const w = parseFloat(wInput);
    const imc = (w / (h * h)).toFixed(1);

    // Salva evolução e define meta de água (35ml por kg)
    user.waterGoal = Math.round(w * 35);
    user.lastBioDate = new Date();

    document.getElementById('imc-res').classList.remove('hidden');
    document.getElementById('imc-val-text').innerText = imc;
    
    let status = imc < 25 ? "Peso Ideal (Atleta)" : "Sobrepeso";
    document.getElementById('imc-status-text').innerText = status;

    updateWaterUI();
    addXP(150);
    checkBioReminder();
    alert(`Status atualizado! Nova meta de água: ${(user.waterGoal/1000).toFixed(1)}L.`);
}

function checkBioReminder() {
    if(!user.lastBioDate) return;
    const hoje = new Date();
    const diff = Math.floor((hoje - user.lastBioDate) / (1000 * 60 * 60 * 24));
    const title = document.querySelector('#dashboard .card:nth-child(3) h3');

    if(diff >= 15) {
        title.innerHTML = `<i class="fas fa-exclamation-triangle" style="color:#ff4444"></i> Bio-Status <small style="color:#ff4444; font-size:0.5rem">(RENOVAR AGORA)</small>`;
    } else {
        title.innerHTML = `<i class="fas fa-calculator text-primary"></i> Bio-Status <small style="color:#666; font-size:0.5rem">(${15-diff} dias p/ renovar)</small>`;
    }
}

function renderMetas() {
    const metas = ["Hidratação OK", "Dieta Batida", "Treino Focado"];
    document.getElementById('metas-list').innerHTML = metas.map(m => `
        <div class="glass" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px">
            <span>${m}</span>
            <button onclick="addXP(50); this.disabled=true; this.innerText='✓'" class="btn-mini">OK</button>
        </div>
    `).join('');
}

function showSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    
    const btns = document.querySelectorAll('.nav-item');
    btns.forEach(btn => {
        if(btn.getAttribute('onclick').includes(id)) btn.classList.add('active');
    });
}

function closeModal() { document.getElementById('universal-modal').classList.add('hidden'); }
function logout() { location.reload(); }
