// Что умеет герой | к чему слаб
// Умения: aoe (урон по площади), pct (урон от процента здоровья), stun (жёсткий контроль),
// burst (быстрый взрывной урон), silence (сайленс), physimm (неуязвимость к физике),
// tank (очень живучий), manaburn (сжигает ману), magres (защита от магии), detect (видит невидимых)
// Слабости: summons (держится на призванных существах), squishy (хрупкий), spell (зависит от заклинаний),
// phys (живёт обычными атаками), manadep (зависит от маны), mobile (убегает блинками),
// magic (урон заклинаниями), invis (держится на невидимости)
var HERO_TAGS = {
  "Abaddon": "tank|",
  "Alchemist": "stun tank|phys",
  "Ancient Apparition": "|squishy",
  "Anti-Mage": "manaburn magres|phys mobile",
  "Arc Warden": "|squishy",
  "Axe": "aoe tank|",
  "Bane": "stun|squishy",
  "Batrider": "stun|squishy mobile",
  "Beastmaster": "stun|summons",
  "Bloodseeker": "silence|phys",
  "Bounty Hunter": "detect|squishy invis",
  "Brewmaster": "stun tank|",
  "Bristleback": "aoe tank|",
  "Broodmother": "|summons phys",
  "Centaur Warrunner": "stun tank|",
  "Chaos Knight": "stun tank|summons phys",
  "Chen": "|squishy summons",
  "Clinkz": "|squishy invis phys",
  "Clockwerk": "stun tank|",
  "Crystal Maiden": "aoe|squishy manadep",
  "Dark Seer": "stun|",
  "Dark Willow": "stun|squishy spell",
  "Dawnbreaker": "tank|",
  "Dazzle": "|squishy",
  "Death Prophet": "silence|",
  "Disruptor": "silence|squishy",
  "Doom": "silence|",
  "Dragon Knight": "stun tank|",
  "Drow Ranger": "silence|squishy phys",
  "Earth Spirit": "silence stun|",
  "Earthshaker": "stun aoe|",
  "Elder Titan": "pct stun|",
  "Ember Spirit": "stun|spell mobile",
  "Enchantress": "|squishy",
  "Enigma": "stun aoe|spell",
  "Faceless Void": "stun|phys",
  "Grimstroke": "silence|squishy",
  "Gyrocopter": "aoe|squishy phys",
  "Hoodwink": "burst|squishy",
  "Huskar": "pct|phys",
  "Invoker": "burst stun|squishy spell manadep",
  "Io": "|squishy",
  "Jakiro": "stun aoe|squishy",
  "Juggernaut": "aoe magres|phys",
  "Keeper of the Light": "|squishy manadep spell",
  "Kez": "|phys",
  "Kunkka": "stun aoe|",
  "Legion Commander": "stun|",
  "Leshrac": "stun aoe|squishy magic",
  "Lich": "aoe|squishy",
  "Lifestealer": "magres|phys",
  "Lina": "burst stun|squishy magic",
  "Lion": "stun burst|squishy magic",
  "Lone Druid": "|summons",
  "Luna": "aoe|squishy phys",
  "Lycan": "|summons phys",
  "Magnus": "stun aoe|",
  "Marci": "stun|phys",
  "Mars": "stun tank|",
  "Medusa": "|phys manadep",
  "Meepo": "|summons squishy",
  "Mirana": "stun|squishy invis",
  "Monkey King": "stun|phys",
  "Morphling": "|",
  "Muerta": "silence|squishy",
  "Naga Siren": "stun|summons phys",
  "Nature's Prophet": "|summons",
  "Necrophos": "pct physimm|",
  "Night Stalker": "silence|phys",
  "Nyx Assassin": "manaburn stun|squishy invis",
  "Ogre Magi": "stun|squishy",
  "Omniknight": "physimm tank|",
  "Oracle": "|squishy",
  "Outworld Destroyer": "manaburn|squishy manadep magic",
  "Pangolier": "stun|phys",
  "Phantom Assassin": "|phys",
  "Phantom Lancer": "|summons phys",
  "Phoenix": "stun|squishy",
  "Primal Beast": "stun|",
  "Puck": "silence stun|squishy spell mobile",
  "Pudge": "stun|",
  "Pugna": "physimm|squishy",
  "Queen of Pain": "burst|squishy spell mobile magic",
  "Razor": "|",
  "Riki": "silence|squishy invis phys",
  "Ringmaster": "|squishy",
  "Rubick": "stun|squishy spell",
  "Sand King": "stun aoe|",
  "Shadow Demon": "stun|squishy spell",
  "Shadow Fiend": "burst|squishy",
  "Shadow Shaman": "stun|squishy summons",
  "Silencer": "silence|squishy",
  "Skywrath Mage": "silence burst|squishy magic",
  "Slardar": "stun detect|",
  "Slark": "|phys mobile invis",
  "Snapfire": "aoe burst|squishy",
  "Sniper": "|squishy phys",
  "Spectre": "|phys",
  "Spirit Breaker": "stun|",
  "Storm Spirit": "stun|squishy spell mobile manadep",
  "Sven": "stun aoe|phys",
  "Techies": "aoe burst|squishy",
  "Templar Assassin": "|squishy phys",
  "Terrorblade": "|summons squishy phys",
  "Tidehunter": "stun aoe tank|",
  "Timbersaw": "aoe|",
  "Tinker": "aoe|squishy spell manadep mobile",
  "Tiny": "stun burst|",
  "Treant Protector": "stun|",
  "Troll Warlord": "|phys",
  "Tusk": "stun|",
  "Underlord": "stun tank|",
  "Undying": "tank|",
  "Ursa": "|phys",
  "Vengeful Spirit": "stun|squishy",
  "Venomancer": "aoe|squishy summons",
  "Viper": "|",
  "Visage": "stun|summons",
  "Void Spirit": "stun|squishy spell mobile",
  "Warlock": "stun aoe|squishy",
  "Weaver": "|squishy invis mobile phys",
  "Windranger": "stun|squishy mobile",
  "Winter Wyvern": "stun|squishy",
  "Witch Doctor": "stun burst|squishy",
  "Wraith King": "stun tank|",
  "Zeus": "burst|squishy magic"
};

// Правила: [что умеет герой, к чему слаб враг, объяснение]
var RULES = [
  ["aoe", "summons", "{C} зачищает уроном по площади существ и иллюзии, на которых держится {E}."],
  ["pct", "summons", "Урон {C} от процента здоровья быстро убивает слабых призванных существ {E}."],
  ["stun", "squishy", "{E} хрупкий, а у {C} есть жёсткий контроль, после которого выжить трудно."],
  ["burst", "squishy", "{C} быстро убивает хрупкого {E} взрывным уроном."],
  ["stun", "mobile", "Контроль {C} ловит {E}: убежать будет трудно."],
  ["silence", "spell", "Сайленс {C} отключает заклинания, без которых {E} почти бесполезен."],
  ["physimm", "phys", "{C} может стать неуязвимым к физическим атакам (или защитить так союзника), а {E} живёт обычными атаками."],
  ["tank", "phys", "{C} очень живучий: физический урон {E} почти не проходит."],
  ["manaburn", "manadep", "{C} сжигает ману, а {E} без маны слабеет."],
  ["magres", "magic", "У {C} есть защита от магии, которая режет урон заклинаний {E}."],
  ["detect", "invis", "{C} раскрывает невидимость, на которой строится {E}."]
];

function tagsOf(name) {
  var s = HERO_TAGS[name];
  if (!s) return { has: [], weak: [] };
  var p = s.split("|");
  return {
    has: p[0].split(" ").filter(Boolean),
    weak: (p[1] || "").split(" ").filter(Boolean)
  };
}

function autoNote(hero, enemy) {
  var c = tagsOf(hero.localized_name);
  var e = tagsOf(enemy.localized_name);
  var texts = [];
  RULES.forEach(function (r) {
    if (c.has.indexOf(r[0]) !== -1 && e.weak.indexOf(r[1]) !== -1) {
      texts.push(
        r[2].replace(/\{C\}/g, hero.localized_name).replace(/\{E\}/g, enemy.localized_name)
      );
    }
  });
  if (!texts.length) return null;
  return { bonus: Math.min(0.1, texts.length * 0.04), why: texts.join(" ") };
}

// Эта функция заменяет старую из index.html
function findNote(hero, enemy) {
  var manual = null;
  if (typeof NOTES !== "undefined") {
    for (var i = 0; i < NOTES.length; i++) {
      if (NOTES[i].hero === hero.localized_name && NOTES[i].vs === enemy.localized_name) {
        manual = NOTES[i];
        break;
      }
    }
  }
  var auto = autoNote(hero, enemy);
  if (manual) {
    return { bonus: manual.bonus || (auto ? auto.bonus : 0), why: manual.why };
  }
  return auto;
}
