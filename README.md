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

### 2. Alojar o site (Netlify — mais simples, grátis)
1. Ir a https://app.netlify.com/drop
2. Arrastar a pasta **`site/`** para a página. Fica online em segundos num
   endereço tipo `nome-aleatorio.netlify.app`.
3. Site settings → Change site name → pôr algo como `academia-dos-estudos`.

*(Alternativa: Cloudflare Pages — Workers & Pages → Create → Pages → Upload assets,
enviar o conteúdo de `site/`. Build command: nenhum. Output: `/`.)*

### 3. Ligar o domínio academiadosestudos.pt (fica na Amen, só muda o DNS)
No Netlify: **Domain management → Add a domain** → `academiadosestudos.pt`.
O Netlify indica os registos DNS. No painel da **Amen** (Zona DNS do domínio):

| Tipo | Nome | Valor |
|---|---|---|
| `A` | `@` | `75.2.60.5` *(IP que o Netlify indicar)* |
| `CNAME` | `www` | `nome-do-site.netlify.app` |

O domínio **não sai da Amen** — só se alteram estes registos. O certificado
HTTPS é emitido automaticamente pelo Netlify (pode demorar até 1h).

### 4. Antes de considerar "definitivo"
- [ ] Logótipo real (substituir `assets/logo-mark.svg` e o texto no header)
- [ ] Fotos reais (mesmos nomes de ficheiro — ver `assets/img/CREDITS.md`)
- [ ] Vídeo real do hero em `assets/video/hero.mp4`
- [ ] Textos confirmados com a Andreia (Sobre Nós, serviços, morada)
- [ ] Rever `politica-privacidade.html` e `politica-cookies.html`
- [ ] Nomes/funções reais da equipa em `sobre.html`
