window.DATA_VERSION = 13;
/* 游戏数据（后台管理导出） */

/* ---------- 怪物 ---------- */
window.MONSTERS = [
  { id: "slime", name: "墨染史莱姆", lv: 1, hp: 60, atk: 4, spd: 4.2, tier: 1, gold: 12, stage: 1, desc: "由积压的生词凝成的黏稠物，越是被遗忘，它越庞大。" },
  { id: "bat", name: "忘字蝠", lv: 2, hp: 63, atk: 4, spd: 3.4, tier: 1, gold: 14, stage: 2, desc: "以遗忘的单词为食，翅膀上写满被划掉的字母。" },
  { id: "goblin", name: "抄袭哥布林", lv: 3, hp: 69, atk: 5, spd: 3.8, tier: 1, gold: 17, stage: 3, desc: "偷走别人的答案，背着一袋子作弊纸条。" },
  { id: "rat", name: "窜字鼠", lv: 4, hp: 75, atk: 5, spd: 3, tier: 1, gold: 21, stage: 4, desc: "把单词啃成碎片，尾巴上串着残缺的字母。" },
  { id: "spore", name: "生词孢囊", lv: 5, hp: 82, atk: 6, spd: 4.4, tier: 1, gold: 25, stage: 5, desc: "每被念错一次，就喷出一团新的生词孢子。" },
  { id: "wolf", name: "错译狼", lv: 6, hp: 89, atk: 6, spd: 3, tier: 1, gold: 29, stage: 6, desc: "把正确含义咬碎，吐出歪曲的解释。" },
  { id: "spider", name: "缠句蛛", lv: 7, hp: 98, atk: 7, spd: 3.6, tier: 1, gold: 33, stage: 7, desc: "用长难句织网，缠住每一个想跳过它的考生。" },
  { id: "vine", name: "藤蔓束缚者", lv: 8, hp: 106, atk: 7, spd: 4, tier: 1, gold: 37, stage: 8, desc: "根须扎进记忆深处，把刚背下的词条拖回土壤。" },
  { id: "wisp", name: "走神游魂", lv: 9, hp: 115, atk: 8, spd: 2.6, tier: 2, gold: 42, stage: 9, desc: "你一走神它就会出现，轻轻吹散刚记住的词。" },
  { id: "mole", name: "埋词鼹鼠", lv: 10, hp: 125, atk: 8, spd: 4.6, tier: 2, gold: 47, stage: 10, desc: "把单词埋进土里，等着它们发霉变质。" },
  { id: "toad", name: "浊译蟾", lv: 11, hp: 135, atk: 9, spd: 4.2, tier: 2, gold: 52, stage: 11, desc: "蹲在沼泽里，把清晰的释义泡得含混不清。" },
  { id: "leech", name: "吸血词蛭", lv: 12, hp: 145, atk: 9, spd: 3.2, tier: 2, gold: 57, stage: 12, desc: "吸附在记忆上，一点点吸走你刚学会的词。" },
  { id: "bogey", name: "沼气泡影", lv: 13, hp: 156, atk: 10, spd: 3.8, tier: 2, gold: 62, stage: 13, desc: "看似轻飘飘，破裂时溅出一身混淆的近义词。" },
  { id: "creeper", name: "蔓生错字", lv: 14, hp: 167, atk: 11, spd: 4.4, tier: 2, gold: 67, stage: 14, desc: "每个错字都是它的一根藤，剜掉还会再长。" },
  { id: "eel", name: "电鳗鳗", lv: 15, hp: 178, atk: 11, spd: 2.8, tier: 2, gold: 72, stage: 15, desc: "通体带电，被它碰过的单词会短暂失忆。" },
  { id: "scorpion", name: "遗忘沙蝎", lv: 16, hp: 189, atk: 12, spd: 3.4, tier: 2, gold: 78, stage: 16, desc: "尾针一蜇，刚背下的词就沉进沙里。" },
  { id: "mummy", name: "裹尸词卷", lv: 17, hp: 201, atk: 12, spd: 4.8, tier: 2, gold: 83, stage: 17, desc: "浑身上下缠满旧卷子，每一条都写着你答错过的题。" },
  { id: "vulture", name: "啄食秃鹫", lv: 18, hp: 213, atk: 13, spd: 2.9, tier: 2, gold: 89, stage: 18, desc: "盘旋在考场上方，专啄那些犹豫不决的答案。" },
  { id: "jackal", name: "沙丘狐狼", lv: 19, hp: 226, atk: 13, spd: 3.1, tier: 3, gold: 94, stage: 19, desc: "成群游荡，把一整篇阅读理解的生词拖走。" },
  { id: "golem", name: "铅字石人", lv: 20, hp: 238, atk: 14, spd: 4.6, tier: 3, gold: 100, stage: 20, desc: "由废弃的铅字熔铸而成，行动迟缓但坚不可摧。" },
  { id: "knight", name: "断句骑士", lv: 21, hp: 251, atk: 15, spd: 3.2, tier: 3, gold: 106, stage: 21, desc: "披着标点铸成的铠甲，一枪挑断你的长难句。" },
  { id: "sentinel", name: "语法哨兵", lv: 22, hp: 264, atk: 15, spd: 4, tier: 3, gold: 112, stage: 22, desc: "守着从句的大门，时态不对就不放你过去。" },
  { id: "turret", name: "排字炮台", lv: 23, hp: 277, atk: 16, spd: 5, tier: 3, gold: 118, stage: 23, desc: "不断吐出铅字炮弹，把生词砸进你的脑子。" },
  { id: "rat_king", name: "鼠王", lv: 24, hp: 291, atk: 17, spd: 3.4, tier: 3, gold: 124, stage: 24, desc: "尾巴上串着一整本被啃烂的词汇手册。" },
  { id: "gargoyle", name: "石像鬼", lv: 25, hp: 304, atk: 17, spd: 4.2, tier: 3, gold: 130, stage: 25, desc: "白天装作雕像，夜里展开石翼扑向背单词的人。" },
  { id: "wraith", name: "失语幽魂", lv: 26, hp: 318, atk: 18, spd: 2.8, tier: 3, gold: 136, stage: 26, desc: "曾经背下整本词典的人，如今一个字也说不出。" },
  { id: "ice_elem", name: "霜语元素", lv: 27, hp: 332, atk: 18, spd: 3.6, tier: 3, gold: 142, stage: 27, desc: "呼吸之间凝结冰晶，把释义冻在半空。" },
  { id: "frost_fish", name: "冰河鱼", lv: 28, hp: 346, atk: 19, spd: 3, tier: 3, gold: 149, stage: 28, desc: "在记忆的冰层下游弋，撞碎刚结成的词条。" },
  { id: "yeti", name: "雪原巨怪", lv: 29, hp: 361, atk: 20, spd: 4.6, tier: 4, gold: 155, stage: 29, desc: "浑身覆雪，一巴掌能把整页单词拍成空白。" },
  { id: "banshee", name: "尖啸女妖", lv: 30, hp: 375, atk: 20, spd: 2.6, tier: 4, gold: 162, stage: 30, desc: "一声尖啸，你脑中刚浮现的答案就碎成音节。" },
  { id: "eye", name: "洞察巨眼", lv: 31, hp: 390, atk: 21, spd: 3.2, tier: 4, gold: 168, stage: 31, desc: "一直盯着你看，任何没背熟的词都瞒不过它。" },
  { id: "kraken", name: "深渊蛟", lv: 32, hp: 405, atk: 22, spd: 3.4, tier: 4, gold: 174, stage: 32, desc: "盘旋在语法深渊，每一节身体都缠着一门题型。" },
  { id: "abyss_fish", name: "深渊鮟鱇", lv: 33, hp: 420, atk: 22, spd: 3, tier: 4, gold: 181, stage: 33, desc: "额前那盏灯，照出你所有记错的词。" },
  { id: "shrieker", name: "尖鸣菌", lv: 34, hp: 435, atk: 23, spd: 4.2, tier: 4, gold: 188, stage: 34, desc: "被踩到就发出刺耳鸣叫，震散你刚建立的记忆。" },
  { id: "crawler", name: "爬行句虫", lv: 35, hp: 451, atk: 24, spd: 3.8, tier: 4, gold: 194, stage: 35, desc: "一节身体对应一个从句，越打越长。" },
  { id: "reaper", name: "压分死神", lv: 36, hp: 466, atk: 24, spd: 3.6, tier: 4, gold: 201, stage: 36, desc: "手持红笔的收割者，专在最后一题现身。" },
  { id: "executioner", name: "判卷刽子手", lv: 37, hp: 482, atk: 25, spd: 4.4, tier: 4, gold: 208, stage: 37, desc: "一斧下去，整道大题的分数归零。" },
  { id: "blood_crystal", name: "血晶", lv: 38, hp: 498, atk: 26, spd: 3.2, tier: 4, gold: 215, stage: 38, desc: "由无数次不及格淬炼而成，硬得让人绝望。" },
  { id: "hound", name: "追猎恶犬", lv: 39, hp: 514, atk: 26, spd: 2.8, tier: 5, gold: 222, stage: 39, desc: "一旦被它咬住，那个词就再也想不起来。" },
  { id: "whip", name: "鞭笞藤", lv: 40, hp: 530, atk: 27, spd: 4, tier: 5, gold: 229, stage: 40, desc: "每抽一下，就在你记忆里留下一道错题印。" },
  { id: "star_elem", name: "星辉元素", lv: 41, hp: 547, atk: 28, spd: 3.4, tier: 5, gold: 235, stage: 41, desc: "由词源碎片聚成，每个光点都是一个拉丁词根。" },
  { id: "comet", name: "彗星兽", lv: 42, hp: 563, atk: 28, spd: 2.8, tier: 5, gold: 242, stage: 42, desc: "拖着长长的词根尾迹，一掠而过带走半页单词。" },
  { id: "sphinx", name: "谜语斯芬克斯", lv: 43, hp: 580, atk: 29, spd: 3.6, tier: 5, gold: 250, stage: 43, desc: "答不出谜语的人，会被它写进词条里。" },
  { id: "seraph", name: "炽天使", lv: 44, hp: 597, atk: 30, spd: 3.2, tier: 5, gold: 257, stage: 44, desc: "六翼各写着一门语言，扇动时经义与词汇一同倾泻。" },
  { id: "void_eye", name: "虚空之瞳", lv: 45, hp: 613, atk: 31, spd: 3, tier: 5, gold: 264, stage: 45, desc: "凝视它太久，你会忘记自己本来要背哪个词。" },
  { id: "wyvern", name: "词翼飞龙", lv: 46, hp: 630, atk: 31, spd: 3, tier: 5, gold: 271, stage: 46, desc: "翼膜上印满缩略词，俯冲时抖落一地名解。" },
  { id: "lich", name: "词库巫妖", lv: 47, hp: 648, atk: 32, spd: 3.4, tier: 5, gold: 278, stage: 47, desc: "把整本词典的灵魂锁在颅骨里，永不遗忘也永不释出。" },
  { id: "titan", name: "铅印泰坦", lv: 48, hp: 665, atk: 33, spd: 4.6, tier: 5, gold: 285, stage: 48, desc: "活字印刷术的暴走造物，一步一个铅字深坑。" },
  { id: "void_serpent", name: "虚空长蛇", lv: 49, hp: 682, atk: 33, spd: 2.8, tier: 5, gold: 293, stage: 49, desc: "身形盘成一整圈字母表，缠住即忘。" },
  { id: "dragon", name: "混沌词龙", lv: 50, hp: 700, atk: 34, spd: 3.2, tier: 5, gold: 300, stage: 50, desc: "词库深渊的统治者，鳞片由一万个生僻词构成。" }
];

/* ---------- 装备 ---------- */
window.EQUIPMENT = [
  { id: "w_stick", slot: "weapon", name: "新手木笔", cost: 0, rarity: 1, atk: 0, crit: 0, combo: 0, style: "stick", desc: "启蒙时的第一支笔，笔杆还带着牙印。" },
  { id: "w_brush", slot: "weapon", name: "青竹翰墨笔", cost: 120, rarity: 2, atk: 3, crit: 0.03, combo: 0.1, style: "brush", desc: "竹节为杆，挥动时有墨香与风声。" },
  { id: "w_blade", slot: "weapon", name: "错题斩刃", cost: 320, rarity: 3, atk: 7, crit: 0.06, combo: 0.2, style: "blade", desc: "刃上刻满批改符号，专斩似懂非懂的词。" },
  { id: "w_staff", slot: "weapon", name: "星辉法杖", cost: 600, rarity: 4, atk: 12, crit: 0.1, combo: 0.25, style: "staff", desc: "杖顶嵌着一颗记忆之星，夜里会轻轻发光。" },
  { id: "w_scythe", slot: "weapon", name: "万词汇镰", cost: 950, rarity: 5, atk: 18, crit: 0.14, combo: 0.3, style: "scythe", desc: "收割生词如收割麦浪，一击之下再无漏网。" },
  { id: "w_katana", slot: "weapon", name: "樱吹雪太刀", cost: 1400, rarity: 6, atk: 26, crit: 0.18, combo: 0.4, style: "katana", desc: "刀身映出樱花，出鞘时落英随刃而舞。" },
  { id: "o_plain", slot: "outfit", name: "素白学子袍", cost: 0, rarity: 1, hp: 0, crit: 0, combo: 0, style: "plain", desc: "洗得发白的旧袍，袖口有母亲缝的补丁。" },
  { id: "o_azure", slot: "outfit", name: "青碧云纹袍", cost: 100, rarity: 2, hp: 15, crit: 0.02, combo: 0.05, style: "azure", desc: "青碧如雨后远山，衣摆绣着流云暗纹。" },
  { id: "o_crimson", slot: "outfit", name: "赤霞锦缎衣", cost: 280, rarity: 3, hp: 35, crit: 0.04, combo: 0.1, style: "crimson", desc: "绯红似晚霞，走动时衣料泛着细碎金光。" },
  { id: "o_obsidian", slot: "outfit", name: "玄铁战甲", cost: 520, rarity: 4, hp: 70, crit: 0.05, combo: 0.1, style: "obsidian", desc: "玄铁淬火而成，胸口嵌一枚护心镜。" },
  { id: "o_frost", slot: "outfit", name: "霜雪白羽衣", cost: 850, rarity: 5, hp: 110, crit: 0.08, combo: 0.15, style: "frost", desc: "以霜丝织就，肩覆白羽，寒气绕身不散。" },
  { id: "o_royal", slot: "outfit", name: "紫极星君袍", cost: 1300, rarity: 6, hp: 165, crit: 0.12, combo: 0.2, style: "royal", desc: "紫气东来，衣上星图随呼吸缓缓流转。" },
  { id: "o_holy", slot: "outfit", name: "鎏金圣典袍", cost: 1900, rarity: 7, hp: 230, crit: 0.15, combo: 0.3, style: "holy", desc: "金线绣满典籍铭文，披之如携万卷护身。" }
];

/* 稀有度颜色 */
window.RARITY_COLORS = {1:"#9aa0a6", 2:"#5ac8fa", 3:"#4cd964", 4:"#b06bff", 5:"#ff9f0a", 6:"#ff4d6d", 7:"#ffd60a"};
window.RARITY_NAMES = {1:"普通", 2:"精良", 3:"稀有", 4:"史诗", 5:"传说", 6:"神话", 7:"圣典"};

/* ---------- 每日任务 ---------- */
window.DAILY_TASKS = [
  { id: "learn5", type: "learn", target: 5, reward: 30, icon: "📖", title: "晨读五词", desc: "学习 5 个新单词" },
  { id: "review10", type: "review", target: 10, reward: 40, icon: "🔁", title: "温故知新", desc: "复习 10 个单词" },
  { id: "correct15", type: "correct", target: 15, reward: 60, icon: "🎯", title: "百发百中", desc: "答对 15 道题" },
  { id: "battle2", type: "battle", target: 2, reward: 50, icon: "⚔️", title: "斩妖除魔", desc: "赢得 2 场战斗" },
  { id: "combo5", type: "combo", target: 5, reward: 35, icon: "🔥", title: "势如破竹", desc: "达成 5 连击" }
];

/* ---------- 成就 ---------- */
window.ACHIEVEMENTS = [
  { id:"a_first", name:"初执笔", icon:"✒️", desc:"完成第一次答题", reward:20, cond: s => (s.totalCorrect >= 1) },
  { id:"a_learn50", name:"勤学五十", icon:"📚", desc:"累计学会 50 个单词", reward:50, cond: s => (s.learned >= 50) },
  { id:"a_learn150", name:"词海泛舟", icon:"🌊", desc:"累计学会 150 个单词", reward:120, cond: s => (s.learned >= 150) },
  { id:"a_learn300", name:"博览群书", icon:"🏛️", desc:"累计学会 300 个单词", reward:260, cond: s => (s.learned >= 300) },
  { id:"a_c100", name:"百题斩", icon:"💯", desc:"累计答对 100 题", reward:60, cond: s => (s.totalCorrect >= 100) },
  { id:"a_c500", name:"千锤百炼", icon:"🔨", desc:"累计答对 500 题", reward:200, cond: s => (s.totalCorrect >= 500) },
  { id:"a_c1000", name:"铁笔银钩", icon:"🖋️", desc:"累计答对 1000 题", reward:400, cond: s => (s.totalCorrect >= 1000) },
  { id:"a_combo10", name:"十连无双", icon:"🔥", desc:"达成 10 连击", reward:80, cond: s => (s.bestCombo >= 10) },
  { id:"a_combo20", name:"二十连斩", icon:"⚡", desc:"达成 20 连击", reward:180, cond: s => (s.bestCombo >= 20) },
  { id:"a_win10", name:"初露锋芒", icon:"⚔️", desc:"赢得 10 场战斗", reward:60, cond: s => (s.wins >= 10) },
  { id:"a_win50", name:"百战之身", icon:"🛡️", desc:"赢得 50 场战斗", reward:200, cond: s => (s.wins >= 50) },
  { id:"a_boss", name:"屠龙者", icon:"🐉", desc:"击败混沌词龙", reward:300, cond: s => (s.dragonSlain) },
  { id:"a_daily7", name:"七日之约", icon:"📅", desc:"累计完成 7 次每日任务", reward:100, cond: s => (s.dailyDone >= 7) },
  { id:"a_daily30", name:"恒心如磐", icon:"🗓️", desc:"累计完成 30 次每日任务", reward:350, cond: s => (s.dailyDone >= 30) },
  { id:"a_streak7", name:"七日不辍", icon:"🌅", desc:"连续签到 7 天", reward:150, cond: s => (s.streak >= 7) },
  { id:"a_streak30", name:"月满功成", icon:"🌕", desc:"连续签到 30 天", reward:600, cond: s => (s.streak >= 30) },
  { id:"a_rich", name:"富甲一方", icon:"💰", desc:"累计获得 2000 奖励分", reward:200, cond: s => (s.totalGold >= 2000) },
  { id:"a_fullset", name:"全副武装", icon:"👑", desc:"拥有全部武器与装扮", reward:800, cond: s => (s.ownsAll) },
  { id:"a_accurate", name:"神射手", icon:"🏹", desc:"单场战斗正确率 100%", reward:90, cond: s => (s.perfectWin) },
  { id:"a_flawless", name:"毫发无伤", icon:"✨", desc:"满血通关一场战斗", reward:120, cond: s => (s.noDamageWin) }
];

/* ============================================================
 * 游戏规则（可在后台调整，随发布覆盖到 App，改数字即可调玩法平衡）
 * ============================================================ */
window.GAME_RULES = {
  proficiency: { max: 5, masterAt: 3, gainCorrect: 1, loseWrong: 1 },
  hero:        { baseHp: 120, baseAtk: 10, baseCrit: 0.08, critMax: 0.75 },
  stages:      { total: 50, wordsPerStage: 20, unlockAll: 1 },
  sign:        { base: 20, perStreak: 5, streakCap: 7 },
  battle:      { comboStep: 0.12, comboCap: 0.8, critMul: 2.2, jitterMin: 0.92, jitterMax: 1.08, foeJitterMin: 0.85, foeJitterMax: 1.15 },
  reward:      { accFactor: 1, comboFactor: 0.04, comboCap: 0.5, noDamage: 0.4 },
  quiz:        { batchSize: 10, meaningRatio: 0.6 }
};
