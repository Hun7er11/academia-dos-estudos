# Academia dos Estudos — site (v1)

Site estático (HTML/CSS/JS puro). Estética inspirada em mentes-criativas.pt,
com as alterações pedidas pelo cliente.

## Estrutura

```
site/
├── index.html               Página inicial (hero, sobre, serviços, vantagens, testemunhos, contactos, form, mapa)
├── sobre.html                Sobre Nós
├── atividades.html           Atividades extracurriculares
├── instalacoes.html          As nossas instalações
├── politica-privacidade.html  }  modelos — rever antes de publicar
├── politica-cookies.html      }
├── css/styles.css
├── js/main.js
└── assets/
    ├── logo-mark.svg          marca provisória — substituir pelo logo real
    ├── video/hero.mp4         vídeo de fundo do hero (stock temporário)
    └── img/                   fotos temporárias — ver assets/img/CREDITS.md
```

Nota: os links a CSS/JS têm `?v=N` para forçar o browser a atualizar. **Ao editar
`styles.css` ou `main.js`, incrementar esse número nos 6 ficheiros HTML.**

## Ver localmente

Abrir `index.html`, ou: `cd site && python -m http.server 8080`

---

## Passos para publicar

### 1. Ativar o formulário de contacto (5 min)
1. Criar conta grátis em https://web3forms.com e copiar a *Access Key*.
2. Em `index.html`, substituir `COLOCAR-ACCESS-KEY-AQUI` pela chave.
   Os emails passam a chegar a `academiadosestudos@outlook.pt`.

### 2. Alojar no Vercel (mesmo fluxo do dg-sales-pro)

Esta pasta já é um repositório Git (`main`, 1.º commit feito). É só publicar:

1. **Criar o repositório no GitHub** (ex.: `academia-dos-estudos`) — vazio, sem README.
2. Ligar e enviar:
   ```bash
   cd site
   git remote add origin https://github.com/<utilizador>/academia-dos-estudos.git
   git push -u origin main
   ```
3. Em [vercel.com](https://vercel.com) → **Add New… → Project** → importar esse repositório.
   - Framework Preset: **Other**
   - Build Command: *(vazio)*
   - Output Directory: *(vazio / `.`)*
   - Deploy → fica online em `academia-dos-estudos.vercel.app`.

Cada `git push` passa a atualizar o site automaticamente (tal como o dg-sales-pro).

*(Alternativa sem GitHub: `npm i -g vercel`, depois `cd site && vercel` e seguir as perguntas.)*

### 3. Ligar o domínio academiadosestudos.pt (fica na Amen, só muda o DNS)

No Vercel: **Project → Settings → Domains → Add** → `academiadosestudos.pt`
(e `www.academiadosestudos.pt`). O Vercel mostra os registos a criar.
No painel da **Amen** (Zona DNS do domínio), normalmente:

| Tipo | Nome | Valor |
|---|---|---|
| `A` | `@` | `76.76.21.21` *(o que o Vercel indicar)* |
| `CNAME` | `www` | `cname.vercel-dns.com` |

O domínio **não sai da Amen** — só se alteram estes registos. O HTTPS é
automático (pode demorar até ~1h a propagar). Podes publicar já e mudar o
domínio quando quiseres — são passos independentes.

### 4. Antes de considerar "definitivo"
- [ ] Logótipo real (substituir `assets/logo-mark.svg` e o texto no header)
- [ ] Fotos reais (mesmos nomes de ficheiro — ver `assets/img/CREDITS.md`)
- [ ] Vídeo real do hero em `assets/video/hero.mp4`
- [ ] Textos confirmados com a Andreia (Sobre Nós, serviços, morada)
- [ ] Rever `politica-privacidade.html` e `politica-cookies.html`
- [ ] Nomes/funções reais da equipa em `sobre.html`
