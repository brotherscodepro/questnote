// Mock data for the app

export const USER = {
  name: 'Explorador',
  level: 20,
  xp: 1840,
  xpMax: 2000,
  coins: 680,
  energy: 42,
  streak: 14,
  multiplier: 1.3,
  notes: 42,
  lists: 18,
  tasks: 87,
  streakDays: 14,
  totalXp: 2340,
  conquests: '9/24',
  memberSince: 'Ago 2024',
};

export const DAILY_QUESTS = [
  { id: 1, title: 'Completar 3 tarefas', progress: 2, total: 3, xp: 40, completed: false },
  { id: 2, title: 'Continuar um projeto', progress: 0, total: 1, xp: 25, completed: false },
  { id: 3, title: 'Criar 1 nota nova', progress: 1, total: 1, xp: 15, completed: true },
];

export const NOTES = [
  {
    id: 1,
    title: 'Sistema de Gamificação',
    category: 'Ideia',
    icon: '💎',
    color: '#8B5CF6',
    xp: 5,
    date: 'Hoje · 14:32',
    tags: ['gamificação', 'design', 'app'],
  },
  {
    id: 2,
    title: 'Wireframes Mobile',
    category: 'Projeto',
    icon: '📜',
    color: '#F59E0B',
    xp: 5,
    date: 'Hoje · 11:08',
    tags: ['design', 'ui'],
  },
  {
    id: 3,
    title: 'Hábitos Diários',
    category: 'Pessoal',
    icon: '🌱',
    color: '#10B981',
    xp: 5,
    date: 'Ontem · 21:15',
    tags: ['hábitos'],
  },
  {
    id: 4,
    title: 'Design Patterns',
    category: 'Estudo',
    icon: '🧪',
    color: '#EC4899',
    xp: 5,
    date: '2 ago · 16:40',
    tags: ['estudo', 'código'],
  },
];

export const NOTE_CATEGORIES = [
  { id: 'all', label: 'Todas' },
  { id: 'ideia', label: 'Ideias' },
  { id: 'projeto', label: 'Projeto' },
  { id: 'pessoal', label: 'Pessoal' },
  { id: 'estudo', label: 'Estudo' },
];

export const MISSIONS = [
  {
    id: 1,
    title: 'Supermercado',
    icon: '🛒',
    progress: 5,
    total: 8,
    xp: 25,
    coins: 30,
    color: '#10B981',
    starred: true,
  },
  {
    id: 2,
    title: 'Projeto App',
    icon: '📱',
    progress: 4,
    total: 10,
    xp: 60,
    coins: 80,
    color: '#8B5CF6',
    starred: true,
  },
  {
    id: 3,
    title: 'Viagem Lisboa',
    icon: '✈️',
    progress: 2,
    total: 7,
    xp: 40,
    coins: 50,
    color: '#F59E0B',
    starred: false,
  },
];

export const MISSION_ITEMS = {
  1: [
    { id: 1, title: 'Leite', xp: 2, completed: true },
    { id: 2, title: 'Pão integral', xp: 2, completed: true },
    { id: 3, title: 'Ovos', xp: 2, completed: true },
    { id: 4, title: 'Frango', xp: 0, completed: false },
    { id: 5, title: 'Arroz', xp: 0, completed: false },
    { id: 6, title: 'Legumes', xp: 0, completed: false },
    { id: 7, title: 'Fruta', xp: 0, completed: false },
    { id: 8, title: 'Detergente', xp: 0, completed: false },
  ],
};

export const QUESTS = [
  {
    id: 1,
    title: 'Enviar relatório',
    priority: 'ALTA',
    due: 'Hoje',
    xp: 25,
    progress: 70,
    completed: false,
  },
  {
    id: 2,
    title: 'Comprar prenda',
    priority: 'MÉDIA',
    due: 'Amanhã',
    xp: 15,
    progress: 0,
    completed: false,
  },
  {
    id: 3,
    title: 'Ligar ao dentista',
    priority: 'BAIXA',
    due: 'Sex',
    xp: 10,
    progress: 0,
    completed: false,
  },
  {
    id: 4,
    title: 'Atualizar CV',
    priority: null,
    due: null,
    xp: 20,
    progress: 0,
    completed: true,
  },
  {
    id: 5,
    title: 'Pagar fatura',
    priority: null,
    due: null,
    xp: 20,
    progress: 0,
    completed: true,
  },
];

export const QUEST_STATS = {
  pending: 3,
  overdue: 1,
  completed: 5,
};

export const COLLECTIONS = [
  { id: 1, title: 'Projeto App', notes: 4, xp: 20, progress: 0, color: '#8B5CF6', icon: '📱' },
  { id: 2, title: 'Ideias de Produto', notes: 6, xp: 30, progress: 75, color: '#F59E0B', icon: '💡' },
  { id: 3, title: 'Hábitos & Rotinas', notes: 3, xp: 15, progress: 100, color: '#10B981', icon: '🔄' },
  { id: 4, title: 'Estudos', notes: 5, xp: 25, progress: 40, color: '#EC4899', icon: '📚' },
];

export const ACHIEVEMENTS = [
  { id: 1, title: 'Escriba', subtitle: '10 notas', icon: '📖', unlocked: true },
  { id: 2, title: 'Em Chamas', subtitle: '7 dias', icon: '🔥', unlocked: true },
  { id: 3, title: 'Guerreiro', subtitle: 'Nível 5', icon: '⚔️', unlocked: true },
  { id: 4, title: 'Guardião', subtitle: 'Nível 15', icon: '🛡️', unlocked: false },
];

export const THEMES = [
  { id: 1, name: 'Escuro', unlocked: true, price: 0 },
  { id: 2, name: 'Oceano', unlocked: true, price: 120 },
  { id: 3, name: 'Floresta', unlocked: true, price: 120 },
  { id: 4, name: 'Galáxia', unlocked: false, price: 200 },
];

export const SKILLS = [
  { id: 1, name: 'Foco', level: 2, max: 5, unlocked: true },
  { id: 2, name: 'Organização', level: 3, max: 5, unlocked: true },
  { id: 3, name: 'Disciplina', level: 1, max: 5, unlocked: true },
  { id: 4, name: 'Produtividade', level: 0, max: 5, unlocked: false },
  { id: 5, name: 'Criatividade', level: 0, max: 5, unlocked: false },
  { id: 6, name: 'Liderança', level: 0, max: 5, unlocked: false },
];
