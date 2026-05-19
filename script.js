// Objetos parlantes - Script
const MODELS_URL = "https://gen.pollinations.ai/image/models";
const GENERATE_URL = "https://gen.pollinations.ai/image/";

// Plantillas por defecto (desde JSON.txt) para garantizar disponibilidad
const DEFAULT_TEMPLATES = {
  "page_1": {
    "paleta_colores": ["#050505", "#7A0000", "#D40000", "#FFFFFF"],
    "tipografia": {
      "principal": "Sans futurista pixelada",
      "secundaria": "Sans condensada",
      "estilo": "Tecnológica, luminosa, sci-fi"
    },
    "estilo_ilustracion": "Fondo abstracto digital con arcos rojos luminosos y degradados oscuros",
    "estructura": "Título centrado con subtítulo pequeño debajo sobre fondo abstracto de alto contraste",
    "elementos_decorativos": ["arcos luminosos", "resplandor rojo", "sombras profundas", "efecto neón"],
    "tono_visual": "Dramático, tecnológico, intenso"
  },
  "page_2": {
    "paleta_colores": ["#050505", "#8B0000", "#E00000", "#FFFFFF"],
    "tipografia": {
      "principal": "Sans futurista pixelada",
      "secundaria": "Sans condensada",
      "estilo": "Digital y cinematográfica"
    },
    "estilo_ilustracion": "Composición abstracta con curvas rojas y fondo negro",
    "estructura": "Título grande centrado; subtítulo alineado bajo el título",
    "elementos_decorativos": ["curvas rojas", "brillos suaves", "contraste negro-rojo", "halo blanco en texto"],
    "tono_visual": "Tecnológico, serio, corporativo"
  },
  "page_3": {
    "paleta_colores": ["#1B0F3A", "#3424D6", "#00D8FF", "#FFFFFF", "#A000FF"],
    "tipografia": {
      "principal": "Sans display futurista",
      "secundaria": "Sans compacta",
      "estilo": "Gaming, neón, tecnológica"
    },
    "estilo_ilustracion": "Collage digital con manos robóticas realistas y panel HUD vectorial",
    "estructura": "Marco central tipo pantalla; robots a ambos lados; título en el centro",
    "elementos_decorativos": ["rejilla perspectiva", "destellos", "marcos HUD", "líneas cian", "paneles geométricos"],
    "tono_visual": "Futurista, energético, de ciencia ficción"
  },
  "page_4": {
    "paleta_colores": ["#0B1A2A", "#122B3C", "#6FD9E8", "#FFFFFF", "#B9C7D2"],
    "tipografia": {
      "principal": "Sans fina y moderna",
      "secundaria": "Sans condensada",
      "estilo": "Minimalista, tecnológica, institucional"
    },
    "estilo_ilustracion": "Render 3D realista de androide con redes neuronales de fondo",
    "estructura": "Texto a la izquierda y figura robótica dominante a la derecha",
    "elementos_decorativos": ["nodos conectados", "icono cerebral", "botón URL", "resplandor azul"],
    "tono_visual": "Profesional, futurista, científico"
  },
  "page_5": {
    "paleta_colores": ["#1C0735", "#FFFFFF", "#7C4DFF", "#FFB14A", "#E8D6FF"],
    "tipografia": {
      "principal": "Sans geométrica bold",
      "secundaria": "Sans condensada",
      "estilo": "Limpia, tecnológica, elegante"
    },
    "estilo_ilustracion": "Fondo abstracto con mallas de puntos, ondas y luces suaves",
    "estructura": "Título central vertical con líneas horizontales separadoras",
    "elementos_decorativos": ["puntos en malla", "ondas luminosas", "bokeh", "líneas finas"],
    "tono_visual": "Sofisticado, digital, moderno"
  },
  "page_6": {
    "paleta_colores": ["#F8D7DF", "#FF5A7A", "#FF7A1A", "#FFFFFF", "#111111"],
    "tipografia": {
      "principal": "Sans bold redondeada",
      "secundaria": "Líneas simuladas de texto",
      "estilo": "Editorial, amable, contemporánea"
    },
    "estilo_ilustracion": "Diseño abstracto translúcido con cintas curvas y tarjeta central iluminada",
    "estructura": "Tarjeta cuadrada centrada en perspectiva sobre formas fluidas",
    "elementos_decorativos": ["cintas translúcidas", "brillo perimetral", "paneles de interfaz", "degradados pastel"],
    "tono_visual": "Creativo, cálido, optimista"
  },
  "page_7": {
    "paleta_colores": ["#FFFFFF", "#0F4C75", "#D9660F", "#F5EED2", "#F6C85F"],
    "tipografia": {
      "principal": "Sans redondeada bold",
      "secundaria": "Sans pequeña",
      "estilo": "Educativa, infantil, amigable"
    },
    "estilo_ilustracion": "Ilustración vectorial plana de libros con formas decorativas",
    "estructura": "Portada vertical con ilustración superior, título central y botón inferior",
    "elementos_decorativos": ["libros", "hojas", "estrellas", "líneas punteadas", "formas onduladas en esquinas"],
    "tono_visual": "Escolar, alegre, accesible"
  },
  "page_8": {
    "paleta_colores": ["#031B38", "#0B3E75", "#8DBBFF", "#FFFFFF", "#142B4A"],
    "tipografia": {
      "principal": "Sans bold expandida",
      "secundaria": "Sans técnica en mayúsculas",
      "estilo": "Tecnológica, editorial, científica"
    },
    "estilo_ilustracion": "Imagen digital de globo holográfico sobre mano con fondo de datos",
    "estructura": "Formato portada: cabecera superior, imagen central grande y texto inferior",
    "elementos_decorativos": ["códigos binarios", "líneas de interfaz", "marcos diagonales", "brillo holográfico"],
    "tono_visual": "Científico, futurista, corporativo"
  },
  "page_9": {
    "paleta_colores": ["#06152E", "#0AB7A7", "#FFFFFF", "#00C8FF", "#0F2B4D"],
    "tipografia": {
      "principal": "Sans futurista angular",
      "secundaria": "Sans pequeña editorial",
      "estilo": "Tecnológica, limpia, seria"
    },
    "estilo_ilustracion": "Cerebro abstracto construido con nodos y conexiones",
    "estructura": "Título superior grande, gráfico central y cita/promesa editorial en la parte inferior",
    "elementos_decorativos": ["red neuronal", "puntos luminosos", "líneas verticales", "destellos azules"],
    "tono_visual": "Educativo, tecnológico, avanzado"
  },
  "page_10": {
    "paleta_colores": ["#000000", "#FFFFFF", "#FFB000", "#B40000", "#2B2B2B"],
    "tipografia": {
      "principal": "Serif editorial elegante",
      "secundaria": "Sans limpia",
      "estilo": "Revista científica clásica"
    },
    "estilo_ilustracion": "Fotomontaje espacial con eclipse y resplandor solar",
    "estructura": "Cabecera de revista arriba, imagen central y titulares secundarios abajo",
    "elementos_decorativos": ["eclipse", "estrellas", "resplandor solar", "jerarquía editorial"],
    "tono_visual": "Misterioso, científico, premium"
  },
  "page_11": {
    "paleta_colores": ["#5B4CC4", "#8C7BE8", "#F7A6FF", "#FFFFFF", "#33266E"],
    "tipografia": {
      "principal": "Sans fina y amplia",
      "secundaria": "Sans ligera",
      "estilo": "Serena, minimalista, espiritual"
    },
    "estilo_ilustracion": "Fotografía suave de flor de loto sobre agua con tratamiento violeta",
    "estructura": "Imagen a pantalla completa con texto superior e inferior superpuesto",
    "elementos_decorativos": ["flor de loto", "reflejo en agua", "ondas suaves", "luz difusa"],
    "tono_visual": "Calmado, meditativo, etéreo"
  },
  "page_12": {
    "paleta_colores": ["#2E2E2E", "#FF3B3B", "#F2EE3E", "#37A2E0", "#F0F0F0"],
    "tipografia": {
      "principal": "Sans bold condensada",
      "secundaria": "Sans pequeña",
      "estilo": "Moderna, modular, editorial"
    },
    "estilo_ilustracion": "Composición geométrica tipo maqueta editorial con bloques de color",
    "estructura": "Retícula asimétrica con rectángulos grandes y pequeños",
    "elementos_decorativos": ["bloques rectangulares", "márgenes blancos", "contraste de colores primarios", "layout de índice"],
    "tono_visual": "Minimalista, gráfico, contemporáneo"
  },
  "page_13": {
    "paleta_colores": ["#F2B000", "#F05A28", "#D6251F", "#75A7A4", "#FFFFFF"],
    "tipografia": {
      "principal": "Sans bold geométrica",
      "secundaria": "Sans en mayúsculas",
      "estilo": "Editorial, moderna, limpia"
    },
    "estilo_ilustracion": "Imagen abstracta de planos geométricos con textura de pared pintada",
    "estructura": "Imagen superior dominante y franja blanca inferior con título",
    "elementos_decorativos": ["formas geométricas", "textura rugosa", "bloques de color", "espacio negativo"],
    "tono_visual": "Artístico, moderno, urbano"
  },
  "page_14": {
    "paleta_colores": ["#FFFFFF", "#F7B7D8", "#F3D989", "#F6A900", "#F2EDE4"],
    "tipografia": {
      "principal": "Sans bold en mayúsculas",
      "secundaria": "No destacada",
      "estilo": "Minimalista, artística, suave"
    },
    "estilo_ilustracion": "Formas abstractas orgánicas con degradados pastel y textura de papel",
    "estructura": "Título grande alineado a la izquierda sobre formas circulares superpuestas",
    "elementos_decorativos": ["círculos orgánicos", "línea curva blanca", "textura de papel", "degradados suaves"],
    "tono_visual": "Creativo, elegante, editorial"
  },
  "page_15": {
    "paleta_colores": ["#E7E0D6", "#B4AEA3", "#7E776E", "#FFFFFF", "#D0C8BD"],
    "tipografia": {
      "principal": "Sans bold expandida",
      "secundaria": "No visible",
      "estilo": "Sobria, minimalista, neutral"
    },
    "estilo_ilustracion": "Abstracción geométrica con círculos superpuestos y trama de semitono",
    "estructura": "Composición centrada con grandes masas circulares y texto pequeño a la izquierda",
    "elementos_decorativos": ["círculos", "patrón halftone", "superposiciones translúcidas", "fondo beige"],
    "tono_visual": "Editorial, calmado, sofisticado"
  },
  "page_16": {
    "paleta_colores": ["#F5FAFC", "#25BFEF", "#2C6F8F", "#A6D96A", "#4B4B4B"],
    "tipografia": {
      "principal": "Sans uppercase geométrica",
      "secundaria": "Sans condensada vertical",
      "estilo": "Experimental, científica, editorial"
    },
    "estilo_ilustracion": "Fotografía/imagen espacial de nebulosa con composición de revista",
    "estructura": "Imagen central grande; título superior; textos laterales rotados",
    "elementos_decorativos": ["imagen cósmica", "texto vertical", "márgenes amplios", "numeración de volumen"],
    "tono_visual": "Visionario, científico, futurista"
  },
  "page_17": {
    "paleta_colores": ["#2F6BFF", "#F5C4D8", "#E9A7C4", "#111111", "#FFFFFF"],
    "tipografia": {
      "principal": "Script/cursiva elegante",
      "secundaria": "No destacada",
      "estilo": "Retro, decorativa, lúdica"
    },
    "estilo_ilustracion": "Patrón geométrico repetitivo con textura granulada",
    "estructura": "Fondo completo con patrón; medallón circular central dividido en dos colores",
    "elementos_decorativos": ["semicírculos", "patrón modular", "textura desgastada", "círculo central"],
    "tono_visual": "Retro, creativo, alegre"
  },
  "page_18": {
    "paleta_colores": ["#F2F2F2", "#F28C00", "#F2D400", "#111111", "#BDBDBD"],
    "tipografia": {
      "principal": "Sans bold moderna",
      "secundaria": "Sans pequeña editorial",
      "estilo": "Bauhaus, geométrica, gráfica"
    },
    "estilo_ilustracion": "Formas geométricas planas sobre fondo con textura de papel",
    "estructura": "Figuras grandes distribuidas en diagonal con título en la zona inferior izquierda",
    "elementos_decorativos": ["rectángulos inclinados", "triángulo", "círculo amarillo", "marcos lineales", "textura de grano"],
    "tono_visual": "Artístico, académico, moderno"
  },
  "page_19": {
    "paleta_colores": ["#F4A45C", "#F06292", "#C21888", "#FFFFFF", "#FFD0C0"],
    "tipografia": {
      "principal": "Sans ultra bold en mayúsculas",
      "secundaria": "Sans espaciada",
      "estilo": "Contemporánea, impactante, gráfica"
    },
    "estilo_ilustracion": "Fondo degradado con líneas geométricas repetidas en perspectiva",
    "estructura": "Título masivo arriba; patrón diagonal ocupa el centro; subtítulo abajo a la derecha",
    "elementos_decorativos": ["degradado cálido", "líneas paralelas", "formas angulares", "composición diagonal"],
    "tono_visual": "Energético, moderno, experimental"
  },
  "page_20": {
    "paleta_colores": ["#E8793F", "#B24A34", "#26000F", "#FFFFFF", "#F6C5A6"],
    "tipografia": {
      "principal": "Sans bold editorial",
      "secundaria": "Serif itálica elegante",
      "estilo": "Revista cultural, sofisticada"
    },
    "estilo_ilustracion": "Fondo degradado fotográfico/abstracto con sombras orgánicas",
    "estructura": "Cabecera grande superior; bloques de texto editoriales distribuidos en izquierda y derecha",
    "elementos_decorativos": ["degradado cálido", "sombras oscuras", "textos en itálica", "marca Adobe Express"],
    "tono_visual": "Editorial, artístico, elegante"
  }
};

let TEMPLATES = DEFAULT_TEMPLATES;

// Construye un resumen textual de la plantilla para usar como system prompt
function templateToPrompt(templateObj) {
    if (!templateObj) return '';
    const colores = templateObj.paleta_colores ? `Paleta de colores: ${templateObj.paleta_colores.join(', ')}.` : '';
    const tipografia = templateObj.tipografia ? `Tipografía principal: ${templateObj.tipografia.principal}. Estilo: ${templateObj.tipografia.estilo}.` : '';
    const ilustracion = templateObj.estilo_ilustracion ? `Estilo de ilustración: ${templateObj.estilo_ilustracion}.` : '';
    const estructura = templateObj.estructura ? `Estructura: ${templateObj.estructura}.` : '';
    const decorativos = templateObj.elementos_decorativos ? `Elementos decorativos: ${templateObj.elementos_decorativos.join(', ')}.` : '';
    const tono = templateObj.tono_visual ? `Tono visual: ${templateObj.tono_visual}.` : '';
    return `${colores} ${tipografia} ${ilustracion} ${estructura} ${decorativos} ${tono}`.trim();
}

// Fallback de objetos (si el PDF no se puede parsear) - ampliado a 50
const FALLBACK_OBJECTS = [
"Apple","Ball","Book","Chair","Clock","Cup","Candle","Car","Cat","Dog",
"Phone","Lamp","Spoon","Fork","Pencil","Backpack","Guitar","Hat","Shoe","Watch",
"Balloon","Bottle","Camera","Glasses","Key","Paintbrush","Plant","Radio","Robot","Teddy Bear",
"Toothbrush","Umbrella","Violin","Wallet","Bottlecap","Kettle","Teapot","Microwave","Toaster","Basket",
"Mirror","Clockwork","Lantern","Stool","Map","Globe","BottleOpener","Compass","Binoculars","Calculator"
];

// Traducciones español (mapa para los objetos por defecto)
const TRANSLATIONS_ES = {
    "Apple":"Manzana","Ball":"Pelota","Book":"Libro","Chair":"Silla","Clock":"Reloj","Cup":"Taza","Candle":"Vela","Car":"Coche","Cat":"Gato","Dog":"Perro",
    "Phone":"Teléfono","Lamp":"Lámpara","Spoon":"Cuchara","Fork":"Tenedor","Pencil":"Lápiz","Backpack":"Mochila","Guitar":"Guitarra","Hat":"Sombrero","Shoe":"Zapato","Watch":"Reloj",
    "Balloon":"Globo","Bottle":"Botella","Camera":"Cámara","Glasses":"Gafas","Key":"Llave","Paintbrush":"Pincel","Plant":"Planta","Radio":"Radio","Robot":"Robot","Teddy Bear":"Osito",
    "Toothbrush":"Cepillo de dientes","Umbrella":"Paraguas","Violin":"Violín","Wallet":"Cartera","Bottlecap":"Tapón","Kettle":"Hervidor","Teapot":"Tetera","Microwave":"Microondas","Toaster":"Tostadora","Basket":"Cesta",
    "Mirror":"Espejo","Clockwork":"Mecanismo de reloj","Lantern":"Linterna","Stool":"Taburete","Map":"Mapa","Globe":"Globo terráqueo","BottleOpener":"Abrelatas","Compass":"Brújula","Binoculars":"Binoculares","Calculator":"Calculadora"
};

// Estado actual (no objetos ahora sino plantillas)
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // restore API key
    const saved = localStorage.getItem('pollinations_api_key');
    if (saved) document.getElementById('apiKeyInput').value = saved;

    document.getElementById('loadPdfBtn') && (document.getElementById('loadPdfBtn').onclick = () => loadPdfObjects());
    document.getElementById('genImageBtn') && (document.getElementById('genImageBtn').onclick = () => generateImageFromPrompt());

    // Cargar plantillas desde JSON.txt y luego modelos remotos
    loadTemplatesFromJSON();
    fetchAndPopulateModels();
    // attempt automatic load (silently) if PDF exists
    fetch('./OBJETOS PARLANTES.pdf', { method: 'HEAD' }).then(r => { if (r.ok) loadPdfObjects(); }).catch(()=>{});
});
    (function(){
        // Small UI glue: personalizado accept button, studio inclusion, and prompt auto-update
        const waitFor = (id)=>{let i=0; return new Promise((res)=>{const t=setInterval(()=>{i++; if(document.getElementById(id)|| i>50){clearInterval(t); res(document.getElementById(id));}},50);});};

        Promise.all([waitFor('object_select')]).then(nodes=>{
            const objectSelect = document.getElementById('object_select');
            // when plantilla changes, update system prompt preview
            objectSelect.addEventListener('change', ()=> updatePromptsForSelection());
            // inputs that affect prompt
            const rev = document.getElementById('revista_nombre');
            const edi = document.getElementById('editorial_input');
            if (rev) rev.addEventListener('input', updatePromptsForSelection);
            if (edi) edi.addEventListener('input', updatePromptsForSelection);
        });
    })();

async function loadPdfObjects() {
    const pdfPath = './OBJETOS PARLANTES.pdf';
    try {
        const loadingTask = pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;
        let fullText = '';
        for (let i=1;i<=Math.min(10,pdf.numPages);i++){
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const strs = content.items.map(s=>s.str).join(' ');
            fullText += '\n' + strs;
        }

        // sencillo: separar por saltos, comas o puntos y filtrar tokens útiles
        const tokens = fullText.split(/\n|,|\.|;|\t/).map(t=>t.trim()).filter(t=>t.length>1);
        const uniques = [];
        for (const t of tokens) {
            const clean = t.replace(/[^ -\u007F\w\s\-]/g,'').trim();
            if (!clean) continue;
            if (clean.length > 60) continue;
            if (!uniques.includes(clean)) uniques.push(clean);
            if (uniques.length>=50) break;
        }
        if (uniques.length >= 8) {
            // store english originals
            currentObjectsEnglish = uniques.slice(0,50);
            // generate spanish translations using map when possible
            currentObjectsSpanish = currentObjectsEnglish.map(e => TRANSLATIONS_ES[e] || e);
            populateObjectSelect(currentLang === 'es' ? currentObjectsSpanish : currentObjectsEnglish);
            return;
        }
    } catch (e) { console.warn('PDF parse failed', e); }
    // fallback
    // populate fallback and set current arrays
    currentObjectsEnglish = FALLBACK_OBJECTS.slice(0,50);
    currentObjectsSpanish = currentObjectsEnglish.map(e => TRANSLATIONS_ES[e] || e);
    populateObjectSelect(currentLang === 'es' ? currentObjectsSpanish : currentObjectsEnglish);
}

// Cargar plantillas desde JSON.txt
async function loadTemplatesFromJSON() {
    try {
        const resp = await fetch('./JSON.txt');
        const data = await resp.json();
        TEMPLATES = data;
        // populate selector with Modelo 1..20
        const sel = document.getElementById('object_select');
        if (!sel) return;
        // hidden input holds selected template key
        sel.value = 'page_1';
        renderTemplateThumbnails();
        updatePromptsForSelection();
    } catch (e) {
        console.warn('No se pudo cargar JSON.txt', e);
        // fallback: populate Modelo 1..20 without details
        const sel = document.getElementById('object_select');
        if (!sel) return;
        sel.value = 'page_1';
        renderTemplateThumbnails();
    }
}

// Render thumbnails for each plantilla into #template_list
function renderTemplateThumbnails(){
    const container = document.getElementById('template_list');
    const sel = document.getElementById('object_select');
    if (!container || !sel) return;
    container.innerHTML = '';
    const key = getApiKey();
    const templateKeys = Object.keys(TEMPLATES).slice(0,20);
    templateKeys.forEach((tk, idx) => {
        const card = document.createElement('div');
        card.style.display = 'flex';
        card.style.gap = '8px';
        card.style.alignItems = 'center';
        card.style.cursor = 'pointer';
        card.style.padding = '6px';
        card.style.border = '1px solid transparent';
        card.style.borderRadius = '6px';

        const img = document.createElement('img');
        img.alt = `Modelo ${idx+1}`;
        img.style.width = '100%';
        img.style.maxWidth = '100%';
        img.style.height = '110px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';

        const right = document.createElement('div');
        right.style.minWidth = '80px';
        right.style.display = 'flex';
        right.style.flexDirection = 'column';
        right.style.gap = '6px';

        const label = document.createElement('div');
        label.textContent = `Modelo ${idx+1}`;
        label.style.fontSize = '13px';
        label.style.color = '#222';

        right.appendChild(label);
        card.appendChild(img);
        card.appendChild(right);

        // click selects this template
        card.addEventListener('click', ()=>{
            // mark hidden input
            sel.value = tk;
            // highlight
            Array.from(container.children).forEach(c=> c.style.border='1px solid transparent');
            card.style.border = '2px solid #007ef6';
            updatePromptsForSelection();
        });

        // highlight if current
        if (sel.value === tk) {
            card.style.border = '2px solid #007ef6';
        }

        // Use local images from the images/ folder for thumbnails (modelo1.png, modelo2.png, ...)
        const localSrc = `images/modelo${idx+1}.png`;
        img.src = localSrc;
        img.onload = ()=>{};
        img.onerror = ()=>{ img.style.background='#ddd'; img.alt='No preview'; };

        container.appendChild(card);
    });
}

function populateObjectSelect(list) {
    const sel = document.getElementById('object_select');
    if (!sel) return;
    // If object_select is a hidden input (we replaced selector by thumbnails), set its value
    const items = list.slice(0,50);
    if (sel.tagName === 'INPUT') {
        sel.value = items[0] || '';
        // refresh prompts and thumbnails
        try { renderTemplateThumbnails(); } catch(e){}
        return;
    }
    sel.innerHTML = '';
    items.forEach((it, idx) => {
        const opt = document.createElement('option');
        opt.value = it;
        opt.textContent = `${(idx+1).toString().padStart(2,'0')}. ${it}`;
        sel.appendChild(opt);
    });
    // add personalizado option at end (kept for compatibility)
    const customOpt = document.createElement('option');
    customOpt.value = 'personalizado';
    customOpt.textContent = `${(items.length+1).toString().padStart(2,'0')}. personalizado`;
    sel.appendChild(customOpt);
}

// When object or emotion changes, update prompts automatically
function updatePromptsForSelection() {
    const sel = document.getElementById('object_select');
    if (!sel) return;
    const selected = sel.value || 'page_1'; // e.g., 'page_1'
    const template = TEMPLATES[selected] || null;
    // build system prompt using template and magazine name/editorial
    const nombre = (document.getElementById('revista_nombre') && document.getElementById('revista_nombre').value.trim()) || '';
    const editorial = (document.getElementById('editorial_input') && document.getElementById('editorial_input').value.trim()) || '';
    const tplText = templateToPrompt(template);
    let systemPrompt = `Usa esta plantilla para diseñar la infografía. Conserva las plantillas y sus descripciones en el system prompt: ${tplText}`;
    systemPrompt += ` Configura la infografía con 5 a 8 bloques temáticos, encabezados claros y contenido resumido; usa frases cortas (máx. 15–20 palabras), viñetas, lenguaje claro y directo, evita párrafos extensos, usa bullets y frases concisas, y crea un título impactante.`;
    if (nombre) systemPrompt += ` El tema principal de la infografía debe ser: "${nombre}".`;
    if (editorial) systemPrompt += ` Ten en cuenta el propósito: "${editorial}".`;
    // also include the raw JSON of the template to ensure styles are applied
    if (template) {
        try {
            const raw = JSON.stringify(template, null, 2);
            systemPrompt += ` e incluye:\n${raw}`;
        } catch (e) {
            // fallback to textual tplText already present
        }
    }
        // put into editable textarea (if exists) and expose globally
        const spArea = document.getElementById('system_prompt');
        if (spArea) {
            spArea.value = systemPrompt;
            window._systemPrompt = spArea.value;
        } else {
            window._systemPrompt = systemPrompt;
        }
        // show notice briefly
        const notice = document.getElementById('system_notice');
        if (notice) { notice.style.display = 'block'; notice.textContent = 'System prompt actualizado: ' + (systemPrompt.length>120? systemPrompt.slice(0,120)+'...': systemPrompt); setTimeout(()=>{ notice.style.display='none'; }, 4000); }
}

async function fetchAndPopulateModels() {
    // minimal implementation: try fetch remote models, else leave empty
    try {
        const resp = await fetch(MODELS_URL);
        const models = await resp.json();
        const sel = document.getElementById('img_model');
        sel.innerHTML = '';
        models.forEach(m=>{
            if (m.output_modalities && m.output_modalities.includes('image')) {
                const o = new Option(m.description || m.name, m.name);
                sel.add(o);
            }
        });
    } catch (e) {
        // fallback models
        const sel = document.getElementById('img_model');
        sel.innerHTML = '';
        ['flux','kontext','veo'].forEach(n=> sel.add(new Option(n,n)));
    }
}

function buildSystemPrompt() {
    // Build system prompt from currently selected plantilla and inputs
    updatePromptsForSelection();
}
            // Override populateObjectSelect to ensure 'personalizado' option is present
            function populateObjectSelect(list) {
                const sel = document.getElementById('object_select');
                if (!sel) return;
                sel.innerHTML = '';
                const items = (list || []).slice(0,50);
                items.forEach((it, idx) => {
                    const opt = document.createElement('option');
                    opt.value = it;
                    opt.textContent = `${(idx+1).toString().padStart(2,'0')}. ${it}`;
                    sel.appendChild(opt);
                });
                // add personalizado option at end
                const customOpt = document.createElement('option');
                customOpt.value = 'personalizado';
                customOpt.textContent = `${(items.length+1).toString().padStart(2,'0')}. personalizado`;
                sel.appendChild(customOpt);

                // ensure custom input reacts
                const cust = document.getElementById('custom_object_input');
                if (cust) {
                    cust.style.display = 'none';
                    cust.removeEventListener('input', updatePromptsForSelection);
                    cust.addEventListener('input', updatePromptsForSelection);
                }
            }

function saveKeyLocally(){ const k = document.getElementById('apiKeyInput').value.trim(); if(k) localStorage.setItem('pollinations_api_key', k); }
function saveKeyLocally(){ const k = document.getElementById('apiKeyInput').value.trim(); if(k) { localStorage.setItem('pollinations_api_key', k); renderTemplateThumbnails(); } }
function startAuthFlow(){ const redirectUrl = window.location.href.split('#')[0]; window.location.href = `https://enter.pollinations.ai/authorize?redirect_url=${encodeURIComponent(redirectUrl)}`; }

function getApiKey(){ return document.getElementById('apiKeyInput').value.trim(); }

function getImageDims() {
    const sel = document.getElementById('img_ratio');
    const val = sel ? sel.value : 'vertical';
    if (val === 'square') return 'width=1024&height=1024';
    if (val === '4:3') return 'width=1024&height=768';
    if (val === '3:4') return 'width=768&height=1024';
    // vertical (9:16) fallback
    return 'width=1152&height=2048';
}

function generateImageFromPrompt() {
    const key = getApiKey();
    if (!key) return alert('Por favor ingresa tu API key.');
    const prompt = window._systemPrompt || '';
    if (!prompt) return alert('System prompt vacío. Selecciona una plantilla y completa los campos.');
    const model = document.getElementById('img_model') ? document.getElementById('img_model').value : 'flux';
    const seed = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    const url = `${GENERATE_URL}${encodeURIComponent(prompt)}?key=${key}&model=${model}&${getImageDims()}&seed=${seed}`;
    const img = document.getElementById('img-preview');
    // show transient loading message
    const loading = document.getElementById('img_loading');
    if (loading) loading.style.display = 'block';
    img.style.display = 'block';
    img.onload = () => { if (loading) loading.style.display = 'none'; };
    img.src = url;
}

// Update preview container size according to ratio selection
function updateBoxSize() {
    const sel = document.getElementById('img_ratio');
    const val = sel ? sel.value : 'vertical';
    const box = document.getElementById('img-container');
    let w = 420, h = 745;
    if (val === 'square') { w = 420; h = 420; }
    else if (val === '4:3') { w = 640; h = 480; }
    else if (val === '3:4') { w = 480; h = 640; }
    else { w = 420; h = 745; }
    if (box) { box.style.width = w + 'px'; box.style.height = h + 'px'; }
}

// Download current image displayed in preview
async function downloadCurrentImage() {
    const url = document.getElementById('img-preview').src;
    if (!url) return alert('No hay imagen para descargar.');
    try {
        const resp = await fetch(url);
        const blob = await resp.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `objeto_parlante_${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
    } catch (e) {
        window.open(url, '_blank');
    }
}

// Ensure API key helpers exist
function saveKeyLocally(){
    const el = document.getElementById('apiKeyInput');
    if (!el) return;
    const k = el.value.trim();
    if (k) localStorage.setItem('pollinations_api_key', k);
    // regenerate thumbnails when key available
    try { renderTemplateThumbnails(); } catch(e){}
}

function getApiKey(){
    const el = document.getElementById('apiKeyInput');
    return el ? el.value.trim() : '';
}

// Copy the current system prompt to clipboard (with fallback)
function copySystemPrompt() {
    const spEl = document.getElementById('system_prompt');
    const btn = document.getElementById('copyPromptBtn');
    const text = (spEl && spEl.value) ? spEl.value : (window._systemPrompt || '');
    if (!text) return alert('System prompt vacío.');
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            if (btn) {
                const prev = btn.textContent;
                btn.textContent = 'Copiado';
                setTimeout(() => { btn.textContent = prev; }, 1200);
            }
        }).catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        alert('System prompt copiado');
    } catch (e) {
        alert('No fue posible copiar automáticamente. Selecciona y copia manualmente.');
    }
    document.body.removeChild(ta);
}

// Language toggle for the prompt area
function setPromptToSpanish() {
    currentLang = 'es';
    // update prompt according to current selection and inputs
    updatePromptsForSelection();
}

function setPromptToEnglish() {
    currentLang = 'en';
    updatePromptsForSelection();
}

// Attach new controls
document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btnEs');
    const btnEn = document.getElementById('btnEn');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyBtn = document.getElementById('copyPromptBtn');
    if (btnEs) btnEs.onclick = setPromptToSpanish;
    if (btnEn) btnEn.onclick = setPromptToEnglish;
    if (downloadBtn) downloadBtn.onclick = downloadCurrentImage;
    if (copyBtn) copyBtn.onclick = copySystemPrompt;
    const ratio = document.getElementById('img_ratio');
    if (ratio) { ratio.addEventListener('change', updateBoxSize); }
    // initialize size
    updateBoxSize();
});

// Bind plantilla and inputs and system prompt edits
document.addEventListener('DOMContentLoaded', () => {
    const sel = document.getElementById('object_select');
    if (sel) sel.addEventListener('change', updatePromptsForSelection);
    const rev = document.getElementById('revista_nombre');
    const edi = document.getElementById('editorial_input');
    const sp = document.getElementById('system_prompt');
    if (rev) rev.addEventListener('input', updatePromptsForSelection);
    if (edi) edi.addEventListener('input', updatePromptsForSelection);
    if (sp) sp.addEventListener('input', ()=>{ window._systemPrompt = sp.value; });
    // initial fill
    setTimeout(()=>{ try{ updatePromptsForSelection(); }catch(e){} }, 100);
});

// Additional initialization to ensure selector is populated and system prompt generated by default
document.addEventListener('DOMContentLoaded', () => {
    if (!currentObjectsEnglish || currentObjectsEnglish.length === 0) {
        currentObjectsEnglish = FALLBACK_OBJECTS.slice(0,50);
        currentObjectsSpanish = currentObjectsEnglish.map(e => TRANSLATIONS_ES[e] || e);
    }
    populateObjectSelect(currentLang === 'es' ? currentObjectsSpanish : currentObjectsEnglish);
    // hide PDF and gen prompt buttons (redundant safety)
    const loadBtn = document.getElementById('loadPdfBtn'); if (loadBtn) loadBtn.style.display = 'none';
    const genBtn = document.getElementById('genPromptBtn'); if (genBtn) genBtn.style.display = 'none';
    // bind actions
    const pdfBtn = document.getElementById('loadPdfBtn'); if (pdfBtn) pdfBtn.onclick = loadPdfObjects;
    const gBtn = document.getElementById('genImageBtn'); if (gBtn) gBtn.onclick = () => { const loading = document.getElementById('img_loading'); if (loading) loading.style.display = 'block'; generateImageFromPrompt(); };
    const esBtn = document.getElementById('btnEs'); if (esBtn) esBtn.onclick = () => { setPromptToSpanish(); updatePromptsForSelection(); };
    const enBtn = document.getElementById('btnEn'); if (enBtn) enBtn.onclick = () => { setPromptToEnglish(); updatePromptsForSelection(); };
    const downBtn = document.getElementById('downloadBtn'); if (downBtn) downBtn.onclick = downloadCurrentImage;
    // bind selection changes
    const objSel = document.getElementById('object_select'); if (objSel) objSel.addEventListener('change', updatePromptsForSelection);
    const emotionSel = document.getElementById('emotion_select'); if (emotionSel) emotionSel.addEventListener('change', updatePromptsForSelection);

    updateBoxSize();
    // generate system prompt by default and ensure prompts reflect first selection
    buildSystemPrompt();
    updatePromptsForSelection();
    // try fetch models
    if (typeof fetchAndPopulateModels === 'function') fetchAndPopulateModels();
});
