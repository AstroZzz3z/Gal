const GAME_VERSION = "framework-0.10";
const SAVE_KEY = "hoshizu-save-slots-v1";
const AUTO_SAVE_KEY = "hoshizu-autosave-v1";
const SETTINGS_KEY = "hoshizu-settings-v1";
const LINE_EDIT_KEY = "hoshizu-line-edits-v1";
const LINE_EDIT_CLEAR_CH4_PLUS_KEY = "hoshizu-line-edits-cleared-ch4plus-20260430-v1";
const LINE_EDIT_CLEAR_CH1_REWRITE_KEY = "hoshizu-line-edits-cleared-ch1-rewrite-20260515-v1";
const LINE_EDIT_CLEAR_CH2_REWRITE_KEY = "hoshizu-line-edits-cleared-ch2-rewrite-20260515-v1";
const LINE_EDIT_CLEAR_CH3_REWRITE_KEY = "hoshizu-line-edits-cleared-ch3-rewrite-20260516-v1";
const LINE_EDIT_CLEAR_CH4_REWRITE_KEY = "hoshizu-line-edits-cleared-ch4-rewrite-20260516-v1";
const EDITOR_ENABLED_KEY = "hoshizu-editor-enabled-v1";
const SLOT_COUNT = 8;

const defaultSettings = {
  bgmEnabled: true,
  sfxEnabled: true,
  volume: 0.6,
  font: "system",
  textSpeed: 1.35,
  autoDelay: 2100,
};

const bgmTracks = {
  mainTitle: { name: "Main Title", src: "music/主界面/Main Title.mp3" },
  dailyClassroom: { name: "教室日常", src: "music/相遇日常/教室日常.mp3" },
  banter: { name: "拌嘴", src: "music/小拌嘴/拌嘴.mp3" },
  focusDerivation: { name: "推导", src: "music/专注学习/推导.mp3" },
  springObservation: { name: "春季大曲线", src: "music/观测/春季大曲线.mp3" },
  rainLibrary: { name: "图书馆", src: "music/雨线和误差/图书馆.mp3" },
  smallPromise: { name: "雨前约定", src: "music/把问题拆小/雨前约定.mp3" },
  prelimReady: { name: "预备", src: "music/初赛倒计时/预备.mp3" },
  examLamp: { name: "备赛桌灯", src: "music/初赛倒计时/备赛桌灯.mp3" },
  xiaControl: { name: "要求！", src: "music/夏南星控场/要求！.mp3" },
  rivalry: { name: "竞争", src: "music/强者/竞争.mp3" },
  observatoryNight: { name: "土星环", src: "music/夜里的天文台/土星环.mp3" },
  weightlessEcho: { name: "回声落下", src: "music/失重感/回声落下.mp3" },
  breakdown: { name: "Stairwell After School", src: "music/崩溃/Stairwell After School.mp3" },
  gaokaoAnxiety: { name: "看不清的路", src: "music/高考焦虑/看不清的路.mp3" },
  happyEnding: { name: "Different Coordinates", src: "music/Happy Ending/Different Coordinates.mp3" },
  badEnding: { name: "End of the Wilds", src: "music/Bad Ending/Andrew Prahlow - End of the Wilds.mp3" },
};

const assets = {
  bg: {
    classroom: "assets/bg/classroom.png",
    classroomDay: "assets/bg/classroom.png",
    clubroom: "assets/bg/classroom.png",
    clubRoomEvening: "assets/bg/classroom.png",
    clubRoomNight: "assets/bg/classroom-night.png",
    classroomNight: "assets/bg/classroom-night.png",
    rooftop: "assets/bg/rooftop-night.png",
    "rooftop-night": "assets/bg/rooftop-night.png",
    rooftopCloudy: "assets/bg/rooftop-cloudy.png",
    libraryRain: "assets/bg/library-rain.png",
    corridorEvening: "assets/bg/school-corridor-evening.png",
    schoolCorridorEvening: "assets/bg/school-corridor-evening.png",
    schoolCorridorNoon: "assets/bg/school-corridor-noon.png",
    schoolBuildingEntranceNight: "assets/bg/school-building-entrance-night.png",
    vendingMachineNight: "assets/bg/vending-machine-night.png",
    schoolGateDusk: "assets/bg/school-gate-dusk.png",
    schoolGateMorning: "assets/bg/school-gate-morning.png",
    convenienceStore: "assets/bg/convenience-store.png",
    busStopNight: "assets/bg/bus-stop-night.png",
    mallBookstore: "assets/bg/mall-bookstore.png",
    mallFoodCourt: "assets/bg/mall-food-court.png",
    homeDay: "assets/bg/home-day.png",
    homeEvening: "assets/bg/home-evening.png",
    homeNight: "assets/bg/home-night.png",
    bedroomCeilingNight: "assets/bg/bedroom-ceiling-night.png",
    bedroomMorning: "assets/bg/bedroom-morning.png",
    stairwellNight: "assets/bg/school-corridor-evening.png",
    trainStationMorning: "assets/bg/train-station-waiting-hall.png",
    highSpeedRail: "assets/bg/high-speed-rail-carriage.png",
    arrivalStation: "assets/bg/coastal-city-day.png",
    competitionVenue: "assets/bg/competition-venue-gate.png",
    competitionCheckin: "assets/bg/competition-checkin.png",
    competitionOpeningCeremony: "assets/bg/competition-opening-ceremony.png",
    competitionExamRoom: "assets/bg/competition-exam-room.png",
    competitionExamHallway: "assets/bg/competition-exam-hallway.png",
    competitionClosingCeremony: "assets/bg/competition-closing-ceremony.png",
    coastalCityDay: "assets/bg/coastal-city-day.png",
    coastalCityDusk: "assets/bg/coastal-city-dusk.png",
    coastalCityNight: "assets/bg/coastal-city-night.png",
    hotelRoomDay: "assets/bg/hotel-room-day.png",
    hotelRoomNight: "assets/bg/hotel-room-night.png",
    seasideNight: "assets/bg/seaside-embankment-night.png",
    cgCh1RooftopSpica: "assets/cg/cg-ch1-rooftop-spica.png",
    cgBreakdown:"assets/cg/ch3-stairwell-breakdown.png",
    cgCh2NotebookExchange: "assets/cg/cg-ch2-notebook-exchange.png",
    cgCh4ObservatoryDream: "assets/cg/cg-ch4-observatory-dream.png",
    cgCh4ResultBoard: "assets/cg/cg-ch4-result-board.png",
    cgCh4LinDeskNap: "assets/cg/cg-ch4-lin-desk-nap.png",
    cgCh4LinDroolNap: "assets/cg/cg-ch4-lin-drool-nap.png",
    cgCh4LinDroolWake: "assets/cg/cg-ch4-lin-drool-wake.png",
    cgCh5DivergentWalkway: "assets/cg/cg-ch5-divergent-walkway.png",
    cgCh5TrainWindow: "assets/cg/cg-ch5-train-window.png",
    cgCh5TrainWindowView: "assets/cg/cg-ch5-train-window-view.png",
    cgCh5TrainLinLooking: "assets/cg/cg-ch5-train-lin-looking.png",
    cgCh5LinSeasideProfile: "assets/cg/cg-ch5-lin-seaside-profile.png",
    cgCh5LinSeasideFront: "assets/cg/cg-ch5-lin-seaside-front.png",
    cgCh6ExamPaperPov: "assets/cg/cg-ch6-exam-paper-pov.png",
    cgCh6FireworksBoundary: "assets/cg/cg-ch6-fireworks-boundary.png",
    cgCh7LastRooftopChart: "assets/cg/cg-ch7-last-rooftop-chart.png",
    cgCh8ExamEndGate: "assets/cg/cg-ch8-exam-end-gate.png",
    cgCh8VolunteerForm: "assets/cg/cg-ch8-volunteer-form.png",
    cgCh8HappySameSky: "assets/cg/cg-ch8-happy-same-sky.png",
    cgCh8HappyStationNote: "assets/cg/cg-ch8-happy-station-note.png",
    cgCh8HappyYearRooftop: "assets/cg/cg-ch8-happy-year-rooftop.png",
    cgCh8BadUnopenedClub: "assets/cg/cg-ch8-bad-unopened-club.png",
    cgCh8BadLibraryCalibration: "assets/cg/cg-ch8-bad-library-calibration.png",
    cgCh8BadResultMorning: "assets/cg/cg-ch8-bad-result-morning.png",
    examRoom: "assets/bg/exam-room.png",
    resultBoard: "assets/bg/result-board.png",
    trainingCamp: "assets/bg/training-camp.png",
    trainingCampClassroom: "assets/bg/training-camp.png",
    TrainingCampClassroom: "assets/bg/training-camp.png",
    observatoryNight: "assets/bg/observatory-night.png",
    careerRoom: "assets/bg/career-room.png",
  },
  char: {
    linNeutral: "assets/char/lin-neutral.png",
    linSmile: "assets/char/lin-smile.png",
    linThinking: "assets/char/lin-thinking.png",
    linPout: "assets/char/lin-pout.png",
    linCasual: "assets/char/lin-casual.png",
    linCasualNeutral: "assets/char/lin-casual-neutral.png",
    linCasualSmile: "assets/char/lin-casual-smile.png",
    linCasualThinking: "assets/char/lin-casual-thinking.png",
    linCasualAnxious: "assets/char/lin-casual-anxious.png",
    linCasualPout: "assets/char/lin-casual-pout.png",
    linCasualDowncast: "assets/char/lin-casual-downcast.png",
    linCasualTired: "assets/char/lin-casual-tired.png",
    linAnxious: "assets/char/lin-anxious.png",
    lingNeutral: "assets/char/lin-neutral.png",
    lingThinking: "assets/char/lin-thinking.png",
    lingAnxious: "assets/char/lin-anxious.png",
    linSummerNeutral: "assets/char/lin-summer-neutral.png",
    linSummerSmile: "assets/char/lin-summer-smile.png",
    linSummerThinking: "assets/char/lin-summer-thinking.png",
    linSummerAnxious: "assets/char/lin-summer-anxious.png",
    linSummerPout: "assets/char/lin-summer-pout.png",
    linSummerDowncast: "assets/char/lin-summer-downcast.png",
    linSummerTired: "assets/char/lin-summer-tired.png",
    linTired: "assets/char/lin-anxious.png",
    linOutdoor: "assets/char/lin-casual.png",
    linDowncast: "assets/char/lin-anxious.png",
    linBreakdown: "assets/char/lin-anxious.png",
    linRecovering: "assets/char/lin-anxious.png",
    seniorSmile: "assets/char/senior-smile.png",
    xiaSerious: "assets/char/senior-smile.png",
    wangshuNeutral: "assets/char/wangshu-neutral.png",
    wangshuSharp: "assets/char/wangshu-sharp.png",
    chen: "assets/char/chen-yan.png",
    chenNeutral: "assets/char/chen-yan.png",
    tangNeutral: "assets/char/tang-yue.png",
    tangNeautral: "assets/char/tang-yue.png",
    lingSmile: "assets/char/lin-smile.png",
    teacherNeutral: "assets/char/xu-chengan.png",
  },
  theater: {
    IOAA: "assets/theater/IOAA.png",
    ioaaShockTheater: "assets/theater/ioaa-shock-theater.png",
    chairPhoneOriginal: "assets/theater/chair-phone-original.png",
    chairPhoneDuskAbstract: "assets/theater/chair-phone-dusk-abstract.png",
    chairPhoneDuskSimple: "assets/theater/chair-phone-dusk-simple.png",
    cnaoChatReaction: "assets/theater/cnao-chat-reaction.png",
    cnaoChatReactionMono: "assets/theater/cnao-chat-reaction-mono.png",
  },
  sfx: {
    stunning: "sound/stunning.m4a",
  },
};

function mergeAssetEntries(kind, entries) {
  const target = assets[kind];
  if (!target || !Array.isArray(entries)) return 0;
  const knownSrc = new Set(Object.values(target));
  let added = 0;
  entries.forEach((entry) => {
    if (!entry?.key || !entry?.src || knownSrc.has(entry.src)) return;
    const baseKey = entry.key;
    let key = baseKey;
    let suffix = 2;
    while (target[key] && target[key] !== entry.src) {
      key = `${baseKey}${suffix}`;
      suffix += 1;
    }
    if (target[key] === entry.src) return;
    target[key] = entry.src;
    knownSrc.add(entry.src);
    added += 1;
  });
  return added;
}

async function refreshExternalTheaterAssets(options = {}) {
  const { updateControls = true } = options;
  const api = window.hoshizuAssets;
  if (!api?.list) return 0;
  try {
    const added = mergeAssetEntries("theater", await api.list("theater"));
    if (added > 0 && updateControls) {
      setupLineEditor();
      preload();
      if (lineEditorIsOpen()) refreshLineEditor(`已刷新 ${added} 个小剧场资源`);
    }
    return added;
  } catch (error) {
    console.warn("Failed to refresh theater assets", error);
    return 0;
  }
}

let theaterAssetRefreshTimer = null;

function scheduleTheaterAssetRefresh() {
  if (theaterAssetRefreshTimer) window.clearTimeout(theaterAssetRefreshTimer);
  theaterAssetRefreshTimer = window.setTimeout(() => {
    theaterAssetRefreshTimer = null;
    refreshExternalTheaterAssets();
  }, 180);
}

function watchExternalAssets() {
  const api = window.hoshizuAssets;
  if (!api?.onChanged) return;
  api.onChanged((kind) => {
    if (kind === "theater") scheduleTheaterAssetRefresh();
  });
}

const bgmByBackground = {
  classroom: "dailyClassroom",
  classroomDay: "dailyClassroom",
  clubroom: "dailyClassroom",
  clubRoomEvening: "dailyClassroom",
  clubRoomNight: "dailyClassroom",
  classroomNight: "dailyClassroom",
  rooftop: "springObservation",
  "rooftop-night": "springObservation",
  rooftopCloudy: "springObservation",
  libraryRain: "rainLibrary",
  corridorEvening: "dailyClassroom",
  schoolCorridorEvening: "dailyClassroom",
  schoolCorridorNoon: "dailyClassroom",
  schoolBuildingEntranceNight: "dailyClassroom",
  vendingMachineNight: "gaokaoAnxiety",
  schoolGateDusk: "weightlessEcho",
  schoolGateMorning: "dailyClassroom",
  convenienceStore: "banter",
  busStopNight: "weightlessEcho",
  mallBookstore: "banter",
  mallFoodCourt: "banter",
  homeDay: "rainLibrary",
  homeEvening: "rainLibrary",
  homeNight: "rainLibrary",
  bedroomCeilingNight: "rainLibrary",
  bedroomMorning: "rainLibrary",
  stairwellNight: "breakdown",
  trainStationMorning: "weightlessEcho",
  highSpeedRail: "dailyClassroom",
  arrivalStation: "weightlessEcho",
  competitionVenue: "rivalry",
  competitionCheckin: "rivalry",
  competitionOpeningCeremony: "rivalry",
  competitionExamRoom: "gaokaoAnxiety",
  competitionExamHallway: "weightlessEcho",
  competitionClosingCeremony: "rivalry",
  coastalCityDay: "weightlessEcho",
  coastalCityDusk: "weightlessEcho",
  coastalCityNight: "weightlessEcho",
  hotelRoomDay: "rainLibrary",
  hotelRoomNight: "rainLibrary",
  seasideNight: "weightlessEcho",
  examRoom: "gaokaoAnxiety",
  resultBoard: "rivalry",
  trainingCamp: "rivalry",
  trainingCampClassroom: "rivalry",
  TrainingCampClassroom: "rivalry",
  observatoryNight: "observatoryNight",
  careerRoom: "gaokaoAnxiety",
  cgCh1RooftopSpica: "springObservation",
  cgBreakdown: "breakdown",
  cgCh2NotebookExchange: "smallPromise",
  cgCh4ObservatoryDream: "observatoryNight",
  cgCh4ResultBoard: "rivalry",
  cgCh4LinDeskNap: "dailyClassroom",
  cgCh4LinDroolNap: "dailyClassroom",
  cgCh4LinDroolWake: "dailyClassroom",
  cgCh5DivergentWalkway: "weightlessEcho",
  cgCh5TrainWindow: "smallPromise",
  cgCh5TrainWindowView: "smallPromise",
  cgCh5TrainLinLooking: "smallPromise",
  cgCh5LinSeasideProfile: "weightlessEcho",
  cgCh5LinSeasideFront: "weightlessEcho",
  cgCh6ExamPaperPov: "gaokaoAnxiety",
  cgCh6FireworksBoundary: "weightlessEcho",
  cgCh7LastRooftopChart: "springObservation",
  cgCh8ExamEndGate: "gaokaoAnxiety",
  cgCh8VolunteerForm: "gaokaoAnxiety",
  cgCh8HappySameSky: "happyEnding",
  cgCh8HappyStationNote: "happyEnding",
  cgCh8HappyYearRooftop: "happyEnding",
  cgCh8BadUnopenedClub: "badEnding",
  cgCh8BadLibraryCalibration: "badEnding",
  cgCh8BadResultMorning: "badEnding",
};

const names = {
  narrator: "",
  zhou: "周行",
  lin: "林澈",
  xia: "夏南星",
  wangshu: "顾望舒",
  chen: "陈砚",
  tang: "唐越",
  teacher: "许承安",
  managerTeacher: "管理老师",
  guestTeacher: "讲座老师",
  proctor: "监考老师",
  homeroom: "班主任",
  classmate: "同学",
  cashier: "收银员",
  parents: "父母",
  father: "父亲",
  mother: "母亲",
  system: "提示",
};

const initialStats = {
  trust: 0,
  discipline: 0,
  future_sync: 0,
};

const statLabels = {
  trust: "互信",
  discipline: "执行",
  future_sync: "同步",
};

const STORY = {
  "title": "星图未定",
  "chapters": [
            {
      "id": "ch1",
      "title": "第一章：春分前的星图",
      "sections": [
        {
          "id": "ch1-s1",
          "title": "错位的赤经差",
          "lines": [
            {
              "bg": "classroom",
              "clear": true,
              "speaker": "system",
              "text": "《星图未定》 第一章：春分前的星图"
            },
            {
              "speaker": "narrator",
              "text": "下午最后一节自习课，教室里闷得发酸。前排背英语作文的声音嗡嗡响，后门值日生把没拧干的拖把往墙角一砸，脏水顺着瓷砖慢吞吞地往下淌。"
            },
            {
              "speaker": "narrator",
              "text": "我把物理练习册翻到空白页，下面压着张 CNAO（全国中学生天文奥赛）的初赛报名表。纸的右下角已经被我抠出了毛边。"
            },
            {
              "speaker": "chen",
              "text": "「还盯这张破纸？再盯它也不会自动帮你把名报了。」",
              "focus": "chen",
              "clear": true,
              "show": [
                {
                  "id": "chen",
                  "img": "chenNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「闭嘴，我这道题马上推出来了。」"
            },
            {
              "speaker": "chen",
              "text": "「你这写的什么鬼画符？不是，想报就报，这都纠结一礼拜了。大不了去考场上睡一觉，丢脸的又不是我。」",
              "focus": "chen"
            },
            {
              "speaker": "zhou",
              "text": "「你打你的球去，别烦我。」"
            },
            {
              "speaker": "narrator",
              "text": "草稿纸上，地方恒星时（LST）、赤经（α）和时角（H）的转换公式已经被我涂改了四遍。最后那几个角度值糊成了一团黑疙瘩，纸背都被笔尖压得凹了进去。"
            },
            {
              "speaker": "zhou",
              "text": "（H = LST - α……已知观测地的地方恒星时是 14h 20m。那如果要算时角，是不是还得加上北京时间减去当地经度差的修正项？）"
            },
            {
              "speaker": "narrator",
              "text": "我咬着笔帽，把北京时间硬塞进公式里。越算越觉得诡异，最后算出的高度角竟然是个负数——这颗星直接钻进地底下了。"
            },
            {
              "speaker": "narrator",
              "text": "我正烦得想把这页纸撕了，过道里忽然有人停在我桌旁。她怀里抱着两本竞赛资料，校服外套的拉链拉到最顶上。视线越过我的胳膊，毫无预兆地落在那团涂得乱七八糟的公式上。",
              "clear": true,
              "show": [
                {
                  "id": "chen",
                  "img": "chenNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「同学，借过？」"
            },
            {
              "speaker": "lin",
              "text": "「你这里，时间系统完全混用了。」",
              "focus": "lin",
              "img": "linNeutral"
            },
            {
              "speaker": "narrator",
              "text": "被一个陌生人当场抓包做错题，我本能地想反驳。但我低头看了一眼那个该死的负数高度角，喉咙像被卡住了。"
            },
            {
              "speaker": "zhou",
              "text": "「……我还在验算。」"
            },
            {
              "speaker": "lin",
              "text": "「题干第一行就已经给了地方恒星时。你不需要再拿北京时间和经度去推算平太阳时。多加这个修正项，你后面的时角全偏了。」",
              "focus": "lin",
              "img": "linThinking"
            },
            {
              "speaker": "zhou",
              "text": "「我看最后选项的范围给得挺大，就算偏一点，说不定也能歪打正着选对。」"
            },
            {
              "speaker": "lin",
              "text": "「如果你只做选择题，也许能蒙对。但大题阅卷老师看到你第一步把 LST 和平太阳时搞混，不管你后面公式背得多熟，直接零分。」",
              "focus": "lin",
              "img": "linNeutral"
            },
            {
              "speaker": "narrator",
              "text": "她语气里没有一点嘲讽，就是单纯在陈述一个物理事实。这反而让我更难受，就像在黑板前默写公式卡壳，全班都在看着你手里的粉笔。",
              "choice": [
                {
                  "text": "把草稿纸推回去。",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「……你说得对。我多算了一遍。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "我把草稿纸往她那边推了两厘米，又立刻觉得这个动作像在交作业。"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「不用给我。把那一步擦掉，从题干给的 LST 开始。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「你纠错一直这么狠吗？」"
                    },
                    {
                      "img": "linThinking",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「这不是狠。是第一行。」"
                    }
                  ]
                },
                {
                  "text": "先把面子捡回来。",
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「我刚才只是想验证一下错误路线能错到哪里。」"
                    },
                    {
                      "speaker": "chen",
                      "focus": "chen",
                      "text": "「这话听着就很像嘴硬。」"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「验证结束了。高度角已经到地底下了。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "陈砚没忍住笑了一声。我把笔帽咬回嘴里，低头重新圈住题干第一行。"
                    }
                  ]
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你……也考这个？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。CNAO。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "气氛有些僵硬。陈砚在旁边看热闹不嫌事大，把面包包装纸揉成一团。"
            },
            {
              "speaker": "chen",
              "text": "「同学，你也是天文社的？那你赶紧劝劝他。这人拿个报名表纠结得快发霉了，推一下动一下。」",
              "focus": "chen"
            },
            {
              "speaker": "lin",
              "text": "「明天截止。要交的话，明天放学前去物理组办公室。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她没像陈砚那样灌鸡汤说什么“不留遗憾”，只是冷冰冰地报了个死线。但“明天截止”四个字，比什么都扎人。"
            },
            {
              "speaker": "narrator",
              "text": "上课铃响了。走廊里打球的人吵吵嚷嚷地往回跑。"
            },
            {
              "speaker": "lin",
              "text": "「小时和角度的换算，1h 对应 15°。你连单位都没统一。把负数高度角擦了吧，别骗自己了。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她转过身。我看着草稿纸上那行被判了死刑的公式，咽了下口水。"
            }
          ]
        },
        {
          "id": "ch1-s2",
          "title": "临时集训与对赌表",
          "lines": [
            {
              "speaker": "narrator",
              "text": "下课铃一响，教室里瞬间炸开了锅。后排几个男生把卷子胡乱往书包里一塞，喊着隔壁班的人去抢篮球场。我的草稿纸还摊在桌上，错的那两行被我划得漆黑。",
              "bg": "classroom",
              "clear": true,
              "transition": {
                "title": "3月19日 放学后",
                "subtitle": "临时集训报名"
              }
            },
            {
              "speaker": "lin",
              "text": "「你重写的时候，先把地方恒星时换算成角度。刚才第一步又忘了。」",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「大姐，你放学不走，就为了留下来盯我算角度？」"
            },
            {
              "speaker": "lin",
              "text": "「等人。顺便看你这题能不能改对。」",
              "focus": "lin",
              "img": "linThinking"
            },
            {
              "speaker": "narrator",
              "text": "她手里那张纸边缘压得极其平整，是一张已经填好姓名和班级的 CNAO 报名表。"
            },
            {
              "speaker": "zhou",
              "text": "「你动作真快。这张表在我物理书底下压得都快包浆了。」"
            },
            {
              "speaker": "lin",
              "text": "「因为你一直在用『准备』来掩饰自己不敢下决定。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "这句话实在太不客气了。我刚想回怼，教室后门突然被人一把推开。"
            },
            {
              "speaker": "xia",
              "text": "「林澈，你果然在盯人改题。走，去空教室开会。」",
              "focus": "xia",
              "clear": true,
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「这位是？」"
            },
            {
              "speaker": "xia",
              "text": "「夏南星，高三，天文社社长。物理老头说你有点底子，让我来看看。现在看来，底子有点漏风啊。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「社长好。我这只是……偶尔大脑短路。」"
            },
            {
              "speaker": "xia",
              "text": "「短路不要紧，只要别在考场上断电就行。社团今年走精英路线——其实就是招不到人。我们要开个初赛临时集训，现在就林澈一个确定的。你，报不报？给个痛快话，我还要赶回去写我的理综卷子。」",
              "focus": "xia"
            },
            {
              "speaker": "narrator",
              "text": "她说话像赶着去投胎，完全没有我预想中那种“天文社招新”的浪漫和热血。那叠A4纸最上面，赫然印着历年真题的球面三角大题，密密麻麻的数字看着让人头皮发麻。"
            },
            {
              "speaker": "zhou",
              "text": "「临时集训……具体练什么？我先声明，我基础很烂，天体力学基本靠蒙。」"
            },
            {
              "speaker": "xia",
              "text": "「练什么？练怎么在看到天体坐标系转换题时不要两眼一黑。周三、周五放学后刷真题，周末去天台认星。受不了就直说，别占名额。」",
              "focus": "xia"
            },
            {
              "speaker": "lin",
              "text": "「我周三和周五可以。周末晚上如果是晴天，我家里同意我留校。」",
              "focus": "lin"
            },
            {
              "speaker": "xia",
              "text": "「行。周行，你呢？」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「我？我还在观望……」",
              "choice": [
                {
                  "text": "把顾虑说出口。",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「不是不想报。我是怕报完以后，第一周就掉队。」"
                    },
                    {
                      "speaker": "xia",
                      "focus": "xia",
                      "text": "「怕可以。别拿怕当请假条。」"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「掉队可以补。一直站在门口，补不了。」"
                    }
                  ]
                },
                {
                  "text": "先把退路收掉。",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「那你们先别把报名表收走。」"
                    },
                    {
                      "speaker": "xia",
                      "focus": "xia",
                      "text": "「怎么，怕等会儿又想跑？」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「怕。所以先放我桌上。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "话一出口，我自己都觉得有点莽。但那张表压在桌角时，反而比刚才顺眼了。"
                    }
                  ]
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「你刚才 LST 减赤经的公式已经写对了，代入数值只需要两分钟。你连算个 H 都要观望，是打算观望到初赛结束吗？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我不是……」"
            },
            {
              "speaker": "xia",
              "text": "「痛快点。高二的时间不值钱吗？你要是怕被这叠真题虐死，现在就把报名表撕了，回去好好写你的五三。」",
              "focus": "xia"
            },
            {
              "speaker": "narrator",
              "text": "一个拿着秒表逼人的高三学姐，一个像纠错机器一样的同年级学霸。这种被按在案板上的感觉让人很不爽，但又莫名有种“如果不签就是个逃兵”的窝火感。"
            },
            {
              "speaker": "zhou",
              "text": "「签就签。但先说好，我要是拉低了集训的平均分，你们别后悔。」"
            },
            {
              "speaker": "xia",
              "text": "「后悔也是物理老头后悔，关我什么事。走，换个地方，这教室味儿太冲了。」",
              "focus": "xia"
            },
            {
              "speaker": "narrator",
              "text": "门牌上的星座贴纸已经褪色卷边。角落里堆着几个沾灰的赤道仪箱子，空气里有股淡淡的纸张发霉的味道。",
              "bg": "clubroom",
              "clear": true,
              "transition": {
                "title": "3月19日 放学后",
                "subtitle": "天文社教室"
              },
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "xia",
              "text": "「第一阶段训练表。别光看标题，看里面的死线。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「周三时间系统测验？周五天体力学偏心率和半长轴推导？社长，这叫临时集训？这叫物理组的斯巴达冬令营吧！」"
            },
            {
              "speaker": "lin",
              "text": "「学姐，周五放天体力学不现实。我们班周四有数学小测，周五还要做这种椭圆轨道的推导，我怕算到最后连 a 和 b 的参数关系都搞混。」",
              "focus": "lin"
            },
            {
              "speaker": "xia",
              "text": "「行，你们是活人，不是做题机器。周五换成星图识别和条件近似判断。天体力学推到周末。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「原来还能讨价还价的吗？」"
            },
            {
              "speaker": "lin",
              "text": "「训练表是用来执行的，不是用来当摆设的。如果遇到作业多或者小测，硬抗只会导致两边都崩盘。你遇到冲突不提出来吗？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我以前一般都是……默默开摆。」"
            },
            {
              "speaker": "xia",
              "text": "「在这里开摆，我会把你顺着窗户扔出去。现在，各自写下自己最容易死在考场上的短板。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「天球坐标转换老是绕进去、天体力学公式记不住、还有……读题漏条件。」"
            },
            {
              "speaker": "lin",
              "text": "「不完整题干的近似判断。比如题目没给观测地纬度，也没说忽略大气折射，我就不知道该不该把视差算进去，容易卡住。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你连这种细节都会卡住？我遇到这种题一般直接默认出题人是好心人，当它不存在直接算。」"
            },
            {
              "speaker": "lin",
              "text": "「出题人从来不是好心人。他们只会挖坑。你那不叫解题，叫盲人摸象。」",
              "focus": "lin"
            },
            {
              "speaker": "xia",
              "text": "「很好。周行容易瞎默认，林澈容易想太多钻牛角尖。从明天开始，你们俩隔天互相讲自己的错题。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「互相讲？讲我怎么把平太阳时和恒星时搞混的吗？这算什么，公开处刑？」"
            },
            {
              "speaker": "lin",
              "text": "「错题不讲，它就永远是坑。明天你先讲赤经差那道题，说清楚你第一步为什么会想加修正项。」",
              "focus": "lin",
              "choice": [
                {
                  "text": "答应明天先讲。",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「行。明天我讲。先说好，笑太大声我会停。」"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「不笑。记错因。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「你这比笑还吓人。」"
                    }
                  ]
                },
                {
                  "text": "今晚先整理定义。",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「那我今晚先把时间系统重抄一遍。明天讲错之前，至少别把定义也讲错。」"
                    },
                    {
                      "speaker": "xia",
                      "focus": "xia",
                      "text": "「可以。别抄漂亮，抄有用。」"
                    },
                    {
                      "img": "linThinking",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「把负数高度角也留着。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「留罪证？」"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「留入口。」"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ch1-s3",
          "title": "天台与脏橘色夜空",
          "lines": [
            {
              "speaker": "narrator",
              "text": "推开天台的铁门，四楼的穿堂风直接灌进脖子里。城市底部的霓虹灯和远处的探照灯把低空映成了一片浑浊的脏橘色。别说银河，连原本该黑透的天幕都像褪色的劣质幕布。",
              "bg": "rooftop",
              "clear": true,
              "transition": {
                "title": "周五 傍晚",
                "subtitle": "天台观测"
              },
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "xia",
              "text": "「铁门关上！风太大，寻星镜的螺丝都要被吹松了。周行，别傻站着，过来帮忙压住这根腿。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「社长，这天台风也太邪门了。而且这天亮得跟傍晚似的，真能看见星星？」"
            },
            {
              "speaker": "lin",
              "text": "「今天视宁度很差，但春季大曲线的高仰角亮星应该能穿透光害。先把手机都扣过去，别看白光，破坏暗适应。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我已经开始觉得天上全是白点了，也不知道是星星还是我眼花。」"
            },
            {
              "speaker": "xia",
              "text": "「这破镜子的极轴到底是谁调的……你们俩，先去练肉眼认星。目标：北斗、大角、角宿一。找不到别过来烦我。」",
              "focus": "xia"
            },
            {
              "speaker": "narrator",
              "text": "夏南星去跟那台快散架的望远镜死磕了。林澈走到天台边缘避风的矮墙后，翻开用黑色长尾夹死死夹住的观测记录本。",
              "hide": [
                "xia"
              ],
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我看了三分钟了，除了左边那架一闪一闪的民航客机，我什么都没认出来。」"
            },
            {
              "speaker": "lin",
              "text": "「先找北斗七星的斗身。别想得太清楚，光害吃掉了两颗暗星，你只能看到一个残缺的勺子。顺着斗柄的弧度，往东南方向延伸大概三十度。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「延伸三十度……好，我好像看到一颗稍微亮一点的。橙黄色的？这就是大角星？」"
            },
            {
              "speaker": "lin",
              "text": "「对，牧夫座 α。它视星等够高，这种天况也能看清。接下来是难点，继续顺着这个弧度往南，找室女座的角宿一。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "我顺着大角星往下看。南边的天空正好在商场大屏幕的正上方，漫反射的光污染让那片区域简直是一块惨白的光斑。"
            },
            {
              "speaker": "zhou",
              "text": "「不行，角宿一仰角太低了吧？完全被商场的光害吞了，我连个鬼影都看不见。」"
            },
            {
              "speaker": "lin",
              "text": "「含着，你刚才一直在吸冷风。找不到别硬盯。」",
              "focus": "lin",
              "img": "linCasualThinking"
            },
            {
              "speaker": "zhou",
              "text": "「嘶……这糖配着天台的风，简直提神醒脑。你确定角宿一今天能看见？」"
            },
            {
              "speaker": "lin",
              "text": "「用侧视法（Averted Vision）。」",
              "focus": "lin",
              "img": "linCasualNeutral"
            },
            {
              "speaker": "zhou",
              "text": "「什么法？」"
            },
            {
              "speaker": "lin",
              "text": "「眼睛的黄斑区对强光敏感，但周边的视杆细胞对暗光更敏感。别死盯着你想看的位置。视线稍微偏开五到十度，用余光去抓那个微弱的光点。」",
              "focus": "lin",
              "img": "linCasualThinking"
            },
            {
              "speaker": "narrator",
              "text": "我把视线从那片死白的光斑上稍微移开，盯着旁边的一块暗区。冷风吹得我眼眶发酸。"
            },
            {
              "speaker": "narrator",
              "text": "就在我快要放弃去揉眼睛的瞬间，余光里真的浮现出一个极其微弱、断断续续闪烁的亮点。它就在脏橘色的天际线上方，挣扎着没有被吞没。"
            },
            {
              "speaker": "zhou",
              "text": "「看到了！我靠，真的在！闪得跟接触不良的灯泡一样！」"
            },
            {
              "speaker": "lin",
              "text": "「记下来。时间，方位东南，仰角估计二十度。备注：极强光害，侧视法确认。」",
              "focus": "lin",
              "img": "linCasualNeutral"
            },
            {
              "speaker": "zhou",
              "text": "「这风简直有病……你按着左边，我帮你按右边，不然没法写字了。」"
            },
            {
              "speaker": "lin",
              "text": "「……你别按在网格线上。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "借着暗红色的手电光，我在她画好的那条有些歪斜的春季大曲线最底端，重重地点了一个点，标上“Spica（角宿一）”。手底下是冰凉的纸面，旁边是她因为用力而骨节泛白的手指。",
              "bg": "cgCh1RooftopSpica",
              "clear": true
            },
            {
              "speaker": "xia",
              "text": "「你们两个认完没有！过来帮我打手电！这破赤纬轴卡死了！」",
              "focus": "xia"
            },
            {
              "speaker": "lin",
              "text": "「来了。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "我把冻僵的手揣进口袋里。再次抬头看向南边的天空时，那个属于角宿一的微弱光点又被光害吞没了。但没关系，哪怕天上糊成一团，我知道它确实就在那里。"
            }
          ]
        }
      ]
    },
        {
      "id": "ch2",
      "title": "第二章：雨线和误差",
      "sections": [
        {
          "id": "ch2-s1",
          "title": "顾望舒的红笔",
          "lines": [
            {
              "bg": "libraryRain",
              "clear": true,
              "speaker": "system",
              "text": "第二章：雨线和误差"
            },
            {
              "speaker": "narrator",
              "text": "我们还没来得及对答案，一个女生拉开对面的椅子坐下了。她校服外套的袖口湿了一片，但手里拍在桌上的透明文件夹却滴水不沾，里面的卷子边角对得严丝合缝。",
              "clear": true,
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "xia",
              "text": "「顾望舒，附中那边的。去年省队候补，今年几套模拟卷的分数没下过前三。今天来跟我们对题库。」",
              "focus": "xia",
              "clear": true,
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「学姐，你这介绍简直是公开处刑的前奏。」"
            },
            {
              "speaker": "wangshu",
              "text": "「第十七题，谁写了？」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「我写了个大题的『解』，严格来说，这道题在我的卷面上还不具备生命体征。」"
            },
            {
              "speaker": "lin",
              "text": "「我推到了半长轴那一步，后面时间到了。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "left"
                },
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「这题官方给的标准答案是错的。」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「答案错了？那我这波全空着岂不是完美避险？」"
            },
            {
              "speaker": "wangshu",
              "text": "「别做梦了，你空着单纯是因为你不会。」",
              "focus": "wangshu"
            },
            {
              "speaker": "lin",
              "text": "「错在哪里？近似条件？」",
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「对。题干没给偏心率 $e$ 的具体量级。官方答案在做泰勒展开的时候，直接把二阶项 $O(e^2)$ 给扔了。」",
              "focus": "wangshu",
              "img": "wangshuSharp"
            },
            {
              "speaker": "zhou",
              "text": "「$e$ 是偏心率我知道……但扔个二阶项怎么就错了？」"
            },
            {
              "speaker": "wangshu",
              "text": "「如果选项 A 和 B 的间距很大，粗略近似当然没问题。但这题 C 和 D 的数值咬得很紧，你把 $O(e^2)$ 截断丢掉的误差，足够让你算出错误选项。CNAO 初赛确实很少考完整展开，但出题人经常在这个精度上挖坑。」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「靠，这种套个公式就能出结果的题，居然藏着泰勒展开的坑？」"
            },
            {
              "speaker": "wangshu",
              "text": "「越像能秒杀的熟题，死得越惨。」",
              "focus": "wangshu"
            },
            {
              "speaker": "narrator",
              "text": "桌面安静了两秒。林澈的视线落在自己那张写满分类的草稿纸上。她右手按在纸角，想把纸推过去，手指却僵了一下，指骨微微泛白。错题好拿，但这种写满纠结过程和错误思路的草稿，拿给满分选手看，等于直接扒底裤。",
              "show": [
                {
                  "id": "lin",
                  "img": "linAnxious",
                  "pos": "left"
                },
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "right"
                }
              ],
              "choice": [
                {
                  "text": "先把自己的空白卷摊开。",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「别只看她的。我的第十七题也没比废纸强多少。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "我把空白那一页推到桌子中间。纸面干净得刺眼，连错都没来得及错。"
                    },
                    {
                      "speaker": "wangshu",
                      "focus": "wangshu",
                      "text": "「空白也要标原因。不会、来不及、还是看错题意，三种处理方式不一样。」"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「那先标原因。别直接跳到自责。」"
                    }
                  ]
                },
                {
                  "text": "让林澈先把草稿递出去。",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「给她看吧。反正顾望舒要挑错，藏着也不会少错一行。」"
                    },
                    {
                      "img": "linAnxious",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「你说得很难听。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「但比一直攥着纸角强。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "林澈看了我一眼，手指松开了一点。那张写满分类的草稿纸终于滑到了桌子中央。"
                    }
                  ]
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「第十四题。我标了『条件不完整』。你帮我看一眼，这到底是近似条件误判，还是我没读懂它的观测前提？」",
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「混合型错误。你前面卡住，是因为没判断出这题考的是坐标转换而不是仪器误差。这题其实只用一阶近似就够了。」",
              "focus": "wangshu"
            },
            {
              "speaker": "lin",
              "text": "「……那我这分类该写哪个？」",
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「考场上没空让你搞学术研究。看不透出题人意图就直接标待复核，跳。晚上回去再慢慢拆它的误差项。题库整理不是为了出一本完美无缺的出版物。」",
              "focus": "wangshu"
            },
            {
              "speaker": "lin",
              "text": "「知道了。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你刚才把纸推过去的时候，表情像要去炸碉堡。」"
            },
            {
              "speaker": "lin",
              "text": "「闭嘴。把你的空白卷拿出来标 $O(e^2)$。」",
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「行了。明天午休换附中的题库，地点你们定。每组交五道题，附上断点和错因。别在便签上写『欢迎挑错』这种废话，交过来的东西我默认你们已经查过底线了。」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「附中的人平时连呼吸都这么高压吗……」"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒雷厉风行地收起东西，红笔的笔尖还在卷面上留下一道浅浅的凹痕。那道关于 $O(e^2)$ 的推导此刻正张牙舞爪地摆在我们面前。要么自己硬啃下来，要么就顺着顾望舒指出的坑直接跳过。"
            }
          ]
        },
        {
          "id": "ch2-s2",
          "title": "题库交换",
          "lines": [
            {
              "speaker": "narrator",
              "text": "第二天午休，我们班教室里全是饭菜的油烟味。我把不锈钢饭盒推到课桌左上角，右边硬生生腾出一块干净的地方摊开错题本。为了防止油渍溅上去，我连夹个鸡腿都小心翼翼。",
              "bg": "classroom",
              "clear": true,
              "transition": {
                "title": "第二天 午休",
                "subtitle": "题库交换"
              }
            },
            {
              "speaker": "chen",
              "text": "「你现在吃饭都得拿卷子下饭了？看着上面那些天书你不反胃吗？」",
              "focus": "chen",
              "clear": true,
              "show": [
                {
                  "id": "chen",
                  "img": "chenNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「少废话。我这叫争分夺秒。」"
            },
            {
              "speaker": "chen",
              "text": "「得，林澈同学又来空投题库了。你们这学术辐射圈太强，我去走廊吃。」",
              "focus": "chen"
            },
            {
              "speaker": "narrator",
              "text": "陈砚脚底抹油溜了。林澈把自己的饭盒放在一边，解开那个鼓鼓囊囊的透明文件夹，抽出几张打印纸。",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "文件夹封面贴着张黄色的便签，最上面写着『附中题库第一批』。下面那行『未完全校对』，被她用浅灰色的中性笔来回描了好几遍，纸面都快被划破了。"
            },
            {
              "speaker": "zhou",
              "text": "「你这字描得这么深，是怕顾望舒看不见，还是怕她看见？」"
            },
            {
              "speaker": "lin",
              "text": "「怕她直接拿着红笔在这页上批注。」",
              "focus": "lin",
              "img": "linThinking"
            },
            {
              "speaker": "zhou",
              "text": "「你眼底都有黑眼圈了。昨晚到底几点睡的？」"
            },
            {
              "speaker": "lin",
              "text": "「十一点四十。不算太晚。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「十一点四十？就为了纠结这道题到底是『近似条件误判』还是『观测前提缺失』，你硬生生熬了快一个小时？」"
            },
            {
              "speaker": "lin",
              "text": "「不分清楚的话，这套题交过去就是一团烂账。顾望舒昨天说的『待复核』，我看着难受。」",
              "focus": "lin",
              "img": "linAnxious"
            },
            {
              "speaker": "zhou",
              "text": "「大姐，你真以为自己是数据库啊？遇到不确定就死卡。你这叫过度强迫症。」"
            },
            {
              "speaker": "lin",
              "text": "「别在我的原稿上乱画！」",
              "focus": "lin",
              "img": "linPout"
            },
            {
              "speaker": "narrator",
              "text": "她用修正带把周行画的勾狠狠盖住，然后毫不客气地伸手把我错题本上的标题『万能模板』四个字直接划成一团黑泥。"
            },
            {
              "speaker": "lin",
              "text": "「世界上没有万能模板。只要条件一换，你的万能就是送命。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「行，临时模板。先圈显式条件，再标默认近似，先算主项，复盘再补误差。这总行了吧？」"
            },
            {
              "speaker": "lin",
              "text": "「还要加一句：限时版不准跳无关步骤。」",
              "focus": "lin",
              "choice": [
                {
                  "text": "把模板压成限时版。",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「那就写两栏。限时版一栏，复盘版一栏。考试先活下来，晚上再赎罪。」"
                    },
                    {
                      "img": "linThinking",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「‘赎罪’不严谨。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「那叫误差补偿。听起来科学一点。」"
                    },
                    {
                      "img": "linNeutral",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「可以。限时版必须标省略项。」"
                    }
                  ]
                },
                {
                  "text": "先护住林澈的原稿。",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「我不画了。原稿你留着，我另起一页写考试版。」"
                    },
                    {
                      "img": "linAnxious",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「你刚才已经画了。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「所以现在止损。你不是最喜欢这个词吗？」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "她把修正带收回去，还是皱着眉，但没再把我的标题划第二遍。"
                    }
                  ]
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「复盘不代表要把一整页纸的废话重新推一遍啊！考试时间本来就不够。」"
            },
            {
              "speaker": "lin",
              "text": "「不推完整，你下次还是会漏。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "我们正为要不要重写公式吵得不可开交，前排的同学突然转过头，手里拿着张报纸。"
            },
            {
              "speaker": "classmate",
              "text": "「周行，你们这卷子上怎么满篇都是『偏心率』？这词儿听着挺适合形容你最近这疯魔状态的啊。」"
            },
            {
              "speaker": "lin",
              "text": "「偏心率是描述圆锥曲线形状的几何参数，$e = c/a$。不能用来形容人类的精神状态。」",
              "focus": "lin"
            },
            {
              "speaker": "classmate",
              "text": "「……哦，打扰了，学霸们继续。」"
            },
            {
              "speaker": "narrator",
              "text": "那同学灰溜溜地转回去了。我憋笑憋得差点被米饭呛到。"
            },
            {
              "speaker": "lin",
              "text": "「你笑什么？我刚才解释错了吗？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「没，解释得非常精准。他这辈子都不会忘掉 $e = c/a$ 了。」"
            },
            {
              "speaker": "xia",
              "text": "「别笑了，进度。题库整理完没？午休快结束了。」",
              "focus": "xia",
              "clear": true,
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「她为了一个分类，昨晚磕到十一点四十。目前还有一道题挂着『待复核』。」"
            },
            {
              "speaker": "xia",
              "text": "「林澈，今晚十一点前必须睡觉。哪怕这题的分类写的是『未知外星语』你也得给我睡。周行，你负责在微信上轰炸她睡觉。」",
              "focus": "xia"
            },
            {
              "speaker": "lin",
              "text": "「我不需要……」",
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「时间到。」",
              "focus": "wangshu",
              "clear": true,
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "顾望舒不知道什么时候出现的。她那支标志性的红笔就别在文件夹的封口处。她连看都没看便签上那行极小的字，直接把另一叠订好的A4纸拍在我们桌上。"
            },
            {
              "speaker": "wangshu",
              "text": "「附中第二批，五道题。第一题和第三题，我故意保留了两种完全不同的解法。其中一种的近似条件是错的。」",
              "focus": "wangshu",
              "img": "wangshuSharp"
            },
            {
              "speaker": "zhou",
              "text": "「你这是交换题库还是投放地雷？」"
            },
            {
              "speaker": "wangshu",
              "text": "「考场上没人会告诉你哪条路是死胡同。找不出那个被藏起来的误差项，这两道题你们就全错。」",
              "focus": "wangshu"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒扔下这颗炸弹，干脆利落地走人。"
            },
            {
              "speaker": "narrator",
              "text": "周围的同学已经开始陆续趴下睡觉了。林澈默默打开自己的饭盒，里面打了包的青菜已经彻底变黄，米饭也凝成了一坨。她盯着饭盒看了一会儿，没有动筷子。"
            },
            {
              "speaker": "zhou",
              "text": "「陈砚早上多买的，还没开封，常温的。食堂这会儿全剩残羹冷炙了，你拿这个垫一下。」"
            },
            {
              "speaker": "lin",
              "text": "「……你呢？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我喝水就行。赶紧拿着，等会儿打预备铃了。」"
            },
            {
              "speaker": "lin",
              "text": "「……谢谢。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她没再说那些“保护进度”之类的废话。只是在喝豆浆之前，她默默拔开笔帽，在我那页被改得面目全非的『临时模板』旁边，极其认真地补上了一行小字：（限时执行优先）。",
              "img": "linNeutral"
            },
            {
              "speaker": "narrator",
              "text": "在这个连呼吸都觉得浪费时间的午休，看着那几个字，我突然觉得那些被附中题库支配的窒息感，似乎也稍微透进了一点气。"
            }
          ]
        },
        {
          "id": "ch2-s3",
          "title": "第一次争执",
          "lines": [
            {
              "speaker": "narrator",
              "text": "雨下到第三天，整个学校像泡在温水里一样发霉。物理作业本的边角受潮卷了起来，教室后排那扇关不严的铝合金窗户被风吹得哐当直响。",
              "bg": "libraryRain",
              "clear": true,
              "transition": {
                "title": "雨下到第三天",
                "subtitle": "第一次争执"
              }
            },
            {
              "speaker": "narrator",
              "text": "下午最后一节课，数学老师敲着黑板宣布下周周测范围时，我脑子里绷着的那根弦终于“咔”地断了。初赛还有不到一个月，月考、作业、再加上附中那种变态级别的题库全挤在一起，时间根本不够分。"
            },
            {
              "speaker": "narrator",
              "text": "放学后去了图书馆。顾望舒发来了第一批题库的批改反馈。入眼就是一片刺目的红字，其中一条直戳林澈的软肋：“近似条件标注不足，限时策略可保留，但需说明误差量级风险。”"
            },
            {
              "speaker": "lin",
              "text": "「她批得对。我们那题确实没写清楚误差来源。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linAnxious",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你能不能偶尔站在我们这边？她随便写句评语，你又要去重推一遍？」"
            },
            {
              "speaker": "lin",
              "text": "「我站在物理规律这边。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "走廊里人来人往，我们谁都没再说话。她走在我前面半级台阶，脚步比平时快，像被顾望舒的红笔一路追杀。"
            },
            {
              "speaker": "narrator",
              "text": "附中第二批题库劈头盖脸地砸下来。第一道天体测量题，题干里只给了一句“存在微小角偏移”。林澈看到这几个字，立刻停了笔，翻出她那张写得密密麻麻的补充表。我看着她慢吞吞查表的动作，无名火直接窜了上来。"
            },
            {
              "speaker": "zhou",
              "text": "「这题直接按限时版走吧。选项 A 和 C 差了十万八千里，主项算出来就能蒙对。」"
            },
            {
              "speaker": "lin",
              "text": "「选项差距大也不能乱用。题干没给具体角度，$\\sin \\theta \\approx \\theta$ 的前提是 $\\theta$ 必须用弧度制，而且它省掉了二阶泰勒展开后 $O(\\theta^3)$ 的高阶项。如果不估算精度直接丢，这叫瞎蒙。」",
              "focus": "lin",
              "img": "linThinking"
            },
            {
              "speaker": "zhou",
              "text": "「这他妈是初赛的选择题！不是让你去写分析力学论文！要是每道题都把高阶项补齐，这套卷子今天做到闭馆也做不完！」"
            },
            {
              "speaker": "lin",
              "text": "「不标条件，你就会以为自己真的懂了。那是在骗自己。」",
              "focus": "lin",
              "img": "linAnxious"
            },
            {
              "speaker": "narrator",
              "text": "这句话像一根针一样狠狠扎进了我的神经。连日来的焦虑、被附中碾压的自卑，在这个瞬间全变成了带刺的防御机制。"
            },
            {
              "speaker": "zhou",
              "text": "「那你觉得怎么才叫不骗自己？每道题都推导到顾望舒也挑不出毛病？你每次都这样，遇到点不确定就原地死磕。你这不是严谨，你就是怕错！你怕一旦跳了步骤，就暴露出你其实根本没把握！」"
            },
            {
              "speaker": "narrator",
              "text": "话一出口，我就知道自己犯了浑。林澈没有像往常那样冷冰冰地反驳我。她整个人往后退了半寸，像被烫到一样缩回手。",
              "choice": [
                {
                  "text": "立刻把话收回来。",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「不对，这句过了。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「我不是想说你怕错。我是急。急得开始乱咬人。」"
                    },
                    {
                      "img": "linAnxious",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「……你刚才确实像在咬人。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "她没有原谅，也没有继续反击。只是那根被我扯紧的线，没有在这一秒彻底断掉。"
                    }
                  ]
                },
                {
                  "text": "先把卷子做完。",
                  "effects": {
                    "discipline": 1,
                    "trust": -1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「算了，先做题。闭馆前至少把这一页推完。」"
                    },
                    {
                      "img": "linAnxious",
                      "speaker": "lin",
                      "focus": "lin",
                      "text": "「可以。按你说的走。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "她答应得太快。我明明赢了进度，却觉得桌面一下空了一块。"
                    }
                  ]
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「……你说得挺直接。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我不是那个意思……」"
            },
            {
              "speaker": "lin",
              "text": "「没事。先做题吧。不是说时间不够吗？按你说的走。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她没有摔笔，没有发火，只是把所有的坚持和问号全藏了回去。这种压抑的顺从比直接扇我一巴掌还让我难受。"
            },
            {
              "speaker": "xia",
              "text": "「停笔。你们俩现在的状态，写出来的东西也是一坨垃圾。」",
              "focus": "xia",
              "clear": true,
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linAnxious",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「学姐，我们在讨论做题策略……」"
            },
            {
              "speaker": "xia",
              "text": "「策略？把对方的焦虑当成靶子打，这叫策略？林澈死抠细节，因为怕一步错步步错；你周行急着跳步骤，因为怕被附中的人当成废物甩开。你们俩把自己的恐慌扔给对方，挺能耐啊？」",
              "focus": "xia"
            },
            {
              "speaker": "narrator",
              "text": "夏南星的话糙得像砂纸，却把我们那点不堪的伪装刮得一干二净。"
            },
            {
              "speaker": "zhou",
              "text": "「刚才那句『你怕错』是我犯浑。我确实是急了，我想赶紧把分拿满，证明我们没被甩下。」",
              "img": "linAnxious"
            },
            {
              "speaker": "lin",
              "text": "「……我也有问题。我一直逼你查条件，其实是因为我不敢承担跳步骤带来的失控感。」",
              "focus": "lin"
            },
            {
              "speaker": "xia",
              "text": "「行了，少在这儿伤春悲秋。规矩我来定：限时训练，允许用近似，但省略处必须标出 $O(\\theta^3)$ 这种误差项留给复盘。现在，卡条件的时间上限，你们自己定一个。」",
              "focus": "xia"
            },
            {
              "speaker": "zhou",
              "text": "「三分钟。超了就强制后置。」"
            },
            {
              "speaker": "lin",
              "text": "「五分钟。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「四分钟。」"
            },
            {
              "speaker": "lin",
              "text": "「四分半。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「行，四分半。以后我跳得太快，你骂我；你卡得太久，我拦你。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈重新翻开那张补充表，在题号旁边用红笔写下『小角近似，限时标 $O(\\theta^3)$』。第一次争执没有变成什么温柔回忆，那根刺依然扎在那里，但至少我们给它贴上了安全标签。"
            }
          ]
        },
        {
          "id": "ch2-s4",
          "title": "雨停前的约定",
          "lines": [
            {
              "speaker": "narrator",
              "text": "图书馆闭馆前十分钟的广播响了。窗外的暴雨终于小了一点，变成淅淅沥沥的水线，教学楼的轮廓慢慢从灰白色的水雾里显出来。",
              "bg": "libraryRain",
              "clear": true,
              "transition": {
                "title": "闭馆前",
                "subtitle": "雨停前的约定"
              }
            },
            {
              "speaker": "narrator",
              "text": "桌上的台灯照着那一堆乱七八糟的错题和限时卷。林澈正在把试卷按题号一张张收进文件夹，动作比平时慢得多。她没看我，那道我们刚刚吵过架的题，被她单独夹在错题本的第一页。"
            },
            {
              "speaker": "zhou",
              "text": "「……东门那边地势低，刚才雨下那么大肯定有积水。你等会儿回宿舍走西门吧。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linAnxious",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「西门在铺管道施工，有泥浆。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「林澈。刚才……那句『你怕错』，是我脑子抽了。」"
            },
            {
              "speaker": "lin",
              "text": "「……」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我不该那么吼你。我当时看着时间一分一秒没，脑子全乱了。看你慢条斯理地查条件，我就……想让你闭嘴。」"
            },
            {
              "speaker": "narrator",
              "text": "把“想让你闭嘴”这几个字坦白出来，我自己都觉得难听得刺耳。"
            },
            {
              "speaker": "lin",
              "text": "「我听出来了。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「对不起。」",
              "img": "linAnxious"
            },
            {
              "speaker": "lin",
              "text": "「我也有病。我不敢跳步骤，是因为我知道自己没那么聪明。顾望舒随便一句话就能把我的分类推翻，如果不把条件死死攥在手里，我怕我连自己到底会不会都分不清。」",
              "focus": "lin",
              "img": "linAnxious"
            },
            {
              "speaker": "zhou",
              "text": "「你平时……看着不像没底气的样子啊。」"
            },
            {
              "speaker": "lin",
              "text": "「装的。因为不想被你们，被附中的人当成拖后腿的。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "图书馆的冷光灯打在她脸上。她没有哭，也没有委屈得掉眼泪，只是一种被高压题海和自卑感榨干了的疲惫。那种累我太熟了——就像一道大题死磕了三页草稿纸，却发现第一步的方向就是错的。"
            },
            {
              "speaker": "xia",
              "text": "「快点收拾。管理员已经拿着钥匙在瞪我们了。你们俩要是还没吵完，去操场上淋着雨继续。」",
              "focus": "xia",
              "clear": true,
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linAnxious",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「吵完了学姐。我们在进行战术复盘。」"
            },
            {
              "speaker": "xia",
              "text": "「复盘得出什么结论了？是周行以后瞎代公式，还是林澈继续和条件同归于尽？」",
              "focus": "xia"
            },
            {
              "speaker": "lin",
              "text": "「结论是这个。」",
              "focus": "lin",
              "img": "linNeutral"
            },
            {
              "speaker": "narrator",
              "text": "那是她的近似条件整理表。但在最上面，用红笔重重加了一行字：【限时必须标出省略项（如 $O(\\theta^3)$），复盘死磕。卡题超4.5分钟，强制后置。】"
            },
            {
              "speaker": "zhou",
              "text": "「这算操作说明书？」"
            },
            {
              "speaker": "lin",
              "text": "「算止损协议。如果你以后跳步不标误差，我还是会骂你。」",
              "focus": "lin",
              "img": "linThinking"
            },
            {
              "speaker": "zhou",
              "text": "「行。那你以后卡在条件上超过四分半，我直接拿红笔划掉你的题号，你不许翻脸。」"
            },
            {
              "speaker": "lin",
              "text": "「……四分半。一秒都不能少。」",
              "focus": "lin",
              "img": "linNeutral"
            },
            {
              "speaker": "narrator",
              "text": "走出图书馆时，地面湿漉漉的，冷风一吹，我冻得打了个寒颤。"
            },
            {
              "speaker": "lin",
              "text": "「豆浆钱微信转你了。」",
              "focus": "lin",
              "bg": "schoolBuildingEntranceNight",
              "clear": true
            },
            {
              "speaker": "zhou",
              "text": "「你非要在刚吵完架、刚达成和解的时候，把账算得这么清吗？」"
            },
            {
              "speaker": "lin",
              "text": "「欠着会忘。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「那你明天请我吃颗薄荷糖吧。当利息。」"
            },
            {
              "speaker": "lin",
              "text": "「薄荷糖的物价和豆浆不等价。你数学怎么学的？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「加上精神损失费总够了吧。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈终于极轻地笑了一下。不是天台上那种敷衍的短笑，这次在她的眼底停留了大概两秒钟。",
              "img": "linSmile"
            },
            {
              "speaker": "lin",
              "text": "「明天见。别忘了复盘你的第六题。」",
              "focus": "lin",
              "img": "linNeutral"
            },
            {
              "speaker": "zhou",
              "text": "「明天见。进度管理员。」"
            },
            {
              "speaker": "narrator",
              "text": "雨后的空气透着一股发凉的泥土味。我把错题本紧紧护在校服外套里，里面夹着那张写满 $O(e^2)$ 和四分半后置的纸。没有热血沸腾的口号，也没有谁拯救谁的感动。对我们这种被初赛倒计时逼在悬崖边上的人来说，一份干巴巴的、能防止双双崩盘的“操作说明”，已经足够救命了。"
            }
          ]
        }
      ]
    },
    {
            "id": "ch3",
            "title": "第三章：初赛倒计时",
            "sections": [
                  {
                        "id": "ch3-s1",
                        "title": "三十天计划",
                        "lines": [
                              {
                                    "bg": "clubRoomEvening",
                                    "clear": true,
                                    "speaker": "system",
                                    "text": "第三章：初赛倒计时"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "距离 CNAO 初赛还有三十天。夏南星拿着满是黑色碎屑的板擦，在白板上狠狠擦拉了三遍。上周限时卷那惨不忍睹的平均分被强行抹掉，换上了一张用红色马克笔画的、密密麻麻的冲刺排期表。",
                                    "transition": {
                                          "title": "三十天倒计时",
                                          "subtitle": "三十天计划"
                                    }
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「温水煮青蛙的阶段结束了。从今天开始是倒计时压迫训练。跟不上的，自己填退部申请。」",
                                    "focus": "xia",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linTired",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "排期表刚画完，陈砚抱着个篮球从后门探进半个身子。他本来是来借打气筒的，看了一眼白板，表情瞬间像误闯了某个邪教传销现场。"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「我现在退出去还来得及吗？这白板看着不像天文社，像物理组的催命符。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「来得及。把球放下，顺手把那箱历年真题给我搬到桌上。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「社长！我只是个路过的普通人，不是来加入你们这支省队敢死队的！」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「放心，敢死队名额满了。我和林澈现在是被绑在同一根绳上的蚂蚱。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「把『敢死』两个字去掉。只要时间分配精确，这就只是高强度重复劳动。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「那这格为什么是用红笔涂满的？这看着像打游戏前的高危 Boss 预警。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「它确实是 Boss。掉落物是满纸的红叉和无尽的羞辱感。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「限时卷只是测量工具，用来测你哪里的基础还在漏水。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「林同学，你现在说话的语气，比这块白板还吓人。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "林澈没理他，把整理好的错题模板往我桌角推了推。紧接着，一个压扁的独立包装小面包也被她粗暴地甩了过来，精准地砸在我的草稿纸上。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「这也是测量工具？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「你晚自习前在座位上死磕了四十分钟的星历表推算，根本没去食堂。空腹做这种高强度计算，血糖一低你连儒略日的加减都会算错。吃掉。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你这种提供后勤保障的方式，真的很像长官在给填线步兵发口粮。」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「填线步兵赶紧吃。陈砚带着你的球滚蛋，别让它砸到赤道仪的脚架。现在复盘。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "夏南星从包里抽出一本边角已经翻毛的旧错题本，直接翻到中间的一页，拍在桌子上。"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「我高二第一次考省赛，把儒略日转换里那半天的偏移量给忘了，导致整道天体位置推算题差了十二个小时，直接零分。那道题的数字我到现在都能背下来。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「社长你也会在这种基础转换上翻车？」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「废话，我又不是吞了星表长大的。人在高压下脑子就是会短路。你们现在不是不够聪明，是缺少『慢一秒』的余量。每天把自己逼到极限，上了考场一慌就全碎了。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "林澈的笔尖停顿了一下。她盯着夏南星那页用红笔画了巨大叉号的错题，眼神微微闪烁。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「如果不逼紧一点，把每一秒都填满……在限时卷里根本做不完。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「做不完就学会扔！明天开始，做套卷前十分钟只干三件事：扫题、标地雷坑、划定放弃止损线。谁要是再敢拿到卷子就闷头从第一题死算，我就把他顺着窗户扔出去。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "散场时，窗外的操场只剩几盏昏黄的钠灯。楼下有体育生在练折返跑，胶鞋摩擦塑胶跑道的声音沉闷而单调。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「明早读前，我抽查你的星图。你可以顺便查我的错因分类。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「『重点：南天星图，船底座与船帆座』……你这是早有预谋吧？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「你上周限时卷在这两个星座上把赤经顺序搞反了两次。古代虽然叫南船座，但现在分开了，你再混用就是送分。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「林老师，能不提具体死因吗？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「不想被提，明天就别错。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「行。那我明早带两人份的包子。为了防止有人低血糖算错儒略日。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……不要豆浆，放桌上容易碰洒。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "林澈快步走出教室。我收拾资料时，余光瞥见她那张训练表——原本被夏南星强行划掉的两格休息时间，又被她用极细的铅笔偷偷补上了新的计算任务。我捏着错题本，停住了动作。",
                                    "choice": [
                                          {
                                                "text": "提醒林澈调整休息。",
                                                "effects": {
                                                      "trust": 1
                                                },
                                                "insert": [
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「林澈，把你刚才偷偷用铅笔加回去的那两格任务擦了。你这不是在复习，你这是在自毁。」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「放手。今天少算一组天体力学，明天限时卷的速度就会掉。」",
                                                            "focus": "lin",
                                                            "img": "linTired"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「你今天就算熬到凌晨两点把它算完，明天早读查星图的时候你脑子也是一团浆糊。把『强制停机休息』也当成一个实验数据，行不行？」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「……知道了。今晚只过错因，不碰新题。」",
                                                            "focus": "lin",
                                                            "img": "linTired"
                                                      }
                                                ]
                                          },
                                          {
                                                "text": "继续按计划冲刺。",
                                                "effects": {
                                                      "discipline": 1
                                                },
                                                "insert": [
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「既然非要加练，我们把题量压缩。只做容易掉坑的高频题，低频题直接扔到周末。」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「好。球面三角和星历表推算各留一道，必须带误差分析。」",
                                                            "focus": "lin",
                                                            "img": "linSmile"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「真服了你了。先保证我们能活着走到初赛考场吧。」"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "我们一起走出实验楼。走廊里的感应灯依次亮起，夜风把她文件夹里露出的纸角吹得哗啦啦直响。三十天的倒计时不再是一个虚无的数字，而是实打实压在肩膀上的重量。"
                                                      }
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "id": "ch3-s2",
                        "title": "一次观测失败",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "周六傍晚，气象局预报说有个极短的“晴窗”。夏南星在群里甩了一句“滚上天台”，我们就去器材室做苦力了。",
                                    "bg": "rooftopCloudy",
                                    "clear": true,
                                    "transition": {
                                          "title": "周六傍晚",
                                          "subtitle": "一次观测失败"
                                    }
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「别抱幻想，今晚云层极厚。目标：极轴粗调，确认两颗亮星坐标。什么都看不到就给我乖乖记录云底高度。」",
                                    "focus": "xia",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linOutdoor",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「靠……这玩意儿是实心的吗？天文社招新是不是应该先测硬拉重量？」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「少废话。这只是个轻型赤道仪，你应该庆幸我没让你们把那台重型 EQ6 还有 C9.25 的主镜筒扛上来。不然你现在已经断气了。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「今天低空气流极其紊乱。就算云散了，视宁度也会烂得像一锅粥。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「林同学，你报丧的语气总是这么专业而冷酷。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "推开天台铁门，狂风差点把我的校服外套直接掀翻。城市底部的钠灯光害把低空的云层映成了一种恶心的暗红色。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「夹住上下两端！风太大，纸吹飞了就白干了。还有，笔握紧，掉在地上这黑灯瞎火的根本找不着。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「知道。我绝对不会让它自由落体。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「别咬笔帽。你一遇到算不出来的题就喜欢咬笔帽，上次模拟考试那支笔的塑料壳都快被你咬碎了。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……在这种冻死人的天台，我没心思吃塑料。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我按照林澈给的坐标，艰难地拧动赤道仪的微调旋钮。寻星镜里除了大片泛着死灰色的云块，什么都没有。寒风像刀子一样刮在脸上，盯了十分钟空气，我心里的邪火越来越旺。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「这他妈能看见什么？除了云还是云。我们是在这儿练受冻抗性吗？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「观测题考的不只是星体坐标，还会考你为什么观测失败。大气的消光、视宁度恶化、光污染，这些都是考点。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「那直接编一个大角星的坐标不就行了？反正这鬼天气谁也查不出来。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "话说出口的瞬间我就想抽自己。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……数据可以编。但到了考场上，你遇到算不出来的题，也是直接编个答案假装自己懂了吗？」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……对不起。我脑子冻抽了。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「找不到就算了。但别骗自己。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「林澈这句真可以当座右铭了。就是有点冻人。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "撤退收三脚架时，我的手指早就冻得僵硬麻木，死活按不下一根脚管的金属锁扣。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「你手哆嗦成这样，别硬按，把螺丝滑丝了物理老师会杀了我们。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「没事，我能行……靠！」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「拿着。把手捂热了再拧。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你哪来的这玩意儿？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「本来是垫在夹板下面防潮的。现在临时借你恢复神经末梢功能。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「哦——原来暖宝宝是防潮用的，学到了学到了。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「陈砚，你去把最重的重锤给我提下去。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "陈砚哀嚎着跑去搬铁块了。我用僵硬的手指死死捏着那片发烫的暖宝宝，热意顺着掌心一点点蔓延上来。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「『风力过大，记录人员手部神经麻木导致操作失误』……你还真写进观测报告里了？！」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「这是影响观测的客观物理因素。走了，下楼。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "厚重的云层依然把星空遮得严严实实，冷风还在刮。但攥着手里那片温度，这场极其失败的天台观测，似乎也没有想象中那么让人烦躁了。"
                              }
                        ]
                  },
                  {
                        "id": "ch3-s3",
                        "title": "初赛前夜",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "初赛前夜。社团教室没有开大灯，夏南星说强光会刺激交感神经，让人产生“我还能再刷三套卷子”的致命错觉。",
                                    "bg": "clubRoomNight",
                                    "clear": true,
                                    "transition": {
                                          "title": "初赛前夜",
                                          "subtitle": "楼梯间"
                                    }
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「最后确认一遍。准考证、身份证原件、2B铅笔、黑色水笔两支、非编程科学计算器。没带齐的现在说，明天早上考场门口不接受任何借口，直接滚蛋。」",
                                    "focus": "xia",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linTired",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你那个便利贴都要被你戳破了。准考证长脚了也不会自己跑掉的。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「重复核对可以把遗漏的概率降到无限趋近于零。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「核对超过三遍，降低的就不是遗漏概率，是你今晚的睡眠质量。停手。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "就在这时，林澈放在桌角的手机震动了一下。屏幕上只弹出一条极短的消息预览：『明天别紧张，正常发挥就好。爸爸妈妈等你的好消息。』"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「家里发的？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……嗯。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「不想回可以不回。考前屏蔽外界期待也是战术之一。别在今晚搞什么表决心的小作文。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "社团教室安静得让人喘不过气。夏南星为了测试状态，随口抛出了几个天体力学的基础公式。前两个我磕磕绊绊接上了。"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「第三个。开普勒第三定律推导时，如果考虑双星系统的质量比，怎么处理近似？」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "林澈没有像往常一样秒答。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "这一秒的停顿被无限拉长。任何人在考前一晚都会忘词，这很正常。但林澈的呼吸开始变浅、变急，她的手指无意识地抠着桌子边缘，指关节惨白。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「没事，先跳过。你今天脑子已经超载了……」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「不应该跳过。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "她的声音在发抖。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……我去接水。水凉了。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「学姐……她这是怎么了？」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「考前惊恐发作。她不是忘了公式，她是被『如果我明天在考场上也这样脑子空白』这个念头给吓崩了。去楼道看着她，别讲题，别说废话，就让她喘口气。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我走到楼梯拐角。感应灯已经灭了，楼道里只有从气窗透进来的微弱路灯光，空气里弥漫着一股发酸的灰尘味。林澈靠在冰冷的水泥墙上，死死抱着那个保温杯，肩膀剧烈地颤抖着。",
                                    "bg": "stairwellNight",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "lin",
                                                "img": "linAnxious",
                                                "pos": "center"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「如果明天考砸了……如果过不了初赛……」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……那这一个月算什么？我整理的那五本错题算什么？我为了这个比赛连月考都退了十几名……如果考不出结果，在他们眼里，我就只是个打着爱好的幌子在浪费时间的笑话。」",
                                    "focus": "lin",
                                    "img": "linSmile"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「就算考砸了，错题本上的字又不会凭空消失。你骂我乱代公式的时候，逻辑可是相当严密的。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「那有什么用？没有成绩，所有过程都是狡辩。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「有用的。至少你把我从初赛分母的边缘拽回来了。」",
                                    "choice": [
                                          {
                                                "text": "陪她坐到冷静。",
                                                "effects": {
                                                      "trust": 1
                                                },
                                                "insert": [
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「其实我也怕得要死。我爸说我把稳定的路走窄了，我连反驳的底气都没有。如果明天我死在球面三角上，我大概会直接把卷子吃下去。」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「……吃卷子是违规的。」",
                                                            "focus": "lin"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「重点是这个吗？我的意思是，今天晚上，允许你觉得一切都没意义。允许你怕。」"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "感应灯亮了又灭。我就坐在离她不到半米的地方。没有说什么“都走到这一步了不能放弃”的鸡汤废话。十分钟后，她抱着保温杯的手指终于慢慢松开了，呼吸也恢复了正常的频率。"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「……走吧。回去把准考证收好。」",
                                                            "focus": "lin",
                                                            "img": "linSmile"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「明天要是遇到不会的条件？」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「标出误差，先算主项。四分半后置。」",
                                                            "focus": "lin"
                                                      }
                                                ]
                                          },
                                          {
                                                "text": "说“都走到这里了不能放弃”。",
                                                "effects": {
                                                      "discipline": 1,
                                                      "trust": -1
                                                },
                                                "insert": [
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「林澈，你清醒一点！我们熬了整整一个月，明天就是检验的时候，你现在崩溃有什么用？你准备得比任何人都充分，只要明天正常发挥，不可能过不了初赛！」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「……知道了。」",
                                                            "focus": "lin",
                                                            "img": "linAnxious"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「你别这样，考前状态很重……」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「我说我知道了。先过初赛。刚才失态了，抱歉。」",
                                                            "focus": "lin",
                                                            "img": "linAnxious"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "她把保温杯的盖子拧得死紧，大步走回社团教室。感应灯在她头顶亮起，她的背影挺得笔直，像是重新套上了一层无懈可击的壳。但我知道，那股把她压垮的恐惧，只是被她强行咽下去了，甚至没有消化。"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "回到社团教室，夏南星什么都没问，利索地锁了资料柜，把我们赶出了教学楼。"
                                                      },
                                                      {
                                                            "speaker": "xia",
                                                            "text": "「明早七点二十校门口集合。迟到一分钟，自己滚去跑操场。今晚谁敢再看一眼错题本，我保证他在进考场前先体验一次颅骨粉碎。」",
                                                            "focus": "xia"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「……学姐明天见。」",
                                                            "focus": "lin"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "校门外很冷，路灯把我和林澈的影子拉得很长。我们谁都没再提刚才楼梯间里的崩溃。明天的初赛没有因为刚才的发泄而变得简单半分，但至少，那一页满是红叉的试卷，终于翻过去了。"
                                                      }
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "id": "ch3-s4",
                        "title": "初赛",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "初赛当天早上，七点二十的校门口冷得像冰窖。空气里全是油条摊的白烟和考生翻动复习资料的哗啦声。",
                                    "bg": "schoolGateMorning",
                                    "clear": true,
                                    "transition": {
                                          "title": "初赛当天",
                                          "subtitle": "考点"
                                    }
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「最后两句话：扫全卷找地雷；卡题超四分半直接放弃。别在第一题就想证明你懂宇宙真理。」",
                                    "focus": "xia",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linNeutral",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……如果第一题就不会呢？」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「那就选 C，然后立刻看第二题。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「出了考场，绝对不要在校门口对答案。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你这句话是在警告我，还是警告你自己？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「都有。在出成绩之前，任何对答案的行为都是单方面精神自虐。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「进场。记住规则，别死磕。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我们在教学楼大厅分流。林澈的考场在三楼，我在二楼。走到二楼楼梯口时，我回头看了一眼，她正快步走上转角，背影僵硬得像一块拉满弦的木板。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "卷子发下来的瞬间，油墨的刺鼻气味直冲脑门。我强压下想要立刻动笔的冲动，按夏南星说的，花了两分钟扫视全卷。",
                                    "bg": "examRoom",
                                    "clear": true,
                                    "show": []
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "第二道大题，时间系统转换。题干赫然印着『地方恒星时』。我脑子里轰的一声，习惯性地就想在旁边写下北京时间的换算公式。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "（“这个条件不能省。先看题目到底给了什么！”）"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "林澈在自习室里用红笔敲桌子的声音，在这个死寂的考场里震耳欲聋。我手一抖，划掉了刚写下的一半公式。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "（别慌。没有北京时间，直接用时角和赤经。别给自己挖坑。）"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "同一时间的另一间教室里。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "题目要求估算伴星的摄动影响。她习惯性地在草稿纸上写下了完整的摄动函数，准备展开到二阶项。但就在她准备代入计算的瞬间，她瞥了一眼墙上的挂钟。还剩十二分钟。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "（如果展开到二阶项，至少需要十分钟。如果中间算错一个符号，整道题零分。）",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "（“初赛不要求完美推导，限时版可以省，必须标出误差量级！”）",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "（保留一阶主项。误差标为 $O(e^2)$。放弃不确定项，回去检查单位。）",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "监考老师抽走答题卡的时候，我才发现自己把黑色水笔的笔帽咬瘪了。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "出了校门，到处都是扎堆对答案的人。“第三题肯定是选D啊！那个小角近似根本不能用！”这种刺耳的声音像苍蝇一样在耳边嗡嗡作响。",
                                    "bg": "schoolGateMorning",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "lin",
                                                "img": "linNeutral",
                                                "pos": "center"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我绕开人群，看到林澈一个人站在远处的树下。她紧紧攥着那个透明文件袋，袋子里的文具乱七八糟的，完全没有了早上的整齐。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「你没对答案吧？」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「不敢。我怕我现在对完，当场就要重新投胎。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……那就好。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你呢？最后那道综合题，没有写成八百字的论文吧？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「差一点。我写到一半，把二阶项全扔了。我按你说的……做了那个该死的限时妥协版。我不知道能拿几分，但我写完了。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「活下来就行。」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「闭嘴，停止你们那种仿佛刚从战壕里爬出来的场外复盘。现在，去吃饭。晚上不许在群里发任何跟试题有关的讨论，违者踢出社团。」",
                                    "focus": "xia"
                              }
                        ]
                  },
                  {
                        "id": "ch3-s5",
                        "title": "空虚的等待",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "初赛成绩没有当天出。等待的这几天，比高强度的训练更折磨人。",
                                    "bg": "classroom",
                                    "clear": true,
                                    "transition": {
                                          "title": "等待成绩",
                                          "subtitle": "空虚的等待"
                                    }
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "物理课讲电磁感应，我却在草稿纸上反复默写初赛第五题的球面坐标转换，写到第七遍的时候，我自己都不知道自己算出来的符号是正是负。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "纸条上只有一行极其不耐烦的字：『别算了。没有原题卷子，你现在的推导叫精神自慰。』"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "『林老师，我看你刚才上语文课的时候，眼睛一直盯着圆规发呆。你别告诉我你是在思考人生。』"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「你们俩现在的状态，就像买了彩票但刮不开涂层。能干点阳间的事吗？」",
                                    "focus": "chen",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "lin",
                                                "img": "linAnxious",
                                                "pos": "right"
                                          },
                                          {
                                                "id": "chen",
                                                "img": "chenNeutral",
                                                "pos": "left"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「如果你能让我穿越到出成绩的那天，我愿意把我所有的阳寿都给你。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「我那天最后一步的单位，到底有没有把时角换算成弧度……」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「疯了，都疯了。」",
                                    "focus": "chen"
                              }
                        ]
                  },
                  {
                        "id": "ch3-s6",
                        "title": "成绩公布",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "周四放学前，夏南星在群里发了一条消息，只有极其冰冷的三个字：『社团。来。』",
                                    "bg": "clubRoomEvening",
                                    "clear": true,
                                    "transition": {
                                          "title": "周四放学前",
                                          "subtitle": "成绩公布"
                                    }
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "没有标点，没有废话。我的胃瞬间缩成了一团。走到社团教室门口时，我觉得腿都是软的。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……如果没过，今晚要把试题默写出来复盘。」",
                                    "focus": "lin",
                                    "img": "linAnxious",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linAnxious",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「如果过了呢？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「也要复盘。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我一把推开门。夏南星站在白板前，手里拿着一张极其薄的A4打印纸。",
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linAnxious",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「省赛分数线划了。周行，林澈。踩线进复赛了。明天开始准备下一轮。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "空气仿佛凝固了整整十秒钟。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「我靠……老子不用吃卷子了……」"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「就这？你们省队候补庆祝晋级的方式，就是在这儿表演集体低血糖？」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……闭嘴吧，陈砚。」",
                                    "focus": "lin",
                                    "img": "linSmile"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "社团教室里乱七八糟的资料还堆在角落。初赛过了，但我们都知道，这根本不是什么值得大肆庆祝的终点。这只不过是，我们刚刚拿到了前往真正地狱的入场券。"
                              }
                        ]
                  }
            ]
      },
    {
            "id": "ch4",
            "title": "第四章：决赛备战",
            "sections": [
                  {
                        "id": "ch4-s1",
                        "title": "晚自习后的题",
                        "lines": [
                              {
                                    "bg": "libraryRain",
                                    "clear": true,
                                    "speaker": "system",
                                    "text": "第四章：决赛备战"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "第二天傍晚，雨还在下，楼顶观测彻底泡汤。图书馆靠窗的小桌上堆满了历年真题，我和林澈中间夹着陈砚昨天扔在这儿的半包黄油饼干。",
                                    "transition": {
                                          "title": "第二天傍晚",
                                          "subtitle": "晚自习后的题"
                                    }
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「先过你那道球面三角。你昨天在旁边批注了『看起来会，实际不会』。」",
                                    "focus": "lin",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "lin",
                                                "img": "linNeutral",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「这题给的已知条件是当地纬度 $\\phi$、赤纬 $\\delta$ 和时角 $H$，求高度角。我直接套了 $\\cos z = \\sin \\phi \\sin \\delta + \\cos \\phi \\cos \\delta \\cos H$，算出来的结果跟答案完全对不上。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「因为你根本没判断天体在子午圈的东边还是西边。题干里的地方恒星时小于天体赤经，时角是负的。你算出的高度角当然是错的。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「靠……这种纯靠代数硬算的习惯真是要命，错得毫无违和感。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「吃点东西。你刚才盯着图发呆了整整十秒钟，低血糖会直接导致逻辑断层。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你现在真把我当一台需要定时加燃料的做题机器了？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「我只是不想因为你大脑死机而浪费我讲题的时间。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "半小时后，轮到林澈的辐射平衡题。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你卡在这儿，是因为又在纠结要不要把行星的反照率 $A$ 当常数处理？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「题干没给具体波段。如果它考的是红外辐射，反照率不能直接用可见光波段的近似值……」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「停！别在这儿发散。限时训练，直接把 $A$ 当常数算主项，旁边打个问号。等算到底了，如果选项间距极大，说明出题人根本没考虑红外波段。别自己给自己加戏。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……知道了。打问号，先算到底。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "看着她终于肯放过那个微小的误差条件，我居然有种诡异的成就感。在这张狭小的桌子上，我们用最粗暴的方式，互相强行拽住对方滑向深渊的脚踝。"
                              }
                        ]
                  },
                  {
                        "id": "ch4-s2",
                        "title": "强制停机",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "第三天中午，走廊里闷热得让人喘不过气。午休铃刚响，教室里已经横七竖八地倒下了一片。",
                                    "bg": "classroom",
                                    "clear": true,
                                    "transition": {
                                          "title": "第三天 午休",
                                          "subtitle": "强制停机"
                                    }
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「你们俩现在连睡觉都要拿计时器卡秒了吗？这是什么地狱绘图？」",
                                    "focus": "chen",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "chen",
                                                "img": "chenNeutral",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linTired",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「闭嘴。睡多了下午第一节物理课会处于麻醉状态，睡少了下午限时卷算不完。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「十五分钟后……闹钟响了立刻叫我。如果我没起，拿笔戳我。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「收到。你也一样。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "几乎是闭上眼睛的瞬间，林澈的呼吸就变得沉重而均匀。她没有像平时那样顾及什么形象，眉头微微皱着，手里甚至还死死攥着一支没盖笔帽的中性笔。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "十五分钟后，计时器震动了一下。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「林澈。起来。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……时角……」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「别时角了，清醒点，准备刷下午的天体力学套卷。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……下午第一题，我来讲偏心率。」",
                                    "focus": "lin"
                              }
                        ]
                  },
                  {
                        "id": "ch4-s3",
                        "title": "主科的审判",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "午休后，班主任许承安把我叫到了办公室。他的办公桌上压着一张我的数学周测卷，最后一道导数大题的解答区干干净净。",
                                    "bg": "corridorEvening",
                                    "clear": true,
                                    "transition": {
                                          "title": "午休后",
                                          "subtitle": "主科的审判"
                                    }
                              },
                              {
                                    "speaker": "teacher",
                                    "text": "「决赛请假单学校批了。但我得提醒你一句，别以为进了复赛就万事大吉。如果拿不到国家级奖项，这东西对你的高考没有任何实质性帮助。」",
                                    "focus": "teacher",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "teacher",
                                                "img": "teacherNeutral",
                                                "pos": "left"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「我知道……」"
                              },
                              {
                                    "speaker": "teacher",
                                    "text": "「你知道个屁！你看看你这两天的状态，英语默写不及格，数学压轴题直接交白卷。搞竞赛不是让你拿主科去献祭的！去天津的这半个月，要是把你高考的底子给掏空了，你以后拿什么去填？」",
                                    "focus": "teacher"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "办公室里的空调吹得很冷。许承安的话没有任何所谓的“理想主义”，每一句都是赤裸裸的生存现实。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……我会补上的。我们每天的排期里留了两个小时写主科作业。」"
                              },
                              {
                                    "speaker": "teacher",
                                    "text": "「别给我开空头支票。滚回去上课，要是再让我在物理课上看到你偷偷算天文题，我直接没收你的稿纸。」",
                                    "focus": "teacher"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我攥着卷子走回教室。走廊的窗户开着，热风吹得人心里发闷。林澈站在前门，手里拿着那个用来装资料的透明文件袋。",
                                    "bg": "corridorEvening",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "lin",
                                                "img": "linNeutral",
                                                "pos": "center"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「老许骂你了？」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「警告我别拿主科献祭。非常现实的拷问。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「他没说错。这是刚才那道导数题的步骤拆解，我午休前写的，你直接看第二步构造函数。别在晚自习浪费时间重新想了。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你连这个都准备了？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「省下你死磕数学的时间，今晚才能多推演一套天体测量卷。这是战术止损。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "下午，到底要不要合并错题库成了一个问题。",
                                    "choice": [
                                          {
                                                "text": "提议共用错题文档。",
                                                "effects": {
                                                      "trust": 1,
                                                      "discipline": 1
                                                },
                                                "insert": [
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "消息：建立一个共享石墨文档吧。只放高频错题和死坑。"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "消息：共享的话，彼此的愚蠢错误会暴露无遗。",
                                                            "focus": "lin"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "消息：就是要看对方是怎么蠢死的，才能防止自己重蹈覆辙。这是生存策略，别要面子了。"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "消息：……链接发你了。文档名：【致命雷区清单-严禁降智】",
                                                            "focus": "lin"
                                                      }
                                                ]
                                          },
                                          {
                                                "text": "先各自整理，晚上交换。",
                                                "effects": {
                                                      "discipline": 1
                                                },
                                                "insert": [
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "消息：先各自整理，晚自习结束前五分钟互相拷U盘。效率优先。"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "消息：同意。标注错因时不要写长句，直接写断点在哪。",
                                                            "focus": "lin"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "消息：行。"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "虽然决定了分开整理，但我在写到第三题关于岁差的影响时，脑子里还是会不由自主地冒出一个念头：如果是林澈，这题她会死抠哪个近似条件？"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "晚自习结束的铃声打响。教室里的人几乎跑光了，黑板上还留着没擦干净的立体几何图。"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「……今天到此为止。」",
                                                            "focus": "lin"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「你居然会主动喊停？」"
                                                      },
                                                      {
                                                            "speaker": "lin",
                                                            "text": "「大脑运转效率已经降到了 40% 以下。再算下去只是在制造新的错题。」",
                                                            "focus": "lin"
                                                      },
                                                      {
                                                            "speaker": "zhou",
                                                            "text": "「行。强制关机。」"
                                                      },
                                                      {
                                                            "speaker": "narrator",
                                                            "text": "她没有再回头确认什么。关掉教室灯的那一刻，我意识到，我们已经没有任何余力去伤春悲秋了。前往天津的倒计时，正在以一种抽筋扒皮的方式，逼着我们抛弃所有多余的情绪，只剩下最纯粹的生存本能。"
                                                      }
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "id": "ch4-s4",
                        "title": "模拟卷",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "倒计时第七天。夏南星不知道从哪搞来一间空置的阶梯教室，把窗帘拉得严严实实，只开着几盏惨白的顶灯。讲台上放着一个巨大的红色数字计时器，刺眼的“180:00”正在一秒一秒往下掉。",
                                    "bg": "examRoom",
                                    "clear": true,
                                    "transition": {
                                          "title": "倒计时第七天",
                                          "subtitle": "模拟卷"
                                    }
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「中途禁止上厕所，禁止喝水，禁止抬头四处看。觉得自己考砸了想死，也给我把卷子写完再死。」",
                                    "focus": "xia",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linAnxious",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「学姐……这排版不对吧？这根本不是历年国赛真题。为什么会有全英文的附录表？」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「因为这是 IOAA（国际天文奥赛）的真题删减版。针对你们现在的状态，普通国赛卷已经测不出你们的抗压底线了。开始。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我转头看了一眼林澈，她的脸色在看到试卷头部的瞬间也变白了。但在夏南星“开始”两个字落下的瞬间，她一言不发地拔开了笔帽。这根本不是什么考试，这是一场赤裸裸的精神凌迟。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "前四十分钟，我还勉强能跟上节奏。但到了第三道数据处理题，密密麻麻的测光数据表像一堵墙一样砸在脸上。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "（不对……为什么大气消光系数算出来是个负数？哪里算错了？重新代入……还是负数！）"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我在那一堆数字里死磕了整整二十分钟。余光里，计时器的数字已经掉到了“90:00”。教室里的翻纸声越来越少，因为大家都被卡住了。我想深呼吸，但胸口闷得像被塞了一把棉花。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "最后二十分钟，林澈的背挺得笔直，但她左手死死压着草稿纸，右手一直悬在半空，笔尖离卷面只有不到一厘米，却迟迟落不下去。她在天体力学的大推导里彻底走岔了。"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「时间到。停笔。立刻交卷。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "笔掉在桌上的那一刻，我才发现自己整条右臂都在不自觉地发抖。手心里全是冷汗，试卷的边缘被我捏得湿漉漉的。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "批卷的时间极其难熬。我和林澈瘫坐在教室外面的长椅上，谁都没说话。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……你最后那道天体力学，推出来了吗？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「推到第三页草稿纸的时候，我发现我一开始就把极坐标系的参考轴设反了。全错了。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我没再接话。在这个时候，任何安慰都显得极其虚伪且多余。"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「死相很难看。周行，第三题你死磕了二十分钟，导致后面两道十分的简答题直接空白。林澈，天体力学推导起手就错，你硬是强行往下推，白白浪费了四十分钟，最后那八分的过程分也没拿到。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……我知道我一开始就错了。但我就是停不下来……我总觉得再算两步就能圆回来……」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「不肯认输是吧？觉得放弃一个推导就等于证明自己是个废物？考场上不看你有多努力，只看你最后落纸的答案。早点停损，这四个字你今晚给我抄一百遍。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……知道了。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "她很少哭。上一次在楼梯间是因为恐慌，这一次，是纯粹的、被自己无能为力的执拗所击溃的不甘。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「学姐，那我的呢？」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「你一紧张就把所有的物理量单位全省了。你是打算让阅卷老师自己去猜你写的是弧度还是角度吗？你这种写卷子的习惯，就算全对也会被扣掉一半的分。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「我当时脑子全乱了，只想赶紧把数字算出来……」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「行了，哭也哭过了，烦也烦完了。这份卷子就是你们现在的真实水平。别去幻想什么超常发挥。今晚，把你们在这张卷子上犯的致命错误，精简成不超过十个字，写成卡片。明天早读互相抽查。」",
                                    "focus": "xia"
                              }
                        ]
                  },
                  {
                        "id": "ch4-s5",
                        "title": "错题卡片与深夜复盘",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "雨又开始下了。教室里只剩我和林澈。她已经平静下来了，正在把错题抄到夏南星要求的小卡片上。",
                                    "bg": "clubRoomNight",
                                    "clear": true,
                                    "transition": {
                                          "title": "雨夜",
                                          "subtitle": "错题卡片与深夜复盘"
                                    }
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你这用词……很有学姐的风范。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「因为『早停』两个字根本拦不住我。必须骂得难听点。」",
                                    "focus": "lin",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "lin",
                                                "img": "linAnxious",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我们互相看了一眼对方极其暴力的卡片，谁都没笑。"
                              },
                              {
                                    "speaker": "wangshu",
                                    "text": "消息：附中模拟卷复盘已发。顺便提醒一句，考前带进考场的提醒卡片不要超过十二张。超过了，你的大脑在极度紧张下根本记不住。",
                                    "focus": "wangshu"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「删吧。只留绝对会死人的那种。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「删掉任何一张，我都觉得明天我就会在那上面翻车。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你脑子容量有限，不可能防住所有的坑。选你最容易失控的那个。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "开始重新推演白天做错的最后一道大题时。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「一起看？你那道天体力学我白天也卡了。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「别看。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……怎么了？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「我推导过程全是一团乱麻，错得很离谱。你坐在旁边看着我改……我会有压力。我会连第一步该写什么都忘了。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我看着她紧绷的肩膀，忽然意识到，白天那八分的丢失对她的打击比我想象的还要大。她需要时间去消化这种耻辱感，而不是被我当成共享资源的错题去围观。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「行。我做我自己的。你推你的。有需要叫我。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「……谢谢。」",
                                    "focus": "lin",
                                    "img": "linSmile"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "教室里只剩下雨声和极其沉闷的写字声。我们隔着一张空桌子，各自在错题的泥沼里挣扎。没有互相讲题的温情，只有被冷酷的真题逼入绝境后，拼命想自救的挣扎。"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我看着自己手边那张『不写单位就剁手』的卡片。初赛过了的喜悦早就被这场模拟考碾成了粉末。天津的决赛根本不是什么荣誉之旅，那是一台真正的绞肉机。而我们现在能做的，仅仅是把自己的弱点，写在十二张极其可笑的卡片上而已。"
                              }
                        ]
                  },
                  {
                        "id": "ch4-s6",
                        "title": "出发前夜",
                        "lines": [
                              {
                                    "speaker": "narrator",
                                    "text": "出发前三天，正式的红头文件通知贴到了实验楼一楼的公告栏上。决赛城市、报到时间、集合地点、车次，白纸黑字，没有任何讨价还价的余地。",
                                    "bg": "schoolGateDusk",
                                    "clear": true,
                                    "transition": {
                                          "title": "出发前三天",
                                          "subtitle": "出发前夜"
                                    }
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「周行，你和林澈同一车厢。」",
                                    "focus": "chen",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "chen",
                                                "img": "chenNeutral",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linNeutral",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你声音能再大点吗？最好用广播站的喇叭喊。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「只是同一车厢而已。同一趟火车有一百多个人。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「对对对，我还没说你们是同一排呢。座位号我都看到了。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "她刚才明显只确认了集合时间和携带物品清单，根本没看车票座位那一栏。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「七车厢，08A。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「你呢？」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「08B。刚好相邻。」"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「你们俩能不能别把『相邻』这么暧昧的词说得像解析几何里的位置关系？」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你再去搬两箱赤道仪清醒一下？」"
                              },
                              {
                                    "speaker": "chen",
                                    "text": "「我撤了。祝二位旅途愉快，别在高铁上为了抢草稿纸打起来。」",
                                    "focus": "chen"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "陈砚跑了。林澈举起手机拍通知单。我眼睁睁看着她原本对准集合时间的镜头，极其刻意地往下移了半寸，把座位号也稳稳当当地框进了取景器，按下了快门。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你刚才是不是特意把座位号拍进去了？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「这是为了防止你记错座位，在车厢里乱窜。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「出发安排说完了。最后三天纪律：不开新范围，不刷整套模拟。只看错因、星图和提醒卡片。」",
                                    "focus": "xia",
                                    "clear": true,
                                    "show": [
                                          {
                                                "id": "xia",
                                                "img": "seniorSmile",
                                                "pos": "left"
                                          },
                                          {
                                                "id": "lin",
                                                "img": "linNeutral",
                                                "pos": "right"
                                          }
                                    ]
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「学姐，那能带多少资料上车？」"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「一个标准文件夹。超过两厘米厚，我现场给你撕了。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「一个？可是历年真题和观测数据的补充表……」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「林澈，收起你那种看异端一样的眼神。你是去参加决赛，不是去天津开天文资料展览会。」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我们在桌上摊开所有的复习资料。我的那一摞里全是“也许能撞上”的偏题，林澈的那一摞里全是“万一考到就死定了”的星表。看着不一样，其实全都是火力不足恐惧症。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「这张表你已经倒背如流了，别带了。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「车上还可以再复习一遍。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「你昨天才说的，车上只看错因，绝对不碰新题或机械记忆的东西。你这不是在复习，你是在试图用厚度给自己找安全感。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "她盯着那张表看了很久，最后指关节松开，把它扔进了“不带”的废纸堆里。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「那你这三张卷子也不能带。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「凭什么？这上面的题型很经典！」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「你已经把它们整理成『限时早停』的模板卡片了。带原题，你绝对会在高铁上忍不住重新算一遍。如果算卡壳了，你的心态在进考场前就会直接崩溃。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「……林老师，你是不是在我脑子里装了监控？」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "最后，我们居然真的把小山一样的资料，删成了不到二十页的精华。留下来的全是我们这几周被按在地上摩擦的血泪史：问号区法则、单位提醒小三角、星图速记卡，还有那十二张硬核防翻车卡片。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「好像……够了。」",
                                    "focus": "lin",
                                    "img": "linSmile"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「听你嘴里说出『够了』这两个字，真是不容易。我都怕你今晚半夜潜回教室把废纸篓偷走。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "最后一次校内集合解散。夏南星把纸质的高铁票发到了我们手里。"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「明早七点二十，火车站南广场集合。谁迟到一分钟，我就把他的准考证当场烧了。听懂没？」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「学姐，你这个威胁很有创意。」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「我会提前十五分钟到。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "xia",
                                    "text": "「十五分钟可以。但不许提前一小时去火车站广场上吹冷风焦虑。回家睡觉！」",
                                    "focus": "xia"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "校门外的路灯亮了。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「周行。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「怎么了？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「明天在高铁上，如果我没忍住想要翻看那些没带的星历表，你必须制止我。」",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「那如果我想拿草稿纸出来硬算综合题呢？」"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "「我会直接抢走你的笔。」",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "「成交。互相监督。」"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我把行李随便塞进书包。校服、洗漱包、准考证、身份证，还有那个薄得可怜的文件夹。一切准备就绪后，手机震动了一下。",
                                    "bg": "homeNight",
                                    "clear": true,
                                    "show": []
                              },
                              {
                                    "speaker": "lin",
                                    "text": "消息：[图片] 行李确认完毕。资料二十页。防低血糖水果糖三颗。",
                                    "focus": "lin",
                                    "img": "linAnxious"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "图片里是她整理得如同强迫症发作一样的书包外侧袋。"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "消息：收到。我带了肉松面包，保证饿不死。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "消息：明早七点零五分，南广场见。不要迟到。",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "消息：我说过了，我不会迟到。你可以去睡觉了，别再反复检查那个文件袋了。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "消息：……你怎么知道我还在检查？",
                                    "focus": "lin"
                              },
                              {
                                    "speaker": "zhou",
                                    "text": "消息：因为我也刚把拉链拉开确认了第三遍。强制关机吧。"
                              },
                              {
                                    "speaker": "lin",
                                    "text": "消息：晚安。",
                                    "focus": "lin",
                                    "img": "linSmile"
                              },
                              {
                                    "speaker": "narrator",
                                    "text": "我把手机反扣在书桌上，关掉了台灯。初赛通过那天，我们只是拿到了资格。但现在，看着书包里那两张紧挨着的08A和08B的车票，我知道，真正的战场，明天才刚刚开始。"
                              }
                        ]
                  }
            ]
      },
    {
      "id": "ch5",
      "title": "第五章：去向决赛城市",
      "sections": [
        {
          "id": "ch5-s1",
          "title": "出发去车站",
          "lines": [
            {
              "bg": "bedroomMorning",
              "clear": true,
              "speaker": "system",
              "text": "第五章：去向决赛城市"
            },
            {
              "speaker": "narrator",
              "text": "闹钟响之前，我已经醒了。窗帘缝里有一条很浅的光。"
            },
            {
              "speaker": "narrator",
              "text": "书包靠在书桌边，浅蓝文件袋露出一角。十二张卡片被夹在最外层，糖和面包在侧袋里，准考证放外袋，身份证放钱包。"
            },
            {
              "speaker": "narrator",
              "text": "这些东西昨晚已经检查过三遍。按理说我应该停止。可我还是站在床边，把拉链又拉开了一次。"
            },
            {
              "speaker": "father",
              "text": "再检查，火车就改签了。"
            },
            {
              "speaker": "zhou",
              "text": "我只是确认一下。"
            },
            {
              "speaker": "father",
              "text": "你昨晚确认到我都背下来了。准考证外袋，资料二十页，糖三颗，面包一袋。"
            },
            {
              "speaker": "narrator",
              "text": "父亲把早餐放到桌上，语气还是平时那样硬，但碗里的鸡蛋多了一个。"
            },
            {
              "speaker": "father",
              "text": "吃完再走。到了那边听老师安排。比赛归比赛，别逞强。"
            },
            {
              "speaker": "zhou",
              "text": "知道。"
            },
            {
              "speaker": "father",
              "text": "还有，别把别人也带着逞强。"
            },
            {
              "speaker": "narrator",
              "text": "我拿筷子的手顿了一下。父亲没有看我，只是把牛奶推过来，好像刚才那句只是顺手放在桌上的一块提醒。"
            },
            {
              "speaker": "zhou",
              "text": "我尽量不添乱。"
            },
            {
              "speaker": "father",
              "text": "不是这个意思。你们两个都已经走到这一步了，别把互相提醒变成互相拖着跑。"
            },
            {
              "speaker": "narrator",
              "text": "厨房里油烟机已经停了，母亲在水槽边洗杯子，水声很细。她没有插话，只把一小袋晕车药和创可贴放到我手边。"
            },
            {
              "speaker": "mother",
              "text": "不一定用得上，带着。外面吃饭别只挑方便的，晚上回来给我发个消息。"
            },
            {
              "speaker": "zhou",
              "text": "我们有带队老师。"
            },
            {
              "speaker": "mother",
              "text": "带队老师管比赛，我管你有没有按时吃饭。分工不冲突。"
            },
            {
              "speaker": "narrator",
              "text": "我想说自己已经不是小孩，可话到嘴边又咽回去。背包里那叠卡片、准考证和训练表把我推向一个很大的地方，可桌上的热牛奶和创可贴又把我按回家里。"
            },
            {
              "speaker": "father",
              "text": "到了别只报平安，也说说住宿怎么样。要是床太硬，就把外套垫一层。"
            },
            {
              "speaker": "zhou",
              "text": "爸，你这个建议听起来像野外生存。"
            },
            {
              "speaker": "father",
              "text": "考试也差不多。先保证人没塌，脑子才有空转。"
            },
            {
              "speaker": "narrator",
              "text": "我低头喝牛奶。杯壁很凉，胃里却慢慢落下一点热的东西。原来父亲也看出来了。我们没有说出口的那些互相关心，在大人眼里并没有藏得那么好。"
            },
            {
              "speaker": "narrator",
              "text": "出门时，父亲把行李箱递给我。箱轮在楼道里轻轻响，像把这个早晨切成一小格一小格。"
            },
            {
              "bg": "trainStationMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "车站大厅比学校早读还吵。广播声从天花板落下来，行李箱轮子在地砖上滚出一片细密的声响。电子屏不断刷新车次，红色、绿色、白色的字挤在一起。",
              "devNote": "后续可补火车站背景"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "林澈站在集合点旁边，校服外套扣得很整齐，背包挂在一边，浅蓝文件袋抱在怀里。她没有东张西望，只盯着手机上的集合通知。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "早。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "早。你到了十六分钟。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "不是说最多二十分钟吗？我还省了四分钟。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "四分钟不够买一杯热豆浆。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你怎么连这个都算。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "因为你可能没吃早饭。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "吃了。我爸监督的。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "那就好。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "吃了。馒头，鸡蛋，牛奶。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "报菜名这么详细。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "免得你反查。"
            },
            {
              "speaker": "narrator",
              "text": "她说“反查”的时候，把手机屏幕按灭。屏幕黑下去前，我瞥见上面还有她妈妈发来的消息：到了发定位，别一直盯资料。"
            },
            {
              "speaker": "narrator",
              "text": "我忽然觉得早晨的车站像一个临时搭起的转运口。所有家里的提醒、学校里的训练和我们自己的紧张，都在这里排队，等着被安检机吞进去。"
            },
            {
              "speaker": "narrator",
              "text": "她说完，把视线落到我的书包侧袋。面包的包装露出一小角。她看见了，却没有说“合格”。只是把自己的文件袋换到另一只手，像某个检查项目已经安静地打上勾。"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "xia",
              "focus": "xia",
              "text": "人齐了。证件再确认一次，不要等到检票口给我表演校园悬疑剧。"
            },
            {
              "speaker": "narrator",
              "text": "除了我们，还有两个低年级志愿跟着夏南星来送站。他们抱着一袋矿泉水和一次性雨衣，表情比参赛的人还严肃。"
            },
            {
              "speaker": "classmate",
              "text": "学姐，雨衣真的要带吗？天气预报是晴。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "天气预报和考前心态一样，只能参考。带着。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我开始怀疑她包里有帐篷。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "有也合理。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你现在已经完全接受夏学姐的世界观了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "她的世界观能防漏。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "学姐，你对我们这么不信任吗？"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "我对人类整体都不太信任。尤其是早上赶车的人类。"
            },
            {
              "speaker": "narrator",
              "text": "我们在她面前打开证件夹。林澈动作很快，身份证、准考证、学生证排成三张整齐的卡。我的顺序乱了一点，她伸手把准考证往上挪了挪。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你连我的证件摆放也要管？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "这样拿快。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "很好，林澈负责秩序，周行负责被管理。分工明确。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "我申请调整岗位。"
            },
            {
              "img": "linSmile",
              "speaker": "lin",
              "focus": "lin",
              "text": "驳回。"
            },
            {
              "speaker": "narrator",
              "text": "检票口开始放行时，人群往前轻轻一涌。林澈的肩膀被旁边行李箱蹭了一下，她没有出声，只把文件袋抱紧。"
            },
            {
              "speaker": "narrator",
              "text": "我往她那边侧了一步。动作很小，小到可以解释成被后面的人挤了一下。她抬眼看我，没说谢谢，也没说不用。只是把文件袋往怀里收得更稳。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你别挡住别人。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我挡的是行李箱。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "行李箱也算别人财产。"
            },
            {
              "speaker": "narrator",
              "text": "她说得一本正经，我却听出一点不明显的松动。我们还没有学会怎么直白地接受好意，只能把它塞进玩笑和纠正里。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "箱子给我？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不用，不重。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我没有说你拎不动。只是人多。"
            },
            {
              "speaker": "narrator",
              "text": "她看了我一眼，像是在判断这句话是不是多余。最后她把行李箱拉杆稍微往我这边递了一点。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "过安检之前。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "成交。"
            },
            {
              "speaker": "narrator",
              "text": "箱子其实真的不重。重的是她把东西递给我的那一下。我们都装作很自然，像只是为了在人群里快一点通过。"
            },
            {
              "speaker": "narrator",
              "text": "站台风比大厅凉。列车停在站台边，白色车身被晨光照得发亮。车门开着，乘务员站在旁边，所有人都在往同一个入口走。"
            },
            {
              "speaker": "narrator",
              "text": "我回头看了一眼站台入口。送站的人被栏杆挡在更远处，父亲没有来，母亲也没有来，可我还是像能看见他们一样，把背包带往肩上提了提。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "紧张？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "有一点。你呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "也有。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你回答得太平静了，紧张会觉得自己不受尊重。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "它不需要尊重。它需要被管理。"
            },
            {
              "speaker": "narrator",
              "text": "这句话听起来像她给自己写的备注。风吹过来，把她额前几缕头发吹乱，她抬手理了一下，动作比平时慢半拍。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "上车以后先放行李，别堵过道。周行，林澈，你们两个座位在一起。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "这个安排很有战术意义。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "意义是你们别在车上各慌各的。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "知道。"
            },
            {
              "speaker": "narrator",
              "text": "我跟在林澈后面上车。车门合上的提示音响起时，我忽然意识到，学校、家、楼顶和熟悉的街道都被留在门外。"
            },
            {
              "speaker": "narrator",
              "text": "接下来几个小时，我们会被一条铁轨带到另一个城市。决赛在那里，海也在那里。我们还不知道哪一个先让人紧张。"
            }
          ]
        },
        {
          "id": "ch5-s2",
          "title": "高铁上的题",
          "lines": [
            {
              "bg": "cgCh5TrainWindow",
              "clear": true,
              "speaker": "narrator",
              "text": "高铁启动时没有想象中的震动。窗外站台慢慢往后滑，广告牌、人群和玻璃栏杆连成一条被拉长的线。",
              "devNote": "第五章火车并排 CG"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "林澈坐在靠窗的位置，先把小桌板放下来，再把资料按大小排好。她的动作不快，却很稳，像在陌生环境里给自己搭一个可控的小范围。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你要不要先看窗外？我们刚出发。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "出发不能算复习进度。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "很严格。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "不是严格。只是是现在还看得进去罢了。"
            },
            {
              "speaker": "narrator",
              "text": "这句话说得我没法反驳。我把十二张卡片拿出来，第一张写着“小三角=先写单位”。林澈看见以后，嘴角很轻地动了一下。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你真的带了。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "当然。它现在是我的护身符。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "护身符不能替你算题。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "所以护身符旁边坐着你。"
            },
            {
              "bg": "cgCh5TrainLinLooking",
              "clear": true,
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "不要乱分类。"
            },
            {
              "bg": "highSpeedRail",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "她把自己的卡片推过来。第一张不是公式，而是四个字：看清题意。字写得很小，笔画清楚到有点倔。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你的护身符也挺朴素。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "朴素有用。"
            },
            {
              "speaker": "narrator",
              "text": "夏南星坐在前排，隔着椅背回头看了一眼。她没有说话，只把耳机戴上，像是默许这节临时车厢自习课开始。"
            },
            {
              "speaker": "narrator",
              "text": "我们把手机调成静音，倒扣在桌板边。林澈拿出一支黑笔、一支铅笔和一块橡皮，三样东西摆成一条直线。我的桌板上则是笔、卡片、面包和被我忘记收起来的车票。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "先四十分钟。中间不查消息。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这么像签协议？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "因为你会用“看时间”顺手看群。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我在你眼里已经没有基本自制力了吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "有。需要外部条件保护。"
            },
            {
              "speaker": "narrator",
              "text": "她说完，把自己的手机推到我这边，又把我的手机推到她那边。两个黑色屏幕互相看着，像临时交换了人质。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你这个方法压迫感不小。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "有效就行。"
            },
            {
              "speaker": "narrator",
              "text": "她在纸角写下开始时间。我也照着写了一遍。数字落到纸上的瞬间，窗外的速度反而被隔开了，车在跑，我们在一个小小的桌板上把自己钉住。"
            },
            {
              "speaker": "narrator",
              "text": "我们先过星图。林澈报星座，我说定位；我报赤经赤纬，她判断季节。车窗外的楼慢慢变低，题目却把视线钉在纸上。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "春季大曲线。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "大角、角宿一，再到乌鸦座那一片。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "角宿一是什么星？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "室女座α，蓝白色。距离……两百五十光年左右？"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "可以。不要加“左右”太多。考试里会显得你心虚。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我确实心虚。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那就在草稿纸上心虚。答题纸上不要。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你知道乌鸦座的梗吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "是不是又是你水那个奇怪的群看的？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "嗯...是吧。就是几年之前有一个IOAA的队员的蠢事。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "有多蠢？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那年IOAA观测原题上第一题是估计乌鸦座旁边某个星等以上的亮星的数量。题目说以乌鸦座Alpha为圆心，并把乌鸦座Alpha的位置标出来了，结果这个人他硬是把圈画在乌鸦座Beta上了。整道题拿了0分"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "...后来他把自己的网名改成了高松灯喜欢观测乌鸦座。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那很惨了。你不能犯这种错误。不允许。"
            },
            {
              "speaker": "narrator",
              "text": "她说完，把第二张卡片翻过去。车厢里有人打开零食袋，塑料声很轻。高铁穿过一段高架，阳光从窗边斜进来，照在她的笔尖上。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "轮到你。近似条件。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "你故意的。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这是考点关怀。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "近似不是随便舍弃。要先判断量级，再说明误差不会影响结论。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "如果影响呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那就不能舍。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "回答很林澈。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "这不是习惯，是定义。"
            },
            {
              "speaker": "narrator",
              "text": "我笑了一下，把题纸折到第三页。那里有一道我们都做错过的球面三角题，图上画了天顶、天极和一颗看起来无辜的星。"
            },
            {
              "speaker": "narrator",
              "text": "林澈没有急着写。她先用铅笔在图边标出东西侧，又把角写成小写字母。她的手指按着纸角，车厢轻轻晃，她的线却没有歪。"
            },
            {
              "speaker": "narrator",
              "text": "我看她画图，突然意识到这几个月我们互相看过太多狼狈的草稿。箭头画反、单位漏写、把题意理解错，最开始都像丢脸，现在反而变成一种熟悉。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "如果明天真考这个，你会先画图还是先写公式？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "先画图。公式晚一点不会跑。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我要把这句写进考场心法。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不要写。考场上写题。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "先判断星在子午圈哪边。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "东边还是西边。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "对。你上次错在还没看位置就开始代公式。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我上次错在过于相信公式会自己救我。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "公式不会。它只负责在你用对的时候不背锅。"
            },
            {
              "speaker": "narrator",
              "text": "我们把这道题完整推了一遍。中途列车进隧道，窗外突然黑下去，车厢玻璃映出我们两个低头的影子。"
            },
            {
              "speaker": "narrator",
              "text": "隧道里的玻璃像一面很暗的镜子。我看见自己皱着眉，也看见林澈抿着嘴。她不是不会，更多是在确认自己没有跳步。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这里不用再验一次。前面位置关系已经定了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我怕正负号。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你怕它，它也不会变乖。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "所以才要盯。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "盯两遍够了。第三遍就是被它牵着走。"
            },
            {
              "speaker": "narrator",
              "text": "她停了停，把笔尖从那一行挪开。这个动作比改一道题更难。她把纸推给我，像把那点不放心也一起推过来。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你验。只验一遍。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "收到。"
            },
            {
              "speaker": "narrator",
              "text": "我照着她的图把正负号过了一遍。结果是对的。我没有说“你看吧”，只是把纸推回去，在旁边写了一个勾。林澈看了一眼，没有擦掉。"
            },
            {
              "speaker": "narrator",
              "text": "影子里，林澈的表情比早上放松一点。她在草稿纸上画了一个小三角，又在旁边写了一个很小的“慢”。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这个字是给我还是给你？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "共用。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我们现在连缺点都共享了。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "不是共享。互相污染而已。"
            },
            {
              "speaker": "narrator",
              "text": "我差点笑出声，前排夏南星敲了敲椅背。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "污染源注意音量。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "收到。"
            },
            {
              "speaker": "narrator",
              "text": "接下来一个小时，我们都没有再说废话。车厢像被分成两层，上面是广播、脚步、开水声，下面是纸页、铅笔和压低的讨论。"
            },
            {
              "speaker": "narrator",
              "text": "我们做了一次很小的模拟，不完整计时，也不追求分数，只练最容易在紧张时乱掉的步骤。林澈负责把题目念出来，我负责在二十秒内说出第一步；然后我们交换，她说判断条件，我挑有没有漏掉单位和限定。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "某观测地纬度给定，恒星上中天高度已知，求赤纬。第一步？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "先画天球，不直接套。确认南北关系，再看上中天在天顶哪边。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "可以。不要忘了说明适用情况。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "感觉你说话的语气好权威。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "因为你上次这类题错得很完整。"
            },
            {
              "speaker": "narrator",
              "text": "我立刻想起那张被红笔圈到几乎无处落脚的草稿。现在再提起那次错误，我已经没有最开始那么想把纸藏起来。"
            },
            {
              "speaker": "narrator",
              "text": "中途乘务员推着餐车经过，盒饭的味道从过道里飘过来。夏南星摘下一只耳机，回头用口型问我们要不要水。林澈摇头，我点头。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "周行，喝水。林澈，也喝。摇头无效。"
            },
            {
              "speaker": "lin",
              "focus": "xia",
              "text": "我还有半瓶。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "半瓶不是喝过的证据，是剩下的证据。"
            },
            {
              "speaker": "narrator",
              "text": "林澈被迫拧开瓶盖，喝了两口。她喝水也像完成步骤，先看一眼瓶身，再把瓶盖拧紧。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "夏学姐监管范围越来越细了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我辩护一下，她是对的。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你在装成熟。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不成熟也要喝水。"
            },
            {
              "speaker": "narrator",
              "text": "我把卡片一张张翻过去。林澈偶尔指出一个词不准，偶尔把我的箭头改成更清楚的位置。她也会停下来问我某个模板能不能再短一点。"
            },
            {
              "speaker": "narrator",
              "text": "有一段路高铁贴着河走，光线从水面反上来，车厢里亮得像多开了一盏灯。林澈眯了一下眼，把资料往阴影里挪，我顺手把窗帘往下拉了三分之一。她看见了，没有说话，只把我的那张卡片也往阴影里推了推。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "这个“先把题拆成已知、目标、限制条件”，太长。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那改成三栏？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。已知、要什么、不能乱用。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "最后一栏很有灵魂。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "主要针对你。"
            },
            {
              "speaker": "narrator",
              "text": "列车又穿过一段隧道。出来时，大片田地铺到窗外，水渠反着光，远处有一排矮房子。我的笔尖停在纸上，忽然写不下去了。"
            },
            {
              "speaker": "narrator",
              "text": "不是某个知识点突然断掉，而是整个人像被轻轻抽走了电。题上的字还认得，公式也知道大概在哪里，可它们不再往脑子里进，只在眼前排成一队不肯动的符号。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "累了？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "只是脑子开始拒绝球面。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那就停下来呗。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这么快批准？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你现在继续写，只会把字写丑。"
            },
            {
              "speaker": "narrator",
              "text": "她把我的笔帽扣上，又把自己的资料合起来。这个动作没有商量的余地，像她在第四章被我和夏南星联合按下停止线之后，终于学会把那条线也画给别人。"
            }
          ]
        },
        {
          "id": "ch5-s3",
          "title": "车窗外的土星环",
          "lines": [
            {
              "bg": "cgCh5TrainWindowView",
              "clear": true,
              "speaker": "narrator",
              "text": "不做题以后，车窗外的东西一下子变多了。田地、河、厂房、低低的山，还有偶尔闪过去的站台，全都像刚从题纸背面冒出来。"
            },
            {
              "bg": "highSpeedRail",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "zhou",
              "focus": "lin",
              "text": "你说，如果景色有高低，高铁窗外这些景色，会不会也有标准答案？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "没有。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "回答太快了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "因为你这个问题没有计算价值。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "不能一直追求计算价值。比如那座山，看起来就很像一道选择题的错误选项。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "哪里像？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "看着很有道理，但其实和题干无关。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你现在是在给风景扣分。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "职业病。"
            },
            {
              "speaker": "narrator",
              "text": "林澈把脸转向窗外。她没有真的笑，只是眼睛里那点紧绷淡了一些。窗玻璃上有她的倒影，星形发夹被光照得很小很亮。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你第一次喜欢天文，是因为做题吗？"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "不是。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那是什么？"
            },
            {
              "speaker": "narrator",
              "text": "她没有立刻回答。列车经过一片开阔的水面，光从窗外晃进来，又很快被桥墩切碎。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "小时候，有一次晚上跟我妈去买东西。不是很正式的观测，就是路边广场上有人架了一个望远镜。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那个广场其实很普通。旁边有卖烤冷面和棉花糖的摊子，地上有小孩玩会亮的滑板车。望远镜摆在台阶边，旁边挂着一块手写牌子，看月亮十块，看土星十五。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "土星比月亮贵五块。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "因为难找。也可能因为听起来更厉害。"
            },
            {
              "speaker": "narrator",
              "text": "她很认真地补上后半句，好像过了这么多年，她仍然不愿意给那个摆摊的人乱下结论。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我妈本来不想让我看。她觉得那种路边的东西可能就是骗小孩，一眼看过去什么都没有，还要排队。但我一直看那块牌子。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你小时候也会一直盯着一个东西看？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "会。只是那时候别人以为我发呆。"
            },
            {
              "speaker": "narrator",
              "text": "我想象了一下小时候的林澈，可能比现在更小一圈，抱着一袋刚买的东西，站在人来人往的广场上，眼睛却只看那台旧望远镜。这个画面有点不像她，又很像她。"
            },
            {
              "speaker": "narrator",
              "text": "她的语速比平时慢。不是犹豫，更像在从很远的地方拿一件东西，怕动作太快会把它碰坏。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那个人说可以看月亮，也可以看土星。我那时候只知道土星有环，课本上画过，贴纸上也有。其实画得都很漂亮，漂亮到像装饰。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "然后你看到了？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。望远镜很小，镜筒有点旧，脚架还会晃。我踩着旁边的台阶，把眼睛凑上去。刚开始什么都看不清，只有一团亮的东西。我以为自己看错了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那个人说，小朋友，眼睛别贴太死，慢慢找。我那时候不懂什么出瞳距离，也不知道焦距，只觉得他让我离远一点很奇怪。因为越想看清，不是应该越靠近吗？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "后来发现不是？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。太近会什么都看不见。"
            },
            {
              "speaker": "narrator",
              "text": "她说这句时没有看我。我却莫名想到我们这段时间的备赛。太想抓住答案的时候，反而容易把视野压成一团亮斑。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "后来那个人帮我调了一下焦。我再看的时候，就看见一个很小很小的亮点，两边有一条细线。不是照片里那种大而清楚的环，也没有颜色，甚至有点像谁画歪了的一笔。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我第一反应不是惊讶，是怀疑。我问他是不是镜片上有划痕。他笑了，说不是，那就是环。我又看了一次，还是那条细线。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "很像你。先怀疑设备。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "怀疑设备合理。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "合理。然后呢？"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "然后我不太想把眼睛挪开。后面还有人在排队，我妈提醒我别占太久。我就又看了几秒。其实也看不出更多东西，只是想确认它不会消失。"
            },
            {
              "speaker": "narrator",
              "text": "林澈的手指轻轻按在文件袋边缘。她说到这里，视线还停在窗外，但我知道她看的已经不是窗外。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "可就是那一笔，让我突然觉得，原来它真的在那里。不是书上的图，不是老师说的知识点，不是“太阳系第六颗行星”这种句子。它离我很远，非常远，但它不是想象出来的。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我以前也知道宇宙很大。小孩都会说宇宙很大，可那种大像口号，像别人告诉你的形容词。看见土星环以后，我第一次感到宇宙是真实的。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "正在发生的事实。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。它没有因为我看不看就改变。它一直在那里，绕着太阳走，带着那圈环，按自己的速度。我们在路边摊旁边站着，旁边有人买烤肠，有小孩跑来跑去，电动车铃一直响，可土星还是在那里。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那天回家的路上，我一直在想这件事。我手里还拿着超市的袋子，袋子里有洗衣液和一包盐，特别重。可我脑子里一直是那个很小的亮点。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我觉得奇怪。明明我只是站在一个很吵的广场上，通过一台会晃的望远镜看了几秒钟，为什么会突然觉得世界变厚重了。不是简单的变大，是变厚。像平时看见的路灯、楼、作业本后面，还有很多层东西。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "后来我有一段时间会故意绕到那个广场。不是每次都有人架望远镜，有时候只有跳广场舞的人，有时候下雨，地上全是反光的水。我也不知道自己想找什么，可能只是想确认那天不是我记错了，不是小孩子把一件普通的事想得太厉害。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "可是越长大，我越觉得那天没有记错。因为很多东西如果只是漂亮，很快就会被新的东西盖过去；但那天看见的土星环并不漂亮，至少不是照片里那种漂亮，它小、晃、不清楚，还要排队。它留下来，是因为它是真的。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "世界变厚了。文学的说法。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那时候不会这么说。那时候只觉得回家路很短，可土星很远。两件事同时是真的。"
            },
            {
              "speaker": "narrator",
              "text": "这不像林澈平时说话。她平时会把句子压短，简直和GPT一样。他喜欢把情绪藏到定义和条件后面。如果说平时她说的话像水珠落向地面一样，那此时她的语言就仿佛溪水流淌一般。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "后来我回家查了很多东西。才知道那天看到的其实很模糊，望远镜口径也不大，大气抖动很厉害，能看到一点环已经算运气。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我还查了卡西尼环缝、公转周期、光从土星到地球要多久。那时候很多字看不懂，我就把能看懂的抄在一本本子上。抄完以后也没有人检查，但我自己很高兴。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你从小就写错题本的气质。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那不是错题本。是土星本。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "名字很朴素。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "封面更朴素。超市送的，印着葡萄。"
            },
            {
              "speaker": "narrator",
              "text": "我没忍住笑了。林澈看了我一眼，像是在警告我不要把葡萄和土星建立不必要的联系。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你连童年回忆都要校准误差。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "不校准会显得我小时候眼神特别好。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "也不是不行。林澈，六岁，肉眼确认土星环。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "不要造谣。"
            },
            {
              "speaker": "narrator",
              "text": "她低头整理了一下卡片，像刚才说得太多，需要用动作把自己重新收回来。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "所以你喜欢天文，是因为它真实？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "一部分。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "另一部分呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "它很远，但可以被了解、被掌握。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "还记得前段时间的课文吗？天地间的蜉蝣却能看到天地，我觉得这本身就是一件有趣的事。"
            },
            {
              "speaker": "narrator",
              "text": "车窗外的田地被一条河截开，河面反光，像有人把一张银纸放在地上。林澈的声音混在车轮声里，却一直很清楚。"
            },
            {
              "speaker": "narrator",
              "text": "这句话仿佛她真正想说的核心。她把窗帘往旁边拨了一点，光落在她的指节上。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不是完全掌握。人也掌握不了那么多。可是你能知道它大概在哪里，什么时候升起，什么时候看得见，什么时候只是被云挡住。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我喜欢这种感觉。不是因为它简单，正好相反，是因为它太大了，所以每算准一点、每看见一点，都很踏实。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "踏实？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。很多事情会变，成绩会变，别人怎么看你也会变。可是如果今晚天气好，土星就在那片天区。记得有一个登山家被问到，为什么要登山。他的回答是，“因为山就在那里”。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我以前有一段时间很讨厌别人说“喜欢就够了”。喜欢当然重要，可是只说喜欢，会让我觉得它很轻，好像一阵劲过去就没有了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我不是说喜欢一定要有成绩证明，也不是说喜欢就必须变成以后要做的专业。只是如果我真的喜欢一个东西，我会希望自己对它认真一点，至少不要在遇到麻烦的时候马上把它说成“算了也没那么喜欢”。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "天文不是这样。你喜欢它，也要背星图、算坐标、接受天气不好，接受望远镜里什么都看不见。可是正因为有这些麻烦，喜欢才不是一句话。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "所以你不是喜欢容易的东西。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不是。容易的东西也可以喜欢，但它不能假装成全部。"
            },
            {
              "speaker": "narrator",
              "text": "我突然明白她为什么总是对“差不多”那么警惕。她很早就知道，真正喜欢的东西经不起太随便的对待。"
            },
            {
              "speaker": "narrator",
              "text": "她说完以后，车厢里安静了一会儿。一种谁都不想急着把话接过去的安静。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那你现在还会想起那个路边望远镜吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "会。尤其是做题做到怀疑自己为什么要学这个的时候。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "比如现在？"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "现在还没到怀疑。只是有点怕。"
            },
            {
              "speaker": "narrator",
              "text": "她第一次把“怕”说得这么平。不是楼梯间那种被压到崩开的怕，也不是模拟卷后强行藏起来的怕，只是把它放到小桌板上，和卡片、笔、糖一起摆着。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "怕考不好？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "怕我把喜欢的东西又变成证明题。"
            },
            {
              "speaker": "narrator",
              "text": "她说这句话时，手指在文件袋边缘停了一下。那一瞬间我忽然明白，林澈并不是不怕输，她怕的是另一件更隐蔽的事：怕自己为了不输，把最开始那个站在广场上踮脚看土星的小孩一点点挤走。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "如果真的变成证明题，你会不喜欢它吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不知道。所以我才怕。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "有时候我分不清自己是在往前走，还是只是在把每一步都变成别人能看懂的结果。比如初赛通过、排名上升、错题减少，这些都很好，可如果只剩这些，我会觉得哪里不对。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你今天能说出来，应该就还没有只剩这些。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "也许。说出来不能解决，但能标记。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "证明给谁看？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "以前是给别人。后来发现也可能是给自己。"
            },
            {
              "speaker": "narrator",
              "text": "我没有立刻说“不会的”。这种话像把别人的题目抢过来乱写答案。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那这次我先去看它到底有多难。"
            },
            {
              "speaker": "narrator",
              "text": "这句话说出口，我自己也松了一点。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "如果很难呢？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那就承认它很难。然后能写多少写多少。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不像你以前。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "以前的我会怎么说？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "会说“问题不大”，然后开始乱翻资料。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "评价准确，但略伤人。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你以前让我别帮你把问题说得太好听。"
            },
            {
              "speaker": "narrator",
              "text": "我愣了一下，才反应过来她不是在讽刺，只是在把我以前随口说过的话很认真地记了下来，又在一个合适的时候还给我。林澈自己也像不太习惯这种说法，低头把卡片边缘对齐，耳尖却被车窗外的光照得有点红。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "听起来很像夏学姐会说的话。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我被污染了。"
            },
            {
              "img": "linSmile",
              "speaker": "lin",
              "focus": "lin",
              "text": "这个污染可以保留。"
            },
            {
              "speaker": "narrator",
              "text": "列车广播提醒下一站即将到达。林澈把卡片收回文件袋，动作比早上慢了一点。她没有再打开资料。"
            },
            {
              "speaker": "narrator",
              "text": "窗外的云压得很低，远处城市的轮廓浮出来。我们离比赛越来越近，可奇怪的是，刚才那段关于土星环的路，比任何一道押题都更像准备。"
            }
          ]
        },
        {
          "id": "ch5-s4",
          "title": "报到和行李",
          "lines": [
            {
              "bg": "arrivalStation",
              "clear": true,
              "speaker": "narrator",
              "text": "列车进站时，车厢里的人同时站起来，行李架被打开，背包和外套被一件件取下。陌生城市的名字在广播里响起，比准考证上的字更有重量。",
              "devNote": "后续可补决赛城市车站/集合点背景"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "xia",
              "focus": "xia",
              "text": "先别散。出站以后按队伍走，别看见奶茶店就自动偏航。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "学姐，你对我们高中生的意志力有偏见。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "我对糖水和空腹高中生的组合有经验。"
            },
            {
              "speaker": "narrator",
              "text": "出站口的风带着潮气。不是雨的潮，是更远的水汽，混在城市车流和人群的热气里。林澈抬头看了一眼站外的天，像在确认云层高度。"
            },
            {
              "speaker": "narrator",
              "text": "这座城市和我们想象的不太一样。车站外没有那种电影里一眼就能看见的海，只有高架、出租车排队的白线、志愿者举着集合牌在人群里踮脚，远处楼顶的广告屏不断闪着蓝色的光，可风里确实有一种不属于内陆的味道，湿、咸、黏在皮肤上，让人很难假装自己还站在熟悉的地方。"
            },
            {
              "speaker": "narrator",
              "text": "我拖着箱子跟在队伍后面，手里的资料袋被汗浸得有点软。林澈走在我旁边，步子不快也不慢，她没有像车上那样把所有注意力都放在题上，而是偶尔看一眼路标、志愿者胸牌和集合车的位置，像在把陌生城市拆成可以理解的几块。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你在看天气？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "湿度。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "刚到一个城市，第一眼看湿度。很专业。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我第一眼也看见你差点撞到柱子。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那是城市欢迎仪式。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "你不要给所有失误命名。"
            },
            {
              "bg": "competitionVenue",
              "clear": true,
              "speaker": "narrator",
              "text": "集合地点在承办学校的一栋教学楼前。门口拉着横幅，志愿者穿着统一颜色的马甲，手里拿着名单和号码牌。"
            },
            {
              "speaker": "narrator",
              "text": "校园里到处都是从不同地方来的学生。有的人一边排队一边背公式，有的人蹲在树荫下给家里打电话，也有人把行李箱靠在脚边，低头翻报到手册，像那几页纸能提前告诉他明天会遇到什么题。"
            },
            {
              "speaker": "narrator",
              "text": "我以前总觉得“决赛选手”这四个字应该有一种很明显的样子，至少要比普通高中生更沉稳一点。可真正站在这里才发现，大家也会弄丢笔、也会问厕所在哪、也会在横幅下面拍照时露出不知道该不该笑的表情。"
            },
            {
              "speaker": "narrator",
              "text": "我看到“CAO决赛报到处”几个字时，心脏像被轻轻拧了一下。之前它一直存在于通知、计划表和夏南星的语气里，现在突然变成了一张桌子、几支签字笔和一排等待填写的表格。"
            },
            {
              "bg": "competitionCheckin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "managerTeacher",
              "focus": "managerTeacher",
              "text": "同学，学校、姓名、身份证后四位，确认一下。资料袋一人一份，里面有日程、考场规则和住宿安排。"
            },
            {
              "speaker": "lin",
              "focus": "managerTeacher",
              "text": "谢谢。"
            },
            {
              "speaker": "narrator",
              "text": "林澈接过资料袋，先没有拆。她看了一眼封面上的姓名贴，确认无误，才把它夹进自己的文件袋。"
            },
            {
              "speaker": "managerTeacher",
              "focus": "managerTeacher",
              "text": "下一位。"
            },
            {
              "speaker": "zhou",
              "focus": "managerTeacher",
              "text": "周行。"
            },
            {
              "speaker": "narrator",
              "text": "我在登记表上写名字。写到学校名称时，手心出了点汗，笔尖在纸上停了一下。"
            },
            {
              "speaker": "narrator",
              "text": "表格上的项目都很具体，姓名、学校、身份证号、紧急联系人、过敏史、住宿房号确认。具体到有点不近人情，因为它完全不关心我从第四章末尾开始就没怎么睡好，也不关心林澈在车上讲过土星环；它只要求我把每个格子填满，并且不要写错。"
            },
            {
              "speaker": "narrator",
              "text": "我写到紧急联系人时停了一下，最后还是填了父亲的名字和号码。那串数字很熟，我却写得比平时慢，像每写一位都在承认，如果明天我真的撑不住，最先接到电话的人会是他。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "校名不要写简称。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我还没写错。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "提前提醒。"
            },
            {
              "speaker": "managerTeacher",
              "focus": "managerTeacher",
              "text": "你们两个一个学校？"
            },
            {
              "speaker": "zhou",
              "focus": "managerTeacher",
              "text": "对。"
            },
            {
              "speaker": "managerTeacher",
              "focus": "managerTeacher",
              "text": "那挺好，互相看着点。第一次来决赛，容易漏东西。"
            },
            {
              "speaker": "narrator",
              "text": "“互相看着点”这几个字从陌生老师嘴里说出来，忽然变得很正式。我签完名，林澈把我的资料袋也看了一遍。"
            },
            {
              "speaker": "narrator",
              "text": "她检查得很快，手指从日程、考场规则、住宿安排和号码牌上一一滑过，最后停在一张注意事项上。那上面写着禁止携带电子设备进入考场、提前十五分钟到达、身体不适及时报告。每一条都像把明天往我们眼前推近了一点。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你的考场在三楼。我的在四楼。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "终于不能互相监督了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "可以监督到楼梯口。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "林澈牌监考延伸服务。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "不提供服务。防止你走错楼层。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你现在连报到资料都要复核？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我只是看有没有漏页。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "漏了吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "没有。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那谢谢复核员。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "不用谢。复核免费。"
            },
            {
              "speaker": "narrator",
              "text": "我听出这句话在学陈砚，忍住没笑。林澈自己也像意识到了，低头把资料袋边缘压平。"
            },
            {
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "你们到了。"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒站在报到处另一边，肩上背着黑色书包。她像已经把整栋楼的动线都看过一遍，站的位置正好不挡路。"
            },
            {
              "speaker": "narrator",
              "text": "她的出现让周围的空气稍微变了个形状。不是因为她多吓人，而是她身上有一种已经进入比赛状态的安静，像别人还在报到处确认自己有没有漏带东西，她已经把明天的楼梯、座位、钟表位置都在脑子里过了一遍。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "你什么时候到的？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "上午。先看了考场楼。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "可以看？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "只能看外面。楼层和入口够了。明早不用边找路边紧张。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "你们强者连迷路都要提前消灭。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "迷路不加分。"
            },
            {
              "speaker": "narrator",
              "text": "她递给林澈一张折好的纸，是从报到手册上抄下来的楼栋简图。林澈接过来看了一眼，没有客气，也没有推辞。"
            },
            {
              "speaker": "narrator",
              "text": "那张纸边缘被折得很直，楼栋、入口、洗手间和集合点都用不同符号标了出来。顾望舒不是那种会说很多鼓励话的人，她给出的关心通常是一张图、一句提醒，或者一个提前排除掉的风险。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "谢谢。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "不用。今晚别做太多题，最多看规则和流程。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "你怎么也开始管我们停不停了。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "因为很多人到了赛场才开始假装努力。那通常是焦虑，不是复习。"
            },
            {
              "speaker": "narrator",
              "text": "这句话不重，却落得很准。林澈把楼栋简图夹到日程表后面，小声嗯了一下。"
            },
            {
              "bg": "hotelRoomNight",
              "clear": true,
              "speaker": "narrator",
              "text": "宿舍楼不算新，但很干净。男生和女生分在不同楼层，走廊里都是拖行李的声音。房间里有两张床，一张桌子和一盏台灯。"
            },
            {
              "speaker": "narrator",
              "text": "房间窗户正对着操场，窗台上有一点被海风吹来的灰。和我同屋的是另一个学校的男生，他一进门就把准考证贴在桌角，像贴住一个随时会逃跑的东西。我们互相点头，交换了姓名，然后很默契地没有继续聊天。"
            },
            {
              "speaker": "narrator",
              "text": "陌生室友、陌生床、陌生的开关位置，这些细节原本都很小，却在赛前晚上变得格外明显。我把枕头拍平，又把充电器插上，确认手机能收到信号，像这样就能让明天也跟着稳定一点。"
            },
            {
              "speaker": "narrator",
              "text": "我把行李放下，先拿出资料袋。日程表上写着：今晚报到，明天上午理论，下午数据处理，后天观测或面试安排另行通知。"
            },
            {
              "speaker": "narrator",
              "text": "这些字每一个都很普通，排在一起却让房间变窄了。像明天不是一场考试，而是一扇已经写好门牌的门。"
            },
            {
              "speaker": "narrator",
              "text": "手机震了一下。"
            },
            {
              "speaker": "lin",
              "text": "消息：资料袋没有漏页。住宿表第二页有作息时间。"
            },
            {
              "speaker": "zhou",
              "text": "消息：收到。你已经整理完了？"
            },
            {
              "speaker": "lin",
              "text": "消息：还差行李。"
            },
            {
              "speaker": "zhou",
              "text": "消息：你整理行李也要汇报进度吗？"
            },
            {
              "speaker": "lin",
              "text": "消息：防止你以为我又开始刷题。"
            },
            {
              "speaker": "zhou",
              "text": "消息：那你现在没刷？"
            },
            {
              "speaker": "lin",
              "text": "消息：没有。只是把卡片放到枕头旁边。"
            },
            {
              "speaker": "zhou",
              "text": "消息：这不算刷题，但有点像供起来。"
            },
            {
              "speaker": "lin",
              "text": "消息：你不要给卡片增加宗教功能。"
            },
            {
              "speaker": "narrator",
              "text": "我笑了一下，把自己的卡片也从书包里拿出来，放到桌上。想了想，又没有打开。"
            },
            {
              "speaker": "narrator",
              "text": "窗外天色暗下来，楼下有志愿者在喊集合吃饭。走廊里灯一盏盏亮起，陌生城市的夜晚从玻璃外面贴近。"
            },
            {
              "speaker": "narrator",
              "text": "我本来想翻一页规则，至少让自己看起来还在准备，可手指碰到纸边时又停住了。很多时候，焦虑最会伪装成勤奋，它让人觉得只要再多看一行、再多背一条，就能把明天的不确定性买下来。"
            },
            {
              "speaker": "narrator",
              "text": "可我知道现在不行。再看下去，我不会比下午更清醒，只会把已经整理好的东西重新搅乱。林澈能在消息里特意告诉我她没有刷题，大概也是因为她知道这件事对我们两个都不容易。"
            },
            {
              "speaker": "narrator",
              "text": "我忽然很想出去走走。不是为了复习，也不是为了熟悉路线。只是想在明天到来之前，确认自己还在一个真实的地方。"
            }
          ]
        },
        {
          "id": "ch5-s5",
          "title": "海边夜谈",
          "lines": [
            {
              "bg": "seasideNight",
              "clear": true,
              "speaker": "narrator",
              "text": "晚饭后，夏南星给了我们两个小时自由活动。范围不能超过学校外两条街，手机保持畅通，九点前回集合点。",
              "devNote": "后续可补海滨夜景背景"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linCasual",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "承办学校离海不远。沿着校门外那条路走下去，风里的潮味越来越明显。林澈把外套拉链拉高一点，文件袋没有带，只背了一个小包。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你真的不带卡片？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不带。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "进步明显。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "是因为包小。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你可以不用这么诚实。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那就算进步。"
            },
            {
              "speaker": "narrator",
              "text": "路边的店铺还开着，玻璃门里透出白色的灯。有人拎着外卖从我们旁边跑过去，塑料袋被风吹得哗啦响。再往前走，城市的声音变得松散，像被海风一点点吹开。"
            },
            {
              "speaker": "narrator",
              "text": "我们没有特意并肩走得很近，可人行道有几段被共享单车占了，只能一前一后地绕过去。每次绕完，林澈都会停半步等我，或者我会把脚步放慢一点等她，这些动作都小得不能算什么，可在一个陌生城市的夜里，它们比很多明说的话都更清楚。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你刚才吃饭吃得很少。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不饿。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这是事实，还是赛前胃口管理？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "都有。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那回去喝牛奶？"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "你也喝。你晚饭一直在戳米饭。"
            },
            {
              "speaker": "narrator",
              "text": "我本来想反驳，可仔细一想，她说得没错。原来互相观察这件事已经变得这么自然，自然到我们可以在饭桌上装作各吃各的，实际上却都知道对方把筷子停了几次。"
            },
            {
              "speaker": "narrator",
              "text": "海出现在路尽头时，我先听见声音。不是很大的浪，只是一层一层拍在岸边，低低的，像有人在黑暗里翻很厚的纸。"
            },
            {
              "speaker": "narrator",
              "text": "再往前几步，路灯忽然少了，栏杆外面铺开一整片黑。海面没有白天照片里那种清楚的蓝色，只在近岸处被灯光切出细碎的银边，远处偶尔有船灯慢慢挪动，慢到让人怀疑它们是不是其实停在那里，只是浪和风让我们产生了错觉。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "真的有海。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你之前怀疑通知造假吗？"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "不是。只是地图上看到和真的走到旁边，不一样。"
            },
            {
              "speaker": "narrator",
              "text": "我们沿着海边慢慢走。栏杆外是黑色的水，远处有船灯，像一串被风吹散的星。岸边有几个人在拍照，说话声被海风卷走，只剩断断续续的笑。"
            },
            {
              "speaker": "narrator",
              "text": "我原本以为海边会让人放松，真正站在这里却发现它只是把心里的东西放大了。白天在报到处被表格压住的紧张、在高铁上被卡片压住的疲惫、还有一些我不太敢细想的期待，都被海风一层一层吹出来，像岸边潮湿的石头，藏不住也擦不干。"
            },
            {
              "bg": "cgCh5LinSeasideProfile",
              "clear": true,
              "speaker": "narrator",
              "text": "林澈没有急着说话。她把手搭在栏杆上，袖口被风吹得贴住手腕。白天在车上说土星环的人，现在安静地看着海。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我小时候第一次认真看星星，是在乡下。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你外婆家？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "嗯。暑假，停电。"
            },
            {
              "speaker": "narrator",
              "text": "我说完这四个字，才发现它们太短了，短到像一条粗糙的目录，完全装不下那天晚上真实的温度、味道和声音。林澈没有催我，只把身体稍微转向这边，像给一台已经对准的望远镜留出继续调焦的时间。"
            },
            {
              "speaker": "narrator",
              "text": "这句话说出口以后，我才发现自己其实很久没有想起那天。不是忘了，只是它一直放在记忆里很里面的位置，像旧柜子里一件不常穿但舍不得丢的衣服。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那时候村里晚上很暗。不是城市这种有路灯、有广告牌、有车灯的暗，是灯一灭，整个地方都像被人按进水里。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我本来还挺害怕。我外婆拿着蒲扇，说没事，等会儿就来电。然后她把竹床搬到院子里，让我躺着等。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "院子里有一棵很老的枣树，树干弯得厉害，白天看起来有点普通，晚上停电以后就只剩一个黑影。井边的水桶还滴着水，泥地上有一块被踩平的地方，外婆把竹床拖过去的时候，床脚卡在那块土里，发出特别长的一声。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我那时候心里很烦，觉得没电视看，风扇也停了，蚊子还在耳边绕。小孩的世界很小，小到停一次电就像整个夏天都出了故障。"
            },
            {
              "speaker": "narrator",
              "text": "海风从脸侧吹过去，带着一点咸味。我看着远处的船灯，眼前却浮出另一个夜晚。潮湿的土地、井边的水桶、树叶里的虫声，还有竹床被搬动时发出的吱呀声。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我一躺下，就看见星星。很多。不是课本上那种规规矩矩标出来的很多，是一整片压下来，多到我不知道先看哪里。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "能看见银河吗？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "能。很淡，但能看见。像有人把白灰撒在天上，又用手抹开。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "它不是那种一眼就很壮观的照片，反而有点旧、有点淡，像一条被很多年风吹过的痕迹。我躺在竹床上看了很久，刚开始只是在数亮一点的星，数着数着就乱了，因为哪里都是。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "后来我忽然不想数了。不是因为数不过来，是因为我第一次觉得，数这个动作本身好像太小了。头顶上不是一张等着我标答案的图，而是一个正在把我、外婆、枣树、井、虫声和停电的村子一起装进去的夜晚。"
            },
            {
              "speaker": "narrator",
              "text": "我说完以后有点不好意思。这个比喻不够漂亮，也不够科学。林澈却没有纠正我。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "挺像。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那时候我还不认识几个星座，也不知道什么赤经赤纬。我只是突然觉得，我不是站在地上看一张天花板。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我是在里面。地也在里面，树也在里面，外婆的蒲扇声也在里面。我不是被宇宙放在外面参观的人，我本来就是它的一小部分。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这种感觉后来其实很少再有。回到城里以后，楼太高，灯太亮，作业也太多，我经常只是在书上看星图，或者在软件里拖动时间，知道某颗星什么时候升起，却不太能再感觉到自己也在那个运动里。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "所以第一次在楼顶上重新看到春季大曲线的时候，我才会那么在意。它不是最难的知识点，也不是最漂亮的星图，可它让我想起那张竹床，想起停电那晚我没有名字也没有成绩，只是躺在地球上，看见自己在一个很大的东西里面。"
            },
            {
              "speaker": "narrator",
              "text": "海浪拍上来，又退下去。岸边的灯把水面照成一片细碎的银色。我第一次把这件事讲给别人听，才发现它比我想象中更接近自己为什么会坐上这趟车。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "所以你喜欢天文，是因为它让你觉得自己在里面？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "差不多。听起来有点大。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不大。很具体。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "具体吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "竹床、停电、蒲扇、银河。听起来比“热爱星空”具体。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那时候我觉得，既然我也是里面的一部分，那我应该能弄懂一点。哪怕一点也行。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "后来开始做题，才发现弄懂一点也很难。越学越觉得自己小。不是那种被打击的小，是你知道前面还有很多东西，你没有资格装作都明白。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "但我又不讨厌这种小。它让我知道，如果一道题不会，我不是世界上唯一不会的人；如果一个晚上什么都看不见，也不是星空不存在。只是我站的位置、天气、工具、准备，都可能还不够。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "这不是坏事。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "嗯。可明天要考试，小也会紧张。"
            },
            {
              "speaker": "narrator",
              "text": "我终于把这句话说出来。白天在车上，我还能用玩笑把紧张拆开；到了海边，风一吹，那些玩笑像纸一样薄。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我怕自己考场上又急。怕看见没见过的题就乱套。也怕最后成绩出来，发现这几个月我们其实只是把自己感动得很努力。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我还怕回去以后别人问我考得怎么样，我只能说还行、还可以、尽力了。那些词都太空了，空到像一张没写完的答题纸。可如果不这么说，好像又不知道该怎么解释，为什么明明准备了这么久，还是有那么多不确定。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "还有一点更麻烦。我知道自己不该把结果全压在这次决赛上，可它毕竟就在这里。它像一块很亮的牌子，挂在路尽头，我说不看也会看见。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不是。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你都不让我铺垫一下？"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "这个不用铺垫。不是。"
            },
            {
              "speaker": "narrator",
              "text": "她看着海，语气很轻，却没有退。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "努力不是因为最后一定有好结果才成立。你改掉了很多坏习惯，我也改掉了一些。我们现在能把题讲清，能停下来，能承认害怕。这些都不是感动出来的。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "如果明天结果不好，也不能把前面的东西全部删掉。那样不准确。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你连安慰人都要讲准确性。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "不准确的安慰很容易坏。"
            },
            {
              "speaker": "narrator",
              "text": "她说这句话时看着海。林澈给人的安慰从来不是把明天说得简单，而是把已经发生过的事一件件捡回来。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你也承认你改了？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "一点。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "林澈式巨大进步。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "不要命名。"
            },
            {
              "speaker": "narrator",
              "text": "我笑了。笑完以后，胸口那块紧绷的地方松了一点。不是不紧张了，是紧张终于有地方放。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "其实我也有期待。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "什么？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "想知道我们到底能走到哪里。不是那种一定要拿什么名次的期待，是想在真正的赛场上试一次。把会的写出来，把不会的看清楚。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我想知道，那个在乡下竹床上觉得自己在宇宙里面的小孩，和现在这个坐高铁、填表格、带着准考证来决赛的人，中间到底有没有真的连起来。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "还有……想和你一起试。"
            },
            {
              "speaker": "narrator",
              "text": "最后一句说出来，海风忽然大了一点。也可能只是我自己的耳朵太热，把风声听重了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "就嗯？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我也想。"
            },
            {
              "speaker": "narrator",
              "text": "她没有看我，说得像在确认一条日程。可她的手指在栏杆上轻轻收紧了一下。"
            },
            {
              "speaker": "narrator",
              "text": "那两个字落下来的时候，我没有再追问。海浪声在我们中间铺开，反而把沉默变得很合适。我们都不是擅长把话说满的人，尤其是在这种稍微往前一步就会显得太亮的时刻，能把“我也想”说出来，已经足够让我记很久。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "明天如果你急，就先写小三角。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "如果你卡住呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "回头看题意。不要把卡住当结论。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "顾望舒语录也带来了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "有用就带。"
            },
            {
              "speaker": "narrator",
              "text": "我们在海边坐了一会儿。台阶有点凉，海风把她的头发吹乱，她没有立刻整理。远处船灯慢慢移动，像一道很慢的题，在黑暗里给出自己的已知条件。"
            },
            {
              "speaker": "narrator",
              "text": "我看着她被风吹乱的发尾，忽然很想把这一幕记得更清楚一点：不是为了以后拿来证明什么，只是因为明天之前的这个晚上不会再有第二次。等比赛开始，我们会坐进不同考场，被钟表和试卷分开，被各自的步骤、草稿和判断带走；而现在，我们还坐在同一段海堤上，听同一阵风从水面过来。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你在想什么？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "想明天之前的海风算不算复习内容。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "不算。但可以作为休息证据。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那回去以后，如果夏学姐问我们有没有好好休息，我就说证据充分。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "她会让你提交材料。"
            },
            {
              "speaker": "narrator",
              "text": "九点前十分钟，夏南星的消息准时弹出来。"
            },
            {
              "speaker": "xia",
              "text": "消息：自由活动结束。还在外面的，回集合点。不要让我出来捞人。"
            },
            {
              "speaker": "zhou",
              "text": "消息：收到。马上回。"
            },
            {
              "speaker": "lin",
              "text": "消息：我们在海边，十分钟内到。"
            },
            {
              "speaker": "xia",
              "text": "消息：很好。海边同学请带着完整脑子回来。"
            },
            {
              "speaker": "narrator",
              "text": "林澈把手机收起来，站起身。她拍了拍裙摆上的细沙，又看了一眼海。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "回去吧。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "嗯。明天见。"
            },
            {
              "img": "linSmile",
              "speaker": "lin",
              "focus": "lin",
              "text": "不是已经在同一个地方了吗？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那就明天考场见。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "明天考场见。"
            },
            {
              "speaker": "narrator",
              "text": "我们沿原路往回走。身后是海，前面是亮着灯的集合点。准考证、卡片、日程表都在各自的位置上，紧张也还在。"
            },
            {
              "speaker": "narrator",
              "text": "可这一刻，我不再只觉得自己是被推向考试的人。我是自己走过去的。林澈走在旁边，步子不快，和我的影子一起被路灯拉长。"
            },
            {
              "speaker": "narrator",
              "text": "她没有再提土星，我也没有再提乡下的星空，可那两件事像被我们分别放进了同一个口袋里，随着脚步轻轻碰在一起，发出只有自己能听见的响声。"
            },
            {
              "speaker": "narrator",
              "text": "明天会很难。我们都知道。可海风从背后吹来时，我忽然想起很久以前乡下的那片星空，也想起她说的土星环。远处的东西真实存在，我们也真实地走到了这里。"
            }
          ]
        }
      ]
    },
    {
      "id": "ch6",
      "title": "第六章：潮声里的钟表",
      "sections": [
        {
          "id": "ch6-s1",
          "title": "开幕式",
          "lines": [
            {
              "bg": "competitionVenue",
              "clear": true,
              "speaker": "system",
              "text": "第六章：潮声里的钟表"
            },
            {
              "bg": "hotelRoomDay",
              "clear": true,
              "speaker": "narrator",
              "text": "第二天早上，我是在手机震动前醒来的。窗帘缝里透进一条很白的光，房间里安静得只剩空调出风口的声音。陌生室友还在翻身，床单被他压出很轻的一声。"
            },
            {
              "speaker": "narrator",
              "text": "我盯着天花板看了几秒，才想起这里不是家，也不是学校宿舍。资料袋在桌上，准考证压在最上面，昨天晚上被我摆得很端正，端正到像它比我本人更知道今天该做什么。"
            },
            {
              "speaker": "narrator",
              "text": "我把十二张小卡片又数了一遍。第一张是“小三角写单位”，第二张是“先读题意”，第三张被林澈写得很小：不要把卡住当结论。"
            },
            {
              "speaker": "zhou",
              "text": "（不要把卡住当结论。）"
            },
            {
              "speaker": "narrator",
              "text": "我把那张卡片夹进准考证后面，又觉得这样太像把她的字带进考场，便重新拿出来，放回资料袋。最后进考场的只能是笔、尺、准考证和我自己。"
            },
            {
              "speaker": "narrator",
              "text": "洗漱间的水有点凉。我用冷水拍了拍脸，镜子里的人看起来没比昨晚成熟多少，头发有一撮压不下去，眼下也有一点浅浅的青色。"
            },
            {
              "speaker": "zhou",
              "text": "（全国决赛选手，发型控制失败。）"
            },
            {
              "speaker": "narrator",
              "text": "这句吐槽只在脑子里转了一下，没有让我真的轻松多少。可它至少证明我还会胡思乱想，不是完全被考试按住了。"
            },
            {
              "speaker": "xia",
              "text": "消息：七点二十楼下集合。带准考证、身份证、笔袋。不要带电子设备进考场。早餐必须吃。"
            },
            {
              "speaker": "xia",
              "text": "消息：重复一遍，早餐必须吃。别让我在考场门口捡低血糖选手。"
            },
            {
              "speaker": "zhou",
              "text": "消息：收到。正在吃。"
            },
            {
              "speaker": "narrator",
              "text": "我看了一眼桌上的面包，还没拆。为了让这句消息不显得太假，我把包装撕开，咬了一口。面包有点干，咽下去时喉咙发紧。"
            },
            {
              "bg": "competitionVenue",
              "clear": true,
              "speaker": "narrator",
              "text": "楼下集合点已经站了不少人。志愿者举着牌子，带队老师在点名，远处礼堂门口挂着横幅，红底白字在早晨的光里醒目得过分。"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "林澈站在夏南星旁边，校服外套扣得很整齐，头发被海风吹得轻轻动。她手里没有题，也没有卡片，只拿着资料袋。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "周行，早餐吃了吗？"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "吃了。面包。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "面包不算完整早餐，但今天先放过你。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "水带了吗？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "带了。你呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "带了。还有糖。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "学姐的生存包开始民间流通了。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "糖不属于生存包专利。"
            },
            {
              "speaker": "narrator",
              "text": "她把一颗薄荷糖放到我手心，动作很快，像只是顺手处理一件小事。我低头看着那颗糖，忽然想起昨晚海边她说的“我也想”。"
            },
            {
              "speaker": "narrator",
              "text": "那句话没有变成今天早晨的特殊待遇。我们仍然在集合队伍里，仍然要点名、排队、听注意事项，仍然不能把所有紧张说成一句漂亮的话。可那颗糖在手心里压出一点很轻的重量。"
            },
            {
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "礼堂入口在右侧。左侧是参赛队伍拍照，不要排错。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "你连拍照队伍都侦查过了？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "它挡住了主入口。很难不看见。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "你昨晚睡得好吗？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "还可以。半夜楼道有人背公式，三分钟后被老师请回房间。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "听起来像赛前限定怪谈。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "怪谈一般不会背错岁差项。"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒说完就往前走，林澈看着她的背影，嘴角很轻地动了一下。这个早晨终于有了一点不像考试的东西。"
            },
            {
              "bg": "competitionOpeningCeremony",
              "clear": true,
              "speaker": "narrator",
              "text": "开幕式在礼堂举行。座位按照省份和学校分区，椅背上贴着号码。我们坐在靠中间的位置，前排是一群外校学生，几个人小声讨论昨晚看过的流程表。"
            },
            {
              "speaker": "narrator",
              "text": "舞台上摆着长桌和麦克风，背景板上印着星轨图案。那张图案很漂亮，却没有昨天海边的风，也没有高铁窗外一闪而过的山。它更像一个正式的标记，告诉所有人：你们已经从练习、通知和想象里走到了这里。"
            },
            {
              "speaker": "narrator",
              "text": "主持人宣布开幕时，礼堂灯光暗了一点。掌声从前排往后推，像一阵很整齐的雨。"
            },
            {
              "speaker": "narrator",
              "text": "领导致辞、承办学校介绍、竞赛委员会老师说明考试纪律，这些内容都不算新鲜。不能夹带资料，不能交换工具，发现身体不适要举手，答题卡要写清准考证号。每一句我都听懂了，却又觉得它们离自己很远。"
            },
            {
              "speaker": "narrator",
              "text": "直到负责考试的老师说，上午决赛理论考试两小时，下午选拔赛综合考试两小时，中午不得讨论上午试题，我才感觉心脏落回胸腔。"
            },
            {
              "speaker": "zhou",
              "text": "（两场。四个小时。）"
            },
            {
              "speaker": "narrator",
              "text": "我以前写过三小时模拟卷，也在晚自习里把一套题拆到半夜。可真正听见“两小时”这个长度从麦克风里出来，还是觉得它变成了某种实体，像两块很重的玻璃，要从上午和下午分别压下来。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "别一直看时间表。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我表现得这么明显？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你把日程折了三次。"
            },
            {
              "speaker": "narrator",
              "text": "我低头看，才发现纸边真的被我折出了一道很深的痕迹。林澈没有伸手替我压平，只把自己的日程表往里收了收。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "上午只管上午。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "下午怎么办？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "下午再管下午。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这句话很不像你。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "像我。只是你没听过。"
            },
            {
              "speaker": "narrator",
              "text": "开幕式结束前，全体参赛选手起立合影。礼堂里有人调整领带，有人把号码牌扶正。林澈站在我旁边，肩膀和我的袖口隔着很窄的一段距离。"
            },
            {
              "speaker": "narrator",
              "text": "摄影老师喊三、二、一时，我没有看镜头外的横幅，也没有看舞台上的星轨图案。我只听见身边有人很轻地吸了一口气，然后和我一起把那口气压住。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "好了。接下来所有人按楼层去考场。不要跑，不要回头找人聊天，不要临时讨论公式。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "最后一条针对性很强。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "针对所有赛前突然想把人生补完的人。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "走吧。到楼梯口。"
            },
            {
              "speaker": "narrator",
              "text": "三楼和四楼的分岔就在楼梯平台。人群一层一层往上走，鞋底踏在台阶上，声音又密又轻。"
            },
            {
              "speaker": "narrator",
              "text": "到了三楼，林澈停住。她的考场还在上一层，我的考场就在走廊尽头。我们之间忽然多出一段很短的距离，短到只要走几步就能跨过去，可考试开始以后，那段距离会被两张试卷、两个监考老师和两小时的钟表拉得很长。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "小三角。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "题意。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "还有水。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你也是。别把两小时当成无限时间。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "知道。"
            },
            {
              "speaker": "narrator",
              "text": "她说完向楼上走。我看着她的背影消失在转角，手指在准考证边缘停了一下。然后我转身走向自己的考场。"
            }
          ]
        },
        {
          "id": "ch6-s2",
          "title": "第一场：决赛考试",
          "lines": [
            {
              "bg": "competitionExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "考场在三楼尽头。窗户朝东，阳光被百叶窗切成几条斜线，落在桌面上。每张桌子右上角贴着座位号，桌洞被清空，只留下木板上几道旧划痕。"
            },
            {
              "speaker": "narrator",
              "text": "我坐下时，前排男生正在反复调整笔的位置。他把黑笔、铅笔、尺子排成一条线，又把尺子往左挪了两厘米，像这样就能把上午的误差提前消掉。"
            },
            {
              "speaker": "narrator",
              "text": "监考老师拆封试卷袋，塑料封条被撕开时发出很清楚的一声。那一刻，整个考场安静下来，连窗外树叶的声音都像被人压低了。"
            },
            {
              "speaker": "narrator",
              "text": "九点整，铃声响起。上午决赛理论考试，两小时。"
            },
            {
              "bg": "cgCh6ExamPaperPov",
              "clear": true,
              "speaker": "narrator",
              "text": "我先写姓名和准考证号。最后一位数字写完，笔尖停了半秒。我听见自己心跳很快，快到像有人在桌子下面敲一个不合拍的节拍器。"
            },
            {
              "speaker": "zhou",
              "text": "（先读题。不要急着证明自己。）"
            },
            {
              "speaker": "narrator",
              "text": "第一题是时间系统和地方恒星时。题干不长，条件却很密，日期、经度、时区和观测目标的赤经排在一起，像一群看起来都认识、实际一不小心就会走散的人。"
            },
            {
              "speaker": "narrator",
              "text": "我本能地想先把公式写下去，笔尖刚碰到草稿纸，又停住了。我在题干旁边画了一个很小的三角，把单位写在三角旁边：小时，度，东经。"
            },
            {
              "speaker": "zhou",
              "text": "（小三角写单位。很好，第一步像个人。）"
            },
            {
              "speaker": "narrator",
              "text": "九点十五分，我把第一题算到最后一行。答案不是很漂亮，却和选项范围对得上。我没有立刻涂卡，而是把关键换算圈出来。以前我会觉得这样浪费时间，现在我知道，这是给后面的自己留一根绳子。"
            },
            {
              "speaker": "narrator",
              "text": "第二题是球面三角，要求判断某个观测时刻目标是否越过指定高度。图画得很简单，一条地平圈，一个天顶，一个目标点，简单到让我有点不放心。"
            },
            {
              "speaker": "narrator",
              "text": "我在草稿纸上重画了一遍。画到一半，脑子里忽然冒出林澈的声音：图简单不等于条件少。"
            },
            {
              "speaker": "zhou",
              "text": "（行，林澈同学，不用亲自来监考。）"
            },
            {
              "speaker": "narrator",
              "text": "这个念头让我差点笑出来。我把笑意按住，重新看题干，果然在最后一句找到一个容易漏掉的“大气折射忽略”。如果不忽略，判断边界会变得很别扭；忽略以后，题目反而干净很多。"
            },
            {
              "speaker": "narrator",
              "text": "九点三十七分，前排有人翻页，纸张摩擦的声音像一道提醒。我才发现自己第二题写得太慢。还有四道大题，时间没有因为我认真就变多。"
            },
            {
              "speaker": "zhou",
              "text": "（先做能稳住的。）"
            },
            {
              "speaker": "narrator",
              "text": "第三题是恒星光度和视星等，计算量不算大。我没有在每一步都写满解释，只把容易丢负号的位置标出来。这里是我和林澈训练时争过很多次的地方：她怕省略条件，我怕写到来不及。现在我终于知道，中间不是妥协，是选择哪些步骤必须留下。"
            },
            {
              "speaker": "narrator",
              "text": "九点五十五分，我完成第三题。还有一小时零五分钟。窗外有鸟叫了一声，很快被走廊里的脚步声盖过去。"
            },
            {
              "speaker": "narrator",
              "text": "第四题是小天体周期和半长轴。题干里给了一组观测数据，要求判断它更接近哪类运动状态。这个题型我练过，可真正摆在决赛卷上时，它变得比练习册上陌生。"
            },
            {
              "speaker": "narrator",
              "text": "我第一遍读完，没有找到入口。第二遍读完，还是没有。心里某个地方开始发紧，像昨天海边那股风忽然钻进考场，吹得草稿纸边缘轻轻动。"
            },
            {
              "speaker": "zhou",
              "text": "（不要把卡住当结论。）"
            },
            {
              "speaker": "narrator",
              "text": "我把笔放下，喝了一小口水。水已经不凉了，带着一点塑料瓶的味道。我没有继续盯着公式，而是把题干里的“连续三晚”“近似同一观测地”和“忽略摄动”分别画线。"
            },
            {
              "speaker": "narrator",
              "text": "入口终于从第三个条件里露出来。它不是让我完整求出参数，而是让我用变化趋势排除两个明显错误的选项。之前我把题想得太大，像一上来就想把整片海测完。"
            },
            {
              "speaker": "narrator",
              "text": "十点二十一分，我写完第四题的一半。手心出了汗，笔杆有点滑。我把笔换到另一支，才发现备用笔的握感不太一样。"
            },
            {
              "speaker": "zhou",
              "text": "（别让文具决定天体力学。）"
            },
            {
              "speaker": "narrator",
              "text": "这句明明是我想象出来的，却很像林澈会说的话。我把第一支笔在纸巾上擦了擦，又换回来。"
            },
            {
              "speaker": "narrator",
              "text": "第五题是一道综合题，给出一张观测日志和几组误差范围，要求判断哪次观测最可靠。题目没有难到完全看不懂，却很容易让人把“数据最多”误当成“最可靠”。"
            },
            {
              "speaker": "narrator",
              "text": "十点三十八分，我开始做第五题。写到第二小问时，我忽然想起第三章那次失败观测。林澈站在云层下面，坚持把无效数据也记进本子。那时候我觉得她太执拗，现在这份卷子却在问同一个问题：看不见的时候，什么仍然值得被记录？"
            },
            {
              "speaker": "narrator",
              "text": "我没有把这个想法写进答题纸。考试不奖励抒情。我只把误差范围、仪器状态和观测时间分别列出来，按我们以前复盘时的方式，一项一项排除。"
            },
            {
              "speaker": "narrator",
              "text": "十点五十二分，最后八分钟。第六题还剩一个小问，第四题最后的判断也不够稳。我看着草稿纸，脑子里短暂地空了一下。"
            },
            {
              "speaker": "narrator",
              "text": "以前这种时候，我会想把所有没写完的地方都抢救一下，最后每个地方都只剩半口气。现在我把笔尖压在答题纸上，先补第四题的判断理由。"
            },
            {
              "speaker": "zhou",
              "text": "（一个完整结论，比三个半截公式有用。）"
            },
            {
              "speaker": "narrator",
              "text": "十点五十八分，我回到第六题。最后小问只写了两行，算不上漂亮。我没有时间重算，只在答案旁边补上了假设条件。"
            },
            {
              "speaker": "narrator",
              "text": "十一点整，铃声响起。监考老师说停笔。"
            },
            {
              "speaker": "narrator",
              "text": "我把笔放下时，才发现右手指尖有点麻。卷子被收走，答题卡离开桌面的那一瞬间，我本能地想抓回来再看一眼。"
            },
            {
              "speaker": "narrator",
              "text": "可它已经被放进一叠纸里，和其他人的答案混在一起。两小时结束得很干脆，不给任何人补一句解释的机会。"
            },
            {
              "bg": "competitionExamHallway",
              "clear": true,
              "speaker": "narrator",
              "text": "走出考场时，走廊里全是压低的声音。有人说第三题答案是不是负的，有人说第四题根本不是完整参数题，还有人笑着骂自己第一题把时区看错。"
            },
            {
              "speaker": "narrator",
              "text": "我把那些声音从耳朵旁边放过去，没有接。不是不想对答案，是我知道自己现在只要听见一个不同结果，就会把整场考试从第一题开始重新拆开。"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "林澈从四楼下来时，手里攥着水瓶。她看见我，没有马上问考得怎么样，只把瓶盖拧开又拧回去。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "上午只管上午。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "现在上午结束了。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那可以管午饭。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "也对。"
            },
            {
              "speaker": "narrator",
              "text": "她没有笑，但瓶盖终于不再被她反复拧。我们并排往楼下走，谁也没有问第一题答案。"
            }
          ]
        },
        {
          "id": "ch6-s3",
          "title": "第二场：选拔赛考试",
          "lines": [
            {
              "bg": "coastalCityDay",
              "clear": true,
              "speaker": "narrator",
              "text": "午饭安排在食堂二楼。餐盘里有米饭、青菜、鸡腿和一碗汤。所有人都坐得比平时安静，像刚刚从水里出来，还没完全找回说话的方式。"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "xia",
              "focus": "xia",
              "text": "午休纪律：不对答案，不复盘，不假装自己只是随便聊聊。下午选拔赛综合考试两小时，比上午更吃状态。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "那可以讨论鸡腿吗？"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "鸡腿允许。鸡腿不影响省队选拔。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "汤有点咸。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这是今天中午最安全的话题。"
            },
            {
              "speaker": "narrator",
              "text": "林澈低头喝汤，眉头很轻地皱了一下。我知道她不是只在判断咸淡。她的手指还留着上午考试后的紧，筷子夹菜时比平时慢。"
            },
            {
              "speaker": "narrator",
              "text": "我也一样。上午那张卷子明明已经交了，却像还在脑子里翻页。有几个地方我越不想想，越会自己浮出来，带着“也许你那里错了”的声音。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "你们两个，现在每人吃三口饭。吃完再发呆。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "社长连发呆也要排班。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "对，未经批准的发呆效率很低。"
            },
            {
              "speaker": "narrator",
              "text": "我们真的各自吃了三口饭。动作有点幼稚，却很有效。米饭咽下去以后，身体才像终于承认下午还要继续工作。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "下午不要把上午错误带进去。"
            },
            {
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "顾望舒端着餐盘坐到斜对面。她没有问我们上午怎么样，像默认每个人都有一张不该马上摊开的卷子。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "这句话听起来像你已经把上午错误处理完了。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "没有。只是现在处理没收益。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "下午更偏选拔？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "通常是。题量不一定大，但会看思路能不能撑住。不会的题也要写出能判断的部分。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "也就是说，下午连不会都要写得有水平。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "竞赛经常这样。不会不是零和一之间的事。"
            },
            {
              "speaker": "narrator",
              "text": "这句话比鼓励有效一点。它没有说下午会简单，只是提醒我，就算遇到不会，仍然有可以写的边界。"
            },
            {
              "bg": "competitionExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "下午两点，选拔赛综合考试开始。"
            },
            {
              "speaker": "narrator",
              "text": "同一个考场，同一个座位，阳光的落点却变了。上午落在桌面的光线移到地上，窗边的空气被晒得发白。人也比上午更安静，像每个人都知道，真正难撑的不是第一场，而是把自己从第一场里捞出来以后，还能不能坐稳第二场。"
            },
            {
              "speaker": "narrator",
              "text": "试卷发下来，我先看总页数。四页，三道大题。比上午少，但题干每一段都很长。第一道是数据处理，第二道是观测方案设计，第三道是开放式推理。"
            },
            {
              "speaker": "zhou",
              "text": "（少不代表轻。）"
            },
            {
              "speaker": "narrator",
              "text": "第一题给了一组变星观测数据。表格密密麻麻，时间、星等、误差、观测条件分成几列。题目要求估计周期，并说明异常点是否应该剔除。"
            },
            {
              "speaker": "narrator",
              "text": "我第一眼看见“异常点”三个字，脑子里自动亮起红灯。以前我总想把不顺眼的数据删掉，让答案更干净。林澈会盯着我说，删掉之前先说明为什么。"
            },
            {
              "speaker": "narrator",
              "text": "两点十二分，我在草稿纸上把数据按相位重新排。排到第三组时，发现有一个点偏得厉害，却正好对应备注里的薄云。这个点可以讨论，但不能假装它不存在。"
            },
            {
              "speaker": "narrator",
              "text": "我写下“保留并降低权重”。这个答案不够绝对，甚至有点不讨人喜欢，可它比直接删除更诚实。"
            },
            {
              "speaker": "narrator",
              "text": "两点三十三分，第一题暂时完成。我的脑子已经开始发热。上午考试时的紧张像一根绷直的线，下午则像一块湿布，慢慢盖住反应速度。"
            },
            {
              "speaker": "narrator",
              "text": "可我也很清楚，第一题没有把我拖住。周期估计、异常点处理、权重说明，几个最容易写空或者写绝对的地方，我都给出了理由。那种感觉很陌生，不是轻松，而是手里的东西终于和题目咬上了。"
            },
            {
              "speaker": "narrator",
              "text": "第二题要求设计一次简化观测方案，目标是验证某颗小行星的亮度变化是否来自自转。题目没有给完整设备，只给了一台小口径望远镜、一台相机和三晚可能的天气窗口。"
            },
            {
              "speaker": "narrator",
              "text": "我看着“三晚”两个字，忽然想起林澈昨晚说地图上看到和真的走到旁边不一样。题目里的三晚也不是抽象数字，它们有云、有湿度、有月光、有设备极限。"
            },
            {
              "speaker": "narrator",
              "text": "我把方案拆成三段：观测前校准、观测时保持同一比较星、观测后处理误差。写到比较星选择时，我突然卡住。"
            },
            {
              "speaker": "narrator",
              "text": "卡住不是因为完全不会，而是因为能写的太多。每个处理办法都像可以展开，每个展开又像不够完整。时间在这种时候最可怕，它不是催你快点，而是让你怀疑每一个选择都还差一点。"
            },
            {
              "speaker": "zhou",
              "text": "（回头看题意。目标是验证亮度变化，不是设计一台完美天文台。）"
            },
            {
              "speaker": "narrator",
              "text": "我把“同一比较星”和“覆盖一个完整变化周期”写在最前面。那些更复杂、更漂亮的设备细节被我压到后面，只留必要部分。"
            },
            {
              "speaker": "narrator",
              "text": "写到这里时，我第一次在考场里产生一种很轻的确定感。不是确定答案全对，而是确定自己没有被题目牵着走。我知道这道题真正要看的不是设备清单，而是如果现实条件不完整，我还能不能把观测目标、误差来源和失败预案放在同一张纸上。"
            },
            {
              "speaker": "narrator",
              "text": "三点零四分，我开始第三题。题干只有半页，却让我心里一沉。它给出一个看似矛盾的观测结论：同一目标在不同资料中分类不同，要求解释可能原因，并给出进一步确认的方法。"
            },
            {
              "speaker": "narrator",
              "text": "这不是一道有唯一入口的题。它像一条走廊，左右都有门，每扇门后面都可能有东西。我盯着题干看了很久，久到监考老师经过我身边时，我才意识到自己已经好几分钟没写字。"
            },
            {
              "speaker": "zhou",
              "text": "（别空着。）"
            },
            {
              "speaker": "narrator",
              "text": "我先写下最朴素的可能：观测波段不同，时间尺度不同，分类标准更新，样本误差，目标本身可能存在变化。写完这一行，恐惧稍微退了一点。原来开放题也可以先把地面踩出来。"
            },
            {
              "speaker": "narrator",
              "text": "三点二十六分，我写到确认方法。光谱、持续测光、交叉匹配历史数据，每一个词都熟，可把它们连成一段能让人相信的方案并不容易。"
            },
            {
              "speaker": "narrator",
              "text": "手腕开始酸。我把笔放下，轻轻甩了一下手。窗外的海风吹不到这里，只有风扇在头顶转，声音很钝。"
            },
            {
              "speaker": "narrator",
              "text": "三点三十八分，最后二十二分钟。我没有写完第三题最后的风险评估。上午那种想抓回答题卡的冲动提前来了，像一个人在我身后说，再快一点，再多一点，不然你会输。"
            },
            {
              "speaker": "zhou",
              "text": "（输赢先放后面。把你能判断的部分写完。）"
            },
            {
              "speaker": "narrator",
              "text": "我把风险评估拆成三条：数据不足会导致周期误判，比较星不稳会扩大系统误差，分类标准不一致会让结论只能暂定。"
            },
            {
              "speaker": "narrator",
              "text": "写完第三条时，离结束还有九分钟。我回到第一题，补上异常点处理的理由；又回到第二题，在观测方案最后加了一句“若第三晚天气失败，至少保留前两晚相位覆盖并说明限制”。"
            },
            {
              "speaker": "narrator",
              "text": "这句写得很现实。它没有让方案变得完美，却承认现实会坏掉一部分计划。很奇怪，我写下它时，反而比写那些漂亮设备参数更安心。那一刻我甚至有点怀疑，自己是不是第一次在真正的选拔题里写出了一个像样的答案。"
            },
            {
              "speaker": "narrator",
              "text": "三点五十九分，监考老师开始提醒时间。我的最后一个句号写得有点歪。"
            },
            {
              "speaker": "narrator",
              "text": "四点整，铃声响起。选拔赛综合考试结束。"
            },
            {
              "speaker": "narrator",
              "text": "这一次我没有想抓回卷子。不是因为我敢说自己一定能排到哪里，而是因为手腕和脑子都已经知道，这张卷子上最关键的几处我没有躲过去。再多一分钟也不会让它变成另一个人的答案，可它也不需要变成另一个人的答案。"
            },
            {
              "bg": "competitionExamHallway",
              "clear": true,
              "speaker": "narrator",
              "text": "走廊里比上午更吵。有人直接坐到地上，有人仰头闭眼，有人说自己第三题写得像申请科研经费。我靠在墙边，慢慢把准考证收进资料袋。"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linThinking",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "林澈下楼时，脸色比上午更白一点，眼神却很清。她看见我，先停了一下，像要确认自己是不是已经从考场里出来，又像还在脑子里把最后一题的结构往回折。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "结束了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。结束了。"
            },
            {
              "speaker": "narrator",
              "text": "她重复了一遍，声音很轻。我忽然明白，考试结束这件事也需要被确认。两小时里，人的一部分会被留在题目里，走出门以后，还要一点时间才回得来。可她没有那种被卷子打散后的茫然，反而像是刚从一条很长、很窄的路上走出来，鞋底沾着灰，却知道自己仍然踩在路上。"
            }
          ]
        },
        {
          "id": "ch6-s4",
          "title": "考后交流",
          "lines": [
            {
              "bg": "coastalCityDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "晚风从操场另一侧吹过来，带着一点海边城市特有的潮味。考试楼外的台阶上坐满了人，大家终于可以说话，却又不知道从哪一句开始最安全。"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "我和林澈没有立刻去食堂。我们沿着楼外的小路走了一段，绕开人群，在一棵树下面停下来。树影落在地上，被风吹得不断变形。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "要不要先说一句规定用语？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "什么？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "“别想了，都考完了。”"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "这句话没用。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我也觉得。那换一句：“可以想，但不要把自己判掉。”"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "这句好一点。"
            },
            {
              "speaker": "narrator",
              "text": "她靠在树旁的矮墙边，把水瓶放在膝盖上。瓶身被她握得有点变形，透明塑料发出很轻的响。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "上午第四题，你做出来了吗？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "做了一半。最后判断写了理由，不确定数值。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我也是。它不是完整参数题。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你也这么想？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。题目在诱导我们往完整参数上想，但条件不够。"
            },
            {
              "speaker": "narrator",
              "text": "听见她说“条件不够”时，我胸口那块地方松了一点。不是因为我确定对了，而是因为那道题终于不再像一个只有我看不懂的陷阱。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "下午第一题那个异常点，你删了吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "没有。降权。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我也是。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那至少这一点我们没有互相带偏。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这算考后最高级别安慰吗？"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "不算。只是事实。"
            },
            {
              "speaker": "narrator",
              "text": "她说完，自己也像觉得这句话有点太硬，停了一下，又补了一句。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "但事实还不错。"
            },
            {
              "speaker": "narrator",
              "text": "我笑了一下。林澈能把一句安慰拆成事实和评价两部分，这件事本身就很林澈。可我现在已经不觉得这种认真难接，反而觉得它像一个稳定的坐标点。她很少在结果出来前说“不错”，哪怕只是在说异常点处理，我也听得出来，那不是随口安慰。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你下午第三题呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "写到最后很挤。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "你说很挤，一般是字间距从一点五毫米变成一点二毫米。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "不是。是真的挤。"
            },
            {
              "speaker": "narrator",
              "text": "她把瓶盖拧开，喝了一口水。夕阳从教学楼边缘落下来，把她的侧脸照得很淡。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我前面把分类标准分成了四类，观测波段、时间尺度、资料年代，还有目标本身变化。后面确认方法写了光谱和持续测光，交叉匹配只写了一半。最后风险评估写了两条半。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "两条半听起来比三条还高级。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "不高级。只是第三条没有收住。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "但你主干写全了。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "应该算写全了。开放题不是让人写完美答案，是看你能不能把不确定性说清楚。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那你说清楚了吗？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我觉得说清楚了大部分。"
            },
            {
              "speaker": "narrator",
              "text": "这句话被她说得很平。可我知道，对林澈来说，在结果出来前承认自己“觉得说清楚了”并不容易。她以前总想在每一个条件后面找到一个完全可靠的结论，好像只有那样，她才有资格继续往前。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那就不是乱。是没来得及写漂亮。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你怎么知道？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "因为你现在复盘的是结构顺序，不是入口在哪里。入口已经找到了。"
            },
            {
              "speaker": "narrator",
              "text": "林澈看了我一眼。不是很明显的看，只是视线从水瓶移到我脸上，又很快移开。"
            },
            {
              "img": "linNeutral",
              "speaker": "lin",
              "focus": "lin",
              "text": "你今天倒是会推理。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "选拔赛训练成果。"
            },
            {
              "speaker": "narrator",
              "text": "我们没有把每一道题都对完。说到一半时，夏南星远远喊我们去吃晚饭。她的声音从操场边传来，还是那种能把人从情绪里拎出来的清楚。"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "xia",
              "focus": "xia",
              "text": "两位选手，考后交流可以，考后互相审判不行。食堂快没菜了。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "我们在进行温和复盘。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "温和复盘也要吃饭。低血糖会把温和变成悲壮。"
            },
            {
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "你们下午第三题写分类标准了吗？"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "刚说不互相审判。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "我只是问结构。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "写了。确认方法不完整，但主干应该在。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "那就很好。那题本来就写不满。能把不确定来源分层，再给出可执行的确认方法，分不会低。"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒的语气还是很平，像在说一个与情绪无关的事实。可这一次，我看见林澈的肩膀明显松了一点。我也没有接着谦虚，因为我忽然意识到，我们刚才说出来的那些判断，确实不像考砸后为了自保找来的理由。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "你写满了吗？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "没有。最后一问也不完整。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "原来强者也会不完整。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "强者如果不完整，至少会知道哪里不完整。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "好，这句可以贴到训练室。现在去吃饭。"
            },
            {
              "speaker": "narrator",
              "text": "我们往食堂走。天色渐渐暗下来，承办学校的路灯一盏一盏亮起。上午和下午的两张卷子还在脑子里，却不再像刚出考场时那样乱撞。"
            },
            {
              "speaker": "narrator",
              "text": "林澈走在我旁边，手里仍然握着那只水瓶。走到食堂门口时，她忽然停了一下。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "你上午第一题，时区没看错吧？"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "没有。我画了小三角。"
            },
            {
              "img": "linSmile",
              "speaker": "lin",
              "focus": "lin",
              "text": "那就好。"
            },
            {
              "speaker": "narrator",
              "text": "她说完就往前走，像这只是一次普通确认。我站在原地半秒，才跟上去。考试已经结束，结果还没有来，可这一刻，我突然觉得我们并不是只把四个小时交给了钟表。"
            },
            {
              "speaker": "narrator",
              "text": "我们也把以前那些争执、卡片、错题模板、海边夜谈，悄悄带进了每一张草稿纸里。"
            }
          ]
        },
        {
          "id": "ch6-s5",
          "title": "闭幕式",
          "lines": [
            {
              "bg": "hotelRoomNight",
              "clear": true,
              "speaker": "narrator",
              "text": "成绩在第二天上午公布。前一晚我没有睡好，梦里一直有人收卷，收走的却不是答题卡，而是我放在枕头边的十二张卡片。"
            },
            {
              "speaker": "narrator",
              "text": "醒来时天刚亮，手机上没有新消息。走廊里有人已经起床，拖鞋踩在地面上，声音从门缝里传进来。"
            },
            {
              "speaker": "narrator",
              "text": "我坐在床边，把鞋带系了两遍。第一次系得太紧，第二次又太松。最后我干脆站起来，把资料袋拿上，像昨天一样确认准考证还在。其实今天已经不用它了。"
            },
            {
              "bg": "resultBoard",
              "clear": true,
              "speaker": "narrator",
              "text": "公布栏前挤满了人。纸质名单被贴在玻璃板后面，旁边还有电子屏滚动显示奖项和选拔赛综合排名。人群里的声音忽高忽低，每一次有人喊出名字，周围都会跟着晃动一下。"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "xia",
              "focus": "xia",
              "text": "先别挤。一个个看，眼睛比人先进去。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "学姐，你这句话有点恐怖。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "恐怖的是把名单从头到尾看三遍还漏掉自己名字。冷静。"
            },
            {
              "speaker": "narrator",
              "text": "她说冷静时，手里的手机却已经打开了拍照界面。夏南星一向这样，嘴上让我们稳，自己也在用自己的方式紧张。"
            },
            {
              "speaker": "narrator",
              "text": "我先看二等奖。视线从第一行往下扫，扫到第三列时，看到自己的名字：周行。学校名和准考证号跟在后面，字很小，却没有错。"
            },
            {
              "speaker": "zhou",
              "text": "（二等奖。）"
            },
            {
              "speaker": "narrator",
              "text": "它没有我想象中那么亮，也没有我害怕的那么暗。只是两个字，安静地贴在玻璃后面，把这几个月的训练折成一个结果。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "看到了？"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "看到了。二等奖。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "不错。不是安慰，是评价。你这次发挥稳定。"
            },
            {
              "speaker": "narrator",
              "text": "我点头。稳定这个词在几个月前听起来很普通，现在却像一个很具体的奖项。它说明我没有在考场里被第一道难题打散，也没有在下午把疲惫写成空白。"
            },
            {
              "speaker": "narrator",
              "text": "林澈没有说话。她的视线还在往上找，一等奖名单更短，也更挤。"
            },
            {
              "speaker": "narrator",
              "text": "我比她先看到她的名字。林澈，一等奖。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "林澈。这里。"
            },
            {
              "speaker": "narrator",
              "text": "她顺着我指的位置看过去。那一瞬间，她的表情很安静，安静得不像喜悦，更像终于确认了一颗一直在云后面的星确实还在那里。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "看到了。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "一等奖。林澈，恭喜。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "谢谢学姐。"
            },
            {
              "speaker": "narrator",
              "text": "她说谢谢时声音很轻。她没有笑得很明显，也没有像我以为的那样立刻松一口气。"
            },
            {
              "speaker": "narrator",
              "text": "因为旁边的电子屏还在滚动选拔赛综合排名。顾望舒的名字出现在很靠前的位置，后面标着“进入后续集训考察名单”。林澈的名字在下一组，奖项很好，却离那一行还有一点距离。"
            },
            {
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "恭喜。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "你也是。后续集训名单。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "只是考察名单。还要再筛。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "你连被选上都说得像还没交作业。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "因为确实还没交完。"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒看向林澈，语气还是平稳。"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "你下午第三题的结构应该很好。"
            },
            {
              "speaker": "lin",
              "focus": "wangshu",
              "text": "应该？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "你刚才复盘时说的分类和确认路径，路子是对的。那题不是写得越满越好。"
            },
            {
              "speaker": "zhou",
              "focus": "wangshu",
              "text": "也就是说，考完以后还可以靠描述判断发挥？"
            },
            {
              "speaker": "wangshu",
              "focus": "wangshu",
              "text": "不能判断分数，但能判断有没有进入题目。你们两个下午都进去了。"
            },
            {
              "speaker": "narrator",
              "text": "林澈没有立刻说话。她看着电子屏上那几行滚动的名字，又低头看了看自己手里的奖状。玻璃板后的结果很具体，具体到名次、奖项和名单；可考场里的那种清楚又不在玻璃板上，像一行没有被公布出来的草稿。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我第二题写太满，反而没把关键放前面。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "观测方案？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。但第三题……我觉得我没有跑偏。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我下午也有这种感觉。不是每一问都完美，但有几处写下去的时候，我知道自己抓住题目了。"
            },
            {
              "img": "linThinking",
              "speaker": "lin",
              "focus": "lin",
              "text": "这句话很不像你。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我也觉得。所以可能是真的。"
            },
            {
              "speaker": "narrator",
              "text": "她看了我一眼，终于很轻地笑了一下。"
            },
            {
              "bg": "competitionClosingCeremony",
              "clear": true,
              "speaker": "narrator",
              "text": "闭幕式比开幕式更热闹。舞台上摆好了奖状和奖牌，前排学生不断起身、落座，带队老师忙着拍照。礼堂里的灯比昨天亮，亮得每个人脸上的疲惫都藏不住。"
            },
            {
              "speaker": "narrator",
              "text": "主持人宣读获奖名单时，我听见自己的名字从音响里传出来。它被念得很快，和很多名字连在一起，像一颗不算最亮但确实被标出来的星。"
            },
            {
              "speaker": "narrator",
              "text": "我上台领奖。奖状纸比想象中硬，边角很锋利。台下有人鼓掌，我在掌声里看见夏南星举着手机，林澈坐在她旁边，视线正好落过来。"
            },
            {
              "speaker": "narrator",
              "text": "那一瞬间我突然有点想笑。不是因为奖状，也不是因为名次，而是因为我想起第一章那张被她指出错误的草稿纸。那时候我还在把报名通知垫在练习册下面，觉得决赛远得不像真实的事。"
            },
            {
              "speaker": "narrator",
              "text": "现在我站在这里，手里拿着一张真实的奖状。它没有把我变成另一个人，却证明那个一直怕不够格的人，至少真的走完了这段路。"
            },
            {
              "speaker": "narrator",
              "text": "林澈上台时，掌声比刚才更响一点。她走得很稳，接过奖状后鞠躬，发卡在灯光下一闪。"
            },
            {
              "speaker": "narrator",
              "text": "我看见她站在台上，忽然想起昨晚海边的灯。她那时候说“我也想”，声音轻得几乎被风吹走。现在她站在那么亮的地方，手里拿着一等奖，却仍然像那个会在不确定条件前皱眉、会把卡片放在枕头边的人。"
            },
            {
              "speaker": "narrator",
              "text": "闭幕式最后，竞赛委员会老师说，天文不是只存在于望远镜和奖项里，更存在于每一次严谨记录、每一次承认未知、每一次愿意继续观察的选择里。"
            },
            {
              "speaker": "narrator",
              "text": "这句话有点像正式场合必须出现的总结。可我听着听着，竟然没有觉得它空。也许因为这两天里，我真的在草稿纸、异常点、没写完的风险评估和玻璃板后的名单里，摸到了它的一点边。"
            },
            {
              "bg": "coastalCityDay",
              "clear": true,
              "speaker": "narrator",
              "text": "闭幕式结束后，大家在礼堂外合影。海风从校门那边吹来，横幅被吹得鼓起又落下。有人把奖状卷起来塞进包里，有人还在看手机里的排名截图。"
            },
            {
              "show": [
                {
                  "id": "xia",
                  "img": "seniorSmile",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "xia",
              "focus": "xia",
              "text": "来，拍照。笑得像真的睡过觉。"
            },
            {
              "speaker": "zhou",
              "focus": "xia",
              "text": "这个要求比选拔赛还难。"
            },
            {
              "speaker": "xia",
              "focus": "xia",
              "text": "那至少别像被题目追杀。林澈，奖状拿高一点。周行，不要把二等奖拿得像检讨书。"
            },
            {
              "speaker": "narrator",
              "text": "我们站到一起。顾望舒也被夏南星拉进来，她显然不习惯这种临时合影，站位却准确得像提前量过。"
            },
            {
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "left"
                },
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "narrator",
              "text": "镜头举起来的时候，林澈的手臂碰到我的袖口。她没有躲，我也没有动。我们中间隔着两张奖状，隔着一场已经结束的决赛，隔着即将回去面对的作业、月考和高考排名。"
            },
            {
              "speaker": "narrator",
              "text": "三、二、一。"
            },
            {
              "speaker": "narrator",
              "text": "快门声落下，夏南星低头检查照片。照片里我们都笑得有点僵，但眼睛是亮的。"
            },
            {
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ],
              "speaker": "lin",
              "focus": "lin",
              "text": "你刚才领奖的时候，走路顺拐了。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "全国决赛二等奖选手允许出现少量步态误差。"
            },
            {
              "img": "linSmile",
              "speaker": "lin",
              "focus": "lin",
              "text": "误差明显。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "那你领奖的时候也很紧张。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "嗯。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "这次不反驳？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "事实。"
            },
            {
              "speaker": "narrator",
              "text": "她低头看自己的奖状，指腹沿着姓名那一行轻轻摸过去。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "我本来以为拿到奖会更像一个结论。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "现在呢？"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "像逗号。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "还挺准确。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "因为后面还有很多。高考，专业，学校，还有……"
            },
            {
              "speaker": "narrator",
              "text": "她停了一下，没有把最后那个词说出来。风从我们中间穿过去，吹动她手里的奖状。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "还有回去以后补作业。"
            },
            {
              "img": "linPout",
              "speaker": "lin",
              "focus": "lin",
              "text": "这个可以不用现在提醒。"
            },
            {
              "speaker": "zhou",
              "focus": "lin",
              "text": "我怕逗号后面太沉，先加一个普通名词。"
            },
            {
              "speaker": "lin",
              "focus": "lin",
              "text": "那再加一个。回去喝水。你今天又喝少了。"
            },
            {
              "speaker": "narrator",
              "text": "她说这句话时没有看我，像只是顺手把一个现实问题放在未来前面。我却因为这个很小的提醒，忽然觉得那个逗号没有那么可怕。"
            },
            {
              "speaker": "narrator",
              "text": "决赛结束了。它没有给我们一个童话式的冠军，也没有把所有问题一并解决。它只把一段路清清楚楚地放在我们身后，让我们终于能回头看见：原来我们真的走过来了。"
            },
            {
              "speaker": "narrator",
              "text": "而前面还有很长。海风从身后吹来，带着潮声和远处城市的车流声。我把奖状放进资料袋，和准考证、日程表、那十二张小卡片放在一起。"
            },
            {
              "speaker": "narrator",
              "text": "林澈站在旁边，发卡在阳光里轻轻亮了一下。我们没有说以后会怎么样，只是一起往集合点走。"
            }
          ]
        }
      ]
    }

  ]
};
function sectionStub(id, title, summary, choices = []) {
  const line = { speaker: "system", text: `Section 骨架：${summary}` };
  if (choices.length) line.choice = choices;
  return { id, title, lines: [line] };
}

function sectionRange(start, end) {
  return Array.from({ length: end - start + 1 }, (_, offset) => start + offset);
}

function sectionOrder(...parts) {
  return parts.flatMap((part) => Array.isArray(part) ? sectionRange(part[0], part[1]) : [part]);
}

const spriteBySpeaker = {
  lin: { id: "lin", img: "linNeutral", pos: "right" },
  xia: { id: "xia", img: "seniorSmile", pos: "left" },
  wangshu: { id: "wangshu", img: "wangshuNeutral", pos: "left" },
  chen: { id: "chen", img: "chenNeutral", pos: "left" },
  tang: { id: "tang", img: "tangNeutral", pos: "left" },
  teacher: { id: "teacher", img: "teacherNeutral", pos: "left" },
  guestTeacher: { id: "teacher", img: "teacherNeutral", pos: "left" },
  homeroom: { id: "teacher", img: "teacherNeutral", pos: "left" },
};

const spriteDefaults = Object.fromEntries(Object.values(spriteBySpeaker).map((sprite) => [sprite.id, sprite]));

const sectionPlans = {};

function planFocusForLine(plan, index) {
  const match = plan?.focusRanges?.find((range) => index >= range.start && index <= range.end);
  return match?.focus;
}

function normalizeSectionLines(section) {
  const plan = sectionPlans[section.id];
  const order = plan?.order || section.lines.map((_, index) => index);
  return order
    .map((sourceIndex) => {
      const sourceLine = section.lines[sourceIndex];
      if (!sourceLine) return null;
      const override = plan?.overrides?.[sourceIndex] || {};
      const focus = override.focus || planFocusForLine(plan, sourceIndex);
      return {
        ...sourceLine,
        ...override,
        ...(focus && !sourceLine.focus ? { focus } : {}),
        __sourceLineIndex: sourceIndex,
      };
    })
    .filter(Boolean);
}

function lineIsRemoteDialogue(item) {
  return /^「?消息：/.test(item?.text || "");
}

function parseRemoteMessageText(text = "") {
  return String(text)
    .trim()
    .replace(/^「?消息：/, "")
    .replace(/」$/, "")
    .trim();
}

function phoneMessageForLine(item) {
  if (!lineIsRemoteDialogue(item)) return null;
  const speakerId = item.speaker || "";
  return {
    speakerId,
    speaker: names[speakerId] || speakerId || "我",
    text: parseRemoteMessageText(item.text),
    direction: speakerId === "zhou" ? "self" : "other",
  };
}

function phoneBlockBounds(targetIndex) {
  let start = targetIndex;
  let end = targetIndex;
  while (start > 0 && lineIsRemoteDialogue(runtimeScript[start - 1])) start -= 1;
  while (end + 1 < runtimeScript.length && lineIsRemoteDialogue(runtimeScript[end + 1])) end += 1;
  return { start, end };
}

function collectPhoneMessages(start, end) {
  const messages = [];
  for (let i = start; i <= end; i += 1) {
    const item = runtimeScript[i];
    const message = phoneMessageForLine(item);
    if (message?.text) {
      messages.push({
        ...message,
        index: i,
        identity: item.lineKey || `index:${i}`,
      });
    }
  }
  return messages;
}

function phoneChatTitleForMessages(messages) {
  const others = [...new Set(messages.map((message) => message.speakerId).filter((id) => id && id !== "zhou"))];
  if (others.length > 1) return "决赛备战群";
  if (others.length === 1) return names[others[0]] || "聊天";
  return "聊天";
}

function inferNarratorFocus(text = "") {
  if (/顾望舒|望舒/.test(text)) return "wangshu";
  if (/夏南星|夏学姐|学姐/.test(text)) return "xia";
  if (/陈砚/.test(text)) return "chen";
  if (/唐越/.test(text)) return "tang";
  if (/许承安|班主任|老师/.test(text)) return "teacher";
  if (/林澈/.test(text)) return "lin";
  return null;
}

function spriteForFocus(focus) {
  return spriteDefaults[focus] || null;
}

function toSceneList(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function autoShowSprites(visible, sprite) {
  if (!sprite || visible.has(sprite.id) || visible.size >= 3) return [];
  if (visible.size === 0) return [{ ...sprite, pos: "center" }];
  if (visible.size === 1) {
    const [current] = [...visible.values()];
    const linIsInPair = current.id === "lin" || sprite.id === "lin";
    const currentPos = linIsInPair && current.id === "lin" ? "right" : "left";
    const nextPos = linIsInPair && sprite.id === "lin" ? "right" : "left";
    return [
      { id: current.id, img: current.img, pos: currentPos },
      { ...sprite, pos: nextPos },
    ];
  }
  const occupied = new Set([...visible.values()].map((item) => item.pos));
  const pos = ["center", "right", "left"].find((candidate) => !occupied.has(candidate)) || sprite.pos;
  return [{ ...sprite, pos }];
}

function enhanceSectionLines(sectionLines) {
  const visible = new Map();
  return sectionLines.map((line) => {
    const item = { ...line };
    if (item.bg && !item.keepSprites) visible.clear();
    if (item.clear) visible.clear();
    const hiddenSprites = toSceneList(item.hide);
    const shownSprites = toSceneList(item.show);
    if (item.hide) item.hide = hiddenSprites;
    if (item.show) item.show = shownSprites;
    hiddenSprites.forEach((id) => visible.delete(id));

    if (!item.focus && item.speaker && spriteBySpeaker[item.speaker] && !lineIsRemoteDialogue(item)) {
      item.focus = spriteBySpeaker[item.speaker].id;
    }
    if (!item.focus && item.speaker === "narrator") {
      item.focus = inferNarratorFocus(item.text);
    }

    const focusSprite = spriteForFocus(item.focus);
    const shouldAutoShow = focusSprite && !lineIsRemoteDialogue(item) && !(item.bg && String(item.bg).startsWith("cg"));
    if (shouldAutoShow && !shownSprites.some((sprite) => sprite.id === focusSprite.id)) {
      const additions = autoShowSprites(visible, focusSprite);
      if (additions.length) item.show = [...additions, ...shownSprites];
    }

    toSceneList(item.show).forEach((sprite) => visible.set(sprite.id, { ...sprite }));
    if (item.img) {
      const target = item.focus || "lin";
      const current = visible.get(target);
      if (current) visible.set(target, { ...current, img: item.img });
    }
    return item;
  });
}

function buildRuntimeScript() {
  const lines = [];
  STORY.chapters.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      enhanceSectionLines(normalizeSectionLines(section)).forEach((line, lineIndex) => {
        const sourceLineIndex = line.__sourceLineIndex ?? lineIndex;
        const { __sourceLineIndex, ...runtimeLine } = line;
        const keyedLine = {
          ...runtimeLine,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          sectionId: section.id,
          sectionTitle: section.title,
          lineKey: `${section.id}:${sourceLineIndex}`,
        };
        const editedLine = applyRuntimeLineEdit(keyedLine);
        if (editedLine && !editedLine.deleted) appendLineWithLocalInserts(lines, editedLine);
      });
    });
  });
  return lines;
}

let lineEdits = loadLineEdits();
let runtimeScript = buildRuntimeScript();
let sectionIndex = buildSectionIndex(runtimeScript);
let index = 0;
let progressIndex = 0;
let auto = false;
let autoTimer = null;
let typingTimer = null;
let fullLine = "";
let isTyping = false;
let saveMode = "save";
let selectedSaveSlotIndex = null;
let saveDeleteArmed = false;
let hasStarted = false;
let state = createInitialState();
let settings = loadSettings();

const log = [];
const loggedIndices = new Set();
let reviewLogPosition = null;
const sprites = new Map();
const bgmAudio = new Audio();
const activeSfxAudios = new Set();
const preloadedSfx = [];

let currentBgKey = null;
let currentBgmKey = null;
let lastSfxLineIdentity = null;
let lastPhoneLineIdentity = null;
let musicToastTimer = null;
let transitionTimer = null;
let phoneHideTimer = null;
let transitionLock = false;
let titleCloseTimer = null;
let escMenuOpen = false;
let uiAudioContext = null;
const game = document.getElementById("game");
let activeBg = document.getElementById("bgA");
let inactiveBg = document.getElementById("bgB");
const stage = document.getElementById("stage");
const titleScreen = document.getElementById("titleScreen");
const speaker = document.getElementById("speaker");
const line = document.getElementById("line");
const chapter = document.getElementById("chapter");
const choicePanel = document.getElementById("choicePanel");
const transitionOverlay = document.getElementById("transitionOverlay");
const transitionTitle = document.getElementById("transitionTitle");
const transitionSubtitle = document.getElementById("transitionSubtitle");
const theaterOverlay = document.getElementById("theaterOverlay");
const theaterImage = document.getElementById("theaterImage");
const phoneOverlay = document.getElementById("phoneOverlay");
const phoneChatTitle = document.getElementById("phoneChatTitle");
const phoneChatBody = document.getElementById("phoneChatBody");
const musicToast = document.getElementById("musicToast");
const historyPanel = document.getElementById("history");
const historyBody = document.getElementById("historyBody");
const autoBtn = document.getElementById("autoBtn");
const returnBtn = document.getElementById("returnBtn");
const saveModal = document.getElementById("saveModal");
const saveTitle = document.getElementById("saveTitle");
const saveSlots = document.getElementById("saveSlots");
const saveStats = document.getElementById("saveStats");
const deleteSaveBtn = document.getElementById("deleteSaveBtn");
const galleryModal = document.getElementById("galleryModal");
const galleryTitle = document.getElementById("galleryTitle");
const galleryGrid = document.getElementById("galleryGrid");
const galleryPreview = document.getElementById("galleryPreview");
const galleryCaption = document.getElementById("galleryCaption");
const editBtn = document.getElementById("editBtn");
const lineEditor = document.getElementById("lineEditor");
const editorMeta = document.getElementById("editorMeta");
const editorSpeaker = document.getElementById("editorSpeaker");
const editorText = document.getElementById("editorText");
const editorSceneOverride = document.getElementById("editorSceneOverride");
const editorBg = document.getElementById("editorBg");
const editorBgPreview = document.getElementById("editorBgPreview");
const editorBgmOverride = document.getElementById("editorBgmOverride");
const editorBgm = document.getElementById("editorBgm");
const editorSfxOverride = document.getElementById("editorSfxOverride");
const editorSfx = document.getElementById("editorSfx");
const editorFocus = document.getElementById("editorFocus");
const editorClearSprites = document.getElementById("editorClearSprites");
const editorSpriteRows = document.getElementById("editorSpriteRows");
const editorTransitionOverride = document.getElementById("editorTransitionOverride");
const editorTransitionTitle = document.getElementById("editorTransitionTitle");
const editorTransitionSubtitle = document.getElementById("editorTransitionSubtitle");
const editorTheaterOverride = document.getElementById("editorTheaterOverride");
const editorTheaterCg = document.getElementById("editorTheaterCg");
const editorTheaterPreview = document.getElementById("editorTheaterPreview");
const editorStatus = document.getElementById("editorStatus");
const importLineEditsInput = document.getElementById("importLineEditsInput");
const escMenu = document.getElementById("escMenu");
const bgmToggle = document.getElementById("bgmToggle");
const sfxToggle = document.getElementById("sfxToggle");
const volumeRange = document.getElementById("volumeRange");
const volumeValue = document.getElementById("volumeValue");
const fontSelect = document.getElementById("fontSelect");
const textSpeedSelect = document.getElementById("textSpeedSelect");
const autoDelayRange = document.getElementById("autoDelayRange");
const autoDelayValue = document.getElementById("autoDelayValue");

function createInitialState() {
  return {
    stats: { ...initialStats },
    choices: [],
    ending: null,
  };
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    return {
      ...defaultSettings,
      ...saved,
      volume: Math.min(1, Math.max(0, Number(saved.volume ?? defaultSettings.volume))),
      textSpeed: Number(saved.textSpeed ?? defaultSettings.textSpeed) || defaultSettings.textSpeed,
      autoDelay: Number(saved.autoDelay ?? defaultSettings.autoDelay) || defaultSettings.autoDelay,
    };
  } catch {
    return { ...defaultSettings };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function buildSectionIndex(script) {
  return script.reduce((map, item, idx) => {
    if (!map[item.sectionId]) map[item.sectionId] = idx;
    return map;
  }, {});
}

function loadLineEdits() {
  try {
    const saved = JSON.parse(localStorage.getItem(LINE_EDIT_KEY) || "{}");
    let edits = saved && typeof saved === "object" ? saved : {};
    edits = clearLineEditsFromChapterOnce(edits, 4, LINE_EDIT_CLEAR_CH4_PLUS_KEY);
    edits = clearLineEditsInChapterRangeOnce(edits, 1, 1, LINE_EDIT_CLEAR_CH1_REWRITE_KEY);
    edits = clearLineEditsInChapterRangeOnce(edits, 2, 2, LINE_EDIT_CLEAR_CH2_REWRITE_KEY);
    edits = clearLineEditsInChapterRangeOnce(edits, 3, 3, LINE_EDIT_CLEAR_CH3_REWRITE_KEY);
    edits = clearLineEditsInChapterRangeOnce(edits, 4, 4, LINE_EDIT_CLEAR_CH4_REWRITE_KEY);
    return edits;
  } catch {
    return {};
  }
}

function chapterNumberFromReference(value) {
  const match = String(value || "").match(/^ch(\d+)(?:\D|$)/);
  return match ? Number(match[1]) : null;
}

function lineEditTouchesChapterAtOrAfter(key, edit, minChapter) {
  const references = [
    key,
    edit?.lineKey,
    edit?.parentLineKey,
    edit?.chapterId,
    edit?.sectionId,
  ];
  return references.some((reference) => {
    const chapterNumber = chapterNumberFromReference(reference);
    return chapterNumber !== null && chapterNumber >= minChapter;
  });
}

function lineEditTouchesChapterInRange(key, edit, minChapter, maxChapter) {
  const references = [
    key,
    edit?.lineKey,
    edit?.parentLineKey,
    edit?.chapterId,
    edit?.sectionId,
  ];
  return references.some((reference) => {
    const chapterNumber = chapterNumberFromReference(reference);
    return chapterNumber !== null && chapterNumber >= minChapter && chapterNumber <= maxChapter;
  });
}

function clearLineEditsFromChapterOnce(edits, minChapter, storageKey) {
  if (localStorage.getItem(storageKey) === "1") return edits;
  const next = {};
  let removed = 0;
  Object.entries(edits).forEach(([key, edit]) => {
    if (lineEditTouchesChapterAtOrAfter(key, edit, minChapter)) {
      removed += 1;
      return;
    }
    next[key] = edit;
  });
  localStorage.setItem(storageKey, "1");
  if (removed > 0) {
    localStorage.setItem(LINE_EDIT_KEY, JSON.stringify(next));
    console.info(`Cleared ${removed} local line edit(s) from chapter ${minChapter}+.`);
  }
  return next;
}

function clearLineEditsInChapterRangeOnce(edits, minChapter, maxChapter, storageKey) {
  if (localStorage.getItem(storageKey) === "1") return edits;
  const next = {};
  let removed = 0;
  Object.entries(edits).forEach(([key, edit]) => {
    if (lineEditTouchesChapterInRange(key, edit, minChapter, maxChapter)) {
      removed += 1;
      return;
    }
    next[key] = edit;
  });
  localStorage.setItem(storageKey, "1");
  if (removed > 0) {
    localStorage.setItem(LINE_EDIT_KEY, JSON.stringify(next));
    console.info(`Cleared ${removed} local line edit(s) from chapter ${minChapter}-${maxChapter}.`);
  }
  return next;
}

function saveLineEdits() {
  localStorage.setItem(LINE_EDIT_KEY, JSON.stringify(lineEdits));
}

function applyRuntimeLineEdit(item) {
  const edit = lineEdits[item.lineKey];
  if (!edit) return item;
  if (edit.deleted) return null;
  const next = {
    ...item,
    ...(typeof edit.text === "string" ? { text: edit.text } : {}),
    ...(edit.speaker ? { speaker: edit.speaker } : {}),
  };
  if ("bg" in edit) {
    if (edit.bg) next.bg = edit.bg;
    else delete next.bg;
  }
  if ("focus" in edit) {
    if (edit.focus) next.focus = edit.focus;
    else delete next.focus;
  }
  if ("clear" in edit) {
    next.clear = Boolean(edit.clear);
    if (next.clear) delete next.img;
  }
  if (Array.isArray(edit.show)) next.show = edit.show;
  if ("transition" in edit) {
    if (edit.transition) next.transition = edit.transition;
    else delete next.transition;
  }
  if ("bgm" in edit) next.bgm = edit.bgm || null;
  if ("sfx" in edit) {
    if (edit.sfx) next.sfx = edit.sfx;
    else delete next.sfx;
  }
  if ("theater" in edit) {
    if (edit.theater) next.theater = edit.theater;
    else delete next.theater;
  }
  return next;
}

function normalizeInsertedLine(lineItem, baseItem, offset) {
  const focus = lineItem.focus || spriteBySpeaker[lineItem.speaker]?.id || (lineItem.speaker === "narrator" ? inferNarratorFocus(lineItem.text) : null);
  const inserted = {
    ...lineItem,
    ...(focus ? { focus } : {}),
    chapterId: baseItem.chapterId,
    chapterTitle: baseItem.chapterTitle,
    sectionId: baseItem.sectionId,
    sectionTitle: baseItem.sectionTitle,
    lineKey: `${baseItem.lineKey}:insert:${offset}`,
  };
  return applyRuntimeLineEdit(inserted);
}

function localInsertEditsForLine(parentLineKey) {
  return Object.values(lineEdits)
    .filter((edit) => edit?.localInsert && edit.parentLineKey === parentLineKey && !edit.deleted)
    .sort((a, b) => (a.localOrder || 0) - (b.localOrder || 0));
}

function runtimeLineFromLocalInsert(edit, parentItem) {
  const item = {
    chapterId: parentItem.chapterId,
    chapterTitle: parentItem.chapterTitle,
    sectionId: parentItem.sectionId,
    sectionTitle: parentItem.sectionTitle,
    lineKey: edit.lineKey,
    speaker: edit.speaker || "narrator",
    text: edit.text || "",
    __localInsertParentKey: edit.parentLineKey,
  };
  if (edit.bg) item.bg = edit.bg;
  if ("focus" in edit && edit.focus) item.focus = edit.focus;
  if ("clear" in edit) item.clear = Boolean(edit.clear);
  if (Array.isArray(edit.show)) item.show = edit.show;
  if (edit.transition) item.transition = edit.transition;
  if ("bgm" in edit) item.bgm = edit.bgm || null;
  if (edit.sfx) item.sfx = edit.sfx;
  if (edit.theater) item.theater = edit.theater;
  return item;
}

function appendLineWithLocalInserts(lines, item, seen = new Set()) {
  if (!item || seen.has(item.lineKey)) return;
  lines.push(item);
  seen.add(item.lineKey);
  localInsertEditsForLine(item.lineKey).forEach((edit) => {
    appendLineWithLocalInserts(lines, runtimeLineFromLocalInsert(edit, item), seen);
  });
}

function expandInsertedLinesWithLocalInserts(insertedLines) {
  const expanded = [];
  insertedLines.forEach((lineItem) => appendLineWithLocalInserts(expanded, lineItem));
  return expanded;
}

function preload() {
  [...Object.values(assets.bg), ...Object.values(assets.char), ...Object.values(assets.theater)].forEach((src) => {
    const img = new Image();
    img.src = src;
  });
  Object.values(assets.sfx).forEach((src) => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = src;
    preloadedSfx.push(audio);
  });
}

function uniqueAssets(entries) {
  const seen = new Set();
  return entries.filter(([, src]) => {
    if (seen.has(src)) return false;
    seen.add(src);
    return true;
  });
}

function assetLabel(key) {
  return key
    .replace(/^cg/, "CG ")
    .replace(/^ioaa/i, "IOAA ")
    .replace(/^chair/, "小剧场 椅子 ")
    .replace(/^cnao/, "小剧场 CNAO ")
    .replace(/^lin/, "林澈 ")
    .replace(/^senior|^xia/, "夏南星 ")
    .replace(/^wangshu/, "顾望舒 ")
    .replace(/^chen/, "陈砚 ")
    .replace(/^tang/, "唐越 ")
    .replace(/^teacher/, "许承安 ")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

function bgmTrackLabel(key) {
  return bgmTracks[key]?.name ? `${bgmTracks[key].name} (${key})` : key;
}

function sfxTrackLabel(key) {
  return `${assetLabel(key)} (${key})`;
}

const galleryAssets = {
  cg: uniqueAssets(Object.entries(assets.bg).filter(([, src]) => src.includes("/cg/"))).map(([key, src]) => ({ key, src, label: assetLabel(key) })),
  sprite: uniqueAssets(Object.entries(assets.char)).map(([key, src]) => ({ key, src, label: assetLabel(key) })),
};

bgmAudio.loop = true;
bgmAudio.preload = "auto";

function applySettings() {
  bgmAudio.volume = settings.volume;
  activeSfxAudios.forEach((audio) => {
    audio.volume = settings.volume;
  });
  document.body.classList.toggle("font-serif", settings.font === "serif");
  document.body.classList.toggle("font-rounded", settings.font === "rounded");
  bgmToggle.checked = settings.bgmEnabled;
  sfxToggle.checked = settings.sfxEnabled;
  volumeRange.value = Math.round(settings.volume * 100);
  volumeValue.textContent = `${Math.round(settings.volume * 100)}%`;
  fontSelect.value = settings.font;
  textSpeedSelect.value = String(settings.textSpeed);
  autoDelayRange.value = settings.autoDelay;
  autoDelayValue.textContent = `${(settings.autoDelay / 1000).toFixed(1)}s`;
  if (!settings.bgmEnabled) pauseBgm();
}

function getUiAudioContext() {
  if (!uiAudioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    uiAudioContext = new AudioContextClass();
  }
  if (uiAudioContext.state === "suspended") uiAudioContext.resume().catch(() => {});
  return uiAudioContext;
}

function playHoverSound() {
  if (!settings.sfxEnabled || settings.volume <= 0) return;
  const ctx = getUiAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(880, now);
  osc.frequency.exponentialRampToValueAtTime(1320, now + 0.035);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, settings.volume * 0.055), now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.06);
}

function playMessagePopSound() {
  if (!settings.sfxEnabled || settings.volume <= 0) return;
  const ctx = getUiAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(760, now);
  osc.frequency.exponentialRampToValueAtTime(1180, now + 0.045);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, settings.volume * 0.07), now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.13);
}

function playSfx(key) {
  const src = assets.sfx[key];
  if (!src || !settings.sfxEnabled || settings.volume <= 0 || escMenuOpen) return;
  const audio = new Audio(src);
  audio.volume = settings.volume;
  audio.preload = "auto";
  activeSfxAudios.add(audio);
  const cleanup = () => activeSfxAudios.delete(audio);
  audio.addEventListener("ended", cleanup, { once: true });
  audio.addEventListener("error", cleanup, { once: true });
  audio.play().catch(cleanup);
}

function playLineSfx(item, options = {}) {
  const { force = false } = options;
  const identity = item?.lineKey || `index:${index}`;
  if (!force && lineEditorIsOpen()) return;
  if (!force && lastSfxLineIdentity === identity) return;
  lastSfxLineIdentity = identity;
  if (item?.sfx) playSfx(item.sfx);
}

function showMusicToast(track) {
  if (!track) return;
  musicToast.textContent = `BGM  ${track.name}`;
  musicToast.classList.remove("hidden");
  musicToast.classList.remove("show");
  window.clearTimeout(musicToastTimer);
  requestAnimationFrame(() => musicToast.classList.add("show"));
  musicToastTimer = window.setTimeout(() => {
    musicToast.classList.remove("show");
    musicToastTimer = window.setTimeout(() => musicToast.classList.add("hidden"), 260);
  }, 2300);
}

function pauseBgm() {
  bgmAudio.pause();
}

function resumeBgm(options = {}) {
  const { showToast = false } = options;
  if (!settings.bgmEnabled || escMenuOpen || !currentBgmKey) return;
  bgmAudio.play().then(() => {
    if (showToast) showMusicToast(bgmTracks[currentBgmKey]);
  }).catch(() => {});
}

function playBgm(key, options = {}) {
  const { forceRestart = false, showToast = true } = options;
  const track = bgmTracks[key];
  if (!track) return;
  const changed = currentBgmKey !== key;
  currentBgmKey = key;

  if (changed) {
    bgmAudio.src = track.src;
  }
  if (changed || forceRestart) {
    try {
      bgmAudio.currentTime = 0;
    } catch {
      // Some browsers disallow seeking before metadata is ready.
    }
  }
  if (!settings.bgmEnabled || escMenuOpen) return;
  bgmAudio.play().then(() => {
    if (showToast && (changed || forceRestart)) showMusicToast(track);
  }).catch(() => {});
}

function bgmKeyForBackground(bgKey) {
  return bgmByBackground[bgKey] || "dailyClassroom";
}

function itemHasBgmDirective(item) {
  return Boolean(item && Object.prototype.hasOwnProperty.call(item, "bgm"));
}

function effectiveBgmKeyAtIndex(targetIndex, overrideItem = runtimeScript[targetIndex]) {
  let bgKey = null;
  let bgmKey = bgmKeyForBackground(null);
  for (let i = 0; i <= targetIndex; i += 1) {
    const item = i === targetIndex ? overrideItem : runtimeScript[i];
    if (!item) continue;
    if (item.bg && item.bg !== bgKey) {
      bgKey = item.bg;
      bgmKey = bgmKeyForBackground(bgKey);
    } else if (item.bg) {
      bgKey = item.bg;
    }
    if (itemHasBgmDirective(item)) {
      bgmKey = item.bgm || bgmKeyForBackground(bgKey);
    }
  }
  return bgmKey;
}

function bgmKeyForItem(item, itemIndex = index) {
  if (!item) return "mainTitle";
  return effectiveBgmKeyAtIndex(itemIndex, item);
}

function updateBgmForItem(item, options = {}) {
  const { itemIndex = index, ...playOptions } = options;
  playBgm(bgmKeyForItem(item, itemIndex), playOptions);
}

function closeTitleScreen() {
  hasStarted = true;
  if (titleCloseTimer) window.clearTimeout(titleCloseTimer);
  titleScreen.classList.add("closing");
  titleCloseTimer = window.setTimeout(() => {
    titleScreen.classList.add("hidden");
    titleCloseTimer = null;
  }, 540);
}

function clearTransitionCard() {
  if (transitionTimer) window.clearTimeout(transitionTimer);
  transitionTimer = null;
  transitionLock = false;
  transitionOverlay.classList.remove("visible");
  transitionOverlay.classList.add("hidden");
}

function openTitleScreen() {
  stopAuto();
  stopTyping(true);
  saveAutoProgress();
  historyPanel.classList.add("hidden");
  closeSaveModal();
  closeGallery();
  clearTransitionCard();
  hidePhoneOverlay();
  playBgm("mainTitle", { forceRestart: true });
  if (titleCloseTimer) window.clearTimeout(titleCloseTimer);
  titleCloseTimer = null;
  titleScreen.classList.remove("hidden");
  requestAnimationFrame(() => titleScreen.classList.remove("closing"));
}

function resetGame() {
  stopAuto();
  clearTransitionCard();
  runtimeScript = buildRuntimeScript();
  sectionIndex = buildSectionIndex(runtimeScript);
  state = createInitialState();
  index = 0;
  progressIndex = 0;
  log.splice(0, log.length);
  loggedIndices.clear();
  clearSprites();
  currentBgKey = null;
  lastSfxLineIdentity = null;
  lastPhoneLineIdentity = null;
  hidePhoneOverlay();
  render({ animate: true, record: true, rebuild: true });
  closeTitleScreen();
  saveAutoProgress();
}

function getAutoSavePayload() {
  try {
    return JSON.parse(localStorage.getItem(AUTO_SAVE_KEY) || "null");
  } catch {
    return null;
  }
}

function getLatestSavePayload() {
  const candidates = [getAutoSavePayload(), ...getSaveSlots()].filter(Boolean);
  candidates.sort((a, b) => new Date(b.savedAt || 0) - new Date(a.savedAt || 0));
  return candidates[0] || null;
}

function continueGame() {
  const payload = getLatestSavePayload();
  if (payload) {
    clearTransitionCard();
    hasStarted = true;
    loadPayload(payload, { animate: true });
    closeTitleScreen();
    return;
  }
  resetGame();
}

function saveAutoProgress() {
  if (!hasStarted) return;
  try {
    localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(makeSavePayload("auto")));
  } catch {
    // Ignore storage quota failures; manual saves still work.
  }
}

function setBg(key, options = {}) {
  const { transition = true } = options;
  const src = assets.bg[key];
  if (!key || !src || currentBgKey === key) return false;
  currentBgKey = key;

  if (!transition) {
    activeBg.src = src;
    activeBg.classList.add("active");
    inactiveBg.classList.remove("active");
    return true;
  }

  inactiveBg.src = src;
  requestAnimationFrame(() => {
    inactiveBg.classList.add("active");
    activeBg.classList.remove("active");
    [activeBg, inactiveBg] = [inactiveBg, activeBg];
  });
  return true;
}

function clearSprites() {
  sprites.forEach((node) => {
    if (node._switchTimer) window.clearTimeout(node._switchTimer);
    node.remove();
  });
  sprites.clear();
  updateSpriteLayout();
}

function hideSprite(id, transition = true) {
  const node = sprites.get(id);
  if (!node) return;
  if (node._switchTimer) window.clearTimeout(node._switchTimer);
  const removeNode = () => {
    node.remove();
    sprites.delete(id);
    updateSpriteLayout();
  };

  if (!transition) {
    removeNode();
    return;
  }

  node.classList.add("exiting");
  window.setTimeout(removeNode, 280);
}

function normalizeSpritePosition(pos) {
  if (pos === "central" || pos === "centre" || pos === "middle") return "center";
  if (pos === "left" || pos === "center" || pos === "right") return pos;
  return "center";
}

function setSpritePosition(node, pos) {
  const normalizedPos = normalizeSpritePosition(pos);
  node.classList.remove("left", "center", "right");
  node.classList.add(normalizedPos);
  node.dataset.pos = normalizedPos;
}

function showSprite({ id, img, pos = "center" }, options = {}) {
  const { transition = true } = options;
  let node = sprites.get(id);
  const isNew = !node;
  if (!node) {
    node = document.createElement("img");
    node.className = "sprite";
    node.alt = "";
    stage.appendChild(node);
    sprites.set(id, node);
  }
  const nextSrc = assets.char[img];
  if (node._switchTimer) window.clearTimeout(node._switchTimer);
  setSpritePosition(node, pos);

  const reveal = () => {
    node.classList.remove("switching", "entering");
    node.classList.add("visible");
  };

  const applySrc = ({ revealNow = true } = {}) => {
    if (nextSrc && node.getAttribute("src") !== nextSrc) node.src = nextSrc;
    if (revealNow) reveal();
    updateSpriteLayout();
  };

  if (isNew) {
    applySrc({ revealNow: false });
    if (transition) {
      node.classList.add("entering");
      requestAnimationFrame(() => requestAnimationFrame(reveal));
    } else {
      reveal();
    }
  } else if (transition && node.getAttribute("src") && node.getAttribute("src") !== nextSrc) {
    node.dataset.pendingSrc = nextSrc || "";
    node.classList.add("switching");
    node._switchTimer = window.setTimeout(() => {
      if (node.dataset.pendingSrc === (nextSrc || "")) applySrc();
    }, 80);
  } else {
    applySrc();
  }
}

function updateSpriteLayout() {
  stage.classList.toggle("single", sprites.size === 1);
  stage.classList.toggle("multi", sprites.size > 1);
  stage.classList.toggle("duo", sprites.size === 2);
  stage.classList.toggle("trio", sprites.size >= 3);
}

function focusSprite(id) {
  sprites.forEach((node, key) => node.classList.toggle("dim", Boolean(id) && key !== id));
}

function normalizeTheater(value) {
  if (!value) return null;
  return typeof value === "string" ? { cg: value } : value;
}

function setTheater(value) {
  const theater = normalizeTheater(value);
  const src = theater?.cg ? assets.theater[theater.cg] : null;
  game.classList.toggle("theater-active", Boolean(src));
  theaterOverlay.classList.toggle("hidden", !src);
  if (src && theaterImage.getAttribute("src") !== src) theaterImage.src = src;
  if (!src) theaterImage.removeAttribute("src");
}

function hidePhoneOverlay() {
  if (!phoneOverlay) return;
  if (phoneHideTimer) window.clearTimeout(phoneHideTimer);
  phoneOverlay.classList.remove("visible");
  phoneHideTimer = window.setTimeout(() => {
    if (!phoneOverlay.classList.contains("visible")) {
      phoneOverlay.classList.add("hidden");
      phoneChatBody.replaceChildren();
      phoneChatTitle.textContent = "聊天";
    }
    phoneHideTimer = null;
  }, 190);
}

function showPhoneOverlay() {
  if (!phoneOverlay) return;
  if (phoneHideTimer) {
    window.clearTimeout(phoneHideTimer);
    phoneHideTimer = null;
  }
  phoneOverlay.classList.remove("hidden");
  requestAnimationFrame(() => phoneOverlay.classList.add("visible"));
}

function renderPhoneMessages(messages, latestIdentity) {
  phoneChatBody.replaceChildren();
  messages.slice(-9).forEach((message, messageIndex, shownMessages) => {
    const row = document.createElement("div");
    const isLatest = message.identity === latestIdentity || messageIndex === shownMessages.length - 1;
    row.className = `phone-message ${message.direction}${isLatest ? " latest" : ""}`;

    const name = document.createElement("span");
    name.className = "phone-message-name";
    name.textContent = message.direction === "self" ? "我" : message.speaker;

    const bubble = document.createElement("div");
    bubble.className = "phone-bubble";
    bubble.textContent = message.text;

    row.append(name, bubble);
    phoneChatBody.appendChild(row);
  });
}

function updatePhoneOverlayForIndex(targetIndex, options = {}) {
  const { playSound = false } = options;
  const item = runtimeScript[targetIndex];
  if (!lineIsRemoteDialogue(item)) {
    hidePhoneOverlay();
    return;
  }

  const { start, end } = phoneBlockBounds(targetIndex);
  const visibleMessages = collectPhoneMessages(start, targetIndex);
  if (!visibleMessages.length) {
    hidePhoneOverlay();
    return;
  }

  const blockMessages = collectPhoneMessages(start, end);
  const identity = item.lineKey || `index:${targetIndex}`;
  phoneChatTitle.textContent = phoneChatTitleForMessages(blockMessages.length ? blockMessages : visibleMessages);
  renderPhoneMessages(visibleMessages, identity);
  showPhoneOverlay();

  if (playSound && !currentIsReview() && lastPhoneLineIdentity !== identity) {
    lastPhoneLineIdentity = identity;
    playMessagePopSound();
  }
}

function playTransitionCard(meta, callbacks = {}) {
  const { prepare, done } = callbacks;
  if (!meta || currentIsReview()) {
    done?.();
    return;
  }
  const data = typeof meta === "string" ? { title: meta } : meta;
  const fadeIn = data.fadeIn ?? 720;
  const hold = data.hold ?? 1250;
  const fadeOut = data.fadeOut ?? 720;
  transitionLock = true;
  transitionTitle.textContent = data.title || "";
  transitionSubtitle.textContent = data.subtitle || "";
  transitionOverlay.classList.remove("hidden");
  if (transitionTimer) window.clearTimeout(transitionTimer);
  transitionOverlay.classList.remove("visible");
  requestAnimationFrame(() => transitionOverlay.classList.add("visible"));
  transitionTimer = window.setTimeout(() => {
    prepare?.();
    transitionOverlay.classList.remove("visible");
    transitionTimer = window.setTimeout(() => {
      transitionOverlay.classList.add("hidden");
      transitionTimer = null;
      transitionLock = false;
      done?.();
    }, fadeOut);
  }, fadeIn + hold);
}

function applyItemState(item, options = {}) {
  const { transition = true } = options;
  if (!item) return;
  const bgChanged = item.bg ? setBg(item.bg, { transition }) : false;
  if (bgChanged && !item.keepSprites) clearSprites();
  if (item.clear) clearSprites();
  toSceneList(item.hide).forEach((id) => hideSprite(id, transition));
  toSceneList(item.show).forEach((sprite) => showSprite(sprite, { transition }));
  if (item.img) {
    const target = item.focus || "lin";
    const current = sprites.get(target);
    const pos = current?.dataset.pos || (current?.classList.contains("left") ? "left" : current?.classList.contains("center") ? "center" : "right");
    showSprite({ id: target, img: item.img, pos }, { transition });
  }
  setTheater(item.theater);
}

function rebuildScene(targetIndex, options = {}) {
  const { transitionCurrent = true } = options;
  clearSprites();
  currentBgKey = null;
  for (let i = 0; i < targetIndex; i += 1) {
    applyItemState(runtimeScript[i], { transition: false });
  }
  applyItemState(runtimeScript[targetIndex], { transition: transitionCurrent });
}

function applyRenderVisuals(item, options = {}) {
  const { animate = true, rebuild = true } = options;
  if (rebuild) {
    rebuildScene(index, { transitionCurrent: animate && !currentIsReview() });
  } else {
    applyItemState(item, { transition: animate && !currentIsReview() });
  }
  focusSprite(item.focus);
}

function stopTyping(showFull = true) {
  clearTimeout(typingTimer);
  isTyping = false;
  line.classList.remove("typing");
  if (showFull) line.textContent = fullLine;
}

function typeLine(text, done) {
  stopTyping(false);
  fullLine = text || "";
  line.textContent = "";

  if (!fullLine) {
    done?.();
    return;
  }

  isTyping = true;
  line.classList.add("typing");
  let cursor = 0;
  const step = () => {
    cursor += 1;
    line.textContent = fullLine.slice(0, cursor);
    if (cursor < fullLine.length) {
      const char = fullLine[cursor - 1];
      const baseDelay = "。！？……".includes(char) ? 34 : "，、；：".includes(char) ? 28 : 22;
      const delay = Math.max(8, Math.round(baseDelay * settings.textSpeed));
      typingTimer = setTimeout(step, delay);
      return;
    }
    stopTyping(true);
    done?.();
  };
  step();
}

function currentIsReview() {
  return reviewLogPosition !== null || index < progressIndex;
}

function logIdentityForItem(item, fallbackIndex = index) {
  return item?.lineKey || `index:${fallbackIndex}`;
}

function logIdentityForEntry(entry) {
  return entry?.lineKey || `index:${entry?.index}`;
}

function makeLogEntry(item, itemIndex = index) {
  return {
    index: itemIndex,
    lineKey: item.lineKey,
    speaker: names[item.speaker] ?? "",
    text: displayTextForItem(item),
    chapterTitle: item.chapterTitle,
    sectionTitle: item.sectionTitle,
  };
}

function syncLoggedIndices() {
  loggedIndices.clear();
  log.forEach((entry) => {
    loggedIndices.add(entry.lineKey || `index:${entry.index}`);
  });
}

function trimLogToLimit() {
  while (log.length > 120) {
    log.shift();
    if (reviewLogPosition !== null) {
      reviewLogPosition = reviewLogPosition > 0 ? reviewLogPosition - 1 : null;
    }
  }
  syncLoggedIndices();
}

function logPositionForLineKey(lineKey) {
  if (!lineKey) return -1;
  for (let i = log.length - 1; i >= 0; i -= 1) {
    if (log[i].lineKey === lineKey) return i;
  }
  return -1;
}

function restoreReviewPositionForLine(lineKey, wasReviewing) {
  if (!wasReviewing) {
    reviewLogPosition = null;
    return;
  }
  const nextLogPosition = logPositionForLineKey(lineKey);
  reviewLogPosition = nextLogPosition >= 0 ? nextLogPosition : currentLogPosition();
}

function recordRuntimeLineInLog(item, itemIndex = index, options = {}) {
  if (!item?.text) return null;
  const logId = logIdentityForItem(item, itemIndex);
  if (loggedIndices.has(logId)) return logPositionForLineKey(item.lineKey);
  const requestedPosition = Number.isInteger(options.insertAt) ? options.insertAt : log.length;
  const insertAt = Math.max(0, Math.min(requestedPosition, log.length));
  log.splice(insertAt, 0, makeLogEntry(item, itemIndex));
  trimLogToLimit();
  return logPositionForLineKey(item.lineKey);
}

function insertRuntimeLineInSeenLog(item, itemIndex = index) {
  if (!item?.text) return null;
  for (let i = itemIndex - 1; i >= 0; i -= 1) {
    const previous = runtimeScript[i];
    if (!previous?.text) continue;
    const previousLogPosition = logPositionForLineKey(previous.lineKey);
    if (previousLogPosition >= 0) {
      return recordRuntimeLineInLog(item, itemIndex, { insertAt: previousLogPosition + 1 });
    }
  }
  for (let i = itemIndex + 1; i < runtimeScript.length; i += 1) {
    const nextItem = runtimeScript[i];
    if (!nextItem?.text) continue;
    const nextLogPosition = logPositionForLineKey(nextItem.lineKey);
    if (nextLogPosition >= 0) {
      return recordRuntimeLineInLog(item, itemIndex, { insertAt: nextLogPosition });
    }
  }
  return recordRuntimeLineInLog(item, itemIndex);
}

function resolveLogEntryIndex(entry) {
  if (!entry) return null;
  if (entry.lineKey) return findLineIndex(entry.lineKey);
  return Number.isInteger(entry?.index) ? entry.index : null;
}

function currentLogPosition() {
  const item = runtimeScript[index];
  const lineKey = item?.lineKey;
  for (let i = log.length - 1; i >= 0; i -= 1) {
    if (lineKey && log[i].lineKey === lineKey && resolveLogEntryIndex(log[i]) === index) return i;
  }
  for (let i = log.length - 1; i >= 0; i -= 1) {
    if (lineKey && log[i].lineKey === lineKey) return i;
    if (!log[i].lineKey && log[i].index === index) return i;
  }
  return -1;
}

function goToLogPosition(logPosition, options = {}) {
  const { animate = false, musicRestart = false } = options;
  const entry = log[logPosition];
  const targetIndex = resolveLogEntryIndex(entry);
  if (targetIndex === null || targetIndex < 0 || targetIndex >= runtimeScript.length) return false;
  index = targetIndex;
  reviewLogPosition = logPosition;
  render({ animate, record: false, rebuild: true, musicRestart });
  return true;
}

function findPlayableLogPosition(start, direction) {
  for (let pos = start; pos >= 0 && pos < log.length; pos += direction) {
    const targetIndex = resolveLogEntryIndex(log[pos]);
    if (targetIndex !== null && targetIndex >= 0 && targetIndex < runtimeScript.length) return pos;
  }
  return null;
}

function syncLogWithRuntime() {
  const activeEntry = reviewLogPosition !== null ? log[reviewLogPosition] : null;
  const activeTargetIndex = activeEntry ? resolveLogEntryIndex(activeEntry) : null;
  const activeIdentity = activeTargetIndex !== null ? runtimeScript[activeTargetIndex]?.lineKey : activeEntry?.lineKey || null;
  const syncedLog = [];
  const seen = new Set();
  for (let i = 0; i < log.length; i += 1) {
    const targetIndex = resolveLogEntryIndex(log[i]);
    if (targetIndex === null || targetIndex < 0 || targetIndex >= runtimeScript.length) {
      continue;
    }
    const entry = makeLogEntry(runtimeScript[targetIndex], targetIndex);
    const identity = logIdentityForEntry(entry);
    if (seen.has(identity)) continue;
    seen.add(identity);
    syncedLog.push(entry);
  }
  syncedLog.sort((a, b) => a.index - b.index);
  log.splice(0, log.length, ...syncedLog);
  syncLoggedIndices();
  if (reviewLogPosition !== null) {
    const nextReviewPosition = activeIdentity
      ? log.findIndex((entry) => logIdentityForEntry(entry) === activeIdentity)
      : -1;
    reviewLogPosition = nextReviewPosition >= 0 ? nextReviewPosition : null;
  }
}

function nextAdjacentLogPosition(logPosition) {
  const nextLogPosition = findPlayableLogPosition(logPosition + 1, 1);
  if (nextLogPosition === null) return null;
  const targetIndex = resolveLogEntryIndex(log[nextLogPosition]);
  return targetIndex === index + 1 ? nextLogPosition : null;
}

function isSpokenSpeaker(speakerIdOrName) {
  return Boolean(speakerIdOrName) && !["narrator", "system", "提示", "旁白"].includes(speakerIdOrName);
}

function formatSpokenText(text, speakerIdOrName) {
  const value = text ?? "";
  const trimmed = value.trimStart();
  if (!isSpokenSpeaker(speakerIdOrName) || !value || trimmed.startsWith("（")) return value;
  if (trimmed.startsWith("「") || trimmed.startsWith("『")) return value;
  if (trimmed.startsWith("“") && value.trimEnd().endsWith("”")) {
    return value.replace(/^(\s*)“/, "$1「").replace(/”(\s*)$/, "」$1");
  }
  return `「${value}」`;
}

function displayTextForItem(item) {
  if (lineIsRemoteDialogue(item)) return parseRemoteMessageText(item.text);
  return formatSpokenText(item?.text, item?.speaker);
}

function shouldEnableLineEditor() {
  const params = new URLSearchParams(window.location.search);
  return params.has("edit") || localStorage.getItem(EDITOR_ENABLED_KEY) === "1";
}

let lineEditorEnabled = shouldEnableLineEditor();

const editorSpritePositions = [
  { key: "left", label: "左" },
  { key: "center", label: "中" },
  { key: "right", label: "右" },
];

function characterLabel(id) {
  return names[id] || ({ xia: "夏南星", lin: "林澈", wangshu: "顾望舒", chen: "陈砚", tang: "唐越", teacher: "许承安" })[id] || id;
}

function optionList(entries, selectedValue = "") {
  return entries
    .map(({ value, label }) => `<option value="${escapeHtml(value)}"${value === selectedValue ? " selected" : ""}>${escapeHtml(label)}</option>`)
    .join("");
}

function buildEditorSpriteRows() {
  const characterOptions = [
    { value: "", label: "无" },
    ...Object.keys(spriteDefaults).map((id) => ({ value: id, label: `${characterLabel(id)} (${id})` })),
  ];
  const imageOptions = Object.keys(assets.char).map((key) => ({ value: key, label: assetLabel(key) }));
  editorSpriteRows.innerHTML = editorSpritePositions
    .map(({ key, label }) => `
      <div class="editor-sprite-pos">${label}</div>
      <select class="editor-sprite-id" data-pos="${key}" aria-label="${label}侧人物">
        ${optionList(characterOptions)}
      </select>
      <select class="editor-sprite-img" data-pos="${key}" aria-label="${label}侧立绘">
        ${optionList(imageOptions)}
      </select>
    `)
    .join("");
}

function setupLineEditor() {
  editorSpeaker.innerHTML = Object.entries(names)
    .map(([key, label]) => `<option value="${key}">${label || "旁白"} (${key})</option>`)
    .join("");
  editorBg.innerHTML = optionList([
    { value: "", label: "本句不切换背景" },
    ...Object.keys(assets.bg).map((key) => ({ value: key, label: `${assetLabel(key)} (${key})` })),
  ]);
  editorBgm.innerHTML = optionList([
    { value: "", label: "按当前背景默认" },
    ...Object.keys(bgmTracks)
      .filter((key) => key !== "mainTitle")
      .map((key) => ({ value: key, label: bgmTrackLabel(key) })),
  ]);
  editorSfx.innerHTML = optionList([
    { value: "", label: "不播放音效" },
    ...Object.keys(assets.sfx).map((key) => ({ value: key, label: sfxTrackLabel(key) })),
  ]);
  editorFocus.innerHTML = optionList([
    { value: "", label: "无 / 不聚焦" },
    ...Object.keys(spriteDefaults).map((id) => ({ value: id, label: `${characterLabel(id)} (${id})` })),
  ]);
  editorTheaterCg.innerHTML = optionList([
    { value: "", label: "选择小剧场 CG" },
    ...Object.keys(assets.theater).map((key) => ({ value: key, label: `${assetLabel(key)} (${key})` })),
  ]);
  buildEditorSpriteRows();
  editBtn.classList.toggle("hidden", !lineEditorEnabled);
}

function lineEditorIsOpen() {
  return !lineEditor.classList.contains("hidden");
}

function navigateLineEditor(delta) {
  if (!lineEditorIsOpen()) return false;
  const nextIndex = index + delta;
  if (nextIndex < 0 || nextIndex >= runtimeScript.length) return true;
  reviewLogPosition = null;
  index = nextIndex;
  render({ animate: false, record: false, rebuild: true });
  return true;
}

function setInlineLineEditing(active) {
  line.contentEditable = active ? "plaintext-only" : "false";
  line.classList.toggle("editable", active);
}

function currentLineEdit() {
  const item = runtimeScript[index];
  return item?.lineKey ? lineEdits[item.lineKey] : null;
}

function lineEditHasScene(edit) {
  return Boolean(edit && ("bg" in edit || "focus" in edit || "clear" in edit || "show" in edit));
}

function lineEditHasTransition(edit) {
  return Boolean(edit && "transition" in edit);
}

function lineEditHasBgm(edit) {
  return Boolean(edit && "bgm" in edit);
}

function lineEditHasSfx(edit) {
  return Boolean(edit && "sfx" in edit);
}

function lineEditHasTheater(edit) {
  return Boolean(edit && "theater" in edit);
}

function updateEditorBgPreview() {
  const key = editorBg.value || currentBgKey;
  const src = assets.bg[key];
  editorBgPreview.classList.toggle("hidden", !src);
  if (src) editorBgPreview.src = src;
}

function syncEditorBgmControls(item) {
  const hasDirective = itemHasBgmDirective(item);
  editorBgmOverride.checked = hasDirective;
  editorBgm.value = hasDirective ? (item.bgm || "") : effectiveBgmKeyAtIndex(index, item);
}

function collectEditorBgmDraft() {
  if (!editorBgmOverride.checked) return {};
  return {
    bgm: editorBgm.value || null,
  };
}

function previewEditorBgm() {
  const item = runtimeScript[index];
  if (!item) return;
  const previewItem = { ...item };
  if (editorBgmOverride.checked) previewItem.bgm = editorBgm.value || null;
  else delete previewItem.bgm;
  updateBgmForItem(previewItem, { itemIndex: index, showToast: false });
}

function itemHasSfxDirective(item) {
  return Boolean(item && Object.prototype.hasOwnProperty.call(item, "sfx"));
}

function syncEditorSfxControls(item) {
  const hasDirective = itemHasSfxDirective(item);
  editorSfxOverride.checked = hasDirective;
  editorSfx.value = hasDirective ? (item.sfx || "") : "";
}

function collectEditorSfxDraft() {
  if (!editorSfxOverride.checked) return {};
  return {
    sfx: editorSfx.value || null,
  };
}

function previewEditorSfx() {
  if (!editorSfx.value) return;
  playSfx(editorSfx.value);
}

function updateEditorTheaterPreview() {
  const src = assets.theater[editorTheaterCg.value];
  editorTheaterPreview.classList.toggle("hidden", !src);
  if (src) editorTheaterPreview.src = src;
}

function setEditorSpriteControl(pos, sprite) {
  const idSelect = editorSpriteRows.querySelector(`.editor-sprite-id[data-pos="${pos}"]`);
  const imgSelect = editorSpriteRows.querySelector(`.editor-sprite-img[data-pos="${pos}"]`);
  if (!idSelect || !imgSelect) return;
  const spriteId = sprite?.id || "";
  idSelect.value = spriteId;
  imgSelect.value = sprite?.img || spriteDefaults[spriteId]?.img || imgSelect.options[0]?.value || "";
}

function inlineSpriteFromItemImage(item) {
  if (!item?.img || !assets.char[item.img]) return null;
  const id = item.focus || spriteBySpeaker[item.speaker]?.id || "lin";
  return { id, img: item.img, pos: "right" };
}

function syncEditorSceneControls(item) {
  editorBg.value = item.bg || "";
  editorFocus.value = item.focus || "";
  editorClearSprites.checked = Boolean(item.clear);
  const byPosition = new Map();
  toSceneList(item.show).forEach((sprite) => byPosition.set(normalizeSpritePosition(sprite.pos), sprite));
  const inlineSprite = inlineSpriteFromItemImage(item);
  if (inlineSprite && ![...byPosition.values()].some((sprite) => sprite.id === inlineSprite.id)) {
    byPosition.set(normalizeSpritePosition(inlineSprite.pos), inlineSprite);
  }
  editorSpritePositions.forEach(({ key }) => setEditorSpriteControl(key, byPosition.get(key)));
  updateEditorBgPreview();
}

function collectEditorShowSprites() {
  return editorSpritePositions
    .map(({ key }) => {
      const id = editorSpriteRows.querySelector(`.editor-sprite-id[data-pos="${key}"]`)?.value || "";
      if (!id) return null;
      const img = editorSpriteRows.querySelector(`.editor-sprite-img[data-pos="${key}"]`)?.value || spriteDefaults[id]?.img;
      return { id, img, pos: key };
    })
    .filter(Boolean);
}

function collectEditorSceneDraft() {
  const show = collectEditorShowSprites();
  const requestsNoSprites = editorClearSprites.checked && show.length === 0;
  if (!editorSceneOverride.checked && !requestsNoSprites) return {};
  return {
    bg: editorBg.value,
    focus: editorFocus.value,
    clear: editorClearSprites.checked,
    show,
  };
}

function editorHasSceneDraft() {
  if (editorSceneOverride.checked) return true;
  return editorClearSprites.checked && collectEditorShowSprites().length === 0;
}

function syncEditorTransitionControls(item) {
  const transition = item.transition || {};
  editorTransitionOverride.checked = Boolean(item.transition);
  editorTransitionTitle.value = transition.title || "";
  editorTransitionSubtitle.value = transition.subtitle || "";
}

function collectEditorTransitionDraft() {
  if (!editorTransitionOverride.checked) return {};
  return {
    transition: {
      title: editorTransitionTitle.value || "转场",
      ...(editorTransitionSubtitle.value ? { subtitle: editorTransitionSubtitle.value } : {}),
    },
  };
}

function syncEditorTheaterControls(item) {
  const theater = normalizeTheater(item.theater);
  editorTheaterOverride.checked = Boolean(theater?.cg);
  editorTheaterCg.value = theater?.cg || "";
  updateEditorTheaterPreview();
}

function collectEditorTheaterDraft() {
  if (!editorTheaterOverride.checked) return {};
  return {
    theater: editorTheaterCg.value ? { cg: editorTheaterCg.value } : null,
  };
}

function previewEditorTheater() {
  updateEditorTheaterPreview();
  if (!lineEditorIsOpen()) return;
  if (!editorTheaterOverride.checked || !editorTheaterCg.value) {
    setTheater(null);
    return;
  }
  setTheater({ cg: editorTheaterCg.value });
}

function previewEditorScene() {
  if (!lineEditorIsOpen()) return;
  const item = runtimeScript[index];
  if (!item || !editorHasSceneDraft()) {
    updateEditorBgPreview();
    return;
  }
  const previewItem = {
    ...item,
    ...collectEditorSceneDraft(),
    ...collectEditorBgmDraft(),
  };
  if (previewItem.clear) delete previewItem.img;
  clearSprites();
  currentBgKey = null;
  for (let i = 0; i < index; i += 1) {
    applyItemState(runtimeScript[i], { transition: false });
  }
  applyItemState(previewItem, { transition: false });
  focusSprite(previewItem.focus);
  updateBgmForItem(previewItem, { showToast: false });
  updateEditorBgPreview();
}

function markEditorDirty({ scene = false } = {}) {
  if (scene) editorSceneOverride.checked = true;
  editorStatus.textContent = "未保存";
  if (scene) previewEditorScene();
}

function markTransitionDirty() {
  editorTransitionOverride.checked = true;
  editorStatus.textContent = "未保存";
}

function refreshLineEditor(status = "") {
  if (!lineEditorIsOpen()) return;
  const item = runtimeScript[index];
  if (!item) return;
  const edit = currentLineEdit();
  const edited = Boolean(edit);
  editorMeta.textContent = `${item.lineKey} · ${item.chapterTitle} / ${item.sectionTitle}${edited ? " · edited" : ""}`;
  editorSpeaker.value = item.speaker || "narrator";
  editorText.value = item.text || "";
  editorSceneOverride.checked = lineEditHasScene(edit);
  syncEditorSceneControls(item);
  if (!lineEditHasBgm(edit)) syncEditorBgmControls(item);
  else syncEditorBgmControls({ ...item, bgm: edit.bgm || null });
  if (!lineEditHasSfx(edit)) syncEditorSfxControls(item);
  else syncEditorSfxControls({ ...item, sfx: edit.sfx || null });
  if (!lineEditHasTransition(edit)) syncEditorTransitionControls(item);
  else syncEditorTransitionControls({ transition: edit.transition });
  if (!lineEditHasTheater(edit)) syncEditorTheaterControls(item);
  else syncEditorTheaterControls({ theater: edit.theater });
  editorStatus.textContent = status || (edited ? "已套用本地编辑" : "");
}

function enableLineEditor() {
  lineEditorEnabled = true;
  localStorage.setItem(EDITOR_ENABLED_KEY, "1");
  editBtn.classList.remove("hidden");
}

function openLineEditor() {
  enableLineEditor();
  stopAuto();
  stopTyping(true);
  lineEditor.classList.remove("hidden");
  setInlineLineEditing(true);
  refreshLineEditor();
  refreshExternalTheaterAssets();
}

function closeLineEditor() {
  lineEditor.classList.add("hidden");
  setInlineLineEditing(false);
  editorStatus.textContent = "";
  render({ animate: false, record: false, rebuild: true, lineSfx: false });
}

function toggleLineEditor() {
  if (lineEditorIsOpen()) {
    closeLineEditor();
  } else {
    openLineEditor();
  }
}

function rebuildRuntimePreservingLine(lineKey) {
  const progressLineKey = runtimeScript[progressIndex]?.lineKey;
  const previousProgressIndex = progressIndex;
  const wasAtProgress = index >= progressIndex;
  const choiceRecords = state.choices.slice();
  runtimeScript = buildRuntimeScript();
  sectionIndex = buildSectionIndex(runtimeScript);
  if (choiceRecords.length) replayChoices(choiceRecords, { mutateState: false });
  syncLogWithRuntime();
  const nextIndex = findLineIndex(lineKey);
  if (nextIndex !== null) index = nextIndex;
  else index = Math.min(index, runtimeScript.length - 1);
  const nextProgressIndex = findLineIndex(progressLineKey);
  if (nextProgressIndex !== null) {
    progressIndex = nextProgressIndex;
  } else if (wasAtProgress && nextIndex !== null) {
    progressIndex = nextIndex;
  } else {
    progressIndex = Math.min(previousProgressIndex, runtimeScript.length - 1);
  }
}

function saveCurrentLineEdit() {
  const item = runtimeScript[index];
  if (!item?.lineKey) return;
  const lineKey = item.lineKey;
  const wasReviewing = currentIsReview();
  const existing = lineEdits[lineKey];
  const speakerId = editorSpeaker.value || "narrator";
  const editedText = editorText.value;
  lineEdits[lineKey] = {
    lineKey,
    chapterId: item.chapterId,
    chapterTitle: item.chapterTitle,
    sectionId: item.sectionId,
    sectionTitle: item.sectionTitle,
    sourceSpeaker: existing?.sourceSpeaker || item.speaker || "narrator",
    sourceText: existing?.sourceText ?? item.text ?? "",
    speaker: speakerId,
    text: editedText,
    ...(existing?.localInsert ? {
      localInsert: true,
      parentLineKey: existing.parentLineKey,
      localOrder: existing.localOrder,
    } : {}),
    ...collectEditorSceneDraft(),
    ...collectEditorBgmDraft(),
    ...collectEditorSfxDraft(),
    ...collectEditorTransitionDraft(),
    ...collectEditorTheaterDraft(),
    updatedAt: new Date().toISOString(),
  };
  saveLineEdits();
  rebuildRuntimePreservingLine(lineKey);
  restoreReviewPositionForLine(lineKey, wasReviewing);
  render({ animate: false, record: false, rebuild: true });
  refreshLineEditor("已保存");
}

function resetCurrentLineEdit() {
  const item = runtimeScript[index];
  if (!item?.lineKey || !lineEdits[item.lineKey]) return;
  const key = item.lineKey;
  const edit = lineEdits[key];
  const fallbackKey = runtimeScript[index + 1]?.lineKey || runtimeScript[index - 1]?.lineKey || edit.parentLineKey || null;
  delete lineEdits[key];
  saveLineEdits();
  rebuildRuntimePreservingLine(edit.localInsert ? fallbackKey : key);
  render({ animate: false, record: false, rebuild: true });
  refreshLineEditor("已恢复");
}

function addDialogueAfterCurrentLine() {
  const item = runtimeScript[index];
  if (!item?.lineKey) return;
  const wasReviewing = currentIsReview();
  const newKey = `${item.lineKey}:local:${Date.now().toString(36)}`;
  lineEdits[newKey] = {
    lineKey: newKey,
    localInsert: true,
    parentLineKey: item.lineKey,
    localOrder: Date.now(),
    chapterId: item.chapterId,
    chapterTitle: item.chapterTitle,
    sectionId: item.sectionId,
    sectionTitle: item.sectionTitle,
    sourceSpeaker: "narrator",
    sourceText: "",
    speaker: "narrator",
    text: "新对话",
    updatedAt: new Date().toISOString(),
  };
  saveLineEdits();
  rebuildRuntimePreservingLine(newKey);
  const insertedLogPosition = insertRuntimeLineInSeenLog(runtimeScript[index], index);
  if (wasReviewing && insertedLogPosition !== null) reviewLogPosition = insertedLogPosition;
  progressIndex = Math.max(progressIndex, index);
  saveAutoProgress();
  render({ animate: false, record: false, rebuild: true });
  refreshLineEditor("已加入新对话");
}

function deleteCurrentLine() {
  const item = runtimeScript[index];
  if (!item?.lineKey) return;
  const confirmed = window.confirm("删除当前这条对话？这会作为本地编辑保存。");
  if (!confirmed) return;
  const fallbackKey = runtimeScript[index + 1]?.lineKey || runtimeScript[index - 1]?.lineKey || null;
  const existing = lineEdits[item.lineKey];
  lineEdits[item.lineKey] = {
    lineKey: item.lineKey,
    chapterId: item.chapterId,
    chapterTitle: item.chapterTitle,
    sectionId: item.sectionId,
    sectionTitle: item.sectionTitle,
    sourceSpeaker: existing?.sourceSpeaker || item.speaker || "narrator",
    sourceText: existing?.sourceText ?? item.text ?? "",
    ...(existing?.localInsert ? {
      localInsert: true,
      parentLineKey: existing.parentLineKey,
      localOrder: existing.localOrder,
    } : {}),
    deleted: true,
    updatedAt: new Date().toISOString(),
  };
  saveLineEdits();
  rebuildRuntimePreservingLine(fallbackKey);
  index = Math.min(index, runtimeScript.length - 1);
  progressIndex = Math.min(progressIndex, runtimeScript.length - 1);
  render({ animate: false, record: false, rebuild: true });
  flash("已删除当前对话");
}

function exportLineEdits() {
  const payload = {
    version: 1,
    title: STORY.title,
    exportedAt: new Date().toISOString(),
    edits: lineEdits,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "hoshizu-line-edits.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  editorStatus.textContent = "已导出";
}

function importLineEditsFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const edits = payload.edits && typeof payload.edits === "object" ? payload.edits : payload;
      lineEdits = { ...lineEdits, ...edits };
      saveLineEdits();
      rebuildRuntimePreservingLine(runtimeScript[index]?.lineKey);
      render({ animate: false, record: false, rebuild: true });
      refreshLineEditor("已导入");
    } catch {
      editorStatus.textContent = "导入失败";
    }
  });
  reader.readAsText(file);
}

function render(options = {}) {
  const { animate = true, record = true, rebuild = true, skipTransition = false, visualReady = false, musicRestart = false, lineSfx = true } = options;
  const item = runtimeScript[index];
  if (!item) return;

  if (transitionLock && !skipTransition) return;
  if (record && index >= progressIndex) reviewLogPosition = null;
  stopTyping(false);
  choicePanel.classList.add("hidden");
  choicePanel.innerHTML = "";
  if (item.transition && animate && !currentIsReview() && !skipTransition) {
    fullLine = "";
    line.textContent = "";
    speaker.textContent = "";
    speaker.className = "speaker speaker-system";
    chapter.textContent = `${item.chapterTitle} / ${item.sectionTitle}`;
    chapter.classList.toggle("review", false);
    returnBtn.classList.toggle("hidden", !currentIsReview());
    hidePhoneOverlay();
    const renderIndex = index;
    playTransitionCard(item.transition, {
      prepare: () => {
        if (index !== renderIndex) return;
        applyRenderVisuals(item, { animate: false, rebuild });
      },
      done: () => {
        if (index !== renderIndex) return;
        render({ animate, record, rebuild, skipTransition: true, visualReady: true, musicRestart, lineSfx });
      },
    });
    return;
  }

  if (!visualReady) applyRenderVisuals(item, { animate, rebuild });
  updateBgmForItem(item, { itemIndex: index, forceRestart: musicRestart });
  if (lineSfx) playLineSfx(item);
  updatePhoneOverlayForIndex(index, { playSound: lineSfx && animate && !lineEditorIsOpen() });
  speaker.textContent = names[item.speaker] ?? "";
  speaker.className = `speaker speaker-${item.speaker || "narrator"}`;
  chapter.textContent = `${item.chapterTitle} / ${item.sectionTitle}`;
  chapter.classList.toggle("review", currentIsReview());
  returnBtn.classList.toggle("hidden", !currentIsReview());

  const displayText = displayTextForItem(item);
  if (record && item.text && index >= progressIndex) recordRuntimeLineInLog(item, index);
  if (record && index >= progressIndex) {
    reviewLogPosition = null;
    saveAutoProgress();
  }

  const afterText = () => {
    if (item.choice && index === progressIndex) {
      renderChoices(item.choice);
    }
  };

  if (animate && !lineEditorIsOpen()) {
    typeLine(displayText, afterText);
  } else {
    fullLine = displayText;
    line.textContent = fullLine;
    afterText();
  }
  refreshLineEditor();
}

function renderChoices(choices) {
  choicePanel.classList.remove("hidden");
  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = choice.text;
    btn.addEventListener("click", () => selectChoice(choice));
    choicePanel.appendChild(btn);
  });
}

function selectChoice(choice) {
  const current = runtimeScript[index];
  applyEffects(choice.effects);
  state.choices.push({
    at: current.lineKey,
    text: choice.text,
    effects: choice.effects || {},
    chapterId: current.chapterId,
    sectionId: current.sectionId,
  });

  if (choice.insert?.length) {
    const inserted = expandInsertedLinesWithLocalInserts(choice.insert.map((lineItem, offset) => normalizeInsertedLine(lineItem, current, offset)));
    const target = choice.endingCheck ? resolveEndingTarget() : choice.target;
    markEndingFromTarget(target);
    if (target && inserted.length) inserted[inserted.length - 1].postTarget = target;
    const currentWithoutChoice = { ...current };
    delete currentWithoutChoice.choice;
    runtimeScript = [...runtimeScript.slice(0, index), currentWithoutChoice, ...inserted, ...runtimeScript.slice(index + 1)];
    sectionIndex = buildSectionIndex(runtimeScript);
    resetLogToProgress(index + 1);
    index += 1;
    progressIndex = index;
    render({ rebuild: true });
    return;
  }

  const target = choice.endingCheck ? resolveEndingTarget() : choice.target;
  markEndingFromTarget(target);
  if (target) {
    jumpToSection(target);
    return;
  }

  if (index < runtimeScript.length - 1) {
    index += 1;
    progressIndex = Math.max(progressIndex, index);
    render({ rebuild: true });
  }
}

function applyEffects(effects = {}) {
  Object.entries(effects).forEach(([key, delta]) => {
    if (!(key in state.stats)) return;
    state.stats[key] += delta;
  });
}

function resolveEndingTarget() {
  const { ending, target } = endingTargetForStats(state.stats);
  state.ending = ending;
  return target;
}

function endingTargetForStats(stats) {
  const { trust, discipline, future_sync } = stats;
  const happy = trust >= 5 && discipline >= 4 && future_sync >= 4;
  const ending = happy ? "happy" : "bad";
  return { ending, target: ending === "happy" ? "ch8-happy" : "ch8-bad" };
}

function markEndingFromTarget(target) {
  if (!target) return;
  if (target.includes("happy")) state.ending = "happy";
  if (target.includes("bad")) state.ending = "bad";
}

function jumpToSection(sectionId) {
  if (transitionLock) return;
  const targetIndex = sectionIndex[sectionId];
  if (targetIndex === undefined) return;
  reviewLogPosition = null;
  index = targetIndex;
  progressIndex = Math.max(progressIndex, index);
  render({ rebuild: true });
}

function runtimeChapterIds() {
  return [...new Set(runtimeScript.map((item) => item.chapterId).filter(Boolean))];
}

function firstIndexForChapter(chapterId) {
  const found = runtimeScript.findIndex((item) => item.chapterId === chapterId);
  return found >= 0 ? found : null;
}

function jumpToChapterByOffset(offset) {
  if (transitionLock || lineEditorIsOpen()) return;
  const currentChapterId = runtimeScript[index]?.chapterId;
  const chapters = runtimeChapterIds();
  const currentChapterPosition = chapters.indexOf(currentChapterId);
  const targetChapterId = chapters[currentChapterPosition + offset];
  if (!targetChapterId) {
    flash(offset > 0 ? "已经是最后一章" : "已经是第一章");
    return;
  }
  const targetIndex = firstIndexForChapter(targetChapterId);
  if (targetIndex === null) return;
  stopAuto();
  stopTyping(true);
  clearTransitionCard();
  reviewLogPosition = null;
  index = targetIndex;
  progressIndex = Math.max(progressIndex, index);
  render({ animate: false, record: false, rebuild: true, musicRestart: true });
}

function jumpToPreviousChapter() {
  jumpToChapterByOffset(-1);
}

function jumpToNextChapter() {
  jumpToChapterByOffset(1);
}

function next() {
  if (transitionLock) return;
  if (navigateLineEditor(1)) return;
  if (isTyping) {
    stopTyping(true);
    const item = runtimeScript[index];
    if (item?.choice && index === progressIndex) renderChoices(item.choice);
    return;
  }
  if (currentIsReview()) {
    if (reviewLogPosition !== null) {
      const nextLogPosition = nextAdjacentLogPosition(reviewLogPosition);
      if (nextLogPosition !== null) {
        goToLogPosition(nextLogPosition, { animate: true });
        return;
      }
      reviewLogPosition = null;
    }
    if (index < progressIndex && index < runtimeScript.length - 1) {
      index += 1;
      render({ animate: true, record: false, rebuild: true });
      return;
    }
    return;
  }
  const item = runtimeScript[index];
  if (item?.choice) return;
  if (item?.postTarget) {
    jumpToSection(item.postTarget);
    return;
  }
  if (item?.end) {
    stopAuto();
    return;
  }
  if (index < runtimeScript.length - 1) {
    index += 1;
    progressIndex = Math.max(progressIndex, index);
    render({ rebuild: false });
  } else {
    stopAuto();
  }
}

function back() {
  if (transitionLock) return;
  stopAuto();
  stopTyping(true);
  if (navigateLineEditor(-1)) return;
  const logPosition = reviewLogPosition ?? currentLogPosition();
  if (logPosition > 0) {
    const previousLogPosition = findPlayableLogPosition(logPosition - 1, -1);
    if (previousLogPosition !== null) {
      goToLogPosition(previousLogPosition, { animate: false, musicRestart: true });
      return;
    }
  }
  if (index > 0) {
    index -= 1;
    render({ animate: false, record: false, rebuild: true });
  }
}

function stopAuto() {
  auto = false;
  clearTimeout(autoTimer);
  autoBtn.classList.remove("active");
}

function tickAuto() {
  if (!auto) return;
  if (transitionLock || isTyping) {
    autoTimer = setTimeout(tickAuto, 500);
    return;
  }
  next();
  autoTimer = setTimeout(tickAuto, settings.autoDelay);
}

function toggleAuto() {
  auto = !auto;
  autoBtn.classList.toggle("active", auto);
  clearTimeout(autoTimer);
  if (auto) autoTimer = setTimeout(tickAuto, 900);
}

function resetLogToProgress(untilIndex) {
  reviewLogPosition = null;
  log.splice(0, log.length);
  loggedIndices.clear();
  for (let i = 0; i < untilIndex; i += 1) {
    const item = runtimeScript[i];
    if (item?.text) {
      log.push(makeLogEntry(item, i));
      loggedIndices.add(logIdentityForItem(item, i));
    }
  }
  trimLogToLimit();
}

function showHistory() {
  historyBody.innerHTML = log
    .slice()
    .reverse()
    .map((item, reverseIndex) => {
      const logPosition = log.length - 1 - reverseIndex;
      return `<button class="history-item" type="button" data-log-pos="${logPosition}"><strong>${escapeHtml(item.speaker || "旁白")} · ${escapeHtml(item.sectionTitle)}</strong>${escapeHtml(formatSpokenText(item.text, item.speaker))}</button>`;
    })
    .join("");
  historyPanel.classList.remove("hidden");
}

function getSaveSlots() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY) || "[]");
    return Array.from({ length: SLOT_COUNT }, (_, index) => parsed[index] || null);
  } catch {
    return Array.from({ length: SLOT_COUNT }, () => null);
  }
}

function setSaveSlots(slots) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(slots));
}

function setSaveDeleteArmed(armed) {
  saveDeleteArmed = Boolean(armed);
  deleteSaveBtn.classList.toggle("active", saveDeleteArmed);
  deleteSaveBtn.title = saveDeleteArmed ? "选择要清空的槽位" : "点击后选择要清空的槽位";
  if (!saveModal.classList.contains("hidden")) {
    saveTitle.textContent = saveDeleteArmed ? "选择要清空的存档" : saveMode === "save" ? "存档" : "读档";
  }
}

function makeSavePayload(slotIndex) {
  const item = runtimeScript[progressIndex] || runtimeScript[index];
  return {
    version: GAME_VERSION,
    slotIndex,
    savedAt: new Date().toISOString(),
    currentLineKey: item?.lineKey || null,
    index: progressIndex,
    progressIndex,
    state,
    choices: state.choices,
    log,
    loggedIndices: [...loggedIndices],
    preview: {
      title: item?.chapterTitle || STORY.title,
      section: item?.sectionTitle || "",
      text: displayTextForItem(item),
    },
  };
}

function openSaveModal(mode) {
  saveMode = mode;
  selectedSaveSlotIndex = null;
  setSaveDeleteArmed(false);
  stopAuto();
  stopTyping(true);
  saveTitle.textContent = mode === "save" ? "存档" : "读档";
  renderSaveStats();
  renderSaveSlots();
  saveModal.classList.remove("hidden");
}

function closeSaveModal() {
  setSaveDeleteArmed(false);
  saveModal.classList.add("hidden");
}

function renderSaveStats() {
  saveStats.innerHTML = Object.entries(state.stats)
    .map(([key, value]) => `<span>${statLabels[key]} ${value}</span>`)
    .join("");
}

function renderSaveSlots() {
  const slots = getSaveSlots();
  saveSlots.innerHTML = slots
    .map((slot, idx) => {
      const number = String(idx + 1).padStart(2, "0");
      const selectedClass = idx === selectedSaveSlotIndex ? " selected" : "";
      if (!slot) {
        return `<button class="save-slot empty${selectedClass}" type="button" data-slot="${idx}">
          <strong>Slot ${number}</strong>
          <span>${saveMode === "save" ? "空存档，点击写入" : "空存档"}</span>
        </button>`;
      }
      const date = new Date(slot.savedAt).toLocaleString("zh-CN", { hour12: false });
      const statsText = formatStats(slot.state?.stats || initialStats);
      return `<button class="save-slot${selectedClass}" type="button" data-slot="${idx}">
        <strong>Slot ${number} · ${escapeHtml(slot.preview?.title || STORY.title)}</strong>
        <span>${escapeHtml(slot.preview?.section || "")}</span>
        <small>${date} · ${statsText}</small>
        <em>${escapeHtml(slot.preview?.text || "")}</em>
      </button>`;
    })
    .join("");
}

function handleSlotClick(slotIndex) {
  const slots = getSaveSlots();
  selectedSaveSlotIndex = slotIndex;
  if (saveDeleteArmed) {
    setSaveDeleteArmed(false);
    if (!slots[slotIndex]) {
      renderSaveSlots();
      flash(`Slot ${slotIndex + 1} 已为空`);
      return;
    }
    deleteSlot(slotIndex);
    return;
  }
  if (saveMode === "save") {
    slots[slotIndex] = makeSavePayload(slotIndex);
    setSaveSlots(slots);
    renderSaveSlots();
    flash(`已存入 Slot ${slotIndex + 1}`);
    return;
  }

  const payload = slots[slotIndex];
  if (!payload) {
    flash("该槽位为空");
    return;
  }
  hasStarted = true;
  clearTransitionCard();
  loadPayload(payload, { animate: true });
  closeSaveModal();
  if (!titleScreen.classList.contains("hidden")) closeTitleScreen();
  flash(`已读取 Slot ${slotIndex + 1}`);
}

function loadPayload(payload, options = {}) {
  const { animate = false } = options;
  clearTransitionCard();
  reviewLogPosition = null;
  runtimeScript = buildRuntimeScript();
  sectionIndex = buildSectionIndex(runtimeScript);
  state = createInitialState();
  replayChoices(payload.choices || payload.state?.choices || []);
  const restoredIndex = findLineIndex(payload.currentLineKey) ?? payload.progressIndex ?? payload.index ?? 0;
  index = Math.min(restoredIndex, runtimeScript.length - 1);
  progressIndex = index;
  log.splice(0, log.length, ...(payload.log || []));
  loggedIndices.clear();
  syncLogWithRuntime();
  clearSprites();
  lastSfxLineIdentity = null;
  lastPhoneLineIdentity = null;
  render({ animate, record: false, rebuild: true });
}

function replayChoices(choices, options = {}) {
  const { mutateState = true } = options;
  choices.forEach((record) => {
    const choiceIndex = runtimeScript.findIndex((item) => item.lineKey === record.at);
    if (choiceIndex < 0) return;
    const item = runtimeScript[choiceIndex];
    const option = item.choice?.find((candidate) => candidate.text === record.text);
    if (!option) return;
    if (mutateState) {
      applyEffects(option.effects);
      state.choices.push({
        at: item.lineKey,
        text: option.text,
        effects: option.effects || {},
        chapterId: item.chapterId,
        sectionId: item.sectionId,
      });
    }
    if (option.insert?.length) {
      const inserted = expandInsertedLinesWithLocalInserts(option.insert.map((lineItem, offset) => normalizeInsertedLine(lineItem, item, offset)));
      const target = option.endingCheck
        ? (mutateState ? resolveEndingTarget() : state.ending ? `ch8-${state.ending}` : endingTargetForStats(state.stats).target)
        : option.target;
      if (mutateState) markEndingFromTarget(target);
      if (target && inserted.length) inserted[inserted.length - 1].postTarget = target;
      const itemWithoutChoice = { ...item };
      delete itemWithoutChoice.choice;
      runtimeScript = [...runtimeScript.slice(0, choiceIndex), itemWithoutChoice, ...inserted, ...runtimeScript.slice(choiceIndex + 1)];
      sectionIndex = buildSectionIndex(runtimeScript);
    }
    if (mutateState && option.endingCheck) state.ending = resolveEndingTarget().includes("happy") ? "happy" : "bad";
    if (mutateState && option.target) state.ending = option.target.includes("happy") ? "happy" : option.target.includes("bad") ? "bad" : state.ending;
  });
}

function findLineIndex(lineKey) {
  if (!lineKey) return null;
  const found = runtimeScript.findIndex((item) => item.lineKey === lineKey);
  return found >= 0 ? found : null;
}

function deleteSlot(slotIndex) {
  const slots = getSaveSlots();
  selectedSaveSlotIndex = slotIndex;
  slots[slotIndex] = null;
  setSaveSlots(slots);
  renderSaveSlots();
  flash(`已清空 Slot ${slotIndex + 1}`);
}

function formatStats(stats) {
  return Object.entries(statLabels)
    .map(([key, label]) => `${label} ${stats[key] ?? 0}`)
    .join(" / ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function returnToProgress() {
  stopAuto();
  clearTransitionCard();
  reviewLogPosition = null;
  index = progressIndex;
  render({ animate: true, record: false, rebuild: true });
}

function openEscMenu() {
  if (!escMenu.classList.contains("hidden")) return;
  escMenuOpen = true;
  stopAuto();
  stopTyping(true);
  pauseBgm();
  escMenu.classList.remove("hidden");
  requestAnimationFrame(() => escMenu.classList.add("open"));
}

function closeEscMenu(options = {}) {
  const { resumeMusic = true } = options;
  if (escMenu.classList.contains("hidden")) return;
  escMenu.classList.remove("open");
  escMenuOpen = false;
  window.setTimeout(() => escMenu.classList.add("hidden"), 180);
  if (resumeMusic) resumeBgm();
}

function returnTitleFromEsc() {
  closeEscMenu({ resumeMusic: false });
  openTitleScreen();
  playBgm("mainTitle", { forceRestart: true });
}

function exitGame() {
  stopAuto();
  saveAutoProgress();
  window.close();
  window.setTimeout(() => flash("浏览器中请直接关闭窗口"), 120);
}

function flash(text) {
  const previous = chapter.textContent;
  chapter.textContent = text;
  setTimeout(() => {
    chapter.textContent = previous;
  }, 900);
}

function openGallery(kind) {
  const items = galleryAssets[kind] || [];
  galleryTitle.textContent = kind === "sprite" ? "立绘鉴赏" : "CG鉴赏";
  galleryGrid.innerHTML = items
    .map(
      (item, idx) => `<button class="gallery-item ${kind === "sprite" ? "sprite-thumb" : ""}" type="button" data-kind="${kind}" data-index="${idx}">
        <img src="${item.src}" alt="" loading="lazy" />
        <span>${escapeHtml(item.label)}</span>
      </button>`,
    )
    .join("");
  galleryModal.classList.remove("hidden");
  selectGalleryItem(kind, 0);
}

function selectGalleryItem(kind, itemIndex) {
  const items = galleryAssets[kind] || [];
  const item = items[itemIndex];
  if (!item) return;
  galleryGrid.querySelectorAll(".gallery-item").forEach((node) => node.classList.toggle("selected", Number(node.dataset.index) === itemIndex));
  galleryPreview.src = item.src;
  galleryCaption.textContent = item.label;
}

function closeGallery() {
  galleryModal.classList.add("hidden");
}

document.getElementById("nextBtn").addEventListener("click", () => next());
document.getElementById("backBtn").addEventListener("click", back);
document.getElementById("prevChapterBtn").addEventListener("click", jumpToPreviousChapter);
document.getElementById("nextChapterBtn").addEventListener("click", jumpToNextChapter);
document.getElementById("autoBtn").addEventListener("click", toggleAuto);
document.getElementById("historyBtn").addEventListener("click", showHistory);
editBtn.addEventListener("click", toggleLineEditor);
document.getElementById("startGameBtn").addEventListener("click", resetGame);
document.getElementById("continueGameBtn").addEventListener("click", continueGame);
document.getElementById("titleLoadBtn").addEventListener("click", () => openSaveModal("load"));
document.getElementById("cgGalleryBtn").addEventListener("click", () => openGallery("cg"));
document.getElementById("spriteGalleryBtn").addEventListener("click", () => openGallery("sprite"));
document.getElementById("closeGalleryBtn").addEventListener("click", closeGallery);
document.getElementById("closeHistoryBtn").addEventListener("click", () => historyPanel.classList.add("hidden"));
document.getElementById("returnBtn").addEventListener("click", returnToProgress);
document.getElementById("saveBtn").addEventListener("click", () => openSaveModal("save"));
document.getElementById("loadBtn").addEventListener("click", () => openSaveModal("load"));
document.getElementById("titleBtn").addEventListener("click", openEscMenu);
document.getElementById("resumeBtn").addEventListener("click", () => closeEscMenu());
document.getElementById("escTitleBtn").addEventListener("click", returnTitleFromEsc);
document.getElementById("exitGameBtn").addEventListener("click", exitGame);
document.getElementById("closeEscBtn").addEventListener("click", () => closeEscMenu());
document.getElementById("closeSaveBtn").addEventListener("click", closeSaveModal);
document.getElementById("closeEditorBtn").addEventListener("click", closeLineEditor);
document.getElementById("saveLineEditBtn").addEventListener("click", saveCurrentLineEdit);
document.getElementById("resetLineEditBtn").addEventListener("click", resetCurrentLineEdit);
document.getElementById("deleteLineEditBtn").addEventListener("click", deleteCurrentLine);
document.getElementById("addLineEditBtn").addEventListener("click", addDialogueAfterCurrentLine);
document.getElementById("exportLineEditsBtn").addEventListener("click", exportLineEdits);
document.getElementById("importLineEditsBtn").addEventListener("click", () => importLineEditsInput.click());
deleteSaveBtn.addEventListener("click", () => {
  if (selectedSaveSlotIndex !== null) {
    deleteSlot(selectedSaveSlotIndex);
    setSaveDeleteArmed(false);
    return;
  }
  setSaveDeleteArmed(!saveDeleteArmed);
  flash(saveDeleteArmed ? "请选择要清空的槽位" : "已取消清空");
});

line.addEventListener("input", () => {
  if (!lineEditorIsOpen()) return;
  editorText.value = line.textContent;
  editorStatus.textContent = "未保存";
});

editorText.addEventListener("input", () => {
  if (!lineEditorIsOpen()) return;
  line.textContent = editorText.value;
  editorStatus.textContent = "未保存";
});

editorSpeaker.addEventListener("change", () => {
  editorStatus.textContent = "未保存";
});

editorSceneOverride.addEventListener("change", () => {
  markEditorDirty({ scene: editorSceneOverride.checked });
  if (!editorSceneOverride.checked) render({ animate: false, record: false, rebuild: true });
});

editorBg.addEventListener("change", () => markEditorDirty({ scene: true }));
editorBgmOverride.addEventListener("change", () => {
  editorStatus.textContent = "未保存";
  previewEditorBgm();
});
editorBgm.addEventListener("change", () => {
  editorBgmOverride.checked = true;
  editorStatus.textContent = "未保存";
  previewEditorBgm();
});
editorSfxOverride.addEventListener("change", () => {
  editorStatus.textContent = "未保存";
  if (editorSfxOverride.checked) previewEditorSfx();
});
editorSfx.addEventListener("change", () => {
  editorSfxOverride.checked = true;
  editorStatus.textContent = "未保存";
  previewEditorSfx();
});
editorFocus.addEventListener("change", () => markEditorDirty({ scene: true }));
editorClearSprites.addEventListener("change", () => markEditorDirty({ scene: true }));

editorSpriteRows.addEventListener("change", (event) => {
  const idSelect = event.target.closest(".editor-sprite-id");
  if (idSelect) {
    const imgSelect = editorSpriteRows.querySelector(`.editor-sprite-img[data-pos="${idSelect.dataset.pos}"]`);
    const defaultImg = spriteDefaults[idSelect.value]?.img;
    if (imgSelect && defaultImg) imgSelect.value = defaultImg;
  }
  markEditorDirty({ scene: true });
});

editorTransitionOverride.addEventListener("change", () => {
  editorStatus.textContent = "未保存";
});

editorTransitionTitle.addEventListener("input", markTransitionDirty);
editorTransitionSubtitle.addEventListener("input", markTransitionDirty);

editorTheaterOverride.addEventListener("change", () => {
  if (editorTheaterOverride.checked && !editorTheaterCg.value) {
    editorTheaterCg.value = Object.keys(assets.theater)[0] || "";
  }
  editorStatus.textContent = "未保存";
  previewEditorTheater();
});

editorTheaterCg.addEventListener("change", () => {
  editorTheaterOverride.checked = Boolean(editorTheaterCg.value);
  editorStatus.textContent = "未保存";
  previewEditorTheater();
});

importLineEditsInput.addEventListener("change", () => {
  importLineEditsFile(importLineEditsInput.files?.[0]);
  importLineEditsInput.value = "";
});

bgmToggle.addEventListener("change", () => {
  settings.bgmEnabled = bgmToggle.checked;
  saveSettings();
  applySettings();
  if (settings.bgmEnabled) resumeBgm({ showToast: true });
});

sfxToggle.addEventListener("change", () => {
  settings.sfxEnabled = sfxToggle.checked;
  saveSettings();
  applySettings();
});

volumeRange.addEventListener("input", () => {
  settings.volume = Number(volumeRange.value) / 100;
  saveSettings();
  applySettings();
});

fontSelect.addEventListener("change", () => {
  settings.font = fontSelect.value;
  saveSettings();
  applySettings();
});

textSpeedSelect.addEventListener("change", () => {
  settings.textSpeed = Number(textSpeedSelect.value);
  saveSettings();
  applySettings();
});

autoDelayRange.addEventListener("input", () => {
  settings.autoDelay = Number(autoDelayRange.value);
  saveSettings();
  applySettings();
});

saveSlots.addEventListener("click", (event) => {
  const slot = event.target.closest(".save-slot");
  if (!slot) return;
  handleSlotClick(Number(slot.dataset.slot));
});

historyBody.addEventListener("click", (event) => {
  const item = event.target.closest(".history-item");
  if (!item) return;
  stopAuto();
  clearTransitionCard();
  const logPosition = Number(item.dataset.logPos);
  historyPanel.classList.add("hidden");
  goToLogPosition(logPosition, { animate: true, musicRestart: true });
});

galleryGrid.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (!item) return;
  selectGalleryItem(item.dataset.kind, Number(item.dataset.index));
});

document.getElementById("game").addEventListener("click", (event) => {
  if (event.target.closest("button") || event.target.closest(".title-screen") || event.target.closest(".history") || event.target.closest(".save-modal") || event.target.closest(".gallery-modal") || event.target.closest(".line-editor") || event.target.closest(".esc-menu") || event.target.closest("[contenteditable='plaintext-only']")) return;
  next();
});

document.addEventListener("pointerdown", () => {
  getUiAudioContext();
}, { once: true });

document.addEventListener("pointerover", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  if (event.relatedTarget && button.contains(event.relatedTarget)) return;
  playHoverSound();
});

document.getElementById("game").addEventListener(
  "wheel",
    (event) => {
    if (event.target.closest(".history") || event.target.closest(".save-modal") || event.target.closest(".line-editor") || event.target.closest("[contenteditable='plaintext-only']")) return;
    if (event.deltaY < -18) {
      event.preventDefault();
      back();
    } else if (event.deltaY > 18 && currentIsReview()) {
      event.preventDefault();
      next();
    }
  },
  { passive: false },
);

window.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "e") {
    event.preventDefault();
    toggleLineEditor();
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    if (lineEditorIsOpen()) {
      closeLineEditor();
      return;
    }
    if (!escMenu.classList.contains("hidden")) {
      closeEscMenu();
      return;
    }
    if (!galleryModal.classList.contains("hidden")) {
      closeGallery();
      return;
    }
    if (!saveModal.classList.contains("hidden")) {
      closeSaveModal();
      return;
    }
    if (!historyPanel.classList.contains("hidden")) {
      historyPanel.classList.add("hidden");
      return;
    }
    openEscMenu();
    return;
  }
  if (event.target.closest("input, textarea, select, [contenteditable='plaintext-only']")) return;
  if (!escMenu.classList.contains("hidden")) return;
  if (lineEditorIsOpen() || !saveModal.classList.contains("hidden") || !galleryModal.classList.contains("hidden") || !historyPanel.classList.contains("hidden")) return;
  if (!hasStarted || !titleScreen.classList.contains("hidden")) return;
  if (event.key === "PageUp" || (event.shiftKey && event.key === "ArrowLeft")) {
    event.preventDefault();
    jumpToPreviousChapter();
    return;
  }
  if (event.key === "PageDown" || (event.shiftKey && event.key === "ArrowRight")) {
    event.preventDefault();
    jumpToNextChapter();
    return;
  }
  if (event.key === " " || event.key === "Enter" || event.key === "ArrowRight") next();
  if (event.key === "ArrowLeft") back();
  if (event.key.toLowerCase() === "h") showHistory();
  if (event.key.toLowerCase() === "n") returnToProgress();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    openSaveModal("save");
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "l") {
    event.preventDefault();
    openSaveModal("load");
  }
});

async function boot() {
  applySettings();
  watchExternalAssets();
  await refreshExternalTheaterAssets({ updateControls: false });
  setupLineEditor();
  preload();
  render({ lineSfx: false });
  playBgm("mainTitle", { forceRestart: true });
}

boot();
