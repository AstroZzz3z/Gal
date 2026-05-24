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
    schoolHallAwardBoard: "assets/bg/school-hall-award-board.svg",
    trainStationSummer: "assets/bg/train-station-summer.svg",
    campCheckinDesk: "assets/bg/camp-checkin-desk.svg",
    universityDormitory: "assets/bg/university-dormitory.svg",
    trainingCampLectureHall: "assets/bg/training-camp-lecture-hall.svg",
    campCafeteria: "assets/bg/camp-cafeteria.svg",
    observatoryControlRoom: "assets/bg/observatory-control-room.svg",
    telescopeFieldDusk: "assets/bg/telescope-field-dusk.svg",
    dataLabNight: "assets/bg/data-lab-night.svg",
    dormCorridorNight: "assets/bg/dorm-corridor-night.svg",
    selectionResultBoard: "assets/bg/selection-result-board.svg",
    campGateMorning: "assets/bg/camp-gate-morning.svg",
    polandPrepDorm: "assets/bg/poland-prep-dorm.svg",
    airportInternationalDepartures: "assets/bg/airport-international-departures.svg",
    airportBoardingGateNight: "assets/bg/airport-boarding-gate-night.svg",
    airplaneCabinNight: "assets/bg/airplane-cabin-night.svg",
    airplaneWindowClouds: "assets/bg/airplane-window-clouds.svg",
    warsawAirportArrival: "assets/bg/warsaw-airport-arrival.svg",
    polishBusHighwayMorning: "assets/bg/polish-bus-highway-morning.svg",
    krakowHotelRoom: "assets/bg/krakow-hotel-room.svg",
    competitionVenuePolandGate: "assets/bg/competition-venue-poland-gate.svg",
    competitionOpeningHallPoland: "assets/bg/competition-opening-hall-poland.svg",
    internationalExamRoom: "assets/bg/international-exam-room.svg",
    observationFieldPolandNight: "assets/bg/observation-field-poland-night.svg",
    teamDiscussionRoomPoland: "assets/bg/team-discussion-room-poland.svg",
    krakowOldTownDusk: "assets/bg/krakow-old-town-dusk.svg",
    vistulaRiverNight: "assets/bg/vistula-river-night.svg",
    resultCeremonyPoland: "assets/bg/result-ceremony-poland.svg",
    cgCh7NoticeAfterClass: "assets/cg/cg-ch7-notice-after-class.svg",
    cgCh7CampCheckinLuggage: "assets/cg/cg-ch7-camp-checkin-luggage.svg",
    cgCh7LectureHallFirstRow: "assets/cg/cg-ch7-lecture-hall-first-row.svg",
    cgCh7DataLabSharedScreen: "assets/cg/cg-ch7-data-lab-shared-screen.svg",
    cgCh7FailedObservationRun: "assets/cg/cg-ch7-failed-observation-run.svg",
    cgCh7CandidateListConfirm: "assets/cg/cg-ch7-candidate-list-confirm.svg",
    cgCh8PolandPackingChecklist: "assets/cg/cg-ch8-poland-packing-checklist.svg",
    cgCh8AirportPassportExchange: "assets/cg/cg-ch8-airport-passport-exchange.svg",
    cgCh8PlaneWindowLinZhou: "assets/cg/cg-ch8-plane-window-lin-zhou.svg",
    cgCh8OpeningFlagHall: "assets/cg/cg-ch8-opening-flag-hall.svg",
    cgCh8PolandObservationField: "assets/cg/cg-ch8-poland-observation-field.svg",
    cgCh8KrakowResultWalk: "assets/cg/cg-ch8-krakow-result-walk.svg",
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
              "speaker": "narrator",
              "text": "闹钟还没响我就醒了。窗帘缝里透进来一条灰蓝色的光。",
              "stage": [
                "场景氛围：清晨，未亮的房间 / 视线特写：书桌上的行李"
              ],
              "bg": "bedroomMorning",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "书包立在椅子上，浅蓝色的文件袋露出一角。十二张卡片夹在最外层，糖和面包在侧袋，准考证在外拉链层，身份证在钱包里。理智告诉我昨晚已经查过三遍了，但我还是像有强迫症一样，站在床边又拉开了一次拉链。",
              "stage": [
                "动作：机械性重复"
              ]
            },
            {
              "speaker": "father",
              "text": "「别拉了。你再检查下去，拉链没坏，火车先开走了。」",
              "stage": [
                "动作：推开房门，端着一碗面条 / 语气：无奈且现实"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我就是……再确认一眼。」",
              "stage": [
                "动作：悻悻地松开手"
              ]
            },
            {
              "speaker": "father",
              "text": "「赶紧吃。去了天津听带队老师的安排。竞赛是条路，但不是唯一的路。考砸了天也塌不下来，大不了回来继续熬你的高考复习题。」",
              "stage": [
                "动作：把面条重重地放在餐桌上，里面额外卧了两个荷包蛋"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「爸，你这临行前的鼓励，听着挺像提前给我铺台阶啊。」",
              "stage": [
                "动作：咬了一口荷包蛋，含糊不清"
              ]
            },
            {
              "speaker": "father",
              "text": "「我是怕你跟自己较劲。还有，你那搭档也是个死心眼的，你们俩在外头，别互相拱火硬撑。」",
              "stage": [
                "动作：没理会周行的玩笑，转身去拿车钥匙"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我拿着筷子的手顿了一下。父亲没有回头，但我知道，大人其实什么都看得出来。我们在那张训练表上压榨自己的狠劲，他们没拦着，不代表他们不心疼。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "mother",
              "text": "「高铁上空调冷，带件长袖。晚上回酒店了记得在群里发个定位，别光顾着看资料忘了吃饭。」",
              "stage": [
                "动作：从厨房走出来，把一板晕车药和几张创可贴硬塞进书包侧袋 / 语气：细碎的叮嘱"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「知道。有夏学姐在，我们饿不死的。」",
              "stage": [
                "动作：把背包甩到肩上"
              ]
            },
            {
              "speaker": "narrator",
              "text": "箱子的滚轮在安静的楼道里发出清脆的回响。背包里那叠极其硬核的错题卡把我往前推，但胃里那碗热乎乎的面条，又把我稳稳地拽在地上。",
              "stage": [
                "场景：出门，拉杆箱在楼道里的声音"
              ]
            },
            {
              "speaker": "narrator",
              "text": "早晨的高铁站大厅乱得像一锅沸水。拖着大包小包的人群、电子屏上疯狂跳动的红色车次，还有刺耳的广播声全挤在一起。",
              "stage": [
                "场景切换：火车站候车大厅 / 音效：嘈杂的人声，广播播报声"
              ],
              "bg": "trainStationMorning",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我一眼就看到了集合点旁边的林澈。她穿着校服外套，拉链拉得一丝不苟，双手抱着那个浅蓝色的文件袋，安静地站在那儿，像是在这片混乱里划出了一小块绝对领域。",
              "stage": [
                "视线特写：林澈"
              ],
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
              "text": "「早。」",
              "stage": [
                "动作：拉着箱子走过去，停在她面前"
              ]
            },
            {
              "speaker": "lin",
              "text": "「早。七点零四分。你比约定时间提前了一分钟。」",
              "stage": [
                "动作：视线从大屏幕上收回来，看了周行一眼 / 语气：自然"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「肉松面包在这儿。没忘。」",
              "stage": [
                "动作：把行李箱立在脚边，指了指自己的侧袋"
              ]
            },
            {
              "speaker": "lin",
              "text": "「水果糖。我也没忘。」",
              "stage": [
                "动作：嘴角极轻微地勾了一下，拍了拍自己的口袋"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们像是在对某种只有彼此能听懂的暗号。不需要再问“你吃早饭了吗”这种废话，只看一眼侧袋鼓起的弧度，心里的某块石头就悄悄落了地。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "xia",
              "text": "「都到了？身份证和车票拿在手里！别等会儿到了闸机口给我表演『书包里大海捞针』的戏码。」",
              "stage": [
                "立绘：手里拿着几张身份证复印件，风风火火地杀过来"
              ],
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
              "speaker": "narrator",
              "text": "林澈动作极快，三秒钟就把证件叠在了一起。我因为刚才在兜里塞了张纸巾，掏身份证的时候稍微卡了一下。",
              "stage": [
                "动作：掏证件"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你手心出汗了。」",
              "stage": [
                "动作：自然地伸出手，把周行手里快要滑下去的车票捏住，帮他抽了出来"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「……车站暖气开太足了。」",
              "stage": [
                "动作：干咳一声，接过车票"
              ]
            },
            {
              "speaker": "xia",
              "text": "「状态还行。没紧张到面瘫。走，过安检。」",
              "stage": [
                "动作：用极其审视的目光扫了两人一眼"
              ]
            },
            {
              "speaker": "narrator",
              "text": "检票口开始放行，人群像潮水一样往前涌。一个拖着巨大编织袋的粗犷大哥横冲直撞地挤过来，差点撞到林澈的肩膀。",
              "stage": [
                "场景：安检通道前 / 音效：行李箱碰撞声，人群挤压"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「人太多了。我来拿，你拿好那个文件袋就行。」",
              "stage": [
                "动作：下意识地往前跨了半步，肩膀一侧，挡在林澈和那个编织袋中间。同时，左手极其自然地握住了她行李箱的拉杆。"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……别蹭到底盘。」",
              "stage": [
                "动作：跟在周行身侧，声音很轻"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「放心，摔了算我的。」",
              "stage": [
                "动作：单手拎起箱子跨过安检传送带的缝隙 / 笑了笑"
              ]
            },
            {
              "speaker": "narrator",
              "text": "箱子其实很轻。但在那个人声鼎沸的安检口，她没有拒绝我的帮忙，这种默许带来的实感，比几句干巴巴的“别紧张”要管用得多。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "站台上的风带着初冬的冷意。白色的高铁列车像一头巨兽，带着尖锐的风声缓缓停在我们面前。车门打开，冷气溢了出来。",
              "stage": [
                "场景：站台，列车进站 / 光影：清晨刺眼的阳光"
              ],
              "bg": "trainStationMorning",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我回头看了一眼进站口的扶梯。那里全都是行色匆匆的陌生人。物理课本、晚自习、父母的唠叨，全都被挡在了闸机外面。",
              "stage": [
                "视线特写：站台之外"
              ]
            },
            {
              "speaker": "lin",
              "text": "「害怕了？」",
              "stage": [
                "动作：站在车门边，转过头看周行"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「有点。感觉只要迈进这个门，就没有草稿纸让我重算第二遍了。」",
              "stage": [
                "动作：深吸了一口气，抓紧书包带"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那就别算错。」",
              "stage": [
                "动作：往前走了一步，跨过列车与站台的缝隙。然后她停住，转过身，看着周行。"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「收到。林老师。」",
              "stage": [
                "动作：看着她认真的眼睛，原本悬在半空的心突然稳稳地落了回来。他迈开腿，跨进了车厢。"
              ]
            },
            {
              "speaker": "narrator",
              "text": "身后的车门“滴——”的一声合拢。接下来几个小时，这条铁轨会把我们直接甩向天津的决赛现场。我不知道海风会不会比现在的站台更冷，但至少现在，我的邻座是她。",
              "stage": [
                "音效：车门关闭的蜂鸣声"
              ],
              "bg": "highSpeedRail",
              "clear": true
            }
          ]
        },
        {
          "id": "ch5-s2",
          "title": "高铁上的题",
          "lines": [
            {
              "speaker": "narrator",
              "text": "高铁启动时几乎没有震动感。窗外的站台、广告牌和送行的人群缓慢地往后滑，随后逐渐加速，连成一片模糊的灰影。",
              "stage": [
                "场景音效：高铁启动的低频嗡嗡声"
              ],
              "bg": "cgCh5TrainWindow",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "她的动作不快，但极具目的性。一支黑笔、一支铅笔、一块橡皮，和资料边缘对齐，摆成一条绝对的直线。这像是在充满未知和失控的车厢里，给自己强行圈出一块可以掌控的领地。",
              "stage": [
                "视线特写：小桌板上的布置"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「刚上车，脑子还处于缺氧状态。你要不要先看十分钟窗外？」",
              "stage": [
                "动作：靠在08B的椅背上，看着她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「看风景不能降低明天考卷上的错误率。」",
              "stage": [
                "动作：头也不抬，翻开资料"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「行吧。我带了我的护身符。」",
              "stage": [
                "动作：叹了口气，从侧袋摸出那十二张被夏南星勒令删减的“保命卡片”，在桌板上一字排开。"
              ]
            },
            {
              "speaker": "lin",
              "text": "「护身符不能替你把地方恒星时换成正确的角度。」",
              "stage": [
                "动作：余光瞥见第一张卡片上那句『不写单位就剁手』，嘴角微不可察地抽动了一下"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「所以我旁边坐着你啊。」",
              "stage": [
                "动作：双手交叉垫在脑后"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我是个人，不是你的备用计算器。把你那句不负责任的废话收回去。」",
              "stage": [
                "动作：动作一顿，转头冷冷地看着周行"
              ]
            },
            {
              "speaker": "xia",
              "text": "「08A、08B，停止场外互撩。我给你们一分钟时间，把手机交出来。」",
              "stage": [
                "动作：坐在前排，隔着椅背探出半个脑袋，摘下一只降噪耳机 / 语气：警告"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「啊？车上还要收手机？」",
              "stage": [
                "动作：愣住"
              ]
            },
            {
              "speaker": "xia",
              "text": "「你们俩现在的心理状态极度脆弱，稍微遇到一个卡壳的知识点就会下意识想去翻群聊或者搜答案。这叫假性复习。把手机静音，交过来。两个小时内不许碰。」",
              "stage": [
                "动作：伸出手，不容反驳"
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈没有丝毫犹豫，直接把手机按灭锁屏，递给了夏南星。我只好照做。两部手机被夏南星没收，车厢里属于我们俩的时间，彻底被封死在面前这几张可怜的白纸上。",
              "stage": [
                "动作：交出手机"
              ]
            },
            {
              "speaker": "narrator",
              "text": "接下来的一整个小时，我们没有说一句废话。车厢里有人吃泡面，有小孩在过道里奔跑，但我们的世界只剩下铅笔摩擦纸面的沙沙声。",
              "stage": [
                "场景氛围：沉浸式的做题"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「这道球面三角，你上次错在子午圈东偏还是西偏。如果明天再考，你第一步怎么起手？」",
              "stage": [
                "动作：把第三张卡片推到林澈面前 / 语气：压低声音的考核"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不碰公式。先在草稿纸上画天球图，标出天顶和天极，定死天体相对子午圈的位置。」",
              "stage": [
                "动作：盯着那道题看了三秒，没有拿笔，直接回答"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「然后呢？」",
              "stage": [
                "动作：用笔尖敲了敲卡片"
              ]
            },
            {
              "speaker": "lin",
              "text": "「确认时角的正负。如果题干给的是地方恒星时小于天体赤经，时角为负，天体在东。」",
              "stage": [
                "语气：冰冷机械"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「过关。脑子还在。」",
              "stage": [
                "动作：在卡片旁边打了个小小的勾"
              ]
            },
            {
              "speaker": "narrator",
              "text": "高铁猛地扎进一段极长的隧道，车厢外的光线瞬间消失，车窗变成了一面巨大的黑镜子。",
              "stage": [
                "场景切换：列车驶入长隧道 / 光影：突然陷入黑暗"
              ],
              "bg": "cgCh5TrainLinLooking",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "借着车厢顶部的冷光灯，我从玻璃的倒影里看到了林澈。她正死死盯着一道辐射平衡的近似计算，左手紧紧攥着拳头，眉头皱成了一个死结。那是她极度不确定，又不敢轻易下笔的典型姿态。",
              "stage": [
                "视线特写：车窗里的倒影"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林澈。」",
              "stage": [
                "动作：在黑暗中压低声音"
              ]
            },
            {
              "speaker": "lin",
              "text": "「别吵……我在算反照率的二阶修正项。」",
              "stage": [
                "动作：没有抬头，声音发紧"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你又犯病了。题干给了精度要求吗？」",
              "stage": [
                "动作：一把按住她准备往下写公式的手"
              ]
            },
            {
              "speaker": "lin",
              "text": "「没有给！但如果选项差距很小，我省掉二阶项就会选错！」",
              "stage": [
                "动作：试图挣脱周行的手，固执"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「看着我。」",
              "stage": [
                "动作：没有松手，语气不容反驳"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她猛地抬起头，眼睛里布满了血丝。在这面暗色的玻璃前，她那种极力掩饰的恐慌暴露无遗。",
              "stage": [
                "动作：视线交汇"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你在模拟考里就是这么死的。这题先算主项，旁边打个问号，跳。如果你现在一定要把它死抠出来，你就是在消耗你明天进考场的底气。」",
              "stage": [
                "动作：松开手，指着她资料上那张写着『推不动就滚』的卡片"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……我真的恨死这种不能掌控全局的感觉了。」",
              "stage": [
                "动作：死死咬着下唇，盯着那张卡片看了足足十秒钟。最终，她颓然地放下笔，在那个公式旁边极其不甘心地画了一个『？』"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我知道。但我们不是来考满分的，我们是来活下去的。」",
              "stage": [
                "动作：靠回椅背，声音放轻"
              ]
            },
            {
              "speaker": "narrator",
              "text": "列车冲出隧道，大片的平原和强烈的阳光瞬间糊满了整个车窗。我被晃得眯起了眼睛，正准备拉下遮阳帘，却发现脑子在一瞬间彻底罢工了。",
              "stage": [
                "场景：列车驶出隧道 / 光影：刺眼的阳光瞬间铺满车厢"
              ],
              "bg": "highSpeedRail",
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
              "text": "这不是卡壳，这是长时间高压运转后，大脑启动的自我保护机制——强制断电。所有的符号都在纸上跳舞，但我连最简单的三角函数替换都想不起来了。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「卡住了？」",
              "stage": [
                "动作：敏锐地察觉到了周行的停顿，侧过头看他"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「不行了。CPU 烧了。我现在连 $1+1$ 都要怀疑一下是不是等于 $2$。」",
              "stage": [
                "动作：扔下笔，痛苦地揉了揉眉心"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那就停。强制关机。」",
              "stage": [
                "动作：极其果断地伸手，把周行面前的资料全部合上，然后把那十二张卡片反扣在桌面上"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你不是一向奉行『榨干最后一秒』的原则吗？这么轻易就放过我了？」",
              "stage": [
                "动作：愣了一下"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你在错误的状态下硬算，只会加深错误的肌肉记忆。闭眼。睡觉。」",
              "stage": [
                "动作：把自己的资料也收进浅蓝色的文件夹，拉上拉链"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林老师，你现在终于学会画那条停止线了。」",
              "stage": [
                "动作：看着她干脆利落的动作，突然笑了一下"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……我只是不想你明天在考场上也像现在这样死机。」",
              "stage": [
                "动作：转过头看着窗外飞驰的景色，没有看周行 / 声音很轻"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我没有再反驳，拉下了遮阳帘，靠在椅背上闭上了眼睛。车厢里的嘈杂声仿佛被隔绝在了很远的地方，身边的呼吸声变得异常清晰。距离天津还有两个小时，而这是这一个月以来，我第一次在备赛期间，允许自己真正地睡过去。",
              "stage": [
                "场景氛围：疲惫的安心感"
              ]
            }
          ]
        },
        {
          "id": "ch5-s3",
          "title": "车窗外的土星环",
          "lines": [
            {
              "speaker": "narrator",
              "text": "不做题以后，车窗外的东西一下子涌了进来。大片的农田、反光的河面、灰白色的厂房和低矮的丘陵，还有偶尔一闪而过的无名站台，全都像是刚从被翻过去的题纸背面冒出来一样，带着一种不真实的鲜活感。",
              "stage": [
                "场景音效：高铁平稳行驶的低频白噪音 / 视线特写：窗外的飞驰风景"
              ],
              "bg": "cgCh5TrainWindowView",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我醒来时，遮阳帘边缘漏进一线白光。林澈已经停了笔，桌板上的资料被她重新夹回文件袋，只剩两张提醒卡片压在最上面。",
              "stage": [
                "动作：醒来后重新进入车厢"
              ],
              "bg": "highSpeedRail",
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
              "text": "她没有催我继续睡，也没有立刻把卷子摊开，只是把其中一张卡片推到桌板中央。那上面写着四个字：看清题意。",
              "stage": [
                "视线特写：卡片"
              ]
            },
            {
              "speaker": "lin",
              "text": "「春季大曲线。」",
              "stage": [
                "动作：笔尖轻点桌面"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「北斗斗柄、大角、角宿一，一直延伸到乌鸦座那一片。」",
              "stage": [
                "动作：脱口而出"
              ]
            },
            {
              "speaker": "lin",
              "text": "「角宿一是什么星？」",
              "stage": [
                "动作：追问"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「室女座 α，蓝白色。距离地球……两百五十光年左右？」",
              "stage": [
                "动作：稍作回忆"
              ]
            },
            {
              "speaker": "lin",
              "text": "「数据没问题。但考试写简答题时，不要加『左右』这种含糊的词，会显得你极度心虚。」",
              "stage": [
                "动作：皱眉"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我那是真的心虚。」",
              "stage": [
                "动作：干笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那就在草稿纸上心虚，答题卡上必须像真理一样写上去。」",
              "stage": [
                "语气：不容反驳"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「说起乌鸦座……你知道乌鸦座那个著名的梗吗？」",
              "stage": [
                "动作：想起什么，突然压低声音笑了"
              ]
            },
            {
              "speaker": "lin",
              "text": "「是不是又是你在那个奇怪的二次元群里看来的？」",
              "stage": [
                "动作：抬眼，带着点嫌弃"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「也算吧。就是几年之前，有个 IOAA（国际天文奥赛）国家队的倒霉蛋。那年观测原题第一题，是让估计乌鸦座旁边某星等以上的亮星数量。题目明明写了『以乌鸦座 α 为圆心』，甚至把 α 星的位置都标出来了。结果这位神仙……」",
              "stage": [
                "动作：憋笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「他画错星了？」",
              "stage": [
                "动作：眉头挑了一下"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「他硬生生把圆圈画在了乌鸦座 β 上！整道题直接被判了零分！后来这哥们儿因为怨念太深，直接把自己的社交平台网名改成了『高松灯喜欢观测乌鸦座』。」",
              "stage": [
                "动作：笑得肩膀直抖"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……这太惨烈了。你绝对不能犯这种低级的读题错误。绝对不允许。」",
              "stage": [
                "动作：愣了两秒，眼神变得极度严厉"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她说完，把第二张卡片翻了过去。高铁正好穿过一段高架桥，阳光被桥体切割成一节一节的，斜斜地打进来，正好落在她的笔尖上。",
              "stage": [
                "动作：光影变幻"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你说，如果风景也有高低之分，高铁窗外的这些景色，会不会也有标准答案？」",
              "stage": [
                "动作：拿笔指着窗外"
              ]
            },
            {
              "speaker": "lin",
              "text": "「没有。」",
              "stage": [
                "动作：毫不犹豫"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「回答得太快了，林老师。」",
              "stage": [
                "动作：撇嘴"
              ]
            },
            {
              "speaker": "lin",
              "text": "「因为你这个问题没有任何计算和探讨的价值。」",
              "stage": [
                "动作：翻过一页资料"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「不能总追求计算价值啊。比如那座山，它长得就特别像一道选择题里的『混淆错误选项』。看着非常有道理，但仔细一推敲，跟题干半毛钱关系都没有。」",
              "stage": [
                "动作：指着远处一座光秃秃的矮山"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你现在甚至开始给风景扣分了？」",
              "stage": [
                "动作：顺着周行的手指看过去 / 语气带着一丝不易察觉的笑意"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「备考晚期综合症，职业病。」",
              "stage": [
                "动作：摊手"
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈把脸转向了窗外。她没有真正笑出声，但眼睛里那种被真题逼出来的紧绷感肉眼可见地淡下去了。车窗玻璃上隐隐映出她的侧脸，她头发上那个星形的小发夹被阳光照得很亮。",
              "stage": [
                "视线特写：车窗玻璃的倒影"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你第一次真正喜欢上天文……是因为做题做得好吗？」",
              "stage": [
                "动作：看着她的倒影，忽然开口，声音放得很轻"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不是。」",
              "stage": [
                "动作：视线没有收回来"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那是因为什么？」",
              "stage": [
                "动作：好奇"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她没有立刻回答。列车刚好驶过一片开阔的河面，大片刺眼的反光从窗外晃进来，又迅速被密集的桥墩切得粉碎。",
              "stage": [
                "场景音效：列车过桥的轰鸣声"
              ]
            },
            {
              "speaker": "lin",
              "text": "「小时候，有一次晚上跟我妈去超市买东西。不是什么正式的观测活动，就是路边的小广场上，有人架了一台天文望远镜在摆摊。」",
              "stage": [
                "动作：声音变缓，像在小心翼翼地拿出一件易碎品"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那个广场其实特别吵，也特别普通。旁边有卖烤冷面和棉花糖的三轮车，地上全都是小孩子滑来滑去、轮子还会闪彩光的那种滑板车。那台望远镜就摆在台阶旁边，纸板上用马克笔歪歪扭扭地写着：看月亮十块，看土星十五。」",
              "stage": [
                "动作：眼神变得有些悠远"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「看土星比看月亮还贵五块？」",
              "stage": [
                "动作：轻笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「因为土星难找。也可能……因为『土星』这两个字，听起来就比月亮更厉害一点。」",
              "stage": [
                "动作：极其认真地解释，似乎在维护那个素未谋面的摊主"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我妈当时其实挺不想让我看的。大人们总觉得那种路边摊就是骗小孩零花钱的把戏，一眼看过去镜头里什么都没有，还得排长队。但我就是走不动道，一直死死盯着那块纸板看。」",
              "stage": [
                "动作：手指无意识地摩挲着文件袋的边缘"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你小时候也会像现在看题一样，死死盯着一个东西看？」",
              "stage": [
                "动作：想象着那个画面"
              ]
            },
            {
              "speaker": "lin",
              "text": "「会。只是那时候别人都以为我是在发呆。」",
              "stage": [
                "动作：嘴角微微牵动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我脑补了一下那个画面。一个比现在更小、更瘦的林澈，怀里抱着一袋刚从超市买来的零食，站在人声鼎沸、全是烤肠味儿的广场上，周围是跑来跑去的熊孩子，而她只是执拗地、安静地盯着那台破旧的望远镜。这个画面既不像现在的她，又该死地像极了她。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「摊主说可以看月亮，也可以看土星。我那时候只知道土星带个环，自然课本上画过，文具盒的贴纸上也有。但那些画都太漂亮了，漂亮得像是不存在的假装饰。」",
              "stage": [
                "动作：语速变得极慢，像在回忆某种神圣的仪式"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「然后呢？你看到了吗？」",
              "stage": [
                "动作：不由自主地压低声音"
              ]
            },
            {
              "speaker": "lin",
              "text": "「嗯。那台望远镜特别小，镜筒掉漆了，赤道仪的脚架在风里甚至还会晃。我踩着旁边的砖头台阶，把眼睛死死凑上去。刚开始……我其实什么都看不清，视野里只有一团非常刺眼的、糊掉的亮光。我当时甚至以为我妈说得对，我被骗了。」",
              "stage": [
                "动作：点了一下头，眼神亮得惊人"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那个人跟我说，『小朋友，眼睛别贴太死，稍微退后一点，慢慢找』。我那时候根本不懂什么叫『出瞳距离』，也不知道什么是焦距，只觉得他让我离远一点这个要求简直不可理喻。因为如果我想看清一个东西，本能难道不是应该越靠越近吗？」",
              "stage": [
                "动作：模仿着摊主的语气"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「后来发现，太近了反而不行？」",
              "stage": [
                "动作：轻声接话"
              ]
            },
            {
              "speaker": "lin",
              "text": "「嗯。贴得太死，眼里就只有一片死白，什么都看不见。」",
              "stage": [
                "动作：垂下眼睛，声音很轻"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她说这句话的时候没有看我，但我莫名地就想到了我们这一个月来的疯狂备赛。太想死死抓住某个答案的时候，视野反而会被焦虑压扁，变成一团毫无意义的亮斑。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「后来那个摊主帮我重新调了一下焦轮。我再凑过去看的时候……就在那团光晕里，看见了一个极小、极小、极小的亮点。亮点的两边，支出了一条极其微弱的细线。」",
              "stage": [
                "动作：深吸了一口气，继续描述"
              ]
            },
            {
              "speaker": "lin",
              "text": "「它根本不像教科书照片里那种巨大、清晰、甚至能看到卡西尼环缝的样子。它甚至没有颜色。它小得可怜，在视野里晃来晃去，边缘模糊得就像是……就像是谁用铅笔在黑纸上不小心划歪了的一笔。」",
              "stage": [
                "动作：转过头看着周行，强调"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你的第一反应是不是怀疑设备坏了？」",
              "stage": [
                "动作：笑了笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「对。我当时直接问那个摊主，是不是你的目镜片上有一道划痕？摊主笑了，他说，小朋友，不是划痕，那就是土星环。然后我又看了一次，死死盯着那条划痕一样的细线。」",
              "stage": [
                "动作：非常坦然地承认"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「怀疑设备，非常符合林老师一贯的严谨作风。确认之后呢？」",
              "stage": [
                "动作：调侃"
              ]
            },
            {
              "speaker": "lin",
              "text": "「确认之后……我就不想把眼睛挪开了。后面还有人在排队催，我妈也拉着我的衣服让我别占着仪器。我就硬生生又多看了几秒。其实那几秒钟，我根本看不出什么新的细节，我只是……我只是想反复确认，那个小亮点不会突然消失。」",
              "stage": [
                "动作：眼神变得异常柔软"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她说到这里，视线依然投向窗外。但我知道，她此刻看着的，早已经不是京沪线上的风景了。",
              "stage": [
                "视线特写：林澈停留在窗外的手指"
              ]
            },
            {
              "speaker": "lin",
              "text": "「就是那极其模糊的、划歪了的一笔……让我大脑里突然『嗡』了一声。我突然意识到，原来它真的就在那里。它不是书本上印出来的科普图，不是老师嘴里干巴巴的考点，更不是『太阳系第六颗行星』这几个没有温度的汉字。」",
              "stage": [
                "动作：声音里带上了一种罕见的震撼感"
              ]
            },
            {
              "speaker": "lin",
              "text": "「它离我极其遥远，远到光都要走上一个多小时。但它是活的，它是真实存在的实体。我们当时就站在全是油烟味的广场上，旁边大喇叭在放着口水歌，小孩子在尖叫，电动车按着刺耳的喇叭……可在距离我们十多亿公里外，这颗巨大的气体行星就在那一刻，带着那圈冰冷的环，安安静静地按着它自己的轨道在转。」",
              "stage": [
                "动作：比划了一下距离"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我以前当然也知道『宇宙很大』这种常识。是个小孩都会背这句话。可那种大，就像是个空洞的形容词，是别人强行塞进你脑子里的概念。直到亲眼看见那条细线之后，我是生平第一次，在生理上真真切切地感觉到了——宇宙是真实的。」",
              "stage": [
                "动作：转回头，直视周行的眼睛"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「一种正在发生的、碾压一切事实的真实。」",
              "stage": [
                "动作：被她的情绪感染，声音放得很低"
              ]
            },
            {
              "speaker": "lin",
              "text": "「对。它不会因为我看不看它而有任何改变。那天回家的路上，我妈走在前面，我两只手提着超市的塑料袋，里面装了一大桶洗衣液和一包盐，勒得手指特别疼，死沉死沉的。但我当时脑子里，翻来覆去全都是镜头里那个微弱的小光点。」",
              "stage": [
                "动作：用力点头"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我觉得特别奇妙。明明我只是通过一台随时会散架的破望远镜，看了几秒钟而已，为什么我突然觉得……这个世界变厚了？不是面积变大，是变厚。就像是我平时看见的路灯、居民楼、作业本的背后，突然被撕开了一个巨大的、深不见底的空间。」",
              "stage": [
                "动作：皱起眉头，像是在解剖自己当年的心理"
              ]
            },
            {
              "speaker": "lin",
              "text": "「后来有很长一段时间，我放学都会故意绕路去那个广场。但不是每次都能碰到那个摊主。有时候只有跳广场舞的大妈，有时候下大雨，地砖上全是霓虹灯的反光。我也不知道自己到底想去广场找什么……我可能只是想去确认，那天晚上的一切不是我记错了，不是一个小女孩把一件无聊的小事幻想得太宏大。」",
              "stage": [
                "动作：自嘲地笑了一下"
              ]
            },
            {
              "speaker": "lin",
              "text": "「可是越长大，接触的天文知识越多，我越确信我那天没有记错。因为很多东西如果仅仅是『漂亮』，它很快就会被更新、更刺激的东西覆盖掉。但那天晚上的土星环一点都不漂亮，它又小、又糊、还会晃。可它之所以能留在我的脑子里这么多年，就是因为它是真的。」",
              "stage": [
                "动作：眼神变得极度坚定"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「『世界变厚了』。这说法真挺文学的。」",
              "stage": [
                "动作：看着她发亮的眼睛"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那时候我可不会说这么矫情的话。那时候最直观的感受就是：回家的路很短，手里的洗衣液很重，但土星离我极其遥远。这三件事，在同一个空间里，同时绝对真实地发生着。」",
              "stage": [
                "动作：摇了摇头，立刻剥离了文艺感"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这太不像平时的林澈了。她平时恨不得把所有情绪都压缩成三行公式和干巴巴的定义条件，像个没有感情的判卷机器。但此刻，她的语言像是一条终于化冻的小溪，带着惊人的生命力流淌出来。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「后来我回家查了很多资料，才知道那天我看到的画面其实极其恶劣。那台望远镜口径估计不到 80mm，加上城市热岛效应和低空气流扰动，大气视宁度差得令人发指，能勉强分辨出本体和环的间隙，已经算是踩了狗屎运了。」",
              "stage": [
                "动作：恢复了一点理性的语气"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我还用家里的电脑查了卡西尼环缝的数据、轨道偏心率、光行差。那时候其实连微积分都没学过，很多字都看不懂，我就把能抄的参数全抄在一个本子上。没有老师布置，也没有人检查，但我自己抄得极度亢奋。」",
              "stage": [
                "动作：嘴角带着一丝不易察觉的骄傲"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「看来你这『写错题本』的强迫症基因，是从小就刻在DNA里的。」",
              "stage": [
                "动作：忍不住笑了"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那不叫错题本。那个叫土星观测手记。」",
              "stage": [
                "动作：一本正经地纠正"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「名字听着非常朴素且硬核。」",
              "stage": [
                "动作：强忍着笑意"
              ]
            },
            {
              "speaker": "lin",
              "text": "「封面更朴素。是我妈从超市抽奖送的记事本，封皮上印着一大串紫葡萄。」",
              "stage": [
                "动作：补了一刀"
              ]
            },
            {
              "speaker": "lin",
              "text": "「警告你，不要试图把宇宙天体和紫葡萄建立任何不必要的碳基生物联想。」",
              "stage": [
                "动作：冷冷地瞥了一眼，发出死亡警告"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林老师，你连童年回忆都要这么精准地校准误差吗？」",
              "stage": [
                "动作：举起双手投降"
              ]
            },
            {
              "speaker": "lin",
              "text": "「如果不校准客观观测条件，会显得我六岁时候的视网膜解析度超越了人类极限。」",
              "stage": [
                "动作：翻了个白眼"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那怎么了？如果野史记载：林澈，年方六岁，于广场舞阵中，裸眼肉身确认土星环。这不是更帅？」",
              "stage": [
                "动作：调侃"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这叫造谣。学术不端。」",
              "stage": [
                "动作：把桌上的卡片边缘狠狠磕齐"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她低头把卡片理平，像是因为刚才一口气暴露了太多内心的柔软，需要用这些机械的动作把那个感性的自己重新封印起来。",
              "stage": [
                "动作：列车进入平稳行驶区段"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「所以，你之所以死磕天文，归根结底是因为它的真实感？」",
              "stage": [
                "动作：收起笑容，语气变得认真"
              ]
            },
            {
              "speaker": "lin",
              "text": "「那只是一部分。」",
              "stage": [
                "动作：手上的动作停住"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那核心的另一部分呢？」",
              "stage": [
                "动作：追问"
              ]
            },
            {
              "speaker": "lin",
              "text": "「它虽然离我们极其遥远，甚至遥远到了令人绝望的地步，但它是可以被人类用数学和物理去『了解』和『掌握』的。」",
              "stage": [
                "动作：抬起头，眼神亮得灼人"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你还记得上个月语文课背过的那篇古文吗？『寄蜉蝣于天地，渺沧海之一粟』。人类的存在比起宇宙，连蜉蝣都算不上。但偏偏就是这种蜉蝣，却能算出天地运行的规律。我觉得这件事情本身，就浪漫到了极点，也硬核到了极点。」",
              "stage": [
                "动作：引用"
              ]
            },
            {
              "speaker": "narrator",
              "text": "车窗外，一条宽阔的河流将暗黄色的田地一分为二，水面反射着刺眼的太阳光，像一条掉在地上的银色刀刃。林澈的声音混在车轨规律的撞击声里，清冷、掷地有声。",
              "stage": [
                "场景音效：列车过桥，车轨敲击声"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我说的掌握，不是狂妄地想要控制宇宙。人类连一颗流星都控制不了。但我说的掌握是……你能通过推导，精确地知道它此刻在哪个坐标，它明天几点几分会从哪个方位角升起，它什么时候能用肉眼看见，什么时候只是被大气层里的云遮住了而已。」",
              "stage": [
                "动作：拨开一点窗帘，让光线完全落在自己交叠的双手上"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我迷恋这种确定性。不是因为它学起来简单——恰恰相反，它难得要命——正是因为它太宏大、太复杂了，所以你每算准一个常数，每在望远镜里多确认一个暗星，那种脚踏实地的感觉就越强烈。」",
              "stage": [
                "动作：语气变得极度踏实"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「踏实感。」",
              "stage": [
                "动作：看着她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「对。在这个世界上，月考成绩会波动，人际关系会变，别人怎么评价你更是一天一个样。可是如果你算准了历元和赤经差，只要今晚不下雨，土星就一定会在那片天区雷打不动地等你。就像那个著名的登山家马洛里说的，『为什么要登山？因为山就在那里。』」",
              "stage": [
                "动作：点头"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我初中有一阵子，极其讨厌别人跟我说什么『爱好嘛，喜欢就够了』。喜欢当然重要，但如果仅仅只停留在『喜欢』，我会觉得这种情绪太轻贱了，就像一阵脑热，风一吹就散了。」",
              "stage": [
                "动作：眉头微皱，带着一丝排斥"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我不需要向别人证明我是不是要把天文当成未来的职业。但我自己的底线是：如果我真的声称自己热爱某个事物，我就必须对它绝对认真。我绝不允许自己在遇到天体力学推导卡壳、或者遇到几套变态的 IOAA 卷子时，就给自己找台阶下，给自己洗脑说『算了吧，其实我也没那么喜欢』。」",
              "stage": [
                "动作：看着自己的错题卡片，眼神变得冷酷而决绝"
              ]
            },
            {
              "speaker": "lin",
              "text": "「天文不是过家家。你声称喜欢它，你就要咽得下背星表的枯燥、熬得住算坐标的崩溃、受得了天台零下十度的冷风，还要接受你在望远镜前冻了半宿却只能看到一团雾霾的挫败感。正是因为必须跨过这些令人作呕的麻烦，『热爱』这两个字才没有沦为一句轻飘飘的废话。」",
              "stage": [
                "动作：转头直视周行"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「所以……你根本就不屑于去喜欢那些容易得到的东西。」",
              "stage": [
                "动作：震撼，低声总结"
              ]
            },
            {
              "speaker": "lin",
              "text": "「容易的东西也可以喜欢，比如吃水果糖。但它不能、也不配假装成你人生的全部。」",
              "stage": [
                "动作：非常客观地纠正"
              ]
            },
            {
              "speaker": "narrator",
              "text": "听她说完这番话，车厢里陷入了长时间的安静。这是一种谁也不想用废话去打破的、极其厚重的沉默。我突然彻底明白了，她为什么在模拟卷丢掉那八分时会哭，为什么对“差不多”这个词深恶痛绝。她太早地领悟到了，真正宏大且美丽的猎物，是经不起任何轻浮对待的。",
              "stage": [
                "场景氛围：某种极度深刻的共鸣"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那你现在，还会经常想起小时候那台路边摊的望远镜吗？」",
              "stage": [
                "动作：过了一会儿，打破沉默"
              ]
            },
            {
              "speaker": "lin",
              "text": "「会。尤其是被题海淹没，做到怀疑自己到底为什么要受这份罪的时候。」",
              "stage": [
                "动作：手指无意识地抠了一下桌板边缘"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「比如……现在？」",
              "stage": [
                "动作：试探"
              ]
            },
            {
              "speaker": "lin",
              "text": "「现在还不至于怀疑人生。但确实……有点怕。」",
              "stage": [
                "动作：摇头"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这是她第一次，把『怕』这个字说得如此平静。不是初赛前夜在楼梯间那种崩溃到发抖的恐惧，也不是模拟考后死死咬牙掩饰的害怕。她现在只是非常客观地把自己的恐惧拿出来，像放下一张错题卡片一样，摆在小桌板上。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「怕决赛考砸了？」",
              "stage": [
                "动作：轻声问"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我怕我不知不觉中，把最初那份纯粹的喜欢，彻底异化成了一道冷冰冰的证明题。」",
              "stage": [
                "动作：看着那叠复习资料，眼神极其复杂"
              ]
            },
            {
              "speaker": "narrator",
              "text": "听到这句话，我的心脏猛地收缩了一下。那一瞬间我终于懂了，林澈并不是输不起比赛，她真正恐惧的，是这台应试机器会把那个站在广场上、满眼都是星星的小女孩，一点点碾碎、驱逐出她的身体。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「有时候做题做得麻木了，我真的分不清我到底是在向宇宙靠近，还是仅仅为了把试卷上每一步都写成别人能看懂的『得分点』。初赛过线、排名上升、夏学姐的表扬……这些标签贴在身上确实很爽。可如果有一天，我的热爱只剩下了这些标签，我会觉得这是一件极其惊悚的事情。」",
              "stage": [
                "动作：苦笑了一下"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「但你今天能把这种恐惧如此清晰地表述出来，说明你的大脑还没有完全被『得分点』腐蚀。」",
              "stage": [
                "动作：毫不留情地戳破，但语气温和"
              ]
            },
            {
              "speaker": "lin",
              "text": "「也许吧。说出来虽然不能解决问题，但至少相当于在程序里打了个错误标记。」",
              "stage": [
                "动作：耸了耸肩"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那你这么拼命，到底是在向谁证明？」",
              "stage": [
                "动作：看着她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「最开始是想向我妈证明我没玩物丧志。但后来我发现……我可能只是在向那个六岁的自己证明，我没有背叛她。」",
              "stage": [
                "动作：看着窗外"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我没有立刻接那种诸如“你肯定不会忘初心”的恶臭鸡汤。在林澈面前说这种空话，就像是在她的卷子上乱涂乱画一样不可原谅。",
              "stage": [
                "动作：坚定"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「想那么多干嘛。既然来了，我这次就替你去摸摸底，看看国决这头怪兽到底有多难杀。」",
              "stage": [
                "动作：拿起桌上的铅笔，在指尖转了一圈，然后啪地一声按在桌上 / 语气极度嚣张且踏实"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这句话一说出口，连我自己紧绷了一路的胃，都奇迹般地松懈了下来。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「如果它真的难到让人想撕卷子呢？」",
              "stage": [
                "动作：转过头，挑眉看着周行"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那就大方承认老子学艺不精，卷子太变态。然后能在它身上咬下几分算几分，坚决不交白卷。」",
              "stage": [
                "动作：摊手，一脸光棍"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这真不像你以前会说的话。」",
              "stage": [
                "动作：嘴角终于克制不住地上扬了一个明显的弧度"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「哦？如果是以前那个未经毒打的我，会怎么发言？」",
              "stage": [
                "动作：假装好奇"
              ]
            },
            {
              "speaker": "lin",
              "text": "「『害，问题不大，不就是几道题嘛』。然后背地里开始狂翻资料，一边算错单位一边急得满头大汗。」",
              "stage": [
                "动作：惟妙惟肖地模仿周行那种吊儿郎当的语气"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林老师，你这个评价虽然在物理层面上极度准确，但在精神层面上略显歹毒。」",
              "stage": [
                "动作：捂住脸，感觉受到了极大的暴击"
              ]
            },
            {
              "speaker": "lin",
              "text": "「是你自己以前教导我的，让我不要帮你把致命的错误粉饰得太好听。」",
              "stage": [
                "动作：恢复了清冷的面瘫脸"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我愣了一下。才反应过来她根本不是在嘲讽我，她只是把我以前随口扯的那些屁话，当成了某种定律，认认真真地存进了数据库里，然后在这个最需要的时候，精准地砸回我脸上。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你刚才那番破罐子破摔的发言，听起来简直就像是被夏学姐夺舍了。」",
              "stage": [
                "动作：干咳一声，强行转移话题"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「近墨者黑，我已经彻底被应试教育污染了。」",
              "stage": [
                "动作：大言不惭"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这种污染属于良性突变。建议永久保留。」",
              "stage": [
                "动作：把卡片整齐地塞回浅蓝色的文件袋，拉上拉链，发出清脆的响声"
              ]
            },
            {
              "speaker": "narrator",
              "text": "高铁广播响起了温和的女声，提示前方即将到达天津站。林澈把那个装满卡片的文件袋塞进书包的最深处。她没有再看一眼复习资料。",
              "stage": [
                "场景音效：列车到站广播声"
              ]
            },
            {
              "speaker": "narrator",
              "text": "车窗外，厚重的云层压得很低，天津这座庞大的重工业城市的钢铁轮廓逐渐从雾气中浮现出来。决赛的绞肉机就在几公里之外等我们。但令人极其匪夷所思的是，刚才那段关于土星环和破望远镜的长篇大论，竟然比我背过的任何一道押题，都更让我觉得做好了上战场的准备。",
              "stage": [
                "视线特写：车窗外的远方"
              ]
            }
          ]
        },
        {
          "id": "ch5-s4",
          "title": "报到和行李",
          "lines": [
            {
              "speaker": "narrator",
              "text": "列车进站时，车厢里的人像被统一设定的程序一样同时站了起来。头顶的行李架被纷纷打开，背包和外套被一件件扯下来。",
              "stage": [
                "场景音效：列车进站的刺耳刹车声，人群同时起身的嘈杂声"
              ],
              "bg": "arrivalStation",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "『天津』。陌生城市的站名在广播里响起，比准考证上的印刷体更有重量。",
              "stage": [
                "视线特写：站台标牌"
              ]
            },
            {
              "speaker": "xia",
              "text": "「都别散！出站以后排好队，别看见个便利店或者奶茶店就给我自动偏航。谁掉队了自己打车去赛场。」",
              "stage": [
                "立绘：提着行李箱，眼神像雷达一样扫过队伍"
              ],
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
              "text": "「学姐，你对我们高中生在陌生城市的生存能力有偏见。」",
              "stage": [
                "动作：拎起背包"
              ]
            },
            {
              "speaker": "xia",
              "text": "「我是对『空腹+极度紧张』的高中生随时可能出现的低智行为有经验。」",
              "stage": [
                "动作：冷笑"
              ]
            },
            {
              "speaker": "narrator",
              "text": "出站口的风带着很重的潮气。不是下雨那种湿漉漉的潮，而是混杂着海风、尾气和密集人群的热量，黏糊糊地贴在皮肤上。",
              "stage": [
                "场景：出站口，陌生城市的风"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你在看天气？」",
              "stage": [
                "动作：拖着箱子走到她旁边"
              ]
            },
            {
              "speaker": "lin",
              "text": "「湿度和云底高度。如果在这种气象条件下进行夜间实地观测，光害散射会非常严重。星等低于 $4$ 的暗星可能全军覆没。」",
              "stage": [
                "动作：视线没有收回"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你这进入状态的速度，比天津的高铁还快。」",
              "stage": [
                "动作：嘴角抽搐了一下"
              ]
            },
            {
              "speaker": "narrator",
              "text": "半小时后，大巴车把我们扔在了承办学校的一栋教学楼前。门口拉着红底白字的巨大横幅：『全国中学生天文奥林匹克竞赛（CNAO）决赛报到处』。",
              "stage": [
                "场景：承办学校，报到处 / 场景氛围：被焦虑填满的校园"
              ],
              "bg": "competitionVenue",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "校园里到处都是拖着行李箱的学生。有的队伍排得很长，有人蹲在花坛边给家里打电话，还有人直接把拉杆箱当桌子，低头狂翻复习资料。每个人看起来都很普通，但空气里那种令人窒息的竞争感，比任何一次期末考试都要浓烈百倍。",
              "stage": [
                "动作：环视四周"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我以前总觉得“国决选手”这四个字应该带点什么光环，至少看起来要比普通人沉稳聪明。可真正站在这儿才发现，大家也一样会因为找不到厕所而烦躁，也会在排队时捏着一把汗。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "managerTeacher",
              "text": "「学校、姓名、身份证。确认一下。资料袋一人一份，里面有日程表、考场规则和房卡。」",
              "stage": [
                "动作：坐在长桌后，面无表情地敲击键盘"
              ]
            },
            {
              "speaker": "managerTeacher",
              "text": "「下一位。」",
              "stage": [
                "动作：抬眼"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「周行。」",
              "stage": [
                "动作：上前一步，拿起签字笔"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我在签到表上写字。手心出了点汗，写到学校名称的时候，笔尖在纸上明显地顿了一下。表格上的项目具体得有些残酷：紧急联系人、过敏史。这就像是在签一份生死状，它根本不在乎你备考熬了多少个通宵，它只在乎你明天能不能按时坐进考场，以及万一你崩溃了该给谁打电话。",
              "stage": [
                "视线特写：登记表"
              ]
            },
            {
              "speaker": "lin",
              "text": "「字写清楚点，别连笔。尤其是身份证号，别写错位。」",
              "stage": [
                "动作：站在旁边，盯着周行的登记表"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我还没紧张到手抖的程度。」",
              "stage": [
                "动作：收起笔"
              ]
            },
            {
              "speaker": "managerTeacher",
              "text": "「你们一个学校的？挺好。互相提醒着点，别把准考证落酒店里。」",
              "stage": [
                "动作：看了两人一眼，语气机械"
              ]
            },
            {
              "speaker": "narrator",
              "text": "离开长桌，林澈顺手把我的资料袋也拿了过去。",
              "stage": [
                "动作：转身离开报到处"
              ]
            },
            {
              "speaker": "lin",
              "text": "「考场不在一栋楼。你在三教 304，我在 402。明天早晨的路线不能完全重合。」",
              "stage": [
                "动作：手指迅速从考场规则和日程表上滑过"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「终于不能互相监督了。」",
              "stage": [
                "动作：叹气"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我可以监督你走到三楼的楼梯口。防止你因为紧张走错楼层。」",
              "stage": [
                "动作：把资料袋还给周行，语气认真"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林澈牌全天候防翻车服务？」",
              "stage": [
                "动作：被逗笑了"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不提供服务。我只是在排查一切可能导致我们失去比赛资格的低级失误。」",
              "stage": [
                "动作：把自己的资料塞进浅蓝色的文件夹里 / 冷着脸"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「你们到了。」",
              "stage": [
                "立绘：背着黑色的双肩包，极其自然地出现在两人视线里"
              ],
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
              ]
            },
            {
              "speaker": "narrator",
              "text": "顾望舒站在花坛旁边。她身上有一种极其可怕的、已经完全进入了“厮杀”状态的平静。当别人还在因为陌生环境而局促时，她似乎已经把整栋楼的物理结构和动线全部分析完毕了。",
              "stage": [
                "动作：微表情特写"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你什么时候到的？」",
              "stage": [
                "动作：惊讶"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「上午。我已经把考场楼的外围踩过点了。」",
              "stage": [
                "动作：走过来"
              ]
            },
            {
              "speaker": "lin",
              "text": "「考场允许提前进？」",
              "stage": [
                "动作：立刻警觉"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「不允许进楼。但我把考场楼的三个出入口、距离最近的洗手间位置，以及到食堂的最短路线，画了一张简图。」",
              "stage": [
                "动作：递给林澈一张折叠整齐的纸"
              ]
            },
            {
              "speaker": "narrator",
              "text": "那张从笔记本上撕下来的纸，边缘折得像刀切一样直。上面用黑、蓝、红三色笔极其清晰地标明了所有的动线。",
              "stage": [
                "视线特写：简图"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……谢谢。」",
              "stage": [
                "动作：接过图纸，眼神闪过一丝佩服"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「不用。今晚别再刷任何新题了，最多过一遍错因卡片。很多废物到了赛场才开始假装努力挑灯夜战，那叫缓解焦虑，不叫复习。别学他们。」",
              "stage": [
                "动作：看了两人一眼，语气依然毫无起伏"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这句话就像一记闷棍。林澈捏着那张简图，极轻地“嗯”了一声。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "男生和女生的宿舍不在同一栋楼。走廊里弥漫着一股陈旧的消毒水味。",
              "stage": [
                "场景切换：宿舍楼内 / 音效：行李箱轮子滚过走廊的隆隆声"
              ],
              "bg": "hotelRoomNight",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "和我同屋的是另一个省份的男生。他一进门，连行李都没开，第一件事就是把准考证用透明胶死死地贴在书桌的右上角，像是在镇压某种随时会爆发的厄运。我们互相报了名字，然后极度默契地闭上了嘴，谁也没有要闲聊的意思。",
              "stage": [
                "场景：双人间内"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我把行李箱推到角落，插上手机充电器，把那叠薄薄的资料拿出来。陌生的床铺、陌生的灯光，还有窗外极其陌生的操场，都在提醒我：明天不是模拟考，明天是真正的行刑场。",
              "stage": [
                "动作：收拾行李"
              ]
            },
            {
              "speaker": "lin",
              "text": "消息：房卡已确认。资料袋无遗漏。作息时间表在手册第二页。",
              "stage": [
                "消息截图"
              ]
            },
            {
              "speaker": "zhou",
              "text": "消息：收到。你行李整理完了？",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "lin",
              "text": "消息：差不多。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "zhou",
              "text": "消息：林老师，你现在连整理行李都要像写实验报告一样汇报进度吗？",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "lin",
              "text": "消息：这是为了防止你产生「林澈肯定又在背着我偷偷刷题」的被害妄想。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "zhou",
              "text": "消息：那你到底刷没刷？",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "lin",
              "text": "消息：没有。我只是把那十二张卡片拿出来了，放在枕头旁边。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "zhou",
              "text": "消息：……这不叫复习，你这是在进行某种考前宗教仪式。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "lin",
              "text": "消息：闭嘴。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我笑了一下，把自己的那份卡片也掏出来，压在台灯下面。窗外的天色彻底暗了下来，楼下有志愿者拿着大喇叭在喊集合去食堂吃饭。",
              "stage": [
                "动作：关掉手机，看向窗外"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我本来想翻开资料，至少再背一遍星历表的几个常数，让自己看起来没有那么无所事事。但手指碰到纸页边缘的那一刻，我停住了。焦虑最喜欢伪装成勤奋的样子。再看下去，我根本记不住任何新东西，只会把脑子里好不容易建好的防御工事全部冲垮。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我忽然觉得在这个狭小的、充满倒计时压迫感的房间里待不下去了。我抓起房卡，走出宿舍。不是为了去复习，也不是为了熟悉路线，我只是想在明天那扇名为“国决”的铁门彻底关死之前，再去吹吹外面那股真实的、黏糊糊的海风。",
              "stage": [
                "动作：站起身"
              ]
            }
          ]
        },
        {
          "id": "ch5-s5",
          "title": "海边夜谈",
          "lines": [
            {
              "speaker": "narrator",
              "text": "晚饭后，夏南星给了我们两个小时自由活动。活动范围被严格限制在学校外两条街以内，手机必须保持畅通，九点前滚回集合点。",
              "stage": [
                "场景音效：远处隐约的海浪声，街道的喧闹声"
              ],
              "bg": "seasideNight",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "承办学校离海不远。沿着校门外那条路往下走，风里那种黏糊糊的潮咸味越来越明显。",
              "stage": [
                "动作：并肩走在夜色中"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你居然真的没带那些要命的卡片？」",
              "stage": [
                "动作：偏头看了她一眼，带着点调侃"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不带。」",
              "stage": [
                "动作：目视前方，语气平淡"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林老师进步明显啊，居然学会放下执念了。」",
              "stage": [
                "动作：故作惊讶"
              ]
            },
            {
              "speaker": "lin",
              "text": "「是因为这个包太小，塞不下A4纸尺寸的文件夹。」",
              "stage": [
                "动作：拍了拍自己那个扁扁的小包 / 语气严谨"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「在这种时候，你其实可以不用这么诚实。」",
              "stage": [
                "动作：哑然失笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「诚实地面对物理空间的限制，也算一种进步。」",
              "stage": [
                "动作：转过头，眼底闪过一丝极淡的笑意"
              ]
            },
            {
              "speaker": "narrator",
              "text": "路边的店铺还开着，玻璃门里透出白色的白炽灯光。有人拎着外卖从我们旁边匆匆跑过去，塑料袋在海风里被吹得哗啦啦直响。再往前走，城市那种紧绷的声音逐渐变得松散，像是被海风一点点吹化了。",
              "stage": [
                "场景氛围：从喧闹到宁静"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们没有特意并肩走得很近，中间始终隔着大概一拳的安全距离。可人行道有几段被乱停的共享单车占了，只能一前一后地侧身绕过去。每次绕完，林澈都会在原地极不明显地停顿半步等我；而我也会在不知不觉中把脚步放慢，去配合她的频率。",
              "stage": [
                "视线特写：脚下的步伐"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这些微小的动作甚至连“刻意”都算不上，但在一个全然陌生的城市、在即将踏上决战考场的前夜，这种无声的同频，比很多明说出来的关心都要清晰得多。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你刚才晚饭吃得很少。」",
              "stage": [
                "动作：看着她被风吹乱的一缕头发"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不饿。」",
              "stage": [
                "动作：把那一缕头发别到耳后"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「这是客观的生理事实，还是你所谓的『赛前胃口管理』？」",
              "stage": [
                "动作：追问"
              ]
            },
            {
              "speaker": "lin",
              "text": "「两者都有。」",
              "stage": [
                "动作：想了想"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那等会儿回酒店前，去便利店买盒热牛奶？我也得喝点，不然半夜饿醒了影响睡眠。」",
              "stage": [
                "动作：叹气"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你确实该喝。你刚才吃晚饭的时候，筷子一直在无意识地戳那碗米饭，根本没吃进去几口。」",
              "stage": [
                "动作：转头盯着周行"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我本来想反驳，可仔细一回想，她说得极其精准。我忽然意识到，原来『互相观察』这件事在我们之间已经变得如此自然——自然到我们可以在饭桌上装作各怀心事地看着别处，实际上却把对方把筷子停了几次、吃了多少，全都看得一清二楚。",
              "stage": [
                "动作：愣住"
              ]
            },
            {
              "speaker": "narrator",
              "text": "海出现在路的尽头时，我是先听见声音的。不是电影里那种波澜壮阔的巨浪，只是一层一层的潮水拍在防波堤上，发出低沉、规律的声响，像有人在黑暗中翻动一本极其厚重的书。",
              "stage": [
                "场景：海堤边 / 光影：黑暗与碎光"
              ],
              "bg": "seasideNight",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasual",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "再往前走上几级台阶，路灯忽然消失了。栏杆外面铺开了一整片深渊般的黑。这片海没有白天照片里那种滤镜般的蓝色，只在近岸处被微弱的城市灯光切出细碎的银色波纹。远处偶尔有几点船灯慢慢挪动，慢得让人怀疑它们是不是其实被冻结在了那里，只是海风和波浪让我们产生了它在移动的错觉。",
              "stage": [
                "视线特写：黑色的海面"
              ]
            },
            {
              "speaker": "lin",
              "text": "「真的有海。」",
              "stage": [
                "动作：双手扶住冰凉的栏杆，深深吸了一口带着盐分的海风"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你之前是怀疑报到通知造假吗？」",
              "stage": [
                "动作：站在她身侧，手肘几乎要碰到她的胳膊"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不是。只是在电子地图的卫星图上看到，和真的用双脚走到它的旁边，感觉完全不一样。」",
              "stage": [
                "动作：看着黑黢黢的海面，声音放得很轻"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们沿着海边慢慢走。岸边偶尔有几个散步的人在用手机拍照，说话声被海风瞬间卷走，只剩下断断续续的笑音。我原本以为，考前来看看海会让人彻底放松下来。可真正站在这里，面对着这种无边无际的漆黑与庞大，我才发现，它只是把我心里那些试图压抑的东西全都放大了——白天在报到处签下名字时的战栗、在高铁上被卡片压住的疲惫，还有一些……我看着身边的人，不太敢细想的期待。它们就像岸边那些长满海苔的潮湿石头，藏不住，也擦不干。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "白天那个在高铁上用极快语速讲着土星环、用红笔划掉多余公式的女孩，现在正安静地看着海。她没有催促我说话，也没有打破沉默。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我小时候……第一次真正认真地看星星，是在乡下。」",
              "stage": [
                "动作：看着远处的船灯，声音有些低哑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你外婆家？」",
              "stage": [
                "动作：转过头"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「嗯。小学的一个暑假，遇上大面积停电。」",
              "stage": [
                "动作：点头"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这四个字说出口，我才发现它们太单薄了。单薄得像一条粗糙的目录，根本装不下那个晚上真实的温度、泥土的味道和虫鸣的喧嚣。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她靠在栏杆上，像是在给一台已经对准目标的望远镜留出继续精密调焦的时间。这种无声的倾听，是她独有的温柔。",
              "stage": [
                "动作：微表情特写"
              ],
              "bg": "cgCh5LinSeasideProfile",
              "clear": true
            },
            {
              "speaker": "zhou",
              "text": "「那时候村子里的晚上，暗得很彻底。不是城市里这种有路灯、有霓虹灯、有车灯做底色的暗。是电闸一拉，整个世界就像被人瞬间按进了一潭深水里。」",
              "stage": [
                "动作：视线放空，陷入回忆"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我当时其实挺害怕的，毕竟习惯了城市的亮光。但我外婆拿着一把破蒲扇，慢悠悠地说没事，等会儿就来电了。她把一张竹床从屋里搬到院子中央，让我躺在上面等。」",
              "stage": [
                "动作：自嘲地笑了一下"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「院子里有一棵很老的枣树，树干弯得极其夸张，白天看着普通，晚上停电后就变成了一个巨大的、张牙舞爪的黑影。井边的水桶还在滴水。外婆拖动竹床的时候，竹子摩擦泥地，发出一声特别长、特别刺耳的『吱呀——』声。」",
              "stage": [
                "动作：比划了一下"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我那时候心里特别烦躁。觉得没动画片看，电风扇也停了，蚊子还在耳边嗡嗡叫。小孩子的世界太小了，小到一次普通的停电，就好像整个夏天都出了致命的故障。」",
              "stage": [
                "动作：深吸一口气"
              ]
            },
            {
              "speaker": "narrator",
              "text": "海风从脸侧吹过，我眼前却浮现出另一个夜晚。",
              "stage": [
                "场景交叠"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「可是，等我烦躁地在竹床上一躺下，我就看见了星星。极多，极亮。不是星图课本上那种规规矩矩、按星等标出来的圆点。那是一整片压迫下来的星空，多到我根本不知道视线该往哪里落。」",
              "stage": [
                "动作：声音变得很轻，带着一丝敬畏"
              ]
            },
            {
              "speaker": "lin",
              "text": "「能看见银河吗？」",
              "stage": [
                "动作：轻声接话，声音和海浪声融在一起"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「能。很淡，但绝对能看清。就像是有人抓了一把白色的荧光粉撒在黑色的幕布上，又用手掌随意地抹开了一样。」",
              "stage": [
                "动作：点头，眼神变得极其明亮"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「它不像哈勃望远镜拍出来的那些深空照片那么壮观、那么有色彩。它反而有点灰暗、有点旧，像是一条被几万年的风吹出来的痕迹。我躺在竹床上看了很久很久。一开始，我还试图去数那些亮一点的导航星，但数着数着脑子就宕机了，因为四面八方全都是。」",
              "stage": [
                "动作：看着林澈的眼睛"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「后来，我突然不想数了。不是因为数量太多数不过来，而是我第一次觉得，『数』这个动作本身，在那种尺度面前太狭隘了。我头顶上挂着的，不是一张等着我去填空、去标答案的星图试卷，而是一个正在把我和外婆、弯曲的枣树、滴水的水桶、以及整个停电的村庄，全部包裹进去的巨大空间。」",
              "stage": [
                "动作：自嘲地揉了揉后脑勺"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我说完以后，忽然觉得有点不好意思。这个比喻一点也不科学，既没有赤经赤纬，也没有视星等。",
              "stage": [
                "动作：停顿"
              ]
            },
            {
              "speaker": "lin",
              "text": "「挺像的。」",
              "stage": [
                "动作：没有纠正，而是看着海面，极其认真地评价"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那时候我还不知道什么春季大曲线，也不知道坐标系。我只是在那一刻突然意识到，我不是双脚踩在平地上，抬头去看一块画满星星的天花板。」",
              "stage": [
                "动作：松了一口气，继续说"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我是在『里面』。大地在里面，枣树在里面，外婆摇蒲扇的风声也在里面。我不是一个被宇宙拒之门外、只能拿着望远镜参观的游客，我本身就是它极小、极小的一部分。」",
              "stage": [
                "动作：声音变得笃定"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「这种感觉，等我回到城市以后就几乎消失了。楼太高，光污染太严重，每天做不完的卷子……我经常只是对着纸上的题目死算，或者在天文软件里拖动时间轴，我知道某颗星几点升起，却再也感觉不到，自己其实也跟着地球在那个宏大的运动系统里。」",
              "stage": [
                "动作：低下头，看着防波堤上的水渍"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「所以，那天晚上在学校天台，当我们顶着光害重新找到角宿一的时候，我才会那么激动。它不是最难的考点，但它让我想起了那张竹床。它让我记起，就算我只是一粒连名字和成绩都没有的尘埃，我也切实地躺在这颗蓝色的行星上，身处在一个不可思议的庞大系统里。」",
              "stage": [
                "动作：再次看向林澈，眼神极其真诚"
              ]
            },
            {
              "speaker": "narrator",
              "text": "海浪拍上来，撞碎在石头上，又哗啦啦地退下去。我第一次把这件藏在心里最深处的事讲给别人听。讲完的瞬间，我才发现，它比我想象中更接近——我为什么愿意拼了命坐上这趟来天津的高铁。",
              "stage": [
                "场景氛围：共鸣的寂静"
              ]
            },
            {
              "speaker": "lin",
              "text": "「所以你喜欢天文，是因为它让你觉得，自己是在『里面』？」",
              "stage": [
                "动作：偏过头，清冷的眼睛里闪着细碎的波光"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「差不多吧。听起来是不是有点假大空？」",
              "stage": [
                "动作：摸了摸鼻子"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不空。非常具体。竹床、停电、蒲扇、银河……这比你在申请表上写『热爱浩瀚星空』要具体一万倍。」",
              "stage": [
                "动作：极其果断地摇头"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那时候我觉得，既然我也是这个庞大系统的一部分，那我总该能弄懂它一点点吧。哪怕就弄懂一点点也行。」",
              "stage": [
                "动作：笑了一下，笑容里带着自嘲"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「可是后来开始做题，开始准备竞赛，我才发现，想弄懂那『一点点』简直难如登天。越学越觉得自己渺小。不是那种被打击到自卑的小，而是你清楚地知道，那片黑暗里藏着太多你无法理解的变量，你根本没有资格去装作自己都懂。」",
              "stage": [
                "动作：叹了口气，靠在栏杆上"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「但我居然不讨厌这种渺小。它让我知道，如果我在考场上有一道大题解不出来，我并不是世界上唯一一个被困住的人；如果天台上一整晚都被云层遮住，也不代表星空就此消失。只是我站的观测点、天气、手里的工具、或者是我的知识储备，还不够而已。」",
              "stage": [
                "动作：看着海平线"
              ]
            },
            {
              "speaker": "lin",
              "text": "「认知到自己的局限，在科学上从来都不是坏事。」",
              "stage": [
                "动作：语气温和而坚定"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「嗯。道理我都懂。可是……明天就要进考场了，作为一个渺小的人类，我还是会紧张得要命。」",
              "stage": [
                "动作：转过头，看着她"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我终于把这句被压抑了很久的话吐了出来。白天在高铁上，我还能用插科打诨去掩饰；可到了这片漆黑的海边，冷风一吹，那些用来伪装的玩笑就像纸片一样薄。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我怕自己在考场上又因为脑热去乱代公式。怕看到完全没见过的超纲题直接死机。我也怕……怕最后成绩出来，我们发现这几个月的死磕，仅仅只是把自己感动了一把而已。」",
              "stage": [
                "动作：声音微微发涩，毫无保留地坦白"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我还怕，等回了学校，别人问我考得怎么样，我只能挤出那种『还行』、『就那样吧』、『尽力了』的废话。那些词太虚伪了，空洞得就像一张只写了『解』字的白卷。可如果不这么回答，我好像又不知道该怎么向他们解释，为什么我们付出了这么多，却依然存在那么多不可控的变数。」",
              "stage": [
                "动作：手用力握紧栏杆"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「还有最麻烦的一点……我知道我不该把人生的全部意义都压在这次决赛上，可它毕竟就在那儿。它就像一块极其刺眼的标路牌，死死地钉在路的尽头，我闭上眼睛都能看见它在发光。」",
              "stage": [
                "动作：低下头，像在坦白最后的罪行"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我说完，胸口剧烈地起伏了一下，像是在等待她用理性的逻辑将我这番软弱的发言驳倒。",
              "stage": [
                "动作：等待审判"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不是。」",
              "stage": [
                "动作：转过身，背靠着栏杆，直视周行的眼睛 / 语气前所未有的坚定"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你连让我铺垫一下情绪的缓冲期都不给？」",
              "stage": [
                "动作：愣住"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这个结论在物理层面上就是错的，不需要缓冲。不是感动自己。」",
              "stage": [
                "动作：毫不退让"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她看着我，眼神里没有一点躲闪和退缩，就像她在草稿纸上重重写下答案时一样笃定。",
              "stage": [
                "动作：微表情特写"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你以为努力只有在换来奖牌的那一刻才成立吗？你改掉了不写单位的毛病，学会了在画图前先确认天顶位置；我也被你逼着学会了四分半钟强制停笔，学会了放下对残缺数据的强迫症。我们现在能精准地拆解彼此的错因，能在模拟考崩溃后立刻开始修正……这些，没有任何一项是靠『自我感动』就能凭空变出来的。」",
              "stage": [
                "动作：细数那些微小的证据，字字句句砸在周行心上"
              ]
            },
            {
              "speaker": "lin",
              "text": "「如果明天的结果不尽如人意，它只能说明我们在那张特定的卷子上还不够强，但它绝对没有资格去抹杀和删改我们这三十天真实存在过的进步。那种因为一个结果而否定全部过程的算法，不准确。」",
              "stage": [
                "动作：语气变得极度柔和，却充满力量"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你这人……连安慰人都要讲究科学的准确性。」",
              "stage": [
                "动作：眼眶微微发热，忍不住苦笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「因为不准确的安慰，就像用劣质胶水粘起来的仪器，一上考场就会碎掉。」",
              "stage": [
                "动作：转头看着起伏的海浪，理所当然地说"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她说这句话时，海风把她的声音吹得很轻。林澈给人的安慰，从来不是给你画一个“明天一定会很好”的虚假大饼，而是弯下腰，把你过去流过的汗、犯过的错、咬牙走过的每一步，像捡起散落的零件一样，一件件极其严谨地拼装回来，塞进你的手里。告诉你：看，这些都是你真实拥有的武器。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你也承认你自己改掉了一些坏毛病？」",
              "stage": [
                "动作：看着她，眼神变得极其柔软"
              ]
            },
            {
              "speaker": "lin",
              "text": "「改了一点。」",
              "stage": [
                "动作：下巴微扬，带着点小骄傲"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林澈式——巨——大——进——步。」",
              "stage": [
                "动作：拉长声音，调侃"
              ]
            },
            {
              "speaker": "lin",
              "text": "「闭嘴。禁止给我的行为做夸张命名。」",
              "stage": [
                "动作：瞪了他一眼"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我忍不住笑出了声。笑完之后，胸口那块像石头一样压了整整一个星期的紧绷感，奇迹般地融化了。并不是不紧张了，而是那份令人窒息的恐慌，终于找到了一个安全的着陆点。",
              "stage": [
                "动作：释然的笑"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「其实……除了害怕，我心里也有期待。」",
              "stage": [
                "动作：收敛了笑容，眼神变得前所未有的专注和深邃，声音极低"
              ]
            },
            {
              "speaker": "lin",
              "text": "「什么期待？」",
              "stage": [
                "动作：微微侧头，看着他"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我想知道我们拼尽全力，到底能走到那个坐标系的什么位置。不是为了向老许或者我爸证明什么，只是想在国家级最顶尖的赛场上，堂堂正正地去试错一次。把刻在骨子里的直觉写出来，把跨不过去的坎看清楚。」",
              "stage": [
                "动作：转过身，和她一样背靠着栏杆，看着远处城市的灯火"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我想去确认一下……当年那个躺在乡下竹床上，觉得自己身处于宇宙之中的渺小小孩，和现在这个熬了无数个通宵、带着准考证站在这里的我……这两点之间，到底有没有画出一条真实的轨迹。」",
              "stage": [
                "动作：声音带着一丝不易察觉的颤抖"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我停顿了一下。海风在这一刻似乎变得异常喧嚣，或者只是因为我自己的心跳声太大，耳膜在嗡嗡作响。我转过头，看着她被风吹得有些凌乱的发丝，和那双在黑夜里依然清明透彻的眼睛。",
              "stage": [
                "动作：最长的一次停顿"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「还有……我想和你一起，去走完这条轨迹。」",
              "stage": [
                "动作：声音轻得几乎要被海风吹散，却每个字都咬得很重"
              ]
            },
            {
              "speaker": "narrator",
              "text": "最后半句话说出来的瞬间，连海浪拍打礁石的声音似乎都远去了。空气中弥漫着一种因为靠得太近而产生的、让人屏息的微弱电流感。",
              "stage": [
                "场景氛围：时间仿佛静止"
              ]
            },
            {
              "speaker": "narrator",
              "text": "一秒、两秒……",
              "stage": [
                "时间流逝"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……嗯。」",
              "stage": [
                "动作：视线依然看着黑色的海面，但声音却清晰、坚定地穿透了风声"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「就只是『嗯』？」",
              "stage": [
                "动作：心跳漏了一拍，忍不住追问，带着连自己都没察觉到的紧张"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我也想。」"
            },
            {
              "speaker": "narrator",
              "text": "那三个字落下来的瞬间，我没有再追问。海浪声重新在我们之间铺开，反而把此刻的沉默包裹得极其妥帖。我们都不是那种擅长把誓言和承诺挂在嘴边的人。在这个稍微往前多跨一步，就会显得过于刺眼的青春时刻，能听到她用那种不容置疑的语气说出“我也想”，已经足够让我在未来的漫长岁月里，反复回味很久很久。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「明天在考场上，如果你遇到大题脑子发热，记住，先深呼吸，在草稿纸上画那个小三角。」",
              "stage": [
                "动作：为了掩饰脸颊的微热，强行把话题拽回物理层面 / 语速稍快"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那如果你在推导时卡住了呢？」",
              "stage": [
                "动作：顺着她给的台阶下，声音里带着藏不住的笑意"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我会回头重新读题干。绝对不把卡住当成绝境。」",
              "stage": [
                "动作：深吸一口海风"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「连顾望舒的毒舌语录你都带进考场了？」",
              "stage": [
                "动作：挑眉"
              ]
            },
            {
              "speaker": "lin",
              "text": "「只要在战术上有效，就可以调用。」",
              "stage": [
                "动作：理直气壮"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们在海边的栏杆旁又安静地站了一会儿。石板台阶的凉意顺着鞋底传上来，海风把她的头发吹得更加凌乱，但她难得没有立刻伸手去把它们理平。远处海面上的船灯还在以肉眼几乎难以察觉的速度移动着，就像是一道极其漫长的物理题，正在黑暗中缓慢但坚定地推演着它的已知条件。",
              "stage": [
                "动作：并肩静立"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我看着她的侧脸，忽然想把这一刻记清楚一点。明天进考场之后，我们会被各自的试卷和电子钟分开；而此时此刻，我们还靠在同一段防波堤上，听同一阵风从海面上吹过来。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你在看什么？发呆？」",
              "stage": [
                "动作：转过头，发现周行一直在看着自己，稍微有些不自在"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我在思考一个严谨的学术问题：明天之前的这阵海风，在不在我们的复习大纲里？」",
              "stage": [
                "动作：收回视线，笑了笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「从知识点上来说，不在。但从心理调节的变量来看，它可以作为合法休息的证据。」",
              "stage": [
                "动作：一本正经地思索了两秒"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「懂了。那等回去以后，如果夏学姐拿枪指着我们问有没有好好休息，我就说我的人证物证俱在，证据链极其充分。」",
              "stage": [
                "动作：煞有介事地点头"
              ]
            },
            {
              "speaker": "lin",
              "text": "「她会要求你提交纸质版的风速测定材料。」",
              "stage": [
                "动作：毫不留情地拆台"
              ]
            },
            {
              "speaker": "narrator",
              "text": "九点差十分，夏南星那极具压迫感的消息准时在屏幕上弹了出来。",
              "stage": [
                "音效：手机特别关心的震动声"
              ]
            },
            {
              "speaker": "xia",
              "text": "消息：放风时间结束。还在外面游荡的，立刻滚回一楼大厅集合点。不要逼我亲自去派出所捞人。",
              "stage": [
                "消息截图"
              ]
            },
            {
              "speaker": "zhou",
              "text": "消息：收到。正在返回地球的路上。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "lin",
              "text": "消息：我们在海边，距离酒店 800 米。十分钟内到达。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "xia",
              "text": "消息：很好。请海边的两位同学务必带着完整的脑干回来，明早不许出现任何宕机现象。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "lin",
              "text": "「走吧。回去了。」",
              "stage": [
                "动作：把手机放回小包里，拍了拍手心并不存在的细沙，站直身体，最后深深看了一眼黑色的海面"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「嗯。明天见。」",
              "stage": [
                "动作：转过身，跟上她的步伐"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我们不是马上就要回同一个酒店大堂了吗？」",
              "stage": [
                "动作：停住脚步，回头有些疑惑地看着他"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那就，明天考场见。」",
              "stage": [
                "动作：凝视着她，字正腔圆地重新说了一遍"
              ]
            },
            {
              "speaker": "lin",
              "text": "「好。明天考场见。」",
              "stage": [
                "动作：眼神瞬间变得极其明亮，犹如星光"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们沿着原路往回走。身后是咆哮的深黑色海洋，前方是亮着温暖白光的集合点。准考证、卡片、日程表都在它们该在的位置上，那种对未知的紧张感其实依然盘踞在心头。",
              "stage": [
                "场景：走回酒店的路 / 光影：昏黄的路灯拉长身影"
              ],
              "bg": "seasideNight",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "但在这一刻，我终于不再觉得自己是一个被倒计时和试卷裹挟着、狼狈推向刑场的考生。这一次，我是自己主动、清醒地走向那个战场的。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈走在我的身边，步子不疾不徐。我们的影子被路灯拉得很长很长，在坑洼的砖面上交叠在一起。",
              "stage": [
                "视线特写：重叠的影子"
              ]
            },
            {
              "speaker": "narrator",
              "text": "明天，会是一场硬仗。会非常、非常难。我们心里都清楚。可是，当带着盐分的海风从我们背后用力推过来的时候，我忽然觉得……那些距离地球十多亿公里的星体是真实存在的；而我们，能够并肩从那间闷热的社团教室，一路走到这片海的面前——这件事，也同样无比真实。",
              "stage": [
                "心理活动"
              ]
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
              "speaker": "narrator",
              "text": "第二天早上，我是在手机闹钟响之前三分钟醒来的。酒店遮光窗帘的缝隙里透进一条冷白色的光，房间里安静得只有中央空调出风口轻微的嗡嗡声。陌生室友翻了个身，床单摩擦出一声闷响。",
              "stage": [
                "场景氛围：极度寂静的清晨"
              ],
              "bg": "hotelRoomDay",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我盯着天花板看了五秒钟，强制重启大脑。这不是家里那张熟悉的床，也不是学校乱七八糟的宿舍。书桌上，那个装着准考证和身份证的透明文件袋，昨晚被我像供奉神龛一样摆得绝对方正。它静静地躺在那儿，比我本人更清楚今天要去干什么。",
              "stage": [
                "视线特写：桌面的准考证"
              ]
            },
            {
              "speaker": "narrator",
              "text": "洗手间的水管还没热，水流冷得刺骨。我用冷水狠狠泼了两把脸。镜子里的人眼底下挂着淡淡的青色，头发因为昨晚睡得太死，有一撮倔强地翘着，怎么用水压都压不下去。",
              "stage": [
                "动作：洗漱，看着镜子"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（行吧。全国决赛选手，发型管理彻底宣告破产。）",
              "stage": [
                "动作：对着镜子自嘲"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这句脑内的自我吐槽并没有让我真正轻松下来，但至少它证明我的神经还没有被即将到来的考试彻底压死，还能进行最低限度的日常活动。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "xia",
              "text": "消息：七点二十楼下大堂集合。准考证、身份证原件、考试文具。早餐必须给我咽下去。不要在考场门口给我表演低血糖晕厥，我丢不起这个人。",
              "stage": [
                "消息截图"
              ]
            },
            {
              "speaker": "zhou",
              "text": "消息：收到。正在进食。",
              "stage": [
                "消息回复"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我看了眼桌上昨晚买的肉松面包，其实连包装袋都还没撕。为了让那条回复显得不那么虚伪，我强行撕开包装，干巴巴地咬了一大口。面包屑掉在桌子上，咽下去的时候，喉咙因为紧张而发紧，像是在吞一团砂纸。",
              "stage": [
                "动作：机械进食"
              ]
            },
            {
              "speaker": "narrator",
              "text": "楼下大堂已经站了不少人。各个省份的带队老师在点名，志愿者举着接驳车的牌子。林澈站在夏南星旁边。\n[视线特写：林澈] 她今天把校服外套的拉链拉到了最顶端，头发用一根黑色的皮筋扎成了一个干净利落的马尾。她手里没有拿任何复习资料，也没有拿那些错题卡片，只有那个装着文具和准考证的透明文件袋。",
              "stage": [
                "场景：酒店大堂集合点 / 场景氛围：表面平静下的暗流涌动"
              ],
              "bg": "competitionVenue",
              "clear": true
            },
            {
              "speaker": "lin",
              "text": "「早。你迟到了两分钟。」",
              "stage": [
                "动作：看着周行走过来，视线在他微卷的衣领上停了一秒，然后移开"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「早。这两分钟用来对付那个难以下咽的面包了。」",
              "stage": [
                "动作：下意识地理了一下领口"
              ]
            },
            {
              "speaker": "xia",
              "text": "「吃进去了就行。文具袋打开，我最后核对一遍证件。」",
              "stage": [
                "动作：冷着脸扫视两人"
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈拉开拉链，她的准考证、身份证和学生证就像被尺子量过一样，严丝合缝地叠在一起。我翻开自己的袋子时，几支备用的黑色中性笔滚了一下，把准考证的边缘压住了一点。",
              "stage": [
                "动作：检查证件"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这样检录的时候抽出来最快。不要让监考老师等你。」",
              "stage": [
                "动作：极其自然地伸出手，食指和中指夹住那张准考证的边缘，把它从笔的下面抽出来，重新平铺在最上面。"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林澈牌考前精细化管理服务？」",
              "stage": [
                "动作：看着她收回的手，愣了一下，随即笑了"
              ]
            },
            {
              "speaker": "lin",
              "text": "「只是排查系统性风险。你的动作太毛躁，容易引发连带失误。」",
              "stage": [
                "动作：面无表情地把自己的文件袋拉好"
              ]
            },
            {
              "speaker": "narrator",
              "text": "如果在平时，我肯定要回嘴。但在这种空气都快凝固的早晨，看着她因为帮我整理准考证而微微低下的侧脸，我忽然觉得，连这种冷冰冰的“排查风险”，都让人觉得无比踏实。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「拿着。」",
              "stage": [
                "动作：手插进校服口袋，摸索了一下，然后快速地把一个东西塞进周行手心里"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「怎么？这也是生存物资？」",
              "stage": [
                "动作：低头一看，是一颗薄荷糖。包装纸有一点发皱。"
              ]
            },
            {
              "speaker": "lin",
              "text": "「进考场前如果觉得脑子发木，就含着。比深呼吸管用。」",
              "stage": [
                "动作：避开他的视线，看向大堂门外"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「……谢了。」",
              "stage": [
                "动作：把那颗糖紧紧攥在手心里，感受到糖块坚硬的棱角"
              ]
            },
            {
              "speaker": "narrator",
              "text": "那颗糖很小，但在我满是冷汗的手心里，却压出了极其清晰的重量。我忽然想起了昨晚在海风里，她那句安静的“我也想”。今天早晨，这句话并没有变成什么戏剧性的特殊待遇。我们依然要排队、点名、像普通考生一样被带队老师训话，依然不能把紧张说出口。但这种心照不宣的微小越界，比任何加油打气都更有力量。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "大巴车把我们拉到了考场所在的承办学校。开幕式在礼堂举行。",
              "stage": [
                "场景切换：承办学校礼堂 / 开幕式"
              ],
              "bg": "competitionOpeningCeremony",
              "clear": true
            },
            {
              "speaker": "wangshu",
              "text": "「你们的考场在三教。左手边有直达电梯，但人多会堵死。建议走东侧的安全通道楼梯，能省三分钟。」",
              "stage": [
                "立绘：背着黑色双肩包，幽灵般出现在两人身侧"
              ],
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
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你这是连今天的撤离路线都规划好了？」",
              "stage": [
                "动作：震惊地看着她"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「只是扫除一切可能浪费体力的变量。昨晚你们睡得怎么样？半夜隔壁房间有人在走廊上大声背岁差公式，三分钟后被巡楼老师强行押回去了。」",
              "stage": [
                "动作：推了一下眼镜，语气毫无波澜"
              ]
            },
            {
              "speaker": "lin",
              "text": "「听起来像赛前限定版的都市怪谈。」",
              "stage": [
                "动作：嘴角极其轻微地牵动了一下"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「怪谈一般不会把黄赤交角的数值背错。那个人背错了。」",
              "stage": [
                "动作：冷酷评价"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你们附中的人，连听壁角都要顺带判个卷子吗……」",
              "stage": [
                "动作：默默地离顾望舒远了半步"
              ]
            },
            {
              "speaker": "narrator",
              "text": "礼堂里，各省的参赛队伍按区域坐好。舞台背景板上印着巨大的星轨图和“CNAO 决赛”的字样。那图案很漂亮，但没有海风的潮湿，也没有泥土的味道，它只是一个冰冷的符号，宣告着审判即将开始。",
              "stage": [
                "场景氛围：冗长且压抑的开幕式"
              ]
            },
            {
              "speaker": "narrator",
              "text": "领导致辞、规则宣读、纪律强调。不能夹带、不能交头接耳、准考证号必须填涂清晰。每一句话我都在过去的模拟考里听过无数遍，但当它们从礼堂的巨型音响里砸下来时，我还是觉得心跳在不断加速。\n[组委会老师] 【动作：在主席台上敲了敲麦克风】「最后强调一下考试时间：上午，理论考试，两小时。下午，数据处理考试，两小时。中途禁止讨论题目。」",
              "stage": [
                "音效：麦克风的嗡鸣声，领导冗长的发言"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（两场。四个小时。）",
              "stage": [
                "动作：手指无意识地用力，捏紧了手里的日程表 / 脑内回响"
              ]
            },
            {
              "speaker": "narrator",
              "text": "在晚自习上，我能一口气刷三个小时的题。但在这种真空般的高压环境下，“两小时”这个词仿佛变成了某种实体，像两块巨大而沉重的水泥板，即将从上午和下午分别砸下来。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "lin",
              "text": "「别捏了。纸快断了。」",
              "stage": [
                "动作：微微侧头，看着周行手里那张快要被捏烂的日程表 / 声音很低"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我表现得这么明显吗？」",
              "stage": [
                "动作：猛地松开手，干笑了一声"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你把日程表对折了四次。这是你极度焦虑时的强迫症动作。」",
              "stage": [
                "动作：视线重新投向主席台"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「下午那场数据处理……变数太大了。」",
              "stage": [
                "动作：深吸一口气"
              ]
            },
            {
              "speaker": "lin",
              "text": "「上午只管上午。下午的事，等交了上午的卷子再管。」",
              "stage": [
                "动作：语气极其干脆"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「这种只顾眼前的逃避主义发言，可不像是你会说的。」",
              "stage": [
                "动作：有些意外地看着她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这就是我说的。只是你以前没听过而已。」",
              "stage": [
                "动作：余光扫了他一眼，眼底带着一丝安抚的意味"
              ]
            },
            {
              "speaker": "narrator",
              "text": "开幕式结束，所有人被像赶鸭子一样赶往教学楼。",
              "stage": [
                "场景：考场教学楼楼梯口"
              ],
              "bg": "competitionExamHallway",
              "clear": true
            },
            {
              "speaker": "xia",
              "text": "「好了，收心！现在开始，所有人闭嘴。不许回头聊天，不许在楼道里临时对公式。谁要是敢现在掏出资料，我就当场没收。滚进考场！」",
              "stage": [
                "动作：站在一楼大厅，像个无情的指挥官"
              ]
            },
            {
              "speaker": "narrator",
              "text": "人群像沉默的蚂蚁一样沿着楼梯向上涌。我和林澈并肩走在人群里，鞋底踏在水磨石台阶上的声音又密又杂。三楼和四楼的分岔口就在楼梯平台。",
              "stage": [
                "动作：并肩上楼"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她的考场在四楼，我的考场就在三楼走廊的尽头。我们之间忽然多出了一段极短的距离，只有几级台阶。但等开考铃声一响，这段距离就会被两套卷子、四个监考老师和倒计时的钟表无限拉长，变成两座无法跨越的孤岛。",
              "stage": [
                "视线特写：分离"
              ],
              "show": [
                {
                  "id": "lin",
                  "img": "linNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「小三角。水。」",
              "stage": [
                "动作：仅仅动了动嘴唇，用只有他们两人能听懂的密码，轻声吐出四个字"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「题意。早停。」",
              "stage": [
                "动作：仰头看着她，握紧了手里的文件袋，嘴角扬起一个笃定的弧度"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她极轻地点了一下头，马尾在半空中划过一道干净利落的弧线。然后她转身，头也不回地走上了通往四楼的楼梯。",
              "stage": [
                "动作：最后的对视"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我看着她的背影消失在楼梯拐角，手指在准考证边缘用力按了一下，随后转身，走向了我自己的战场。",
              "stage": [
                "心理活动"
              ]
            }
          ]
        },
        {
          "id": "ch6-s2",
          "title": "第一场：决赛考试",
          "lines": [
            {
              "speaker": "narrator",
              "text": "考场在三楼尽头的最后一间。窗户朝东，窗框似乎有点老化，外面的海风顺着缝隙往里钻。风里带着天津沿海特有的、那种混杂着盐分和一点微弱鱼腥味的潮气，黏糊糊地贴在手背上，无时无刻不在提醒我：这里不是学校的自习室。",
              "stage": [
                "场景氛围：肃杀、安静 / 视线特写：课桌右上角的座位号贴纸"
              ],
              "bg": "competitionExamRoom",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我坐下时，前排的男生正在强迫症般地调整文具。他把两支黑笔、一支铅笔、一把直尺在桌面的凹槽旁排成一条绝对的直线，随后又把直尺往左推了两毫米。仿佛只要把这几样东西对齐，就能提前消除掉等会儿计算里的系统误差。",
              "stage": [
                "动作：观察四周"
              ]
            },
            {
              "speaker": "narrator",
              "text": "两名监考老师走到讲台前。密封试卷袋的塑料封条被暴力撕开，发出一声极其清脆刺耳的“嘶啦”声。那一刻，整个考场里连呼吸声都停滞了。\n[监考老师] 【动作：看了一眼墙上的挂钟，声音冰冷】「九点整。开始答题。」",
              "stage": [
                "音效：撕裂声"
              ]
            },
            {
              "speaker": "narrator",
              "text": "上午，决赛理论考试，两小时。我先在答题卡上填涂姓名和准考证号。涂完最后一位数字，笔尖在纸上停了半秒。我能清晰地听到自己的心跳声，快得像有人在桌腔里疯狂按动一个失控的节拍器。",
              "stage": [
                "动作：填写信息"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（闭气。先扫全卷。别急着送死。）",
              "stage": [
                "动作：深吸了一口带着海腥味的空气 / 脑内指令"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第一道大题是时间系统与地方恒星时转换。题干只有三行，但条件极其密集：儒略日、地理经度、时区修正、天体赤经全挤在一起，像一堆随时准备引爆的连环雷。",
              "stage": [
                "视线特写：第一题"
              ],
              "bg": "cgCh6ExamPaperPov",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我习惯性地就想在草稿纸上直接列算式，笔尖刚碰到纸面，脑子里突然“嗡”了一下。",
              "stage": [
                "动作：本能反应"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（小三角写单位。防呆设计。很好，第一步还没丧失理智。）",
              "stage": [
                "动作：手腕强行拐了个弯，在题干旁边极其用力地画了一个小三角，在旁边写下：小时、度、东经 / 心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "九点十五分，我把第一题算到底。得出的数值不算是个漂亮的整数，但正好卡在合理的物理量级范围内。我没有立刻涂卡，而是把中间的几个关键换算节点用笔圈了出来。放在以前，我会觉得这纯属浪费时间；但现在我知道，这是在给等会儿脑子宕机的自己留一条退路。",
              "stage": [
                "动作：看表"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第二题是球面三角。要求判断某特定时刻，目标天体是否越过指定的高度角。卷面上的配图极其简单：一条地平圈，一个天顶，一个孤零零的目标点。",
              "stage": [
                "视线转移：第二题"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（……太简单了。简单得让人心里发毛。）",
              "stage": [
                "动作：皱眉，盯着那个过于干净的图"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我在草稿纸上飞快地重建天球模型。画到一半，林澈那种冷冰冰、毫无起伏的声音就像一段被植入大脑的子程序一样，突然自动开始播放：『图简单不等于条件少。别瞎默认。』",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（行，林澈同学。你人没在三楼，压迫感倒是准时送达了。）",
              "stage": [
                "动作：嘴角极轻微地抽动了一下"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我硬生生停下推导，回头逐字逐句地重新扫雷。果然，在题干的倒数第二行夹缝里，挖出了一个极其致命的条件——『未忽略大气折射』。如果不考虑折射，判断的临界边界会直接偏移半个度。",
              "stage": [
                "动作：重新审题"
              ]
            },
            {
              "speaker": "narrator",
              "text": "九点三十七分，前排那个强迫症男生翻页了。纸张摩擦的声音像一记鞭子抽在背上。我才发现自己第二题抠得太细，进度已经落后了。时间不会因为我的严谨而多给一秒。",
              "stage": [
                "音效：翻页声"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（加速。先拿能拿的分。）",
              "stage": [
                "动作：加快写字速度 / 战术切换"
              ]
            },
            {
              "speaker": "narrator",
              "text": "十点十五分。第四题，小天体轨道周期。题干给了一大串极其反人类的连续三晚观测数据，要求判断它的运动状态。",
              "stage": [
                "动作：流汗，卡壳"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第一遍读完，脑子一片空白。第二遍读完，依然找不到任何可以代入的已知公式。手心开始大量出汗，塑料笔杆滑得几乎捏不住。那种熟悉的心慌感像海潮一样涌上来，一点点淹没理智。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（操……这到底是什么鬼方向？）",
              "stage": [
                "动作：扔下笔，拧开水瓶灌了一口水"
              ]
            },
            {
              "speaker": "narrator",
              "text": "水已经不凉了，带着一股闷闷的塑料味。我强迫自己视线离开那堆乱码一样的数据，看向桌角。脑子里浮现出林澈昨晚抄在卡片上的那行小字：『不要把卡住当结论。』",
              "stage": [
                "动作：盯着水瓶"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（冷静。推不动就换路。它既然没给具体参数，就不可能是定量计算。）",
              "stage": [
                "动作：在裤子上狠狠蹭掉手心的冷汗，重新拿起笔"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我放弃了列方程，直接用直尺把三个晚上的赤经赤纬变化量连成了两条斜率线。入口终于被撕开了——它是要我用变化率的趋势，直接定性排除掉两个绝对错误的轨道模型。",
              "stage": [
                "动作：破局"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（差点被它唬住。）",
              "stage": [
                "动作：飞快地写下判断依据 / 咬牙"
              ]
            },
            {
              "speaker": "narrator",
              "text": "十点五十二分。距离交卷只剩最后八分钟。",
              "stage": [
                "动作：看挂钟"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第六题的最后一问还是一片空白，第四题最后的结论支撑还少两步推导。我的大脑因为高强度的运转，出现了一瞬间的供血不足，眼前微微发黑。",
              "stage": [
                "视线特写：未完成的卷面"
              ]
            },
            {
              "speaker": "narrator",
              "text": "如果放在一个月前，我绝对会试图两头兼顾，把两个题都胡乱写上几个半截公式，试图骗点过程分。但现在，夏南星那句“早点停损”就像刻在视网膜上一样清晰。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（一个无懈可击的完整结论，比两坨毫无逻辑的半截废话值钱。）",
              "stage": [
                "动作：果断放弃第六题，把笔尖重重压在第四题的答题区"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我集中最后所有的脑力，把第四题的逻辑链彻底封死。写完最后一个句号时，十一点整的电铃声刺耳地砸了下来。\n[监考老师] 【动作：站起身】「时间到。全体停笔。双手离开桌面。」",
              "stage": [
                "动作：疯狂书写"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我把笔扔下，这才发现右手食指和中指的关节已经彻底麻木了，僵硬得几乎无法弯曲。答题卡被监考老师无情地抽走，混进那一叠厚厚的纸堆里。两小时的厮杀结束得极其干脆，不给任何人补救或者后悔的余地。",
              "stage": [
                "动作：脱力"
              ]
            },
            {
              "speaker": "narrator",
              "text": "走出考场，走廊里瞬间炸开了锅。\n[路人甲] 【表情：崩溃】「第三题那个反照率你们算出来是负的吗？！我算出来是负的！」\n[路人乙] 【动作：抓头发】「第四题根本不是算半长轴的啊！我套了半个小时的公式，全废了！」",
              "stage": [
                "场景：走廊 / 场景氛围：劫后余生的嘈杂"
              ],
              "bg": "competitionExamHallway",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我低着头，加快脚步穿过人群，把那些声音强行隔离在耳朵外面。不是不想对答案，而是我非常清楚，我现在只要听到一个跟我不同的选项，我的心理防线就会在下午的数据处理考试前，彻底崩盘。",
              "stage": [
                "动作：加快脚步"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我走到三楼和四楼交界的楼梯平台。",
              "stage": [
                "场景：楼梯口"
              ]
            },
            {
              "speaker": "lin",
              "text": "她从四楼下来了。手里死死攥着那个塑料水瓶。她没有像其他人那样跟同学激烈地讨论，也没有马上凑过来问我考得怎么样。",
              "stage": [
                "立绘：靠在楼梯扶手边，脸色苍白"
              ],
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
              "text": "她只是无意识地、机械地把水瓶的盖子拧开，又用力拧紧。再拧开，再拧紧。塑料瓶盖发出极其微弱的“咔咔”声，暴露了她躯壳下还没完全褪去的极度紧绷。",
              "stage": [
                "视线特写：林澈的手"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「上午只管上午。」",
              "stage": [
                "动作：走过去，停在她面前，看着她泛白的指节 / 声音很稳"
              ]
            },
            {
              "speaker": "lin",
              "text": "「现在上午结束了。」",
              "stage": [
                "动作：松开水瓶盖，深吸了一口走廊里浑浊的空气"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「对。所以现在，我们可以管午饭了。」",
              "stage": [
                "动作：极轻地笑了一下"
              ]
            },
            {
              "speaker": "lin",
              "text": "「也对。」",
              "stage": [
                "动作：紧绷的肩膀终于微不可察地塌下来半寸"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她没有笑，但那只被反复蹂躏的水瓶盖终于得到了解脱。我们并肩顺着楼梯往下走，周围全是哀嚎和对答案的喧闹，但我们谁都没有问对方第一题到底选了什么。带着海腥味的冷风从楼梯间的气窗吹进来，吹干了脖子上的冷汗。上午的战役结束了。我们活下来了，这就是全部。",
              "stage": [
                "动作：并肩下楼"
              ]
            }
          ]
        },
        {
          "id": "ch6-s3",
          "title": "补给与静默",
          "lines": [
            {
              "speaker": "narrator",
              "text": "午饭被安排在承办学校的二楼食堂。长条餐桌上，每个人面前都摆着标准配置的餐盘：米饭、两荤一素、一碗寡淡的紫菜蛋花汤。整个区域安静得有些诡异，只有筷子偶尔碰在不锈钢餐盘上的声音。这种安静不是因为纪律好，而是因为所有人就像刚从深水里被捞上来一样，大脑缺氧，还没完全找回人类正常的发声方式。",
              "stage": [
                "场景氛围：脱力后的死寂"
              ],
              "bg": "coastalCityDay",
              "clear": true
            },
            {
              "speaker": "xia",
              "text": "「午饭纪律：不许对答案，不许在脑子里复盘，更不许用『我只是随便聊聊某道题的背景』这种烂借口来试探。下午的选拔赛综合考试，也是两小时。它比上午更吃状态，谁现在把心态搞崩了，下午就等着交白卷。」",
              "stage": [
                "动作：用筷子敲了敲餐盘边缘 / 语气：强制打断施法"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「学姐，那能讨论一下这只卤鸡腿吗？」",
              "stage": [
                "动作：毫无灵魂地扒了一口白饭"
              ]
            },
            {
              "speaker": "xia",
              "text": "「鸡腿允许讨论。因为鸡腿不会影响你们进省队的概率。」",
              "stage": [
                "动作：冷酷"
              ]
            },
            {
              "speaker": "lin",
              "text": "「汤有点咸。」",
              "stage": [
                "动作：低头喝了一小口汤，眉头极轻微地皱了一下"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「对，这是今天中午方圆五百米内，唯一绝对安全且客观的真理。」",
              "stage": [
                "动作：深以为然地点头"
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈拿着勺子的手还绷得很紧，她吃饭的速度比平时慢了不止一拍。我知道她并不是真的在品鉴那碗汤的咸淡。上午那张卷子虽然已经被收走了，但那些要命的题目就像阴魂不散的病毒代码，还在脑子里疯狂后台运行。我自己也一样，好几个被我强行跳过的填空题，越是压抑，越是像气泡一样咕嘟咕嘟往外冒，伴随着极其恶毒的幻听：『你刚才那一步肯定算错了』。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "xia",
              "text": "「你们两个，现在立刻、马上，给我咽下去三口饭。吃完了再发呆。」",
              "stage": [
                "动作：皱眉，看着两人几乎没怎么动的饭菜"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「社长，你现在连发呆都要排期了吗？」",
              "stage": [
                "动作：叹气"
              ]
            },
            {
              "speaker": "xia",
              "text": "「对。因为未经碳水补充的低血糖发呆，属于无效宕机。」",
              "stage": [
                "语气：不容反驳"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们极其幼稚地、像完成政治任务一样各自狠狠吃了三口饭。很可笑，但碳水咽下去的那一瞬间，一直发飘的胃终于落到了实处。身体仿佛接收到了一个指令，极其不情愿地承认：行吧，下午还得接着去送死。",
              "stage": [
                "动作：机械进食"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「下午的考试，不要把上午的任何负面情绪带进去。」",
              "stage": [
                "立绘：端着餐盘，极其自然地在斜对面的空位坐下"
              ],
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
              ]
            },
            {
              "speaker": "narrator",
              "text": "顾望舒没有问我们上午考得怎么样。在这个修罗场里，不问成绩，就是最高级别的慈悲。",
              "stage": [
                "动作：抬眼"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你这语气，听起来就像是已经把上午的错误全部完美处理掉了一样。」",
              "stage": [
                "动作：苦笑"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「并没有。我只是清楚，现在去处理已经无法改变的沉没成本，收益率为负。」",
              "stage": [
                "动作：极其理智地切开一块肉"
              ]
            },
            {
              "speaker": "lin",
              "text": "「下午的卷子，选拔性质会更强？」",
              "stage": [
                "动作：抬起头，眼神终于有了点焦距"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「通常是这样。题量可能没有上午大，但思维链会拉得很长，考察你的推导逻辑能不能在极端情况下撑住。遇到完全不会的题，也要把你能够判断的边界写出来。」",
              "stage": [
                "动作：点头"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「也就是说，下午连写废话都得写出极高的学术素养。」",
              "stage": [
                "动作：总结陈词"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「竞赛从来不是简单的非黑即白。在『完全不会』和『拿满分』之间，存在极其广阔的操作空间。这取决于你认输的姿态有多难看。」",
              "stage": [
                "动作：推了一下眼镜"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这句话比那些烂大街的“加油”要有用得多。它没有给我画什么“下午会很简单”的虚伪大饼，只是极其现实地提醒我：就算在考场上被题目逼入绝境，我依然有反抗的余地。",
              "stage": [
                "心理活动"
              ]
            }
          ]
        },
        {
          "id": "ch6-s4",
          "title": "选拔赛综合考试（接上文）",
          "lines": [
            {
              "speaker": "narrator",
              "text": "下午两点，选拔赛综合考试准时开考。",
              "stage": [
                "场景音效：挂钟滴答声 / 光影：午后惨白的阳光"
              ],
              "bg": "competitionExamRoom",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "同一个考场，同一个座位。上午落在桌面的光线已经移到了走廊的地砖上，窗边的空气被晒得发白、发虚。教室里比上午更安静，没有人再有多余的动作。每个人都清楚，真正难熬的不是第一场的新鲜感，而是当你刚刚从第一场的绞肉机里爬出来，还没喘匀气，就得把自己强行塞进第二场的磨盘里。",
              "stage": [
                "场景氛围：窒息感"
              ]
            },
            {
              "speaker": "narrator",
              "text": "卷子发下来，我第一件事是先看总页数。四页，只有三道大题。但当视线落在题干上时，我的心瞬间沉了下去。题干长得像说明书，每一段都塞满了信息密度极高的数据和限制条件。",
              "stage": [
                "动作：扫视试卷"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（题量少，绝对不代表分量轻。这是要把思维链拉到极限。）",
              "stage": [
                "动作：深吸一口气 / 心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第一题是关于变星的光变曲线与数据处理。巨大的数据表占据了半页纸，要求估计脉动周期。",
              "stage": [
                "视线特写：第一题数据表"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（这部分是基础，必须拿满。）",
              "stage": [
                "动作：在草稿纸上快速列出 Phase Folding 的核心公式"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我的视线停留在题目特意点出的一个异常观测点上：$HJD = 2459012.3610$，视星等骤降至 $12.95$，且测光误差达到了 $0.08$。",
              "stage": [
                "视线特写：异常点"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（如果在以前，我绝对会为了光变曲线的平滑漂亮，直接把这个离群的“脏数据”剔除掉。）",
              "stage": [
                "动作：笔尖在异常点上画了个圈，脑内警铃大作"
              ]
            },
            {
              "speaker": "narrator",
              "text": "但我的目光扫到了最后一列的“备注”和“视宁度”——那个时刻，视宁度恶化到了 3.5 角秒，且备注写着『局部薄云穿过』。",
              "stage": [
                "动作：视线右移"
              ]
            },
            {
              "speaker": "narrator",
              "text": "『删掉数据之前，先问问物理原因！』",
              "stage": [
                "脑内回响：林澈的声音"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「该异常极可能是由于薄云遮挡导致目标星通量衰减，同时视宁度恶化降低了信噪比，导致测光误差增大。因此，这并非天体本身的剧烈物理变化。」",
              "stage": [
                "动作：果断在答题卡上写下推论"
              ]
            },
            {
              "speaker": "narrator",
              "text": "在最后一问“是否剔除”时，我写下了在以前的我看来极其不讨喜、甚至不够绝对的答案：「保留该数据点，但在周期搜索（如 Lomb-Scargle）和拟合中显著降低其统计权重（Weighting）。不直接剔除是因为它记录了真实的观测环境限制，直接删除可能掩盖周期中偶然的真实短波光变事件。」",
              "stage": [
                "动作：写下处理方案"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（这个答案不够漂亮，但它诚实。）",
              "stage": [
                "动作：放下笔，吐出一口气"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第一题搞定。我的大脑已经开始发热。上午那种像绷紧的钢丝一样的紧张感消失了，取而代之的是一块湿布蒙在脸上的滞重感，反应速度正在不可逆地下降。但我非常清楚，我没有被第一题拖死，手里的笔终于和出题人的思路咬合上了。",
              "stage": [
                "时间流逝：两点三十三分"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第二题是小行星自转周期的观测方案设计。目标：验证 $\\Delta m \\approx 0.15 \\text{ mag}$ 的微小光变。限制条件：40cm 小口径望远镜，仅有三天观测窗口。",
              "stage": [
                "视线转移：第二题"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（只有三天。这不是抽象的数学游戏，这是要和真实的云、湿度、月光，还有破望远镜的跟踪极限去赌命。）",
              "stage": [
                "动作：盯着『三天』两个字出神"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我开始把方案拆解：本底场（Bias）、暗场（Dark）、平场（Flat）的拍摄要求，滤光片选择，一切按部就班。但在写到“比较星选择”时，我卡住了。",
              "stage": [
                "动作：搭建观测框架"
              ]
            },
            {
              "speaker": "narrator",
              "text": "因为小行星有自行（Proper motion），它在天球上是会移动的。如果要保证高精度的差分测光，我是应该每天换比较星，还是死磕同一颗？",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（“回到题意！你的目标是验证它的自转，你要的是整体光变趋势的稳定性，不是每一天极其精确的绝对星等！”）",
              "stage": [
                "动作：闭上眼睛，脑海里浮现出顾望舒那张冷酷的脸"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我立刻在答题纸上写下核心策略：「尽管目标存在自行，但在视场允许的范围内，必须尽可能保持同一颗比较星和检验星。若目标移出视场必须更换比较星，则必须在两晚之间安排充足的交叠观测时段（Overlap），以精确测定比较星之间的星等差，防止零点漂移（Zero-point shift）毁掉这仅有的 $0.15 \\text{ mag}$ 的微弱信号。」",
              "stage": [
                "动作：迅速落笔"
              ]
            },
            {
              "speaker": "narrator",
              "text": "在最后一问“第三晚天气完全失败的预案”中，我没有去描述那些华丽但不切实际的补救措施。",
              "stage": [
                "动作：应对极端风险"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「若第三晚完全失效，结论的有效性完全依赖于前两晚。前两晚必须高频采样，且总观测时长必须大于预估的自转周期，实现相位覆盖（Phase Coverage）的最大化。若无法覆盖完整周期，结论只能定性说明存在短波光变，必须在报告中明确指出该限制，不可强行推断自转周期。」",
              "stage": [
                "动作：写下极其现实的底线"
              ]
            },
            {
              "speaker": "narrator",
              "text": "写完这句话，我第一次在考场上感受到了一种极其微弱的踏实感。我没有被题目描绘的理想情况牵着鼻子走，我承认了现实的残酷，并在残缺中给出了底线。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "第三题。多波段巡天数据的交叉证认。题干只有半页，却是一道极其凶险的开放推理题。同一个坐标，90年代被当成造父变星，10年代被当成带尘埃的年轻恒星，最新数据又说是矮新星爆发。",
              "stage": [
                "看挂钟：三点零四分 / 视线转移：第三题"
              ]
            },
            {
              "speaker": "narrator",
              "text": "这不是一条单行道，这是一个布满迷雾的十字路口。我盯着题干看了足足五分钟，脑子里一片混乱，各种天体的光谱特征搅在一起。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（别空着！把地面先踩实！）",
              "stage": [
                "动作：握紧拳头，指甲掐进肉里"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我强迫自己一条条罗列原因，字迹因为手腕的酸痛而有些发飘：「1. 观测波段不同：不同天体在光学底片、红外星表和高频瞬变巡天中表现的能量峰值不同；2. 时间基线差异：几十年的时间跨度足以让一颗经历演化晚期物质抛射的恒星被误认为不同的天体；3. 仪器空间分辨率的演化导致背景星融合；4. 分类算法的标准更新。」",
              "stage": [
                "动作：拆解矛盾"
              ]
            },
            {
              "speaker": "narrator",
              "text": "写完这四条，那股未知的恐惧感终于消退了一点。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "三点三十八分。最后二十二分钟。手腕酸得快要断了，教室顶部的吊扇发出沉钝的“呼呼”声。",
              "stage": [
                "动作：甩手，看表"
              ]
            },
            {
              "speaker": "narrator",
              "text": "在第三题最后的“风险评估”中，上午那种想要胡乱堆砌公式的冲动再次涌了上来。有个声音在催我快点写，随便写点高级词汇。",
              "stage": [
                "动作：补齐最后一块拼图"
              ]
            },
            {
              "speaker": "zhou",
              "text": "（闭嘴。输赢放一边，只写能站住脚的。）",
              "stage": [
                "动作：死死压住笔尖"
              ]
            },
            {
              "speaker": "narrator",
              "text": "「1. 数据不足将导致光变周期出现严重的别名效应（Aliasing），引发误判；2. 比较星或检验星本身若是微变星，会引入系统误差；3. 分类标准不统一意味着该结论仅具有暂定意义，需等待高分辨率光谱确认。」",
              "stage": [
                "动作：写下最后三条风险"
              ]
            },
            {
              "speaker": "narrator",
              "text": "[监考老师] 「时间到，全体起立。」",
              "stage": [
                "音效：交卷电铃声响起"
              ]
            },
            {
              "speaker": "narrator",
              "text": "四点整。我的最后一个句号写得有点歪斜。这一次，在试卷被抽走的那一瞬间，我没有再想伸手去抓。不是因为我确信自己能拿高分，而是因为我的肌肉和大脑都非常清楚：这张卷子上最致命的那几个深坑，我没有试图绕开，我硬生生地踩了进去，然后用最笨拙的方式爬了出来。再多给我十分钟，我也写不出比这更诚实的答案了。",
              "stage": [
                "动作：放下笔，长出一口气"
              ]
            },
            {
              "speaker": "narrator",
              "text": "走廊里比上午更吵，甚至有人直接绝望地坐在了地上。\n[路人甲] 【表情：崩溃】「第三题那是个什么鬼东西？我连蒙带猜写了一篇四百字的小作文，完全不知道在瞎扯什么。」\n[路人乙] 【动作：靠着墙喘气】「第二题的小行星……我把比较星每天都换了一遍，是不是死定了？」",
              "stage": [
                "场景：走廊外 / 场景氛围：劫后余生的脱力感"
              ],
              "bg": "competitionExamHallway",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我把准考证塞进资料袋，自动屏蔽了这些喧嚣。",
              "stage": [
                "动作：靠在墙边，等待"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她下楼时，脚步有些虚浮。她看见我，在距离我两步远的地方停了一下。她的眼神短暂地失焦了一瞬，像是在确认自己是不是真的从那个四小时的地狱里活着出来了，又像是在脑子里把最后一道题的逻辑锁链进行最后一次封存。",
              "stage": [
                "视线特写：林澈的状态"
              ],
              "show": [
                {
                  "id": "lin",
                  "img": "linThinking",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「结束了。」",
              "stage": [
                "动作：站直身体，看着她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「嗯。结束了。」",
              "stage": [
                "动作：缓慢地眨了一下眼睛，紧绷的身体终于微不可察地放松下来，声音很轻"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她没有问我对错，我也没问她写了什么。这短短的几个字，就是我们给这场战役盖上的最终印章。她身上没有那种被考题彻底碾碎后的茫然，反而像是一个刚刚从一条极长、极黑的隧道里独自跋涉出来的人——虽然鞋底沾满了泥灰，精疲力竭，但她清清楚楚地知道，自己一直踩在那条绝对真实的路上。",
              "stage": [
                "心理活动"
              ]
            }
          ]
        },
        {
          "id": "ch6-s5",
          "title": "考后交流",
          "lines": [
            {
              "speaker": "narrator",
              "text": "晚风从操场另一侧吹过来，带着天津海边特有的、发咸的潮湿气味。考场大楼外的台阶上横七竖八地坐满了人。长达四个小时的极度专注后，大家终于拿回了说话的权利，却像丧失了语言组织能力一样，只剩下零星的粗口和叹气。",
              "stage": [
                "场景氛围：脱力、海风 / 视线特写：被捏变形的塑料瓶"
              ],
              "bg": "coastalCityDusk",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "我和林澈极其默契地没有去人堆里凑热闹。我们绕开正门，沿着楼外的小路，在两栋楼之间的一棵树下停了下来。",
              "stage": [
                "动作：避开人群"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「要不要先来一句考后标准制式废话？」",
              "stage": [
                "动作：靠在树干上，感觉两条腿像灌了铅"
              ]
            },
            {
              "speaker": "lin",
              "text": "「比如？」",
              "stage": [
                "动作：手里死死捏着那个干瘪的矿泉水瓶，透明塑料发出极其微弱的“咔咔”声"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「『别想了，考都考完了。』」",
              "stage": [
                "动作：仰头看着树缝里的天空"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这句废话在物理和心理层面上都不具备可执行性。」",
              "stage": [
                "动作：面无表情"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我也觉得。那换一句：『可以复盘，但严禁因为某一道题把自己当场判处死刑。』」",
              "stage": [
                "动作：偏过头看着她，笑了笑"
              ]
            },
            {
              "speaker": "lin",
              "text": "「这句的逻辑勉强成立。」",
              "stage": [
                "动作：手里的塑料瓶稍微松开了一点，发出轻微的膨胀声"
              ]
            },
            {
              "speaker": "narrator",
              "text": "路灯“啪”地一声亮了，把树影拉得很长。我们就像两个刚从泥坑里爬出来的步兵，开始小心翼翼地清点对方身上的伤口。",
              "stage": [
                "场景：非正式的战损核对"
              ]
            },
            {
              "speaker": "lin",
              "text": "「上午第四题，小天体轨道。你硬算到底了吗？」",
              "stage": [
                "动作：直视周行，单刀直入"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「没有。它根本就不是完整的参数题，条件不足。我按你说的，用变化趋势写了定性排除的理由，没给具体数值。」",
              "stage": [
                "动作：摇头，语气带着一丝后怕的庆幸"
              ]
            },
            {
              "speaker": "lin",
              "text": "「我也是。」",
              "stage": [
                "动作：很轻地吐出一口长气"
              ]
            },
            {
              "speaker": "narrator",
              "text": "听见这三个字，我胸口那块被压了整整一天的石头，终于碎开了一道缝。不是因为我确信这个答案绝对能拿满分，而是因为在那个最容易让人大脑死机的陷阱前，我们做出了完全一样的判断。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「下午第一题，那个由于『薄云』导致的测光异常点。你剔除了吗？」",
              "stage": [
                "动作：反问"
              ]
            },
            {
              "speaker": "lin",
              "text": "「没有剔除。保留，并在搜索周期时显著降低其统计权重（Weighting）。」",
              "stage": [
                "动作：眼神平静而笃定"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「一字不差。我也一样。」",
              "stage": [
                "动作：站直了身体，嘴角忍不住上扬"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……看来，我们至少没有在考前把彼此带进沟里。」",
              "stage": [
                "动作：看着周行，原本紧绷的眼角终于一点点软化下来"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「林老师，这算是你给出的考后最高级别的赞美吗？」",
              "stage": [
                "动作：打趣"
              ]
            },
            {
              "speaker": "lin",
              "text": "「不算赞美。只是陈述一个还不错的客观事实。」",
              "stage": [
                "动作：移开视线，看着远处发亮的路灯"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她能把一句安慰拆解成“客观事实”，这本身就硬核得很有林澈的风格。但在这个神经衰弱的傍晚，这句没有半点水分的陈述，比任何热血沸腾的肯定都要让人觉得踏实。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「下午第三题的开放式推理呢？」",
              "stage": [
                "动作：放轻声音"
              ]
            },
            {
              "speaker": "lin",
              "text": "「写到最后时间不够，字间距被我压缩到了极致。草稿打得很乱。」",
              "stage": [
                "动作：重新捏紧了水瓶，眉头微皱"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你居然也会把卷面写乱？」",
              "stage": [
                "动作：有些意外"
              ]
            },
            {
              "speaker": "lin",
              "text": "「分类标准我分了四层：观测波段、时间基线、算法迭代和物理本质。后续确认方法写了光谱分析和持续高频测光。但是最后的风险评估……我只来得及写了两条半。」",
              "stage": [
                "动作：语气里带着一丝不甘"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「两条半就够了。开放题考的是你面对未知信息的拆解结构，不是让你在考场上写出一篇无懈可击的SCI论文。你连『时间基线』和『算法迭代』这种非物理维度的干扰项都想到了，主干逻辑已经稳得不能再稳了。」",
              "stage": [
                "动作：毫不犹豫地打断她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「你怎么知道？」",
              "stage": [
                "动作：转头看着周行，似乎在判断他是不是在盲目安慰"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「选拔赛抗压训练的成果。因为你现在纠结的是『有没有写满』，而不是『这题到底在问什么』。只要入口找对了，剩下的只是字数问题。」",
              "stage": [
                "动作：指了指自己的脑袋"
              ]
            },
            {
              "speaker": "xia",
              "text": "「树底下的那两位！考后伤口互舔环节可以结束了。食堂的红烧肉还剩最后半盆，低血糖会导致你们把『温和复盘』演变成『悲壮昏厥』。立刻过来排队！」",
              "stage": [
                "立绘：站在不远处的台阶上，手里拿着一叠饭票，声音穿透力极强"
              ],
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
              "speaker": "wangshu",
              "text": "「你们下午第三题，风险评估写了几条？」",
              "stage": [
                "动作：跟在夏南星身后，依然是那副没有任何多余表情的扑克脸"
              ],
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
              ]
            },
            {
              "speaker": "lin",
              "text": "「……两条半。时间不够。」",
              "stage": [
                "动作：身体微微一僵"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「那题的极限就是写到第二条的系统误差。再往下写纯属浪费墨水。能把分类标准按观测维度拆开，这题的分数就不会低。」",
              "stage": [
                "动作：推了一下眼镜，语气冷酷而干脆"
              ]
            },
            {
              "speaker": "narrator",
              "text": "顾望舒的语气还是一如既往的像一台没有感情的阅卷机器。但就是这台机器冷冰冰的判定，让林澈的肩膀在这一刻，肉眼可见地彻底松弛了下来。",
              "stage": [
                "动作：微表情特写"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「别告诉我，你这种变态级别的满分选手，最后一问也没写完整。」",
              "stage": [
                "动作：挑眉看着顾望舒"
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「强者如果在考场上发现自己写不完，至少会清楚地知道该果断砍掉哪一部分。走吧，吃饭。」",
              "stage": [
                "动作：转身走向食堂"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「听见没？官方认证的合理断尾。」",
              "stage": [
                "动作：转头对林澈笑"
              ]
            },
            {
              "speaker": "narrator",
              "text": "我们并肩朝着食堂走去。承办学校里的路灯一盏接一盏地亮起，海风把白天的燥热吹得干干净净。上午和下午的两张卷子虽然还在脑子里盘旋，但它们已经不再像刚出考场时那样，像一团长满倒刺的铁丝网在脑浆里乱搅了。",
              "stage": [
                "场景氛围：夜幕降临，尘埃落定"
              ],
              "bg": "coastalCityDusk",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "林澈走在我身边，那只被她蹂躏了一下午的空水瓶终于被扔进了路边的垃圾桶。她的步伐比平时慢了一点，大概是紧绷了四小时的肌肉正在抗议。",
              "stage": [
                "动作：并肩的步伐"
              ],
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
              "text": "「怎么了？」",
              "stage": [
                "动作：跟着停下，回头看她"
              ]
            },
            {
              "speaker": "lin",
              "text": "「今天上午第一题，儒略日和地方恒星时的起算点……时区没有看错吧？」",
              "stage": [
                "动作：声音很轻，却咬字极度清晰"
              ]
            },
            {
              "speaker": "narrator",
              "text": "在这个已经彻底脱离了考试环境的食堂门口，她突如其来的盘问，并不是出于对成绩的焦虑。",
              "stage": [
                "动作：心跳漏了一拍"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「没有看错。」",
              "stage": [
                "动作：看着她的眼睛，嘴角慢慢上扬，极其认真、一字一顿地回答"
              ]
            },
            {
              "speaker": "zhou",
              "text": "「我在题干的数字旁边，画了一个小三角。把单位统统写在了里面。」",
              "stage": [
                "动作：抬起手，在半空中极其具象地比划了一个小小的三角形"
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈定定地看着我比划出那个三角形的手指。过了足足三秒钟，她极其轻微地呼出了一口气。她没有说“你做得很好”，也没有说那些俗套的庆祝。",
              "stage": [
                "动作：微表情特写"
              ]
            },
            {
              "speaker": "lin",
              "text": "「……那就好。」",
              "stage": [
                "动作：清冷的眼底泛起了一层极其柔软的笑意。她轻轻地点了一下头。"
              ]
            },
            {
              "speaker": "narrator",
              "text": "她转过身，继续向着有光和食物的食堂大门走去。我站在原地看着她的背影，海风从身后推着我往前。",
              "stage": [
                "心理活动"
              ]
            },
            {
              "speaker": "narrator",
              "text": "考试已经结束，最终的裁决还没有到来。但我忽然无比清晰地意识到，在那漫长、窒息、仿佛要将人逼疯的四个小时里，我们谁都不是孤军奋战。\n我们把那些在闷热教室里的争执、被红笔重重划掉的错误、那十二张字迹潦草的卡片，以及昨晚海边风里那句极其轻微的“我也想”……全都悄悄地，化作了一个个只有彼此能看懂的小三角和问号，死死地钉在了那张决定命运的答题纸上。\n不管最后的成绩如何，在这场向着宇宙深处进发的残酷考核里，她曾经在我的草稿纸上，留下了永不磨灭的坐标。",
              "stage": [
                "内心升华"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch7",
      "title": "第七章：国家队集训",
      "sections": [
        {
          "id": "ch7-s1",
          "title": "通知没有写完",
          "lines": [
            {
              "bg": "schoolHallAwardBoard",
              "clear": true,
              "speaker": "narrator",
              "text": "第六章之后的第三天，获奖名单还贴在学校公告栏里。红纸边角被风吹得有点卷，经过的人都要抬头看一眼，然后用余光确认我是不是站在旁边。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "narrator",
              "text": "我原本以为决赛结束以后，生活会立刻退回高三原来的格子里：早读、月考、错题本、晚自习，还有班主任每天早上写在黑板右侧的倒计时。"
            },
            {
              "speaker": "narrator",
              "text": "可班主任把我叫到办公室的时候，桌上放着两份新打印的通知。标题很长，字也很正式：国家队候选集训营报到须知。"
            },
            {
              "speaker": "homeroom",
              "text": "「周行，先别急着高兴。你和林澈都在候选名单里，但这不是旅游，也不是领奖后的表彰会。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，我现在比较急着确认一件事。」"
            },
            {
              "speaker": "homeroom",
              "text": "「什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「这上面写的七天封闭集训，是不是意味着我可以合法逃掉一周数学周测？」"
            },
            {
              "speaker": "homeroom",
              "text": "「你觉得呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「我觉得通知写得不够人性化。」"
            },
            {
              "speaker": "homeroom",
              "text": "「通知后面还有一页。回来以后补测。」"
            },
            {
              "speaker": "narrator",
              "text": "我把那点刚冒头的轻松按了回去。补测两个字，比国家队三个字更快地把人拽回现实。"
            },
            {
              "speaker": "narrator",
              "text": "办公室门被敲了两下，林澈抱着一摞作业本进来。她先把作业本放到班主任桌角，才低头看见我手里的通知。"
            },
            {
              "speaker": "lin",
              "text": "「你也收到了？」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「嗯。老师刚告诉我，国家队候选营附赠数学周测延期服务。」"
            },
            {
              "speaker": "lin",
              "text": "「你关注点一直很稳定。」"
            },
            {
              "speaker": "homeroom",
              "text": "「林澈，你的也在这里。家长签字、身份证复印件、健康承诺书、竞赛服尺码表，今天放学前交给我。」"
            },
            {
              "speaker": "lin",
              "text": "「好。」"
            },
            {
              "speaker": "zhou",
              "text": "「为什么她听起来像已经把东西分好夹子了？」"
            },
            {
              "speaker": "lin",
              "text": "「因为正常人收到通知以后会先看附件。」"
            },
            {
              "speaker": "zhou",
              "text": "「我看了标题。」"
            },
            {
              "speaker": "lin",
              "text": "「标题不能带你进营。」"
            },
            {
              "speaker": "narrator",
              "text": "她把我的通知抽过去，手指沿着附件清单往下划，像在检查一张考前答题卡。"
            },
            {
              "speaker": "lin",
              "text": "「身份证复印件两份，学生证一份，近照一张。你证件照还有吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「有，高一拍的。」"
            },
            {
              "speaker": "lin",
              "text": "「那个你头发像被风洞吹过。」"
            },
            {
              "speaker": "zhou",
              "text": "「那叫青春有扰动。」"
            },
            {
              "speaker": "lin",
              "text": "「那叫无法识别。」"
            },
            {
              "speaker": "homeroom",
              "text": "「你们两个先别在办公室相声。周行，放学前去校门口照相馆重拍。林澈，你帮他盯一下材料，省得他拿着报名表去买奶茶。」"
            },
            {
              "speaker": "lin",
              "text": "「老师，我可以盯材料，但不保证盯住他买奶茶。」"
            },
            {
              "speaker": "zhou",
              "text": "「我听见了。」"
            },
            {
              "speaker": "homeroom",
              "text": "「听见就好。还有，候选营会再选最终国家队名单。你们决赛考得好，只说明有资格站上这条线，不代表已经过线。」"
            },
            {
              "speaker": "narrator",
              "text": "这句话让办公室安静了一下。窗外操场有人在喊集合，声音隔着玻璃变得很远。"
            },
            {
              "speaker": "lin",
              "text": "「最终名单大概几个人？」"
            },
            {
              "speaker": "homeroom",
              "text": "「通知里没写死，往年是几名正式队员加随队观察。看今年题目方向和教练组安排。」"
            },
            {
              "speaker": "zhou",
              "text": "「所以接下来不是庆功，是加试。」"
            },
            {
              "speaker": "homeroom",
              "text": "「差不多。你们自己心里有数。」"
            },
            {
              "speaker": "narrator",
              "text": "走出办公室时，林澈把两份通知叠齐，边角压得整整齐齐。她没有说“别紧张”，只是把我的那份递回来。"
            },
            {
              "speaker": "lin",
              "text": "「先去拍照。拍完把材料交了。今天晚自习前，我们把集训营要用的东西列出来。」"
            },
            {
              "speaker": "zhou",
              "text": "「我以为你至少会说一句恭喜。」"
            },
            {
              "speaker": "lin",
              "text": "「恭喜。现在去拍照。」"
            },
            {
              "speaker": "zhou",
              "text": "「这个恭喜听起来像出发令。」"
            },
            {
              "speaker": "lin",
              "text": "「因为你再晚十分钟，照相馆老板就去吃饭了。」"
            },
            {
              "bg": "cgCh7NoticeAfterClass",
              "clear": true,
              "speaker": "narrator",
              "text": "公告栏前人来人往，红纸上“候选集训营”几个字被午后的光照得有些刺眼。林澈站在旁边，手里拿着两份材料清单，表情比我冷静得多。"
            },
            {
              "speaker": "narrator",
              "text": "我忽然意识到，决赛结束的那声铃并没有把事情画上句号。它只是把下一张卷子递到了我们面前。"
            },
            {
              "bg": "homeEvening",
              "clear": true,
              "speaker": "narrator",
              "text": "那天晚上回家，餐桌上多了一盘炒青菜。我妈把通知从头看到尾，又从尾看到头，最后问的第一句话不是成绩，也不是国家队。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "mother",
              "text": "「封闭集训，晚上能睡好吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「应该能。宿舍四人间，学校统一安排。」"
            },
            {
              "speaker": "mother",
              "text": "「饭呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「食堂。」"
            },
            {
              "speaker": "father",
              "text": "「老师带队？」"
            },
            {
              "speaker": "zhou",
              "text": "「许老师送我们过去，营里有管理老师。」"
            },
            {
              "speaker": "narrator",
              "text": "我把这些回答说得很熟，像在复述通知。可说到最后，还是忍不住补了一句。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈也去。」"
            },
            {
              "speaker": "mother",
              "text": "「就是经常和你一起复习的那个女孩子？」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。」"
            },
            {
              "speaker": "mother",
              "text": "「那挺好。你别总麻烦人家。」"
            },
            {
              "speaker": "zhou",
              "text": "「我也有帮她。」"
            },
            {
              "speaker": "father",
              "text": "「帮什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「比如……递水，搬资料，调节气氛。」"
            },
            {
              "speaker": "mother",
              "text": "「听起来前两个比较有用。」"
            },
            {
              "speaker": "narrator",
              "text": "我爸低头签家长同意书，笔尖在纸上停了停。"
            },
            {
              "speaker": "father",
              "text": "「想去就认真去。不是每个人都有机会跟更厉害的人一起学，别光想着结果。」"
            },
            {
              "speaker": "zhou",
              "text": "「知道。」"
            },
            {
              "speaker": "mother",
              "text": "「衣服别乱塞。还有胃药带上。」"
            },
            {
              "speaker": "narrator",
              "text": "她起身去客厅柜子里找药。我看着桌上的通知，忽然觉得这件事不只是我和林澈的下一场考试。它也把家里人的担心、老师的期待，一起装进了那个文件袋里。"
            },
            {
              "speaker": "narrator",
              "text": "手机震了一下，林澈发来一张她的材料清单。最后一行写着：别忘了胃药。"
            },
            {
              "speaker": "zhou",
              "text": "「我妈刚也说了。」"
            },
            {
              "speaker": "lin",
              "text": "「说明这条很重要。」"
            },
            {
              "speaker": "zhou",
              "text": "「你们是不是背着我建了监督群？」"
            },
            {
              "speaker": "lin",
              "text": "「没有。正常人都会想到。」"
            },
            {
              "speaker": "narrator",
              "text": "我把胃药放进书包侧袋，在清单上打了个勾。那一笔落下去时，集训营好像离我更近了一点。"
            }
          ]
        },
        {
          "id": "ch7-s2",
          "title": "候选营报到",
          "lines": [
            {
              "bg": "trainStationSummer",
              "clear": true,
              "speaker": "narrator",
              "text": "报到那天早上，火车站的空调开得很足，玻璃门一开一合，把外面的热气切成一段一段。我们学校一共两个人去，许老师送到检票口就停下。",
              "bgm": "prelimReady"
            },
            {
              "speaker": "teacher",
              "text": "「到了之后先找报到处，别自己乱跑。集训营里高手多，不要急着给自己定位置，也不要被别人吓住。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，这两句互相有点打架。」"
            },
            {
              "speaker": "teacher",
              "text": "「所以才叫心态。」"
            },
            {
              "speaker": "lin",
              "text": "「许老师，我们到了会在群里报平安。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "teacher",
              "text": "「好。林澈，周行的材料你再帮他看一遍。」"
            },
            {
              "speaker": "zhou",
              "text": "「我现在在大家心里到底是什么形象？」"
            },
            {
              "speaker": "lin",
              "text": "「有潜力，但是口袋里可能少一张复印件。」"
            },
            {
              "speaker": "zhou",
              "text": "「很精准，也很伤人。」"
            },
            {
              "speaker": "narrator",
              "text": "她没有笑得很明显，只把我的文件袋拉开，确认身份证、学生证、照片、签字表都在。最后还从侧袋里摸出一支黑色签字笔。"
            },
            {
              "speaker": "lin",
              "text": "「这支你拿着。报到处经常要补签字。」"
            },
            {
              "speaker": "zhou",
              "text": "「你像那种在任何灾难片里都能从书包里掏出手电和压缩饼干的人。」"
            },
            {
              "speaker": "lin",
              "text": "「压缩饼干没有。薄荷糖有。」"
            },
            {
              "speaker": "narrator",
              "text": "她把一颗糖放到我掌心，包装纸被她捏出很小的折痕。我没立刻吃，塞进了校服外套口袋。"
            },
            {
              "speaker": "narrator",
              "text": "集训地点在一所大学的天文楼。车开进校门时，我看见路边挂着横幅，白底蓝字，写着“全国天文奥赛国家队候选集训营”。"
            },
            {
              "bg": "campCheckinDesk",
              "clear": true,
              "speaker": "narrator",
              "text": "报到处设在一楼大厅，长桌后面坐着几个工作人员。桌上堆着胸牌、住宿表、课程表和一摞写着“请用正楷填写”的登记表。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "managerTeacher",
              "text": "「姓名。」"
            },
            {
              "speaker": "zhou",
              "text": "「周行。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「学校。」"
            },
            {
              "speaker": "zhou",
              "text": "「星州一中。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「把身份证和承诺书给我。旁边领胸牌，住宿表自己看，男生三号楼 412。」"
            },
            {
              "speaker": "narrator",
              "text": "我接过胸牌，才发现旁边已经有人在看我。顾望舒穿着简单的白衬衫，背包只背了一边，胸牌挂得端端正正。"
            },
            {
              "speaker": "wangshu",
              "text": "「周行。林澈。」",
              "clear": true,
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "center"
                }
              ],
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「顾望舒，你也到了。」"
            },
            {
              "speaker": "wangshu",
              "text": "「上午就到了。大厅右侧贴了分组表，你们在 B 组。」"
            },
            {
              "speaker": "lin",
              "text": "「你呢？」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
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
              "text": "「A 组。」"
            },
            {
              "speaker": "zhou",
              "text": "「听起来像游戏开局就分了难度。」"
            },
            {
              "speaker": "wangshu",
              "text": "「不是难度，是教练安排。B 组下午有数据处理摸底，记得带电脑。」"
            },
            {
              "speaker": "lin",
              "text": "「谢谢。」"
            },
            {
              "speaker": "wangshu",
              "text": "「不用。最后会混合排名，信息差没意义。」"
            },
            {
              "speaker": "narrator",
              "text": "他说完就转身去楼梯口，像只是完成了一个必要提醒。林澈看着他的背影，又低头看分组表。"
            },
            {
              "speaker": "lin",
              "text": "「B 组还有唐越。」"
            },
            {
              "speaker": "zhou",
              "text": "「谁？」"
            },
            {
              "speaker": "lin",
              "text": "「决赛闭幕式坐我们前两排那个，问老师能不能现场改评分细则的人。」"
            },
            {
              "speaker": "zhou",
              "text": "「我想起来了。很勇。」"
            },
            {
              "speaker": "lin",
              "text": "「很麻烦。」"
            },
            {
              "bg": "universityDormitory",
              "clear": true,
              "speaker": "narrator",
              "text": "宿舍楼走廊里有洗衣液和新拖鞋的味道。四人间，两张上铺已经放了包，我把行李箱推到床边，先把胸牌挂在椅背上。"
            },
            {
              "speaker": "narrator",
              "text": "手机震了一下。林澈发来一张照片，是女生楼下的课程表。她用红框圈出了下午两点的数据处理摸底。"
            },
            {
              "speaker": "lin",
              "text": "「你电脑充电器带了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「带了。」"
            },
            {
              "speaker": "lin",
              "text": "「确认。」"
            },
            {
              "speaker": "zhou",
              "text": "「我把照片发给你？」"
            },
            {
              "speaker": "lin",
              "text": "「不用。你能秒回，说明手机还在手上。充电器大概率也在。」"
            },
            {
              "speaker": "narrator",
              "text": "我低头看着那行字，忍不住笑了一下。宿舍窗外的蝉声很满，集训营刚开始，我却已经有一种被她从混乱里拎出来的熟悉感。"
            },
            {
              "bg": "cgCh7CampCheckinLuggage",
              "clear": true,
              "speaker": "narrator",
              "text": "报到大厅里，林澈一手扶着行李箱，一手核对胸牌和住宿表。桌上的纸页、印章和黑色签字笔把“集训”两个字变得很具体。"
            },
            {
              "speaker": "narrator",
              "text": "下午一点五十，我们在天文楼门口集合。她递给我一瓶常温水。"
            },
            {
              "speaker": "lin",
              "text": "「别喝冰的。第一场摸底，胃比脑子先抗议就很丢人。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这关心方式越来越像竞赛规则。」"
            },
            {
              "speaker": "lin",
              "text": "「听得懂就行。」"
            }
          ]
        },
        {
          "id": "ch7-s3",
          "title": "强者环境",
          "lines": [
            {
              "bg": "trainingCampLectureHall",
              "clear": true,
              "speaker": "narrator",
              "text": "阶梯教室里坐满了人。每个人面前都有笔记本电脑、草稿纸和水杯，屏幕上不是星表就是代码窗口，空气里有一种很安静的紧绷。",
              "bgm": "rivalry"
            },
            {
              "bg": "cgCh7LectureHallFirstRow",
              "clear": true,
              "speaker": "narrator",
              "text": "第一排的投影光落在林澈脸上，她低头写日期和标题，笔尖停得很稳。我坐在她旁边，第一次清楚地感觉到自己真的进了强者堆里。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「欢迎各位来到候选集训营。接下来七天，你们会经历理论、实测、数据处理和英文题面四个模块。这里没有保送名额，也没有照顾情绪的排名。」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「你们已经很优秀，但优秀在这里不是结论，只是入场券。」"
            },
            {
              "speaker": "zhou",
              "text": "「这老师开场白比闭幕式刺激多了。」"
            },
            {
              "speaker": "lin",
              "text": "「闭嘴，记流程。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「记了。优秀不是结论，是入场券。」"
            },
            {
              "speaker": "lin",
              "text": "「不是记金句，是记考试安排。」"
            },
            {
              "speaker": "narrator",
              "text": "她把课程表往我这边推了一点，上面已经标出四种颜色：理论蓝色，观测黄色，数据绿色，复盘红色。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「第一天下午摸底，不计入最终成绩，但会决定你们后面三天的训练组。题目不多，重点看处理流程。」"
            },
            {
              "speaker": "narrator",
              "text": "教室后排有人小声叹气，也有人把键盘敲得更快。唐越从斜前方回头，冲我们挥了挥手。"
            },
            {
              "speaker": "tang",
              "text": "「星州一中的？你们决赛选拔赛是不是都提前交卷了？」",
              "clear": true,
              "show": [
                {
                  "id": "tang",
                  "img": "tangNeutral",
                  "pos": "center"
                }
              ],
              "focus": "tang"
            },
            {
              "speaker": "zhou",
              "text": "「没有。我们只是提前放弃了最后五分钟的精神内耗。」"
            },
            {
              "speaker": "tang",
              "text": "「可以啊。我叫唐越，B 组。听说你们一个理论稳，一个观测狠。」"
            },
            {
              "speaker": "lin",
              "text": "「传闻一般会把人说得更厉害。」"
            },
            {
              "speaker": "tang",
              "text": "「没事，下午就知道。」"
            },
            {
              "speaker": "narrator",
              "text": "唐越说话很快，像每个字都赶着去下一道题。他转回去之后，林澈把笔帽扣上，轻轻敲了一下我的草稿纸。"
            },
            {
              "speaker": "lin",
              "text": "「别被他的节奏带走。摸底看流程，不看嘴快。」"
            },
            {
              "speaker": "zhou",
              "text": "「你刚才是不是担心我被挑衅？」"
            },
            {
              "speaker": "lin",
              "text": "「我担心你顺口接梗，接着接出一场无意义辩论。」"
            },
            {
              "speaker": "zhou",
              "text": "「很合理。」"
            },
            {
              "bg": "dataLabNight",
              "clear": true,
              "speaker": "narrator",
              "text": "摸底题发下来时，我才明白老师说“题目不多”是什么意思。三页纸，两个数据表，一个异常点判断，外加一段英文说明。",
              "bgm": "focusDerivation"
            },
            {
              "speaker": "narrator",
              "text": "我的电脑风扇很快转起来。屏幕上的数字排得密密麻麻，第一眼看过去像一堵墙。林澈坐在我斜前方，先没有动鼠标，而是把题面里所有单位用铅笔圈了出来。"
            },
            {
              "speaker": "narrator",
              "text": "我照着她的习惯，先拆变量，再标单位，最后才打开表格。以前她总嫌我“看见数据就想冲”，这一次我忍住了。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「还剩四十分钟。」"
            },
            {
              "speaker": "narrator",
              "text": "异常点出现在第三列。删掉以后拟合好看得多，但题面里有一句话提醒观测条件在第二组数据发生过变化。"
            },
            {
              "speaker": "zhou",
              "text": "「不能直接删。」"
            },
            {
              "speaker": "narrator",
              "text": "我很小声地说出来，像是在提醒自己。林澈没有回头，只把橡皮往桌边推了一点，正好停在我够得到的位置。"
            },
            {
              "speaker": "narrator",
              "text": "那一刻我莫名安定下来。她没有替我做题，只是用一个很小的动作告诉我：按流程走。"
            },
            {
              "speaker": "tang",
              "text": "「靠，异常点还要分组权重？」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「考试中禁止交流。」"
            },
            {
              "speaker": "narrator",
              "text": "唐越立刻闭嘴，教室里只剩键盘声和纸张翻动声。"
            },
            {
              "speaker": "narrator",
              "text": "最后十分钟，我把结果写进答题框，又在旁边补了一句“保留异常点并降低权重”。这不是最漂亮的答案，但至少不是为了图好看乱删数据。"
            },
            {
              "bg": "campCafeteria",
              "clear": true,
              "speaker": "narrator",
              "text": "晚饭在学校食堂。长桌、托盘、不太热的汤，还有一群刚从摸底里出来的人。大家嘴上说不聊题，坐下不到两分钟就开始对答案。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "tang",
              "text": "「我异常点删了。」"
            },
            {
              "speaker": "zhou",
              "text": "「这么果断？」"
            },
            {
              "speaker": "tang",
              "text": "「删完图像好看。」"
            },
            {
              "speaker": "lin",
              "text": "「好看不是评分标准。」"
            },
            {
              "speaker": "tang",
              "text": "「你保留了？」"
            },
            {
              "speaker": "lin",
              "text": "「保留，降权，说明原因。」"
            },
            {
              "speaker": "tang",
              "text": "「那周行呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「我跟她一样。只是说明原因写得比较像事故报告。」"
            },
            {
              "speaker": "lin",
              "text": "「至少不是事故本身。」"
            },
            {
              "speaker": "narrator",
              "text": "唐越愣了一下，随即笑出声。他端起汤碗，像终于认可我们可以坐在同一张桌上聊题。"
            },
            {
              "speaker": "tang",
              "text": "「行，B 组今晚复盘带我一个。我不想再因为图像好看犯蠢。」"
            },
            {
              "speaker": "lin",
              "text": "「可以。八点半，自习室。先吃饭。」"
            },
            {
              "speaker": "zhou",
              "text": "「林组长上线了。」"
            },
            {
              "speaker": "lin",
              "text": "「你负责把你那份事故报告翻译成人话。」"
            },
            {
              "speaker": "zhou",
              "text": "「收到。」"
            },
            {
              "bg": "dormCorridorNight",
              "clear": true,
              "speaker": "narrator",
              "text": "晚自习后，宿舍走廊的灯只亮了一半。各个房间门缝里透出屏幕光，有人在背英文术语，有人在小声争论一道题的边界条件。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "narrator",
              "text": "我抱着电脑站在门口，发现林澈正靠在走廊窗边看打印题。窗外是校园路灯，玻璃里映出她微微皱起的眉。"
            },
            {
              "speaker": "zhou",
              "text": "「还不睡？」"
            },
            {
              "speaker": "lin",
              "text": "「唐越把异常点那题的复盘发过来了，我看一下。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你不是说不要把白天的卷子带进晚上？」"
            },
            {
              "speaker": "lin",
              "text": "「所以我只看十分钟。」"
            },
            {
              "speaker": "zhou",
              "text": "「这句话听着很危险。」"
            },
            {
              "speaker": "lin",
              "text": "「你可以十分钟后提醒我。」"
            },
            {
              "speaker": "narrator",
              "text": "我在她旁边站了一会儿。她把唐越的表格放大，指给我看第二组数据的备注。"
            },
            {
              "speaker": "lin",
              "text": "「他现在的问题不是不会算，是喜欢先想一个漂亮结论，再找数据配合。」"
            },
            {
              "speaker": "zhou",
              "text": "「听起来很耳熟。」"
            },
            {
              "speaker": "lin",
              "text": "「你以前也这样。」"
            },
            {
              "speaker": "zhou",
              "text": "「谢谢你用以前。」"
            },
            {
              "speaker": "lin",
              "text": "「现在偶尔。」"
            },
            {
              "speaker": "zhou",
              "text": "「这个补充可以不要。」"
            },
            {
              "speaker": "narrator",
              "text": "她终于笑了一下，把电脑合上。十分钟还没到，但她已经起身。"
            },
            {
              "speaker": "lin",
              "text": "「走吧。明天七点半集合。」"
            },
            {
              "speaker": "zhou",
              "text": "「你不是还要看？」"
            },
            {
              "speaker": "lin",
              "text": "「你站在这里，我会想继续讲。讲下去就睡晚了。」"
            },
            {
              "speaker": "narrator",
              "text": "这句话说得很平常，像只是解释一个时间管理问题。我却愣了一秒，才把电脑抱紧。"
            },
            {
              "speaker": "zhou",
              "text": "「那我是不是影响了国家队备战？」"
            },
            {
              "speaker": "lin",
              "text": "「目前影响可控。」"
            },
            {
              "speaker": "zhou",
              "text": "「谢谢林同学给我降权处理。」"
            },
            {
              "speaker": "lin",
              "text": "「快回去。」"
            }
          ]
        },
        {
          "id": "ch7-s4",
          "title": "三张表",
          "lines": [
            {
              "bg": "observatoryControlRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "第二天晚上安排观测训练。天文台控制室不大，墙上贴着设备流程，桌上放着红光手电、记录夹和三张空表：目标表、天气表、误差表。",
              "bgm": "observatoryNight"
            },
            {
              "speaker": "managerTeacher",
              "text": "「今晚每组三个目标，云量变化较快。你们要自己判断先观测哪个，放弃哪个，记录理由。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「注意，国家队比赛不是单纯比谁会算。你们要在限制里做决定。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈把三张表分开压好，目标表放中间，天气表给唐越，误差表推到我面前。"
            },
            {
              "speaker": "lin",
              "text": "「周行，你盯误差和时间。唐越盯云。目标优先级我先排一版，十分钟后一起改。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "tang",
              "text": "「你这分工很像已经当过队长。」"
            },
            {
              "speaker": "lin",
              "text": "「只是怕你们两个同时抢笔。」"
            },
            {
              "speaker": "zhou",
              "text": "「我没有抢笔的历史。」"
            },
            {
              "speaker": "lin",
              "text": "「你抢过草稿纸。」"
            },
            {
              "speaker": "zhou",
              "text": "「那是资源调度。」"
            },
            {
              "speaker": "tang",
              "text": "「我开始喜欢这个组了。」"
            },
            {
              "bg": "telescopeFieldDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "天台风比楼下大。暮色压在设备边缘，老师只给了红光手电，所有人的声音都低了下来。远处城市灯光亮起，云从西边慢慢挪过来。"
            },
            {
              "speaker": "narrator",
              "text": "林澈蹲在三脚架旁边调水平，短发被风吹到脸侧。她没有急着开口，确认读数后才把记录夹递给我。"
            },
            {
              "speaker": "lin",
              "text": "「第一个目标先做亮星校准，别贪难的。」"
            },
            {
              "speaker": "tang",
              "text": "「但难的那个现在没被云挡。」"
            },
            {
              "speaker": "lin",
              "text": "「五分钟后可能挡。先校准，后面才知道错多少。」"
            },
            {
              "speaker": "zhou",
              "text": "「我支持先校准。」"
            },
            {
              "speaker": "tang",
              "text": "「你支持得这么快，我有点怀疑你们是不是有默契加成。」"
            },
            {
              "speaker": "zhou",
              "text": "「我们只是被同一个人骂过很多次。」"
            },
            {
              "speaker": "lin",
              "text": "「别把训练成果说得这么惨。」"
            },
            {
              "speaker": "narrator",
              "text": "第一轮观测很顺。亮星校准、时间记录、环境备注，我负责把每次读数写进表格，林澈负责判断下一步，唐越负责每隔两分钟抬头看云。"
            },
            {
              "speaker": "narrator",
              "text": "问题出在第二个目标。云层比预报走得快，镜筒刚转过去，目标星区就被薄云擦了一下。"
            },
            {
              "speaker": "tang",
              "text": "「要不要换第三个？」"
            },
            {
              "speaker": "zhou",
              "text": "「现在换会损失八分钟。」"
            },
            {
              "speaker": "lin",
              "text": "「再等两分钟。周行，把这段云量写进备注，不要只记失败。」"
            },
            {
              "speaker": "zhou",
              "text": "「知道。」"
            },
            {
              "speaker": "narrator",
              "text": "两分钟后，云缝真的打开了一点。林澈立刻报数，我低头记，唐越在旁边计时，三个人没有一句废话。"
            },
            {
              "bg": "cgCh7DataLabSharedScreen",
              "clear": true,
              "speaker": "narrator",
              "text": "夜里的数据实验室里，三个人围着同一块屏幕。林澈用笔点着表格里的备注列，我在旁边改说明，唐越抱着水杯看得很认真。"
            },
            {
              "bg": "dataLabNight",
              "clear": true,
              "speaker": "narrator",
              "text": "回到数据实验室已经接近十一点。老师要求每组把观测记录转成一页报告，第二天早上交。"
            },
            {
              "speaker": "tang",
              "text": "「我现在看见表格就想逃。」"
            },
            {
              "speaker": "zhou",
              "text": "「你下午不是说表格最诚实？」"
            },
            {
              "speaker": "tang",
              "text": "「诚实的人也会让人累。」"
            },
            {
              "speaker": "lin",
              "text": "「别吵。报告分三块：目标选择、观测过程、误差说明。周行写误差，唐越写天气，我把目标选择补齐。」"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，你有没有发现你现在分任务很自然？」"
            },
            {
              "speaker": "lin",
              "text": "「因为有人不分任务就会聊天。」"
            },
            {
              "speaker": "zhou",
              "text": "「你可以直接说我。」"
            },
            {
              "speaker": "lin",
              "text": "「我刚才已经很直接了。」"
            },
            {
              "speaker": "narrator",
              "text": "我低头写误差说明。句子不需要好看，只需要清楚：哪段云量影响读数，哪次校准可以保留，哪个结果可信度低。"
            },
            {
              "speaker": "narrator",
              "text": "写到一半，林澈把她那边的目标优先级发到共享文档里。每一条都很短，却把取舍写明白了。"
            },
            {
              "speaker": "zhou",
              "text": "「你这段可以直接当范文。」"
            },
            {
              "speaker": "lin",
              "text": "「别夸，改你的。」"
            },
            {
              "speaker": "zhou",
              "text": "「收到。」"
            },
            {
              "speaker": "tang",
              "text": "「你们平时也是这样？」"
            },
            {
              "speaker": "lin",
              "text": "「哪样？」"
            },
            {
              "speaker": "tang",
              "text": "「一个吐槽，一个纠偏，最后效率还挺高。」"
            },
            {
              "speaker": "zhou",
              "text": "「这是我们学校特产。」"
            },
            {
              "speaker": "lin",
              "text": "「不对外销售。」"
            },
            {
              "speaker": "narrator",
              "text": "唐越笑得差点把水喷出来。林澈低头看屏幕，耳尖被台灯照得有点红，但她没有接这个话题，只把我的报告段落批注了一句：这里写得可以，再短一点。"
            },
            {
              "bg": "observatoryControlRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "第二天上午，老师把每组报告投到屏幕上逐条讲。轮到我们时，目标选择被打了勾，误差说明旁边却有一整行红字。",
              "bgm": "focusDerivation"
            },
            {
              "speaker": "guestTeacher",
              "text": "「你们记录很完整，但说明太客气了。竞赛报告不是写给熟人看的，不要指望阅卷人替你们理解省略。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，这个‘太客气’是什么意思？」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「就是你们知道自己在干什么，但不肯把判断写死。怕错，所以把话写软。」"
            },
            {
              "speaker": "narrator",
              "text": "这话像是同时砸在我们三个人桌上。林澈低头看报告，没有反驳。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「林澈，你目标优先级排得清楚，但结论句不够直接。周行，你误差段落有材料，但最后一句像日记。唐越，你天气备注很好，除了字迹。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，我字迹真的还能救吗？」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「国际赛上先让别人看懂，再谈救。」"
            },
            {
              "speaker": "narrator",
              "text": "课间，林澈把报告打印稿拿到窗边，用红笔把最后一段全部划掉。"
            },
            {
              "speaker": "zhou",
              "text": "「你划得这么狠？」"
            },
            {
              "speaker": "lin",
              "text": "「老师说得对。这里不需要委婉。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「那我那句像日记的是什么？」"
            },
            {
              "speaker": "lin",
              "text": "「‘整体来看结果仍具有参考意义’。」"
            },
            {
              "speaker": "zhou",
              "text": "「这不是挺正式吗？」"
            },
            {
              "speaker": "lin",
              "text": "「正式但没用。写成‘该组数据权重降低，不用于主结论’。」"
            },
            {
              "speaker": "zhou",
              "text": "「好冷酷。」"
            },
            {
              "speaker": "lin",
              "text": "「报告需要冷酷一点。」"
            },
            {
              "speaker": "narrator",
              "text": "她把修改后的句子推给我看，语气像平时纠错题。可我知道她也被那句“怕错”戳中了，只是她处理情绪的方式是立刻改稿。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈。」"
            },
            {
              "speaker": "lin",
              "text": "「嗯？」"
            },
            {
              "speaker": "zhou",
              "text": "「你刚才那段目标选择其实很清楚。只是最后一句没写硬。」"
            },
            {
              "speaker": "lin",
              "text": "「不用安慰我。」"
            },
            {
              "speaker": "zhou",
              "text": "「不是安慰，是按你写的材料判断。」"
            },
            {
              "speaker": "narrator",
              "text": "她抬头看了我一眼，像听出了我在借她上午的话。"
            },
            {
              "speaker": "lin",
              "text": "「学得还挺快。」"
            },
            {
              "speaker": "zhou",
              "text": "「毕竟有人讲过很多遍。」"
            },
            {
              "speaker": "lin",
              "text": "「那下午你负责把我们组报告压到一页以内。」"
            },
            {
              "speaker": "zhou",
              "text": "「这就是学费吗？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。」"
            }
          ]
        },
        {
          "id": "ch7-s5",
          "title": "第一次掉队",
          "lines": [
            {
              "bg": "competitionExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "第四天的综合测评从早上八点开始。题纸发下来，我看到第一题就知道这不是普通训练：题面短，条件少，空白处却大得像在等人犯错。",
              "bgm": "examLamp"
            },
            {
              "speaker": "narrator",
              "text": "我前半场做得还算顺，直到观测策略题突然卡住。题目给了两种方案，A 方案稳定但分辨率低，B 方案风险高但可能抓到关键数据。"
            },
            {
              "speaker": "narrator",
              "text": "如果在以前，我大概会选看起来更厉害的那个，再给自己找一堆理由。可这几天的训练让我知道，选择本身不难，难的是承认代价。"
            },
            {
              "speaker": "proctor",
              "text": "「还剩三十分钟。」"
            },
            {
              "speaker": "narrator",
              "text": "笔尖停在纸上，我忽然听见旁边有人翻页。林澈坐在另一排，我看不见她的答案，只能看见她低头写字的侧影。"
            },
            {
              "speaker": "narrator",
              "text": "她没有犹豫太久。那种稳定不是因为题简单，而是她已经习惯把问题切开。"
            },
            {
              "speaker": "narrator",
              "text": "我深吸一口气，在草稿纸上写下三行：目标优先、天气窗口、误差可控。然后把 A 方案作为主方案，B 方案作为条件触发。"
            },
            {
              "speaker": "narrator",
              "text": "写完最后一个字时，铃声正好响起。我的手心全是汗。"
            },
            {
              "bg": "competitionExamHallway",
              "clear": true,
              "speaker": "narrator",
              "text": "走廊里很吵。有人靠墙复盘，有人说自己完了，还有人已经开始问下午的安排。我把笔塞进包里，半天没拉上拉链。",
              "bgm": "breakdown"
            },
            {
              "speaker": "lin",
              "text": "「你卡题了？」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerAnxious",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你怎么知道？」"
            },
            {
              "speaker": "lin",
              "text": "「你出考场以后一直在折准考证。」"
            },
            {
              "speaker": "zhou",
              "text": "「我还以为自己动作很隐蔽。」"
            },
            {
              "speaker": "lin",
              "text": "「很明显。你一紧张就开始折纸。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你呢？顺吗？」"
            },
            {
              "speaker": "lin",
              "text": "「有两问不确定，但整体还行。你卡哪道？」"
            },
            {
              "speaker": "zhou",
              "text": "「策略题。A 稳，B 可能拿高分。我最后写了 A 主 B 条件。」"
            },
            {
              "speaker": "lin",
              "text": "「理由写了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「写了天气窗口和误差。」"
            },
            {
              "speaker": "lin",
              "text": "「那就不是乱选。」"
            },
            {
              "speaker": "zhou",
              "text": "「可我总觉得如果选 B，可能更像国家队的人。」"
            },
            {
              "speaker": "lin",
              "text": "「国家队的人也要交可执行方案，不是交勇气证明。」"
            },
            {
              "speaker": "narrator",
              "text": "她说得很平，没有安慰人的语气，却把我脑子里那团乱线剪开了一截。"
            },
            {
              "bg": "campCafeteria",
              "clear": true,
              "speaker": "narrator",
              "text": "午饭时间，食堂比平时安静。大家端着餐盘，像刚从水里捞出来。菜还是那些菜，番茄炒蛋、青菜、排骨汤，但每个人都吃得很慢。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "tang",
              "text": "「我选 B 了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你果然。」"
            },
            {
              "speaker": "tang",
              "text": "「但我理由写崩了。写到一半发现自己在赌，后面只能硬补。」"
            },
            {
              "speaker": "lin",
              "text": "「下午还有英文题面，不要把上午的卷子带进去。」"
            },
            {
              "speaker": "tang",
              "text": "「林澈，你说话像教练。」"
            },
            {
              "speaker": "lin",
              "text": "「教练不会提醒你汤洒了。」"
            },
            {
              "speaker": "tang",
              "text": "「哪里？」"
            },
            {
              "speaker": "narrator",
              "text": "唐越低头，发现汤碗边缘真的快溢出来，赶紧扶住。"
            },
            {
              "speaker": "zhou",
              "text": "「她的提醒范围包括天文和生活灾害。」"
            },
            {
              "speaker": "lin",
              "text": "「你也一样。筷子拿反了。」"
            },
            {
              "speaker": "zhou",
              "text": "「……这是我为了测试你是否疲劳。」"
            },
            {
              "speaker": "lin",
              "text": "「测试结果：你比较疲劳。」"
            },
            {
              "bg": "cgCh7FailedObservationRun",
              "clear": true,
              "speaker": "narrator",
              "text": "午间食堂靠窗的位置，托盘里的饭菜冒着热气。桌上没有夸张的庆祝，只有几个人把上午的失误拆开，再把下午要用的笔和证件重新摆好。"
            },
            {
              "bg": "vendingMachineNight",
              "clear": true,
              "speaker": "narrator",
              "text": "晚上复盘结束后，我在宿舍楼下自动售货机前站了很久。机器灯光把地砖照成一小块冷白，矿泉水、咖啡和功能饮料排得像选择题。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "narrator",
              "text": "我没有按下咖啡。手指停了停，最后买了一瓶水。"
            },
            {
              "speaker": "lin",
              "text": "「终于学会不在晚上十一点喝咖啡了？」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerTired",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你怎么在这？」"
            },
            {
              "speaker": "lin",
              "text": "「买水。」"
            },
            {
              "speaker": "zhou",
              "text": "「你也睡不着？」"
            },
            {
              "speaker": "lin",
              "text": "「有一点。下午英文题面我漏看了一个限定词，虽然最后改回来了，但那十分钟很烦。」"
            },
            {
              "speaker": "zhou",
              "text": "「原来你也会烦。」"
            },
            {
              "speaker": "lin",
              "text": "「我当然会。只是烦也要把下一步做完。」"
            },
            {
              "speaker": "narrator",
              "text": "她投币，机器咔哒一声掉出一瓶水。她弯腰拿起，又把瓶身贴在额头上降温。"
            },
            {
              "speaker": "zhou",
              "text": "「如果最后没进呢？」"
            },
            {
              "speaker": "lin",
              "text": "「那就回去高考。」"
            },
            {
              "speaker": "zhou",
              "text": "「你回答得太快了。」"
            },
            {
              "speaker": "lin",
              "text": "「因为这是事实。」"
            },
            {
              "speaker": "zhou",
              "text": "「那如果进了呢？」"
            },
            {
              "speaker": "lin",
              "text": "「就继续训练，去比赛，把护照找出来，把行李箱修好。还有，别让你丢证件。」"
            },
            {
              "speaker": "zhou",
              "text": "「听起来你已经把我算进麻烦清单了。」"
            },
            {
              "speaker": "lin",
              "text": "「你本来就在。」"
            },
            {
              "speaker": "narrator",
              "text": "我拧开瓶盖，喝了一口水。自动售货机的嗡嗡声很轻，远处宿舍楼有人关窗。她站在我旁边，没有催我回去。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈。」"
            },
            {
              "speaker": "lin",
              "text": "「嗯？」"
            },
            {
              "speaker": "zhou",
              "text": "「谢谢你刚才说 A 方案不是乱选。」"
            },
            {
              "speaker": "lin",
              "text": "「我只是按你写的理由判断。」"
            },
            {
              "speaker": "zhou",
              "text": "「那也谢谢。」"
            },
            {
              "speaker": "lin",
              "text": "「明天八点还有训练。谢完回去睡。」"
            },
            {
              "speaker": "zhou",
              "text": "「是，林教练。」"
            },
            {
              "speaker": "lin",
              "text": "「再叫这个称呼，我明天不借你橡皮。」"
            },
            {
              "bg": "trainingCampLectureHall",
              "clear": true,
              "speaker": "narrator",
              "text": "第五天晚上，教练临时加了一场英文题面训练。投影上是一道长得让人头皮发麻的题，主句套从句，条件藏在括号里。",
              "bgm": "focusDerivation"
            },
            {
              "speaker": "guestTeacher",
              "text": "「国际赛不是考英语，但英语会影响你看见题目的速度。不要逐词翻译，先找动作和限制。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈把题面分成三段，第一段写“要求”，第二段写“已知”，第三段写“不要做什么”。我照着做，发现长句突然没那么吓人。"
            },
            {
              "speaker": "tang",
              "text": "「这个 not necessarily 是不是可以忽略？」"
            },
            {
              "speaker": "lin",
              "text": "「不能。它在告诉你不要默认。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「唐越，你刚才差点把限定词扔出窗外。」"
            },
            {
              "speaker": "tang",
              "text": "「我只是想让题面短一点。」"
            },
            {
              "speaker": "lin",
              "text": "「阅卷不会因为你嫌长就变短。」"
            },
            {
              "speaker": "narrator",
              "text": "做完训练，老师让我们互改翻译。林澈拿到我的纸，先画掉三个废词，又在旁边写了“直接说结论”。"
            },
            {
              "speaker": "zhou",
              "text": "「你现在批注越来越像老师了。」"
            },
            {
              "speaker": "lin",
              "text": "「你现在废词越来越稳定了。」"
            },
            {
              "speaker": "zhou",
              "text": "「我这是保持个人风格。」"
            },
            {
              "speaker": "lin",
              "text": "「考试不收个人风格。」"
            },
            {
              "speaker": "narrator",
              "text": "她把纸还给我，手指点在最后一行。"
            },
            {
              "speaker": "lin",
              "text": "「但这句很好。你把限制写清楚了。」"
            },
            {
              "speaker": "zhou",
              "text": "「难得表扬。」"
            },
            {
              "speaker": "lin",
              "text": "「别得意，前面还要改。」"
            },
            {
              "speaker": "narrator",
              "text": "我低头看那句被她圈起来的英文，心情比想象中好很多。不是因为一句表扬有多重要，而是因为她看得很细，连我自己都差点忽略的进步，她也捡了出来。"
            }
          ]
        },
        {
          "id": "ch7-s6",
          "title": "名单确认",
          "lines": [
            {
              "bg": "selectionResultBoard",
              "clear": true,
              "speaker": "narrator",
              "text": "第七天下午，最终名单贴在天文楼大厅。不是红纸，只是一张普通 A4，钉在公告板中央，旁边贴着返程安排和证书领取说明。",
              "bgm": "weightlessEcho"
            },
            {
              "speaker": "narrator",
              "text": "大厅里挤满了人，却没有人高声说话。纸张太小，大家只能一批一批往前看。"
            },
            {
              "speaker": "tang",
              "text": "「我现在有点不敢过去。」",
              "clear": true,
              "show": [
                {
                  "id": "tang",
                  "img": "tangNeutral",
                  "pos": "center"
                }
              ],
              "focus": "tang"
            },
            {
              "speaker": "zhou",
              "text": "「你前几天不是说名单只是一个结果？」"
            },
            {
              "speaker": "tang",
              "text": "「我当时比较像人，现在比较像一只空水杯。」"
            },
            {
              "speaker": "lin",
              "text": "「排队。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "left"
                },
                {
                  "id": "tang",
                  "img": "tangNeutral",
                  "pos": "right"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈的声音也比平时轻。她把胸牌绳绕在手指上，又很快松开。这个小动作让我知道，她没有看上去那么稳。"
            },
            {
              "speaker": "narrator",
              "text": "终于轮到我们。纸上先是顾望舒的名字，然后是林澈。再往下，我看见了自己的名字。周行。"
            },
            {
              "speaker": "narrator",
              "text": "我盯着那两个字，第一反应不是欢呼，而是怀疑自己是不是看错了。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈。」"
            },
            {
              "speaker": "lin",
              "text": "「我看见了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你也看见我了？」"
            },
            {
              "speaker": "lin",
              "text": "「看见了。」"
            },
            {
              "speaker": "zhou",
              "text": "「那我不是幻觉。」"
            },
            {
              "speaker": "lin",
              "text": "「不是。」"
            },
            {
              "speaker": "narrator",
              "text": "她说完，像终于允许自己呼吸，肩膀很轻地放松了一下。"
            },
            {
              "speaker": "tang",
              "text": "「我也在！我靠，我真的在！」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「大厅内不要大声喧哗。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，对不起，我小声激动。」"
            },
            {
              "speaker": "wangshu",
              "text": "「恭喜。」",
              "clear": true,
              "show": [
                {
                  "id": "wangshu",
                  "img": "wangshuNeutral",
                  "pos": "center"
                }
              ],
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「也恭喜你。你排第一个。」"
            },
            {
              "speaker": "wangshu",
              "text": "「排名不是正式公布内容。」"
            },
            {
              "speaker": "tang",
              "text": "「你连谦虚都像声明。」"
            },
            {
              "speaker": "wangshu",
              "text": "「事实而已。」"
            },
            {
              "speaker": "lin",
              "text": "「接下来还有出国前集训吧？」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「有。正式队员明天上午开会，确认护照、签证资料、监护授权和出访纪律。国际赛地点波兰，具体城市和航班会另行通知。」"
            },
            {
              "speaker": "zhou",
              "text": "「波兰。」"
            },
            {
              "speaker": "narrator",
              "text": "这个词落下来，比名单本身还让人发懵。它太远了，远到我一时不知道该把它放进哪一格生活里。"
            },
            {
              "speaker": "lin",
              "text": "「你护照过期了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「……我不知道。」"
            },
            {
              "speaker": "lin",
              "text": "「回去第一件事查护照。」"
            },
            {
              "speaker": "zhou",
              "text": "「你刚听到波兰，第一反应是护照？」"
            },
            {
              "speaker": "lin",
              "text": "「不然第一反应是你会波兰语吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「我会说谢谢吗？」"
            },
            {
              "speaker": "lin",
              "text": "「你现在先学会谢谢我提醒你查护照。」"
            },
            {
              "speaker": "zhou",
              "text": "「谢谢。」"
            },
            {
              "bg": "cgCh7CandidateListConfirm",
              "clear": true,
              "speaker": "narrator",
              "text": "公告板前，林澈和我并肩站着。名单上的两个名字挨得不远，旁边的人声很轻，胸牌绳在她指间绕了一圈又松开。"
            },
            {
              "bg": "campGateMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "第二天返程时，大学门口的横幅已经被风吹得有些歪。行李箱轮子碾过地砖，发出一串很实在的响声。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "teacher",
              "text": "「回去以后先休息半天。不要以为进了名单就可以把高考扔了，也不要以为高考能替你完成国际赛训练。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，您这句话听起来像双倍作业。」"
            },
            {
              "speaker": "teacher",
              "text": "「本来就是。」"
            },
            {
              "speaker": "lin",
              "text": "「我们会排时间表。」"
            },
            {
              "speaker": "teacher",
              "text": "「林澈，你排可以。周行，你要执行。」"
            },
            {
              "speaker": "zhou",
              "text": "「我发现所有老师都默认她负责排，我负责被排。」"
            },
            {
              "speaker": "lin",
              "text": "「因为你经常需要被排。」"
            },
            {
              "speaker": "narrator",
              "text": "上车前，林澈把一张折好的纸递给我。上面是出国前要确认的事项：护照、签证照片、转换插头、常用药、竞赛资料、英文自我介绍。"
            },
            {
              "speaker": "zhou",
              "text": "「你什么时候写的？」"
            },
            {
              "speaker": "lin",
              "text": "「昨晚。」"
            },
            {
              "speaker": "zhou",
              "text": "「你昨晚不是说要睡觉？」"
            },
            {
              "speaker": "lin",
              "text": "「写完就睡了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这个人有时候真的很可怕。」"
            },
            {
              "speaker": "lin",
              "text": "「可怕也比你到机场发现没带护照好。」"
            },
            {
              "speaker": "narrator",
              "text": "我把那张纸夹进文件袋里，和胸牌、课程表、名单复印件放在一起。车门合上时，集训营的楼慢慢往后退。"
            },
            {
              "speaker": "narrator",
              "text": "七天前，我以为自己只是来试一次。七天后，我和林澈的名字被写进同一份出访名单里。接下来要去的地方，不在任何一张模拟卷后面，而在真实的航班信息里。"
            },
            {
              "bg": "trainingCampLectureHall",
              "clear": true,
              "speaker": "narrator",
              "text": "正式队员会议比公布名单更安静。老师把出访说明一页页翻过去，所有人都在纸上做记号，像怕漏掉任何一个会在机场变成麻烦的细节。",
              "bgm": "prelimReady"
            },
            {
              "speaker": "managerTeacher",
              "text": "「接下来还有两周线上训练和三天集中合练。你们要同时处理学校课业、出访手续和国际赛准备。家长同意书今晚发电子版，明天中午前回传。」"
            },
            {
              "speaker": "zhou",
              "text": "「我现在听见回传两个字就头大。」"
            },
            {
              "speaker": "lin",
              "text": "「你负责签字，扫描我教你。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你已经默认我不会扫描了。」"
            },
            {
              "speaker": "lin",
              "text": "「上次你把文件拍成梯形。」"
            },
            {
              "speaker": "zhou",
              "text": "「那叫透视效果。」"
            },
            {
              "speaker": "lin",
              "text": "「那叫老师退回。」"
            },
            {
              "speaker": "narrator",
              "text": "会议结束后，顾望舒留下来问老师题库安排，唐越在门口给家里打电话，声音压得很低，却还是藏不住兴奋。"
            },
            {
              "speaker": "narrator",
              "text": "林澈把出访说明折好，忽然没有立刻收进包里。"
            },
            {
              "speaker": "zhou",
              "text": "「怎么了？」"
            },
            {
              "speaker": "lin",
              "text": "「我妈应该会很担心。」"
            },
            {
              "speaker": "zhou",
              "text": "「出国？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。她之前觉得竞赛最多就是去外地考试，现在突然变成波兰。」"
            },
            {
              "speaker": "zhou",
              "text": "「我爸妈大概会先问波兰冷不冷，再问我英语能不能点饭。」"
            },
            {
              "speaker": "lin",
              "text": "「他们很了解你。」"
            },
            {
              "speaker": "zhou",
              "text": "「你要是需要，我可以帮你把集训安排讲得朴素一点。比如不是出国冒险，是老师带队坐飞机去做题。」"
            },
            {
              "speaker": "lin",
              "text": "「这句话听起来更奇怪。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你自己说。我在旁边提供错误示范。」"
            },
            {
              "speaker": "narrator",
              "text": "她低头整理纸页，嘴角动了一下。"
            },
            {
              "speaker": "lin",
              "text": "「不用。我会说清楚。」"
            },
            {
              "speaker": "zhou",
              "text": "「那就好。」"
            },
            {
              "speaker": "lin",
              "text": "「不过如果我妈问你平时靠不靠谱，你要回答得谨慎一点。」"
            },
            {
              "speaker": "zhou",
              "text": "「我可以说我在你的监督下逐渐靠近靠谱。」"
            },
            {
              "speaker": "lin",
              "text": "「可以。」"
            },
            {
              "speaker": "narrator",
              "text": "我们走出天文楼时，天已经暗下来了。楼下横幅被工作人员拆了一半，白色绳子垂在栏杆上。七天的集训像被收进一个文件夹，封面写着下一站：波兰。"
            },
            {
              "bg": "schoolGateMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "回到学校那天，校门口的香樟树叶子被晒得发亮。班主任站在门口等我们，手里拿着两张新的请假手续。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "homeroom",
              "text": "「先别进教室接受围观。到办公室把后续手续签了。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，围观已经开始了。」"
            },
            {
              "speaker": "narrator",
              "text": "二楼走廊上，陈砚扒着栏杆冲我挥手，表情像看见了从新闻里回来的熟人。"
            },
            {
              "speaker": "chen",
              "text": "「周行！国家队！你现在说话是不是要配翻译？」"
            },
            {
              "speaker": "zhou",
              "text": "「我现在最需要的是补作业翻译。」"
            },
            {
              "speaker": "lin",
              "text": "「你先签字。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "homeroom",
              "text": "「林澈说得对。签完字再处理同学热情。」"
            },
            {
              "speaker": "narrator",
              "text": "办公室里，班主任把高三复习进度、集训安排和家长沟通时间一项项写在纸上。现实没有因为国家队名单变得轻松，反而更像两张课表叠在一起。"
            },
            {
              "speaker": "homeroom",
              "text": "「你们两个要互相提醒，但不要互相消耗。尤其是周行，别把所有计划都丢给林澈。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，我看起来这么不独立吗？」"
            },
            {
              "speaker": "lin",
              "text": "「你要听真话吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「算了。」"
            },
            {
              "speaker": "homeroom",
              "text": "「这次回答很成熟。」"
            },
            {
              "speaker": "narrator",
              "text": "从办公室出来，走廊里果然围了一圈同学。有人问波兰是不是很冷，有人问国际赛是不是全英文，还有人问国家队发不发统一行李箱。"
            },
            {
              "speaker": "lin",
              "text": "「先回座位。」"
            },
            {
              "speaker": "zhou",
              "text": "「你又控场了。」"
            },
            {
              "speaker": "lin",
              "text": "「不然你会解释到上课铃。」"
            },
            {
              "speaker": "narrator",
              "text": "我跟在她后面走进教室。桌上多了几张试卷，黑板右侧的高考倒计时没有停，粉笔数字比走之前少了七天。林澈把书包放下，抬头看了一眼那个数字。"
            },
            {
              "speaker": "lin",
              "text": "「晚上把出国清单和高考复习表合一下。」"
            },
            {
              "speaker": "zhou",
              "text": "「听起来像把两张卷子钉在一起。」"
            },
            {
              "speaker": "lin",
              "text": "「差不多。」"
            },
            {
              "speaker": "narrator",
              "text": "我坐下，把集训营胸牌从包里拿出来，夹进课本。下一页是函数题。国家队和高三就这样挤在同一张桌面上，谁也没有给谁让位置。"
            }
          ]
        }
      ]
    },
    {
      "id": "ch8",
      "title": "第八章：波兰的夏夜",
      "sections": [
        {
          "id": "ch8-s1",
          "title": "行李秤和护照夹",
          "lines": [
            {
              "bg": "polandPrepDorm",
              "clear": true,
              "speaker": "narrator",
              "text": "出国前集训的最后一天，宿舍地上摊着两个行李箱。队服、外套、充电器、转换插头、常用药、备用眼镜，还有一叠被老师反复强调不能丢的文件。",
              "bgm": "prelimReady"
            },
            {
              "speaker": "narrator",
              "text": "我把行李箱合上，刚拉到一半，拉链卡住了。箱子像在用实际行动提醒我：你塞得太多了。"
            },
            {
              "speaker": "zhou",
              "text": "「我觉得它还能再努力一下。」"
            },
            {
              "speaker": "lin",
              "text": "「别把行李箱当你自己。」",
              "focus": "lin",
              "clear": true,
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
              "text": "「你这句话伤害了我和箱子。」"
            },
            {
              "speaker": "lin",
              "text": "「把厚外套拿出来。波兰晚上凉，但你带两件同款没有必要。」"
            },
            {
              "speaker": "zhou",
              "text": "「一件备用。」"
            },
            {
              "speaker": "lin",
              "text": "「备用的是外套，不是另一个衣柜。」"
            },
            {
              "speaker": "narrator",
              "text": "她蹲在地上，一件一件帮我把东西分开。不是替我收拾，而是把“可能用得上”和“你只是舍不得拿出来”分成两堆。"
            },
            {
              "speaker": "lin",
              "text": "「护照。」"
            },
            {
              "speaker": "zhou",
              "text": "「这里。」"
            },
            {
              "speaker": "lin",
              "text": "「签证页。」"
            },
            {
              "speaker": "zhou",
              "text": "「这里。」"
            },
            {
              "speaker": "lin",
              "text": "「邀请函复印件。」"
            },
            {
              "speaker": "zhou",
              "text": "「这里。」"
            },
            {
              "speaker": "lin",
              "text": "「英文自我介绍。」"
            },
            {
              "speaker": "zhou",
              "text": "「背了。」"
            },
            {
              "speaker": "lin",
              "text": "「不是问你背没背，是问纸在哪。」"
            },
            {
              "speaker": "zhou",
              "text": "「……这里。」"
            },
            {
              "speaker": "narrator",
              "text": "我从夹层里摸出那张纸。她接过去看了一眼，发现边角已经被我折出一道白痕，于是从自己的包里拿出一个透明文件夹。"
            },
            {
              "speaker": "lin",
              "text": "「放这里。红色夹层是证件，蓝色夹层是资料，绿色夹层是保险和紧急联系。」"
            },
            {
              "speaker": "zhou",
              "text": "「你为什么有这种专业道具？」"
            },
            {
              "speaker": "lin",
              "text": "「文具店买的。」"
            },
            {
              "speaker": "zhou",
              "text": "「我的意思是，你为什么能把出国变成文件归档？」"
            },
            {
              "speaker": "lin",
              "text": "「因为机场不会因为你紧张就少要一张纸。」"
            },
            {
              "bg": "cgCh8PolandPackingChecklist",
              "clear": true,
              "speaker": "narrator",
              "text": "宿舍地板上铺着行李清单和打开的护照夹。林澈用笔在“证件”后面打勾，我坐在行李箱旁边，手里还拿着被淘汰的厚外套。"
            },
            {
              "speaker": "narrator",
              "text": "晚上开行前会，老师把每个人的护照收上去又发回来，确认名字、签证和紧急联系人。教室里没有人敢开太大玩笑。"
            },
            {
              "bg": "trainingCampLectureHall",
              "clear": true,
              "speaker": "narrator",
              "text": "投影上是出访纪律和赛程表。波兰、转机、时差、开幕式、理论考试、数据处理、观测考试、闭幕式，每一项都被安排得像一张巨大的时间表。"
            },
            {
              "speaker": "managerTeacher",
              "text": "「到了国外，先听队伍安排。不要单独行动，不要擅自离开酒店，不要乱吃东西。尤其是比赛前。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，乱吃东西包括当地甜点吗？」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「比赛后可以。」"
            },
            {
              "speaker": "tang",
              "text": "「那我把甜点当闭幕式目标。」"
            },
            {
              "speaker": "wangshu",
              "text": "「建议先把考试当目标。」"
            },
            {
              "speaker": "tang",
              "text": "「你真的很会让人冷静。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，你把时差换算写了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「写了。北京时间减六小时。」"
            },
            {
              "speaker": "lin",
              "text": "「航班上不要一直看北京时间，不然你会半夜精神很好，白天像没电。」"
            },
            {
              "speaker": "zhou",
              "text": "「你已经预判到我没电了？」"
            },
            {
              "speaker": "lin",
              "text": "「我是在预防。」"
            },
            {
              "speaker": "narrator",
              "text": "我把她给的护照夹放进随身包最里面，又拉开确认了一遍。红、蓝、绿三个夹层整齐地贴在一起，像把即将发生的混乱提前压平。"
            },
            {
              "speaker": "narrator",
              "text": "睡前，手机亮了一下。林澈发来消息：明早五点四十大厅集合，别把闹钟设成工作日。"
            },
            {
              "speaker": "zhou",
              "text": "「你怎么知道？」"
            },
            {
              "speaker": "lin",
              "text": "「因为你上次集训第一天就是这么迟到边缘的。」"
            },
            {
              "speaker": "zhou",
              "text": "「我成长了。」"
            },
            {
              "speaker": "lin",
              "text": "「成长的人会设两个闹钟。」"
            },
            {
              "speaker": "narrator",
              "text": "我默默把第二个闹钟设在五点三十五。设置成功的提示一闪而过，我忽然笑了一下。明天要去波兰，而我此刻最踏实的事，是有人提醒我别设错闹钟。"
            }
          ]
        },
        {
          "id": "ch8-s2",
          "title": "登机口前",
          "lines": [
            {
              "bg": "airportInternationalDepartures",
              "clear": true,
              "speaker": "narrator",
              "text": "清晨的国际出发大厅很亮。行李车轮子压过地面，广播用中文和英文交替报航班，队伍里的每个人都把护照捏得很紧。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "managerTeacher",
              "text": "「护照统一拿好，托运先按名单来。周行，别把随身包放到托运行李里。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，我还没有犯错。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「我是在降低概率。」"
            },
            {
              "speaker": "lin",
              "text": "「你的随身包在左手。」",
              "focus": "lin",
              "clear": true,
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
              "text": "「谢谢提醒，但这个我知道。」"
            },
            {
              "speaker": "lin",
              "text": "「你刚才看了右手三秒。」"
            },
            {
              "speaker": "zhou",
              "text": "「我是在确认两只手都在。」"
            },
            {
              "speaker": "tang",
              "text": "「周行，你出国第一天就这么精彩。」"
            },
            {
              "speaker": "zhou",
              "text": "「这是队伍气氛建设。」"
            },
            {
              "speaker": "wangshu",
              "text": "「建议气氛建设不要影响安检速度。」"
            },
            {
              "speaker": "narrator",
              "text": "队伍往前挪。托运行李称重时，我的箱子刚好压线。林澈站在旁边，看了一眼重量，又看了一眼我。"
            },
            {
              "speaker": "lin",
              "text": "「那件厚外套如果没拿出来，现在你就在这里表演开箱。」"
            },
            {
              "speaker": "zhou",
              "text": "「感谢林澈同学拯救我的国际形象。」"
            },
            {
              "speaker": "lin",
              "text": "「你还有很多机会自己破坏。」"
            },
            {
              "speaker": "narrator",
              "text": "过安检时，她把发卡摘下来放进托盘。那颗星形发卡安静地躺在护照旁边，忽然显得很小。"
            },
            {
              "speaker": "zhou",
              "text": "「你的星星也要过安检。」"
            },
            {
              "speaker": "lin",
              "text": "「它比你配合。」"
            },
            {
              "speaker": "zhou",
              "text": "「它不会紧张。」"
            },
            {
              "speaker": "lin",
              "text": "「你紧张？」"
            },
            {
              "speaker": "zhou",
              "text": "「一点。主要是第一次出国就去比赛，感觉像游戏新手村直接开国际服。」"
            },
            {
              "speaker": "lin",
              "text": "「那你装备还行。护照夹、笔、计算器、薄荷糖。」"
            },
            {
              "speaker": "zhou",
              "text": "「薄荷糖算装备？」"
            },
            {
              "speaker": "lin",
              "text": "「你卡题的时候有用。」"
            },
            {
              "speaker": "narrator",
              "text": "我摸了摸口袋，里面真的有她昨晚塞给我的糖。包装纸因为体温变得有点软。"
            },
            {
              "bg": "airportBoardingGateNight",
              "clear": true,
              "speaker": "narrator",
              "text": "登机口前，落地窗外停着白色机身的飞机。天还没完全亮，跑道灯一排一排延出去，像把城市切开的一条线。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "tang",
              "text": "「我宣布，从现在开始，我只说英语。」"
            },
            {
              "speaker": "zhou",
              "text": "「Please sit down.」"
            },
            {
              "speaker": "tang",
              "text": "「你这句太实用了，显得我很虚。」"
            },
            {
              "speaker": "wangshu",
              "text": "「如果想练口语，可以先把自我介绍说完整。」"
            },
            {
              "speaker": "tang",
              "text": "「顾望舒，你是不是连紧张都按计划分配？」"
            },
            {
              "speaker": "wangshu",
              "text": "「没有。我只是提前背了。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，你背一遍。」"
            },
            {
              "speaker": "zhou",
              "text": "「现在？」"
            },
            {
              "speaker": "lin",
              "text": "「登机前十分钟，刚好。」"
            },
            {
              "speaker": "zhou",
              "text": "「Hello, my name is Zhou Xing, I am from China, and I am interested in observational astronomy and data analysis...」"
            },
            {
              "speaker": "lin",
              "text": "「最后一句慢一点。不要像赶高铁。」"
            },
            {
              "speaker": "zhou",
              "text": "「我这是流利。」"
            },
            {
              "speaker": "lin",
              "text": "「这是逃跑。」"
            },
            {
              "bg": "cgCh8AirportPassportExchange",
              "clear": true,
              "speaker": "narrator",
              "text": "登机口的落地窗前，林澈把护照夹递还给我。她低头确认登机牌，我看着窗外的飞机，手指把薄荷糖包装纸捏出一点声响。"
            },
            {
              "speaker": "narrator",
              "text": "广播开始登机。队伍站起来的一瞬间，我忽然有点不真实。不是那种夸张的激动，只是脚下的地面从“国内出发”变成了“国际出发”。"
            },
            {
              "speaker": "lin",
              "text": "「走了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。」"
            },
            {
              "speaker": "lin",
              "text": "「护照。」"
            },
            {
              "speaker": "zhou",
              "text": "「在。」"
            },
            {
              "speaker": "lin",
              "text": "「登机牌。」"
            },
            {
              "speaker": "zhou",
              "text": "「在。」"
            },
            {
              "speaker": "lin",
              "text": "「人。」"
            },
            {
              "speaker": "zhou",
              "text": "「也在。」"
            },
            {
              "speaker": "lin",
              "text": "「那就好。」"
            },
            {
              "speaker": "narrator",
              "text": "她转身往登机口走。我跟上去，第一次觉得“出发”这个词没有那么空。它是一张登机牌，是一只随身包，是她回头确认我有没有跟上的那一秒。"
            }
          ]
        },
        {
          "id": "ch8-s3",
          "title": "云层上方的夜航",
          "lines": [
            {
              "bg": "airplaneCabinNight",
              "clear": true,
              "speaker": "narrator",
              "text": "飞机起飞后，客舱灯慢慢暗下来。发动机的低响压在耳边，安全带提示灯亮了一会儿又熄灭。林澈坐在靠窗，我坐在她旁边。",
              "bgm": "observatoryNight"
            },
            {
              "speaker": "zhou",
              "text": "「你想换过道吗？」"
            },
            {
              "speaker": "lin",
              "text": "「不用。靠窗可以看云。」",
              "focus": "lin",
              "clear": true,
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
              "text": "「我以为你会说靠窗方便睡觉。」"
            },
            {
              "speaker": "lin",
              "text": "「也方便判断你有没有把水打翻。」"
            },
            {
              "speaker": "zhou",
              "text": "「我在你心里是移动事故源吗？」"
            },
            {
              "speaker": "lin",
              "text": "「中等风险。」"
            },
            {
              "speaker": "narrator",
              "text": "飞机穿过云层时，机身轻轻晃了一下。她握着扶手的手指收紧，又很快松开。我看见了，但没有立刻问。"
            },
            {
              "speaker": "zhou",
              "text": "「耳压难受吗？」"
            },
            {
              "speaker": "lin",
              "text": "「还好。」"
            },
            {
              "speaker": "zhou",
              "text": "「糖。」"
            },
            {
              "speaker": "narrator",
              "text": "我把薄荷糖递过去。她看了我一眼，像有点意外。"
            },
            {
              "speaker": "lin",
              "text": "「你还留着？」"
            },
            {
              "speaker": "zhou",
              "text": "「装备不能随便消耗。」"
            },
            {
              "speaker": "lin",
              "text": "「你终于有点物资管理意识了。」"
            },
            {
              "speaker": "narrator",
              "text": "她拆开糖纸，薄荷味很轻地散出来。窗外云层被月光照成灰白色，机翼末端的小灯一闪一闪。"
            },
            {
              "bg": "cgCh8PlaneWindowLinZhou",
              "clear": true,
              "speaker": "narrator",
              "text": "飞机客舱里灯光很暗，林澈靠窗坐着，手里拿着拆开的薄荷糖。我坐在她旁边，窗外是月光下的云层和机翼灯。"
            },
            {
              "speaker": "lin",
              "text": "「我小时候第一次看土星环，是在街边望远镜前。那时候我以为星星只是书上的点，直到看见那个小小的环。」"
            },
            {
              "speaker": "zhou",
              "text": "「你第五章讲过这个。」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。现在想起来，那个环其实很模糊，边缘也不清楚。但我当时觉得，原来书上说的东西真的在那里，不是为了考试编出来的。」"
            },
            {
              "speaker": "zhou",
              "text": "「所以你后来一直想把它看清楚？」"
            },
            {
              "speaker": "lin",
              "text": "「不完全是。看清楚当然很好，但更重要的是知道它不因为我看不清就不存在。」"
            },
            {
              "speaker": "zhou",
              "text": "「这句话有点像你。」"
            },
            {
              "speaker": "lin",
              "text": "「什么意思？」"
            },
            {
              "speaker": "zhou",
              "text": "「就是很适合被写进你自己的错题本封面。」"
            },
            {
              "speaker": "lin",
              "text": "「那我会先把你的废话删掉。」"
            },
            {
              "speaker": "narrator",
              "text": "她说完，自己也轻轻笑了一下。笑意很短，但在暗下来的客舱里显得很清楚。"
            },
            {
              "speaker": "narrator",
              "text": "餐车推过来时，我和林澈都选了鸡肉饭。打开锡纸，热气扑上来，味道说不上好，但在长途飞机上已经足够让人安心。"
            },
            {
              "speaker": "zhou",
              "text": "「你胡萝卜不吃？」"
            },
            {
              "speaker": "lin",
              "text": "「吃。」"
            },
            {
              "speaker": "zhou",
              "text": "「你盯着它三秒了。」"
            },
            {
              "speaker": "lin",
              "text": "「我在评估。」"
            },
            {
              "speaker": "zhou",
              "text": "「它只是胡萝卜。」"
            },
            {
              "speaker": "lin",
              "text": "「飞机餐里的胡萝卜需要评估。」"
            },
            {
              "speaker": "narrator",
              "text": "最后她还是把胡萝卜吃掉了。我把酸奶递给她，她把面包推给我，动作自然得像我们不是在万米高空，而是在学校食堂靠窗那张桌子。"
            },
            {
              "bg": "airplaneWindowClouds",
              "clear": true,
              "speaker": "narrator",
              "text": "后半程，很多人睡了。窗外没有地面，只有一层一层的云和偶尔露出的暗色海面。客舱里只有阅读灯和屏幕光。"
            },
            {
              "speaker": "lin",
              "text": "「你睡不着？」"
            },
            {
              "speaker": "zhou",
              "text": "「有点。脑子里一直在过赛程。」"
            },
            {
              "speaker": "lin",
              "text": "「理论、数据、观测，三块。开幕式当天不训练太晚，第一场前一晚十点必须睡。」"
            },
            {
              "speaker": "zhou",
              "text": "「你连我的睡觉时间都安排好了？」"
            },
            {
              "speaker": "lin",
              "text": "「队伍统一要求。只是你需要额外提醒。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你呢？你不紧张吗？」"
            },
            {
              "speaker": "lin",
              "text": "「紧张。但飞机已经起飞了，紧张也不能让它掉头。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这安慰方式还是很实用。」"
            },
            {
              "speaker": "lin",
              "text": "「你要听不实用的吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「也可以。」"
            },
            {
              "speaker": "lin",
              "text": "「那就，到了波兰之后，我们先把水买好，再把赛场路线走一遍。知道自己明天怎么走，人会安静一点。」"
            },
            {
              "speaker": "zhou",
              "text": "「这还是很实用。」"
            },
            {
              "speaker": "lin",
              "text": "「我不会别的。」"
            },
            {
              "speaker": "narrator",
              "text": "我看着她侧脸。窗外的云很亮，映得她眼睛里有一点很浅的光。她说不会别的，可这一路上，她做的每件小事都在把不安拆小。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈。」"
            },
            {
              "speaker": "lin",
              "text": "「嗯？」"
            },
            {
              "speaker": "zhou",
              "text": "「到了波兰，如果我又开始折纸，你提醒我。」"
            },
            {
              "speaker": "lin",
              "text": "「可以。」"
            },
            {
              "speaker": "zhou",
              "text": "「如果你开始绕胸牌绳，我也提醒你。」"
            },
            {
              "speaker": "lin",
              "text": "「我不一定承认。」"
            },
            {
              "speaker": "zhou",
              "text": "「那我就递水。」"
            },
            {
              "speaker": "lin",
              "text": "「这个可以。」"
            },
            {
              "speaker": "narrator",
              "text": "后来她靠着窗睡着了。飞机偶尔颠簸，她眉头皱一下，又很快松开。我把阅读灯调暗，轻轻把她滑到膝盖边的资料夹往桌板里面推了推。"
            },
            {
              "speaker": "narrator",
              "text": "屏幕上的航线一点一点向西移动。波兰还在几个小时之外，而我第一次觉得，远也不是那么吓人。只要旁边这个人还在认真地睡，下一站就只是下一站。"
            },
            {
              "bg": "airplaneCabinNight",
              "clear": true,
              "speaker": "narrator",
              "text": "飞行进入后半夜，客舱里越来越安静。前排屏幕上显示的航线越过一片深蓝色区域，离目的地还有很长一段。",
              "bgm": "observatoryNight"
            },
            {
              "speaker": "narrator",
              "text": "我原本想睡，闭上眼却总想起理论题的公式、观测考试的流程，还有出国前老师反复提醒的纪律。想得越多，越像把自己塞进一张过密的表格。"
            },
            {
              "speaker": "lin",
              "text": "「睡不着就别硬闭眼。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualTired",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「你醒了？」"
            },
            {
              "speaker": "lin",
              "text": "「你翻身太明显。」"
            },
            {
              "speaker": "zhou",
              "text": "「飞机座位能翻出什么明显动静？」"
            },
            {
              "speaker": "lin",
              "text": "「安全带扣被你碰响三次。」"
            },
            {
              "speaker": "zhou",
              "text": "「对不起，影响林同学休眠。」"
            },
            {
              "speaker": "lin",
              "text": "「把赛程表拿出来。」"
            },
            {
              "speaker": "zhou",
              "text": "「现在复习？」"
            },
            {
              "speaker": "lin",
              "text": "「不是。划掉已经完成的部分。」"
            },
            {
              "speaker": "narrator",
              "text": "我从资料夹里抽出赛程表。她开了头顶的小灯，光落在纸上。出发、安检、登机，这几项已经可以划掉。"
            },
            {
              "speaker": "lin",
              "text": "「你看，已经不是一整张未知了。」"
            },
            {
              "speaker": "zhou",
              "text": "「这也是你的方法？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。事情太多的时候，就把已经做完的划掉。不要一直盯着还没发生的。」"
            },
            {
              "speaker": "zhou",
              "text": "「你早点告诉我，我能少精神内耗很多年。」"
            },
            {
              "speaker": "lin",
              "text": "「你听了也不一定做。」"
            },
            {
              "speaker": "zhou",
              "text": "「这倒是。」"
            },
            {
              "speaker": "narrator",
              "text": "我们用铅笔把完成项轻轻划掉。纸面没有发生什么大变化，可我心里那种堵住的感觉确实松了一点。"
            },
            {
              "speaker": "lin",
              "text": "「现在睡二十分钟也算睡。」"
            },
            {
              "speaker": "zhou",
              "text": "「你呢？」"
            },
            {
              "speaker": "lin",
              "text": "「我也睡。」"
            },
            {
              "speaker": "zhou",
              "text": "「如果我又碰到安全带扣？」"
            },
            {
              "speaker": "lin",
              "text": "「我会踢你鞋。」"
            },
            {
              "speaker": "zhou",
              "text": "「国际航班上的暴力提醒。」"
            },
            {
              "speaker": "lin",
              "text": "「有效就行。」"
            },
            {
              "speaker": "narrator",
              "text": "她把灯关掉。黑暗重新落下来，我听见她呼吸慢慢变稳。赛程表被我压在桌板下，已经划掉的几行在脑子里停了一会儿，然后也慢慢安静下来。"
            }
          ]
        },
        {
          "id": "ch8-s4",
          "title": "抵达波兰",
          "lines": [
            {
              "bg": "warsawAirportArrival",
              "clear": true,
              "speaker": "narrator",
              "text": "落地时是当地上午。机场玻璃顶透进很淡的光，指示牌上写着陌生的地名和英文，队伍里的每个人都在努力让自己看起来清醒。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "tang",
              "text": "「我现在感觉自己像被时差洗过。」"
            },
            {
              "speaker": "zhou",
              "text": "「你至少还有语言功能。」"
            },
            {
              "speaker": "lin",
              "text": "「先别说话，跟队。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualTired",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "managerTeacher",
              "text": "「护照准备好，入境问题如实回答。比赛、学生、团队。」"
            },
            {
              "speaker": "narrator",
              "text": "轮到我时，海关人员看了看护照，又看了看邀请函。我按练过的句子回答，声音比想象中稳。"
            },
            {
              "speaker": "narrator",
              "text": "出关以后，大家在行李转盘前等箱子。林澈的箱子先出来，深蓝色，挂着一枚星星吊牌。我的箱子晚了两圈，出现时上面多了一道灰。"
            },
            {
              "speaker": "zhou",
              "text": "「它也经历了国际磨炼。」"
            },
            {
              "speaker": "lin",
              "text": "「先检查轮子。」"
            },
            {
              "speaker": "zhou",
              "text": "「你对行李箱的关心比对我温柔。」"
            },
            {
              "speaker": "lin",
              "text": "「它坏了会影响全队，你暂时还能自己走。」"
            },
            {
              "bg": "polishBusHighwayMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "从华沙机场到比赛城市的路上，窗外是大片绿色田野和红色屋顶。巴士空调开得低，老师让大家尽量别睡太久，晚上才能倒时差。"
            },
            {
              "speaker": "narrator",
              "text": "林澈坐在我旁边，手里拿着赛事手册。她看一页，在便签上写一行，然后把重点贴到封面内侧。"
            },
            {
              "speaker": "zhou",
              "text": "「你不困吗？」"
            },
            {
              "speaker": "lin",
              "text": "「困。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你还看？」"
            },
            {
              "speaker": "lin",
              "text": "「困的时候看规则，记不住废话，只记得重点。」"
            },
            {
              "speaker": "zhou",
              "text": "「这是什么高阶技巧？」"
            },
            {
              "speaker": "lin",
              "text": "「被迫总结。」"
            },
            {
              "speaker": "narrator",
              "text": "她说完打了个很轻的哈欠，马上用手背挡住。这个动作让我忍住没笑，只把水瓶递过去。"
            },
            {
              "speaker": "lin",
              "text": "「谢谢。」"
            },
            {
              "speaker": "zhou",
              "text": "「不用。我负责递水。」"
            },
            {
              "speaker": "lin",
              "text": "「你记得挺清楚。」"
            },
            {
              "speaker": "zhou",
              "text": "「飞机上约好的。」"
            },
            {
              "bg": "krakowHotelRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "酒店房间不大，两张床、两张书桌、一个窗台。窗外能看见红砖屋顶和远处教堂尖顶，街上的车开得很慢。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "narrator",
              "text": "男生女生分层住宿。放好行李后，老师给每个人二十分钟整理，然后大厅集合去赛场熟悉路线。"
            },
            {
              "speaker": "narrator",
              "text": "我把护照夹放进抽屉，又觉得不安全，拿出来放进随身包。放进包里后又检查拉链。"
            },
            {
              "speaker": "tang",
              "text": "「你在跟护照培养感情？」"
            },
            {
              "speaker": "zhou",
              "text": "「我在避免林澈把我列入高风险。」"
            },
            {
              "speaker": "tang",
              "text": "「你已经在了吧。」"
            },
            {
              "speaker": "zhou",
              "text": "「中等风险。」"
            },
            {
              "speaker": "tang",
              "text": "「这还有评级？」"
            },
            {
              "bg": "competitionVenuePolandGate",
              "clear": true,
              "speaker": "narrator",
              "text": "比赛场馆在一所大学校园里。大门前插着很多国家的旗子，志愿者穿着统一的蓝色 T 恤，胸牌上写着名字和语言。",
              "bgm": "rivalry"
            },
            {
              "speaker": "managerTeacher",
              "text": "「这是主会场。明天开幕式，后天第一场理论。现在只看路线，不讨论题。」"
            },
            {
              "speaker": "lin",
              "text": "「从酒店步行十五分钟，过两个路口，第二个路口有电车线。」"
            },
            {
              "speaker": "zhou",
              "text": "「你已经记住了？」"
            },
            {
              "speaker": "lin",
              "text": "「路口有面包店，比较好记。」"
            },
            {
              "speaker": "zhou",
              "text": "「原来你也会用食物定位。」"
            },
            {
              "speaker": "lin",
              "text": "「有效就行。」"
            },
            {
              "speaker": "narrator",
              "text": "回酒店前，队伍在便利店买水和简单食物。林澈拿了两瓶矿泉水，一袋小面包，还有一盒写着波兰语的酸奶。"
            },
            {
              "speaker": "zhou",
              "text": "「你看得懂？」"
            },
            {
              "speaker": "lin",
              "text": "「看不懂，但图案像原味。」"
            },
            {
              "speaker": "zhou",
              "text": "「这是科学判断？」"
            },
            {
              "speaker": "lin",
              "text": "「这是生存判断。」"
            },
            {
              "speaker": "narrator",
              "text": "晚上九点，窗外天色还没有完全黑。时差把人拽得很散，但我们还是在酒店公共区把第二天物品清单过了一遍。"
            },
            {
              "speaker": "lin",
              "text": "「证件不带进考场，准考证带。水撕标签。计算器提前清空。」"
            },
            {
              "speaker": "zhou",
              "text": "「笔两支，橡皮一块，尺子一把。」"
            },
            {
              "speaker": "lin",
              "text": "「薄荷糖不能带。」"
            },
            {
              "speaker": "zhou",
              "text": "「知道。装备封存。」"
            },
            {
              "speaker": "narrator",
              "text": "她点点头，把清单折好。窗外有陌生城市的电车声，叮的一下，像把我们真正放进了波兰的晚上。"
            },
            {
              "bg": "krakowHotelRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "抵达后的第一个下午，老师允许大家回房间短暂休息，但要求五点准时到大厅集合。我的手机时间还停在北京时间，闹钟差点响在错误的半夜。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "narrator",
              "text": "我盯着屏幕看了十秒，决定不逞强，直接给林澈发消息。"
            },
            {
              "speaker": "zhou",
              "text": "「当地时间怎么设自动更新？」"
            },
            {
              "speaker": "lin",
              "text": "「设置，通用，日期与时间，打开自动设置。」"
            },
            {
              "speaker": "zhou",
              "text": "「你回复得像客服。」"
            },
            {
              "speaker": "lin",
              "text": "「客服不会提醒你五点大厅。」"
            },
            {
              "speaker": "zhou",
              "text": "「谢谢非客服。」"
            },
            {
              "speaker": "narrator",
              "text": "五点集合时，她已经站在大厅角落，手里拿着酒店地图。唐越围着咖啡机研究，顾望舒在读赛事手册。"
            },
            {
              "speaker": "tang",
              "text": "「这咖啡机的图标我看不懂。」"
            },
            {
              "speaker": "wangshu",
              "text": "「左边是浓缩，右边是热水。」"
            },
            {
              "speaker": "tang",
              "text": "「你为什么连咖啡机都能看懂？」"
            },
            {
              "speaker": "wangshu",
              "text": "「图标不难。」"
            },
            {
              "speaker": "zhou",
              "text": "「对他来说，没中文就是难。」"
            },
            {
              "speaker": "tang",
              "text": "「周行，你刚才是不是还在问手机时间？」"
            },
            {
              "speaker": "zhou",
              "text": "「国际互助，禁止攻击。」"
            },
            {
              "speaker": "lin",
              "text": "「路线图看一下。从酒店到会场，我们明早要自己跟队走，别只跟着前面人的后脑勺。」"
            },
            {
              "speaker": "narrator",
              "text": "她把地图摊开，用指尖沿着街道慢慢划。酒店、路口、面包店、电车线、会场大门，每个点都很具体。"
            },
            {
              "speaker": "zhou",
              "text": "「如果明早我没睡醒，就看面包店。」"
            },
            {
              "speaker": "lin",
              "text": "「如果你没睡醒，我会先叫醒你。」"
            },
            {
              "speaker": "zhou",
              "text": "「服务很完整。」"
            },
            {
              "speaker": "lin",
              "text": "「不包含搬运行李。」"
            },
            {
              "speaker": "narrator",
              "text": "走完路线回到酒店，天色还亮着。波兰的夏天把傍晚拉得很长，我们却都已经困得不太会说话。林澈进电梯前把一张小便签塞给我，上面写着当地时间十点睡。"
            },
            {
              "speaker": "zhou",
              "text": "「你还手写？」"
            },
            {
              "speaker": "lin",
              "text": "「手机提醒你可能关掉。」"
            },
            {
              "speaker": "zhou",
              "text": "「我在你这里信用这么低？」"
            },
            {
              "speaker": "lin",
              "text": "「中等风险。」"
            },
            {
              "speaker": "narrator",
              "text": "我把便签贴在床头灯下面。晚上十点，它安静地待在那里，比手机闹钟更像一个人站在旁边盯着我。"
            }
          ]
        },
        {
          "id": "ch8-s5",
          "title": "赛场里的两小时",
          "lines": [
            {
              "bg": "competitionOpeningHallPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "开幕式大厅很高，灯光从上方落下来。各国队伍按字母顺序入场，旗帜、掌声、翻译耳机和陌生语言混在一起。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "轮到中国队时，我们跟着老师往前走。掌声响起，我听见唐越在旁边小声吸气。"
            },
            {
              "speaker": "tang",
              "text": "「我突然不想乱说话了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你能有这个觉悟，开幕式已经成功一半。」"
            },
            {
              "speaker": "lin",
              "text": "「站直。」",
              "focus": "lin",
              "clear": true,
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
              "text": "「你刚才是不是也紧张？」"
            },
            {
              "speaker": "lin",
              "text": "「站直和紧张不冲突。」"
            },
            {
              "speaker": "narrator",
              "text": "她看着台上，手指按住胸牌边缘。那一瞬间，我没有拆穿她，只把自己的胸牌也扶正。"
            },
            {
              "bg": "cgCh8OpeningFlagHall",
              "clear": true,
              "speaker": "narrator",
              "text": "开幕式大厅里，各国旗帜排在舞台两侧。林澈和我站在中国队队列中，胸牌被灯光照亮，表情认真而有点紧。"
            },
            {
              "bg": "internationalExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "第一场理论考试在第二天上午。考场窗户很大，外面是安静的草坪。试卷发下来时，纸张边缘很白，英文题面比训练里更长。",
              "bgm": "examLamp"
            },
            {
              "speaker": "proctor",
              "text": "「You may begin.」"
            },
            {
              "speaker": "narrator",
              "text": "我先不看数字，只扫题型。轨道力学、辐射、双星、观测规划。熟悉，但每一道都多了一个容易忽略的条件。"
            },
            {
              "speaker": "narrator",
              "text": "前半小时，我把最稳的两题做完。第二题有一个单位陷阱，训练营里林澈念叨过很多次：别让单位替题目赢你。"
            },
            {
              "speaker": "narrator",
              "text": "我在草稿纸左上角写下单位换算，再往下推。答案出来时，数值比预估小一位，我没有立刻改，而是回头检查题面，发现半径给的是千米。"
            },
            {
              "speaker": "narrator",
              "text": "差一点。"
            },
            {
              "speaker": "narrator",
              "text": "我把错误划掉，重算。手没有抖。因为这不是第一次差一点，也不是第一次被拉回来。"
            },
            {
              "speaker": "proctor",
              "text": "「One hour remaining.」"
            },
            {
              "speaker": "narrator",
              "text": "最后一题是观测策略。条件复杂，但思路像集训营那三张表：目标、天气、误差。我的笔在纸上越写越稳，甚至在最后十分钟补了一个备用方案。"
            },
            {
              "speaker": "narrator",
              "text": "铃响时，我没有提前判断成绩，只把答题纸翻过来，长长地呼出一口气。考得不差。这个感觉很清楚，不需要别人告诉我。"
            },
            {
              "bg": "competitionVenuePolandGate",
              "clear": true,
              "speaker": "narrator",
              "text": "考场外阳光很亮。队员们陆续出来，有人皱着眉，有人低头快步走。林澈站在台阶旁边，手里拿着没开封的水。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "lin",
              "text": "「单位题你看见了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「看见了。差点被半径坑。」"
            },
            {
              "speaker": "lin",
              "text": "「我也是，第二遍扫题才改。」"
            },
            {
              "speaker": "zhou",
              "text": "「最后策略题呢？」"
            },
            {
              "speaker": "lin",
              "text": "「写了主方案和备用方案。你呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「一样。」"
            },
            {
              "speaker": "narrator",
              "text": "我们对视了一秒，同时笑了一下。不是因为确定能拿奖，而是因为那种“题被抓住了”的感觉，彼此都懂。"
            },
            {
              "bg": "observationFieldPolandNight",
              "clear": true,
              "speaker": "narrator",
              "text": "观测考试安排在第三天夜里。波兰的夜风比国内凉，草地边缘有露水，远处场馆的灯被临时遮光布挡住。",
              "bgm": "observatoryNight"
            },
            {
              "bg": "cgCh8PolandObservationField",
              "clear": true,
              "speaker": "narrator",
              "text": "波兰夜里的观测场，林澈低头校准望远镜，我在旁边记录时间和读数。远处其他队伍的红光手电像很小的星点。"
            },
            {
              "speaker": "narrator",
              "text": "林澈在我前一组。她走到设备旁边时，动作很稳，先检查三脚架，再看目镜，最后抬头确认星区。"
            },
            {
              "speaker": "narrator",
              "text": "轮到我时，手指刚碰到调焦轮，脑子里忽然闪过很多场景：学校楼顶、海边堤坝、集训营天台、飞机窗外的云。"
            },
            {
              "speaker": "narrator",
              "text": "但这些画面只停了一秒。我把注意力拉回目镜，找星，校准，记录。"
            },
            {
              "speaker": "proctor",
              "text": "「Five minutes.」"
            },
            {
              "speaker": "narrator",
              "text": "最后一个读数有点飘。我没有硬凑漂亮结果，而是在备注里写了风和目镜雾气。写完后，心反而落下来。"
            },
            {
              "bg": "teamDiscussionRoomPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "考试全部结束后，队伍在酒店会议室短暂复盘。老师没有让大家细对答案，只让每个人说一句自己做得最好的地方和最该改的地方。"
            },
            {
              "speaker": "wangshu",
              "text": "「理论题时间分配可以，观测备注还可以更短。」"
            },
            {
              "speaker": "tang",
              "text": "「我数据题写得很爽，观测最后两分钟差点把表格写成草书。」"
            },
            {
              "speaker": "lin",
              "text": "「我理论第二题检查及时，观测第一轮找星慢了。」"
            },
            {
              "speaker": "zhou",
              "text": "「我策略题写完整了，数据处理最后一个图标注不够清楚。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「很好。都记下来，闭幕式前先休息。比赛已经结束，别用复盘继续考试。」"
            },
            {
              "speaker": "narrator",
              "text": "会议结束后，林澈把水瓶递给我。"
            },
            {
              "speaker": "lin",
              "text": "「你刚才说策略题写完整了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。」"
            },
            {
              "speaker": "lin",
              "text": "「我就知道。」"
            },
            {
              "speaker": "zhou",
              "text": "「你为什么这么确定？」"
            },
            {
              "speaker": "lin",
              "text": "「因为你这次没有折准考证。」"
            },
            {
              "speaker": "narrator",
              "text": "我低头看自己的手。准考证平平整整地夹在资料袋里，边角没有被折出痕。原来有些变化很小，小到只有她会注意。"
            },
            {
              "bg": "campCafeteria",
              "clear": true,
              "speaker": "narrator",
              "text": "理论考试后的午餐安排在场馆餐厅。各国队伍坐在不同长桌旁，盘子里是土豆、鸡肉和一小份沙拉。没有人真的吃得很豪放。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "tang",
              "text": "「我以为考完会胃口大开，结果现在只想把土豆也分步骤处理。」"
            },
            {
              "speaker": "wangshu",
              "text": "「先吃。下午还有数据处理。」"
            },
            {
              "speaker": "zhou",
              "text": "「顾望舒，你这句话和老师一模一样。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，沙拉别全剩。」",
              "focus": "lin",
              "clear": true,
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
              "text": "「我在观察当地蔬菜结构。」"
            },
            {
              "speaker": "lin",
              "text": "「观察结束，吃。」"
            },
            {
              "speaker": "narrator",
              "text": "我叉起一片黄瓜。味道很普通，却比刚出考场时容易下咽。林澈把餐巾纸递给我，自己低头把赛事手册翻到下午安排。"
            },
            {
              "speaker": "zhou",
              "text": "「你又看流程。」"
            },
            {
              "speaker": "lin",
              "text": "「看完就不看了。」"
            },
            {
              "speaker": "zhou",
              "text": "「我监督你。」"
            },
            {
              "speaker": "lin",
              "text": "「可以。五分钟。」"
            },
            {
              "speaker": "narrator",
              "text": "五分钟后，我伸手把手册轻轻按住。她抬头看我，没有生气，只是把书合上。"
            },
            {
              "speaker": "lin",
              "text": "「你现在提醒得挺准。」"
            },
            {
              "speaker": "zhou",
              "text": "「观察期表现。」"
            },
            {
              "speaker": "lin",
              "text": "「加一分。」"
            },
            {
              "speaker": "zhou",
              "text": "「满分多少？」"
            },
            {
              "speaker": "lin",
              "text": "「暂时不公布。」"
            },
            {
              "speaker": "narrator",
              "text": "午后的阳光从餐厅玻璃窗照进来，落在她手边的水杯上。我们没有继续对题，也没有装作完全不紧张，只是把饭吃完，把下午的东西重新装好。"
            }
          ]
        },
        {
          "id": "ch8-s6",
          "title": "维斯瓦河边",
          "lines": [
            {
              "bg": "krakowOldTownDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "闭幕式前一天，主办方安排半日城市参观。克拉科夫老城的石板路被夕阳照得发暖，广场上有人拉小提琴，鸽子从教堂前飞起又落下。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "tang",
              "text": "「我宣布，比赛后甜点目标正式启动。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「十五分钟自由活动，不能离开广场范围。」"
            },
            {
              "speaker": "tang",
              "text": "「十五分钟也够我研究菜单。」"
            },
            {
              "speaker": "wangshu",
              "text": "「你研究菜单比研究题面积极。」"
            },
            {
              "speaker": "tang",
              "text": "「题面不能加奶油。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈站在纪念品店橱窗前，看一枚很小的星形徽章。它不是金色，而是有点旧银色，边缘刻着细细的纹路。"
            },
            {
              "speaker": "zhou",
              "text": "「喜欢？」"
            },
            {
              "speaker": "lin",
              "text": "「只是看看。」",
              "focus": "lin",
              "clear": true,
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
              "text": "「你每次说只是看看，都看得很认真。」"
            },
            {
              "speaker": "lin",
              "text": "「认真看不等于要买。」"
            },
            {
              "speaker": "zhou",
              "text": "「那我买。」"
            },
            {
              "speaker": "lin",
              "text": "「为什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「纪念我们没有在波兰机场丢证件。」"
            },
            {
              "speaker": "lin",
              "text": "「这个理由太低了。」"
            },
            {
              "speaker": "zhou",
              "text": "「纪念我们考完了。」"
            },
            {
              "speaker": "lin",
              "text": "「这个可以。」"
            },
            {
              "speaker": "narrator",
              "text": "我买下那枚徽章。她没有推来推去，只接过去放进掌心，看了几秒。"
            },
            {
              "speaker": "lin",
              "text": "「回去以后我把钱转你。」"
            },
            {
              "speaker": "zhou",
              "text": "「不要破坏纪念品的情绪价值。」"
            },
            {
              "speaker": "lin",
              "text": "「那我请你吃甜点。」"
            },
            {
              "speaker": "zhou",
              "text": "「成交。」"
            },
            {
              "bg": "vistulaRiverNight",
              "clear": true,
              "speaker": "narrator",
              "text": "晚上，我们跟着队伍走到维斯瓦河边。河面很宽，灯光从桥上落下来，被水面拉成一条一条。风有点凉，大家都把外套拉链拉高。",
              "bgm": "observatoryNight"
            },
            {
              "speaker": "narrator",
              "text": "林澈站在栏杆旁边，把那枚星形徽章夹在指间。她没有看很久，就把它收进外套口袋。"
            },
            {
              "speaker": "zhou",
              "text": "「紧张结果？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。」"
            },
            {
              "speaker": "zhou",
              "text": "「你不是说比赛结束以后别继续考试吗？」"
            },
            {
              "speaker": "lin",
              "text": "「我在努力执行。」"
            },
            {
              "speaker": "zhou",
              "text": "「执行效果？」"
            },
            {
              "speaker": "lin",
              "text": "「一般。」"
            },
            {
              "speaker": "narrator",
              "text": "我靠在栏杆上，第一次听她承认得这么直接。河风吹过来，她的头发贴到脸侧，她抬手别到耳后，星形发卡在路灯下闪了一下。"
            },
            {
              "speaker": "zhou",
              "text": "「我也紧张。但我这次不是怕自己没资格站在这。」"
            },
            {
              "speaker": "lin",
              "text": "「那怕什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「怕结果太好，回去以后大家期待更高。也怕结果不好，觉得自己浪费了这么多人的时间。」"
            },
            {
              "speaker": "lin",
              "text": "「这两个怕法可以同时存在。」"
            },
            {
              "speaker": "zhou",
              "text": "「你也会？」"
            },
            {
              "speaker": "lin",
              "text": "「会。只是我现在觉得，至少这几天没有浪费。我们把能做的做完了。」"
            },
            {
              "speaker": "zhou",
              "text": "「林澈式结论：先看可执行部分。」"
            },
            {
              "speaker": "lin",
              "text": "「你学得不错。」"
            },
            {
              "speaker": "narrator",
              "text": "她转头看我，眼神比海边那晚更近一点。这里没有国内的堤坝，也没有熟悉的路灯，但我们站在异国的河边，说话的节奏还是一样。"
            },
            {
              "bg": "cgCh8KrakowResultWalk",
              "clear": true,
              "speaker": "narrator",
              "text": "维斯瓦河边的夜风里，林澈侧过身看向我。远处桥灯倒映在水面上，她外套口袋里露出一点银色星形徽章。"
            },
            {
              "bg": "resultCeremonyPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "闭幕式那天，结果在大厅里公布。主持人念名字时，所有人都盯着舞台侧面的屏幕，掌声一阵一阵抬起来。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒拿到银牌。唐越拿到铜牌，站起来时差点撞到椅子。林澈的名字出现在铜牌名单里，她愣了半秒，才在掌声里走上台。"
            },
            {
              "speaker": "narrator",
              "text": "轮到我的时候，屏幕上写着 Honorable Mention。不是奖牌，但我的名字在国际赛的结果页上，清清楚楚。"
            },
            {
              "speaker": "narrator",
              "text": "我站起来，腿有点软。林澈从台侧回来时，经过我身边，很轻地说了一句。"
            },
            {
              "speaker": "lin",
              "text": "「做到了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。做到了。」"
            },
            {
              "speaker": "narrator",
              "text": "闭幕式结束后，大家在场馆门口拍照。唐越举着铜牌喊饿，顾望舒被老师拉去合影，林澈站在一旁，把奖牌绳理平。"
            },
            {
              "speaker": "zhou",
              "text": "「恭喜，林澈同学。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualSmile",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「也恭喜你。」"
            },
            {
              "speaker": "zhou",
              "text": "「我没有奖牌。」"
            },
            {
              "speaker": "lin",
              "text": "「你有名字。」"
            },
            {
              "speaker": "zhou",
              "text": "「这个说法我喜欢。」"
            },
            {
              "speaker": "lin",
              "text": "「而且策略题你写完整了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你还记着这个。」"
            },
            {
              "speaker": "lin",
              "text": "「当然。」"
            },
            {
              "speaker": "narrator",
              "text": "她把那枚旧银色星形徽章别在奖牌绳旁边，低头调整了一下位置。奖牌、徽章、胸牌挨在一起，看起来有点挤，却很合适。"
            },
            {
              "speaker": "zhou",
              "text": "「回去以后，你要不要把这个放错题本封面？」"
            },
            {
              "speaker": "lin",
              "text": "「不要。错题本封面已经够沉重了。」"
            },
            {
              "speaker": "zhou",
              "text": "「那放哪？」"
            },
            {
              "speaker": "lin",
              "text": "「先放文件夹里。回国再说。」"
            },
            {
              "speaker": "zhou",
              "text": "「文件归档又出现了。」"
            },
            {
              "speaker": "lin",
              "text": "「有意见？」"
            },
            {
              "speaker": "zhou",
              "text": "「没有。只是觉得很安心。」"
            },
            {
              "speaker": "narrator",
              "text": "她没有接话，只把视线移开一点。可我看见她嘴角轻轻弯了一下。"
            },
            {
              "speaker": "narrator",
              "text": "回程前的晚上，我把护照夹、证书和赛事手册放进随身包。拉链合上时，我忽然想起出发前那个被她淘汰的厚外套，想起机场的薄荷糖，飞机上的云，波兰夜里的观测场，还有河边她说“我们把能做的做完了”。"
            },
            {
              "speaker": "narrator",
              "text": "这趟路没有把问题都解决。高三还在，志愿还在，回国后还有新的选择要填。但至少在这个夏天，我和林澈真的一起走到了很远的地方，又把彼此带回了可以继续往前的路上。"
            },
            {
              "bg": "airportBoardingGateNight",
              "clear": true,
              "speaker": "narrator",
              "text": "回国前的候机时间比出发时松一些。大家都累得不想说话，唐越抱着一袋当地甜点，顾望舒把证书夹在书里，老师在旁边最后一次清点护照。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "managerTeacher",
              "text": "「护照、登机牌、证书都确认好。回国后还有总结会，不要以为飞机落地就结束。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，我可以在总结会上汇报波兰甜点研究吗？」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「不可以。」"
            },
            {
              "speaker": "tang",
              "text": "「那我私下发表。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈坐在我旁边，奖牌盒放在膝盖上。她没有一直打开看，只是偶尔用手指碰一下盒子边缘，像确认它还在。"
            },
            {
              "speaker": "zhou",
              "text": "「还没适应？」"
            },
            {
              "speaker": "lin",
              "text": "「有一点。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualSmile",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「回去以后学校公告栏估计又要贴红纸。」"
            },
            {
              "speaker": "lin",
              "text": "「你又要站在旁边被人看。」"
            },
            {
              "speaker": "zhou",
              "text": "「这次我可以指着你说主角在那边。」"
            },
            {
              "speaker": "lin",
              "text": "「别。」"
            },
            {
              "speaker": "zhou",
              "text": "「害羞？」"
            },
            {
              "speaker": "lin",
              "text": "「麻烦。」"
            },
            {
              "speaker": "narrator",
              "text": "她把奖牌盒收进包里，又检查了一遍拉链。动作很熟悉，和出发前检查护照夹时几乎一样。"
            },
            {
              "speaker": "lin",
              "text": "「你的证书呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「随身包里。」"
            },
            {
              "speaker": "lin",
              "text": "「拉链。」"
            },
            {
              "speaker": "zhou",
              "text": "「关了。」"
            },
            {
              "speaker": "lin",
              "text": "「很好。」"
            },
            {
              "speaker": "zhou",
              "text": "「我是不是从中等风险降级了？」"
            },
            {
              "speaker": "lin",
              "text": "「观察期。」"
            },
            {
              "speaker": "zhou",
              "text": "「要求很严格。」"
            },
            {
              "speaker": "lin",
              "text": "「国际赛后也不能松。」"
            },
            {
              "speaker": "narrator",
              "text": "广播开始提示登机。我们站起来，队伍慢慢往前挪。来时我觉得这条路长得离谱，回去时它还是很长，但已经不陌生了。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈。」"
            },
            {
              "speaker": "lin",
              "text": "「嗯？」"
            },
            {
              "speaker": "zhou",
              "text": "「回去以后，还一起刷题吗？」"
            },
            {
              "speaker": "lin",
              "text": "「当然。你不会以为拿了证书就不用高考了吧。」"
            },
            {
              "speaker": "zhou",
              "text": "「我只是确认一下合作关系是否续约。」"
            },
            {
              "speaker": "lin",
              "text": "「续。先到期末。」"
            },
            {
              "speaker": "zhou",
              "text": "「这么短？」"
            },
            {
              "speaker": "lin",
              "text": "「表现好再续。」"
            },
            {
              "speaker": "narrator",
              "text": "她说完往前走，像只是随口开了个玩笑。我跟在她后面，护照夹在包里，证书也在包里，那枚星形徽章被她收好。"
            },
            {
              "speaker": "narrator",
              "text": "很多事还没有答案，但这一次，我没有急着把它们全部问完。先回国，先补课，先把下一张卷子做完。至于更远的部分，可以等我们一起走到那里再说。"
            },
            {
              "bg": "krakowOldTownDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "结果公布后的傍晚，老师终于放宽了队伍节奏，让大家在酒店附近走一小段。老城广场的砖路不平，鞋底踩上去有细碎的声音。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "唐越拉着顾望舒去买甜点，老师在后面提醒别走远。我和林澈慢慢落到队伍后面，谁也没有刻意加快。"
            },
            {
              "speaker": "zhou",
              "text": "「你奖牌沉吗？」"
            },
            {
              "speaker": "lin",
              "text": "「还好。」",
              "focus": "lin",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualSmile",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "zhou",
              "text": "「听起来像可以每天戴着上学。」"
            },
            {
              "speaker": "lin",
              "text": "「你想被全班围观可以自己挂证书。」"
            },
            {
              "speaker": "zhou",
              "text": "「证书没有绳。」"
            },
            {
              "speaker": "lin",
              "text": "「我可以借你文件夹绳。」"
            },
            {
              "speaker": "zhou",
              "text": "「不必这么热心。」"
            },
            {
              "speaker": "narrator",
              "text": "她笑了一下，把手插进外套口袋。那枚星形徽章大概也在里面。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，其实我今天听到自己名字的时候，第一反应是想找你。」"
            },
            {
              "speaker": "lin",
              "text": "「找我干什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「确认一下是不是真的。」"
            },
            {
              "speaker": "lin",
              "text": "「你总需要别人确认。」"
            },
            {
              "speaker": "zhou",
              "text": "「以前可能是。今天更多是想让你也听见。」"
            },
            {
              "speaker": "narrator",
              "text": "她脚步慢了一点。广场上有人推着婴儿车经过，轮子碾过石板，声音很轻。"
            },
            {
              "speaker": "lin",
              "text": "「我听见了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。」"
            },
            {
              "speaker": "lin",
              "text": "「念得挺清楚。」"
            },
            {
              "speaker": "zhou",
              "text": "「这评价很林澈。」"
            },
            {
              "speaker": "lin",
              "text": "「那你想听什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「这样就够了。」"
            },
            {
              "speaker": "narrator",
              "text": "她没有再问。我们继续往前走，队伍就在前面不远，陌生城市的晚风从街角吹过来，把比赛后的疲惫慢慢吹散。"
            },
            {
              "speaker": "narrator",
              "text": "晚上回到房间，我把所有东西重新摊在床上：护照、登机牌、证书、赛事手册、队服外套，还有林澈写过的那张时差便签。它们看起来不多，却把这一路的每个节点都压在纸面上。"
            },
            {
              "speaker": "narrator",
              "text": "手机震了一下。林澈发来一张照片，是她已经整理好的文件夹。红色夹层、蓝色夹层、绿色夹层，顺序一点没乱。"
            },
            {
              "speaker": "lin",
              "text": "「你的呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「正在向标准答案靠拢。」"
            },
            {
              "speaker": "lin",
              "text": "「拍照。」"
            },
            {
              "speaker": "narrator",
              "text": "我把东西摆齐拍给她。过了几秒，她回了两个字：合格。"
            },
            {
              "speaker": "zhou",
              "text": "「观察期结束了吗？」"
            },
            {
              "speaker": "lin",
              "text": "「回国再评。」"
            },
            {
              "speaker": "narrator",
              "text": "我看着屏幕笑了一下，把证书放进蓝色夹层。窗外的城市已经安静下来，明天我们会带着这些纸和各自的结果回去，而我知道，有些习惯大概会一起被带回去。"
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
