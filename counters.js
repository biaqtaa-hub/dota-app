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
// ===== ТОЧНЫЕ ОПИСАНИЯ СКИЛЛОВ =====
// Что конкретно делает герой (по умениям) и почему слаб враг
var HERO_KIT = {
  "Abaddon": "tank=Aphotic Shield и Borrowed Time: щит снимает эффекты, а ульт лечит вместо смерти",
  "Alchemist": "stun=Unstable Concoction: стан, который растёт с временем варки;tank=Chemical Rage: быстрее бьёт и сильно регенерирует",
  "Anti-Mage": "manaburn=Mana Break: каждая атака сжигает ману;magres=Counterspell: отражает заклинание и режет магический урон",
  "Axe": "aoe=Counter Helix: вращение бьёт всех рядом и быстро убивает мелких существ;tank=Berserker's Call: враги бьют только его, а броня растёт",
  "Bane": "stun=Nightmare и Fiend's Grip: долгий сон и удержание на месте",
  "Batrider": "stun=Flaming Lasso: привязывает цель и тащит за собой",
  "Beastmaster": "stun=Primal Roar: стан и толчок в нужную сторону",
  "Bloodseeker": "silence=Blood Rite: зона, после которой цель не может колдовать",
  "Bounty Hunter": "detect=Track: показывает цель, даже если она невидима",
  "Brewmaster": "stun=Thunder Clap и Primal Split: замедление и три стихии с контролем;tank=Drunken Brawler: уклонение и критические удары",
  "Bristleback": "aoe=Quill Spray: шипы бьют по площади;tank=Bristleback: гасит урон, когда враг бьёт по спине или бокам",
  "Centaur Warrunner": "stun=Hoof Stomp: стан по площади;tank=Stampede и большой запас здоровья;aoe=Return: бьёт в ответ каждого, кто его атакует",
  "Chaos Knight": "stun=Chaos Bolt и Reality Rift: стан и притягивание;tank=Chaos Strike: лечится и бьёт критом",
  "Clockwerk": "stun=Hookshot и Power Cogs: крюк и клетка из шестерёнок;tank=крепкое тело и высокая броня",
  "Crystal Maiden": "aoe=Freezing Field: метель по большой площади",
  "Dark Seer": "stun=Vacuum: стягивает врагов в одну точку;aoe=Ion Shell: щит бьёт всех рядом и убивает мелких существ;tank=Surge и Ion Shell: скорость и защита",
  "Dark Willow": "stun=Bramble Maze и Cursed Crown: корни и стан",
  "Dawnbreaker": "tank=Luminosity и Solar Guardian: лечит себя и союзников",
  "Death Prophet": "silence=Silence: зона, где нельзя колдовать;pct=Spirit Siphon: вытягивает процент здоровья цели",
  "Disruptor": "silence=Static Storm: большая зона, где нельзя колдовать",
  "Doom": "silence=Doom: запрещает заклинания и предметы, да ещё и жжёт цель",
  "Dragon Knight": "stun=Dragon Tail: стан;tank=Dragon Blood: броня и регенерация;aoe=Elder Dragon Form: удары и огонь по площади",
  "Drow Ranger": "silence=Gust: сайленс и отбрасывание",
  "Earth Spirit": "silence=Geomagnetic Grip: притягивает и не даёт колдовать;stun=Boulder Smash и Rolling Boulder: удар и оглушение",
  "Earthshaker": "stun=Fissure: стена и стан;aoe=Echo Slam: урон по всем врагам рядом, больше врагов — больше урона",
  "Elder Titan": "pct=Earth Splitter: отнимает процент здоровья по линии;stun=Echo Stomp: сон по площади",
  "Ember Spirit": "stun=Searing Chains: корни;aoe=Sleight of Fist: бьёт каждого врага вокруг",
  "Enigma": "stun=Black Hole: затягивает и держит врагов;aoe=Black Hole: урон по всем внутри",
  "Faceless Void": "stun=Chronosphere: зона, где время для врагов остановлено",
  "Grimstroke": "silence=Phantom's Embrace: призрак закрывает цель от заклинаний",
  "Gyrocopter": "aoe=Call Down: ракеты по большой площади",
  "Hoodwink": "burst=Sharpshooter: огромный урон издалека",
  "Huskar": "pct=Life Break: отнимает процент здоровья цели",
  "Invoker": "burst=Sun Strike и Tornado: удар на всю карту и подброс;stun=Cold Snap и Deafening Blast: оглушение и разоружение",
  "Jakiro": "stun=Ice Path: стан по линии;aoe=Macropyre: огненная полоса",
  "Juggernaut": "aoe=Blade Fury: кружит и бьёт всех рядом;magres=Blade Fury: пока кружит, не боится заклинаний",
  "Kunkka": "stun=Torrent и Ghostship: два стана;aoe=Tidebringer: удар по дуге",
  "Legion Commander": "stun=Duel: дуэль, из которой нельзя уйти",
  "Leshrac": "stun=Split Earth: стан;aoe=Pulse Nova: урон по площади каждую секунду",
  "Lich": "aoe=Chain Frost: ледяная цепь, отскакивающая между целями",
  "Lifestealer": "magres=Rage: на время неуязвим к магии",
  "Lina": "burst=Light Strike Array и Laguna Blade: быстрый огромный урон;stun=Light Strike Array: стан по области",
  "Lion": "stun=Hex и Earth Spike: превращение в лягушку и стан;burst=Finger of Death: большой урон",
  "Luna": "aoe=Eclipse: лучи по врагам вокруг",
  "Magnus": "stun=Reverse Polarity: стягивает и оглушает;aoe=Reverse Polarity: удар по всем рядом",
  "Marci": "stun=Dispose: бросок со станом",
  "Mars": "stun=Spear of Mars: прибивает цель к стене;tank=Bulwark: гасит удары спереди и сбоку",
  "Mirana": "stun=Sacred Arrow: стрела с долгим станом",
  "Monkey King": "stun=Boundless Strike: стан по линии",
  "Muerta": "silence=The Calling: призраки закрывают врагов от заклинаний",
  "Naga Siren": "stun=Song of the Siren и Ensnare: сон по площади и сеть",
  "Necrophos": "pct=Heartstopper Aura: враги рядом теряют процент здоровья;physimm=Ghost Shroud: становится неуязвимым для физических атак",
  "Night Stalker": "silence=Crippling Fear: зона молчания, особенно ночью",
  "Nyx Assassin": "manaburn=Mana Burn: сжигает ману и наносит урон;stun=Impale: подбрасывает и оглушает",
  "Ogre Magi": "stun=Fireblast: оглушение",
  "Omniknight": "physimm=Guardian Angel: союзники неуязвимы к физическим атакам;tank=Heavenly Grace и Repel: сильное лечение и снятие эффектов",
  "Outworld Destroyer": "manaburn=Astral Imprisonment: убирает цель из боя и забирает ману",
  "Pangolier": "stun=Rolling Thunder: прокатывается по врагам и сбивает с ног",
  "Phoenix": "stun=Supernova: яйцо, которое оглушает врагов вокруг",
  "Primal Beast": "stun=Onslaught и Pulverize: оглушение и долгое удержание",
  "Puck": "silence=Waning Rift: зона молчания;stun=Dream Coil: цепи, которые оглушают при побеге",
  "Pudge": "stun=Dismember: держит цель на месте и убивает",
  "Pugna": "physimm=Decrepify: неуязвим для физических атак",
  "Queen of Pain": "burst=Sonic Wave и Scream of Pain: быстрый магический урон",
  "Rubick": "stun=Telekinesis: подбрасывает врага",
  "Sand King": "stun=Burrowstrike и Epicenter: оглушение и пульсы по площади;aoe=Epicenter: урон по всем рядом",
  "Shadow Demon": "stun=Disruption: убирает цель из боя",
  "Shadow Fiend": "burst=Requiem of Souls: души разлетаются по всем вокруг",
  "Shadow Shaman": "stun=Hex и Shackles: превращение и удержание",
  "Silencer": "silence=Global Silence: молчание на всю карту",
  "Skywrath Mage": "silence=Ancient Seal: сайленс и уязвимость к магии;burst=Mystic Flare: огромный магический урон",
  "Slardar": "stun=Slithereen Crush: оглушение по площади;detect=Corrosive Haze: снижает броню и раскрывает невидимых",
  "Snapfire": "aoe=Lil' Shredder и Mortimer Kisses: урон по площади;burst=Mortimer Kisses: огненные залпы",
  "Spirit Breaker": "stun=Charge of Darkness и Nether Strike: оглушает издалека",
  "Storm Spirit": "stun=Electric Vortex: подтягивает цель и не даёт убежать",
  "Sven": "stun=Storm Hammer: бросает молот со станом;aoe=Great Cleave: удар по дуге убивает иллюзии",
  "Techies": "aoe=Remote Mines и Proximity Mines: взрывы по площади;burst=Remote Mines: огромный урон",
  "Tidehunter": "stun=Ravage: большой стан по площади;aoe=Anchor Smash и Ravage: урон по площади;tank=Kraken Shell: защита от урона и снятие эффектов",
  "Timbersaw": "aoe=Whirling Death и Chakram: пила и диск бьют по площади",
  "Tinker": "aoe=March of the Machines: ряд роботов по площади",
  "Tiny": "stun=Avalanche и Toss: оглушение и бросок;burst=Toss: большой урон",
  "Treant Protector": "stun=Overgrowth: корни по площади",
  "Tusk": "stun=Walrus Kick: пинок и оглушение",
  "Underlord": "stun=Pit of Malice: корни;tank=Atrophy Aura и Dark Rift: сильная живучесть;aoe=Firestorm: огненная зона",
  "Undying": "tank=Flesh Golem и Decay: много здоровья и кража силы",
  "Vengeful Spirit": "stun=Magic Missile и Nether Swap: стан и обмен местами",
  "Venomancer": "aoe=Poison Nova: яд по всем рядом",
  "Visage": "stun=Stone Form: оглушает при падении",
  "Void Spirit": "stun=Aether Remnant: подтягивает цель и не даёт убежать",
  "Warlock": "stun=Fatal Bonds и Chaotic Offering: связь и огромный голем;aoe=Chaotic Offering: голем бьёт по площади",
  "Windranger": "stun=Shackleshot: оглушает, прибивая к дереву",
  "Winter Wyvern": "stun=Winter's Curse: заставляет врагов бить друг друга",
  "Witch Doctor": "stun=Paralyzing Cask: отскакивающий стан;burst=Death Ward и Maledict: большой урон за пару секунд",
  "Wraith King": "stun=Wraithfire Blast: оглушение;tank=Reincarnation: оживает после смерти",
  "Zeus": "burst=Lightning Bolt и Thundergod's Wrath: мгновенный урон по всем врагам"
};

var HERO_WEAK = {
  "Abaddon": "bulky=Borrowed Time и много здоровья",
  "Alchemist": "phys=бьёт обычными атаками, особенно в Chemical Rage;bulky=в Chemical Rage сильно регенерирует",
  "Ancient Apparition": "squishy=мало здоровья, а Ice Blast требует держаться на расстоянии",
  "Anti-Mage": "phys=весь урон идёт от обычных атак;mobile=Blink: убегает, если не поймать контролем",
  "Arc Warden": "squishy=мало здоровья и брони без Magnetic Field",
  "Axe": "bulky=много здоровья и брони, чтобы выдержать драку",
  "Bane": "squishy=мало здоровья, а Fiend's Grip требует стоять вплотную",
  "Batrider": "squishy=мало здоровья;mobile=Firefly и Flamebreak: прыгает в драку и обратно",
  "Beastmaster": "summons=опирается на ястреба, кабана и Wild Axes, которых легко убить",
  "Bloodseeker": "phys=бьёт обычными атаками и лечится от Bloodrage",
  "Bounty Hunter": "squishy=мало здоровья;invis=Shadow Walk: подкрадывается и убегает невидимым",
  "Broodmother": "summons=вся сила в паучках, которые падают от урона по площади;phys=паучки и сама Бруда бьют только физикой",
  "Chaos Knight": "summons=Phantasm создаёт иллюзии, которые умирают от урона по площади;phys=бьёт обычными атаками с критом",
  "Chen": "squishy=мало здоровья и брони;summons=вся сила в подконтрольных существах",
  "Clinkz": "squishy=хрупкий лучник;invis=Wind Walk: подкрадывается невидимым;phys=бьёт обычными атаками с Searing Arrows",
  "Crystal Maiden": "squishy=очень мало здоровья;manadep=Crystal Nova и Freezing Field быстро съедают ману",
  "Dark Willow": "squishy=мало здоровья;spell=вся сила в Bramble Maze и Cursed Crown",
  "Dazzle": "squishy=мало здоровья, держится на Shallow Grave",
  "Disruptor": "squishy=мало здоровья, а Static Storm требует стоять близко",
  "Drow Ranger": "squishy=мало здоровья;phys=бьёт обычными атаками издалека",
  "Ember Spirit": "spell=без Sleight of Fist и Searing Chains слаб;mobile=Fire Remnant: перемещается рывками",
  "Enchantress": "squishy=мало здоровья",
  "Enigma": "spell=вся сила в Black Hole и Midnight Pulse",
  "Faceless Void": "phys=бьёт обычными атаками с Time Lock",
  "Grimstroke": "squishy=мало здоровья и брони",
  "Gyrocopter": "squishy=мало здоровья;phys=Rocket Barrage и обычные атаки",
  "Hoodwink": "squishy=мало здоровья",
  "Huskar": "phys=бьёт обычными атаками с Berserker's Blood;bulky=лечится и держит много урона",
  "Invoker": "squishy=мало здоровья;spell=вся сила в комбинациях заклинаний;manadep=без маны не может колдовать",
  "Io": "squishy=мало здоровья без Tether;bulky=много лечения и щитов",
  "Jakiro": "squishy=мало здоровья",
  "Juggernaut": "phys=бьёт обычными атаками и Omnislash;bulky=много здоровья и Healing Ward",
  "Keeper of the Light": "squishy=мало здоровья;manadep=сила держится на мане;spell=нужны Illuminate и Will-O-Wisp",
  "Kez": "phys=бьёт обычными атаками",
  "Leshrac": "squishy=мало здоровья;magic=урон идёт от магии Pulse Nova и Lightning Storm",
  "Lich": "squishy=мало здоровья",
  "Lifestealer": "phys=бьёт обычными атаками с вампиризмом;bulky=лечится вампиризмом и имеет много здоровья",
  "Lina": "squishy=мало здоровья;magic=весь урон идёт от магии",
  "Lion": "squishy=мало здоровья и брони;magic=урон идёт от магии Finger of Death",
  "Lone Druid": "summons=Spirit Bear: главная сила, на которую уходят предметы",
  "Luna": "squishy=мало здоровья;phys=Moon Glaives и обычные атаки",
  "Lycan": "summons=волки: ядро силы;phys=Shapeshift: бьёт обычными атаками",
  "Marci": "phys=бьёт обычными атаками с Unleash",
  "Mars": "bulky=много здоровья и брони",
  "Medusa": "phys=бьёт обычными атаками;manadep=Mana Shield: здоровье держится на мане",
  "Meepo": "summons=клоны: ядро силы, умирают от урона по площади;squishy=каждый клон хрупкий",
  "Mirana": "squishy=мало здоровья;invis=Moonlight Shadow: скрывает всю команду",
  "Monkey King": "phys=бьёт обычными атаками с Jingu Mastery",
  "Morphling": "bulky=может раздувать здоровье через Morph",
  "Muerta": "squishy=мало здоровья",
  "Naga Siren": "summons=иллюзии Mirror Image: основа силы;phys=бьёт обычными атаками",
  "Nature's Prophet": "summons=деревья и Nature's Call: опора на помощников",
  "Night Stalker": "phys=бьёт обычными атаками ночью",
  "Nyx Assassin": "squishy=мало здоровья;invis=Vendetta: невидимый удар",
  "Omniknight": "bulky=Heavenly Grace и Repel держат здоровье",
  "Oracle": "squishy=мало здоровья",
  "Outworld Destroyer": "squishy=мало здоровья;manadep=Arcane Orb и Astral Imprisonment жрут ману;magic=урон идёт от магии",
  "Pangolier": "phys=бьёт обычными атаками с Swashbuckle",
  "Phantom Assassin": "phys=бьёт обычными атаками с критом;bulky=Blur и вампиризм делают её живучей",
  "Phantom Lancer": "summons=иллюзии Doppelganger и Juxtapose: основа силы;phys=бьёт обычными атаками",
  "Phoenix": "squishy=мало здоровья",
  "Primal Beast": "bulky=много здоровья",
  "Puck": "squishy=мало здоровья;spell=Phase Shift и Illusory Orb нужны для побега;mobile=Illusory Orb: скачет по карте",
  "Pugna": "squishy=мало здоровья",
  "Queen of Pain": "squishy=мало здоровья;spell=без Blink и Shadow Strike слаба;mobile=Blink: прыгает в драку и обратно;magic=урон идёт от магии",
  "Riki": "squishy=мало здоровья;invis=Smoke Screen и Cloak and Dagger: невидимость;phys=бьёт обычными атаками с Backstab",
  "Ringmaster": "squishy=мало здоровья",
  "Rubick": "squishy=мало здоровья;spell=вся сила в украденных заклинаниях",
  "Shadow Demon": "squishy=мало здоровья;spell=Disruption и Shadow Poison: основа",
  "Shadow Fiend": "squishy=мало здоровья без Requiem",
  "Shadow Shaman": "squishy=мало здоровья;summons=Mass Serpent Ward: змеиные статуи",
  "Silencer": "squishy=мало здоровья",
  "Skywrath Mage": "squishy=мало здоровья;magic=урон идёт от магии Mystic Flare",
  "Slardar": "bulky=много здоровья и броня",
  "Slark": "phys=бьёт обычными атаками;mobile=Pounce и Shadow Dance: убегает;invis=Shadow Dance: невидимость в бою",
  "Snapfire": "squishy=мало здоровья",
  "Sniper": "squishy=мало здоровья и брони;phys=бьёт обычными атаками издалека",
  "Spectre": "phys=Dispersion и обычные атаки;bulky=регенерация и большой запас здоровья",
  "Storm Spirit": "squishy=мало здоровья;spell=Ball Lightning: основа;mobile=Ball Lightning: рывки;manadep=Ball Lightning жрёт ману",
  "Sven": "phys=бьёт обычными атаками с God's Strength;bulky=много здоровья и брони",
  "Techies": "squishy=очень мало здоровья",
  "Templar Assassin": "squishy=мало здоровья;phys=Psi Blades и обычные атаки",
  "Terrorblade": "summons=Conjure Image и Metamorphosis;squishy=мало здоровья;phys=бьёт обычными атаками",
  "Tidehunter": "bulky=много здоровья и броня",
  "Tinker": "squishy=мало здоровья;spell=вся сила в Laser, Rockets и Matrix;manadep=быстро тратит ману;mobile=Keen Teleport: телепорты",
  "Tiny": "bulky=много здоровья",
  "Troll Warlord": "phys=бьёт обычными атаками;bulky=Battle Trance и вампиризм",
  "Tusk": "bulky=много здоровья",
  "Underlord": "bulky=много здоровья и броня",
  "Undying": "bulky=Flesh Golem и Decay дают много здоровья",
  "Vengeful Spirit": "squishy=мало здоровья",
  "Venomancer": "squishy=мало здоровья;summons=Plague Ward: ядовитые стражи",
  "Visage": "summons=Summon Familiars: фамильяры",
  "Void Spirit": "squishy=мало здоровья;spell=Astral Step и Aether Remnant: основа;mobile=Astral Step: рывки",
  "Warlock": "squishy=мало здоровья",
  "Weaver": "squishy=мало здоровья;invis=Shukuchi: невидимость;mobile=Shukuchi и Time Lapse;phys=Geminate Attack: обычные атаки",
  "Windranger": "squishy=мало здоровья;mobile=Windrun: быстро убегает",
  "Winter Wyvern": "squishy=мало здоровья",
  "Witch Doctor": "squishy=мало здоровья",
  "Wraith King": "bulky=Reincarnation и много здоровья",
  "Zeus": "squishy=мало здоровья;magic=урон идёт от магии, которую режет магическая защита",
  "Brewmaster": "bulky=много здоровья",
  "Centaur Warrunner": "bulky=много здоровья и Return",
  "Clockwerk": "bulky=много здоровья и броня",
  "Dawnbreaker": "bulky=Luminosity лечит",
  "Dragon Knight": "bulky=Dragon Blood и Dragon Form",
  "Elder Titan": "bulky=много здоровья",
  "Bristleback": "bulky=Bristleback гасит урон"
};

function pairValue(str, key) {
  if (!str) return null;
  var parts = str.split(";");
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];
    var k = p.indexOf("=");
    if (k > 0 && p.slice(0, k).trim() === key) return p.slice(k + 1).trim();
  }
  return null;
}

// Новая версия: пишет конкретные причины со скиллами
function autoNote(hero, enemy) {
  var c = tagsOf(hero.localized_name);
  var e = tagsOf(enemy.localized_name);
  var texts = [];
  var bonus = 0;

  var list = SOURCE_COUNTERS[enemy.localized_name];
  if (list && list.indexOf(hero.localized_name) !== -1) {
    texts.push(hero.localized_name + " входит в подборку главных контр-пиков на " +
      enemy.localized_name + " (esports.gg, октябрь 2026).");
    bonus += 0.05;
  }

  RULES.forEach(function (r) {
    if (c.has.indexOf(r[0]) !== -1 && e.weak.indexOf(r[1]) !== -1) {
      var kit = pairValue(HERO_KIT[hero.localized_name], r[0]);
      var weak = pairValue(HERO_WEAK[enemy.localized_name], r[1]);
      if (kit && weak) {
        texts.push(hero.localized_name + ", " + kit + ". Почему против " +
          enemy.localized_name + ": " + weak + ".");
      } else {
        texts.push(
          r[2].replace(/\{C\}/g, hero.localized_name).replace(/\{E\}/g, enemy.localized_name)
        );
      }
      bonus += 0.03;
    }
  });

  if (!texts.length) return null;
  return { bonus: Math.min(0.12, bonus), why: texts.join(" ") };
}
// ===== НАДЁЖНАЯ КНОПКА "ПОДОБРАТЬ" =====
var MATCHUP_CACHE = {};

function fetchMatchups(id) {
  if (MATCHUP_CACHE[id]) return Promise.resolve(MATCHUP_CACHE[id]);
  var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
  var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 8000) : null;
  return fetch("https://api.opendota.com/api/heroes/" + id + "/matchups", ctrl ? { signal: ctrl.signal } : {})
    .then(function (r) { return r.json(); })
    .then(function (arr) {
      if (timer) clearTimeout(timer);
      if (!Array.isArray(arr)) return null;
      var m = {};
      arr.forEach(function (x) { m[x.hero_id] = { g: x.games_played, w: x.wins }; });
      MATCHUP_CACHE[id] = m;
      return m;
    })
    .catch(function () {
      if (timer) clearTimeout(timer);
      return null;
    });
}

async function recommend() {
  var box = $("results");
  try {
    if (!heroes.length) {
      box.innerHTML = '<div class="loading">Герои ещё грузятся, подожди пару секунд и нажми ещё раз</div>';
      return;
    }
    box.innerHTML = '<div class="loading">Считаю...</div>';

    var enemyIds = enemies.filter(Boolean);
    var taken = allies.concat(enemies).filter(Boolean);
    var roleList = ROLE_MAP[role];

    var results = await Promise.all(enemyIds.map(fetchMatchups));
    var data = {};
    var noStats = false;
    enemyIds.forEach(function (id, i) {
      data[id] = results[i];
      if (!results[i]) noStats = true;
    });

    var list = [];
    heroes.forEach(function (h) {
      if (taken.indexOf(h.id) !== -1) return;
            var okRole = canPlay(h);
      if (!okRole) return;

      var parts = [];
      var sum = 0;
      enemyIds.forEach(function (eid) {
        var m = data[eid] ? data[eid][h.id] : null;
        var wr = m ? (m.g - m.w + 50) / (m.g + 100) : 0.5;
        var note = findNote(h, byId[eid]);
        var bonus = note && note.bonus ? note.bonus : 0;
        sum += wr + bonus;
        parts.push({ id: eid, wr: wr, g: m ? m.g : 0, note: note ? note.why : null });
      });

      var counter = enemyIds.length ? sum / enemyIds.length : h.overall;
      var w = !enemyIds.length ? 0 : (order === "last" ? 0.8 : 0.6);
      var score = w * counter + (1 - w) * h.overall;
      list.push({ h: h, score: score, parts: parts });
    });

    list.sort(function (a, b) { return b.score - a.score; });

    var html = "";
    if (noStats) {
      html += '<div class="loading">Статистика матчей сейчас недоступна, подсказки посчитаны по подборке контр-пиков и механикам скиллов.</div>';
    }

    list.slice(0, 8).forEach(function (x, idx) {
      var overallPct = Math.round(x.h.overall * 100);
      var shortList = [];
      var details = "";

      x.parts.forEach(function (p) {
        if (p.note) {
          shortList.push("контрит " + byId[p.id].localized_name);
        } else if (p.g >= 200 && p.wr - x.h.overall >= 0.02) {
          shortList.push("бьёт " + byId[p.id].localized_name + " (" + Math.round(p.wr * 100) + "%)");
        }
      });

      if (x.parts.length) {
        details += '<div class="sec"><b>Почему он контрит</b>';
        x.parts.forEach(function (p) {
          var en = byId[p.id].localized_name;
          if (p.note) {
            details += '<div class="note"><b>Против ' + en + ':</b> ' + p.note + "</div>";
          } else {
            details += "<br>• Против " + en + ": особого контра нет";
          }
          if (p.g >= 200) {
            details += '<div class="hint">Статистика: выигрывает ' + Math.round(p.wr * 100) +
              "% игр (в среднем " + overallPct + "%), игр: " + p.g.toLocaleString("ru-RU") + "</div>";
          } else if (p.g > 0) {
            details += '<div class="hint">Статистика: игр слишком мало (' + p.g + "), цифрам верить нельзя</div>";
          }
        });
        details += "</div>";
      }

      var myRoles = x.h.roles.filter(function (r) { return roleList.indexOf(r) !== -1; })
        .map(function (r) { return ROLE_RU[r] || r; });
      details += '<div class="sec"><b>Почему стоит взять</b><br>' +
        "На твоей роли он: " + (myRoles.length ? myRoles.join(", ") : "подходит по данным") + ".<br>" +
        "Герой: " + (ATTR_RU[x.h.primary_attr] || "") + ", " + (ATTACK_RU[x.h.attack_type] || "") +
        ". Общий процент побед: " + overallPct + "%.<br>";
      if (!x.parts.length) {
        details += "Враги не выбраны, поэтому подсказка идёт по общей силе героя.";
      } else if (order === "last") {
        details += "Ты пикаешь последним, поэтому контр-пик важнее всего.";
      } else {
        details += "Ты пикаешь не последним, поэтому учитываем и контр-пик, и общую силу героя.";
      }
      details += "</div>";

      html += '<div class="res"><div class="top"><img src="' + imgUrl(x.h) + '">' +
        '<div class="rinfo"><div class="rname">' + (idx + 1) + ". " + x.h.localized_name + "</div>" +
        '<div class="rwhy">' + (shortList.length ? shortList.join(", ") : "сильный по общей статистике") + "</div></div>" +
        '<div class="score">' + Math.round(x.score * 100) + "%</div></div>" +
        '<button class="btn-more">Подробнее ▾</button>' +
        '<div class="more">' + details + "</div></div>";
    });

    box.innerHTML = html || '<div class="loading">Никого не нашлось</div>';

    var btns = box.querySelectorAll(".btn-more");
    Array.prototype.forEach.call(btns, function (b) {
      b.onclick = function () {
        var m = b.parentNode.querySelector(".more");
        var open = m.style.display === "block";
        m.style.display = open ? "none" : "block";
        b.textContent = open ? "Подробнее ▾" : "Скрыть ▴";
      };
    });
    box.scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    box.innerHTML = '<div class="loading">Что-то пошло не так: ' + (err && err.message ? err.message : err) + "</div>";
  }
}

// Привязываем новую кнопку и уточняем подпись про врагов
$("go").onclick = recommend;
Array.prototype.forEach.call(document.querySelectorAll(".label"), function (el) {
  if (el.textContent.trim() === "Враги") el.textContent = "Враги (сколько видишь)";
  if (el.textContent.trim() === "Твоя команда") el.textContent = "Твоя команда (сколько видишь)";
});

// ===== СПИСОК КОНТР-ПИКОВ (esports.gg, 15.10.2026) =====
var SOURCE_COUNTERS = {
  "Alchemist": ["Ancient Apparition", "Doom", "Slardar", "Ursa", "Slark", "Axe"],
  "Axe": ["Viper", "Outworld Destroyer", "Anti-Mage", "Lifestealer", "Timbersaw", "Venomancer", "Invoker"],
  "Bristleback": ["Ancient Apparition", "Necrophos", "Axe", "Legion Commander", "Timbersaw", "Viper", "Slark", "Anti-Mage"],
  "Centaur Warrunner": ["Necrophos", "Lifestealer", "Timbersaw", "Lina", "Underlord", "Dark Willow", "Outworld Destroyer", "Venomancer"],
  "Chaos Knight": ["Earthshaker", "Sven", "Timbersaw", "Naga Siren", "Sand King", "Warlock", "Lich", "Axe"],
  "Clockwerk": ["Necrophos", "Doom", "Underlord", "Morphling", "Ursa", "Rubick", "Skywrath Mage", "Anti-Mage", "Queen of Pain", "Mirana", "Vengeful Spirit"],
  "Dawnbreaker": ["Silencer", "Winter Wyvern", "Elder Titan", "Ancient Apparition", "Naga Siren", "Disruptor"],
  "Doom": ["Lifestealer", "Timbersaw", "Anti-Mage", "Phantom Lancer", "Terrorblade", "Shadow Demon"],
  "Dragon Knight": ["Ancient Apparition", "Viper", "Outworld Destroyer", "Timbersaw", "Huskar", "Drow Ranger", "Necrophos", "Slark"],
  "Earth Spirit": ["Silencer", "Abaddon", "Oracle", "Slark", "Puck", "Storm Spirit"],
  "Earthshaker": ["Silencer", "Disruptor", "Rubick", "Clockwerk", "Venomancer", "Pugna", "Bane"],
  "Elder Titan": ["Silencer", "Viper", "Drow Ranger", "Outworld Destroyer", "Necrophos", "Venomancer", "Ancient Apparition"],
  "Huskar": ["Necrophos", "Ancient Apparition", "Viper", "Windranger", "Legion Commander", "Axe", "Winter Wyvern"],
  "Kunkka": ["Lifestealer", "Timbersaw", "Juggernaut", "Huskar", "Witch Doctor", "Mirana", "Bounty Hunter"],
  "Largo": ["Undying", "Earthshaker", "Anti-Mage", "Lion", "Crystal Maiden", "Dragon Knight", "Invoker"],
  "Legion Commander": ["Dazzle", "Omniknight", "Treant Protector", "Chaos Knight", "Winter Wyvern", "Kunkka", "Oracle", "Tusk", "Shadow Demon"],
  "Lifestealer": ["Ancient Apparition", "Necrophos", "Axe", "Slardar", "Ursa", "Troll Warlord", "Viper"],
  "Lycan": ["Earthshaker", "Winter Wyvern", "Sven", "Axe", "Underlord", "Kunkka", "Leshrac", "Shadow Shaman"],
  "Mars": ["Drow Ranger", "Sniper", "Outworld Destroyer", "Viper", "Timbersaw", "Silencer", "Shadow Demon"],
  "Night Stalker": ["Viper", "Omniknight", "Ogre Magi", "Treant Protector", "Phoenix", "Razor", "Bane", "Winter Wyvern"],
  "Ogre Magi": ["Phantom Lancer", "Naga Siren", "Anti-Mage", "Chaos Knight", "Shadow Demon"],
  "Omniknight": ["Ancient Apparition", "Doom", "Silencer", "Shadow Demon", "Invoker", "Necrophos", "Disruptor"],
  "Phoenix": ["Juggernaut", "Skywrath Mage", "Tinker", "Death Prophet", "Doom", "Zeus", "Oracle", "Lion"],
  "Primal Beast": ["Viper", "Shadow Demon", "Winter Wyvern", "Oracle", "Puck", "Outworld Destroyer", "Necrophos"],
  "Pudge": ["Slardar", "Lone Druid", "Bristleback", "Chaos Knight", "Void Spirit", "Terrorblade", "Undying", "Sven"],
  "Slardar": ["Viper", "Razor", "Outworld Destroyer", "Necrophos", "Winter Wyvern", "Shadow Demon", "Venomancer"],
  "Spirit Breaker": ["Underlord", "Tiny", "Clockwerk", "Mars", "Largo", "Timbersaw", "Treant Protector", "Razor"],
  "Sven": ["Shadow Demon", "Winter Wyvern", "Troll Warlord", "Razor", "Pugna", "Viper", "Timbersaw"],
  "Tidehunter": ["Ursa", "Lifestealer", "Slark", "Outworld Destroyer", "Silencer", "Doom", "Enigma"],
  "Timbersaw": ["Jakiro", "Silencer", "Underlord", "Death Prophet", "Ember Spirit", "Ancient Apparition", "Mirana", "Doom"],
  "Tiny": ["Lifestealer", "Timbersaw", "Outworld Destroyer", "Viper", "Ursa", "Slark", "Necrophos"],
  "Treant Protector": ["Timbersaw", "Batrider", "Venomancer", "Phoenix", "Nature's Prophet", "Lina", "Enchantress"],
  "Tusk": ["Shadow Demon", "Oracle", "Winter Wyvern", "Puck", "Timbersaw", "Viper", "Necrophos"],
  "Underlord": ["Lifestealer", "Timbersaw", "Slark", "Ursa", "Viper", "Drow Ranger", "Ancient Apparition"],
  "Undying": ["Snapfire", "Ursa", "Luna", "Earthshaker", "Timbersaw", "Necrophos", "Winter Wyvern", "Axe", "Lina", "Leshrac", "Drow Ranger"],
  "Wraith King": ["Phantom Lancer", "Venomancer", "Warlock", "Timbersaw", "Phoenix", "Underlord", "Naga Siren"],
  "Anti-Mage": ["Meepo", "Legion Commander", "Axe", "Bloodseeker", "Troll Warlord", "Nyx Assassin", "Shadow Shaman"],
  "Bloodseeker": ["Juggernaut", "Medusa", "Wraith King", "Bounty Hunter", "Legion Commander", "Broodmother", "Troll Warlord"],
  "Bounty Hunter": ["Slardar", "Bloodseeker", "Zeus", "Bristleback", "Axe", "Treant Protector", "Spirit Breaker"],
  "Broodmother": ["Earthshaker", "Timbersaw", "Axe", "Ember Spirit", "Leshrac", "Sand King", "Sven", "Underlord"],
  "Clinkz": ["Bloodseeker", "Bounty Hunter", "Zeus", "Spectre", "Phantom Lancer", "Terrorblade", "Hoodwink", "Ember Spirit"],
  "Drow Ranger": ["Spectre", "Earth Spirit", "Phantom Assassin", "Night Stalker", "Clockwerk", "Spirit Breaker", "Sniper", "Ember Spirit"],
  "Ember Spirit": ["Silencer", "Doom", "Bloodseeker", "Night Stalker", "Storm Spirit", "Puck", "Anti-Mage", "Nyx Assassin"],
  "Faceless Void": ["Winter Wyvern", "Shadow Demon", "Pugna", "Oracle", "Viper", "Axe", "Templar Assassin", "Venomancer", "Disruptor"],
  "Gyrocopter": ["Phantom Assassin", "Spectre", "Anti-Mage", "Sniper", "Nyx Assassin", "Clockwerk", "Storm Spirit"],
  "Hoodwink": ["Storm Spirit", "Spectre", "Clockwerk", "Spirit Breaker", "Bounty Hunter", "Bloodseeker", "Zeus"],
  "Juggernaut": ["Axe", "Winter Wyvern", "Shadow Demon", "Necrophos", "Troll Warlord", "Razor", "Phantom Lancer"],
  "Kez": ["Axe", "Legion Commander", "Winter Wyvern", "Shadow Shaman", "Lion", "Viper", "Phantom Assassin"],
  "Lone Druid": ["Sniper", "Dark Willow", "Nature's Prophet", "Spirit Breaker", "Slark", "Zeus", "Earthshaker", "Dawnbreaker"],
  "Luna": ["Anti-Mage", "Medusa", "Sniper", "Phantom Assassin", "Spectre", "Nyx Assassin", "Clockwerk"],
  "Medusa": ["Anti-Mage", "Nyx Assassin", "Slark", "Invoker", "Riki", "Wraith King", "Techies"],
  "Meepo": ["Earthshaker", "Winter Wyvern", "Sven", "Underlord", "Pudge", "Lion", "Shadow Fiend", "Primal Beast"],
  "Mirana": ["Clockwerk", "Bloodseeker", "Zeus", "Bounty Hunter", "Spirit Breaker", "Night Stalker", "Spectre"],
  "Monkey King": ["Timbersaw", "Viper", "Batrider", "Winter Wyvern", "Axe", "Venomancer", "Puck", "Earthshaker"],
  "Morphling": ["Ancient Apparition", "Axe", "Necrophos", "Viper", "Doom", "Lion", "Shadow Shaman", "Winter Wyvern"],
  "Naga Siren": ["Earthshaker", "Leshrac", "Puck", "Axe", "Sand King", "Sven", "Ember Spirit", "Timbersaw"],
  "Phantom Assassin": ["Axe", "Winter Wyvern", "Viper", "Bloodseeker", "Necrophos", "Troll Warlord", "Bane", "Razor"],
  "Phantom Lancer": ["Earthshaker", "Sven", "Axe", "Leshrac", "Timbersaw", "Underlord", "Sand King", "Winter Wyvern"],
  "Razor": ["Lifestealer", "Phantom Lancer", "Naga Siren", "Sniper", "Winter Wyvern", "Viper", "Shadow Demon"],
  "Riki": ["Bounty Hunter", "Slardar", "Zeus", "Bloodseeker", "Bristleback", "Axe", "Earthshaker"],
  "Shadow Fiend": ["Templar Assassin", "Viper", "Clockwerk", "Storm Spirit", "Puck", "Nyx Assassin", "Spectre", "Sniper"],
  "Slark": ["Bloodseeker", "Axe", "Legion Commander", "Ancient Apparition", "Doom", "Faceless Void", "Bane", "Night Stalker"],
  "Sniper": ["Clockwerk", "Spirit Breaker", "Storm Spirit", "Spectre", "Phantom Assassin", "Slark", "Templar Assassin", "Night Stalker"],
  "Spectre": ["Ancient Apparition", "Viper", "Axe", "Legion Commander", "Necrophos", "Terrorblade", "Ursa", "Outworld Destroyer"],
  "Templar Assassin": ["Viper", "Batrider", "Venomancer", "Razor", "Broodmother", "Axe", "Bristleback", "Winter Wyvern"],
  "Terrorblade": ["Axe", "Winter Wyvern", "Necrophos", "Timbersaw", "Earthshaker", "Leshrac", "Pugna", "Underlord"],
  "Troll Warlord": ["Axe", "Winter Wyvern", "Shadow Demon", "Necrophos", "Phantom Assassin", "Razor", "Viper", "Pugna"],
  "Ursa": ["Viper", "Razor", "Shadow Demon", "Winter Wyvern", "Ancient Apparition", "Venomancer", "Pugna", "Drow Ranger"],
  "Vengeful Spirit": ["Silencer", "Doom", "Puck", "Storm Spirit", "Clockwerk", "Rubick", "Bounty Hunter"],
  "Viper": ["Anti-Mage", "Phantom Assassin", "Sniper", "Drow Ranger", "Spectre", "Storm Spirit", "Templar Assassin", "Nyx Assassin"],
  "Weaver": ["Bloodseeker", "Bounty Hunter", "Slardar", "Zeus", "Spectre", "Axe", "Faceless Void", "Ancient Apparition"],
  "Ancient Apparition": ["Storm Spirit", "Anti-Mage", "Phantom Assassin", "Spectre", "Clockwerk", "Spirit Breaker", "Nyx Assassin"],
  "Chen": ["Axe", "Earthshaker", "Enigma", "Leshrac", "Sand King", "Winter Wyvern", "Batrider"],
  "Crystal Maiden": ["Clockwerk", "Storm Spirit", "Anti-Mage", "Pudge", "Spirit Breaker", "Nyx Assassin", "Silencer"],
  "Dark Seer": ["Oracle", "Rubick", "Silencer", "Lifestealer", "Juggernaut", "Anti-Mage", "Phantom Lancer"],
  "Dark Willow": ["Storm Spirit", "Anti-Mage", "Spectre", "Clockwerk", "Night Stalker", "Slark", "Puck"],
  "Disruptor": ["Anti-Mage", "Storm Spirit", "Puck", "Spectre", "Nyx Assassin", "Clockwerk", "Lifestealer"],
  "Enchantress": ["Ancient Apparition", "Axe", "Phantom Assassin", "Sniper", "Lina", "Lion", "Nyx Assassin", "Primal Beast"],
  "Grimstroke": ["Anti-Mage", "Storm Spirit", "Puck", "Spectre", "Nyx Assassin", "Lifestealer", "Juggernaut"],
  "Invoker": ["Anti-Mage", "Nyx Assassin", "Storm Spirit", "Puck", "Silencer", "Doom", "Spectre"],
  "Jakiro": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Nyx Assassin", "Puck", "Lifestealer", "Spectre"],
  "Keeper of the Light": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Night Stalker", "Nyx Assassin", "Spectre", "Spirit Breaker"],
  "Leshrac": ["Anti-Mage", "Nyx Assassin", "Viper", "Doom", "Outworld Destroyer", "Silencer", "Lifestealer"],
  "Lich": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Nyx Assassin", "Spectre", "Puck", "Lifestealer"],
  "Lina": ["Anti-Mage", "Storm Spirit", "Nyx Assassin", "Spectre", "Clockwerk", "Puck", "Phantom Assassin"],
  "Lion": ["Anti-Mage", "Storm Spirit", "Puck", "Nyx Assassin", "Spectre", "Lifestealer", "Clockwerk"],
  "Muerta": ["Anti-Mage", "Nyx Assassin", "Storm Spirit", "Puck", "Spectre", "Sniper", "Clockwerk"],
  "Necrophos": ["Ancient Apparition", "Anti-Mage", "Nyx Assassin", "Silencer", "Doom", "Pugna", "Lifestealer"],
  "Oracle": ["Anti-Mage", "Silencer", "Doom", "Nyx Assassin", "Storm Spirit", "Clockwerk", "Disruptor"],
  "Outworld Destroyer": ["Anti-Mage", "Nyx Assassin", "Silencer", "Lifestealer", "Pugna", "Phantom Assassin", "Storm Spirit"],
  "Puck": ["Doom", "Silencer", "Night Stalker", "Bloodseeker", "Skywrath Mage", "Nyx Assassin", "Disruptor"],
  "Pugna": ["Anti-Mage", "Nyx Assassin", "Clockwerk", "Storm Spirit", "Spectre", "Lifestealer", "Sniper"],
  "Queen of Pain": ["Anti-Mage", "Nyx Assassin", "Storm Spirit", "Puck", "Silencer", "Doom", "Bloodseeker"],
  "Ringmaster": ["Storm Spirit", "Anti-Mage", "Clockwerk", "Nyx Assassin", "Spectre", "Spirit Breaker", "Puck"],
  "Rubick": ["Anti-Mage", "Silencer", "Doom", "Night Stalker", "Nyx Assassin", "Storm Spirit", "Clockwerk"],
  "Shadow Demon": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Nyx Assassin", "Spectre", "Silencer", "Puck"],
  "Shadow Shaman": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Nyx Assassin", "Puck", "Spectre", "Lifestealer"],
  "Silencer": ["Anti-Mage", "Storm Spirit", "Spectre", "Clockwerk", "Nyx Assassin", "Puck", "Lifestealer"],
  "Skywrath Mage": ["Anti-Mage", "Nyx Assassin", "Storm Spirit", "Puck", "Spectre", "Clockwerk", "Lifestealer"],
  "Storm Spirit": ["Anti-Mage", "Bloodseeker", "Doom", "Silencer", "Night Stalker", "Puck", "Nyx Assassin"],
  "Tinker": ["Anti-Mage", "Spectre", "Clockwerk", "Storm Spirit", "Nyx Assassin", "Spirit Breaker", "Zeus"],
  "Warlock": ["Anti-Mage", "Silencer", "Doom", "Nyx Assassin", "Clockwerk", "Storm Spirit", "Rubick"],
  "Winter Wyvern": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Nyx Assassin", "Spectre", "Silencer", "Puck"],
  "Witch Doctor": ["Anti-Mage", "Clockwerk", "Storm Spirit", "Nyx Assassin", "Silencer", "Puck", "Spirit Breaker"],
  "Zeus": ["Anti-Mage", "Nyx Assassin", "Storm Spirit", "Spectre", "Clockwerk", "Puck", "Phantom Assassin"],
  "Abaddon": ["Ancient Apparition", "Doom", "Axe", "Necrophos", "Legion Commander", "Shadow Demon", "Oracle"],
  "Arc Warden": ["Spectre", "Phantom Assassin", "Storm Spirit", "Anti-Mage", "Clockwerk", "Spirit Breaker", "Earthshaker"],
  "Bane": ["Abaddon", "Oracle", "Juggernaut", "Lifestealer", "Anti-Mage", "Silencer", "Rubick"],
  "Batrider": ["Viper", "Oracle", "Abaddon", "Legion Commander", "Slark", "Puck", "Weaver"],
  "Beastmaster": ["Lifestealer", "Juggernaut", "Phantom Lancer", "Naga Siren", "Winter Wyvern", "Oracle", "Enchantress"],
  "Brewmaster": ["Silencer", "Doom", "Shadow Demon", "Oracle", "Winter Wyvern", "Ursa", "Lifestealer"],
  "Dazzle": ["Axe", "Ancient Apparition", "Doom", "Silencer", "Nyx Assassin", "Clockwerk", "Legion Commander"],
  "Death Prophet": ["Ancient Apparition", "Silencer", "Doom", "Nyx Assassin", "Viper", "Sniper", "Outworld Destroyer"],
  "Enigma": ["Silencer", "Rubick", "Vengeful Spirit", "Shadow Demon", "Winter Wyvern", "Clockwerk", "Puck"],
  "Io": ["Ancient Apparition", "Doom", "Axe", "Legion Commander", "Disruptor", "Clockwerk", "Necrophos"],
  "Magnus": ["Silencer", "Rubick", "Vengeful Spirit", "Shadow Demon", "Winter Wyvern", "Puck", "Clockwerk"],
  "Marci": ["Viper", "Puck", "Winter Wyvern", "Shadow Demon", "Oracle", "Venomancer", "Axe"],
  "Nature's Prophet": ["Storm Spirit", "Spectre", "Clockwerk", "Spirit Breaker", "Zeus", "Axe", "Timbersaw"],
  "Nyx Assassin": ["Slardar", "Bloodseeker", "Zeus", "Bounty Hunter", "Bristleback", "Axe", "Spirit Breaker"],
  "Pangolier": ["Bloodseeker", "Shadow Demon", "Viper", "Puck", "Disruptor", "Doom", "Legion Commander"],
  "Sand King": ["Zeus", "Bounty Hunter", "Slardar", "Bloodseeker", "Timbersaw", "Oracle", "Viper"],
  "Snapfire": ["Anti-Mage", "Storm Spirit", "Clockwerk", "Nyx Assassin", "Spectre", "Puck", "Spirit Breaker"],
  "Techies": ["Storm Spirit", "Spectre", "Clockwerk", "Nyx Assassin", "Zeus", "Tinker", "Nature's Prophet"],
  "Venomancer": ["Juggernaut", "Lifestealer", "Abaddon", "Legion Commander", "Oracle", "Enchantress", "Phantom Assassin"],
  "Visage": ["Winter Wyvern", "Earthshaker", "Sven", "Leshrac", "Axe", "Timbersaw", "Medusa"],
  "Void Spirit": ["Bloodseeker", "Doom", "Silencer", "Night Stalker", "Nyx Assassin", "Puck", "Disruptor"],
  "Windranger": ["Phantom Assassin", "Zeus", "Sniper", "Bloodseeker", "Spectre", "Clockwerk", "Legion Commander", "Centaur Warrunner", "Shadow Demon"]
};

// ===== Обновлённые правила =====
RULES = [
  ["aoe", "summons", "{C} зачищает уроном по площади существ и иллюзии, на которых держится {E}."],
  ["pct", "summons", "Урон {C} от процента здоровья быстро убивает слабых призванных существ {E}."],
  ["pct", "bulky", "Урон {C} от процента здоровья отлично работает против героев с большим запасом здоровья, как {E}."],
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

// ===== Обновлённые теги героев =====
HERO_TAGS["Abaddon"] = "tank|bulky";
HERO_TAGS["Alchemist"] = "stun tank|phys bulky";
HERO_TAGS["Axe"] = "aoe tank|bulky";
HERO_TAGS["Bristleback"] = "aoe tank|bulky";
HERO_TAGS["Brewmaster"] = "stun tank|bulky";
HERO_TAGS["Centaur Warrunner"] = "stun tank aoe|bulky";
HERO_TAGS["Clockwerk"] = "stun tank|bulky";
HERO_TAGS["Dark Seer"] = "stun aoe tank|";
HERO_TAGS["Dawnbreaker"] = "tank|bulky";
HERO_TAGS["Death Prophet"] = "silence pct|";
HERO_TAGS["Dragon Knight"] = "stun tank aoe|bulky";
HERO_TAGS["Elder Titan"] = "pct stun|bulky";
HERO_TAGS["Ember Spirit"] = "stun aoe|spell mobile";
HERO_TAGS["Huskar"] = "pct|phys bulky";
HERO_TAGS["Io"] = "|squishy bulky";
HERO_TAGS["Juggernaut"] = "aoe magres|phys bulky";
HERO_TAGS["Lifestealer"] = "magres|phys bulky";
HERO_TAGS["Mars"] = "stun tank|bulky";
HERO_TAGS["Morphling"] = "|bulky";
HERO_TAGS["Omniknight"] = "physimm tank|bulky";
HERO_TAGS["Phantom Assassin"] = "|phys bulky";
HERO_TAGS["Primal Beast"] = "stun|bulky";
HERO_TAGS["Slardar"] = "stun detect|bulky";
HERO_TAGS["Spectre"] = "|phys bulky";
HERO_TAGS["Sven"] = "stun aoe|phys bulky";
HERO_TAGS["Tidehunter"] = "stun aoe tank|bulky";
HERO_TAGS["Tiny"] = "stun burst|bulky";
HERO_TAGS["Troll Warlord"] = "|phys bulky";
HERO_TAGS["Tusk"] = "stun|bulky";
HERO_TAGS["Underlord"] = "stun tank aoe|bulky";
HERO_TAGS["Undying"] = "tank|bulky";
HERO_TAGS["Wraith King"] = "stun tank|bulky";

// ===== 4 слота врагов и без "Первого пика" =====
enemies.length = 4;
document.getElementById("enemies").style.gridTemplateColumns = "repeat(4, 1fr)";
ORDERS = ORDERS.filter(function (o) { return o.id !== "first"; });
if (order === "first") order = "mid";
drawChips();
drawSlots();

// ===== НА КАКИХ ПОЗИЦИЯХ ИГРАЕТСЯ ГЕРОЙ (1-5) =====
var HERO_POS = {
  "Abaddon": "345", "Alchemist": "12", "Ancient Apparition": "45", "Anti-Mage": "1",
  "Arc Warden": "12", "Axe": "3", "Bane": "45", "Batrider": "23", "Beastmaster": "3",
  "Bloodseeker": "13", "Bounty Hunter": "4", "Brewmaster": "3", "Bristleback": "3",
  "Broodmother": "23", "Centaur Warrunner": "3", "Chaos Knight": "13", "Chen": "45",
  "Clinkz": "124", "Clockwerk": "34", "Crystal Maiden": "5", "Dark Seer": "3",
  "Dark Willow": "45", "Dawnbreaker": "34", "Dazzle": "45", "Death Prophet": "23",
  "Disruptor": "45", "Doom": "3", "Dragon Knight": "123", "Drow Ranger": "1",
  "Earth Spirit": "4", "Earthshaker": "4", "Elder Titan": "4", "Ember Spirit": "2",
  "Enchantress": "45", "Enigma": "34", "Faceless Void": "1", "Grimstroke": "45",
  "Gyrocopter": "1", "Hoodwink": "4", "Huskar": "12", "Invoker": "2", "Io": "5",
  "Jakiro": "45", "Juggernaut": "1", "Keeper of the Light": "245", "Kez": "12",
  "Kunkka": "23", "Legion Commander": "3", "Leshrac": "2", "Lich": "5",
  "Lifestealer": "1", "Lina": "12", "Lion": "45", "Lone Druid": "12", "Luna": "1",
  "Lycan": "13", "Magnus": "34", "Marci": "34", "Mars": "3", "Medusa": "1",
  "Meepo": "2", "Mirana": "24", "Monkey King": "12", "Morphling": "1", "Muerta": "12",
  "Naga Siren": "15", "Nature's Prophet": "234", "Necrophos": "123", "Night Stalker": "3",
  "Nyx Assassin": "4", "Ogre Magi": "45", "Omniknight": "35", "Oracle": "45",
  "Outworld Destroyer": "2", "Pangolier": "23", "Phantom Assassin": "1",
  "Phantom Lancer": "1", "Phoenix": "34", "Primal Beast": "3", "Puck": "2",
  "Pudge": "234", "Pugna": "24", "Queen of Pain": "2", "Razor": "13", "Riki": "14",
  "Ringmaster": "45", "Rubick": "4", "Sand King": "34", "Shadow Demon": "45",
  "Shadow Fiend": "2", "Shadow Shaman": "45", "Silencer": "45", "Skywrath Mage": "45",
  "Slardar": "3", "Slark": "1", "Snapfire": "45", "Sniper": "12", "Spectre": "1",
  "Spirit Breaker": "34", "Storm Spirit": "2", "Sven": "1", "Techies": "45",
  "Templar Assassin": "12", "Terrorblade": "1", "Tidehunter": "3", "Timbersaw": "23",
  "Tinker": "2", "Tiny": "24", "Treant Protector": "45", "Troll Warlord": "1",
  "Tusk": "4", "Underlord": "3", "Undying": "45", "Ursa": "1", "Vengeful Spirit": "45",
  "Venomancer": "345", "Viper": "23", "Visage": "23", "Void Spirit": "2",
  "Warlock": "5", "Weaver": "14", "Windranger": "234", "Winter Wyvern": "45",
  "Witch Doctor": "5", "Wraith King": "13", "Zeus": "24"
};

function canPlay(h) {
  var pos = HERO_POS[h.localized_name];
  if (pos) return pos.indexOf(String(role)) !== -1;
  var roleList = ROLE_MAP[role];
  return h.roles.some(function (r) { return roleList.indexOf(r) !== -1; });
}

// Усиливаем твой разбор: Некрофос против Бруды
NOTES.forEach(function (n) {
  if (n.hero === "Necrophos" && n.vs === "Broodmother") n.bonus = 0.1;
});

// ===== СИНЕРГИИ С КОМАНДОЙ =====
// Проверенные связки из гайдов: [герой 1, герой 2, объяснение]
var SYN_PAIRS = [
  ["Juggernaut", "Crystal Maiden", "Crystal Maiden держит цель Frostbite и морозит Freezing Field, а Juggernaut рубит её Blade Fury: классическая связка, особенно на линии."],
  ["Drow Ranger", "Vengeful Spirit", "Vengeance Aura усиливает урон союзников, а Wave of Terror снижает броню врагов: Drow Ranger бьёт издалека гораздо сильнее."],
  ["Ursa", "Shadow Shaman", "Hex и Shackles держат цель на месте, а Ursa успевает набрать Fury Swipes и убить её."],
  ["Faceless Void", "Invoker", "Chronosphere останавливает врагов, а Invoker успевает накрыть их заклинаниями."],
  ["Skywrath Mage", "Legion Commander", "Duel удерживает цель, а Skywrath Mage успевает добить её Ancient Seal и Mystic Flare."],
  ["Bane", "Mirana", "Nightmare и Fiend's Grip держат цель, а Mirana бьёт её стрелой и Starstorm."],
  ["Io", "Tiny", "Io лечит и ускоряет Tiny через Tether и Overcharge, а Tiny бросает врагов Toss."],
  ["Magnus", "Phantom Assassin", "Empower даёт Phantom Assassin урон и удары по площади, поэтому она быстро фармит и сильнее в драке."]
];

// Правила по механикам: [что даёт один герой, что нужно второму, где искать (has или weak), объяснение]
var SYN_RULES = [
  ["stun", "burst", "has", "Контроль держит цель на месте, а быстрый урон успевает её добить."],
  ["stun", "aoe", "has", "Контроль собирает врагов в одном месте, а урон по площади бьёт сразу по всем."],
  ["stun", "phys", "weak", "Контроль не даёт цели уйти, а герой спокойно бьёт её обычными атаками."],
  ["tank", "phys", "weak", "Живучий герой принимает удар на себя, а тот, кто бьёт обычными атаками, работает из-за его спины."]
];

function synergyWith(hero, ally) {
  var hn = hero.localized_name;
  var an = ally.localized_name;
  var texts = [];
  var bonus = 0;

  SYN_PAIRS.forEach(function (p) {
    if ((p[0] === hn && p[1] === an) || (p[0] === an && p[1] === hn)) {
      texts.push(p[2]);
      bonus += 0.05;
    }
  });

  var c = tagsOf(hn);
  var a = tagsOf(an);
  SYN_RULES.forEach(function (r) {
    [[hn, c, an, a], [an, a, hn, c]].forEach(function (d) {
      var gName = d[0], g = d[1], tName = d[2], t = d[3];
      var okG = g.has.indexOf(r[0]) !== -1;
      var okT = (r[2] === "weak" ? t.weak : t.has).indexOf(r[1]) !== -1;
      if (okG && okT) {
        var kg = pairValue(HERO_KIT[gName], r[0]);
        var kt = r[2] === "weak" ? null : pairValue(HERO_KIT[tName], r[1]);
        var s = "";
        if (kg) s += gName + ", " + kg + ". ";
        if (kt) s += tName + ", " + kt + ". ";
        s += r[3];
        texts.push(s);
        bonus += 0.02;
      }
    });
  });

  if (!texts.length) return null;
  return { bonus: Math.min(0.08, bonus), why: texts.join(" ") };
}

// ===== Кнопка "Подобрать" с синергиями =====
async function recommend() {
  var box = $("results");
  try {
    if (!heroes.length) {
      box.innerHTML = '<div class="loading">Герои ещё грузятся, подожди пару секунд и нажми ещё раз</div>';
      return;
    }
    box.innerHTML = '<div class="loading">Считаю...</div>';

    var enemyIds = enemies.filter(Boolean);
    var allyIds = allies.filter(Boolean);
    var taken = allies.concat(enemies).filter(Boolean);
    var roleList = ROLE_MAP[role];

    var results = await Promise.all(enemyIds.map(fetchMatchups));
    var data = {};
    var noStats = false;
    enemyIds.forEach(function (id, i) {
      data[id] = results[i];
      if (!results[i]) noStats = true;
    });

    var list = [];
    heroes.forEach(function (h) {
      if (taken.indexOf(h.id) !== -1) return;
      if (!canPlay(h)) return;

      var parts = [];
      var sum = 0;
      enemyIds.forEach(function (eid) {
        var m = data[eid] ? data[eid][h.id] : null;
        var wr = m ? (m.g - m.w + 50) / (m.g + 100) : 0.5;
        var note = findNote(h, byId[eid]);
        var bonus = note && note.bonus ? note.bonus : 0;
        sum += wr + bonus;
        parts.push({ id: eid, wr: wr, g: m ? m.g : 0, note: note ? note.why : null });
      });

      var syn = [];
      var synSum = 0;
      allyIds.forEach(function (aid) {
        var s = synergyWith(h, byId[aid]);
        if (s) {
          synSum += s.bonus;
          syn.push({ id: aid, why: s.why });
        }
      });

      var counter = enemyIds.length ? sum / enemyIds.length : h.overall;
      var w = !enemyIds.length ? 0 : (order === "last" ? 0.8 : 0.6);
      var score = w * counter + (1 - w) * h.overall + Math.min(0.06, synSum);
      list.push({ h: h, score: score, parts: parts, syn: syn });
    });

    list.sort(function (a, b) { return b.score - a.score; });

    var html = "";
    if (noStats) {
      html += '<div class="loading">Статистика матчей сейчас недоступна, подсказки посчитаны по подборке контр-пиков и механикам скиллов.</div>';
    }

    list.slice(0, 8).forEach(function (x, idx) {
      var overallPct = Math.round(x.h.overall * 100);
      var shortList = [];
      var details = "";

      x.parts.forEach(function (p) {
        if (p.note) {
          shortList.push("контрит " + byId[p.id].localized_name);
        } else if (p.g >= 200 && p.wr - x.h.overall >= 0.02) {
          shortList.push("бьёт " + byId[p.id].localized_name + " (" + Math.round(p.wr * 100) + "%)");
        }
      });
      x.syn.forEach(function (s) {
        shortList.push("сочетается с " + byId[s.id].localized_name);
      });

      if (x.parts.length) {
        details += '<div class="sec"><b>Почему он контрит</b>';
        x.parts.forEach(function (p) {
          var en = byId[p.id].localized_name;
          if (p.note) {
            details += '<div class="note"><b>Против ' + en + ':</b> ' + p.note + "</div>";
          } else {
            details += "<br>• Против " + en + ": особого контра нет";
          }
          if (p.g >= 200) {
            details += '<div class="hint">Статистика: выигрывает ' + Math.round(p.wr * 100) +
              "% игр (в среднем " + overallPct + "%), игр: " + p.g.toLocaleString("ru-RU") + "</div>";
          } else if (p.g > 0) {
            details += '<div class="hint">Статистика: игр слишком мало (' + p.g + "), цифрам верить нельзя</div>";
          }
        });
        details += "</div>";
      }

      if (x.syn.length) {
        details += '<div class="sec"><b>Как он сочетается с твоей командой</b>';
        x.syn.forEach(function (s) {
          details += '<div class="note"><b>С ' + byId[s.id].localized_name + ':</b> ' + s.why + "</div>";
        });
        details += "</div>";
      }

      var myRoles = x.h.roles.filter(function (r) { return roleList.indexOf(r) !== -1; })
        .map(function (r) { return ROLE_RU[r] || r; });
      details += '<div class="sec"><b>Почему стоит взять</b><br>' +
        "На твоей роли он: " + (myRoles.length ? myRoles.join(", ") : "подходит по данным") + ".<br>" +
        "Герой: " + (ATTR_RU[x.h.primary_attr] || "") + ", " + (ATTACK_RU[x.h.attack_type] || "") +
        ". Общий процент побед: " + overallPct + "%.<br>";
      if (!x.parts.length) {
        details += "Враги не выбраны, поэтому подсказка идёт по общей силе героя.";
      } else if (order === "last") {
        details += "Ты пикаешь последним, поэтому контр-пик важнее всего.";
      } else {
        details += "Ты пикаешь не последним, поэтому учитываем и контр-пик, и общую силу героя.";
      }
      details += "</div>";

      html += '<div class="res"><div class="top"><img src="' + imgUrl(x.h) + '">' +
        '<div class="rinfo"><div class="rname">' + (idx + 1) + ". " + x.h.localized_name + "</div>" +
        '<div class="rwhy">' + (shortList.length ? shortList.join(", ") : "сильный по общей статистике") + "</div></div>" +
        '<div class="score">' + Math.round(x.score * 100) + "%</div></div>" +
        '<button class="btn-more">Подробнее ▾</button>' +
        '<div class="more">' + details + "</div></div>";
    });

    box.innerHTML = html || '<div class="loading">Никого не нашлось</div>';

    var btns = box.querySelectorAll(".btn-more");
    Array.prototype.forEach.call(btns, function (b) {
      b.onclick = function () {
        var m = b.parentNode.querySelector(".more");
        var open = m.style.display === "block";
        m.style.display = open ? "none" : "block";
        b.textContent = open ? "Подробнее ▾" : "Скрыть ▴";
      };
    });
    box.scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    box.innerHTML = '<div class="loading">Что-то пошло не так: ' + (err && err.message ? err.message : err) + "</div>";
  }
}

$("go").onclick = recommend;

// ===== ШАНС НА ПОБЕДУ ПОД ИКОНКОЙ ГЕРОЯ =====
var chanceStyle = document.createElement("style");
chanceStyle.textContent =
  ".pic{width:84px;text-align:center}" +
  ".pic img{width:84px;border-radius:8px;display:block}" +
  ".chance{margin-top:6px;font-family:'Unbounded',sans-serif;font-weight:800;font-size:15px;line-height:1.1}" +
  ".chance span{display:block;font-family:'Rubik',sans-serif;font-weight:400;font-size:9px;opacity:.7;margin-top:3px}";
document.head.appendChild(chanceStyle);

function decorate() {
  Array.prototype.forEach.call(document.querySelectorAll("#results .res"), function (res) {
    if (res.querySelector(".pic")) return;
    var img = res.querySelector(".top img");
    var sc = res.querySelector(".score");
    if (!img || !sc) return;

    var val = parseInt(sc.textContent, 10) || 50;
    val = Math.max(40, Math.min(68, val));
    var color = val >= 58 ? "#4ade80" : (val >= 52 ? "#22d3ee" : "#f59e0b");

    var pic = document.createElement("div");
    pic.className = "pic";
    img.parentNode.insertBefore(pic, img);
    pic.appendChild(img);

    var ch = document.createElement("div");
    ch.className = "chance";
    ch.style.color = color;
    ch.innerHTML = val + "%<span>шанс на победу</span>";
    pic.appendChild(ch);

    sc.parentNode.removeChild(sc);

    var more = res.querySelector(".more");
    if (more) {
      more.insertAdjacentHTML("beforeend",
        '<div class="hint">Шанс на победу — это оценка бота. Её считают из статистики побед против врагов, подборки контр-пиков, механик скиллов и синергий с твоей командой. Это подсказка, а не гарантия.</div>');
    }
  });
}

var recommendBase = recommend;
recommend = async function () {
  await recommendBase();
  decorate();
};
$("go").onclick = recommend;

// ===== ВКЛАДКИ: ПОДБОР / ВИНРЕЙТЫ =====
var tabStyle = document.createElement("style");
tabStyle.textContent =
  ".tabs{display:flex;gap:6px;padding:5px;margin:0 0 6px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px}" +
  ".tab{flex:1;padding:12px;border:none;border-radius:12px;background:none;color:#9ca3af;font-family:'Unbounded',sans-serif;font-weight:600;font-size:13px;cursor:pointer}" +
  ".tab.active{color:#fff;background:linear-gradient(90deg,#a855f7,#ec4899);box-shadow:0 0 14px rgba(168,85,247,.5)}" +
  "#rsearch{width:100%;margin-top:16px;padding:12px 14px;font-size:16px;font-family:'Rubik',sans-serif;color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:12px;outline:none}" +
  "#rsearch:focus{border-color:#c084fc;box-shadow:0 0 14px rgba(192,132,252,.5)}" +
  ".rrow{display:flex;align-items:center;gap:10px;padding:8px 10px;margin-top:8px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}" +
  ".rnum{width:22px;font-size:12px;color:#6b7280;text-align:right}" +
  ".rrow img{width:58px;border-radius:6px}" +
  ".rmid{flex:1;min-width:0}" +
  ".rbar{height:5px;border-radius:3px;background:rgba(255,255,255,.08);margin:6px 0 4px;overflow:hidden}" +
  ".rbar i{display:block;height:100%;background:linear-gradient(90deg,#a855f7,#ec4899,#22d3ee)}" +
  ".rsub{font-size:11px;color:#9ca3af}" +
  ".rwr{font-family:'Unbounded',sans-serif;font-weight:800;font-size:15px;text-align:right}" +
  ".rwr span{display:block;font-family:'Rubik',sans-serif;font-weight:400;font-size:9px;color:#9ca3af;margin-top:3px}";
document.head.appendChild(tabStyle);

var RANKS = [
  { id: 1, t: "Рекрут" }, { id: 2, t: "Страж" }, { id: 3, t: "Рыцарь" }, { id: 4, t: "Герой" },
  { id: 5, t: "Легенда" }, { id: 6, t: "Властелин" }, { id: 7, t: "Божество" }, { id: 8, t: "Титан" }
];
var rateRank = 0;
var rateSort = "pick";

var tabs = document.createElement("div");
tabs.className = "tabs";
tabs.innerHTML = '<button class="tab active" data-v="pick">Подбор</button><button class="tab" data-v="rate">Винрейты</button>';
var subEl = document.querySelector(".sub");
var footEl = document.querySelector(".foot");
subEl.parentNode.insertBefore(tabs, subEl.nextSibling);

var pickView = document.createElement("div");
var rateView = document.createElement("div");
rateView.style.display = "none";
var node = tabs.nextSibling;
while (node && node !== footEl) {
  var nextNode = node.nextSibling;
  pickView.appendChild(node);
  node = nextNode;
}
footEl.parentNode.insertBefore(pickView, footEl);
footEl.parentNode.insertBefore(rateView, footEl);

rateView.innerHTML =
  '<div class="label">Ранг</div><div class="chips" id="rranks"></div>' +
  '<div class="label">Сортировка</div><div class="chips" id="rsort"></div>' +
  '<input id="rsearch" placeholder="Найти героя...">' +
  '<div id="rlist"></div>' +
  '<div class="hint" style="margin-top:12px">Данные OpenDota по недавним публичным матчам, обновляются сами. При сортировке по винрейту скрыты редкие герои (меньше 1% игр).</div>';

function rankStats(h) {
  if (rateRank) return { p: h[rateRank + "_pick"] || 0, w: h[rateRank + "_win"] || 0 };
  var p = 0, w = 0;
  for (var i = 1; i <= 8; i++) { p += h[i + "_pick"] || 0; w += h[i + "_win"] || 0; }
  return { p: p, w: w };
}

function drawRates() {
  var box = $("rlist");
  if (!heroes.length) { box.innerHTML = '<div class="loading">Загружаю статистику...</div>'; return; }
  var q = ($("rsearch").value || "").toLowerCase();
  var rows = heroes.map(function (h) {
    var s = rankStats(h);
    return { h: h, p: s.p, wr: s.p ? s.w / s.p : 0 };
  });
  var total = rows.reduce(function (a, r) { return a + r.p; }, 0) || 1;
  rows.forEach(function (r) { r.pr = r.p / total * 10; });
  var maxPr = Math.max.apply(null, rows.map(function (r) { return r.pr; })) || 1;
  rows = rows.filter(function (r) {
    if (!r.p) return false;
    if (rateSort === "wr" && r.pr < 0.01) return false;
    return r.h.localized_name.toLowerCase().indexOf(q) !== -1;
  });
  rows.sort(rateSort === "wr"
    ? function (a, b) { return b.wr - a.wr; }
    : function (a, b) { return b.p - a.p; });

  var html = "";
  rows.forEach(function (r, i) {
    var col = r.wr >= 0.52 ? "#4ade80" : (r.wr >= 0.48 ? "#e5e7eb" : "#f87171");
    html += '<div class="rrow"><div class="rnum">' + (i + 1) + '</div>' +
      '<img src="' + imgUrl(r.h) + '" onerror="this.style.visibility=\'hidden\'">' +
      '<div class="rmid"><div class="rname">' + r.h.localized_name + '</div>' +
      '<div class="rbar"><i style="width:' + Math.round(r.pr / maxPr * 100) + '%"></i></div>' +
      '<div class="rsub">берут в ' + (r.pr * 100).toFixed(1) + '% игр, пиков: ' + r.p.toLocaleString("ru-RU") + '</div></div>' +
      '<div class="rwr" style="color:' + col + '">' + (r.wr * 100).toFixed(1) + '%<span>винрейт</span></div></div>';
  });
  box.innerHTML = html || '<div class="loading">Никого не нашлось</div>';
}

function drawRateChips() {
  makeChips("rranks", [{ id: 0, t: "Все ранги" }].concat(RANKS), rateRank, function (id) {
    rateRank = id; drawRateChips(); drawRates();
  });
  makeChips("rsort", [{ id: "pick", t: "Популярные" }, { id: "wr", t: "Самый высокий винрейт" }], rateSort, function (id) {
    rateSort = id; drawRateChips(); drawRates();
  });
}
drawRateChips();
$("rsearch").addEventListener("input", drawRates);

Array.prototype.forEach.call(tabs.querySelectorAll(".tab"), function (b) {
  b.onclick = function () {
    Array.prototype.forEach.call(tabs.querySelectorAll(".tab"), function (x) { x.classList.remove("active"); });
    b.classList.add("active");
    var isRate = b.getAttribute("data-v") === "rate";
    pickView.style.display = isRate ? "none" : "";
    rateView.style.display = isRate ? "" : "none";
    if (isRate) drawRates();
    try { Telegram.WebApp.HapticFeedback.selectionChanged(); } catch (e) {}
  };
});

var waitHeroes = setInterval(function () {
  if (heroes.length) {
    clearInterval(waitHeroes);
    if (rateView.style.display !== "none") drawRates();
  }
}, 500);

// ===== ВЫБОР ЛИНИИ ВО ВКЛАДКЕ ВИНРЕЙТЫ, БЕЗ ТИТАНА =====
RANKS = RANKS.filter(function (r) { return r.id !== 8; });
if (rateRank === 8) rateRank = 0;

var LANES = [
  { id: 0, t: "Все линии" }, { id: 1, t: "Керри (1)" }, { id: 2, t: "Мид (2)" },
  { id: 3, t: "Оффлейн (3)" }, { id: 4, t: "Саппорт 4" }, { id: 5, t: "Саппорт 5" }
];
var rateLane = 0;

var laneStyle = document.createElement("style");
laneStyle.textContent =
  ".lanesel{position:relative}" +
  ".lanesel select{width:100%;appearance:none;-webkit-appearance:none;padding:12px 40px 12px 14px;font-size:15px;font-family:'Rubik',sans-serif;color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:12px;outline:none;cursor:pointer}" +
  ".lanesel select:focus{border-color:#c084fc;box-shadow:0 0 14px rgba(192,132,252,.5)}" +
  ".lanesel::after{content:'▾';position:absolute;right:14px;top:50%;transform:translateY(-50%);color:#c084fc;pointer-events:none;font-size:16px}" +
  ".lanesel option{background:#12121c;color:#fff}";
document.head.appendChild(laneStyle);

var sortLabel = $("rsort").previousElementSibling;
var laneLabel = document.createElement("div");
laneLabel.className = "label";
laneLabel.textContent = "Линия";
var laneBox = document.createElement("div");
laneBox.className = "lanesel";
var laneSelect = document.createElement("select");
LANES.forEach(function (l) {
  var o = document.createElement("option");
  o.value = l.id;
  o.textContent = l.t;
  laneSelect.appendChild(o);
});
laneBox.appendChild(laneSelect);
rateView.insertBefore(laneLabel, sortLabel);
rateView.insertBefore(laneBox, sortLabel);

laneSelect.addEventListener("change", function () {
  rateLane = parseInt(laneSelect.value, 10) || 0;
  drawRates();
});

var rateHints = rateView.querySelectorAll(".hint");
if (rateHints.length) {
  rateHints[rateHints.length - 1].textContent =
    "Данные OpenDota по недавним публичным матчам, обновляются сами. Фильтр по линии показывает героев, которые на ней играются, а винрейт у героя общий на выбранном ранге. При сортировке по винрейту скрыты редкие герои (меньше 1% игр).";
}

function playsPos(h, pos) {
  var p = HERO_POS[h.localized_name];
  if (p) return p.indexOf(String(pos)) !== -1;
  var list = ROLE_MAP[pos];
  return h.roles.some(function (r) { return list.indexOf(r) !== -1; });
}

var oldDrawRates = drawRates;
drawRates = function () {
  var box = $("rlist");
  if (!heroes.length) { box.innerHTML = '<div class="loading">Загружаю статистику...</div>'; return; }
  var q = ($("rsearch").value || "").toLowerCase();
  var rows = heroes.map(function (h) {
    var s = rankStats(h);
    return { h: h, p: s.p, wr: s.p ? s.w / s.p : 0 };
  });
  var total = rows.reduce(function (a, r) { return a + r.p; }, 0);
  if (!total) { box.innerHTML = '<div class="loading">На этом ранге пока нет данных</div>'; return; }
  rows.forEach(function (r) { r.pr = r.p / total * 10; });
  rows = rows.filter(function (r) {
    if (!r.p) return false;
    if (rateLane && !playsPos(r.h, rateLane)) return false;
    if (rateSort === "wr" && r.pr < 0.01) return false;
    return r.h.localized_name.toLowerCase().indexOf(q) !== -1;
  });
  var maxPr = Math.max.apply(null, rows.map(function (r) { return r.pr; }).concat([0.0001]));
  rows.sort(rateSort === "wr"
    ? function (a, b) { return b.wr - a.wr; }
    : function (a, b) { return b.p - a.p; });

  var html = "";
  rows.forEach(function (r, i) {
    var col = r.wr >= 0.52 ? "#4ade80" : (r.wr >= 0.48 ? "#e5e7eb" : "#f87171");
    var pos = HERO_POS[r.h.localized_name];
    html += '<div class="rrow"><div class="rnum">' + (i + 1) + '</div>' +
      '<img src="' + imgUrl(r.h) + '" onerror="this.style.visibility=\'hidden\'">' +
      '<div class="rmid"><div class="rname">' + r.h.localized_name + '</div>' +
      '<div class="rbar"><i style="width:' + Math.round(r.pr / maxPr * 100) + '%"></i></div>' +
      '<div class="rsub">берут в ' + (r.pr * 100).toFixed(1) + '% игр' +
      (pos ? ', позиции: ' + pos.split("").join(", ") : '') + '</div></div>' +
      '<div class="rwr" style="color:' + col + '">' + (r.wr * 100).toFixed(1) + '%<span>винрейт</span></div></div>';
  });
  box.innerHTML = html || '<div class="loading">Никого не нашлось</div>';
};

$("rsearch").removeEventListener("input", oldDrawRates);
$("rsearch").addEventListener("input", function () { drawRates(); });
drawRateChips();
drawRates();
