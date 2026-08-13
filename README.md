# QuestNote ⚔️

**Organiza a tua vida. Vive a tua aventura.**

App de produtividade gamificada com tema RPG — notas, missões, quests e perfil de herói.

## Como correr

```bash
# 1. Instalar dependências
npm install

# 2. Arrancar o Expo
npx expo start
```

Depois abre no telemóvel com a app **Expo Go**, ou pressiona `w` para web / `a` para Android / `i` para iOS.

## Estrutura

```
questnote/
├── App.js                 # Navegação bottom tabs
├── index.js
├── app.json
├── package.json
├── constants/
│   ├── theme.js           # Cores, spacing, radius
│   └── data.js            # Dados mock
├── components/
│   ├── ProgressBar.js
│   └── XPBadge.js
└── screens/
    ├── HomeScreen.js      # Mundo (dashboard)
    ├── NotesScreen.js     # Notas / Coleção
    ├── MissionsScreen.js  # Listas / Missões
    ├── QuestsScreen.js    # Tarefas / Quests
    └── ProfileScreen.js   # Perfil / Herói
```

## Ecrãs implementados

1. **Mundo (Home)** — Level, XP, streak, quests do dia, baú de recompensa
2. **Notas** — Grelha de notas com categorias e pesquisa
3. **Missões** — Listas com progresso e recompensas
4. **Quests** — Tarefas com prioridade e estatísticas
5. **Perfil** — Avatar, stats, conquistas e temas

## Próximos passos sugeridos

- [ ] Persistência com AsyncStorage ou Supabase
- [ ] Ecrã de detalhe de nota
- [ ] Ecrã de missão detalhada (checklist)
- [ ] Modal de conclusão de quest (+XP animado)
- [ ] Loja de personalização
- [ ] Árvore de habilidades
- [ ] Sistema real de XP e level-up
- [ ] Notificações de streak
