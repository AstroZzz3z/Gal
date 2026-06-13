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
  silverDragon: { name: "骑在银龙的背上", src: "music/银龙.mp4", startTime: 20 },
  sokoly: { name: "嘿，翔隼", src: "music/翔隼.mp4" },
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
    schoolHallAwardBoard: "assets/bg/school-hall-award-board.png",
    trainStationSummer: "assets/bg/train-station-summer.png",
    campCheckinDesk: "assets/bg/camp-checkin-desk.png",
    universityDormitory: "assets/bg/university-dormitory.png",
    trainingCampLectureHall: "assets/bg/training-camp-lecture-hall.png",
    campCafeteria: "assets/bg/camp-cafeteria.png",
    observatoryControlRoom: "assets/bg/observatory-control-room.png",
    telescopeFieldDusk: "assets/bg/telescope-field-dusk.png",
    dataLabNight: "assets/bg/data-lab-night.png",
    dormCorridorNight: "assets/bg/dorm-corridor-night.png",
    selectionResultBoard: "assets/bg/selection-result-board.png",
    campGateMorning: "assets/bg/camp-gate-morning.png",
    polandPrepDorm: "assets/bg/poland-prep-dorm.png",
    airportInternationalDepartures: "assets/bg/airport-international-departures.png",
    airportBoardingGateNight: "assets/bg/airport-boarding-gate-night.png",
    airplaneCabinNight: "assets/bg/airplane-cabin-night.png",
    airplaneWindowClouds: "assets/bg/airplane-window-clouds.png",
    warsawAirportArrival: "assets/bg/warsaw-airport-arrival.png",
    polishBusHighwayMorning: "assets/bg/polish-bus-highway-morning.png",
    krakowHotelRoom: "assets/bg/krakow-hotel-room.png",
    competitionVenuePolandGate: "assets/bg/competition-venue-poland-gate.png",
    competitionOpeningHallPoland: "assets/bg/competition-opening-hall-poland.png",
    internationalExamRoom: "assets/bg/international-exam-room.png",
    observationFieldPolandNight: "assets/bg/observation-field-poland-night.png",
    teamDiscussionRoomPoland: "assets/bg/team-discussion-room-poland.png",
    krakowOldTownDusk: "assets/bg/krakow-old-town-dusk.png",
    vistulaRiverNight: "assets/bg/vistula-river-night.png",
    resultCeremonyPoland: "assets/bg/result-ceremony-poland.png",
    cgCh7NoticeAfterClass: "assets/cg/cg-ch7-notice-after-class.png",
    cgCh7CampCheckinLuggage: "assets/cg/cg-ch7-camp-checkin-luggage.png",
    cgCh7LectureHallFirstRow: "assets/cg/cg-ch7-lecture-hall-first-row.png",
    cgCh7DataLabSharedScreen: "assets/cg/cg-ch7-data-lab-shared-screen.png",
    cgCh7FailedObservationRun: "assets/cg/cg-ch7-failed-observation-run.png",
    cgCh7CandidateListConfirm: "assets/cg/cg-ch7-candidate-list-confirm.png",
    cgCh8PolandPackingChecklist: "assets/cg/cg-ch8-poland-packing-checklist.png",
    cgCh8AirportPassportExchange: "assets/cg/cg-ch8-airport-passport-exchange.png",
    cgCh8PlaneWindowLinZhou: "assets/cg/cg-ch8-plane-window-lin-zhou.png",
    cgCh8OpeningFlagHall: "assets/cg/cg-ch8-opening-flag-hall.png",
    cgCh8PolandObservationField: "assets/cg/cg-ch8-poland-observation-field.png",
    cgCh8KrakowResultWalk: "assets/cg/cg-ch8-krakow-result-walk.png",
    cgCh8CulturalNightArtificialStarrySea: "assets/cg/cg-ch8-cultural-night-artificial-starry-sea.png",
    cgCh8CulturalNightShadowsOfSokoly: "assets/cg/cg-ch8-cultural-night-shadows-of-sokoly.png",
    cgCh8CulturalNightSilverDragonAnchor: "assets/cg/cg-ch8-cultural-night-silver-dragon-anchor.png",
    gaokaoExamGateMorning: "assets/bg/gaokao-exam-gate-morning.png",
    gaokaoExamRoom: "assets/bg/gaokao-exam-room.png",
    gaokaoWaitingArea: "assets/bg/gaokao-waiting-area.png",
    scoreNightLivingRoom: "assets/bg/score-night-living-room.png",
    volunteerSystemDesk: "assets/bg/volunteer-system-desk.png",
    summerRooftop: "assets/bg/summer-rooftop.png",
    collegeDormDesk: "assets/bg/college-dorm-desk.png",
    cgCh9ReturnCountdown: "assets/cg/cg-ch9-return-countdown.png",
    cgCh9FinalChecklist: "assets/cg/cg-ch9-final-checklist.png",
    cgCh9ExamGateSeparateWays: "assets/cg/cg-ch9-exam-gate-separate-ways.png",
    cgCh9EmptyConvenienceStore: "assets/cg/cg-ch9-empty-convenience-store.png",
    cgCh10ScoreSharedTable: "assets/cg/cg-ch10-score-shared-table.png",
    cgCh10CareerRoomThreeColumns: "assets/cg/cg-ch10-career-room-three-columns.png",
    cgCh10TwoVolunteerForms: "assets/cg/cg-ch10-two-volunteer-forms.png",
    cgCh10HeAdmissionRooftop: "assets/cg/cg-ch10-he-admission-rooftop.png",
    cgCh10BeUnreadCurriculum: "assets/cg/cg-ch10-be-unread-curriculum.png",
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
  cgCh8CulturalNightArtificialStarrySea: "happyEnding",
  cgCh8CulturalNightShadowsOfSokoly: "sokoly",
  cgCh8CulturalNightSilverDragonAnchor: "observatoryNight",
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
          "title": "第一节 错位的赤经差",
          "lines": [
            {
              "speaker": "narrator",
              "text": "下午最后一节自习课刚过半，教室里的声音被压得很低。前排有人把单词书竖起来，嘴唇动得飞快；窗边两个人传橡皮，传到一半橡皮掉地上，滚到讲台边，谁都不敢立刻去捡。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我把物理练习册摊开到“机械振动”那页，实际在草稿纸上写的是地方恒星时。练习册边上压着报名通知，露出一角“CNAO”。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你这伪装水平也太次了。你要真想看物理，好歹别把天文题算得比物理还起劲。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我这叫跨学科复习好不好。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "跨得是挺远，从弹簧振子直接跨到星空了。你再跨一步是不是还得去楼顶占个座？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "楼顶连个空调都没有，不去。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你就是怂。你从上周开始看这个通知，看了六七遍了吧？我买奶茶都没你研究报名截止研究得细。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你买奶茶主要靠直觉和钱包余额。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "所以我效率高。你看你，通知右下角都快被你摸掉色了，还在装“随便看看”。随便看看的人不会把报名地点圈出来两遍。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头一看，报名地点那一栏果然被我用铅笔圈了两圈。第一圈很浅，第二圈压得重，大概是昨天晚自习快结束时画的。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我只是怕看错。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "报名地点都怕看错，那题目你还怎么做？别想太多，报了再说。考不上也没人把你名字贴公告栏上写“此人败给星星”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这么一说我更不想报了。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "那我换个说法。你要是不报，后面每次看见天气好、星星亮，你都得想一句“当时要是交表就好了”。这句比考砸烦多了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我没接话。陈砚平时嘴碎，偶尔说到点上会让人更难反驳。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "草稿纸上那道题来自往年初赛：已知观测地纬度、某时刻地方恒星时、恒星赤经赤纬，求它的时角和高度角范围。我把题干里的“地方恒星时”看成了“当地时间”，顺手又用北京时间修正了一遍。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（地方恒星时等于春分点的时角，时角等于地方恒星时减赤经。这个关系我明明背过。可一到题里，脑子就开始自作主张。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我把时角差写成十五度，越算越顺，顺到最后选项居然也能靠近。那种“错得很像对”的感觉最麻烦，它会让人舍不得停笔。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你这里多算了一次。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "声音从桌边落下来，很轻。我抬头，看见一个女生抱着两本书站在过道里。她袖口卷到同样高度，怀里的书一本是《天文爱好者》，另一本夹着便签，便签边缘被翻得有点毛。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你说我？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。题目已经给了地方恒星时。你这里又从北京时间换了一遍，后面时角会偏。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你确定？我最后好像能选 B。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "选 B 也不代表过程是对的。B 的范围给得那么宽，你算偏一点也能蒙对。推导题要是这么写，第一行就给你画叉了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "第一行就给画叉？这么严格？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "阅卷老师可不会因为你后面算得满头大汗，就假装没看见你一开始就把条件抄错了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完自己也停了一下，好像觉得这句话有点硬，于是把怀里的书往上抱了抱。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我的意思是，你前面球面三角的框架没问题。错在入口，不用全盘否定。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "听着怎么像医生在说‘你身体挺好的，就是挂错科了’？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果只是挂错科，至少还能换。你现在这解法……比较像直接翻二楼窗户进来的。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我愣了半秒。她也愣了半秒，像是不确定这个比喻合不合适。然后她把视线移回草稿纸，耳尖红了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不是，你平时给人纠错都这风格？上来先说人翻窗户？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没紧张。刚才那句可以删掉。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "口头草稿也能删？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以当我没说。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说这句时很认真，认真到我反而笑了一下。刚才被陌生人当面纠错的难堪，被这个小小的停顿冲淡了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那这一行应该怎么改？时角等于地方恒星时减赤经，单位都化成角度，然后再进高度角公式？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "对。注意小时和角度的换算，一小时十五度。还有，赤经如果跨零点，别直接拿两个数相减，先判断方向。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这句提醒，简直就像在事故多发路段旁边立了个警示牌。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为我也在这里摔过。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "啊？你也会在这种地方摔跤？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "会啊。上周我就把赤经差搞反了，算出来那颗星还在地平线下面，我还盯着草稿纸看了半天，怀疑它是不是会自己偷偷升起来。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说到这里，嘴角动了一下，很快又抿回去。原来她也会被一道题弄得怀疑题目和自己，总算不像刚才那样离我很远。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "同学，你也是天文奥赛的？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "太好了。麻烦你多劝劝他，这个人报名之前需要别人推一下，推轻了不动，推重了还会装死。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "喂，你能不能别随便给陌生同学发我的错误使用说明？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我不会推人。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "谢谢。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "但报名表确实快截止了。你如果想参加，最好今天回去就填。照片和家长签字都要时间。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她补这句时没有催促，只像提醒我带伞。可“家长签字”四个字一下把报名从想法拉回现实：要填表，要交给老师，要承认自己真的想试。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你已经填了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "填好了。就是紧急联系人那栏，我妈字太大把格子占满了，我只好重新拿了一张填。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "看来高标准这事儿还是遗传的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那张表格的格子确实小。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她一本正经替妈妈辩解。我把那行错式划掉，重新写下“LST - RA”。旁边陈砚把面包袋揉成一团，轻轻丢进垃圾桶，没中，又灰溜溜捡回来。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "看见没，连垃圾桶都提醒你，第一次不中可以再投。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这个例子很难让人振奋。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "但逻辑没错。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你还帮他说话？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我只评价逻辑。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "放学铃响起，教室从压低声音的池子变成被搅开的水。林澈抱着书往门口走，走了两步又停下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "周行，对吧？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "嗯。你刚才从陈砚那里听到的？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他叫了。林澈，高二一班。你那题重写完，可以把时角范围再检查一遍。今天别熬太晚。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我们才第一次说话，你已经开始管我熬夜了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有管。熬夜以后第二天会把单位看错，这个很常见。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完马上转身，像怕我继续拿这句话开玩笑。星星发卡在走廊灯下闪了一下，很快淹进人群里。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（我把报名通知抽出来，第一次没有把它塞回练习册下面。那张纸轻得很，拿在手里却像一件已经开始发生的事。）",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch1-s2",
          "title": "第二节 临时集训",
          "lines": [
            {
              "speaker": "narrator",
              "text": "第二天放学，我原本打算直接去物理办公室交表，走到楼梯口又折了回来。原因很丢人：表格上的“参赛经历”空着，我不知道该写“无”，还是写得委婉一点，比如“正在积极建立”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你站在门口挡了三个人。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我在进行报名表最后审核。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "审核结果？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "卡在参赛经历。你写了什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "校科技节天文知识竞答二等奖。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "还有这种比赛？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有。题目里有一题问“月球背面永远看不到太阳吗”，很多人选了能。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我也差点选能。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以你可以写“暂无正式经历”。别写太花。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么知道我想写花？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为你刚才盯着那一栏，表情像在给自己编简历。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头把“暂无”写上。林澈站在旁边，手里拿着自己的报名表，表角被文件夹压得很平。她看起来已经准备好了一切，只有笔帽被她握在手心里转来转去，暴露出一点不太明显的紧张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是……紧张了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没紧张？那你笔帽都快转出火星了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那是因为笔帽有点松。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "笔帽松跟你紧不紧张又不冲突。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你先把表交了，再观察我的笔帽。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把自己的表往文件夹里一塞，动作比平时快一点。我发现林澈的“没有”通常不太可信，至少在紧张这件事上。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "两位报名选手，在教室门口研究人生呢？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星从走廊另一头过来，手里拎着一只帆布袋，袋口露出几本厚得让人想后退的资料。她走路很快，像学校走廊自动给她开了一条通道。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "报名表先给我，我统一交物理组。学校今年走社团推荐，不然办公室老师会被你们一个一个问到崩溃。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，社团推荐听起来很正式。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "正式的是那个章，狼狈的是你们这帮人。你们现在属于章还没盖呢，自己先慌上了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "集训名单确定了吗？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "目前就你俩，加上隔壁班一个高一的还在犹豫。那小孩说周末要去弹钢琴，我就让他先回去想想，到底是更怕我这儿的天文卷子，还是更怕他钢琴老师。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这届队伍人数听起来很节能。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "人数少有好处，崩溃时方便逐个捞。坏处是没人能躲在平均分后面。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星把我们带到空教室。黑板上还残着上一节课的化学方程式，窗台摆着半盆快干死的绿萝。她把帆布袋里的资料倒出来，厚厚一叠，从初赛真题到星图册，从手写错题到打印表格，像给桌子加了一层负重。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "先说明，CNAO 初赛靠兴趣只能撑前十分钟。后面是基础、速度、稳定性，还有一点点别把自己吓死的心理素质。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "最后一项我可能需要重点训练。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "看出来了。你属于一紧张就讲话的人。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他也会一紧张就跳步骤。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你们能不能不要这么快建立我的问题数据库？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "放心，你不是唯一一个。林澈的问题也很明显。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你看到题干模糊会想把出题人请来补充条件。现实里出题人不会来，卷子也不会多给你二十分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果条件影响答案，就应该写清。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "道理是这么个道理。但竞赛训练就是得两头兼顾：你得知道严格答案长什么样，还得知道在时间不够的时候怎么去抢分。以后有得你折磨的。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈没有立刻回嘴。她低头看训练表，手指沿着第一栏“时间系统”滑到第二栏“星图识别”，最后停在“限时策略”上。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那训练表上能不能专门加一列‘省略前提’？限时训练的时候我先标出来，复盘的时候再补全。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以。你看，这就叫把焦虑改造成工具。周行，学着点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我也有工具。我可以负责把复杂问题问得很基础。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个确实有用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才是不是夸我了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "是评价功能。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "行，四舍五入就算你在夸我了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "数学上不能这么四舍五入。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星在黑板上写下训练安排：周三基础课，周五限时练，周末晴天观测，雨天图书馆。她写字很大，粉笔末落在讲台上，像一场很现实的小雪。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "第一阶段重点：地方恒星时、赤经赤纬、时角、高度角，星图找星，单位换算。别小看这些，初赛里很多人挂在“我以为我会”的地方。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我昨天刚从那里挂下来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还没完全下来。你那道题要重写。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我以为你忘了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有。你说要改。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我什么时候说的？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你把错行划掉了，等于说了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说这话时眼神很直，像草稿纸也能作证。我忽然意识到，被她盯上的错误很难逃走。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好，你们已经具备互相监督的雏形。再补一条，训练期间不准把“我可能不行”当万能挡箭牌。可以说哪里不会，不可以整个人投降。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "如果真的很多不会呢？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那就列清单。不会是状态，清单是行动。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我可以把天体力学列出来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你还真列？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不列的话，它也不会自己变会。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把便签撕下一小张，写了三行：椭圆轨道、开普勒第三定律应用、近似条件。写完后又抬头看我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你要不要也列？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我列出来可能会占两张便签。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那就先写前三个。纸不够我还有。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你连这个都准备？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "便签又不重。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把一小叠浅黄色便签推到我面前，推完又补了一句。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没让你现在全补完。先写下来，别老在脑子里吓唬自己。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是关心我？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我是在保护集训进度。你如果被自己吓退，训练表要改。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "林澈同学，你这句话其实可以翻译成关心，就是包装得太硬核了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "学姐。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈叫了一声，声音不大，像提醒夏南星别再拆她。她低头把自己的便签贴进文件夹，耳尖又红了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我也保护一下集训进度。我参加。先声明，我基础真的乱。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "知道。你报名表上不用写，脸上写着。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "咱们社团的招新体验也太直接了吧？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "醒醒，这不是招新，这是备赛。想要体验好，等你们第一次自己找到角宿一的时候再说。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果周五天气不错，傍晚我们可以先试试找春季大曲线。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "春季大曲线听起来比限时卷友好。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "它只是在天上，没办法给你打分，所以显得友好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在报名表末尾签下名字。笔尖划过纸面时，刚才那点虚劲还在，可我旁边有一张训练表，有一叠便签，还有一个会把“关心”包装成“保护进度”的林澈。事情好像没变简单，只是终于有人一起把它摊开了。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch1-s3",
          "title": "第三节 第一张训练表",
          "lines": [
            {
              "speaker": "narrator",
              "text": "天文社教室在实验楼四楼最里面。走廊灯坏了一盏，门口贴着旧海报，“本周观测：木星合月”的日期停在去年十一月。海报角落被谁画了一个小小的哭脸，大概是那天阴天。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "咳，这地方还挺有……历史感的。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "麻烦准确描述一下，这叫经费不足感。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "门把手有点松，开门的时候别太使劲，上次差点被拽下来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不是吧，你连门把手松不松都提前测过了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我来早了十分钟，试过。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈坐在靠窗的位置，椅子下面垫了一张废报纸。她见我看过去，抬手指了指另一把椅子。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那把干了。你坐那边。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你不是说不管我吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "坐着湿椅子会影响做题效率。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "懂，还是保护进度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你知道就好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把一支备用黑笔放到桌子中间，又像想起什么似的往自己这边收了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那支笔是给我的？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你昨天笔袋里只有一支黑笔。万一断墨会很麻烦。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以是给我的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "借。用完要还。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我接过笔，笔身上贴着小标签，写着“0.5 黑”。她连笔都像资料一样归档，可标签边缘贴歪了一点，终于让我找到一点普通人的痕迹。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "今天先立规矩。训练表每周改一次，按结果调整。别把它当圣旨，圣旨一般不管你们有没有月考。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "月考也要考虑？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "当然。你们是高中生，不是被天文社秘密招募的全职选手。作业、月考、家长、晚自习，全都会挤时间。计划如果不考虑这些，三天后就废。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那周二晚上最好不要排太重。我们班数学小测通常在周三。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你们一班也这样？我们班周三数学小测像天气一样稳定。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "记录：周二轻复盘，周三基础课。周五限时卷，周末看天气安排观测。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星把表格摊开。第一列是日期，第二列是主题，第三列是产出。产出这一栏很残酷：不是“学习”，是“完成十题并写错因”“画一张春季星图”“复述时角公式推导”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "产出栏让我有点紧张。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "紧张正常。模糊目标看起来舒服，清楚目标会扎人。备赛要扎一点。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "“复述时角公式推导”可以放第一周。周行昨天刚错过，趁热修。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你说“趁热修”的语气像我是一台刚冒烟的机器。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还没冒烟，只是有味道。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "怎么感觉你今天攻击性有点强啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我这叫配合集训的高压气氛。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完低头写字，嘴角却没压住。这个笑很短，夏南星看见了，没拆穿，只在训练表旁边加了一栏“互查”。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "互查不是互相挑刺。每次只看三件事：条件有没有漏，单位有没有错，结论能不能复述。超过三件你们会吵。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这么确定？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "我去年见过。两个学长为一道太阳高度角题吵了半小时，最后发现一个人把北纬看成南纬。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那属于基础错误。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "对，但吵的时候谁都觉得自己在捍卫科学。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "训练表写到一半，夏南星忽然让我们各自写“最怕的题型”。我本来想写“全部”，被林澈看了一眼，只好认真一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "时间系统、球面三角、星图识别。还有，限时卷。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "限时卷不是题型。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "它是精神题型。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以写成“时间分配”。这样能训练。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你已经开始帮我把精神问题翻译成训练项目了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不然学姐会让你重写。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "林澈说得对。林澈，你的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "天体力学，尤其是椭圆轨道参数。还有……不完整题干。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "后面这个也翻译一下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "条件判断。题目缺省时，我不确定该不该使用常见近似。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "比如近圆轨道、小角近似、忽略大气折射？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。还有观测题里的地平高度、光害、纬度变化。题目不写，我就会想它到底让不让默认。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我以前遇到这种题，一般默认出题人是好人。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "出题人也可能只是没写全。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你们两个刚好一左一右。周行容易默认太多，林澈容易默认太少。训练目标不是把你们变成同一个人，是让你们互相补上盲区。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我看了林澈一眼。她也正好看过来，表情很轻微地一顿，随即把目光移回训练表。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那互相讲错题怎么安排？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "每天一题太多吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "对你来说可能是饭后散步，对我来说像饭后负重跑。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那隔天一题。讲的人必须说清楚三件事：原来怎么想，断在哪里，改完以后怎么检查。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "听的人呢？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "听的人要问一个问题。不能只点头。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "如果我问的问题特别基础？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "基础问题也算问题。装懂比较麻烦。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她这句说得很自然，没有一点居高临下。我在训练表上写下“隔天互讲错题”，字写到“互”时停了一下。这个字比我想象中更重。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "再加一条，错题本不许写“粗心”。写了就重写。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“一时脑抽”呢？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "重写。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“被单位刺客偷袭”呢？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以当标题，正文写清楚单位怎么错。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "单位刺客可以分三类：角度弧度、小时角度、千米天文单位。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你居然认真分类了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为它真的常出现。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把“单位刺客”四个字写进侧栏，写完后似乎觉得太幼稚，又用笔轻轻画了个括号，补上“单位换算错误”。幼稚和严谨在同一行挤着，倒很像我们这个临时集训。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "今天最后十分钟，周行复述地方恒星时和时角关系。林澈听，听完只指出一个最关键的问题。别一口气指出五个，他会碎。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我还在这里。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我只指出一个。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "谢谢你控制火力。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我站到黑板前，粉笔拿在手里，忽然比做题时还紧张。地方恒星时、赤经、时角，这三个词我昨天背得滚瓜烂熟，一开口却像排队时挤成一团。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "地方恒星时可以理解为春分点的时角。对某颗恒星来说，时角 H 等于地方恒星时 LST 减赤经 RA。求高度角时，再用 sin h 等于 sin φ sin δ 加 cos φ cos δ cos H。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "关键问题是单位要统一。H 如果用角度，RA 也要先换成角度；如果用小时，后面进三角函数前要换。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我说漏了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "但关系说对了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她没有急着补第二个问题，真的只说了一个。像她刚才承诺的那样。夏南星在表格末尾打了个勾。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "第一天完成。你们没有把训练表写成装饰品，这已经比很多计划强。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "听起来是很低的评价。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "适合第一天。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "明天我把天体力学那题带来。你要是看不懂，可以先问。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是提前给我台阶？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "是提前减少明天浪费的时间。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "行，保护进度。明天见。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她收拾笔袋时，把那支借给我的黑笔敲了敲桌面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "笔。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "还你。你看，我还是有信用的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "暂时记录一次。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把笔放回笔袋，拉链拉到一半卡住了。她用力拉了两下没动，眉头皱起来。我伸手帮她按住布边，拉链终于顺过去。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "谢谢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不用。保护拉链进度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个说法不成立。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她嘴上这么说，走出教室时却轻轻笑了一下。训练表被她夹在文件夹里，角落露出我们两个名字。第一天的集训没有什么热血宣言，可那两个名字挨在一张表上，我就没法再把这件事当成一个人的犹豫。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch1-s4",
          "title": "第四节 楼顶的春季大曲线",
          "lines": [
            {
              "speaker": "narrator",
              "text": "周五傍晚，晚自习前的校园有种短暂的松动。食堂门口还排着队，操场上有人赶着最后十分钟投篮，实验楼楼梯间却一路往上变安静。越接近天台，风声越明显。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我现在有一种要去进行秘密任务的感觉。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "秘密任务第一条：别把天台门弄得太响，教导主任办公室在楼下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "第二条：不要踩排水槽。上次有人踩滑了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "还有第三条吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有。不要问“那颗最亮的是不是北极星”。大多数时候不是。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是预判我发言？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "常见问题。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "天台门一开，风一下灌进来。我下意识缩了缩脖子，林澈把外套拉链往上拉到下巴，拉完又像没事一样把记录本拿出来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你冷？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还好。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你拉链都快拉到鼻子了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "风大。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "她冷，但她嘴硬。周行，把器材箱放这边，别挡门。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "学姐。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "好，我不翻译。今天观测流程：先肉眼适应，十分钟内少看手机。红光手电只照地面和记录本，不照人脸，不照别人眼睛。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "为什么红光可以？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "红光对暗适应影响小一些。你用白光一晃，前面适应的时间基本白费。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "懂了。今天我的手机从此失去发光权。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我把手机扣在记录本下面。林澈从口袋里拿出一小包薄荷糖，递给夏南星一颗，又停在我面前。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要吗？楼顶风大，含一颗会舒服点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是远征装备啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我小时候上楼看星，风一吹就咳。后来习惯带。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我接受专业建议。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "薄荷糖有点凉，含进嘴里时，我才发现自己刚才一直在紧张地咬后槽牙。林澈把糖纸折成很小的方块，塞进外套口袋，动作熟练得像做过很多次。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "先找北斗。别急着报答案，先看形状。城市光害重，暗星会被吃掉，越急越看不见。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我现在看到很多点，每个点都像在考我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "先别把它们当题。找勺子形状，四颗斗身，三颗斗柄。斗柄有弯，不是直线。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你说得容易。我看天的时候，所有点都在假装自己属于北斗。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你先看我手指方向。不要盯我的手，看手指延长线。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她站到我旁边，手指抬得不高，怕挡住我的视线。风把她额前碎发吹乱，她抬手按了一下，没按住，又有点烦地把发卡重新夹紧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "今天风好烦。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你终于说它烦了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "风烦和观测没关系。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "有关系，影响你教学心情。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你快点找到北斗，降低影响。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我顺着她指的方向找。最开始只有一片深蓝灰色，后来几颗星慢慢从背景里分出来。斗身歪着，斗柄往外弯，确实像一把被人随手搁在天上的勺子。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "看到了。四颗加三颗。虽然这把勺子质量一般。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "形状对就行。天上不负责按人类餐具标准排列。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "找到北斗以后，顺着斗柄弧线往外延，找大角星。大角星颜色偏橙，亮度够，今天应该能看。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "偏橙这个描述很微妙。我怕我看久了，把心理暗示看成颜色。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以多对比。旁边那几颗偏白，大角星会暖一点。看不出来也没关系，先记录“亮星，疑似大角”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你对“疑似”这个词很宽容。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "观测记录本来就要允许不确定。直接写错比写疑似麻烦。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把自己的记录本给我看。上面每一行都有时间、方位、高度估计、天气，后面还写着“云遮，未确认”“光害强，待复查”。她不是每次都成功，只是每次都留下能回头看的痕迹。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你以前一个人也这么记？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "一开始没有。小时候只会写“今天没看到”。后来发现这样没用，因为不知道为什么没看到。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以你开始记路灯、树、云量？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。还有保安什么时候巡逻。小区楼下有个位置刚好避开两盏路灯，但九点以后会被赶回家。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你小时候还挺执着。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也没有。经常看不到就回去写作业。只是第二天还会想看。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说这句时没有抬头，像怕显得太认真。天台上的风吹得记录本纸页乱翻，她用手掌按住，指尖被冻得有点红。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "手冷？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不冷。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这句可信度比刚才低。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你有手套吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没有。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以问了也没用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我可以帮你压纸。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我把手按到她记录本另一侧。林澈看了看我的手，又看了看纸页，最后小声说了一句。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你别按到字。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "收到，专业压纸，不越界。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "纸页终于安静下来。我们一人按一边，中间是她画到一半的春季大曲线。北斗到大角星，再往南到角宿一，线条很轻，像怕打扰那些星。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "角宿一低一点，今天可能被楼边光影响。你顺着弧线走，别折。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那个？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "太高了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那这个？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那是飞机。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "它刚才看起来很有恒星气质。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "恒星不会自己横穿过去。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我盯着那片天空看了半天，眼睛有点酸。林澈没有催，只偶尔提醒我用余光看。楼下晚自习预备铃响了一次，风把铃声拉得很薄。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "找不到的时候你会烦吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "会。尤其别人说“这有什么好看的，就几个点”的时候。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "有人这么说过？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "同学、邻居小孩，还有我表弟。他说我在楼下吹风像等外卖。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "表弟很会破坏气氛。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "后来我让他帮我拿红光手电，他拿了三分钟就嫌无聊。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以你现在让我拿纸，算是高级信任？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "算临时劳动力。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "行，听起来也不错。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她终于笑了。笑意很短，却没有马上收回去。就在那一瞬间，我余光里低处有一颗亮点稳住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我好像看到了。大角星往南延过去，偏低，白一点。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你先把视线移开一点，再看回来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "还在。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那就是角宿一。记时间，方位大概东南偏南，高度角估二十度出头。光害：明显。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚确认完就开始报记录项。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不然等会儿会忘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你能不能给我三秒钟高兴？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "……可以。三秒。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她真的停了三秒。风声、楼下铃声、远处车流声混在一起。三秒过后，她用笔帽轻轻敲了敲我的记录本。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "现在写。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这人好严格。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "三秒已经到了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头写下“角宿一，林澈辅助确认”。写到“辅助”时，我故意把字写得很小。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "太小了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你连这个都看见？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "观测记录要能读。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我怕以后翻到这一页，发现自己第一天全靠你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "全靠我你就不会自己找到北斗和大角星。角宿一是我帮你确认，前面是你自己找的。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说这话很平，像在纠正记录，不像安慰。可这比安慰更有用。她没有把我的努力说大，也没有把我的笨拙说没。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "两位，记录写完了吗？晚自习快开始了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "写完了。春季大曲线，首次确认，辅助人林澈，压纸人周行。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "压纸人不用写。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我觉得这是重要贡献。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以写在队内趣闻，不进观测记录。收器材。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "下楼前，林澈把剩下的薄荷糖又递给我一颗。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "庆祝角宿一？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "防止你晚自习犯困。你刚才吹了风，回教室容易困。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这也是保护进度？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我懂。那谢谢进度管理员。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "别乱叫。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把糖塞到我手里，转身先进楼梯间。楼梯里的灯比天台亮，我忽然看见她耳尖又红了一点。那天晚自习，我的记录本摊在物理练习册旁边，春季大曲线画得歪歪扭扭，可角宿一的位置被我圈得很清楚。旁边还有一小行字：下次自己确认。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "雨从午休下到放学，操场边缘积了一圈水，篮球架下面没人，连平时最不怕冷的男生都缩在走廊里。天文社群里，夏南星先发“楼顶集合取消”，一分钟后又发“别高兴，图书馆二楼”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐这消息发得也太有杀伤力了吧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "杀伤力在哪一句？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "就那句‘别高兴’啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "看来她把你拿捏得很准。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "别乱说，我只是在为那台旧望远镜不用淋雨感到由衷的欣慰。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "人家望远镜有防尘布，你可没有。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是关心我会淋雨？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我是提醒你伞在书包侧袋，刚才露出来了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头一看，伞柄确实从侧袋里探出一截。林澈已经撑开自己的伞，伞面是很普通的深蓝色，边缘有一小块透明胶补过的痕迹。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你的伞也有维修记录。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "上周不小心被门夹了一下。不影响用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你对物品的评价都很务实。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "能用就行。走快点，图书馆靠窗位置会被占。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "图书馆二楼自习区比平时更满。雨天让所有运动社团都失去场地，也让所有人突然想起自习的好。夏南星抢到靠窗四个座位，桌上已经放好卷子，卷角用水杯压着。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "今天练节奏。二十题，四十五分钟。分值不重要，重要的是你们怎么放弃、怎么标记、怎么回头。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“怎么放弃”听起来很成熟。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "学不会放弃的人最后只会被第六题活活拖死。周行，别看我，我没针对你，我只是随便举个例子。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "但第六题可能真的会拖死他。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你们俩是不是偷偷串通过台词？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没串通。谁让你昨天验个单位验了那么半天。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我翻开卷子，第一眼就看见第六题有一堆角分秒换算。夏南星没有笑，林澈也没有笑，可我总觉得这张卷子在笑。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "规则：会做的先做，卡住超过三分钟打星号，超过五分钟必须走。林澈，条件不全先做“竞赛默认版”，旁边标疑点。周行，看到熟公式先圈条件，不许直接代。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我怎么感觉自己被写进考场须知里了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这样对你比较安全。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你也被写了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以我没笑你。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "计时器开始。雨声打在玻璃上，远处有人翻阅杂志，塑料书皮发出轻响。我第一题写得还算顺，第二题开始检查单位，第三题看到“地方恒星时”时心里一紧，又强迫自己把题干读完。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（先圈条件。LST，RA，Dec，纬度。别急。公式不会跑。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第六题果然像夏南星预告的那样跳出来。题目要求把某颗星的赤经由时分秒换算成角度，再和地方恒星时比较，求某时刻时角。我算完一遍，总觉得少了十五分，于是又验一遍。验到第三遍，计时器已经过去十二分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "咳。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈很轻地咳了一声。我抬眼，她没有看我，只用笔尖敲了敲自己的手表。她没说话，可意思清楚得很：走。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（她怎么连我卡住都能听出来？）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在第六题旁边打了星号，咬牙跳到第七题。跳过去那一刻很难受，像把没拉上的书包丢在走廊里。但后面三题反而救回来一些。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈写得很快。她的卷面有一套自己的秩序：显式条件用横线，疑似近似用小三角，完全不确定处画问号。第十四题，她停住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（她停了。小三角还是问号？）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我不该分心，可余光还是瞥见她把题干读了三遍。她的手指压在“可视为”三个字上，像那三个字随时会从纸上逃跑。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "还有十分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话像从天花板掉下来。我最后五题还有三题空着，第十七题只写了公式，答案栏干干净净。林澈第十四题旁边已经有两套推导，第三套刚开头。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "停笔时，我的手心有汗。图书馆空调明明有点凉，我却觉得背后发热。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "交换卷子。先别哀悼，哀悼放到复盘后。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，你把流程安排得很周到。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你第六题没有走。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我走了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你耗了四分钟才走。规定明明是三分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你一边做题还能一边监控我？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "主要是你那橡皮来回擦了三次，声音太明显了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "好家伙，原来我的焦虑还自带声效啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "下次擦第二次就标星。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把我的第六题圈出来，红笔却没有下得很重。圈完后又在旁边写：三分钟上限，先后置。字很小，像怕我看着太难受。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你突然写得这么温柔，我都稍微有点不适应了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要是不适应，我可以重写得凶一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "别别别，这样就挺好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我看她的卷子。第十四题是一道观测误差题，题干说“短时间内观测纬度可近似不变”，却没说明短时间的尺度，也没给误差允许范围。她写了三种情况，最后答案选了 B，旁边却写着“不确定默认强度”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你其实选对了吧？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "答案可能对，理由不够稳。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "如果我是你，我会先庆祝答案对。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你会，所以你第六题耗了四分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这两件事有关吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "都和确认方式有关。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完，自己也像觉得太硬，补了一句。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不过你后面第八题做得快。跳过去以后没有乱。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才是不是又夸我了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我在复盘事实。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "今天的事实很友善。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "两位，互相吹捧可以留到晚点再聊。现在乖乖写错因去。每人三条，按这个格式：错误动作，触发原因，下次动作。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "错误动作：第六题反复验单位。触发原因：昨天留下心理阴影。下次动作：三分钟到就标星。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "“心理阴影”换成可执行描述。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不如写‘担心再次混用单位，导致对同一个换算重复验证’。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这语气简直像是在给我写病历单。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "比心理阴影好改。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我照她的话写下去。林澈也在自己的错因栏写：第十四题，条件不完整导致分支过多；触发原因，未先判断题目意图；下次动作，先写竞赛默认版，疑点后置复盘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这条很成熟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "写起来成熟，做的时候未必。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "至少它有机会救你下一次。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也救你。你看到我停太久，可以提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我提醒你？我怕你当场用近似条件砸我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我不会砸人。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "会用眼神。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你提醒时小声一点。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很认真。我愣了一下，才意识到这算是她把一部分控制权交出来：如果她卡住，我可以提醒她往后走。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "这就对了。备赛搭档不是互相证明谁对，是在对方掉进老坑时拉一下。拉之前说清楚，别把人吓一跳。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "窗外雨线还在往下滑。卷面上的空白题和红圈都没消失，可它们终于从一团丢脸的东西，变成几条能写进训练表的动作。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "顾望舒来的时候，图书馆门口正好有人收伞。她从一片湿漉漉的声音里走过来，文件夹却干得很，像雨水也知道不要碰她的卷子。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "介绍一下，顾望舒。附中天文社，今年跟我们交换题库。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不是交换社团，是交换训练材料。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "行，精确版介绍。她很强，强到老师让她帮忙校答案。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个介绍对我们不太友好。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "校答案不代表不会错。只是错得会少一点。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她坐下后没有寒暄，先看了我们桌上的限时卷。红笔帽被她咬开又立刻拿下来，像意识到这个动作不够正式。林澈看见了，表情松了一点。原来满分选手也会咬笔帽。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "第十七题谁做了？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我写了半行，严格来说，它还没拥有完整人生。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我做到推导第一步，后面时间不够。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "这题标准答案有问题。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "标准答案有问题这句话，听着像雨天突然放晴。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "别高兴。标准答案有问题，不代表你们会做。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "问题在近似条件？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。题干描述“近圆轨道”，但没有给偏心率范围。答案直接把二阶项丢掉，只有 e 很小时成立。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "e 是偏心率？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。圆轨道 e 等于 0，椭圆轨道 0 到 1。近圆就是 e 很小，但“很小”要看精度。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "如果选项间距很大，粗略近似还能用。可这题 C 和 D 的差距不够，二阶修正可能改变判断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以它危险在看起来像普通套公式题。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。越像熟题，越容易漏前提。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈把自己的草稿纸往前推了一点，又停住。她想问，手指却按在纸角上，没有立刻开口。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才不是想问二阶项吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我在想怎么问。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可以先问人类版。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你别打岔。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她小声说完，像怕顾望舒听见。顾望舒却已经把红笔停在偏心率符号旁边。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "可以直接问。我们交换题库，本来就是为了暴露问题。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那我问。实际考试里，如果题目没给精度，只说“近圆”，什么时候可以接受直接用一阶近似？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "看三件事。题目背景、选项间距、计算目标。如果只是定性判断，一阶够；如果是数值比较，先估二阶项量级。CNAO 初赛一般不会要求完整展开，但会考你知不知道自己省了什么。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以限时卷可以先写一阶，但要标“忽略 O(e²)”？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。你不用在卷面上写成论文，至少心里要知道那一项被放进了误差。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "O(e²) 是“后面还有东西”的意思？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以这么理解。表示二阶及以上小量。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我喜欢这个记号。它很诚实，承认自己先不管后面的东西。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "喜欢也要会用。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "顾望舒说话风格比较节能，大家适应一下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "适应中。她的红笔已经在我心里留下阴影。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "红笔不重要。重要的是你们愿不愿意让别人看见错因。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话让桌面静了一下。错因比错题更难拿出来，因为错题还能怪知识点，错因会直接露出人的习惯。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果分类不确定，也要给你们看吗？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "要。分类不确定说明它可能是混合错误。混合错误最有价值。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "听起来像你们附中连错误都要挑优质的。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "普通错误也要收。只是优先处理会重复出现的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "比如单位换算、近似条件、题干默认？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "还有时间分配。很多人知道严格解，却死在卷面时间。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈的笔尖停了一下。我知道她听进去了。她昨天写了三种情况，答案却差点来不及填。顾望舒那句“死在卷面时间”没有指名，落到她面前却很准。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我和林澈刚好可以交换问题。我负责死在快，她负责死在细。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个总结不准确。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "但有参考价值。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "……",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "她居然同意了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有同意。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你们先别忙着给自己贴标签。明天开始题库交换，每组交五道题，不要只交漂亮题。尤其林澈，不要把“不确定”全修到确定才拿来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果拿出来后发现分类错了呢？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "那就改。题库不是出版物。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你听见了，题库不是出版物。可以有修订版。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你不要用这句话给自己偷懒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我还没开始偷懒，你已经预防了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为你有这个倾向。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完把自己的第十四题复盘推到顾望舒面前。动作不大，却像把一块没打磨好的东西拿出来给别人看。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这题我标了“条件不完整”。你帮我看一下，是近似条件问题，还是观测前提问题？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "两者都有，但优先归到观测前提。近似只是后续处理。你前面卡住，是因为没先判断题目想考哪层。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个“嗯”听起来有点不服。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我服。只是需要回去改分类。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不用今晚全改。先标待复核。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "待复核会不会显得很乱？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不会。装作不乱才乱。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈低头写下“待复核”。字比平时小一点，却写得很稳。她把笔帽扣上时，轻轻呼了一口气。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才像完成了一次心理极限运动。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有那么夸张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那就是小型极限运动。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你能不能不要给我的笔记活动命名？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可以。顾望舒，你们附中题库明天几点交接？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "午休。地点你们定。还有，便签上别写“欢迎挑错”这种客套话，真的写了我会当真。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我更要写了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "别写太大。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她嘴上拦，眼睛里却有一点笑。顾望舒收起红笔，雨声还在窗外连成一片。我看着桌上多出来的“待复核”和“O(e²)”，忽然觉得这场雨天训练比楼顶观测更累，也更像真正的备赛。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第二天午休，我把饭盒推到课桌左上角，错题本摊在右边。鸡腿被我郑重放到离题库最远的位置，像一颗需要隔离的高油脂天体。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你现在吃饭都配卷子了？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "备赛生活，营养均衡。左边蛋白质，右边精神损耗。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林澈同学也来我们班？你们天文社是不是打算占领午休？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我来送题库，不占领。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "那你们继续。我去小卖部占领最后一根烤肠。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "陈砚走之前还探头看了一眼林澈的笔记，看到密密麻麻的分类，立刻肃然起敬。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "周行，你跟着人家好好学。她这笔记看起来能把你从错误边缘拽回来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你快去拯救烤肠吧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他说得也没错。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "哪一句？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你确实需要被拽一下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你今天攻击性稳定。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我昨晚睡够了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把饭盒放到一边，打开文件夹。封面便签写着“附中题库第一批”，下面那行“未完全校对”被她用浅灰色笔描了一遍，像怕别人看不见。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这行字能不能别写这么显眼？顾望舒看到会不会直接开始校你？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "她本来也会校。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "有道理。那我写“欢迎挑错”也不算挑衅。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你写小一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "为什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "太大像你真的很欢迎。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "难道我们不欢迎？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "欢迎和被红笔写满是两回事。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说这句时皱了下鼻子，很轻，几乎看不出来。可我看出来了。林澈也会怕红笔，只是她怕的方式是提前把分类做得更细。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你昨晚几点睡？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "十一点四十。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你昨天说不要熬夜。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "十一点四十不算熬太晚。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个“太”字很可疑。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有一题分类卡住了。我不想今天拿过来还乱着。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可顾望舒昨天说可以待复核。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "知道是一回事，做得到是另一回事。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话她说得很小声，像不太想承认。她把第三类“近似条件”那页翻出来，题号旁边有一个小问号。问号写得很端正，端正到有点委屈。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这题我们一起看。先按限时版走，能归哪里先归哪里，别今晚再重写一遍。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你怎么知道我会重写？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我现在也在建立你的问题数据库。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不许乱建。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "第一条：看见不确定会想重做。第二条：嘴上说不冷，实际会把拉链拉到鼻子。第三条：借笔会强调“借”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "前两条删掉。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "第三条保留？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "第三条是事实。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她伸手把我错题本上的标题改成“临时模板”。我本来写的是“万能模板”，被她划得很果断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "万能两个字这么不受欢迎？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有万能模板。题目会变。你如果相信万能，下一次就会跳条件。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那“临时模板：先看条件，再看近似，再看主项”？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以。再加“复盘补误差来源”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你看，我们这个模板越来越像你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "像我有什么问题？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没有，比较严谨，偶尔有点凶。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有凶。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "刚才那个眼神就很有说服力。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那是提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她嘴上不认，手却把我的错题本往自己这边拉了一点，认真帮我把四步写清楚：圈显式条件、标默认近似、先算主项、复盘补前提。写完后又加了一句：限时版不等于乱省。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句像写给我的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也写给我。限时版要能让我放心用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我补一句：复盘版不等于重写整个人生。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "……",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不行？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "太夸张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那写“复盘版不重做无关步骤”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个可以。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "午休教室里很吵。有人趴着睡，外套盖在头上；有人边吃饭边背政治；后排两个同学小声讨论游戏活动。我们夹在这些声音里，一会儿争论近似条件，一会儿防止汤汁靠近题库。\n\n[同学甲] 周行，你们这题目上怎么还有“偏心率”？听着好适合形容你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这属于跨领域误用术语。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "偏心率是轨道形状参数，不能形容人。\n\n[同学甲] 哦哦，对不起，打扰学术了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "同学灰溜溜转回去。林澈低头继续写，过了两秒才问。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他刚才是在开你玩笑吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "算是。我们班日常语言污染。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那我刚才是不是太认真了？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没有。挺好，他以后会尊重偏心率。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你别笑。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我忍一下。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她用笔帽轻轻戳了一下我的错题本边缘，像在警告我别太过分。那一下很轻，甚至有点像撒气。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "进度检查。你们这边怎么一边吃饭一边像开小型审稿会？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我们刚把万能模板降级成临时模板。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好，认清现实是进步。林澈，你的分类？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "四类。时间系统、单位换算、近似条件、观测前提。第三类和第四类有一道待复核。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "保留待复核。不要再为它牺牲睡眠。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我昨晚没有牺牲很多。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "十一点四十。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "周行。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "记录：已经开始互相告状，关系进展正常。林澈，今晚十一点前结束题库整理。周行负责提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我拥有提醒权了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不能超过三次。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你还给提醒设置上限。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "超过三次会烦。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得太坦诚，我反倒没法反驳。顾望舒午休快结束时出现，红笔别在文件夹上。她拿走题库前，先看了看封口便签。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "“欢迎挑错”写得很小。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这是我们队内协商后的尺度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "主要是他想写很大。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "错题分析先看分类和错因。题目本身我晚上回去校。你们也会收到我们附中的五题，里面有两题故意保留不同解法。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "故意？这已经不是交换，是投放训练压力。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "压力迟早会有。现在有红笔，考试时只有分数。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不同解法会标适用条件吗？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "会标一部分，剩下的你们自己判断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你看起来很享受这个安排。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "还好。你们如果判断错，我也能看到有价值的错因。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "顾望舒走后，林澈把饭盒打开，发现菜已经凉了。她盯着米饭看了两秒，小声叹气。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "要不要去食堂打点热汤？午休还剩五分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "来不及。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我有没开封的豆浆，热的。陈砚刚才买多了塞给我的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你不喝？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我喝冰水就行。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "备赛期间少喝冰的，胃会不舒服。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是关心还是保护进度？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "都有一点。豆浆我收下，明天还你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不用还。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要还。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她接过豆浆，手指贴在杯壁上暖了一会儿。上课铃响前，她在我的模板旁边又补了一个小括号：可执行优先。字迹依旧规整，可这次没有写“未完全校对”。我把那页夹好，忽然觉得午休虽然被题库吃掉一半，也不算太亏。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "雨下到第三天，学校到处都是潮的。作业本边角卷起来，教室后排的窗户关不严，风一吹，窗帘就贴到玻璃上。下午最后一节课，数学老师宣布下周小测范围时，我听见自己心里很清楚地“咔”了一声。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（初赛还有二十多天，月考、小测、作业、题库，全挤在一起。没有哪一项会因为我想备赛就让路。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "放学去图书馆前，顾望舒发来第一批题库反馈。她在三道题旁边打了星号，一道说近似条件标注不足，一道说错因分类过粗，还有一道写：限时策略可保留，但需说明风险。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“需说明风险”这几个字看得我头皮发紧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "她写得对。我们那题确实没写误差来源。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你能不能偶尔站在我们这边？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我站在题这边。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "题不会请你喝豆浆。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你昨天那杯我还没还。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "重点不是这个。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把文件夹抱紧了一点，没有继续玩笑。电梯旁边人很多，我们只能走楼梯。她走在我前面半级台阶，脚步比平时快，像也被那几条红笔评语推着往前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "图书馆自习区的灯亮得发白。附中题库第二批已经打印出来，第一题旁边就写着“小角近似”。林澈看到这几个字，立刻翻出自己的补充表。我看到她动作，心里先沉了一下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这题先限时版吧。题目选项差距大，主项能判断。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "差距大也要知道近似范围。它没给角度大小。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "题干里写“微小角偏移”，这不就是让我们用小角近似吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "“微小”不是数值。sin θ 约等于 θ，要看 θ 用弧度，误差到 θ³ 项。它如果问精度，就不能直接丢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可这题是初赛选择题，不是推导证明。我们要是每题都补到 θ³，今天又做不完。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没说补到 θ³。我说要标适用条件。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "标条件也要时间。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不标会让你以为自己真的会。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句刺到我。也许她只是说题，我却听成了“你又在装会”。我把笔放下，声音没控制住。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你觉得怎么才算会？每一道都写完整，写到顾望舒也挑不出字？初赛不会等我们把所有括号补齐。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有要求顾望舒挑不出。你不要把我说得那么夸张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你也别把一道选择题写成项目报告。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她的表情一下收住。不是生气那种明显变化，是整个人往后退了半寸。她把补充表往自己这边拉，纸边擦过桌面，声音很轻。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你觉得我在拖慢你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我觉得我们都慢。附中第二批都来了，我们第一批还没完全消化。再这样下去，训练表后面全是欠账。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以你想靠跳过不确定来追？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我想先把能拿的分拿到。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "能拿的分也要知道怎么拿。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你每次都这样。只要有一点不确定，就像整道题都不能往下走。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为那个不确定可能影响结论。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "也可能只是你怕错。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "说出口那一秒，我就知道坏了。林澈没有立刻反驳。她低头看那张补充表，指尖按着纸角，按到纸面微微弯起来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你说得挺直接。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我……",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没事。那这题按限时版走。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把补充表合上，动作很规整，规整得让我更难受。她没有摔笔，没有提高声音，只是突然把自己那些问号和担心全收回去，像怕再拿出来会碍事。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我不是那个意思。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "先做题吧。不是说时间不够吗？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话比吵架更难接。雨声敲在窗玻璃上，旁边自习的同学抬头看了我们一眼。我低头盯着卷子，小角近似四个字忽然变得很刺眼。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "停笔。你们两个，先别写了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，我们能自己解决。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你们刚才已经把题目解决成互相扎人了。现在按我的流程来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我可以继续做。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你可以继续做，但你现在不说，晚上回去大概率把补充表重写到十二点。周行会假装进度往前了，明天再后悔。这个流程我不想看第二遍。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈捏着笔，没有反驳。夏南星抽走卷子，放到桌子另一边。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "复述对方观点。周行先来，三句话。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "她觉得小角近似不能直接用，要知道适用范围。限时可以省步骤，但不能省到不知道自己省了什么。她担心现在跳过去，下一次题目换精度就会错。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "林澈，漏了吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "漏了一句。我不是想拖进度。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "……她不是想拖进度。她是在防止我们把省略当成会。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "好。林澈，到你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他觉得初赛时间有限，不能每道题都完整推。需要先练出拿基础分的速度，再把严格性放到复盘里补。他急着追上顾望舒那边的节奏。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "最后一句可以更难听一点。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你怕被甩开。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我喉咙像被什么堵了一下。比“急着追分”更准，也更没法装。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "嗯。我怕被甩开。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我也怕。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怕什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "怕我一放过条件，就再也找不回来。怕这次蒙对了，下次就暴露我其实没懂。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完，眼神很快移开。那不是示弱给我看，更像她终于把一直压在补充表下面的东西拿出来，拿出来以后自己也有点不自在。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "刚才那句是我说重了。把你说成怕错，很不公平。你是在看条件，我却把它听成拖进度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我也把你听成只想要分。其实你是急。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我确实想要分。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "想要分很正常。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你居然没有批评这句。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "考试本来就要分。只是不能只要分。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她这句说完，语气终于软了一点。桌面上那张补充表还合着，我把它往她那边推了推。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "打开吧。你不用因为我急就收起来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你也不能因为我打开它就觉得今天完了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "成交。给它三分钟。三分钟内标适用条件，超过就先写限时版。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "五分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "四分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "四分半。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以。你们已经从互相扎人进化到讨价还价，说明能活。规则写下来：限时训练允许省略，省略处必须标；复盘时补，不补算未掌握。卡条件超过四分半，先后置。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "四分半这个数字很林澈。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "比三分钟合理。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "行，四分半。你以后卡住，我提醒你；我跳太快，你拦我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "提醒的时候不要说“考试不会等你”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你拦我的时候也别说“你又默认”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我尽量。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她重新打开补充表，在题号旁边写下“小角近似，限时标 O(θ³)，复盘估误差”。写完后，她把笔往我这边递了一下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你写限时版。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你确定？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "确定。你写，我看着。别乱飞。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "遵命。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这次我没有急着代公式。先圈“微小角偏移”，再写 sin θ 约等于 θ，旁边标“弧度制，忽略三阶”。林澈看了看，没说话，只在“弧度制”下面轻轻画了一道线。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第一次争执没有就此变成什么温柔回忆。它还是扎在那里。可那根刺被我们标了出来，至少下一次碰到时，知道它叫什么。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "图书馆闭馆前十分钟，广播响起，声音从天花板上的小喇叭里落下来，有点失真。自习区开始收拾，拉链声、椅子声、雨伞被甩开的声音混在一起。雨终于小了，窗玻璃上的水线从一片连成一条一条。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "东门那边积水浅。你等会儿从那边走吧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我知道。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么知道？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "来图书馆的时候看了。西门施工，车一过会溅起来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你观察范围真广。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "鞋湿了很麻烦。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句话听起来很有生活经验。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你今天鞋带也松了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "现在？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "刚才。你已经踩了一次。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么不早说？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "刚才在吵架。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很平，我却被噎了一下。是啊，刚才我们忙着把焦虑扔给对方，连鞋带这种小事都没机会提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林澈，刚才那句“你怕错”，我说得很差。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你可以不用这么快承认。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "本来就差。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "……行。它差在我把你的做题习惯说成性格问题。你提醒条件是有用的，我那时候急，就想让你闭嘴。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "说到最后三个字，我自己都觉得难听。林澈把笔帽扣上，没有看我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我听出来了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "对不起。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我也有问题。我问你是不是在跟顾望舒比，其实是想说你太急。我没有直接说我担心你跳步骤，反而拿别人压你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那句挺准的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "准也不代表说法好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她终于抬头。图书馆的灯照在她眼睛里，亮得有点冷。她看起来没有哭，也没有委屈得夸张，只是很累。那种累我能认出来，像一道题反复推到同一处断点，知道问题在，却还没找到合适的写法。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怕错，到底是哪种怕？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "怕我以为自己懂了。小时候我爸给我讲星座，我记错过一次，把大角星和织女星混在一起，后来在同学面前说错，被笑了很久。其实他们也没恶意，但我后面每次说一个名字，都想先确认三遍。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以你后来什么都要标条件。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也不全是因为这个。只是我不喜欢那种感觉：说出口时很确定，下一秒发现根基是空的。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我懂一点。我怕的是另一种空。我怕大家都往前走，我还在原地验单位。顾望舒一来，我就觉得我们慢得离谱。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你不慢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这句安慰很突然。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不是安慰。你后面几题速度起来了。第八题、第九题都对。第六题卡住是问题，不代表整体慢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你连题号都记得？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我改的卷子。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那也谢谢。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她应得很轻，手指却把我的错题本往前推了一点。第一页空着，像在等我们写点什么正式的东西，又像在等我们别把正式搞得太吓人。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "我不想打扰你们真诚复盘，但管理员已经看我们三次了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，你又什么时候来的？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "从周行说“想让你闭嘴”开始。说得难听，但至少终于说人话。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "学姐……",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "好，我少评价。现在把今天的争执变成规则。道歉只能处理刚才那一下，下一次还会有题、会有雨、会有顾望舒的红笔。你们不能每次靠临场良心发现。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "规则一：一个人卡住，另一个人先问卡在哪里。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要具体。条件、时间、知识点、情绪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "情绪也列？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "今天证明要列。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "同意。情绪不列，它就会假装成学习方法。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "规则二：限时版可以省，省略处必须标；复盘版补，不补算未掌握。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "规则三：提醒对方时不能直接判性格。比如不能说“你怕错”，也不能说“你急功近利”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可以说“你现在卡在条件”或者“你现在被时间追着跑”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "后面这句有点怪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那改成“时间分配出问题”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在错题本第一页写下这些。写到“情绪”两个字时，笔尖顿了一下。林澈接过笔，在后面加括号：不写进公式，但要处理。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句很你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不好吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "挺好。比我写得清楚。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把笔还给我时，手指碰到我的指节，很快收回去，像被烫到。其实笔是凉的，图书馆空调也是凉的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还有一条。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你说。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果你觉得我太慢，可以说“我们先标后置”，不要说考试不会等我。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "好。那如果你觉得我跳太快，可以说“这一处先标风险”，不要说我又默认。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我尽量。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我也尽量。尽量听起来不够像誓言，但比较像我们能做到的东西。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我喜欢能做到的。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好。闭馆前还能产出一条能执行的约定，今天没白吵。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "管理员关掉靠窗那排灯。桌面暗了一半，窗外的雨几乎停了，只剩屋檐滴水。林澈把自己的近似条件表从文件夹里抽出来，夹进我的错题本第一页后面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个给你。不是让你每题都推到底，是提醒你标风险。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你能不能别每次给东西都先解释用途？听起来像发实验器材。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你要不要？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "要。非常要。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那就收好。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我明天给你限时版模板。上面会写：四分半后置，不许跟一道题同归于尽。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "“同归于尽”删掉。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "改成“暂停纠缠”？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也怪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你来命名。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "卡题后置。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "很实用，很少情绪价值。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "能用。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完，把我的错题本合上，轻轻拍了一下封面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还有，豆浆的钱我转你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个时候还记得豆浆？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "欠着会忘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你明天请我一颗薄荷糖吧。折算一下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "薄荷糖不等价。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那就当利息。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你数学老师听见会生气。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以我们小声。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈看了我一眼，终于笑了。不是楼顶那种很短的笑，这次多停了一会儿。夏南星在旁边拎起文件袋，装作没看见。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "走了。周行收废纸，林澈收卷子。你们的约定别夹在本子里就算完成，明天我检查执行。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "社长权限又来了。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "对，而且不接受申诉。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "走出图书馆时，地面还湿着。东门路灯倒在水洼里，被脚步踩碎又慢慢合回去。林澈撑开那把补过的深蓝色伞，往我这边偏了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我有伞。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我知道。你鞋带松了，先系。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头系鞋带。她站在旁边等，伞面挡住屋檐最后一点水。等我站起来，她已经把伞收回自己的方向，像刚才那半步只是顺手。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林澈，明天见。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "明天见。还有，四分半不是随便说的，你别偷偷改成三分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你也别偷偷改成七分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我尽量。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "雨停前的空气很凉。我抱着错题本，里面夹着她的近似条件表，第一页写着我们刚刚定下的规则。它不像什么漂亮的约定，更像一张简陋的操作说明。可对我们这种一紧张就往题里躲的人来说，操作说明已经够珍贵了。",
              "sourceLine": 0
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
          "title": "第一节 雨天限时卷",
          "lines": [
            {
              "speaker": "narrator",
              "text": "雨从午休下到放学，操场边缘积了一圈水，篮球架下面没人，连平时最不怕冷的男生都缩在走廊里。天文社群里，夏南星先发“楼顶集合取消”，一分钟后又发“别高兴，图书馆二楼”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐这消息发得也太有杀伤力了吧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "杀伤力在哪一句？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "就那句‘别高兴’啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "看来她把你拿捏得很准。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "别乱说，我只是在为那台旧望远镜不用淋雨感到由衷的欣慰。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "人家望远镜有防尘布，你可没有。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是关心我会淋雨？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我是提醒你伞在书包侧袋，刚才露出来了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头一看，伞柄确实从侧袋里探出一截。林澈已经撑开自己的伞，伞面是很普通的深蓝色，边缘有一小块透明胶补过的痕迹。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你的伞也有维修记录。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "上周不小心被门夹了一下。不影响用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你对物品的评价都很务实。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "能用就行。走快点，图书馆靠窗位置会被占。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "图书馆二楼自习区比平时更满。雨天让所有运动社团都失去场地，也让所有人突然想起自习的好。夏南星抢到靠窗四个座位，桌上已经放好卷子，卷角用水杯压着。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "今天练节奏。二十题，四十五分钟。分值不重要，重要的是你们怎么放弃、怎么标记、怎么回头。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“怎么放弃”听起来很成熟。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "学不会放弃的人最后只会被第六题活活拖死。周行，别看我，我没针对你，我只是随便举个例子。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "但第六题可能真的会拖死他。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你们俩是不是偷偷串通过台词？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没串通。谁让你昨天验个单位验了那么半天。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我翻开卷子，第一眼就看见第六题有一堆角分秒换算。夏南星没有笑，林澈也没有笑，可我总觉得这张卷子在笑。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "规则：会做的先做，卡住超过三分钟打星号，超过五分钟必须走。林澈，条件不全先做“竞赛默认版”，旁边标疑点。周行，看到熟公式先圈条件，不许直接代。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我怎么感觉自己被写进考场须知里了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这样对你比较安全。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你也被写了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以我没笑你。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "计时器开始。雨声打在玻璃上，远处有人翻阅杂志，塑料书皮发出轻响。我第一题写得还算顺，第二题开始检查单位，第三题看到“地方恒星时”时心里一紧，又强迫自己把题干读完。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（先圈条件。LST，RA，Dec，纬度。别急。公式不会跑。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第六题果然像夏南星预告的那样跳出来。题目要求把某颗星的赤经由时分秒换算成角度，再和地方恒星时比较，求某时刻时角。我算完一遍，总觉得少了十五分，于是又验一遍。验到第三遍，计时器已经过去十二分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "咳。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈很轻地咳了一声。我抬眼，她没有看我，只用笔尖敲了敲自己的手表。她没说话，可意思清楚得很：走。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（她怎么连我卡住都能听出来？）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在第六题旁边打了星号，咬牙跳到第七题。跳过去那一刻很难受，像把没拉上的书包丢在走廊里。但后面三题反而救回来一些。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈写得很快。她的卷面有一套自己的秩序：显式条件用横线，疑似近似用小三角，完全不确定处画问号。第十四题，她停住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（她停了。小三角还是问号？）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我不该分心，可余光还是瞥见她把题干读了三遍。她的手指压在“可视为”三个字上，像那三个字随时会从纸上逃跑。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "还有十分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话像从天花板掉下来。我最后五题还有三题空着，第十七题只写了公式，答案栏干干净净。林澈第十四题旁边已经有两套推导，第三套刚开头。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "停笔时，我的手心有汗。图书馆空调明明有点凉，我却觉得背后发热。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "交换卷子。先别哀悼，哀悼放到复盘后。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，你把流程安排得很周到。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你第六题没有走。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我走了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你耗了四分钟才走。规定明明是三分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你一边做题还能一边监控我？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "主要是你那橡皮来回擦了三次，声音太明显了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "好家伙，原来我的焦虑还自带声效啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "下次擦第二次就标星。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把我的第六题圈出来，红笔却没有下得很重。圈完后又在旁边写：三分钟上限，先后置。字很小，像怕我看着太难受。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你突然写得这么温柔，我都稍微有点不适应了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要是不适应，我可以重写得凶一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "别别别，这样就挺好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我看她的卷子。第十四题是一道观测误差题，题干说“短时间内观测纬度可近似不变”，却没说明短时间的尺度，也没给误差允许范围。她写了三种情况，最后答案选了 B，旁边却写着“不确定默认强度”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你其实选对了吧？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "答案可能对，理由不够稳。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "如果我是你，我会先庆祝答案对。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你会，所以你第六题耗了四分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这两件事有关吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "都和确认方式有关。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完，自己也像觉得太硬，补了一句。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不过你后面第八题做得快。跳过去以后没有乱。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才是不是又夸我了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我在复盘事实。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "今天的事实很友善。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "两位，互相吹捧可以留到晚点再聊。现在乖乖写错因去。每人三条，按这个格式：错误动作，触发原因，下次动作。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "错误动作：第六题反复验单位。触发原因：昨天留下心理阴影。下次动作：三分钟到就标星。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "“心理阴影”换成可执行描述。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不如写‘担心再次混用单位，导致对同一个换算重复验证’。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这语气简直像是在给我写病历单。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "比心理阴影好改。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我照她的话写下去。林澈也在自己的错因栏写：第十四题，条件不完整导致分支过多；触发原因，未先判断题目意图；下次动作，先写竞赛默认版，疑点后置复盘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这条很成熟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "写起来成熟，做的时候未必。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "至少它有机会救你下一次。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也救你。你看到我停太久，可以提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我提醒你？我怕你当场用近似条件砸我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我不会砸人。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "会用眼神。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你提醒时小声一点。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很认真。我愣了一下，才意识到这算是她把一部分控制权交出来：如果她卡住，我可以提醒她往后走。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "这就对了。备赛搭档不是互相证明谁对，是在对方掉进老坑时拉一下。拉之前说清楚，别把人吓一跳。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "窗外雨线还在往下滑。卷面上的空白题和红圈都没消失，可它们终于从一团丢脸的东西，变成几条能写进训练表的动作。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch2-s2",
          "title": "第二节 顾望舒的红笔",
          "lines": [
            {
              "speaker": "narrator",
              "text": "顾望舒来的时候，图书馆门口正好有人收伞。她从一片湿漉漉的声音里走过来，文件夹却干得很，像雨水也知道不要碰她的卷子。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "介绍一下，顾望舒。附中天文社，今年跟我们交换题库。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不是交换社团，是交换训练材料。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "行，精确版介绍。她很强，强到老师让她帮忙校答案。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个介绍对我们不太友好。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "校答案不代表不会错。只是错得会少一点。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她坐下后没有寒暄，先看了我们桌上的限时卷。红笔帽被她咬开又立刻拿下来，像意识到这个动作不够正式。林澈看见了，表情松了一点。原来满分选手也会咬笔帽。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "第十七题谁做了？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我写了半行，严格来说，它还没拥有完整人生。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我做到推导第一步，后面时间不够。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "这题标准答案有问题。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "标准答案有问题这句话，听着像雨天突然放晴。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "别高兴。标准答案有问题，不代表你们会做。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "问题在近似条件？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。题干描述“近圆轨道”，但没有给偏心率范围。答案直接把二阶项丢掉，只有 e 很小时成立。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "e 是偏心率？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。圆轨道 e 等于 0，椭圆轨道 0 到 1。近圆就是 e 很小，但“很小”要看精度。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "如果选项间距很大，粗略近似还能用。可这题 C 和 D 的差距不够，二阶修正可能改变判断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以它危险在看起来像普通套公式题。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。越像熟题，越容易漏前提。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈把自己的草稿纸往前推了一点，又停住。她想问，手指却按在纸角上，没有立刻开口。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才不是想问二阶项吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我在想怎么问。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可以先问人类版。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你别打岔。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她小声说完，像怕顾望舒听见。顾望舒却已经把红笔停在偏心率符号旁边。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "可以直接问。我们交换题库，本来就是为了暴露问题。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那我问。实际考试里，如果题目没给精度，只说“近圆”，什么时候可以接受直接用一阶近似？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "看三件事。题目背景、选项间距、计算目标。如果只是定性判断，一阶够；如果是数值比较，先估二阶项量级。CNAO 初赛一般不会要求完整展开，但会考你知不知道自己省了什么。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以限时卷可以先写一阶，但要标“忽略 O(e²)”？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。你不用在卷面上写成论文，至少心里要知道那一项被放进了误差。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "O(e²) 是“后面还有东西”的意思？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以这么理解。表示二阶及以上小量。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我喜欢这个记号。它很诚实，承认自己先不管后面的东西。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "喜欢也要会用。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "顾望舒说话风格比较节能，大家适应一下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "适应中。她的红笔已经在我心里留下阴影。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "红笔不重要。重要的是你们愿不愿意让别人看见错因。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话让桌面静了一下。错因比错题更难拿出来，因为错题还能怪知识点，错因会直接露出人的习惯。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果分类不确定，也要给你们看吗？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "要。分类不确定说明它可能是混合错误。混合错误最有价值。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "听起来像你们附中连错误都要挑优质的。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "普通错误也要收。只是优先处理会重复出现的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "比如单位换算、近似条件、题干默认？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "还有时间分配。很多人知道严格解，却死在卷面时间。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈的笔尖停了一下。我知道她听进去了。她昨天写了三种情况，答案却差点来不及填。顾望舒那句“死在卷面时间”没有指名，落到她面前却很准。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我和林澈刚好可以交换问题。我负责死在快，她负责死在细。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个总结不准确。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "但有参考价值。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "……",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "她居然同意了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有同意。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你们先别忙着给自己贴标签。明天开始题库交换，每组交五道题，不要只交漂亮题。尤其林澈，不要把“不确定”全修到确定才拿来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果拿出来后发现分类错了呢？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "那就改。题库不是出版物。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你听见了，题库不是出版物。可以有修订版。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你不要用这句话给自己偷懒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我还没开始偷懒，你已经预防了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为你有这个倾向。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完把自己的第十四题复盘推到顾望舒面前。动作不大，却像把一块没打磨好的东西拿出来给别人看。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这题我标了“条件不完整”。你帮我看一下，是近似条件问题，还是观测前提问题？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "两者都有，但优先归到观测前提。近似只是后续处理。你前面卡住，是因为没先判断题目想考哪层。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个“嗯”听起来有点不服。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我服。只是需要回去改分类。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不用今晚全改。先标待复核。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "待复核会不会显得很乱？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不会。装作不乱才乱。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈低头写下“待复核”。字比平时小一点，却写得很稳。她把笔帽扣上时，轻轻呼了一口气。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚才像完成了一次心理极限运动。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有那么夸张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那就是小型极限运动。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你能不能不要给我的笔记活动命名？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可以。顾望舒，你们附中题库明天几点交接？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "午休。地点你们定。还有，便签上别写“欢迎挑错”这种客套话，真的写了我会当真。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我更要写了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "别写太大。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她嘴上拦，眼睛里却有一点笑。顾望舒收起红笔，雨声还在窗外连成一片。我看着桌上多出来的“待复核”和“O(e²)”，忽然觉得这场雨天训练比楼顶观测更累，也更像真正的备赛。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch2-s3",
          "title": "第三节 题库交换",
          "lines": [
            {
              "speaker": "narrator",
              "text": "第二天午休，我把饭盒推到课桌左上角，错题本摊在右边。鸡腿被我郑重放到离题库最远的位置，像一颗需要隔离的高油脂天体。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你现在吃饭都配卷子了？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "备赛生活，营养均衡。左边蛋白质，右边精神损耗。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林澈同学也来我们班？你们天文社是不是打算占领午休？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我来送题库，不占领。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "那你们继续。我去小卖部占领最后一根烤肠。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "陈砚走之前还探头看了一眼林澈的笔记，看到密密麻麻的分类，立刻肃然起敬。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "周行，你跟着人家好好学。她这笔记看起来能把你从错误边缘拽回来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你快去拯救烤肠吧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他说得也没错。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "哪一句？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你确实需要被拽一下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你今天攻击性稳定。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我昨晚睡够了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把饭盒放到一边，打开文件夹。封面便签写着“附中题库第一批”，下面那行“未完全校对”被她用浅灰色笔描了一遍，像怕别人看不见。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这行字能不能别写这么显眼？顾望舒看到会不会直接开始校你？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "她本来也会校。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "有道理。那我写“欢迎挑错”也不算挑衅。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你写小一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "为什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "太大像你真的很欢迎。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "难道我们不欢迎？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "欢迎和被红笔写满是两回事。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说这句时皱了下鼻子，很轻，几乎看不出来。可我看出来了。林澈也会怕红笔，只是她怕的方式是提前把分类做得更细。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你昨晚几点睡？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "十一点四十。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你昨天说不要熬夜。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "十一点四十不算熬太晚。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个“太”字很可疑。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有一题分类卡住了。我不想今天拿过来还乱着。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可顾望舒昨天说可以待复核。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "知道是一回事，做得到是另一回事。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话她说得很小声，像不太想承认。她把第三类“近似条件”那页翻出来，题号旁边有一个小问号。问号写得很端正，端正到有点委屈。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这题我们一起看。先按限时版走，能归哪里先归哪里，别今晚再重写一遍。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你怎么知道我会重写？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我现在也在建立你的问题数据库。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不许乱建。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "第一条：看见不确定会想重做。第二条：嘴上说不冷，实际会把拉链拉到鼻子。第三条：借笔会强调“借”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "前两条删掉。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "第三条保留？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "第三条是事实。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她伸手把我错题本上的标题改成“临时模板”。我本来写的是“万能模板”，被她划得很果断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "万能两个字这么不受欢迎？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有万能模板。题目会变。你如果相信万能，下一次就会跳条件。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那“临时模板：先看条件，再看近似，再看主项”？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以。再加“复盘补误差来源”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你看，我们这个模板越来越像你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "像我有什么问题？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没有，比较严谨，偶尔有点凶。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有凶。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "刚才那个眼神就很有说服力。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那是提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她嘴上不认，手却把我的错题本往自己这边拉了一点，认真帮我把四步写清楚：圈显式条件、标默认近似、先算主项、复盘补前提。写完后又加了一句：限时版不等于乱省。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句像写给我的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也写给我。限时版要能让我放心用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我补一句：复盘版不等于重写整个人生。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "……",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不行？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "太夸张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那写“复盘版不重做无关步骤”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个可以。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "午休教室里很吵。有人趴着睡，外套盖在头上；有人边吃饭边背政治；后排两个同学小声讨论游戏活动。我们夹在这些声音里，一会儿争论近似条件，一会儿防止汤汁靠近题库。\n\n[同学甲] 周行，你们这题目上怎么还有“偏心率”？听着好适合形容你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这属于跨领域误用术语。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "偏心率是轨道形状参数，不能形容人。\n\n[同学甲] 哦哦，对不起，打扰学术了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "同学灰溜溜转回去。林澈低头继续写，过了两秒才问。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他刚才是在开你玩笑吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "算是。我们班日常语言污染。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那我刚才是不是太认真了？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没有。挺好，他以后会尊重偏心率。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你别笑。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我忍一下。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她用笔帽轻轻戳了一下我的错题本边缘，像在警告我别太过分。那一下很轻，甚至有点像撒气。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "进度检查。你们这边怎么一边吃饭一边像开小型审稿会？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我们刚把万能模板降级成临时模板。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好，认清现实是进步。林澈，你的分类？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "四类。时间系统、单位换算、近似条件、观测前提。第三类和第四类有一道待复核。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "保留待复核。不要再为它牺牲睡眠。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我昨晚没有牺牲很多。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "十一点四十。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "周行。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "记录：已经开始互相告状，关系进展正常。林澈，今晚十一点前结束题库整理。周行负责提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我拥有提醒权了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不能超过三次。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你还给提醒设置上限。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "超过三次会烦。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得太坦诚，我反倒没法反驳。顾望舒午休快结束时出现，红笔别在文件夹上。她拿走题库前，先看了看封口便签。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "“欢迎挑错”写得很小。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这是我们队内协商后的尺度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "主要是他想写很大。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "错题分析先看分类和错因。题目本身我晚上回去校。你们也会收到我们附中的五题，里面有两题故意保留不同解法。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "故意？这已经不是交换，是投放训练压力。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "压力迟早会有。现在有红笔，考试时只有分数。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不同解法会标适用条件吗？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "会标一部分，剩下的你们自己判断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你看起来很享受这个安排。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "还好。你们如果判断错，我也能看到有价值的错因。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "顾望舒走后，林澈把饭盒打开，发现菜已经凉了。她盯着米饭看了两秒，小声叹气。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "要不要去食堂打点热汤？午休还剩五分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "来不及。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我有没开封的豆浆，热的。陈砚刚才买多了塞给我的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你不喝？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我喝冰水就行。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "备赛期间少喝冰的，胃会不舒服。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是关心还是保护进度？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "都有一点。豆浆我收下，明天还你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不用还。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要还。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她接过豆浆，手指贴在杯壁上暖了一会儿。上课铃响前，她在我的模板旁边又补了一个小括号：可执行优先。字迹依旧规整，可这次没有写“未完全校对”。我把那页夹好，忽然觉得午休虽然被题库吃掉一半，也不算太亏。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch2-s4",
          "title": "第四节 第一次争执",
          "lines": [
            {
              "speaker": "narrator",
              "text": "雨下到第三天，学校到处都是潮的。作业本边角卷起来，教室后排的窗户关不严，风一吹，窗帘就贴到玻璃上。下午最后一节课，数学老师宣布下周小测范围时，我听见自己心里很清楚地“咔”了一声。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（初赛还有二十多天，月考、小测、作业、题库，全挤在一起。没有哪一项会因为我想备赛就让路。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "放学去图书馆前，顾望舒发来第一批题库反馈。她在三道题旁边打了星号，一道说近似条件标注不足，一道说错因分类过粗，还有一道写：限时策略可保留，但需说明风险。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“需说明风险”这几个字看得我头皮发紧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "她写得对。我们那题确实没写误差来源。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你能不能偶尔站在我们这边？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我站在题这边。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "题不会请你喝豆浆。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你昨天那杯我还没还。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "重点不是这个。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把文件夹抱紧了一点，没有继续玩笑。电梯旁边人很多，我们只能走楼梯。她走在我前面半级台阶，脚步比平时快，像也被那几条红笔评语推着往前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "图书馆自习区的灯亮得发白。附中题库第二批已经打印出来，第一题旁边就写着“小角近似”。林澈看到这几个字，立刻翻出自己的补充表。我看到她动作，心里先沉了一下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这题先限时版吧。题目选项差距大，主项能判断。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "差距大也要知道近似范围。它没给角度大小。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "题干里写“微小角偏移”，这不就是让我们用小角近似吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "“微小”不是数值。sin θ 约等于 θ，要看 θ 用弧度，误差到 θ³ 项。它如果问精度，就不能直接丢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可这题是初赛选择题，不是推导证明。我们要是每题都补到 θ³，今天又做不完。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没说补到 θ³。我说要标适用条件。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "标条件也要时间。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不标会让你以为自己真的会。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句刺到我。也许她只是说题，我却听成了“你又在装会”。我把笔放下，声音没控制住。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你觉得怎么才算会？每一道都写完整，写到顾望舒也挑不出字？初赛不会等我们把所有括号补齐。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有要求顾望舒挑不出。你不要把我说得那么夸张。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你也别把一道选择题写成项目报告。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她的表情一下收住。不是生气那种明显变化，是整个人往后退了半寸。她把补充表往自己这边拉，纸边擦过桌面，声音很轻。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你觉得我在拖慢你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我觉得我们都慢。附中第二批都来了，我们第一批还没完全消化。再这样下去，训练表后面全是欠账。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "所以你想靠跳过不确定来追？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我想先把能拿的分拿到。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "能拿的分也要知道怎么拿。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你每次都这样。只要有一点不确定，就像整道题都不能往下走。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为那个不确定可能影响结论。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "也可能只是你怕错。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "说出口那一秒，我就知道坏了。林澈没有立刻反驳。她低头看那张补充表，指尖按着纸角，按到纸面微微弯起来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你说得挺直接。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我……",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没事。那这题按限时版走。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把补充表合上，动作很规整，规整得让我更难受。她没有摔笔，没有提高声音，只是突然把自己那些问号和担心全收回去，像怕再拿出来会碍事。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我不是那个意思。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "先做题吧。不是说时间不够吗？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话比吵架更难接。雨声敲在窗玻璃上，旁边自习的同学抬头看了我们一眼。我低头盯着卷子，小角近似四个字忽然变得很刺眼。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "停笔。你们两个，先别写了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，我们能自己解决。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你们刚才已经把题目解决成互相扎人了。现在按我的流程来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我可以继续做。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你可以继续做，但你现在不说，晚上回去大概率把补充表重写到十二点。周行会假装进度往前了，明天再后悔。这个流程我不想看第二遍。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈捏着笔，没有反驳。夏南星抽走卷子，放到桌子另一边。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "复述对方观点。周行先来，三句话。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "她觉得小角近似不能直接用，要知道适用范围。限时可以省步骤，但不能省到不知道自己省了什么。她担心现在跳过去，下一次题目换精度就会错。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "林澈，漏了吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "漏了一句。我不是想拖进度。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "……她不是想拖进度。她是在防止我们把省略当成会。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "好。林澈，到你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "他觉得初赛时间有限，不能每道题都完整推。需要先练出拿基础分的速度，再把严格性放到复盘里补。他急着追上顾望舒那边的节奏。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "最后一句可以更难听一点。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你怕被甩开。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我喉咙像被什么堵了一下。比“急着追分”更准，也更没法装。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "嗯。我怕被甩开。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我也怕。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怕什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "怕我一放过条件，就再也找不回来。怕这次蒙对了，下次就暴露我其实没懂。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完，眼神很快移开。那不是示弱给我看，更像她终于把一直压在补充表下面的东西拿出来，拿出来以后自己也有点不自在。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "刚才那句是我说重了。把你说成怕错，很不公平。你是在看条件，我却把它听成拖进度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我也把你听成只想要分。其实你是急。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我确实想要分。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "想要分很正常。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你居然没有批评这句。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "考试本来就要分。只是不能只要分。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她这句说完，语气终于软了一点。桌面上那张补充表还合着，我把它往她那边推了推。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "打开吧。你不用因为我急就收起来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你也不能因为我打开它就觉得今天完了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "成交。给它三分钟。三分钟内标适用条件，超过就先写限时版。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "五分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "四分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "四分半。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以。你们已经从互相扎人进化到讨价还价，说明能活。规则写下来：限时训练允许省略，省略处必须标；复盘时补，不补算未掌握。卡条件超过四分半，先后置。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "四分半这个数字很林澈。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "比三分钟合理。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "行，四分半。你以后卡住，我提醒你；我跳太快，你拦我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "提醒的时候不要说“考试不会等你”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你拦我的时候也别说“你又默认”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我尽量。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她重新打开补充表，在题号旁边写下“小角近似，限时标 O(θ³)，复盘估误差”。写完后，她把笔往我这边递了一下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你写限时版。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你确定？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "确定。你写，我看着。别乱飞。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "遵命。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这次我没有急着代公式。先圈“微小角偏移”，再写 sin θ 约等于 θ，旁边标“弧度制，忽略三阶”。林澈看了看，没说话，只在“弧度制”下面轻轻画了一道线。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第一次争执没有就此变成什么温柔回忆。它还是扎在那里。可那根刺被我们标了出来，至少下一次碰到时，知道它叫什么。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch2-s5",
          "title": "第五节 雨停前的约定",
          "lines": [
            {
              "speaker": "narrator",
              "text": "图书馆闭馆前十分钟，广播响起，声音从天花板上的小喇叭里落下来，有点失真。自习区开始收拾，拉链声、椅子声、雨伞被甩开的声音混在一起。雨终于小了，窗玻璃上的水线从一片连成一条一条。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "东门那边积水浅。你等会儿从那边走吧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我知道。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么知道？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "来图书馆的时候看了。西门施工，车一过会溅起来。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你观察范围真广。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "鞋湿了很麻烦。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句话听起来很有生活经验。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你今天鞋带也松了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "现在？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "刚才。你已经踩了一次。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么不早说？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "刚才在吵架。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很平，我却被噎了一下。是啊，刚才我们忙着把焦虑扔给对方，连鞋带这种小事都没机会提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林澈，刚才那句“你怕错”，我说得很差。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你可以不用这么快承认。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "本来就差。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "……行。它差在我把你的做题习惯说成性格问题。你提醒条件是有用的，我那时候急，就想让你闭嘴。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "说到最后三个字，我自己都觉得难听。林澈把笔帽扣上，没有看我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我听出来了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "对不起。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我也有问题。我问你是不是在跟顾望舒比，其实是想说你太急。我没有直接说我担心你跳步骤，反而拿别人压你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那句挺准的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "准也不代表说法好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她终于抬头。图书馆的灯照在她眼睛里，亮得有点冷。她看起来没有哭，也没有委屈得夸张，只是很累。那种累我能认出来，像一道题反复推到同一处断点，知道问题在，却还没找到合适的写法。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怕错，到底是哪种怕？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "怕我以为自己懂了。小时候我爸给我讲星座，我记错过一次，把大角星和织女星混在一起，后来在同学面前说错，被笑了很久。其实他们也没恶意，但我后面每次说一个名字，都想先确认三遍。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以你后来什么都要标条件。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也不全是因为这个。只是我不喜欢那种感觉：说出口时很确定，下一秒发现根基是空的。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我懂一点。我怕的是另一种空。我怕大家都往前走，我还在原地验单位。顾望舒一来，我就觉得我们慢得离谱。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你不慢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这句安慰很突然。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不是安慰。你后面几题速度起来了。第八题、第九题都对。第六题卡住是问题，不代表整体慢。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你连题号都记得？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我改的卷子。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那也谢谢。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她应得很轻，手指却把我的错题本往前推了一点。第一页空着，像在等我们写点什么正式的东西，又像在等我们别把正式搞得太吓人。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "我不想打扰你们真诚复盘，但管理员已经看我们三次了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "学姐，你又什么时候来的？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "从周行说“想让你闭嘴”开始。说得难听，但至少终于说人话。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "学姐……",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "好，我少评价。现在把今天的争执变成规则。道歉只能处理刚才那一下，下一次还会有题、会有雨、会有顾望舒的红笔。你们不能每次靠临场良心发现。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "规则一：一个人卡住，另一个人先问卡在哪里。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "要具体。条件、时间、知识点、情绪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "情绪也列？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "今天证明要列。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "同意。情绪不列，它就会假装成学习方法。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "规则二：限时版可以省，省略处必须标；复盘版补，不补算未掌握。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "规则三：提醒对方时不能直接判性格。比如不能说“你怕错”，也不能说“你急功近利”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可以说“你现在卡在条件”或者“你现在被时间追着跑”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "后面这句有点怪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那改成“时间分配出问题”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可以。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在错题本第一页写下这些。写到“情绪”两个字时，笔尖顿了一下。林澈接过笔，在后面加括号：不写进公式，但要处理。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句很你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不好吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "挺好。比我写得清楚。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把笔还给我时，手指碰到我的指节，很快收回去，像被烫到。其实笔是凉的，图书馆空调也是凉的。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还有一条。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你说。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果你觉得我太慢，可以说“我们先标后置”，不要说考试不会等我。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "好。那如果你觉得我跳太快，可以说“这一处先标风险”，不要说我又默认。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我尽量。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我也尽量。尽量听起来不够像誓言，但比较像我们能做到的东西。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我喜欢能做到的。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好。闭馆前还能产出一条能执行的约定，今天没白吵。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "管理员关掉靠窗那排灯。桌面暗了一半，窗外的雨几乎停了，只剩屋檐滴水。林澈把自己的近似条件表从文件夹里抽出来，夹进我的错题本第一页后面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个给你。不是让你每题都推到底，是提醒你标风险。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你能不能别每次给东西都先解释用途？听起来像发实验器材。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那你要不要？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "要。非常要。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那就收好。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我明天给你限时版模板。上面会写：四分半后置，不许跟一道题同归于尽。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "“同归于尽”删掉。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "改成“暂停纠缠”？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也怪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你来命名。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "卡题后置。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "很实用，很少情绪价值。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "能用。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完，把我的错题本合上，轻轻拍了一下封面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还有，豆浆的钱我转你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个时候还记得豆浆？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "欠着会忘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你明天请我一颗薄荷糖吧。折算一下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "薄荷糖不等价。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那就当利息。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你数学老师听见会生气。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以我们小声。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈看了我一眼，终于笑了。不是楼顶那种很短的笑，这次多停了一会儿。夏南星在旁边拎起文件袋，装作没看见。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "走了。周行收废纸，林澈收卷子。你们的约定别夹在本子里就算完成，明天我检查执行。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "社长权限又来了。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "对，而且不接受申诉。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "走出图书馆时，地面还湿着。东门路灯倒在水洼里，被脚步踩碎又慢慢合回去。林澈撑开那把补过的深蓝色伞，往我这边偏了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我有伞。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我知道。你鞋带松了，先系。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头系鞋带。她站在旁边等，伞面挡住屋檐最后一点水。等我站起来，她已经把伞收回自己的方向，像刚才那半步只是顺手。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林澈，明天见。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "明天见。还有，四分半不是随便说的，你别偷偷改成三分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你也别偷偷改成七分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我尽量。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "雨停前的空气很凉。我抱着错题本，里面夹着她的近似条件表，第一页写着我们刚刚定下的规则。它不像什么漂亮的约定，更像一张简陋的操作说明。可对我们这种一紧张就往题里躲的人来说，操作说明已经够珍贵了。",
              "sourceLine": 0
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
          "title": "第一节 三十天计划",
          "lines": [
            {
              "speaker": "narrator",
              "text": "插入位置：训练表贴上后、正式抽查前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "训练表贴上去不到五分钟，陈砚就从后门探进半个脑袋。他本来是来还篮球的，看见白板上一排密密麻麻的日期，表情像误闯了某种高强度仪式现场。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我现在申请退社还来得及吗？这白板看着哪像天文社啊，简直就像宇宙欠了你们三十天房贷似的。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "来得及啊。先把球放下，顺手帮我把这叠草稿纸搬到那个柜子里。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "社长，我只是路过，不是来加入省队敢死队的。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "放心吧，敢死队名额满了。就两个坑，我和林澈一人占了一个。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "别乱用词。倒计时训练怎么就成敢死了。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "那叫什么？科学地把自己熬成星际尘埃？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "叫科学地避免把自己熬成星际尘埃。你们看清楚，表上有休息格，不是装饰。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "陈砚把篮球夹在胳膊下面，凑近白板看了半天，忽然伸手指向周五晚上的限时卷。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "这格怎么这么红？看着很像游戏里 boss 出现前的警告。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "它确实是 boss。只是掉落物不是装备，是错题。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "限时卷不是 boss。它只是测量当前水平的工具。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林同学，你这个“只是”用得很可怕。你们学霸是不是都把大怪叫成小动物？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我不是学霸。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你都开始否认了，说明段位更高。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈被他说得一时不知道怎么回，只好低头整理资料。她把周行那份错题模板往他桌角推了推，又像顺手一样，把旁边没动过的面包也推过去。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个面包也是测量工具？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你晚饭没吃完。空腹做题，血糖低会影响判断。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么知道我没吃完？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你今天晚自习前去食堂，一共就排了三分钟的队。三分钟只能买到包子，买不到别的。你手里又没拿包子袋，所以你大概率是根本没吃。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "绝了，这推理过程比我们班主任查迟到还严谨。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林澈，你这关心人的方式简直就是在破案啊。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我只是陈述可能影响训练的因素。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好，没吃饭也算干扰因素。周行现在立刻吃，林澈把今晚计划删掉两行，陈砚麻溜把篮球拿走，别让它滚进我的望远镜脚架里。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "收到！本人宣布今日为伟大的天文事业贡献一次带球撤离！",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：林澈出现“地方时重复换算”后。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星没有立刻讲题。她把自己的旧错题本从包里抽出来，翻到其中一页，纸边已经被翻得发软。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "看这个。我高二第一次参加省赛前，把“东经”和“东时区”混在一起，错了一道特别基础的题。那道题我到现在都能背。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "连社长你也会犯这种错啊？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "废话，我当然会。你当我是从望远镜里蹦出来的吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可是你现在看起来不会。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那是因为我后来学会了在简单题面前慢一秒。你们现在不是缺聪明，是缺慢一秒的余量。余量从哪来？不是从多刷一套卷来，是从别把每天塞满到一碰就碎来。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈的笔尖停在错题本边缘。她看着夏南星那页旧错题，像第一次发现“强的人也会把很普通的地方写错”不是一句安慰，而是一张真的证据。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果慢一秒导致后面时间不够呢？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那就练节奏，不是取消那一秒。你们明天开始每套卷前十分钟只做三件事：扫题、标坑、写时间分配。谁直接冲第一题，我就把他请出宇宙。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "这个处罚范围好大。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我申请留在太阳系。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那就听话。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：本节末尾，离开社团教室前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "散场时，窗外的操场已经只剩几盏灯。楼下有人练跑步，鞋底一下一下擦过塑胶跑道，声音传到四楼时变得很轻。林澈把资料装进书包，装到一半又停住，从夹层里拿出一张便利贴。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你明天早读前如果要检查我的错因，我也可以顺便看你的星图识别。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "顺便？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。你春季大曲线会背，但南天星座容易混。尤其是把船底座和船帆座写反。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "听起来不是顺便，是早有预谋。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你上次错了两次。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林老师，咱能不能给学生稍微留那么一点体面？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "留了呀。所以我只说你错了两次，都没点出具体是哪道题。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完把便利贴贴到我的错题本封面，动作很快，像怕被我理解成别的意思。纸条上只有一行小字：明早，星图十分钟，不做新题。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这算不算是互相监督？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这叫降低错误率。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "行，那我明天带早饭。给你降低一下空腹率。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不要带豆浆。太容易洒了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她答得太快，答完又把视线移开。我看着那张便利贴，忽然觉得三十天不是一整堵墙。它至少被拆成了明天早上的十分钟，和一份不会洒的早饭。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch3-s2",
          "title": "第二节 一次观测失败",
          "lines": [
            {
              "speaker": "narrator",
              "text": "插入位置：到楼顶、开始校准前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "楼顶门被推开时，风先灌了进来。陈砚抱着三脚架跟在后面，走两步停一下，像抱着一只随时会展开腿逃跑的金属章鱼。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我现在知道为什么天文社人少了。入门测试是搬运重型设备。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "这台已经是轻的。重的那台今天没上楼，因为我还想让你们保留对社团的基本好感。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我对社团的好感正在和风速成反比。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "今天平均风速不算特别高。主要是楼顶无遮挡，体感会偏冷。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林澈，你安慰人的时候能不能别像天气预报？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这不是安慰，是说明原因。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说着把夹板递给我，又从口袋里拿出两个长尾夹，夹住记录纸的上下边。纸页被风吹得鼓起来，夹子发出很小的金属声。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你写时间。我来调水平。笔别放地上，容易滚。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "放心，我不会让笔自由落体。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "上次你说不会，然后它滚到了排水沟旁边。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我作证，那支笔当时已经半只脚踏进未知宇宙。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈没有笑，只把另一支笔塞进我手里。笔杆还带着一点她掌心的温度。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "备用。不要咬笔帽，会留下齿痕，影响别人使用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你连这个都管？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你紧张时会咬。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我刚想反驳，忽然想起初赛模拟那支被我咬出浅印的黑笔。她已经低下头去看水平泡，耳尖被风吹得有点红，像刚才那句话只是校准步骤的一部分。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：云完全盖住目标、周行觉得没意义时。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第二次换目标以后，天色已经彻底暗下来。城市灯光从楼群之间浮上来，把云底照成发灰的橙色。望远镜指向一片看不出差别的天空，我盯着寻星镜里的空白，胸口慢慢涌出一种说不清的烦躁。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我们现在到底是在观测，还是在对着一团灰色练耐心？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "都算。耐心如果没有对象，也可以先拿云练。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "可初赛又不会问“请描述你被云欺骗的一晚”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不一定。观测题会问限制条件，问误差来源，问为什么数据不可用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那也不用真的不可用一次吧。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "话说出口以后，我自己先后悔了一点。林澈的笔停在记录表上，黑色笔尖悬着，没有落下。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果只想要可用数据，今晚可以编。大角星大概在哪个方向，角宿一大概在哪个高度，我们都能写出一张看起来像真的表。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我不是这个意思。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我知道。可是看不见的时候，人很容易想把它补成看见。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "风把她的声音吹得有点散。她没有生气，只是很认真地把“目标不可见”四个字写进备注栏，后面补上云量、方位和时间。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我以前也很讨厌这种结果。小时候在楼下等星，等到脖子酸，最后只看到云。我会觉得是不是我方法不对。后来才知道，不是所有努力都会立刻给你一个亮点。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "这句可以发朋友圈。配图：一片云。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "陈砚。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我闭嘴。我只是觉得……挺真的。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "他把手插进外套口袋，难得没有继续开玩笑。楼顶突然安静下来，只有远处操场的哨声被风吹得断断续续。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：收器材时。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "收三脚架时，我的手指被金属扣冻得有点僵，扣了两次都没按下去。林澈看见了，伸手想接，又在半空停住。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你先把手缩进袖子里暖一下。手指不稳容易夹到。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我还没脆弱到被三脚架打败。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "刚才你按反方向了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那是战术试探。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "战术试探会增加器材损耗。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她从口袋里掏出一张暖宝宝，包装已经撕开了一半，又像突然意识到这个动作太明显，把它塞到记录夹下面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个本来是给夹板防潮的。你可以先拿着。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "暖宝宝给夹板防潮？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "临时用途可以调整。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林同学，你这个借口比云层还薄。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "陈砚，你可以去帮学姐锁柜子。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "陈砚举手投降，抱着空箱子跑向门口。我捏着那片暖宝宝，热度慢慢从指尖传回来。林澈低头整理记录表，像刚才什么都没发生，只在备注栏最后补了一行：风大，记录人员手部稳定性下降。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你不会真写这个吧？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这是客观情况。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那请把“记录人员在暖宝宝干预后恢复正常”也写上。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不写。太长。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把笔帽扣上，嘴角很轻地动了一下。云还是没有散，但那张失败记录突然变得不那么冷了。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch3-s3",
          "title": "第三节 家长会后的沉默",
          "lines": [
            {
              "speaker": "narrator",
              "text": "插入位置：周行在教室外听到父亲谈话后。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "走廊里挤着刚散会的家长，有人拿着成绩条问班主任“这个排名能不能稳住”，有人在电话里说“竞赛先放一放”。成年人的声音都压得很低，却比学生吵闹时更容易钻进耳朵。",
              "sourceLine": 0
            },
            {
              "speaker": "father",
              "text": "他最近天文社花的时间不少。我不是说不让他参加，但高二这个阶段，主科不能掉。兴趣归兴趣，最后还是要看高考。\n\n[班主任] 周行这段时间状态有起色，学习主动性也比以前强。竞赛可以作为动力，但确实要控制时间。",
              "sourceLine": 0
            },
            {
              "speaker": "father",
              "text": "我理解。他以前对很多事都三分钟热度，这次能坚持，我也高兴。只是坚持不代表就要把它当方向。他还小，容易把一场比赛看得太重。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "“他还小”这三个字落下来时，我手指已经碰到门把。门把很凉，我却像被烫了一下，慢慢松开。",
              "sourceLine": 0
            },
            {
              "speaker": "father",
              "text": "我不是要泼冷水。天文这个专业以后能走到哪，他自己也未必清楚。我们做家长的，总不能看他只凭一股劲往前冲。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "他没有说错。甚至每一句都像提前替我把现实条件列好了：高考、专业、就业、稳定。可我站在后门外，只觉得自己像一张还没交卷就被判了分的草稿纸。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：便利店前，可加入陈砚路过。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我们走到校门口时，陈砚正蹲在路边拆一根烤肠。他看见我和林澈，先是想招手，目光在我们脸上扫了一圈，又把手放下了。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你俩这是刚从家长会副本出来？表情很有剧情重量。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你家长会结束得这么快？",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我妈和班主任达成共识：我只要少在物理选择题里创造新宇宙，就还有救。谈判顺利。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你物理选择题错误率很高？",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林澈同学，现在不是学术门诊时间。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "他说完看了看我们，又把手里的另一个纸袋递过来。里面是两根还热着的烤肠。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "便利店饭团今天估计被家长会大军抢完了。这个先垫一下。我请，不用感动，主要是我买二送一，第三根吃不下。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这个善意包装得很有尊严。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "成年人压力太大，高中生善意只能迂回投放。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "谢谢。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "不客气。你们聊，我去拯救我的物理选择题。别站太久，门口风大，容易把人吹得更像人生咨询现场。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "他晃着书包走远，背影很快混进校门口的人群里。那根烤肠还冒着一点热气，油纸被风吹得沙沙响。我们谁都没有立刻吃，好像这点热量来得太突然，反而不知道怎么接。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：便利店窗口，二人谈家长压力时。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你刚才听见你爸爸说话以后，手一直在捏书包带。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你看见了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。你平时紧张会开玩笑，真正难受时反而不说话。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你观察同学能不能不要这么精准？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我不是故意的。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把吸管插进热牛奶盒里，推到我面前。动作很小心，像在移动一件容易碎的实验器材。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这个比冰饮好。你刚才吃得太快，胃可能会不舒服。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是在安慰我，还是在做健康管理？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "都不是很熟练。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很轻，轻到差点被便利店冰柜的嗡嗡声盖过去。我握着那盒热牛奶，突然不知道该怎么接她这句坦白。林澈不是不会关心人，她只是每次把关心递出来时，都要先给它套上一层看起来合理的外壳。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我爸说的那些，我明知道有道理，还是会觉得难受。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有道理不代表不伤人。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这句话可以直接写进家长会使用说明。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "家长不一定会看。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她低头看着饭团包装，指腹在塑料膜上按出一道浅浅的折痕。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我妈妈说，如果这件事真的重要，就应该拿结果说话。我当时很想问，如果没有结果，它是不是就不重要了。但我没问。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "为什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为我怕她回答“是”。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "便利店门口的自动门开开合合，冷风和热气混在一起。窗外家长们陆续散去，学校门口重新露出那块写着校训的石头。我第一次觉得，那些大人不是不理解我们，他们只是太习惯用结果确认一件事值不值得。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch3-s4",
          "title": "第四节 初赛前夜",
          "lines": [
            {
              "speaker": "narrator",
              "text": "插入位置：社团教室考前检查前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "桌上铺着两人的透明文件袋。准考证被压在最上面，学生证在旁边，黑笔按长短排成一排。林澈已经检查了三遍，每检查完一遍，就在便签上画一个很小的勾。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这个勾再画下去，准考证还没丢，便签先被你用完。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "重复检查可以降低遗漏概率。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "重复到第四遍以后，降低的不是遗漏概率，是你的心率稳定性。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈正要反驳，手机屏幕亮了一下。她低头看了一眼，手指停住。屏幕上只露出一行消息：明天正常发挥，别紧张，爸爸妈妈等你好消息。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "家里发的？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以不回。不是每条期待都要立刻处理。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不回他们会担心。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那就回“收到，准备休息”。不要回小作文，不要承诺名次，不要写“我会努力不让你们失望”。这类句子今晚禁止出现。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈垂着眼，慢慢打了六个字：收到，准备休息。发送以后，她把手机屏幕朝下扣在桌上，像把那一小块亮光也扣住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我爸也发了。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "什么内容？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "“早点睡，明天别粗心。考完别忘了下午数学卷。”很有我爸风格，祝福里自带主科提醒。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "挺真实。你回“收到”，不要回“宇宙会记住我”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我在你心里到底是什么形象？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "考前容易用废话减压的人。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我低头回了收到。陈砚的消息紧跟着跳出来：明天加油，别把准考证交成观测记录。后面跟了一个手绘的土星，环画歪了，像一颗被勒住的汤圆。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "陈砚说土星代表祝福。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那个画法更像带环的糯米制品。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完自己也停了一下。夏南星看了我们一眼，没有笑出声，只把公式表翻到目录页。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：林澈卡住双星系统后，去接水之前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第三个问题问完，林澈没有马上回答。她的视线从公式第一行滑到最后一行，又回到题目旁边的蓝色标签。那几秒很短，可社团教室里所有细小声音都被拉长了：笔帽滚动、窗户轻响、隔壁教室椅子拖过地面的刺耳声。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "适用条件是……质量比可以近似处理，轨道偏心率……",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她停住。这个停顿本来不该严重。任何人都有忘词的时候，尤其在考前一晚。可林澈的脸色一点点白下去，像有人把这一个停顿迅速扩展成了整张卷子。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "没事，先跳过。我们只是在抽查。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不应该跳过。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "应该。抽查不是审判。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可是如果明天也这样呢？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很轻，轻到像不是问我们，而是问她自己。手机又震了一下，她没有看。杯子里的水已经冷了，透明杯壁上凝着一点水汽。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我去接水。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "杯子在这儿。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "水凉了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她拿起杯子时碰到了桌角，保温杯盖歪了一下。林澈很快扶正，可那一下声音已经足够让她更紧地抿住嘴。门关上以后，社团教室里安静得有点过分。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "去看看。她刚才不是忘了公式，是被“如果明天也这样”吓住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我怕说错话。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那就先别急着说。很多时候，人在楼梯间不是等一句正确答案，是等有人证明她没有因为失控就被丢下。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：楼梯间陪伴分支中，可扩展。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我坐下以后，台阶的冷意隔着布料一点点传上来。楼梯间里有一股淡淡的消毒水味，混着饮水机加热后的金属气。林澈抱着保温杯，指腹一下一下摩擦杯盖，像在确认某个还可控的圆形边界。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你不用把话说完整。说一半也行。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "说一半没有意义。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "有。有时候说一半是为了不让另一半把人压死。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她没有立刻接话。感应灯灭下去，楼梯间陷进一片灰暗。黑暗里，她的呼吸声比刚才明显，短、急，又努力压着。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我今天不只是忘了一个条件。我是突然觉得，所有东西都可能是假的。错题本是假的，训练表是假的，我说喜欢天文也可能是假的。只要明天考不好，它们就都像借口。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "谁规定考不好就会把以前都改成假的？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没有人规定。可是大家会这样看。家里会问为什么投入这么多还是不行，老师会觉得我时间分配有问题，同学会觉得我只是看起来很认真。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那你自己呢？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我可能也会这样看。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话比前面任何一句都低。她终于抬手擦了一下眼睛，很快，像不想让眼泪占用太多时间。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那我们先把明天和“所有东西”拆开。明天只是一场初赛。它很重要，但它没有权力重写你小学四年级、小区楼下、失败观测，还有这三十天。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你怎么知道它没有？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "因为我也怕。我怕我爸说得对，怕我只是突然上头，怕我考完以后又变回原来那个什么都坚持不久的人。可是我也知道，如果我明天错一道题，不代表你这些天骂醒我的每一次都白费了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈慢慢看向我。灯亮起来时，她眼睛红着，却不再像刚才那样完全缩在自己里面。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我没有骂你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你只是用非常礼貌的方式宣布我的方法无效。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有几次确实无效。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你看，你还记得。说明大脑没有全面罢工。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她低头，很轻地吸了一下鼻子。那不是彻底被逗笑的声音，但至少不再只是发抖。",
              "sourceLine": 0
            }
          ]
        },
        {
          "id": "ch3-s5",
          "title": "第五节 初赛",
          "lines": [
            {
              "speaker": "narrator",
              "text": "插入位置：初赛当天校门口集合。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "七点二十的校门口比平时早读还安静。早餐摊的蒸汽从路边飘过来，包子笼屉一层层摞着，像某种更温和的倒计时。林澈站在校门左侧，透明文件袋抱在胸前，校服拉链拉到最上面。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你来多久了？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "十二分钟。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这不是“刚到”的范围。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我需要预留交通误差。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你家到学校走路十分钟，误差能有十二分钟？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有可能忘东西。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你会忘东西？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈看了我一眼，像这个问题本身不够严谨。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不会，但不能假设不会。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我刚想笑，陈砚从后面跑过来，手里提着两杯豆浆和一袋小笼包，气喘得像参加了校运会决赛。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "赶上了。考前补给，不含玄学成分，只有碳水。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "豆浆不能带进考场。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "知道，所以现在喝。周行，你喝半杯，别喝太多，免得考到一半和监考老师进行人生申请。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你今天怎么这么靠谱？",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我妈说不能打扰你们考试。我理解为可以用食物打扰。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "谢谢。但我不喝豆浆。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我知道，容易洒。周行说的。给你带的是温水。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈愣了一下，接过那瓶温水。瓶身外面贴着一张便签，陈砚歪歪扭扭写着：看题干，别打架。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "和谁打架？",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "和题，和时间，和自己。你们竞赛生的敌人很多，我就不一一列举了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：考后到等待成绩之间。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "成绩没有当天出，焦虑却像当天就被发了下来。第二天物理课，老师在讲电磁感应，我的草稿纸边缘却不知不觉写满了“第三题到底有没有漏负号”。写到第五遍时，林澈从前排递来一张小纸条。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "纸条：别算了。你没有原题，复盘无效。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在下面回了一行。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "纸条：林老师，你上节语文课也在算第五题。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "纸条隔了半分钟才传回来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "纸条：所以这是经验教训。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我差点笑出声，只好低头假装咳嗽。讲台上的物理老师看过来，林澈立刻坐得笔直，像刚才参与纸条通信的人不是她。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "午休时，陈砚趴在桌上看我们两个轮流盯手机，终于忍不住敲了敲桌面。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你们现在很像等待彩票开奖，但是奖金是下一轮更难的题。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这么说显得我们很不理智。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你们本来就不理智。正常人考完会先忘掉，竞赛生考完会在脑内开庭，把每道题传唤一遍。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "开庭这个比喻不准确。我们只是回忆条件。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你看，还给法庭改名。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "他从抽屉里摸出一包糖，倒出三颗放在桌上。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "一人一颗。禁止用糖纸折星图。禁止吃完继续审判自己。下午还有数学小测，现实生活正在敲门。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈拿起糖，没有立刻拆。她把糖放进口袋里，像存下一点可以稍后使用的力气。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：成绩出来，夏南星宣布前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星让我们来社团教室的时候，消息只有六个字：放学后，带水。没有感叹号，没有截图，没有“恭喜”或“先别紧张”。这比直接发成绩更吓人。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "带水是什么意思？是喜极而泣补充水分，还是悲伤脱水？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也可能只是她真的让我们带水。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这个解释太朴素，不能缓解紧张。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈把手机放回桌面，又拿起来看了一眼。屏幕已经熄了，她却还是看着黑屏，像结果会提前从里面浮出来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果没过，也要复盘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "如果过了呢？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也要复盘。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你的人生选项是不是最后都会通向复盘？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "复盘至少能说明下一步做什么。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很平，可手指一直按着笔帽。按下、弹起，再按下。那支笔发出细小的咔哒声，和走廊里的脚步声混在一起。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "社团教室门开着。白板上三十天计划的最后一格还没有擦，夏南星站在窗边，手里拿着一张打印纸。她看见我们，没有卖关子，却先把两杯水推到桌上。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "先坐。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "社长，你这样很像医生叫号。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那我直接说。你们两个都过了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "空气像突然停住。林澈没有动，我也没有。那句话明明只有七个字，却像需要穿过三十天的训练表、楼顶的云、便利店的饭团和楼梯间的灯，才终于落到我们面前。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "再说一遍。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "周行，林澈，都通过初赛。排名在安全线内。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈低头看着桌上的水杯。杯口的水面轻轻晃了一下，我才发现她的手在抖。她没有哭，也没有笑，只是把那口气慢慢吐出来，像终于把一个背了很久的书包放到地上。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我现在可以高兴吗？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以。高兴三十秒。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我申请旁观高兴。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "陈砚不知道什么时候站在后门，手里举着一袋薯片。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你怎么来了？",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我在走廊等开奖。恭喜二位获得下一轮受苦资格。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "谢谢。虽然这个表述不太吉利。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "那换一个：恭喜你们从初赛副本进入决赛前置剧情。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "更像受苦了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈终于笑了一下。很短，却让社团教室里那口憋了好几天的气真正散开。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：公告栏前看名单时。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "公告栏前挤得比期中排名还厉害。有人踮脚，有人把手机举过头顶拍照，玻璃反光里叠着一张张校服领口和紧张的脸。名单旁边还贴着集训通知，纸张红得很正式，像一张突然递到面前的入场券。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我看见了！周行，在这里。你名字旁边那个学校缩写看着特别像大型考试里的隐藏关卡。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你小点声。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "为什么？光荣时刻不应该配一点群众音效吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "这里还有别人在看。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "收到，群众音效降低音量。林澈也在，顾望舒也在。哇，你们这名单含金量好高，我站旁边都觉得自己物理选择题被净化了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "旁边几个低年级学生转头看过来。林澈立刻往后退了半步，像想从所有视线里撤出去。我看见她的手指按在文件袋边缘，指节轻轻发白。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你没看错。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我知道。我只是想确认学校栏。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "林澈，你已经确认到可以背诵整张名单了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "背诵没有必要。名单会拍照保存。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "你这种回答真的很适合吓退采访记者。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "班主任从人群后面走过来，看了一眼名单，又看了看我们。\n\n[班主任] 恭喜。集训很重要，但学校课程不要完全断。材料今天放学前交，家长确认书也要签。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "家长确认书？\n\n[班主任] 住宿、手机管理、安全责任，还有缺课安排。你们不是只去比赛，是要从正常教学里挪出一段时间。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "“挪出”这个词让刚才的兴奋短暂地沉了一下。名单不是凭空给我们多出一段人生，它只是从原来的生活里切开一个口子，要求其他部分暂时让路。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：集训前一晚整理行李。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "回家后，我把夏南星给的生存包倒在书桌上。耳塞、葡萄糖、创可贴、黑笔，一件件摆开，旁边是母亲刚打印出来的家长确认书。父亲坐在客厅看了一遍通知，问的第一句话不是集训强度，而是缺的课怎么补。",
              "sourceLine": 0
            },
            {
              "speaker": "father",
              "text": "学校这边能开假条，主科作业呢？数学和物理不能停。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我带卷子过去，晚上有时间做。",
              "sourceLine": 0
            },
            {
              "speaker": "father",
              "text": "晚上不是还有模拟和复盘？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我答不上来。通知上明明写得很清楚，上午理论、下午专题、晚上测评。我忽然发现自己对“带卷子过去”这句话的想象，像把行李箱塞到已经满得合不上的最后一层。",
              "sourceLine": 0
            },
            {
              "speaker": "mother",
              "text": "先让他去。能进集训也是好事。",
              "sourceLine": 0
            },
            {
              "speaker": "father",
              "text": "我知道是好事。我只是提醒你，比赛结束以后还是要回到高考。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "“还是要回到高考”像家里墙上的钟，平时不注意，却一直在走。我把葡萄糖塞进包里，又拿出来两包，最后只留下一包。书包容量有限，人的精力好像也是。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "手机震了一下，是林澈发来的清单照片。她把每件东西都按类别列好，最后一行写着：不要带太多主科资料，会带不动，也做不完。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "消息：你怎么知道我正在往包里塞数学卷？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "消息：因为我也刚拿出来三套。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "消息：林老师终于承认人类行李箱存在物理上限。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "消息：不是承认，是重新评估。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我看着那句“重新评估”，把最厚的那本习题册放回书架。它落回原位时发出一声闷响，像某种小小的妥协。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：报道当天，手机统一管理、宿舍生活。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "报道流程比想象中更像入营。签到、领胸牌、交家长确认书、登记过敏史，最后是手机统一装进透明袋。袋口封上时，我突然有种被世界临时断开的错觉。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "完了，我的精神外接器官被收走了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你没有手机会怎样？",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "大概会被迫和真实世界交流。风险很大。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "训练期间减少干扰是必要的。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "道理我懂，但我手机里还有昨天没看完的搞笑视频。它现在停在最关键的三秒。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "那很好。你这几天会一直惦记它，训练动力稳定。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "顾同学，你的幽默感是冷启动的吗？",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "宿舍在三楼，四人间，铁架床，床板一翻就响。走廊尽头有饮水机，门口贴着作息表：六点五十起床，七点二十早饭，八点第一节课。每一行都没有商量余地。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个床一动就响，如果有人半夜翻身，会不会全寝室一起进入观测模式？",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我可以提前声明，我睡相一般，可能制造轻微地震波。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我们不在一个宿舍。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我知道。我只是表达对集训住宿条件的科学担忧。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "耳塞在生存包里。睡前不要喝太多水。空调温度如果太低，可以找老师调。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这是给我写了一份宿舍生存指南？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你第一次住宿集训。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完把视线移到自己的资料袋上，像这句解释已经足够。顾望舒在旁边看了她一眼，没有说话。唐越则用手肘碰了碰我。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "你同校同学关心人挺硬核。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "她一般把关心伪装成风险提示。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我听得见。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：座位按成绩排后。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "座位表贴出来的时候，没有写分数，只写姓名和编号。可所有人都知道编号是什么意思。有人看完立刻走开，有人假装找笔又回来看第二遍。纸很薄，却像把教室切成了几条看不见的等高线。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "第三排靠门。好，方便我在精神崩溃时迅速撤离。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这个位置至少空气流通。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "空气流通不代表知识流通。刚才我前面那位同学说第四题可以用摄动展开，我听得像在听外语听力。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "摄动展开我们也学过。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "学过和当场想起来之间，隔着我整个昨天晚上。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈没有接这句玩笑。她看着第二排中间的位置，又看向第一排的顾望舒。桌距不到一米，强弱却不再是模糊的“别人很厉害”，而是她抬头就能看见顾望舒草稿纸上的每一步。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你还好吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "还好。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你这个还好听起来像系统提示“电量低于百分之二十”。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我只是需要重新评估。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把书放到第二排，动作很轻。阳光从窗户照进来，落在她的座位号上。那张小小的纸片没有评价她，却比任何评价都具体。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：老师讲错题时。\n\n[老师] 你们现在最容易犯的错，是把“会不会”理解成“记不记得公式”。公式当然要记，但决赛题不会把路牌都插好。它会给你一堆条件，让你自己判断哪条路能走。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "老师把粉笔在黑板上轻轻敲了两下，画出三条分岔线。\n\n[老师] 第一条路，直接代公式，快，但可能错得很快。第二条路，把所有情况都展开，安全感很强，但时间会死。第三条路，先判断量级和边界，决定哪些必须保留，哪些可以暂时放下。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "小声：我昨天选了第四条路，迷路。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "小声：你至少发现自己迷路。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "小声：听课。\n\n[老师] 你们不用怕自己错。怕错没问题，但怕到不敢看错误路径，就麻烦了。错误路径不是丢脸材料，是下次避坑地图。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈在本子上写下“避坑地图”，又很快划掉，改成“错误路径”。我看见她改字的动作，突然觉得她连接受一个比喻都要先判断精度。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：顾望舒午饭讲去年失败后。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "食堂窗口的汤快见底了，阿姨用勺子从桶底捞起几块海带。我们这桌却没人动筷。顾望舒说完“第一个被刷”以后，唐越难得没接玩笑，只把鸡腿上的一小块皮挑开。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你当时不难受吗？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "难受。回学校以后，我有两周不想碰望远镜。看见校准螺丝都会烦。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "然后呢？",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "然后物理老师让我去帮高一社团调设备。我一开始很抗拒，后来发现手还记得步骤，只是脑子一直在重演失误。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "这个听起来很像恐怖片，只不过主角是赤道仪。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "差不多。后来我就把那两次失误拆开写。第一次是手抖，第二次不是手抖，是急着把第一次抹掉。真正的问题在第二次。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "因为你把纠错变成了证明自己没错。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "对。越想证明，越容易把新的步骤也弄坏。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈低头看着自己的餐盘。西红柿炒蛋已经凉了一点，油在边缘凝成很薄的一层。她没有像平时那样马上记笔记，而是把筷子放下，像这句话需要先落到心里，再决定写在哪里。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "所以坐标不是“我去年失败了”，是“我在补救时会乱”。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "更准确一点，是“我在想立刻抹掉失败时会乱”。所以今年我给自己定的规则是，偏了就停，先读表，不抢救形象。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "不抢救形象，这个我擅长。我基本没有形象可抢救。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你有。只是你管理得比较松散。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "谢谢，听起来像委婉版批评。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈终于轻轻笑了一下。顾望舒看着她，语气仍然平静。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "你不用急着接受自己会错。先学会在错的时候停住，不要立刻给自己判刑。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：分组请教选择后，可追加通用收束。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "那天下午的教室很热，空调风吹不到角落，讲义纸边有一点卷。林澈讲完自己的错误路径后，声音比刚开始低了一些，但没有断。她说到“这里我跳过了量级比较”时，自己在旁边画了一个小叉。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "这个叉画得对。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我以前会觉得画出来很难看。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "难看说明它具体。具体才有办法改。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我的错题本一直很具体，已经难看到具有艺术价值。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我可以开一个展，名字叫《人类如何在第四题迷路》。\n\n[老师] 后排两位，艺术展留到晚上。现在把错误路径讲完。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "教室里有人笑了一下。笑声很短，却把刚才那种紧绷的空气松开一点。林澈低头继续写，她这次没有把错误藏到完整推导后面，而是把它放在了第一行：未先比较量级，直接忽略小项。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：老师宣布取消模拟、去天文台。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "消息传到教室时，第一反应不是欢呼，而是一片不敢相信的安静。大家像被连续投喂了五天压缩饼干以后，突然听见今晚有热汤，一时不知道该不该相信。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "老师，确认一下，是去天文台，不是去天文台旁边的教室继续模拟？\n\n[老师] 去天文台。模拟取消。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我现在对“取消”两个字产生了文学级别的感情。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "别高兴太早。观测也有记录要求。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "顾望舒，你这句话像在热汤里加了一勺错题。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "有记录要求也正常。否则很多细节会忘。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "你们三个能不能允许快乐裸奔五秒钟？\n\n[老师] 五秒结束。带外套，带记录本，不许带零食上平台。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "椅子被推开的声音比平时轻快很多。林澈把讲义合上时，手在封面停了一下。那本错题本已经翻得边角发毛，她却没有像往常一样把它塞进怀里，而是只拿了薄薄一本观测记录。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "不带错题本？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "今晚不适合。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这句话应该刻在集训中心门口。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你外套拉链没拉。天文台平台风会大。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你刚从错题本切换到生活委员？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "感冒会影响后续训练。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完走到前面，没等我回答。我低头把拉链拉上，觉得这句话的语序如果换一下，大概就是“别着凉”。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：排队看土星前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "天文台里面只开红灯，所有人的脸都被照成一种奇怪的暗色。圆顶缓慢转动时发出低低的机械声，像一头很老的机器在夜里翻身。队伍沿着墙边排开，大家明明刚从高压教室里出来，却在这片红光里自动压低了声音。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我现在不敢大声说话，感觉会惊动宇宙。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "宇宙应该没那么容易被你吵到。\n\n[老师] 但老师会。低声。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "收到，先不惊动老师。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈站在我前面，手里攥着记录本。她没有翻页，只是偶尔抬头看圆顶开口处露出的天空。那一小块夜空被城市光污染洗得不够黑，却还是比集训教室的投影幕真实太多。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "等会儿看目镜时不要用力碰镜筒。眼睛贴太近容易碰到。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你是不是觉得我会把土星撞歪？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "土星不会被你撞歪，望远镜会。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "谢谢，宇宙尺度上我很安心。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她从口袋里拿出一张干净的镜头纸，递给我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "如果眼镜起雾，用这个。不要用校服袖子擦。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你到底准备了多少东西？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不多。只是必要物品。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "她这个“必要”的范围应该包括半个实验室。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "能用上就不算多。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈听见顾望舒这句支持，表情明显放松了一点。两个平时都很认真到让人紧张的人，在“准备过度是否合理”这件事上达成了奇妙同盟。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：林澈讲小学四年级故事中，可扩写。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "那天广场特别吵。旁边有卖烤肠的，还有套圈摊。主持人拿喇叭喊“排队看土星”，我一开始以为是宣传词。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "像“买一送一看土星”？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "差不多。因为它听起来太不真实了。土星应该在书上，在很远的地方，不应该和烤肠摊、塑料凳、广场舞音乐放在一起。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说到这里，手指轻轻碰了一下栏杆，又很快收回。夜风把她的碎发吹到脸侧，她没有立刻拨开。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "排队的时候，前面有个小孩一直问“还有多久”。我也想问，但我怕工作人员觉得我烦。轮到我时，目镜位置有点高，我要踮脚。工作人员扶了一下望远镜，说只能看十秒。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "十秒够吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不够。可是第一秒就看到了。很小，不像照片那样清楚，环也不是很宽，只是一条细细的线。我当时脑子里第一句话是：原来课本没有骗我。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这个反应很你。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "后来我回家查了很多资料。土星环由冰和岩石碎块组成，主要环系分 A、B、C 环，中间有卡西尼缝。其实那台望远镜看不清这些，但我知道它们在那里，就觉得很奇怪。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "奇怪什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "奇怪自己明明只看到一点点，却会想知道全部。那种感觉不是“我要考第一”，也不是“我要证明给谁看”。就是……我想再看清一点。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她终于把碎发拨到耳后，指尖被夜风吹得有点红。我突然想起她在楼顶记录云，在错题本上写边界，在考前楼梯间怀疑自己。那些看起来很紧的东西，最早也许都来自这一句很简单的“再看清一点”。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "那小学四年级的你后来排第二次了吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "没紧张。队伍太长，活动结束了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "遗憾吗？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "很遗憾。所以现在每次轮到我看，我都会多记一点。不是为了不亏，是怕以后忘了它曾经那么真实。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我想说你不会忘的，可这句话太轻。林澈这种人连喜欢都要留下证据，不是因为她不相信喜欢，而是因为她太怕有一天现实会把它说成错觉。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：决赛日早上宿舍/食堂。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "决赛日早上，我不是被闹钟叫醒的，是被上铺翻身的铁架床声叫醒的。宿舍里还很暗，窗帘缝里透进一点灰白色的光。有人在被子里小声背公式，声音断断续续，像梦话。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "周行，你醒了吗？",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "被你们全寝室的宇宙低语叫醒了。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我刚梦见老师说今天加试化学。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这梦太恶毒了。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "所以我醒来以后居然觉得天文决赛也不是不能接受。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "洗漱间里挤满了人。牙膏味、冷水声、拖鞋声混在一起，每个人都比平时安静。镜子里我的头发翘起一撮，怎么压都压不下去，像身体在用最幼稚的方式提醒我：你并没有完全准备好。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "食堂的粥比平时稀，鸡蛋还冒着热气。林澈坐在靠窗位置，面前的鸡蛋已经剥了一半，蛋壳被她按大小分成几块。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你连蛋壳都要分类？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "手上需要有事做。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "懂了，考前解压项目：鸡蛋地质分层。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "你今天玩笑密度偏高。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "手上没蛋壳，只能嘴上有事做。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把另一个没剥的鸡蛋推给我。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "吃掉。空腹会影响上午后半段。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你今天还负责后勤？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我只是不想你第四题做到一半开始饿。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说完低头喝粥，像这不是一句关心，而是考前变量控制。我剥开鸡蛋，蛋白还有点烫，热气扑到指尖，忽然把早晨那种悬空感往下压了一点。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：理论考试中，周行视角。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第四题之后，时间开始变得不再均匀。前十分钟像水一样漏掉，后五分钟却每一秒都能听见。监考老师的鞋底偶尔擦过地面，窗外有鸟叫了一声，很快被空调的低噪音吞掉。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（先标可拿分部分。不要追漂亮解。漂亮解不一定爱你。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我在草稿纸左上角写下时间：剩余六十二分钟。数字落下去的一刻，心反而稳了一点。题目不会因为我害怕变短，时间也不会因为我盯着钟表变长。能做的只有把路拆开。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "第五题第一问很熟，熟到危险。我差点直接套训练表里那个模型，笔尖已经写出第一个符号，又硬生生停住。题干里多了一句“观测误差可视为系统偏差”，这不是装饰。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "（别让熟悉感替你读题。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我把那一行圈出来，重新写假设。这样会慢一点，可至少这一次，慢不是因为慌，是因为我知道哪里不能快。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：理论考试中，林澈视角。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈卡在第四题时，第一反应不是“不会”，而是“不能错”。这个念头一冒出来，她就知道糟了。不能错会让她把所有路都铺开，把每个边界都证明一遍，最后在时间用完前得到一张看起来很安全、实际上没有答案的草稿纸。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "（停。先写目标量。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把草稿纸翻到干净的一面，深吸了一口气。手心有汗，笔杆有点滑。她没有急着擦，而是把笔放下两秒，像顾望舒说的那样，偏了就先停，不抢救形象。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "（已知：周期、角距离、距离估计。要求：质量范围。可近似：小角度。不能省：误差传播。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "每写下一项，题目就从一团纠缠的线变成一小段可以处理的绳结。她仍然紧张，心跳仍然快，可那种快不再把她往空白里推。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "写到误差范围时，她突然想起夜里天文台的土星环。目镜里那么小的一圈，不能因为看不清卡西尼缝就否认它存在。题目也是。先把能看清的部分写下来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "（先拿主干。后面再补。）",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：观测操作，顾望舒和林澈。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "观测平台上的风比上午更硬。记录纸必须用夹子压住，望远镜脚架旁边贴着胶带标线。老师站在计时器旁，提醒每组只有规定时间。\n\n[老师] 开始以后先读任务，不要急着碰设备。所有调节动作报给记录员。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "顾望舒走上前时，手指在记录夹边缘停了一下。她没有看我们，也没有看去年那条看不见的坐标。她只是先读任务，读完才碰寻星镜。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "架设稳定。先校水平。记录初始偏差。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她的动作比平时慢，可每一步都落在该落的位置。第一次校准后，指针偏了一点。唐越在旁边吸了一口气，我也下意识屏住呼吸。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "偏差超出。停止。重新读数。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她没有立刻拧回去，而是低头确认记录表。那两秒很长，长到像给去年和今年之间留出一道缝。然后她重新调整，读数回到允许范围。\n\n[老师] 继续。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "顾望舒轻轻点头。没有庆祝，也没有急着把刚才那点偏差抹掉。她只是继续往下做。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "她停住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "嗯。没有抢救形象。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "轮到林澈时，她第一步很稳，第二步却因为风吹记录纸，读数慢了半拍。她眉头很轻地皱了一下，我太熟悉那个表情：她又想把这半拍归类成失败。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "重新确认水平。记录风干扰。\n\n[老师] 可以。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说出“风干扰”时，声音没有抖。第二次读数压回范围内，她把笔帽扣上，动作很轻。我知道她不是不紧张，只是终于没有把紧张当成错误本身。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "小声：你们强者都好会停。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "这大概也是练出来的。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我以后也练。先从吃饭别抢最后一块鸡腿开始。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "那个不属于同类训练。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈听见这句，差点笑出来，最后只把嘴角压下去，继续写完记录。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：大厅等待电子屏亮起前。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "科技中心大厅的空调开得很足，可人太多，空气还是闷。有人靠墙站着背单词，有人盯着手机家长群，有人小声估分。电子屏黑着，黑得像故意拖延。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我现在理解古代人等日食预报的心情了。明知道十点才亮，还是想提前看一眼。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你考完不是说要放空？",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "放空失败。我的大脑自行加载最坏情况。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "最坏情况不一定会发生。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "谢谢，但你这句话听起来像医生说“先等检查结果”。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "本来就是等结果。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "顾同学，你今天还能这么冷静，我佩服。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "不是冷静。是紧张到懒得表现。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "这句话让林澈抬头看了她一眼。顾望舒的手空着，没有记录本，没有红笔，指尖却轻轻抵着掌心，留下几道浅印。原来强者等待结果时，也不会真的像屏幕一样黑着不动。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "都别站太久。周行，别一直晃脚。林澈，水瓶放松一点，快被你捏成观测误差了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "抱歉。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "不用道歉。水瓶又不会告你。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "如果它告，陈砚可以做辩护律师。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我今天只是亲友团，不承接法律业务。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "陈砚特意从学校赶来，校服外套拉链没拉好，手里还提着一袋不知道从哪买的糖。他把糖分给我们，每人一颗，像给即将上刑场的人发放不太正式的精神补贴。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：顾望舒名字出现后。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "一等奖名单滚到第三行时，顾望舒的名字出现了。大厅里有人小声“哇”了一下。她站得很近，却没有立刻出声，只是盯着那一行字，看完名字，看学校，看综合排名，再看回名字。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "顾望舒，是你。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "嗯。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她的声音很轻，像怕一用力那行字就会动。过了几秒，她才慢慢呼出一口气。那不是胜利者夸张的松弛，更像一个人终于从去年那段没有走完的路上，往前迈过了一个很具体的标记。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "恭喜。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "谢谢。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她转头看林澈，眼睛里有一点不明显的红。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "去年我一直在想，如果当时第二次校准停一下，会不会不一样。现在不用想了。今年我停了。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。你停住了。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "而且停得很贵，值一等奖。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "你这个夸法很吵。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "但很真诚。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "顾望舒终于笑了一下。那一点笑不大，却让她从“名单上很高的名字”重新变成了这几天和我们一起吃凉掉鸡腿、吐槽错题、在观测平台吹风的人。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：林澈名字出现时。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈的名字是在第二轮滚动时出现的。第一轮太快，她好像错过了，又好像根本不敢确认。第二轮到二等名单靠前位置，屏幕蓝光跳了一下，林澈两个字稳稳停在那里。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "林澈。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我看见了。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说看见了，可眼睛还盯着屏幕，像怕一眨眼名字就会变成另一个人。学校、奖项、综合分，每一项都在那儿，没有遗漏，也没有需要她补充证明的空格。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "不是最高。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "不是最高，但很扎实。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "第四题如果再快一点，观测如果第一遍校准更准一点……",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "林澈，先停。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "夏南星的声音不重，却刚好把她从那条熟悉的复盘路上拦下来。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "你可以晚上复盘。现在先练一件更难的事：把结果看完整。不是只看它没到哪里，也看它到了哪里。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈的喉咙轻轻动了一下。她抬头，重新看屏幕。这一次，她没有急着寻找缺口，只是把那一行字从左到右读了一遍。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "林澈，二等，综合分……",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "靠前。很稳。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "嗯。很稳。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她重复这两个字时，声音有点不熟练。像一个一直习惯把自己放在问题里的人，第一次试着把自己放进结果里。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：拍照段。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "站近一点。顾望舒别离屏幕太近，会反光。周行，你不要比剪刀手。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "我还没举。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "提前预判。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "社长，我可以负责现场气氛。三，二，一，大家想象今晚不用做竞赛题！",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "这个想象太奢侈了，我笑不出来。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "明天确实不用做。",
              "sourceLine": 0
            },
            {
              "speaker": "wangshu",
              "text": "后天也不一定。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你们不要在拍照前讨论训练安排。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "很好，终于有人说了句像正常高中生的话。看镜头。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "闪光灯没有开，只有电子屏的蓝光落下来。林澈站在中间，手里还拿着那瓶被捏得有点变形的水。顾望舒把胸牌摘了，唐越在旁边强行把陈砚拉进第二张合照。照片按下的一瞬间，没人笑得特别标准，但每个人都像真的从某个坡道上爬了上来。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "我宣布，这张照片标题叫《获奖选手和他们的后勤亲友团》。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "我也是选手。",
              "sourceLine": 0
            },
            {
              "speaker": "chen",
              "text": "那叫《获奖选手和一个混入亲友团的选手》。",
              "sourceLine": 0
            },
            {
              "speaker": "tang",
              "text": "你语文作文一定很危险。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "标题可以简单一点。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "叫什么？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "结果公布日。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她说得很平，但我听出她在认真给这一天命名。不是“还不够好日”，也不是“下一阶段开始日”，只是结果公布日。它终于可以先成为它自己。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "插入位置：返校后社团教室，谈家长反应。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "返校路上，手机陆续还回来，消息像积攒了一天的雨突然落下。父亲发来三条：恭喜；晚上回家吃饭；数学老师说明天要补一张卷。母亲发了一个笑脸，又问奖状什么时候能拿回去拍照。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈的手机也一直亮。她看了很久，最后只回了几句很短的话。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "家里怎么说？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "说很棒。然后问接下来是不是该把重心放回高考。还问这个奖项对自主招生有没有用。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "你怎么回？",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我说回家再说。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "她把手机扣在桌上。奖状放在灯下，纸面反光很亮，可手机扣下去那声轻响，像把另一个更大的题目也放到了桌上。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "他们会这么问，很正常。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "正常不代表我们已经准备好回答。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "所以今晚不用回答完整。你们今天只需要做三件事：吃饭，睡觉，承认这段路结束了。明天开始，再讨论高考和专业。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "可是如果不马上计划，会不会掉回去？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "会掉一点。但人不是只能靠一直跑来证明自己还在路上。你们要学会从竞赛节奏切回高中生活，这比多做一套题难。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "林澈看着白板。上面的初赛倒计时痕迹还没完全擦干净，旁边新写的“决赛复盘”也只剩半行。两个阶段叠在一起，像擦不净的粉笔灰。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "我不太会停。",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "那就从今晚开始练。停不是放弃，是给下一段路留体力。",
              "sourceLine": 0
            },
            {
              "speaker": "zhou",
              "text": "社长，这句可以写进便签吗？",
              "sourceLine": 0
            },
            {
              "speaker": "xia",
              "text": "可以。比“裸奔式自信”文明。",
              "sourceLine": 0
            },
            {
              "speaker": "lin",
              "text": "也比“葬礼式谦虚”适合给家长看。",
              "sourceLine": 0
            },
            {
              "speaker": "narrator",
              "text": "我们都笑了一下。笑完以后，教室又安静下来。不是没有压力的安静，而是终于允许压力暂时坐到旁边，不立刻抢走今天。",
              "sourceLine": 0
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
      "title": "脱轨与锚点",
      "sections": [
        {
          "id": "ch7-s1",
          "title": "通知没有写完",
          "lines": [
            {
              "bg": "schoolHallAwardBoard",
              "clear": true,
              "speaker": "narrator",
              "text": "从天津比完决赛回来的第三天。实验楼一楼公告栏上的红榜，边缘已经被初夏的穿堂风吹得卷起了毛边。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "narrator",
              "text": "我原以为考完决赛总算能松口气，让生活退回高三那种虽然单调但也算规律的节奏里——早读的粉笔灰、写不完的错题本，还有黑板右侧每天都在掉数字的高考倒计时。"
            },
            {
              "speaker": "narrator",
              "text": "直到班主任老许把我叫进弥漫着清凉油味的办公室。他那张常年压着各科成绩单的玻璃垫板下，抽出两份还透着复印机余温的A4纸。"
            },
            {
              "speaker": "narrator",
              "text": "纸上的黑体加粗标题简单直接，却看得人心里一紧：《国家队候选集训营报到须知》。"
            },
            {
              "speaker": "homeroom",
              "text": "「别搁这儿傻乐。你跟林澈都在名单上，但这只是候选营。别以为进了名单就是去公费旅游的。」"
            },
            {
              "speaker": "zhou",
              "text": "「老许，其实我现在只关心一个非常现实的问题。」"
            },
            {
              "speaker": "homeroom",
              "text": "「什么问题？」"
            },
            {
              "speaker": "zhou",
              "text": "「这上面写的‘七天全封闭’，是不是意味着这周五下午那场数学周测，我能合法逃掉了？」"
            },
            {
              "speaker": "homeroom",
              "text": "「想得挺美，自己翻到第二页看补充条例。」"
            },
            {
              "speaker": "narrator",
              "text": "我翻过那张还带着油墨味的纸。在页脚角落里，用极其工整的红笔批注了一行字：『返校后一周内完成所有缺考科目的限时补测』。"
            },
            {
              "speaker": "narrator",
              "text": "很好。这句话比什么“国家队”都要真实，一秒钟就把我拉回了高三的残酷现实里。"
            },
            {
              "speaker": "narrator",
              "text": "就在这时，办公室的半透明磨砂门被推开了。林澈抱着一摞高高叠起的物理实验报告单走了进来。"
            },
            {
              "speaker": "narrator",
              "text": "她今天难得没把校服外套的拉链拉到最顶上。把那一叠报告单稳稳搁在桌角后，她偏过头，视线越过那叠作业，自然地落在了我手里的通知单上。"
            },
            {
              "speaker": "lin",
              "text": "「你的也发了？看这表情，是翻到第二页的数学补考通知了？」",
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
              "speaker": "narrator",
              "text": "她语气里那股常年自带的冷淡，似乎被天津那晚的夜风稀释掉了几分，甚至尾音里还带着点少见的调侃。"
            },
            {
              "speaker": "zhou",
              "text": "「不是，你怎么还能读心了。我就不能是因为进了候选营而喜极而泣吗？」"
            },
            {
              "speaker": "lin",
              "text": "「以你平时面对圆锥曲线大题时的精神状态来看，补考对你的心理冲击应该远大于进候选营的喜悦。」"
            },
            {
              "speaker": "narrator",
              "text": "她伸手从桌上抽走那份属于她的通知单。手指擦过纸张边缘的时候，我们对视了一眼。没有原来竞赛前那种紧绷，只有一起熬过决赛后的默契。"
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
              "bgm": "prelimReady",
              "speaker": "narrator",
              "text": "天津站的空调开得相当足，玻璃门一开一合，把外面那种黏糊糊的暑气切成一段一段的。我们学校一共就我们俩进了候选，老许一路把我们送到检票口，还在不停地叮嘱。"
            },
            {
              "speaker": "homeroom",
              "text": "「到了营里先去报到处，别丢三落四。集训营里都是各省来的顶尖高手，别有太大压力，但也别自己先露了怯。」"
            },
            {
              "speaker": "zhou",
              "text": "「老许，你这两句话在逻辑上有点互殴。这属于又要我佛系，又要我支棱起来。」"
            },
            {
              "speaker": "homeroom",
              "text": "「这叫战术上清醒，战略上自信。少跟我贫嘴。」"
            },
            {
              "speaker": "lin",
              "text": "「许老师放心，我们到了会在微信群里发定位和报平安。」",
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
              "text": "「好。林澈，上车后你帮周行把材料再核对一遍。我怕他一放松脑子就断线。」"
            },
            {
              "speaker": "zhou",
              "text": "「老许，我在你们心里到底是个什么无法自理的形象？」"
            },
            {
              "speaker": "lin",
              "text": "「一个潜力很足，但报到时大概率会找不到自己身份证复印件的形象。」"
            },
            {
              "speaker": "zhou",
              "text": "「很客观，但是很扎心。」"
            },
            {
              "speaker": "narrator",
              "text": "她倒也没笑，只是非常熟练地拉开我的文件袋，手指飞快地拨过身份证、学生证、照片 and 家长签字表。确认无误后，她从包里摸出一支黑色中性笔，扔进我的袋子里。"
            },
            {
              "speaker": "lin",
              "text": "「拿着。报到处填表，笔永远是不够用的。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这种随时能掏出应急物资的习惯，要是去玩生存游戏，绝对是顶级辅助。」"
            },
            {
              "speaker": "lin",
              "text": "「没有物资。但有这个。」"
            },
            {
              "speaker": "narrator",
              "text": "她随手把一颗薄荷糖抛到我手里。绿色的糖纸被她捏出了一点折痕。我没舍得立刻剥开，顺手塞进了校服外套的最深处。"
            },
            {
              "bg": "campCheckinDesk",
              "clear": true,
              "bgm": "dailyClassroom",
              "speaker": "narrator",
              "text": "集训地点在郊区的一所大学。网约车刚拐进校门，就看见主干道上挂着白底蓝字的横幅——“全国中学生天文奥赛国家队候选集训营”。横幅被夏风吹得哗啦啦直响，很有那种大型考试的仪式感。"
            },
            {
              "speaker": "narrator",
              "text": "一楼大厅的报到处挤满了人。长桌后堆着成叠的胸牌、住宿表和课程表。尖子生扎堆的地方，空气里有种特有的安静与微妙的紧绷。"
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
              "text": "「身份证原件和健康承诺书给我。去旁边领胸牌，男生三号楼412。下一个。」"
            },
            {
              "speaker": "narrator",
              "text": "我刚把带着塑料味的胸牌套在脖子上，就感觉到侧面有视线。顾望舒穿着件极简的白衬衫，单肩挂着电脑包，胸牌戴得很端正。"
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
              "text": "「附中大佬。你来得也太早了吧？」"
            },
            {
              "speaker": "wangshu",
              "text": "「坐了高铁首班车而已。大厅右侧的分组表出了，你们两个都在B组。」"
            },
            {
              "speaker": "lin",
              "text": "「你呢？」",
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
              ],
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「A组。刚去机房考场踩过点了。」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「怎么听起来像游戏开局踩点一样专业？」"
            },
            {
              "speaker": "wangshu",
              "text": "「只是熟悉考场环境和排期。B组下午两点有数据处理摸底，要求自带电脑，记得充好电。」",
              "focus": "wangshu"
            },
            {
              "speaker": "lin",
              "text": "「谢了。」",
              "focus": "lin"
            },
            {
              "speaker": "wangshu",
              "text": "「不用。集训营最后看总成绩，这种基础信息隐瞒了也没意义。下午好好考。」",
              "focus": "wangshu"
            },
            {
              "speaker": "narrator",
              "text": "她扔下这句一贯冷淡的提醒后，转身走向楼梯口。林澈走向那块贴着名字的分组板。"
            },
            {
              "speaker": "lin",
              "text": "「B组有个熟人。唐越。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「谁？」"
            },
            {
              "speaker": "lin",
              "text": "「闭幕式那天，坐我们斜前排，当场举手问教练能不能修改评分细则那个男生。」"
            },
            {
              "speaker": "zhou",
              "text": "「哦！那个自来熟的哥们。我觉得他精力挺旺盛的。」"
            },
            {
              "speaker": "lin",
              "text": "「性格比较跳跃，可能不太按常理出牌。走了，去宿舍放东西。」"
            },
            {
              "bg": "universityDormitory",
              "clear": true,
              "speaker": "narrator",
              "text": "男生宿舍是标准的大学配置。我把行李箱塞进床底，刚把胸牌挂在椅背上，手机就震了一下。"
            },
            {
              "speaker": "narrator",
              "text": "林澈发来一张照片，是楼下的详细课程表。她用红笔圈出了下午两点的数据处理摸底。"
            },
            {
              "speaker": "lin",
              "text": "「电脑充电线带了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「带了带了。」"
            },
            {
              "speaker": "lin",
              "text": "「拍张照发我确认。口说无凭。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这监督力度怎么比老许还大？图片.jpg」"
            },
            {
              "speaker": "lin",
              "text": "「因为在这里电脑没电等于摸底成绩直接归零。」"
            },
            {
              "speaker": "narrator",
              "text": "我看着屏幕，听着窗外偶尔传来的蝉鸣，笑了笑。这个集训营虽然全是生面孔，但有她这种熟悉的督促在，心里感觉还算挺踏实的。"
            },
            {
              "bg": "cgCh7CampCheckinLuggage",
              "clear": true,
              "speaker": "narrator",
              "text": "下午一点五十，我们在天文楼门口汇合。下午的阳光挺毒，她递给我一瓶常温的矿泉水。"
            },
            {
              "speaker": "lin",
              "text": "「别喝冰的。下午的摸底强度不小，肠胃要是这时候掉链子，影响状态。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你定义下我这是在偷偷进修《如何把关心说得像考场纪律》这门课？」"
            },
            {
              "speaker": "lin",
              "text": "「少贫嘴。进楼了。」"
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
              "bgm": "rivalry",
              "speaker": "narrator",
              "text": "多媒体阶梯教室里坐了五十多个人。大家面前都摆着笔记本电脑，屏幕上跑着星历表、Python代码或者各种数据软件。空调冷风吹得很足，但空气里那种静悄悄的紧绷感，还是挺明显的。"
            },
            {
              "bg": "cgCh7LectureHallFirstRow",
              "clear": true,
              "speaker": "narrator",
              "text": "第一排的投影光冷冰冰地打在林澈脸上。她低头在活页本上写下日期，字迹工整利落。我坐在她旁边，听着四周密集的键盘声，真切地意识到身边的同学确实都是各省的高手。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「欢迎来到候选集训营。接下来七天，会有理论、实测、数据处理和英文文献阅读的轮番测试。」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「不用太在意以前的成绩，能坐在这里大家都不差。七天后，大名单上只会留下最综合的几个人。希望大家都能发挥出真实水平。」"
            },
            {
              "speaker": "zhou",
              "text": "「……这老师说话挺直白的，一下子就把集训的紧张气氛拉满了。」"
            },
            {
              "speaker": "lin",
              "text": "「紧张也没用。注意听流程安排。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「听到了，竞争很激烈，随时淘汰。」"
            },
            {
              "speaker": "lin",
              "text": "「抓重点！下午这场不计入最终成绩，但会决定后续分组。」"
            },
            {
              "speaker": "narrator",
              "text": "她把课程表推到我面前。上面已经被她用荧光笔分好了类：蓝色理论，黄色观测，绿色数据，红色复盘。"
            },
            {
              "speaker": "narrator",
              "text": "前排忽然有个头发有点乱的男生转过身，动作挺大，冲我们挥了挥手。"
            },
            {
              "speaker": "tang",
              "text": "「星州一中的吧？久仰久仰。我叫唐越，B组的。听说你们两个在决赛时配合得特别好。」",
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
              "text": "「传言多少带点夸张成分，也就是大家互相兜底罢了。」"
            },
            {
              "speaker": "tang",
              "text": "「太谦虚了哥们。等会儿数据题大家互相交流一下思路？听说这次题量不小。」"
            },
            {
              "speaker": "lin",
              "text": "「考试期间禁止交流。另外，你如果再不把压在电脑散热孔上的书拿开，一会电脑发热降频会卡死。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "left"
                },
                {
                  "id": "tang",
                  "img": "tangNeutral",
                  "pos": "right"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "tang",
              "text": "「哎哟！多谢大佬提醒！」",
              "focus": "tang"
            },
            {
              "speaker": "narrator",
              "text": "唐越赶紧转回去整理桌面。林澈把笔帽扣上，轻轻敲了一下我的草稿纸。"
            },
            {
              "speaker": "lin",
              "text": "「收心。别跟着他瞎聊分散注意力。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你防备心也太强了吧。」"
            },
            {
              "speaker": "lin",
              "text": "「我是怕你顺着他的话头聊下去，浪费脑细胞。」"
            },
            {
              "bg": "dataLabNight",
              "clear": true,
              "bgm": "focusDerivation",
              "speaker": "narrator",
              "text": "摸底试卷通过局域网发下来的瞬间，教室里立刻响起了连绵的键盘敲击声。题目不简单，几张原始数据表，外加一段英文说明。"
            },
            {
              "speaker": "zhou",
              "text": "「这次居然可以直接用电脑跑数据了。之前CNAO可是只能用计算器的。」"
            },
            {
              "speaker": "lin",
              "text": "「既然是选拔营，工具限制自然会放宽。别分心，看第二段条件。」"
            },
            {
              "speaker": "narrator",
              "text": "我立刻闭嘴。电脑风扇声在教室里嗡嗡作响。面对那一排排繁杂的数据，我强压下立刻出图的冲动。林澈坐在我旁边，用鼠标沉稳地把题面里所有的约束条件高亮标出。"
            },
            {
              "speaker": "narrator",
              "text": "我也跟着慢下来，先拆变量，再统一度量衡。这是平时刷模拟卷时养成的肌肉记忆。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「距离交卷还有三十分钟。遇到卡壳的数据不要死磕。」"
            },
            {
              "speaker": "narrator",
              "text": "我卡在了第三列数据上。有一个明显的异常点，如果直接删掉，拟合出的曲线会非常漂亮；但英文说明里有一句提示：观测当晚有短暂的云层扰动。"
            },
            {
              "speaker": "zhou",
              "text": "「这题设的陷阱挺深。这数据应该不能随便删。」"
            },
            {
              "speaker": "narrator",
              "text": "我极低地念叨了一声。林澈没有回头，但在键盘声中，她随手把一块橡皮推到了两张桌子的接缝处。"
            },
            {
              "speaker": "narrator",
              "text": "这个微小的动作，在这个安静的考场里，像是一颗定心丸。她没有说话，但她的态度在告诉我：我的判断是对的。"
            },
            {
              "speaker": "tang",
              "text": "「哎！这异常点是不是还得算多重权重啊？」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「第三排那位同学，考场内保持安静。」"
            },
            {
              "speaker": "narrator",
              "text": "唐越立刻缩了回去。最后五分钟，我在答题框里敲下：‘由于环境扰动，保留该异常点但将其置信权重降至0.2’。最终的曲线带有轻微的毛刺，但这才是真实的物理世界。"
            },
            {
              "bg": "campCafeteria",
              "clear": true,
              "bgm": "dailyClassroom",
              "speaker": "narrator",
              "text": "晚上，大学食堂。我们三个人端着餐盘坐在角落。菜是标配的炒青菜和糖醋排骨。虽然规定不讨论细节，但坐下不到三秒，大家就忍不住聊到了刚才的数据题。"
            },
            {
              "speaker": "tang",
              "text": "「你们那个异常点删了吗？我为了曲线好看直接删了，拟合出来的图完美极了！」",
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
              "text": "「过于完美的曲线，阅卷老师可能会觉得你修饰了数据，然后酌情扣分。」"
            },
            {
              "speaker": "tang",
              "text": "「啊？你们没删？！」"
            },
            {
              "speaker": "lin",
              "text": "「题面说明里的‘云层扰动’就是线索。为了图像好看而删原始数据是新手的习惯，这题考的是误差处理的严谨性。」",
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
              ],
              "focus": "lin"
            },
            {
              "speaker": "tang",
              "text": "「……完了，我感觉我要在这个摸底考上栽跟头了。周行你写的什么？」",
              "focus": "tang"
            },
            {
              "speaker": "zhou",
              "text": "「做了降权处理。不过我后面的理由写得有点啰嗦，像是在写作文解释。」"
            },
            {
              "speaker": "lin",
              "text": "「写得啰嗦，也比直接删改原始数据要好。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "唐越愣了两秒，用筷子戳了戳碗里的米饭，极其自来熟地凑了过来。"
            },
            {
              "speaker": "tang",
              "text": "「两位大佬，晚上的自习室复盘带我一个呗？我保证不吵，就在旁边安安静静地听。」",
              "focus": "tang"
            },
            {
              "speaker": "lin",
              "text": "「可以。八点半前把你的错误思路简单写几句发给我。现在先吃饭。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你觉不觉得，你现在完全是一副林队长的架势了？」"
            },
            {
              "speaker": "lin",
              "text": "「你如果再不吃，这盘糖醋排骨就要凉透了。」",
              "focus": "lin"
            },
            {
              "bg": "dormCorridorNight",
              "clear": true,
              "bgm": "rainLibrary",
              "speaker": "narrator",
              "text": "晚上十一点半。宿舍走廊的灯光有点暗，偶尔能听到各个房间传来的说话声。还有人在低声讨论公式，很有学术氛围。"
            },
            {
              "speaker": "narrator",
              "text": "我抱着电脑去水房打水，刚出拐角，就看见林澈靠在走廊尽头的窗边。外面是沉沉的夜色，她的手机屏幕发出微弱的光，照着她专注的侧脸。"
            },
            {
              "speaker": "zhou",
              "text": "「大晚上的不睡觉，在这儿看什么呢？」"
            },
            {
              "speaker": "lin",
              "text": "「看唐越发来的总结。他在第一步的数据清洗时，门槛设得太高了。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你不是一向主张‘考完就不想’吗？怎么还破例了？」"
            },
            {
              "speaker": "lin",
              "text": "「这是为了把白天的思路理清，避免明天犯同样的错。我只给自己十分钟。」"
            },
            {
              "speaker": "narrator",
              "text": "我走过去，和她并排靠在窗台边。初夏的晚风带走了白天的燥热。她把手机屏幕稍微偏向我。"
            },
            {
              "speaker": "lin",
              "text": "「他思维很活跃，但做题有点急。总是先预设一个漂亮的结论，然后去套数据。这样很容易踩坑。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这话听着像是在评价几个月前的我。」"
            },
            {
              "speaker": "lin",
              "text": "「你能意识到这点，说明这几个月没白学。」"
            },
            {
              "speaker": "zhou",
              "text": "「谢谢你还不忘跨我一句，虽然听起来怪怪的。」"
            },
            {
              "speaker": "narrator",
              "text": "她收起手机，嘴角轻轻扬起了一个不明显的弧度。站直了身子，校服外套在夜风中微微晃动。"
            },
            {
              "speaker": "lin",
              "text": "「早点回去休息吧。明天早上还有课。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你不是还要看他的表格吗？」"
            },
            {
              "speaker": "lin",
              "text": "「你在这儿一直跟我说话，很影响我的阅读效率。明天再看吧。」"
            },
            {
              "speaker": "narrator",
              "text": "她转身走向女生宿舍区，步子迈得很轻快。我抱着电脑站在原地，听着窗外的风声，觉得这个培训营的日子，好像也并没有那么枯燥。"
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
              "bgm": "observatoryNight",
              "speaker": "narrator",
              "text": "第二天晚上，气象局预报有一个短暂的观测窗口。大家都来到了天文台天台。风挺大，桌上用两块红砖压着，下面垫着三张纸：目标星表、天气预报表、设备设备误差表。"
            },
            {
              "speaker": "managerTeacher",
              "text": "「今晚是小组实操。云层很厚，窗口时间很短。你们要自己决定在仅有的时间里测哪颗星，放弃哪颗星。真正的观测员必须能在复杂天气下迅速做出决断！」"
            },
            {
              "speaker": "narrator",
              "text": "林澈用手死死按着表格，转过身看着我和唐越，眼睛里闪烁着专注的光芒。"
            },
            {
              "speaker": "lin",
              "text": "「周行，你负责记录误差和数据时间。唐越，你盯好云层的移动轨迹。主目标我来排。没问题吧？」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "tang",
              "text": "「行啊，你这发号施令的语调，不知道的还以为你在指挥什么重大科研项目。」"
            },
            {
              "speaker": "lin",
              "text": "「如果你今晚不想交白卷，最好现在就专心盯紧星空。」"
            },
            {
              "speaker": "zhou",
              "text": "「别理她，她一进入备考状态就是这副专注又冷酷的样子。习惯就好了。」"
            },
            {
              "bg": "telescopeFieldDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "天台上的红色手电光随着大家的动作晃来晃去。西边的厚云看起来正像一大片阴影一样慢慢飘过来。"
            },
            {
              "speaker": "narrator",
              "text": "林澈蹲在赤道仪旁，刘海被风吹得有些散乱。她飞速扫了一眼数据。"
            },
            {
              "speaker": "lin",
              "text": "「放弃二号高难度星。先拿亮星做校准。周行，准备记录。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "tang",
              "text": "「等等！二号目标现在顶上还没云啊，而且分值高，不顺手捞一把？」"
            },
            {
              "speaker": "lin",
              "text": "「它在西侧，很快就会被遮住。没有校准底数，拍到了也是废数据。不能赌。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「听她的，先校准。时间：21点14分30秒。数据读取正常。」"
            },
            {
              "speaker": "tang",
              "text": "「行吧，你们俩这求稳的默契也是没谁了。」"
            },
            {
              "speaker": "narrator",
              "text": "果然，没过三分钟，二号目标所在的区域就被厚厚的云层盖了个严严实实。唐越在一旁松了口气，庆幸刚才没冲动。"
            },
            {
              "bg": "cgCh7DataLabSharedScreen",
              "clear": true,
              "speaker": "narrator",
              "text": "夜里十一点，数据实验室。我们三个人围着电脑屏幕，都在跟刚才的观测报告死磕。老师要求大家将观测结果整理成一页纸的简短复盘。"
            },
            {
              "bg": "dataLabNight",
              "clear": true,
              "speaker": "narrator",
              "text": "我们开始整合数据表格。"
            },
            {
              "speaker": "tang",
              "text": "「这数据里全都是环境噪声和毛刺，整理起来真是让人头大。」",
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
              "speaker": "lin",
              "text": "「别急。唐越你把气流变化的记录理一下，周行把风速影响的描述精简几句。我来写目标决策的理由。」",
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
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，你这分配工作的架势，活像个毫无感情的工头。」"
            },
            {
              "speaker": "lin",
              "text": "「如果不这样，我们今晚可能就得为了这些数据通宵了。」",
              "focus": "lin"
            },
            {
              "speaker": "tang",
              "text": "「哈哈，周行，你这是被完全安排了啊。你们平时在学校也这样合作？」",
              "focus": "tang"
            },
            {
              "speaker": "zhou",
              "text": "「这是我们一中竞赛组的日常，说了你也不懂。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈打字的手指微微顿了顿，没有抬头，只是在文档上把我的段落标红：『修辞太多，精简一点』。"
            },
            {
              "bg": "observatoryControlRoom",
              "clear": true,
              "bgm": "focusDerivation",
              "speaker": "narrator",
              "text": "第二天上午讲评。我们的报告被投在大屏幕上。决策逻辑拿了高分，但误差说明旁边，被老师用红笔圈了出来。"
            },
            {
              "speaker": "guestTeacher",
              "text": "「记录很详实。但是，结论写得有点太保守了。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，保守一点难道不好吗？这样比较严谨吧？」"
            },
            {
              "speaker": "guestTeacher",
              "text": "「在学术判断上，不要用模棱两可的词。‘数据可能具有一定参考意义’这种话说明你们自己都没底气。如果数据受到云层严重干扰，就明确标出废弃降权，要对自己的判断有信心。」"
            },
            {
              "speaker": "narrator",
              "text": "老师的点评直接切中要害。我下意识看了看林澈，她抿着嘴，盯着屏幕上的那个红圈。"
            },
            {
              "speaker": "narrator",
              "text": "课后，她拿着打印出来的报告，用红笔把那句委婉的总结重重地划掉了。"
            },
            {
              "speaker": "lin",
              "text": "「老师说得对。我们还是太怕犯错，所以才用了安全词。在真正的竞赛中，犹犹豫豫更容易丢分。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「行了，别那么沮丧了，只是一次日常训练而已，不至于这么跟自己过不去。」"
            },
            {
              "speaker": "lin",
              "text": "「但我看你写决策分析的那一段，倒是比谁都果断。你平时怎么没这魄力？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「这算哪门子夸奖，听起来怪怪的。」"
            },
            {
              "speaker": "zhou",
              "text": "「不过也对，这就是事实。」"
            },
            {
              "speaker": "narrator",
              "text": "她手里握着笔，看了我一眼。走廊外掠过一阵初夏的微风，吹得她的衣领微微晃动，她紧绷的神情终于缓和了一些。"
            },
            {
              "speaker": "lin",
              "text": "「行了，算是一次教训。下午我们把这篇报告的表述再压缩压缩。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「没问题，听你指挥。」"
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
              "bgm": "examLamp",
              "speaker": "narrator",
              "text": "第四天的综合测评，硬骨头来了。卷子发下来，我扫了一眼第一题，手心里就渗出了一层冷汗。这题不是单纯考计算，而是在考验你的心理素质。"
            },
            {
              "speaker": "narrator",
              "text": "关于深空天体观测策略。A方案：极其稳妥，但上限不高，只能拿保底分；B方案：风险极高，对设备和天气要求苛刻，但如果成功，就能抓到关键的爆发点。"
            },
            {
              "speaker": "narrator",
              "text": "换作以前那个整天做梦拿高分的我，绝对会毫不犹豫地选B。但在这个精英扎堆的集训营里熬了四天，看着窗外阴沉的天色，我脑子里只有一个念头：一旦失手，代价自己能承受吗？"
            },
            {
              "speaker": "proctor",
              "text": "「距离收卷还有半小时。」"
            },
            {
              "speaker": "narrator",
              "text": "考场里安静得只能听见笔尖摩擦的沙沙声。我用余光瞥了眼斜前方的顾望舒，她的笔尖几乎没有停顿，那种绝对的冷静让人倍感压力。而另一侧的林澈，正用手指按着太阳穴。"
            },
            {
              "speaker": "narrator",
              "text": "我深吸一口气，在草稿纸上把B方案那些看起来很美但容易翻车的假定全划掉。用工整的字迹写下：『选择A方案作为主执行框架，保证数据基础；仅当风速低于限定值且云层间隙大于五分钟时，启动B方案抓取。』"
            },
            {
              "speaker": "narrator",
              "text": "没有孤注一掷的狂妄，只有基于现实的防御性策略。交卷那一刻，我看着黑板的一角，心里不知是踏实还是有些微的不甘。"
            },
            {
              "bg": "competitionExamHallway",
              "clear": true,
              "bgm": "breakdown",
              "speaker": "narrator",
              "text": "下午复盘结束，自习室里的气氛有点沉闷。唐越整个人瘫在椅子上，双眼无神。"
            },
            {
              "speaker": "tang",
              "text": "「我选了B。写到一半发现条件根本不够，后面全乱套了。兄弟们，我感觉我这次真的要卷铺盖回家了。」",
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
              "speaker": "lin",
              "text": "「成绩出来之前，先别忙着自我否定。你现在需要去食堂吃顿饱饭，免得血糖太低连回宿舍的力气都没有。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerAnxious",
                  "pos": "left"
                },
                {
                  "id": "tang",
                  "img": "tangNeutral",
                  "pos": "right"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "tang",
              "text": "「林澈，你真是个理性的泼冷水大师。不过，这时候听到你说话还挺让人心定。」",
              "focus": "tang"
            },
            {
              "bg": "vendingMachineNight",
              "clear": true,
              "bgm": "rainLibrary",
              "speaker": "narrator",
              "text": "深夜十一点半，宿舍楼下。自动售货机投出幽白的光，发出轻微的嗡嗡声。我盯着里面一排排的饮料，在冰咖啡和常温矿泉水之间来回犹豫。"
            },
            {
              "speaker": "lin",
              "text": "「建议选矿泉水。如果你不想明天早上因为心率过快，导致写英文题时手发抖的话。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerTired",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她无声地走到我旁边，身上套着宽大的校服外套，手里拿着一听乌龙茶。我被她吓了一跳，手一指，按下了矿泉水的按钮。"
            },
            {
              "speaker": "zhou",
              "text": "「你走路怎么一点声音都没有？这属于学霸的隐藏被动吗？」"
            },
            {
              "speaker": "lin",
              "text": "「是你自己想事情太入神了。还在想白天那个方案选择？」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你怎么知道我没选B？」"
            },
            {
              "speaker": "lin",
              "text": "「因为交卷的时候，你整理桌面的样子一点都不兴奋，只有一种极力压抑的克制。你选了稳妥的A，并且加了预备案，对吧？」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "我有些无奈地靠在售货机侧板上，看着她。在柔和的夜色下，她平时的严厉似乎淡去了一些。"
            },
            {
              "speaker": "zhou",
              "text": "「如果那些各省第一的牛人都会去拼B方案，而我只敢选保底的A……林澈，我是不是冲劲不够，根本不适合站在这里？」"
            },
            {
              "speaker": "narrator",
              "text": "她没有立刻回答，而是用大拇指‘咔哒’一声拉开易拉罐的拉环。易拉罐里气体释出的声响在安静的夜里很清晰。"
            },
            {
              "speaker": "lin",
              "text": "「竞赛需要的是能把观测计划稳妥落地的人，而不是在天台上放完烟花就颗粒无收的人。理清现实限制并做出最稳妥的应对，这是理智，不叫懦弱。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，如果……我是说万一，名单上最终没有我们。你回去第一件事会干嘛？」"
            },
            {
              "speaker": "lin",
              "text": "「回去买最新版的高考模拟卷，把这几天落下的圆锥曲线题目全补回来。然后继续过完高三生活。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「真现实。不过也对。」"
            },
            {
              "speaker": "lin",
              "text": "「现实就是如此。我们现在之所以能坐在这里摸到星空的边缘，是因为我们在每一次枯燥的选择里，都做出了最正确的判断。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她举起手里的乌龙茶，很轻地碰了一下我手里的矿泉水塑料瓶。"
            },
            {
              "speaker": "lin",
              "text": "「所以，在结果出来之前，先别胡思乱想。回宿舍睡觉。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "塑料瓶发出一声轻微的碰撞声。在初夏沉静的夜风里，她这番略显清冷的话，反而给了我最实打实的底气。"
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
              "bgm": "weightlessEcho",
              "speaker": "narrator",
              "text": "第七天下午。实验楼一楼的大厅。没有宏大的发表仪式，只有一张用磁铁固定在白板上的A4打印纸。那便是决定去向的大名单。"
            },
            {
              "speaker": "narrator",
              "text": "白板前挤满了人，但大家都在压低声音，空气里流淌着某种紧张而期待的安静。纸上排布的字符很密，所有人只能随着人流，一步步往白板跟前挪动。"
            },
            {
              "speaker": "tang",
              "text": "「兄弟们，我感觉我的心率已经飙到了上限。我有点怂，要不你们看完顺便帮我瞅瞅？」",
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
              "text": "「你平时那股天不怕地不怕的劲头呢？」"
            },
            {
              "speaker": "tang",
              "text": "「那能一样吗？现在可是宣判时刻啊！」"
            },
            {
              "speaker": "narrator",
              "text": "我侧过头看身旁的林澈。她紧抿着唇，手机挂绳被她缠绕在手指上，转了几圈又猛地松开，白皙的指节上留下了一道微红的勒痕。"
            },
            {
              "speaker": "lin",
              "text": "「排队吧，马上就轮到了。」",
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
              ],
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "终于，人流把我们推到了白板前。从上往下，领队、观察员。然后是第一排：顾望舒。她的名字雷打不动地排在第一位。往下看，第二排：林澈。"
            },
            {
              "speaker": "narrator",
              "text": "我只觉得心跳猛然漏了半拍，视线极快地顺着名单向下搜索。第三排——那个熟悉的、我抄过千百遍的笔画，清晰地浮现在白纸上。周行。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈……」"
            },
            {
              "speaker": "lin",
              "text": "「嗯，我看见了。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我的名字也在上面。」"
            },
            {
              "speaker": "lin",
              "text": "「看见了，就在我下面。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「所以这真的不是我这几天缺觉导致的碳基生物幻觉，对吧？」"
            },
            {
              "speaker": "lin",
              "text": "「不是幻觉。我们真的办到了。」",
              "focus": "lin"
            },
            {
              "bg": "cgCh7CandidateListConfirm",
              "clear": true,
              "speaker": "narrator",
              "text": "她长长地出了一口气。这是集训整整七天以来，我第一次看到她把一向挺得笔直的肩膀放松了下来，那张清冷的脸上也露出了如释重负的表情。"
            },
            {
              "speaker": "tang",
              "text": "「我也在！！我靠！我是名单上的擦边守门员！进国家队了！啊啊！」",
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
              "speaker": "managerTeacher",
              "text": "「大厅里安静！谁再大喊大叫，直接取消选拔资格！」"
            },
            {
              "speaker": "tang",
              "text": "「对不起老师！我用脑电波狂喜，用脑电波狂喜！」",
              "focus": "tang"
            },
            {
              "speaker": "wangshu",
              "text": "「恭喜你们。」",
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
              "text": "「也恭喜你，稳居第一的大佬。」"
            },
            {
              "speaker": "wangshu",
              "text": "「排名只是以往努力的合理折现。接下来的国际赛才是硬仗，希望各位在波兰也能稳住状态。」",
              "focus": "wangshu"
            },
            {
              "speaker": "managerTeacher",
              "text": "「所有在名单上的人，明天上午九点会议室集合。确认出境资料和队服尺寸。今年的IOAA国际赛地点——波兰，克拉科夫。回去马上检查你们的护照效期！」"
            },
            {
              "bg": "campGateMorning",
              "clear": true,
              "bgm": "happyEnding",
              "speaker": "narrator",
              "text": "波兰，克拉科夫。这个词在这个塞满物理书和纠错本的夏天，听起来遥远得有些失真。它几乎在一瞬间将我们从高考复习的日常里扯了出去。"
            },
            {
              "speaker": "lin",
              "text": "「周行，你护照过期了吗？」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「……我现在脑子有点转不过来，我都忘了我护照被我塞哪了。」"
            },
            {
              "speaker": "lin",
              "text": "「回房间立刻给阿姨打电话，确认护照期限。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「你听到波兰的第一反应，真的是查护照啊？」"
            },
            {
              "speaker": "lin",
              "text": "「不然呢？第一反应是去查那边的猪肘子好不好吃吗？」",
              "focus": "lin"
            },
            {
              "narrator": "大厅的喧闹声仿佛渐渐被推向了很远的地方。我们并肩站在白板前，看着那张薄薄的名单。几个月前，我们还在学校因为一道时角题吵得不可开交，而现在，我们要一起代表国家去波兰了。",
              "speaker": "narrator"
            },
            {
              "bg": "schoolGateMorning",
              "clear": true,
              "bgm": "dailyClassroom",
              "speaker": "narrator",
              "text": "回学校的那天，校门口的香樟树在夏日阳光下泛着亮绿色。班主任老许拿着两张全新的请假单站在走廊里，表情很有些无奈。"
            },
            {
              "speaker": "homeroom",
              "text": "「进了国家队也别把高考复习落下。谁要是出国回来给我把功课拉下了一截，看我怎么收拾你们。」"
            },
            {
              "speaker": "zhou",
              "text": "「老许，在这种历史性时刻，您好歹说两句热血的临别赠言啊，这真的很煞风景。」"
            },
            {
              "speaker": "lin",
              "text": "「许老师放心。我已经排好了一份包含出国前集训、IOAA备赛以及每天日常模拟卷的交叉时间表。会严格执行的。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「……你排了什么东西？什么时候排的？」"
            },
            {
              "speaker": "lin",
              "text": "「昨晚。你光顾着在群里发激动表情包的时候。」",
              "focus": "lin"
            },
            {
              "bg": "classroom",
              "clear": true,
              "speaker": "narrator",
              "text": "我跟在她身后走回教室。课桌上高三的试卷依然堆积如山，高考倒计时的数字也在一页页撕下。而在这一切生活的缝隙里，那张写着“集训营”的胸牌，被我悄悄夹进了物理书的最厚一页。"
            },
            {
              "speaker": "narrator",
              "text": "高三的现实依然严酷，但在这个夏天的尽头，波兰克拉科夫的星空，正在安静地等待着我们。"
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
              "text": "出国前集训的最后一晚，宿舍地板已经被我摊开的行李箱彻底占领。队服、外套、转接头、常备药，还有一叠在群里被老师刷屏强调的复印件。",
              "bgm": "prelimReady"
            },
            {
              "speaker": "narrator",
              "text": "我一屁股坐在行李箱上往下压，拉链拉到转角处还是死活卡住。它在用物理学定律警告我：真塞不下了。"
            },
            {
              "speaker": "zhou",
              "text": "「我觉得作为一个有梦想的箱子，它还能再拓展一下空间。」"
            },
            {
              "speaker": "lin",
              "text": "「别把箱子的张力当成你自己的潜力。」",
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
              "text": "「林同学，你这句话不仅攻击了我，还攻击了这只无辜的箱子。」"
            },
            {
              "speaker": "lin",
              "text": "「把你那件厚外套拿出来。波兰夏夜是凉，但你带两件一模一样的冲锋衣纯属增加负重。」"
            },
            {
              "speaker": "zhou",
              "text": "「万一观测的时候弄湿了呢？我这叫双保险。」"
            },
            {
              "speaker": "lin",
              "text": "「备用叫保险，你这叫搬家。」"
            },
            {
              "speaker": "narrator",
              "text": "她蹲在旁边，毫不留情地把我的东西分成两堆：一堆是“真能用上”，另一堆是“你纯属想带”。"
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
              "text": "「签证页。」"
            },
            {
              "speaker": "zhou",
              "text": "「有。」"
            },
            {
              "speaker": "lin",
              "text": "「邀请函复印件。」"
            },
            {
              "speaker": "zhou",
              "text": "「齐了。」"
            },
            {
              "speaker": "lin",
              "text": "「英文自我介绍。」"
            },
            {
              "speaker": "zhou",
              "text": "「背得滚瓜烂熟。」"
            },
            {
              "speaker": "lin",
              "text": "「不是问你背没背，是问那张纸在哪。」"
            },
            {
              "speaker": "zhou",
              "text": "「……在这。」"
            },
            {
              "speaker": "narrator",
              "text": "我从包的夹层里摸出那张纸。她接过去看了一眼，发现边角已经被我捏出了一道白痕，无奈地叹了口气，从自己包里抽了个透明文件夹。"
            },
            {
              "speaker": "lin",
              "text": "「放这儿。红底是证件，蓝底是资料，绿底是保险单和紧急联系方式。」"
            },
            {
              "speaker": "zhou",
              "text": "「你连这种专业道具都准备了？」"
            },
            {
              "speaker": "lin",
              "text": "「文具店九块九包邮。」"
            },
            {
              "speaker": "zhou",
              "text": "「我的意思是，你是怎么做到把出国比赛变成文件归档现场的？」"
            },
            {
              "speaker": "lin",
              "text": "「因为过海关的时候，人家不会看在你紧张的份上少收一张纸。」"
            },
            {
              "bg": "cgCh8PolandPackingChecklist",
              "clear": true,
              "speaker": "narrator",
              "text": "宿舍地上摊着行李清单和护照夹。林澈用笔在“证件”后面利落地打勾，我坐在行李箱旁，手里还捏着那件被无情淘汰的厚外套。"
            },
            {
              "speaker": "narrator",
              "text": "晚上开行前会，领队把每个人的护照收上去又发回来，反复确认签证和紧急联系人。这会儿大家终于有点要去打国际赛的实感了。"
            },
            {
              "bg": "trainingCampLectureHall",
              "clear": true,
              "speaker": "narrator",
              "text": "投影仪打出密密麻麻的行程表。转机、时差、开幕式、理论赛、数据处理、夜间观测……每一项都严丝合缝地咬在一起。"
            },
            {
              "speaker": "managerTeacher",
              "text": "「到了国外绝对服从安排。不许单独行动，不许擅自离队，更不许乱吃东西。尤其是比赛前！」"
            },
            {
              "speaker": "tang",
              "text": "「老师，乱吃东西包括当地的甜甜圈吗？」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「比赛结束你想吃多少吃多少。」"
            },
            {
              "speaker": "tang",
              "text": "「行，那我把吃甜甜圈定为闭幕式最高目标。」"
            },
            {
              "speaker": "wangshu",
              "text": "「建议你先把拿牌定为目标。」"
            },
            {
              "speaker": "tang",
              "text": "「顾望舒，你这人真的很擅长终结聊天。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，你手机时差调了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「早调了，北京时间减六小时。」"
            },
            {
              "speaker": "lin",
              "text": "「飞机上少看北京时间，不然你半夜精神百倍，白天的考试直接断电。」"
            },
            {
              "speaker": "zhou",
              "text": "「你已经预判到我要断电了？」"
            },
            {
              "speaker": "lin",
              "text": "「我这叫合理防范风险。」"
            },
            {
              "speaker": "narrator",
              "text": "我把她给的护照夹塞进随身包最里层，又拉开拉链确认了一遍。红、蓝、绿三个夹层整整齐齐，像是一剂强心针，把那点即将出国的无序感给压平了。"
            },
            {
              "speaker": "narrator",
              "text": "睡前，手机震了一下。林澈发来微信：明早五点四十大厅集合，别把闹钟设成工作日模式。"
            },
            {
              "speaker": "zhou",
              "text": "「你怎么知道我要设错？」"
            },
            {
              "speaker": "lin",
              "text": "「因为你上次集训第一天就是这么迟到边缘疯狂试探的。」"
            },
            {
              "speaker": "zhou",
              "text": "「人是会成长的。」"
            },
            {
              "speaker": "lin",
              "text": "「成长的人会定两个闹钟。」"
            },
            {
              "speaker": "narrator",
              "text": "我默默把第二个闹钟定在了五点三十五。屏幕暗下去的瞬间，我没忍住笑了一下。明天就要飞波兰了，而我现在最踏实的事，居然是有人盯着我设闹钟。"
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
              "text": "清晨的国际出发大厅灯火通明。行李车轮碾过光洁的地板，广播里中英文交替播报着航班号，每个人手里都死死捏着护照本。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "managerTeacher",
              "text": "「护照都拿在手上！托运按名单排队。周行，随身包别手滑扔进托运台了。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，我看起来像是会犯这种低级错误的人吗？」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「我只是在尽带队老师的义务降低事故率。」"
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
              "text": "「谢谢林澈同学，这个我还是有知觉的。」"
            },
            {
              "speaker": "lin",
              "text": "「但你刚才盯着右手看了三秒。」"
            },
            {
              "speaker": "zhou",
              "text": "「我那是确认我的右手还在不在。」"
            },
            {
              "speaker": "tang",
              "text": "「周行，你出国第一天就开始贡献节目效果了。」"
            },
            {
              "speaker": "zhou",
              "text": "「这叫活跃赛前气氛。」"
            },
            {
              "speaker": "wangshu",
              "text": "「建议气氛组稍微走快点，不要影响后面的安检进度。」"
            },
            {
              "speaker": "narrator",
              "text": "队伍缓慢往前挪。托运行李过秤时，我的箱子刚好卡在限重线上。林澈站在一边，看看数字，又看看我。"
            },
            {
              "speaker": "lin",
              "text": "「要不是那件外套被拿出来了，你现在就可以当众表演开箱了。」"
            },
            {
              "speaker": "zhou",
              "text": "「再次感谢林澈同学挽救了我的国际形象。」"
            },
            {
              "speaker": "lin",
              "text": "「不客气，反正你以后还有的是机会自己作没。」"
            },
            {
              "speaker": "narrator",
              "text": "过安检时，她把头发上的星形发卡摘下来放进托盘。那颗小星星安静地躺在护照旁边，混在一堆金属杂物里，显得特别袖珍。"
            },
            {
              "speaker": "zhou",
              "text": "「你的星星也要过安检啊。」"
            },
            {
              "speaker": "lin",
              "text": "「它比你配合多了。」"
            },
            {
              "speaker": "zhou",
              "text": "「废话，它又不用考试。」"
            },
            {
              "speaker": "lin",
              "text": "「你紧张了？」"
            },
            {
              "speaker": "zhou",
              "text": "「有点吧。第一次出国就是打这种比赛，感觉就像新手村刚出来，直接被传送到了全服争霸赛。」"
            },
            {
              "speaker": "lin",
              "text": "「看你的装备还挺齐的。护照夹、笔、计算器，还有薄荷糖。」"
            },
            {
              "speaker": "zhou",
              "text": "「薄荷糖也能算装备？」"
            },
            {
              "speaker": "lin",
              "text": "「考试卡壳的时候用来续命。」"
            },
            {
              "speaker": "narrator",
              "text": "我摸了摸口袋，昨晚她塞给我的糖果然还在，塑料包装纸被体温焐得有些发软。"
            },
            {
              "bg": "airportBoardingGateNight",
              "clear": true,
              "speaker": "narrator",
              "text": "登机口前，巨大的落地窗外停着我们的航班。天边刚泛起一点鱼肚白，跑道上的引导灯一排排亮着，像是在地面上画出的星轨。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "tang",
              "text": "「我宣布，从现在开始，为了提前适应环境，本人只说英语。」"
            },
            {
              "speaker": "zhou",
              "text": "「Please sit down.」"
            },
            {
              "speaker": "tang",
              "text": "「不是，你这句也太朴实无华了吧，显得我刚才很像在装腔作势。」"
            },
            {
              "speaker": "wangshu",
              "text": "「想练口语的话，建议先把自我介绍说利索。」"
            },
            {
              "speaker": "tang",
              "text": "「顾望舒，你是不是连紧张这种情绪都要按计划表分配啊？」"
            },
            {
              "speaker": "wangshu",
              "text": "「并没有。我只是单纯地提前背好了而已。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，你现在背一遍。」"
            },
            {
              "speaker": "zhou",
              "text": "「哈？现在？」"
            },
            {
              "speaker": "lin",
              "text": "「离登机还有十分钟，时间刚刚好。」"
            },
            {
              "speaker": "zhou",
              "text": "「Hello, my name is Zhou Xing, I am from China, and I am interested in observational astronomy and data analysis...」"
            },
            {
              "speaker": "lin",
              "text": "「最后一句语速慢一点。你是去考试的，不是去赶高铁的。」"
            },
            {
              "speaker": "zhou",
              "text": "「我这叫口语流利。」"
            },
            {
              "speaker": "lin",
              "text": "「你这叫急于逃跑。」"
            },
            {
              "bg": "cgCh8AirportPassportExchange",
              "clear": true,
              "speaker": "narrator",
              "text": "落地窗前，林澈把护照夹递还给我。她低头看着手里的登机牌，我望着窗外的飞机，手指下意识地把薄荷糖包装纸捏得咔咔响。"
            },
            {
              "speaker": "narrator",
              "text": "登机广播响了。队伍站起来的那一刻，我突然有种很不真实的感觉。没有那种热血沸腾的夸张，只是脚下踩着的地面，真的要从“国内”变成“国际”了。"
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
              "text": "「活蹦乱跳的。」"
            },
            {
              "speaker": "lin",
              "text": "「那就好。」"
            },
            {
              "speaker": "narrator",
              "text": "她转身走向登机口。我跟在她后面，忽然觉得“出发”这个词不再是一句空荡荡的口号。它是一张印着条形码的登机牌，是一只沉甸甸的随身包，也是她回头看我跟没跟上的那一瞬间。"
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
              "text": "飞机起飞后，客舱灯光渐渐转暗。发动机低沉的轰鸣压在耳边，安全带提示灯亮了没一会儿就熄灭了。林澈坐在靠窗位，我坐在她外侧。",
              "bgm": "observatoryNight"
            },
            {
              "speaker": "zhou",
              "text": "「需要换到过道来吗？」"
            },
            {
              "speaker": "lin",
              "text": "「不用。靠窗视野好，能看云。」",
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
              "text": "「我还以为你会说靠窗有墙靠着好补觉。」"
            },
            {
              "speaker": "lin",
              "text": "「靠窗更方便监控你有没有手滑把水杯打翻。」"
            },
            {
              "speaker": "zhou",
              "text": "「……我在你心里的危险系数就这么高？」"
            },
            {
              "speaker": "lin",
              "text": "「属于中高危区间。」"
            },
            {
              "speaker": "narrator",
              "text": "穿过云层时，机身猛地颠簸了一下。她攥着扶手的手指瞬间收紧，指节有些泛白，但很快又强行松开。我注意到了，但装作没看见。"
            },
            {
              "speaker": "zhou",
              "text": "「耳压还好吗？」"
            },
            {
              "speaker": "lin",
              "text": "「还行。」"
            },
            {
              "speaker": "zhou",
              "text": "「糖，续命用。」"
            },
            {
              "speaker": "narrator",
              "text": "我把之前那颗薄荷糖递过去。她盯着我手里的糖看了一秒，明显有点意外。"
            },
            {
              "speaker": "lin",
              "text": "「你没吃？」"
            },
            {
              "speaker": "zhou",
              "text": "「战略储备物资，不能随便消耗。」"
            },
            {
              "speaker": "lin",
              "text": "「你总算长出一点大局观了。」"
            },
            {
              "speaker": "narrator",
              "text": "她拆开糖纸，清凉的薄荷味在局促的空气里很轻地散开。窗外的云层被月光刷上一层冷调的灰白，机翼末端的航行灯有节奏地闪烁着。"
            },
            {
              "bg": "cgCh8PlaneWindowLinZhou",
              "clear": true,
              "speaker": "narrator",
              "text": "客舱里的大部分人都睡了，环境暗得很。林澈靠着窗，薄荷糖包装纸在她指间折叠。我坐在她旁边，看着她转头看向窗外的机翼灯。"
            },
            {
              "speaker": "lin",
              "text": "「我小时候第一次看到土星环，是花钱在街边的天文望远镜里看的。那之前，我以为星星就只是书本上印着的小圆点，直到亲眼看见那个小小的环。」"
            },
            {
              "speaker": "zhou",
              "text": "「第五章的时候，你跟我提过这件事。」"
            },
            {
              "speaker": "lin",
              "text": "「是吗。现在回想起来，那架望远镜其实很破，环的边缘也是糊的。但我那时候真的觉得……原来书上写的那些枯燥的东西，是真的挂在天上的，不是大人为了考试故意编出来折磨我的。」"
            },
            {
              "speaker": "zhou",
              "text": "「所以你后来一直死磕天文，就是想把它看清楚？」"
            },
            {
              "speaker": "lin",
              "text": "「也不全是。看清楚当然好，但更重要的是……我知道它就算被云挡住了，或者我看不清，它也依然在那里。」"
            },
            {
              "speaker": "zhou",
              "text": "「林同学，你这句话真的很像你。」"
            },
            {
              "speaker": "lin",
              "text": "「什么意思？」"
            },
            {
              "speaker": "zhou",
              "text": "「就是那种，很适合被加粗印在学霸错题本第一页当座右铭的话。」"
            },
            {
              "speaker": "lin",
              "text": "「如果你再说废话，我就把你写在错题本上。」"
            },
            {
              "speaker": "narrator",
              "text": "她话音刚落，自己也没绷住，很轻地笑了一下。笑意稍纵即逝，但在昏暗的机舱里，我捕捉得一清二楚。"
            },
            {
              "speaker": "narrator",
              "text": "空乘推着餐车过来，我和林澈默契地都选了鸡肉饭。揭开锡纸盖，热气扑面而来，味道其实很一般，但在十几个小时的长途飞行里，碳水总能让人感到踏实。"
            },
            {
              "speaker": "zhou",
              "text": "「你不吃胡萝卜？」"
            },
            {
              "speaker": "lin",
              "text": "「吃。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你已经盯着它相面三秒了。」"
            },
            {
              "speaker": "lin",
              "text": "「我在进行风险评估。」"
            },
            {
              "speaker": "zhou",
              "text": "「它就是一块普通的熟胡萝卜而已。」"
            },
            {
              "speaker": "lin",
              "text": "「飞机餐里的任何异色块都值得重点评估。」"
            },
            {
              "speaker": "narrator",
              "text": "评估结束后，她还是干脆地把胡萝卜吃掉了。我把餐盘上的酸奶递给她，她熟练地把小餐包推给我，这套动作自然得仿佛我们不是在万米高空的国际航班上，而是在学校食堂靠窗的那个老位置。"
            },
            {
              "bg": "airplaneWindowClouds",
              "clear": true,
              "speaker": "narrator",
              "text": "后半程的夜航，周围基本只剩下沉睡的呼吸声。窗外已经完全看不到地面的灯火，只有无边无际的云海和偶尔透出的暗沉大洋。客舱里只剩下零星几盏阅读灯和椅背屏幕的微光。"
            },
            {
              "speaker": "lin",
              "text": "「睡不着？」"
            },
            {
              "speaker": "zhou",
              "text": "「有点。脑子根本停不下来，一直在过明后天的赛程。」"
            },
            {
              "speaker": "lin",
              "text": "「理论题、数据处理、实地观测，就这三块。开幕式那天晚上不会拖太晚，第一场考前十点必须强行断电睡觉。」"
            },
            {
              "speaker": "zhou",
              "text": "「你连我的生物钟都规划好了？」"
            },
            {
              "speaker": "lin",
              "text": "「领队发的统一要求。不过根据历史数据，你属于需要特别关照的脱轨人员。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你呢？你一点都不慌？」"
            },
            {
              "speaker": "lin",
              "text": "「慌啊。但飞机都在大洋上空了，我再慌，机长也不能为了我掉头回国。」"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，你这种硬核安慰法居然还挺有用。」"
            },
            {
              "speaker": "lin",
              "text": "「你要听更实用的吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「洗耳恭听。」"
            },
            {
              "speaker": "lin",
              "text": "「就是，等我们到了波兰安顿好，先去买足矿泉水，然后去把赛场路线实地走一遍。只要你知道自己明天早上迈哪条腿出门，人就不会那么慌了。」"
            },
            {
              "speaker": "zhou",
              "text": "「……这确实更实用。」"
            },
            {
              "speaker": "lin",
              "text": "「毕竟我只会这种笨办法。」"
            },
            {
              "speaker": "narrator",
              "text": "我侧过头看她。窗外云层的反射光很亮，映得她眼睛里也流转着很浅的光。她说自己只会笨办法，可这一路上，她正是用这些有条不紊的“笨办法”，把我那些乱七八糟的不安感一点点拆解掉了。"
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
              "text": "「到了波兰，如果我又开始无意识地折纸杯，你记得提醒我。」"
            },
            {
              "speaker": "lin",
              "text": "「没问题。」"
            },
            {
              "speaker": "zhou",
              "text": "「那如果我发现你开始死磕胸牌的挂绳，我也提醒你。」"
            },
            {
              "speaker": "lin",
              "text": "「我不一定会承认我在死磕。」"
            },
            {
              "speaker": "zhou",
              "text": "「没事，我不拆穿你，我只负责递水。」"
            },
            {
              "speaker": "lin",
              "text": "「这个方案可行。」"
            },
            {
              "speaker": "narrator",
              "text": "后来，她靠在舷窗边安静地睡着了。气流偶尔引发颠簸时，她的眉头会轻轻蹙一下，然后又松开。我伸手把阅读灯的光调到最暗，把她膝盖上快要滑落的资料夹抽出来，妥帖地塞进了椅背网兜里。"
            },
            {
              "speaker": "narrator",
              "text": "椅背屏幕上的飞机图标正沿着红色虚线一点点往西挪。波兰还在几千公里之外，但我平生第一次觉得，“远方”似乎也没有想象中那么凶险。只要身旁这个人还在安稳地睡着，未知的下一站，也就仅仅是个地名而已。"
            },
            {
              "bg": "airplaneCabinNight",
              "clear": true,
              "speaker": "narrator",
              "text": "航程进入最难熬的后半夜，机舱里安静得只剩下白噪音。屏幕上的航迹正越过一大片深蓝色的海域，离终点仍有一段不短的距离。",
              "bgm": "observatoryNight"
            },
            {
              "speaker": "narrator",
              "text": "我原本打算强行酝酿睡意，可一闭眼，理论题的庞杂公式、观测考试的极轴校准流程，还有出发前领队老师三令五申的赛场纪律，就像弹窗广告一样在脑子里狂闪。越是想强行关掉，越是觉得整个人被塞进了一张密不透风的 Excel 表格里。"
            },
            {
              "speaker": "lin",
              "text": "「睡不着就别闭眼硬熬了。」",
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
              "text": "「你动静太大了。」"
            },
            {
              "speaker": "zhou",
              "text": "「经济舱的座椅能翻出什么动静？」"
            },
            {
              "speaker": "lin",
              "text": "「你的安全带金属扣，在过去五分钟里，撞了座椅扶手三次。」"
            },
            {
              "speaker": "zhou",
              "text": "「……十分抱歉，严重干扰了林同学的休眠进程。」"
            },
            {
              "speaker": "lin",
              "text": "「把你包里的赛程表拿出来。」"
            },
            {
              "speaker": "zhou",
              "text": "「怎么？现在要抽查知识点？」"
            },
            {
              "speaker": "lin",
              "text": "「不是。拿笔，把已经走完的流程划掉。」"
            },
            {
              "speaker": "narrator",
              "text": "我依言从蓝色夹层里抽出那张折得整整齐齐的赛程表。她探身按亮了头顶的阅读灯，橘黄色的光打在纸面上。出发、安检、登机、起飞……这几项已经被我们甩在身后的步骤，在此刻显得格外清晰。"
            },
            {
              "speaker": "lin",
              "text": "「你看，它已经不是一张全是未知数的白纸了。」"
            },
            {
              "speaker": "zhou",
              "text": "「这也是你对付焦虑的独门秘籍？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。觉得事情多到要爆炸的时候，就把做完的一项项划掉。注意力要放在笔尖划过的那条线上，别一直盯着后面没发生的事。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这方法要是早点普及，我感觉我能少掉很多根头发。」"
            },
            {
              "speaker": "lin",
              "text": "「普及了也没用，你听完也不见得会做。」"
            },
            {
              "speaker": "zhou",
              "text": "「你对我的认知总是这么残酷且精准。」"
            },
            {
              "speaker": "narrator",
              "text": "我们头碰着头，用铅笔把那些已经完成的项目轻轻划掉。纸面上除了多出几道铅笔灰，其实什么也没改变，可我胸口那团堵得发慌的浊气，似乎真的顺着那些灰色的线条排解了出去。"
            },
            {
              "speaker": "lin",
              "text": "「现在，立刻闭眼。哪怕只能睡二十分钟，也比干耗着强。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你呢？」"
            },
            {
              "speaker": "lin",
              "text": "「我也闭眼。」"
            },
            {
              "speaker": "zhou",
              "text": "「如果我又控制不住碰响了安全带扣呢？」"
            },
            {
              "speaker": "lin",
              "text": "「我会毫不犹豫地踢你的鞋。」"
            },
            {
              "speaker": "zhou",
              "text": "「在国际航班上实施物理制裁，这合适吗？」"
            },
            {
              "speaker": "lin",
              "text": "「好用就行。」"
            },
            {
              "speaker": "narrator",
              "text": "她干脆地按灭了阅读灯。黑暗重新笼罩下来，我听着旁边她逐渐变得平稳轻长的呼吸声。那张被铅笔划过几道的赛程表被我妥善压在小桌板下，那些代表着“已完成”的灰色线条在脑子里最后浮现了一秒，随后，世界终于安静了下来。"
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
              "text": "落地时，华沙正值上午。机场通透的玻璃穹顶倾泻下大片略显冷清的自然光，指示牌上全是陌生的波兰文和英文，队伍里的大家都在强行支棱着疲惫的眼皮，试图让自己看起来精神点。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "tang",
              "text": "「我现在觉得整个脑袋像被时差放进洗衣机里甩干过一样。」"
            },
            {
              "speaker": "zhou",
              "text": "「唐越，你知足吧，你至少还能保持流利的母语输出功能。」"
            },
            {
              "speaker": "lin",
              "text": "「少说点废话，跟紧队伍别掉队。」",
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
              "text": "「把护照翻到签证页准备好！人家问什么就如实答什么，关键词：比赛、学生、团队，听明白没有？」"
            },
            {
              "speaker": "narrator",
              "text": "轮到我上前时，边检人员翻了翻护照，又仔细核对了邀请函。我按着事先准备好的模板回答，声音意外地没有发飘，比我想象中稳当多了。"
            },
            {
              "speaker": "narrator",
              "text": "出关后，我们在行李转盘前干等着。林澈的深蓝色箱子第一个转出来，把手上那个显眼的星星行李牌摇晃着。我的箱子又多转了两圈才出现，外壳上还新添了一道不知道哪蹭来的黑灰。"
            },
            {
              "speaker": "zhou",
              "text": "「很好，它已经提前经历了国际物流的毒打。」"
            },
            {
              "speaker": "lin",
              "text": "「先别贫了，检查四个轮子还能不能正常转。」"
            },
            {
              "speaker": "zhou",
              "text": "「林同学，你对一个行李箱的关爱程度甚至超越了对我。」"
            },
            {
              "speaker": "lin",
              "text": "「行李箱要是瘫痪了，需要全队人帮忙扛；你暂时还能自己靠双腿走，性质不一样。」"
            },
            {
              "bg": "polishBusHighwayMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "从华沙机场转乘大巴前往比赛城市的路上，窗外是大片大片生机盎然的绿色田野，点缀着砖红色的屋顶。大巴的冷气开得很足，领队老师在前面拿着大喇叭喊，让大家千万别睡死过去，必须撑到晚上再睡来倒时差。"
            },
            {
              "speaker": "narrator",
              "text": "林澈跟我坐在一起，手里摊着那本厚厚的赛事手册。她看一段，就在便利贴上唰唰写一行，然后再端端正正地贴在手册封面的内侧。"
            },
            {
              "speaker": "zhou",
              "text": "「你真的一点都不困吗？」"
            },
            {
              "speaker": "lin",
              "text": "「困得要命。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你还在做批注？」"
            },
            {
              "speaker": "lin",
              "text": "「正因为脑子不清醒，才要强迫自己看规则，而且只能记最核心的重点，不然根本看不进去。」"
            },
            {
              "speaker": "zhou",
              "text": "「这也是你们学神的什么隐藏高阶技能吗？」"
            },
            {
              "speaker": "lin",
              "text": "「不，这叫被逼无奈的防脱轨机制。」"
            },
            {
              "speaker": "narrator",
              "text": "她刚说完，没忍住打了个很轻的哈欠，立刻反应极快地用手背捂住嘴。我差点笑出声，强行憋住，顺手拧开一瓶水递过去。"
            },
            {
              "speaker": "lin",
              "text": "「谢了。」"
            },
            {
              "speaker": "zhou",
              "text": "「客气什么。说好的，我专门负责递水。」"
            },
            {
              "speaker": "lin",
              "text": "「你这点记忆力倒是没掉线。」"
            },
            {
              "speaker": "zhou",
              "text": "「飞机上达成的战略合作，不敢忘。」"
            },
            {
              "bg": "krakowHotelRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "酒店的房间不大但很干净。两张单人床、两张书桌，还有一个采光很好的小窗台。从窗户望出去，是一片错落的红砖屋顶和远处高耸的教堂尖塔，街上跑的电车慢悠悠的，很有欧洲老城的慢节奏。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "narrator",
              "text": "男女生分在不同楼层。大家刚把行李推进门，老师就在群里下令：整理内务二十分钟，然后大厅集合，实地踏勘去赛场的路线。"
            },
            {
              "speaker": "narrator",
              "text": "我先把护照夹锁进书桌抽屉，刚关上又觉得心里没底，拿出来重新塞回了随身包最隐秘的夹层里，甚至还来回拉了两次拉链确认。"
            },
            {
              "speaker": "tang",
              "text": "「周行，你这是打算跟护照建立什么血脉链接吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「我只是在尽全力避免被林澈打入‘极高风险’人员名单。」"
            },
            {
              "speaker": "tang",
              "text": "「兄弟，自信点，你其实早就在里面了。」"
            },
            {
              "speaker": "zhou",
              "text": "「放屁，我走之前刚问过，我还处于中等风险的安全区。」"
            },
            {
              "speaker": "tang",
              "text": "「……你们俩管这叫安全区？」"
            },
            {
              "bg": "krakowHotelRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "抵达的第一天下午，老师破例允许大家回房间短暂休整，但死命令是下午五点必须准时在大厅集合。我的手机还顽固地停留在北京时间，闹钟差点被我下意识地定在几个小时后的半夜。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "narrator",
              "text": "我盯着屏幕看了足足十秒，果断放弃了靠自己昏沉的脑子进行换算，直接给林澈发了微信。"
            },
            {
              "speaker": "zhou",
              "text": "「求助，当地时间怎么设置自动更新来着？」"
            },
            {
              "speaker": "lin",
              "text": "「设置 - 通用 - 日期与时间 - 开启自动设置。你脑子是真的被洗衣机甩干了？」"
            },
            {
              "speaker": "zhou",
              "text": "「你这回复的语气，严谨中带着一丝客服的冷漠。」"
            },
            {
              "speaker": "lin",
              "text": "「AI 客服可不会好心提醒你，还有二十分钟就要在大厅集合了。」"
            },
            {
              "speaker": "zhou",
              "text": "「感谢非人工客服的热情服务。」"
            },
            {
              "speaker": "narrator",
              "text": "五点整，我火急火燎冲下楼时，她已经气定神闲地站在大厅的沙发旁，手里端着一张酒店免费提供的周边地图。唐越正对着一台全外文的咖啡机抓耳挠腮，顾望舒则在旁边淡定地翻着赛事手册。"
            },
            {
              "speaker": "tang",
              "text": "「谁能告诉我，这几个像象形文字一样的图标到底哪个是美式？」"
            },
            {
              "speaker": "wangshu",
              "text": "「最左边那个只有一个水滴的是浓缩，最右边画着波浪线的是热水。自己兑。」"
            },
            {
              "speaker": "tang",
              "text": "「顾望舒，你为什么连这种奇形怪状的咖啡机图标都能秒懂？」"
            },
            {
              "speaker": "wangshu",
              "text": "「因为设计逻辑是相通的，图标并不难猜。」"
            },
            {
              "speaker": "zhou",
              "text": "「对于唐越来说，只要没写汉字，就属于世界级难题。」"
            },
            {
              "speaker": "tang",
              "text": "「周行，你少在这儿站着说话不腰疼，你半小时前不还在群里问怎么调手机时间吗！」"
            },
            {
              "speaker": "zhou",
              "text": "「国际互助精神懂不懂？赛前禁止进行人身攻击。」"
            },
            {
              "speaker": "lin",
              "text": "「都别吵了，过来把路线图最后确认一遍。从酒店到会场，明天早上我们得自己走过去，不要养成只盯着前面队友后脑勺走的坏习惯。」"
            },
            {
              "speaker": "narrator",
              "text": "她把地图铺在茶几上，指尖沿着纵横交错的街道缓缓划过。酒店所在的位置、带红绿灯的路口、街角的面包店、交错的电车线、最终的会场大门，每一个地标都在她的指尖下变得清晰而具体。"
            },
            {
              "speaker": "zhou",
              "text": "「如果明天早上我还没倒过时差彻底没睡醒，我就只负责死死盯住那家面包店。」"
            },
            {
              "speaker": "lin",
              "text": "「如果你明天没睡醒，我会选择采取物理手段先叫醒你。」"
            },
            {
              "speaker": "zhou",
              "text": "「你们学霸组的叫醒服务都这么硬核且完整的吗？」"
            },
            {
              "speaker": "lin",
              "text": "「不仅硬核，而且不包含代提行李服务。」"
            },
            {
              "bg": "competitionVenuePolandGate",
              "clear": true,
              "speaker": "narrator",
              "text": "比赛的场馆设在当地一所历史悠久的大学校园内。正门前的广场上插满了各个参赛国的国旗，随处可见穿着统一湖蓝色 T 恤的志愿者，胸牌上用粗体写着名字和他们能说的语言。",
              "bgm": "rivalry"
            },
            {
              "speaker": "managerTeacher",
              "text": "「大家注意，这里就是明天的开幕式和后天第一场理论赛的主会场。今天咱们的任务只是认路，禁止任何人现在就开始讨论题目自寻烦恼。」"
            },
            {
              "speaker": "lin",
              "text": "「从酒店正门出来步行十五分钟，需要过两个带红绿灯的十字路口，第二个路口有直达的电车轨道线。」"
            },
            {
              "speaker": "zhou",
              "text": "「这才走了一遍，你就把地图刻在脑子里了？」"
            },
            {
              "speaker": "lin",
              "text": "「因为第二个路口街角有一家飘着黄油味的面包店，作为地标非常明显。」"
            },
            {
              "speaker": "zhou",
              "text": "「我还以为学神的定位系统都是按经纬度算的，原来也会用地标美食定位啊。」"
            },
            {
              "speaker": "lin",
              "text": "「管用就行，别挑刺。」"
            },
            {
              "speaker": "narrator",
              "text": "踏勘结束回酒店前，领队放我们去街角的便利店采购补给。林澈动作麻利地拿了两瓶大矿泉水、一袋看着最顶饱的全麦面包，还有一盒包装上印满波兰语的酸奶。"
            },
            {
              "speaker": "zhou",
              "text": "「你居然看得懂波兰语？」"
            },
            {
              "speaker": "lin",
              "text": "「看不懂，但包装上的蓝白配色和简单的配图，大概率是原味无添加。」"
            },
            {
              "speaker": "zhou",
              "text": "「这种判断有科学依据吗？」"
            },
            {
              "speaker": "lin",
              "text": "「没有，但这是肠胃求生本能的判断。」"
            },
            {
              "speaker": "narrator",
              "text": "结束实地踏勘走回酒店时，波兰的天还是亮的。这里的夏天把傍晚拉得无限漫长，而我们这一群人已经困得连互相斗嘴的力气都没了。林澈进电梯前，眼疾手快地把一张便利贴拍在我的手背上，上面用黑笔重重写着：当地时间十点准时闭眼。",
              "bg": "krakowHotelRoom",
              "bgm": "rainLibrary",
              "clear": true
            },
            {
              "speaker": "zhou",
              "text": "「这种年代了，你还用手写便签？」"
            },
            {
              "speaker": "lin",
              "text": "「手机闹钟的提醒，你大概率会在迷糊中直接滑掉关闭。」"
            },
            {
              "speaker": "zhou",
              "text": "「我的人设在你这里已经崩塌到毫无信用可言了？」"
            },
            {
              "speaker": "lin",
              "text": "「中等风险偏高。」"
            },
            {
              "speaker": "narrator",
              "text": "晚上九点，窗外的天还没完全黑透，欧洲夏天的白昼长得让人恍惚。时差的威力开始显现，人像是踩在棉花上，但我们还是硬撑着在酒店的公共区，把第二天必须带进考场的物品清单过了一遍。"
            },
            {
              "speaker": "lin",
              "text": "「记住了，任何电子设备、护照等无关证件绝对不能带进考场，只带准考证。水瓶必须撕掉外包装标签，计算器的内存要提前全部清空。」"
            },
            {
              "speaker": "zhou",
              "text": "「收到。两支黑笔、一块新橡皮、一把直尺。」"
            },
            {
              "speaker": "lin",
              "text": "「你的薄荷糖，属于违禁品，不能带。」"
            },
            {
              "speaker": "zhou",
              "text": "「明白。物理外挂已封存。」"
            },
            {
              "speaker": "narrator",
              "text": "她满意地点点头，把对折的清单收好。窗外的街道偶尔传来电车清脆的“叮——”声，在这安静的异国氛围里，我们终于有了一点真正置身于波兰夏夜的实感。"
            },
            {
              "speaker": "narrator",
              "text": "我回到房间，把那张便签端端正正地贴在床头灯的正下方。晚上十点，它安静而醒目地停在我的视野里，简直比十个高分贝的手机闹钟还要管用，就像有个严格的监考官正站在床边盯着我。"
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
              "text": "开幕式的主会场穹顶很高，明亮的聚光灯从各个角度打下来。各支国家队按照字母顺序依次入场。五颜六色的队旗、如潮的掌声、耳机里的同传翻译声，还有各种陌生的语言，在这个巨大的空间里交织翻滚。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "轮到中国队入场时，我们紧跟在领队老师身后往前走。周围掌声响起的瞬间，我明显听见身旁的唐越猛地吸了一口冷气。"
            },
            {
              "speaker": "tang",
              "text": "「我突然觉得，我现在连开口说句废话的底气都没了。」"
            },
            {
              "speaker": "zhou",
              "text": "「恭喜你，能有这个觉悟，说明咱们这趟开幕式已经成功了一大半。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，站直点。」",
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
              "text": "「你刚才是不是也悄悄紧张了一下？」"
            },
            {
              "speaker": "lin",
              "text": "「要求你站直，和我紧不紧张是两个独立的事件，不冲突。」"
            },
            {
              "speaker": "narrator",
              "text": "她目视着前方的舞台，手指却下意识地捏住了胸牌的边缘。那一瞬间，我很有默契地没有去拆穿她，只是默默地把自己的胸牌也扶正了些。"
            },
            {
              "bg": "cgCh8OpeningFlagHall",
              "clear": true,
              "speaker": "narrator",
              "text": "开幕式大厅里，各国的旗帜错落有致地排布在舞台两侧。林澈和我并肩站在中国队的方阵中，胸牌被头顶的聚光灯照得反光，大家的表情都很认真，带着些许属于这个赛场的紧绷感。"
            },
            {
              "bg": "internationalExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "第一场理论考试被安排在第二天上午。考场的落地窗很大，窗外是大片静谧的绿色草坪。试卷发下来的一刻，纸张边缘白得晃眼，全英文的题干比集训时做的那些还要长上一截。",
              "bgm": "examLamp"
            },
            {
              "speaker": "proctor",
              "text": "「You may begin.」"
            },
            {
              "speaker": "narrator",
              "text": "我深吸一口气，先不急着看具体数据，而是快速扫视题型。轨道力学、恒星辐射、双星系统、观测规划……全都是集训时啃过无数遍的知识点。题型很熟悉，但几乎每一道都悄悄埋了一个容易被忽略的边界条件。"
            },
            {
              "speaker": "narrator",
              "text": "前三十分钟，我稳扎稳打地把最拿手的两道题解完。第二题的计算里藏着一个极具迷惑性的单位陷阱，这让我想起集训营里，林澈不止一次敲着黑板念叨的那句话：别让量纲和单位代替题目打败你。"
            },
            {
              "speaker": "narrator",
              "text": "我在草稿纸的左上角清晰地写下单位换算公式，然后一步步往下推导。初步答案出来时，数值比我预估的小了一个数量级。我没有立刻强行修改结果，而是折回去重新逐字检查题干，果然发现隐藏条件里的半径单位给的是千米，而不是标准的天文单位。"
            },
            {
              "speaker": "narrator",
              "text": "差一点就踩坑了。"
            },
            {
              "speaker": "narrator",
              "text": "我冷静地把错误的步骤划掉，重新计算。握笔的手没有抖。因为在过去的几个月里，这不是我第一次差点掉进陷阱，也不是第一次在最后关头把自己拉回来。"
            },
            {
              "speaker": "proctor",
              "text": "「One hour remaining.」"
            },
            {
              "speaker": "narrator",
              "text": "压轴题是一道复杂的观测策略设计。约束条件多得让人头皮发麻，但核心思路像极了集训营天台上那三张熬夜总结出来的表格：观测目标、天气权重、误差容限。我的笔尖在答题纸上越写越稳，甚至在交卷前的最后十分钟，还游刃有余地补上了一个备用观测方案。"
            },
            {
              "speaker": "narrator",
              "text": "考试结束铃打响的时候，我没有像以前那样急着去估分，只是平静地把答题纸翻了过来，长长地呼出了一口胸中的浊气。考得不算差。这种踩在实地上的确信感很清晰，不需要对答案来验证。"
            },
            {
              "bg": "competitionVenuePolandGate",
              "clear": true,
              "speaker": "narrator",
              "text": "考场外的阳光明媚得有些刺眼。各国队员陆续走出来，有人眉头紧锁，有人低头走得飞快。林澈站在台阶旁边的树荫下，手里正拿着一瓶没拧开的矿泉水。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "lin",
              "text": "「第二题的单位陷阱，你看见了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「看见了。差点被那个千米半径坑出局。」"
            },
            {
              "speaker": "lin",
              "text": "「我也是，第二遍复查扫题的时候才猛然改过来的。」"
            },
            {
              "speaker": "zhou",
              "text": "「最后那道策略题呢？」"
            },
            {
              "speaker": "lin",
              "text": "「写了主方案，顺手补了个备用方案。你呢？」"
            },
            {
              "speaker": "zhou",
              "text": "「一模一样。」"
            },
            {
              "speaker": "narrator",
              "text": "我们在台阶上对视了一秒，然后同时没忍住笑了一下。这笑容并不是因为笃定能拿什么牌，而是因为那种“终于把题目稳稳抓在手里”的踏实感，只有一起熬过无数个夜晚的彼此才最懂。"
            },
            {
              "bg": "campCafeteria",
              "clear": true,
              "speaker": "narrator",
              "text": "理论考试后的午餐统一定在场馆旁边的大餐厅。各国队伍围坐在不同的长条桌旁，盘子里是千篇一律的烤土豆、水煮鸡胸肉和一小份蔬菜沙拉。大概是因为都刚经历过高强度的脑力消耗，没人吃得很奔放。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "tang",
              "text": "「我本来以为考完试我会饿得能吞下一头牛，结果现在看着这盘土豆，我满脑子都是怎么把它分步骤切割处理。」"
            },
            {
              "speaker": "wangshu",
              "text": "「赶紧吃，别贫了。下午还有数据处理场。」"
            },
            {
              "speaker": "zhou",
              "text": "「顾望舒，你催饭的语气真的跟班主任一模一样。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，你的沙拉别全挑剩下了。」",
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
              "text": "「林同学，我这是在严谨地观察当地的蔬菜种类和结构比例。」"
            },
            {
              "speaker": "lin",
              "text": "「观察时间结束，现在，吃下去。」"
            },
            {
              "speaker": "narrator",
              "text": "我认命地叉起一片没滋没味的黄瓜塞进嘴里。味道确实很普通，但比起刚出考场时那种胃里发紧的感觉，已经容易下咽多了。林澈顺手把餐巾纸盒推给我，自己则低头把赛事手册翻到了下午的流程页。"
            },
            {
              "speaker": "zhou",
              "text": "「你怎么又在看流程表？」"
            },
            {
              "speaker": "lin",
              "text": "「最后确认一遍就不看了。」"
            },
            {
              "speaker": "zhou",
              "text": "「行，那我负责监督你。」"
            },
            {
              "speaker": "lin",
              "text": "「可以，就给我五分钟。」"
            },
            {
              "speaker": "narrator",
              "text": "五分钟时间一到，我准时伸出手，轻轻按住了手册的页面。她抬头看了我一眼，倒也没有不悦，只是很配合地把书合上了。"
            },
            {
              "speaker": "lin",
              "text": "「你现在卡时间的业务很熟练嘛。」"
            },
            {
              "speaker": "zhou",
              "text": "「那是，在你的重点观察期里，我必须好好表现。」"
            },
            {
              "speaker": "lin",
              "text": "「态度不错，加一分。」"
            },
            {
              "speaker": "zhou",
              "text": "「满分到底是多少？」"
            },
            {
              "speaker": "lin",
              "text": "「最终解释权归我所有，暂时不予公布。」"
            },
            {
              "speaker": "narrator",
              "text": "午后的阳光透过餐厅宽大的玻璃窗斜照进来，刚好落在她手边的透明水杯上，折射出一小片光晕。我们没有再继续焦虑地对题，也没有刻意伪装出完全不在乎的放松，只是默契地吃完这顿饭，把下午要用的装备重新规整好，准备迎接最后一场硬仗。"
            },
            {
              "bg": "observationFieldPolandNight",
              "clear": true,
              "speaker": "narrator",
              "text": "实地观测考试被安排在第三天的深夜。波兰深夜的晚风比国内要凛冽得多，草地边缘已经结了水汽，远处场馆的轮廓灯都被临时拉起的遮光布严严实实地挡住了。",
              "bgm": "observatoryNight"
            },
            {
              "bg": "cgCh8PolandObservationField",
              "clear": true,
              "speaker": "narrator",
              "text": "在这个略显冷清的波兰夜间观测场，林澈正低头全神贯注地校准着赤道仪，我在一旁借着微弱的红光手电记录时间和刻度读数。放眼望去，远处其他队伍散落的红光手电，就像坠落在草地上的点点繁星。"
            },
            {
              "speaker": "narrator",
              "text": "林澈的考试顺位排在我前面一组。她走到望远镜旁时，一系列动作稳得毫无破绽：先检查三脚架的水平，再调整寻星镜和主镜的同轴，最后抬头沉着地确认目标星区。"
            },
            {
              "speaker": "narrator",
              "text": "轮到我上场时，手指刚碰到冰凉的调焦轮，脑子里忽然不受控制地闪过很多画面：学校生锈的楼顶、海边带着咸味的堤坝、集训营深夜的天台，还有飞机舷窗外那层苍白的云。"
            },
            {
              "speaker": "narrator",
              "text": "但这些杂乱的画面仅仅停留了一秒。我迅速把所有的注意力全部拉回目镜里，寻星，校准，读数，记录。一气呵成。"
            },
            {
              "speaker": "proctor",
              "text": "「Five minutes.」"
            },
            {
              "speaker": "narrator",
              "text": "最后一个天体的读数因为视宁度有些发飘。我没有为了追求好看的数据去硬凑结果，而是如实记录，并在备注栏里简明扼要地写下了当时的风速影响和目镜边缘起雾的情况。写完最后一笔，悬着的心反倒彻底落回了肚子里。"
            },
            {
              "bg": "teamDiscussionRoomPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "所有的考试环节全部结束后，领队在酒店的小会议室组织大家进行短暂复盘。老师并没有让大家纠结细节去对答案，只是让每个人简单总结一句自己做得最顺手的地方和最遗憾的失误。"
            },
            {
              "speaker": "wangshu",
              "text": "「理论题的时间分配基本符合预期，就是观测考试的时候，备注写得还有点啰嗦，不够精简。」"
            },
            {
              "speaker": "tang",
              "text": "「我数据题算得那叫一个酣畅淋漓，结果观测最后两分钟急了眼，差点把记录表格写成狂草。」"
            },
            {
              "speaker": "lin",
              "text": "「我理论第二题检查得很及时，但观测第一轮找星的时候，动作还是慢了半拍。」"
            },
            {
              "speaker": "zhou",
              "text": "「我策略题主备方案都写全了，不过数据处理压轴题的图表，最后一个标注画得不够清楚。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「很好。这些经验和教训都记在心里，闭幕式前大家好好休息。比赛的钟声已经敲过了，别再拿无谓的复盘来继续折磨自己。」"
            },
            {
              "speaker": "narrator",
              "text": "会议结束后，大家三三两两地散去，林澈走过来，把一瓶常温矿泉水递给我。"
            },
            {
              "speaker": "lin",
              "text": "「你刚才总结说，策略题写完整了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯，都写全了。」"
            },
            {
              "speaker": "lin",
              "text": "「我就知道。」"
            },
            {
              "speaker": "zhou",
              "text": "「你为什么能这么笃定？」"
            },
            {
              "speaker": "lin",
              "text": "「因为你这次从考场出来，居然没有把准考证折成纸飞机或者方块。」"
            },
            {
              "speaker": "narrator",
              "text": "我愣了一下，低头看了看自己的手。准考证正平平整整地躺在透明资料袋里，连个微小的折痕都没有。原来我身上这些极其细微的变化，小到连我自己都没察觉，只有她注意到了。"
            }
          ]
        },
        {
          "id": "ch8-s6",
          "title": "文化之夜",
          "lines": [
            {
              "bg": "krakowHotelRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "随着所有比赛项目尘埃落定，紧绷了几个月的神经终于彻底松懈了下来。距离晚上的文化之夜还有几个小时，波兰午后的阳光透过百叶窗，懒洋洋地洒在我们这间标准的双人标间里。",
              "bgm": "banter"
            },
            {
              "speaker": "narrator",
              "text": "房间不算大，甚至显得有些拥挤。唐越四仰八叉地霸占了靠窗的那张床，把用作草稿纸的星图垫在脑后发呆。顾望舒则一丝不苟地坐在书桌前的椅子上，低头整理着背包。",
              "show": [
                {
                  "id": "tang",
                  "img": "tangNeutral",
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
              "speaker": "narrator",
              "text": "我坐在靠门的另一张床的边缘，看着他们俩。没过多久，房门被轻轻推开，林澈端着两杯刚接的温水走了进来。"
            },
            {
              "speaker": "narrator",
              "text": "她把其中一杯递给我，然后十分自然地，在我身边的床沿坐了下来。淡淡的洗发水香气混合着阳光的味道飘了过来，两人的肩膀之间只隔着不到一拳的距离。",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "tang",
              "text": "「兄弟们，我现在满脑子只有一个念头……我想吃火锅。毛肚、百叶、肥牛，还有那种咕嘟咕嘟冒着红油的牛油锅底！」",
              "focus": "tang"
            },
            {
              "speaker": "wangshu",
              "text": "「波兰的土豆泥和酸菜煎香肠，终于把你这个极其挑剔的碳水星人逼疯了吗？」",
              "focus": "wangshu"
            },
            {
              "speaker": "tang",
              "text": "「那何止是逼疯，那是灵魂的折磨！我现在做梦都能闻到紫甘蓝酸菜的味道。我发誓，回国第一顿，谁要是敢点沙拉，我就跟他拼了。」",
              "focus": "tang"
            },
            {
              "speaker": "narrator",
              "text": "唐越一边抱怨着，一边翻了个身，目光突然落在了顾望舒的书桌上。"
            },
            {
              "speaker": "tang",
              "text": "「哎？望舒，你手里拿着个什么毛茸茸的东西？你不是在整理试卷吗？」",
              "focus": "tang"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒的手猛地一抖，像是触电般把那团东西塞进了背包的夹层里，欲盖弥彰地推了推眼镜。"
            },
            {
              "speaker": "wangshu",
              "text": "「没什么。波兰特产的……翼骑兵泰迪熊。我妹妹快过生日了，顺手买个纪念品而已。」",
              "focus": "wangshu"
            },
            {
              "speaker": "tang",
              "text": "「拉倒吧！你根本没有妹妹！上次填家属信息表的时候我看得清清楚楚，你是独生子！」",
              "focus": "tang"
            },
            {
              "speaker": "wangshu",
              "text": "「咳……表妹。是表妹。」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「噗……真没看出来啊望舒，平时做起天体力学大题来像个没有感情的计算机器，私底下居然喜欢毛绒玩具？」"
            },
            {
              "speaker": "narrator",
              "text": "身旁的林澈也偏过头，和我交换了一个忍俊不禁的眼神。她的肩膀因为憋笑而微微颤抖了一下，轻轻碰到了我的胳膊。",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualSmile",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "wangshu",
              "text": "「我说了，这是送给表妹的。而且，谁规定学理科的就必须是毫无波澜的木头？逻辑和感性并不冲突。」",
              "focus": "wangshu"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒偏过头看着窗外，原本严厉的语气忽然柔和了下来。"
            },
            {
              "speaker": "wangshu",
              "text": "「其实……仔细想想，这段每天熬夜算轨道、跟你们抢观测时段的集训日子，马上就要结束了，多少觉得有些不太真实。」",
              "focus": "wangshu"
            },
            {
              "speaker": "wangshu",
              "text": "「虽然你们平时真的很吵，但这大概会是我高中三年，最值得回味的一段时间吧。」",
              "focus": "wangshu"
            },
            {
              "speaker": "narrator",
              "text": "房间里安静了两秒。这个平时像木头一样理智毒舌的家伙突然开始走心，反而让我们都有些不知所措。"
            },
            {
              "speaker": "tang",
              "text": "「卧槽，顾望舒你别吓我，你突然这么煽情我浑身起鸡皮疙瘩。是不是被外星人夺舍了？」",
              "focus": "tang"
            },
            {
              "speaker": "wangshu",
              "text": "「滚。当我没说。」",
              "focus": "wangshu"
            },
            {
              "speaker": "narrator",
              "text": "大家轰然大笑起来。在这个充满阳光的午后，离别的情绪被小心翼翼地藏在了这些毫无营养的玩笑话里。"
            },
            {
              "speaker": "zhou",
              "text": "「说起来，比完赛回去马上就是高三了。大家志愿都想好了吗？真的都要在天文这条路上走到黑吗？」"
            },
            {
              "speaker": "lin",
              "text": "「大概还是会选天体物理吧。虽然很苦，可能还要常年泡在荒郊野外的观测站里……」",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualThinking",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「但只要想到能一辈子看着星星，研究那些远在几百万光年外的事情，想想也挺好的，不是吗？」",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualSmile",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "距离很近。阳光洒在她的侧脸上，勾勒出一圈柔和的光晕。我几乎能看清她睫毛投下的浅浅阴影。那是独属于十八岁的、纯粹而坚定的理想主义。"
            },
            {
              "speaker": "tang",
              "text": "「那必须的！咱们可是要征服宇宙的！不过在这之前……咱们得先征服今晚的文化之夜。所以我再次强烈提议！晚上我们唱《红日》！‘命运就算颠沛流离，命运就算曲折离奇’，气势如虹，绝对能镇住全场！」",
              "focus": "tang"
            },
            {
              "speaker": "wangshu",
              "text": "「唐越，你忘了昨天晚上在大厅，那个新加坡小哥清唱的《海阔天空》了？人家那粤语叫一个字正腔圆，简直像是在红馆开演唱会。就咱们这下午现学的‘塑料粤语’，晚上台下坐着一圈东南亚华人哥们，你是嫌咱们丢人丢得不够大吗？」",
              "focus": "wangshu"
            },
            {
              "speaker": "zhou",
              "text": "「望舒说得有理，毕竟是跨国汇演，还是选一首稳妥点的。《水调歌头》怎么样？明月几时有，把酒问青天，特别有中国古典美感。」"
            },
            {
              "speaker": "tang",
              "text": "「大哥，那是文化狂欢夜，不是诗词朗诵大会。节奏太慢了，容易冷场啊。难道咱们上去唱周杰伦？」",
              "focus": "tang"
            },
            {
              "speaker": "narrator",
              "text": "就在大家你一言我一语、争执不下的时候，林澈轻轻放下了手里的水杯。"
            },
            {
              "speaker": "lin",
              "text": "「……《夜空中最亮的星》，怎么样？」",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualThinking",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "房间里安静了一秒。"
            },
            {
              "speaker": "lin",
              "text": "「对于我们这群借着星光来到这里的人来说，可能没有比这更合适的歌了。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「而且这是一首关于仰望和前行的歌，寓意很好。即使他们听不懂中文，也能感受到旋律里的力量。」"
            },
            {
              "speaker": "tang",
              "text": "「对啊！我怎么没想到！就这首了！走走走，趁还有时间，赶紧清唱两遍对对词，谁也别掉链子！」",
              "focus": "tang"
            },
            {
              "bg": "competitionOpeningHallPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "几个小时后，克拉科夫宴会厅。在这个被各种肤色、各种语言挤满的嘈杂空间里，属于 IOAA 的狂欢正式开始。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "空气中混杂着果汁、糕点和不同香水的味道。各国的年轻人们不再是在考场上厮杀的对手，而是尽情地展示着自己国家的文化与青春的活力。"
            },
            {
              "speaker": "narrator",
              "text": "当轮到中国队登台时，刺眼的聚光灯打在我们身上。台下黑压压的一片，无数双眼睛正注视着我们。我深吸了一口气，和队友们交换了一个眼神。随后，我们在异国的舞台上，有些拘谨地唱出了那句熟悉的旋律。"
            },
            {
              "speaker": "narrator",
              "text": "“夜空中最亮的星，能否听清，那仰望的人，心底的孤独 and 叹息……”"
            },
            {
              "speaker": "narrator",
              "text": "伴奏从音响里轻轻铺开，我们略显青涩的和声跟着旋律往前推。起初，台下只是安静地聆听。但当副歌逐渐走高时，一点微弱的白光在黑暗的观众席中亮起。"
            },
            {
              "speaker": "narrator",
              "text": "接着是两点、十点、成百上千点。"
            },
            {
              "speaker": "narrator",
              "text": "那些来自世界各地、可能连一句中文都听不懂的同龄人们，自发地打开了手机的闪光灯。他们将手臂高高举起，在半空中跟随着节拍缓缓摇曳。"
            },
            {
              "bg": "cgCh8CulturalNightArtificialStarrySea",
              "clear": true,
              "speaker": "narrator",
              "text": "在这间宽敞的宴会厅里，我们看着那些光点汇聚成了一片专属于天文人的灿烂星海。在这个充满分裂与隔阂的世界里，这一刻的纯粹与浪漫，美好得几乎不切实际。",
              "bgm": "happyEnding"
            },
            {
              "bg": "competitionOpeningHallPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "在一片热烈得几乎要掀翻穹顶的掌声中，我们鞠躬走下台。"
            },
            {
              "speaker": "narrator",
              "text": "紧接着，主持人用高亢的声音宣布了下一个节目：乌克兰代表队。"
            },
            {
              "speaker": "narrator",
              "text": "我端起一杯果汁，准备找个角落好好欣赏。就在这时——"
            },
            {
              "bg": "competitionOpeningHallPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "……",
              "bgm": "none"
            },
            {
              "speaker": "narrator",
              "text": "《嘿，翔隼！》（Hej Sokoły）的旋律，在空旷的舞台上突兀地响起了。",
              "bgm": "sokoly"
            },
            {
              "speaker": "narrator",
              "text": "本来那是乌克兰队几个人的独唱，但在旋律进行到一半时，台下忽然起了一阵骚动。"
            },
            {
              "speaker": "narrator",
              "text": "波兰队的队员们跑上了舞台。在这个没有任何彩排的夜晚，两个相邻国家的青年在黑暗的单束追光下，紧紧勾住了彼此的肩膀。"
            },
            {
              "bg": "cgCh8CulturalNightShadowsOfSokoly",
              "clear": true,
              "speaker": "narrator",
              "text": "悲凉而悠扬的东欧民歌，带着某种跨越边境的哀愁，在宴会厅的上方回荡。",
              "bgm": "sokoly"
            },
            {
              "speaker": "narrator",
              "text": "大厅里的嘈杂声消失了。"
            },
            {
              "speaker": "narrator",
              "text": "眼前的一切忽然失去了一部分真实感。周围人的注视、音响里传出的人声，仿佛隔着一层厚厚的水状玻璃，变得遥远而失真。"
            },
            {
              "speaker": "narrator",
              "text": "聚光灯下，他们紧挨在一起。胸前依然挂着明晃晃的 IOAA 参赛牌。"
            },
            {
              "speaker": "narrator",
              "text": "几百万光年外璀璨的星系。刚才那片温暖的人造星海。"
            },
            {
              "speaker": "narrator",
              "text": "撕裂夜空的防空警报。以及那个缺席了这届赛事的庞大邻国。"
            },
            {
              "speaker": "narrator",
              "text": "两种截然不同的现实，在这个原本属于青春的夜晚里，安静而荒诞地重叠在了一起。"
            },
            {
              "speaker": "narrator",
              "text": "“今日，这里满是胜利与欢笑。”"
            },
            {
              "speaker": "narrator",
              "text": "“明天，这里充满硝烟与鲜血。”"
            },
            {
              "speaker": "narrator",
              "text": "“你已经做了你力所能及之事。”",
              "choice": [
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                },
                {
                  "text": "宇宙沉默不语。"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "我感到一阵轻飘飘的眩晕。我们的青春被安全地包裹在精密公式和象牙塔里，而同台竞技的他们，却要在几天后带着奖牌，回到一个拉响着警报的故土。"
            },
            {
              "speaker": "narrator",
              "text": "在这种巨大的、近乎于荒诞的失真感中，我无声地转过身，推开沉重的大门，一个人走出了这间宴会厅。"
            },
            {
              "bg": "observationFieldPolandNight",
              "clear": true,
              "speaker": "narrator",
              "text": "离开了喧闹的大厅，波兰深夜冰冷的夜风吹在脸上，才让我的思绪稍微落回了地面。",
              "bgm": "none"
            },
            {
              "speaker": "narrator",
              "text": "这是酒店后方的一处长满杂草的高地。远离了城市的灯火，四周静谧无声。抬头望去，是清晰得有些刺眼的银河，恒星冷酷而平静地注视着地球。"
            },
            {
              "speaker": "narrator",
              "text": "我们在做题，我们在仰望千万光年外的星空。可就在同一片星空下，在这颗蔚蓝色的行星上，人类却依然在因为地缘、战争而流血离别。"
            },
            {
              "speaker": "narrator",
              "text": "身后传来了枯草被踩断的极轻微的响声。"
            },
            {
              "speaker": "lin",
              "text": "「出来连件外套都不披，明天要是发烧了，领队可是会骂人的。」",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "narrator",
              "text": "林澈不知什么时候跟了出来。她的声音比平时更轻了一些，仿佛怕惊扰了什么。她没有问我为什么离场，只是安静地走到我身边，挨着我坐了下来。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈……」"
            },
            {
              "speaker": "lin",
              "text": "「嗯，我在听。」",
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我们每天算着那些庞大的数字，看着那么遥远、那么永恒的东西。可是为什么……当低头看向地面的时候，却总觉得什么都抓不住呢？」"
            },
            {
              "speaker": "narrator",
              "text": "夜风拂过，林澈的短发发尾轻轻擦过我的肩膀。她抬头看着满天繁星，沉默了很久。"
            },
            {
              "speaker": "narrator",
              "text": "面对着头顶无垠的宇宙和现实的荒诞，我感到一阵由内而外的无力感。那是一种对人类自身命运的深刻迷茫。"
            },
            {
              "speaker": "narrator",
              "text": "我下意识地伸出手。在冰冷的草地上，我握住了身旁那只微凉的、纤细的手。我只是想在这极度不真实的虚无中，寻找一点确切的温度。"
            },
            {
              "speaker": "narrator",
              "text": "林澈的指尖因为惊讶而微微一动。但她没有挣脱。过了几秒钟，她反而轻轻翻转过手腕，用柔软的掌心温柔地包裹住了我的手背。"
            },
            {
              "speaker": "lin",
              "text": "「其实，我也觉得很害怕。」",
              "focus": "lin",
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualTired",
                  "pos": "center"
                }
              ]
            },
            {
              "speaker": "lin",
              "text": "「宇宙太大了，大到一眨眼就是几百万年。而我们又太渺小了，渺小到一场战争、一次意外，就能把我们的一切抹平。」",
              "focus": "lin"
            },
            {
              "speaker": "lin",
              "text": "「但是周行，你听。」",
              "focus": "lin"
            },
            {
              "bg": "cgCh8CulturalNightSilverDragonAnchor",
              "clear": true,
              "speaker": "narrator",
              "text": "她微微仰起头，看着那道横跨天际的银河。伴随着夜风，她用干净而温柔的声音，顺着旋律轻轻唱出了几句陌生的外语。",
              "bgm": "silverDragon"
            },
            {
              "speaker": "lin",
              "text": "「あの蒼ざめた海の彼方で（在那苍暗大海彼端）\n今まさに誰かが傷んでいる（有人现正承受伤痛）」"
            },
            {
              "speaker": "lin",
              "text": "「まだ飛べない雛たちみたいに（如尚未飞起的雏鸟）\n僕はこの非力を嘆いている（我为自身无力叹息）」"
            },
            {
              "speaker": "narrator",
              "text": "她的歌声并不宏大，但在空旷无风的山丘上，每一个音符都仿佛能穿透心底最迷茫的角落。"
            },
            {
              "speaker": "lin",
              "text": "「急げ悲しみ 翼に変われ（快将悲伤化成羽翼）\n急げ傷跡 羅針盤になれ（快把伤痕当做罗盘）」"
            },
            {
              "speaker": "lin",
              "text": "「まだ飛べない雛たちみたいに（如尚未飞起的雏鸟）\n僕はこの非力を嘆いている（我为自身无力叹息）」"
            },
            {
              "speaker": "narrator",
              "text": "她微微阖上双眼，轻柔的声音随着夜风，流淌向头顶横跨天际的银河。"
            },
            {
              "speaker": "lin",
              "text": "「夢が迎えに来てくれるまで（直到梦想成真之前）\n震えて待ってるだけだった昨日（昨日我仍惴惴而待）」"
            },
            {
              "speaker": "lin",
              "text": "「明日 僕は龍の足元へ崖を登り 呼ぶよ（明日我将攀上断崖来到龙的脚下 呼唤它）\n『さあ、行こうぜ』（『来吧，出发吧』）」"
            },
            {
              "speaker": "narrator",
              "text": "那一瞬间，伴随着逐渐激昂的旋律，我仿佛真的看到了一条由无数恒星组成的虚幻巨龙，在头顶无声地舒展着庞大的身躯。"
            },
            {
              "speaker": "lin",
              "text": "「銀の龍の背に乗って（骑在银龙的背上）\n届けに行こう 命の砂漠へ（前往生命的沙漠中传达吧）」"
            },
            {
              "speaker": "lin",
              "text": "「銀の龍の背に乗って（骑在银龙的背上）\n運んで行こう 雨雲の渦を（带去雨云的漩涡吧）」"
            },
            {
              "speaker": "narrator",
              "text": "林澈的歌声并不宏大，却在这无边的夜色中格外清晰。"
            },
            {
              "speaker": "zhou",
              "text": "「这首歌……叫什么名字？」"
            },
            {
              "speaker": "lin",
              "text": "「中岛美雪的《骑在银龙的背上》。很久以前的老歌了。」",
              "focus": "lin",
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
              "text": "「它原本是写给一个偏远海岛上的医生的。在那个四面环海、医疗条件极差的孤岛上，生命脆弱得就像一张薄纸。可是那位医生，还是每天骑着自行车，迎着风浪去救人。」",
              "focus": "lin"
            },
            {
              "speaker": "lin",
              "text": "「歌词里说，哪怕失去一切，也要乘上那只银龙的背，去往生命的彼岸。我觉得……那条‘银龙’，不仅仅是大海的波浪。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "林澈抬起没有被我握住的那只手，指了指我们头顶那条由无数恒星组成的、横跨夜空的璀璨光带。"
            },
            {
              "speaker": "lin",
              "text": "「它也可以是我们头顶的这条银河，不是吗？」",
              "focus": "lin"
            },
            {
              "speaker": "lin",
              "text": "「宇宙对我们的苦难沉默不语。但这并不代表我们什么都做不到。至少现在，在这片星空下，我们的存在是真实的，我们手中握着的温度也是真实的。」",
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "在这轻柔而充满力量的歌声余韵中，那股压抑在心头的荒谬与无力，被奇迹般地、温柔地抚平了。"
            },
            {
              "speaker": "narrator",
              "text": "我突然明白，人类的悲欢确实并不相通，宇宙的法则也始终冷酷。"
            },
            {
              "speaker": "narrator",
              "text": "但哪怕这世界满是泥泞，哪怕现实荒诞不经，我们依然可以骑上那条名为‘银河’的巨龙。在这无尽的黑夜里，带着彼此的温度，继续仰望，坚韧前行。"
            }
          ]
        },
        {
          "id": "ch8-s7",
          "title": "闭幕式与归途",
          "lines": [
            {
              "bg": "krakowOldTownDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "文化之夜后的第二天上午，连着紧绷了几天的神经终于松绑，主办方安排了半日的城市参观。克拉科夫老城的石板路被阳光镀上了一层暖色，广场中央有人拉着悠扬的小提琴，成群的鸽子从教堂前呼啦啦飞起又轻盈落下。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "tang",
              "text": "「我宣布，从此刻起，寻找顶级波兰甜点这项神圣任务，正式启动。」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「给你们十五分钟自由活动，禁止离开广场的可视范围。」"
            },
            {
              "speaker": "tang",
              "text": "「十五分钟足够我把附近店面的甜点菜单研究透彻了。」"
            },
            {
              "speaker": "wangshu",
              "text": "「你研究菜单的热情要是能分一半给研究试卷的附加题，你早满分了。」"
            },
            {
              "speaker": "tang",
              "text": "「附加题的墨水又不能加双倍奶油，性质完全不同。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈驻足在一家纪念品店的橱窗前，目光停留在里面一枚很小的星形徽章上。它不是那种光鲜亮丽的亮金色，而是透着点做旧的复古银，边缘还刻着细细密密的暗纹。"
            },
            {
              "speaker": "zhou",
              "text": "「看上了？」"
            },
            {
              "speaker": "lin",
              "text": "「没有，随便看看。」",
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
              "text": "「林同学，你每次说‘随便看看’的时候，眼神都快长在上面了。」"
            },
            {
              "speaker": "lin",
              "text": "「认真观察物品细节不代表非得产生购买行为。」"
            },
            {
              "speaker": "zhou",
              "text": "「行吧，那我买。」"
            },
            {
              "speaker": "lin",
              "text": "「为什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「就当是纪念我们没有把护照掉在波兰机场的壮举。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，你找理由的水平还能再差一点吗。」"
            },
            {
              "speaker": "zhou",
              "text": "「那就纪念咱们终于熬完了所有考试，功德圆满。」"
            },
            {
              "speaker": "lin",
              "text": "「……这个理由勉强能接受。」"
            },
            {
              "speaker": "narrator",
              "text": "我推门进去买下了那枚徽章。她这回没有跟我推让，只是默默接过去放进掌心，垂着眼帘看了一会儿。"
            },
            {
              "speaker": "lin",
              "text": "「回国以后我把钱微信转你。」"
            },
            {
              "speaker": "zhou",
              "text": "「别啊，转账多没意思，严重破坏纪念品提供的情绪价值。」"
            },
            {
              "speaker": "lin",
              "text": "「那我回国请你吃学校门口的甜点。」"
            },
            {
              "speaker": "zhou",
              "text": "「成交。」"
            },
            {
              "bg": "resultCeremonyPoland",
              "clear": true,
              "speaker": "narrator",
              "text": "闭幕式当天，最终成绩在大厅里逐一揭晓。当主持人开始念出获奖名单时，所有人都屏息凝神地盯着舞台侧面的大屏幕，如潮的掌声一波接着一波在场馆里回荡。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒稳稳地拿下了一枚银牌。唐越摘得铜牌，听到名字站起来的时候激动得差点把椅子带翻。当林澈的名字也出现在铜牌名单上时，她明显愣了半秒，才在掌声的簇拥下走上领奖台。"
            },
            {
              "speaker": "narrator",
              "text": "终于轮到我了。大屏幕上打出了我的名字，后缀是 Honorable Mention。虽然不是实质性的奖牌，但我的名字清清楚楚地印在了这场国际大赛的成绩单上。"
            },
            {
              "speaker": "narrator",
              "text": "我深吸一口气站起身，膝盖甚至有一瞬间的发软。当林澈从舞台侧边走下来，刚好经过我身边时，她用只有我们俩能听见的声音，极轻地说了一句。"
            },
            {
              "speaker": "lin",
              "text": "「你做到了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。我们都做到了。」"
            },
            {
              "speaker": "narrator",
              "text": "闭幕式的余热还未散去，大家聚集在场馆门外拍照留念。唐越举着他的铜牌满场乱跑喊着要去吃大餐，顾望舒被领队老师拉着跟别国代表队交换合影。林澈安静地站在稍远一点的角落里，低头细细地把奖牌的挂绳理平顺。"
            },
            {
              "speaker": "zhou",
              "text": "「再次恭喜啊，林澈同学。」",
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
              "text": "「同喜。」"
            },
            {
              "speaker": "zhou",
              "text": "「我这可是两手空空，没有奖牌可挂。」"
            },
            {
              "speaker": "lin",
              "text": "「但你的名字留在了那里。」"
            },
            {
              "speaker": "zhou",
              "text": "「林同学，我发现你越来越会说话了，这个角度我很喜欢。」"
            },
            {
              "speaker": "lin",
              "text": "「况且，你的那道观测策略题写得非常完整。」"
            },
            {
              "speaker": "zhou",
              "text": "「这你都还记着呢？」"
            },
            {
              "speaker": "lin",
              "text": "「我记性一向很好。」"
            },
            {
              "speaker": "narrator",
              "text": "她把那枚买来的旧银色星形徽章别在了奖牌挂绳的边缘，低头仔细调整了一下角度。奖牌、徽章、参赛胸牌紧挨在一起，虽然稍微显得有些拥挤，但看起来却有着说不出的合适。"
            },
            {
              "speaker": "zhou",
              "text": "「等回国以后，你打算把这枚徽章也钉在错题本的封面上吗？」"
            },
            {
              "speaker": "lin",
              "text": "「才不要。我的错题本封面已经承载了太多沉重的东西了。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你要放哪？」"
            },
            {
              "speaker": "lin",
              "text": "「先妥善保管在文件夹里。其他的，等回国了再说。」"
            },
            {
              "speaker": "zhou",
              "text": "「你看，你那套著名的文件归档理论又重现江湖了。」"
            },
            {
              "speaker": "lin",
              "text": "「怎么？你有意见？」"
            },
            {
              "speaker": "zhou",
              "text": "「完全没有。甚至觉得这种熟悉的严谨，让人感到十分安心。」"
            },
            {
              "speaker": "narrator",
              "text": "她没有继续这个话题，只是把视线稍微移开了一些。但我分明看到，她的嘴角在阳光下不经意地向上弯起了一个小小的弧度。"
            },
            {
              "bg": "krakowOldTownDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "结果公布后的那个傍晚，领队老师终于松口放宽了队伍严苛的作息，允许大家在酒店附近几条街的范围内自由散步。老城广场那些上了年头的砖路有些坑洼，鞋底踩在上面会发出细碎而踏实的沙沙声。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "唐越兴奋地拉着顾望舒直奔攻略上的甜点店，老师在后面扯着嗓子叮嘱他们千万别走远。我和林澈则心照不宣地慢慢落到了队伍的最后，谁也没有刻意去加快步伐赶路。"
            },
            {
              "speaker": "zhou",
              "text": "「你脖子上那块奖牌挂着沉吗？」"
            },
            {
              "speaker": "lin",
              "text": "「重量刚刚好，习惯了就还好。」",
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
              "text": "「听你这口气，像是打算回国以后也每天挂着它去上学了？」"
            },
            {
              "speaker": "lin",
              "text": "「你要是那么享受被全校同学行注目礼的快感，你完全可以每天把你的证书顶在头上走。」"
            },
            {
              "speaker": "zhou",
              "text": "「那不行，证书没长挂绳，顶着容易掉。」"
            },
            {
              "speaker": "lin",
              "text": "「没关系，如果你有需要，我可以热心支援你一根活页文件夹的绑绳。」"
            },
            {
              "speaker": "zhou",
              "text": "「林同学，大可不必对我如此热心肠。」"
            },
            {
              "speaker": "narrator",
              "text": "她被逗得轻笑出声，将手随意地插进队服外套的口袋里。我猜，那枚复古的星形徽章此刻一定也静静地躺在那里。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，跟你说实话，其实今天我在台上听到主持人念到我名字的时候，我的第一反应，居然是想在台下找你。」"
            },
            {
              "speaker": "lin",
              "text": "「找我？找我干嘛？」"
            },
            {
              "speaker": "zhou",
              "text": "「想找你确认一下，我是不是真的得奖了，有没有听错。」"
            },
            {
              "speaker": "lin",
              "text": "「你这个人，怎么总是需要靠别人来给你确认安全感。」"
            },
            {
              "speaker": "zhou",
              "text": "「以前可能真的是这样。但今天……我其实更多的是想让你也能亲耳听见那个结果。」"
            },
            {
              "speaker": "narrator",
              "text": "她前行的脚步微不可察地慢了半拍。广场上正好有一家人推着老式的婴儿车悠哉地经过，车轮碾过高低不平的石板，发出很轻微的轱辘声。"
            },
            {
              "speaker": "lin",
              "text": "「我当时在台下，听见你的名字了。」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯，听见就好。」"
            },
            {
              "speaker": "lin",
              "text": "「主持人发音很标准，念得很清楚。」"
            },
            {
              "speaker": "zhou",
              "text": "「这种毫无感情色彩的客观评价，确实非常‘林澈’。」"
            },
            {
              "speaker": "lin",
              "text": "「不然呢？你还指望我给你写篇八百字的赞美小作文吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「不用了。有你那句肯定，就已经足够了。」"
            },
            {
              "speaker": "narrator",
              "text": "她没有再接话去深究什么。我们并肩继续在广场上漫步，大部队的身影就在前面不远处。陌生城市里初夏的晚风从有着百年历史的街角温柔地吹过来，将连续几天高强度比赛积攒的疲惫，一丝一缕地吹散了。"
            },
            {
              "speaker": "narrator",
              "text": "晚上回到酒店房间，我终于有时间把所有的东西一股脑全倒在床上：护照本、用过的登机牌、刚发下来的证书、那本被翻得有些卷边的赛事手册、叠好的队服外套，当然，还有林澈走之前强行塞给我写着时差提醒的那张小便签。这些东西零散地摊着，分量不重，却真实地将这一路摸爬滚打的每一个节点都印刻在了纸面上。",
              "bg": "krakowHotelRoom",
              "bgm": "smallPromise",
              "clear": true
            },
            {
              "speaker": "narrator",
              "text": "手机适时地震动了一下。林澈在微信上发来一张照片，是她刚整理完毕的文件夹。红色的证件夹层、蓝色的资料夹层、绿色的保险单夹层，每个区域的物品都分门别类，顺序丝毫不乱，严谨得像个档案馆。"
            },
            {
              "speaker": "lin",
              "text": "「你那边收拾得怎么样了？」"
            },
            {
              "speaker": "zhou",
              "text": "「报告，正在努力向林澈同学提供的标准答案靠拢。」"
            },
            {
              "speaker": "lin",
              "text": "「口说无凭，拍照检查。」"
            },
            {
              "speaker": "narrator",
              "text": "我赶紧把床上的东西按她的标准迅速归拢整齐，拍了张过去。等待了几秒钟，屏幕上弹出了她简短有力的两个字：合格。"
            },
            {
              "speaker": "zhou",
              "text": "「林长官，既然都合格了，那我的观察期是不是可以宣布正式结束了？」"
            },
            {
              "speaker": "lin",
              "text": "「别高兴得太早。回国落地后，视你的接机表现再做综合评定。」"
            },
            {
              "speaker": "narrator",
              "text": "我看着屏幕上的回复，忍不住笑了一下，小心翼翼地把刚拿到手的赛事证书塞进了那个蓝色的夹层里。窗外的克拉科夫古城已经完全陷入了宁静，到了明天，我们就会带上这些满载回忆的纸页和各自打拼来的结果踏上归途。而我无比确信，这几天里养成的某些习惯和默契，大概会随着这趟航班，被我们永远带回国去。"
            },
            {
              "speaker": "narrator",
              "text": "回程的前一晚，我把护照夹、沉甸甸的参赛证书还有那本被翻旧了的赛事手册一起塞进随身包里。拉上拉链的那一刻，我忽然走马观花般地想起了很多事：出发前被她无情淘汰的那件厚外套、机场候机区递来的薄荷糖、万米高空飞机窗外冷色调的云、波兰寒冷夜里的观测场，还有维斯瓦河边她说的那句“我们已经把能做的做完了”。"
            },
            {
              "speaker": "narrator",
              "text": "这趟远门并没有魔法般地解决掉所有现实问题。高三的重压依然在等我，志愿填报的纠结依然在等我，回国之后还有无数张新的试卷要填满。但至少，在这个短暂而漫长的夏天，我和林澈真的结伴走到了一处很远很远的地方，然后又并肩把彼此带回了那条可以继续从容往前的路上。"
            },
            {
              "bg": "airportBoardingGateNight",
              "clear": true,
              "speaker": "narrator",
              "text": "跟来时的兵荒马乱相比，回国前的候机时间显得异常松弛。大家都累得连玩笑都懒得开，唐越心满意足地抱着一袋子他心心念念的波兰甜点，顾望舒把证书平平整整地夹在一本厚书里，领队老师则站在一旁，像个操碎了心的老父亲一样最后一次清点着所有人的护照。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "managerTeacher",
              "text": "「大家把护照、登机牌、证书再摸一遍确认好！别以为飞机落地就万事大吉了，回国后还有正式的总结会等着你们。」"
            },
            {
              "speaker": "tang",
              "text": "「老师，总结会上允许我作为代表，汇报一下我对波兰甜点深度的实地研究成果吗？」"
            },
            {
              "speaker": "managerTeacher",
              "text": "「绝对不允许。」"
            },
            {
              "speaker": "tang",
              "text": "「那行吧，那我只能回学校私下召开甜点品鉴发表会了。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈就坐在我旁边的候机椅上，那个装奖牌的深色盒子安稳地放在她膝盖上。她并没有时不时地打开拿出来看，只是偶尔会用手指轻轻敲一下盒子的边缘，像是在用触觉确认那份沉甸甸的真实感。"
            },
            {
              "speaker": "zhou",
              "text": "「怎么？还觉得像在做梦没适应？」"
            },
            {
              "speaker": "lin",
              "text": "「有那么一点点。」",
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
              "text": "「等回去了，学校公告栏估计又要给你拉大红横幅贴喜报了。」"
            },
            {
              "speaker": "lin",
              "text": "「而你，估计又要被抓壮丁，站在旁边被各种路人参观。」"
            },
            {
              "speaker": "zhou",
              "text": "「这次我可有底气了，遇到围观的，我就指着你给他们科普：看，真主角在那边。」"
            },
            {
              "speaker": "lin",
              "text": "「你敢。」"
            },
            {
              "speaker": "zhou",
              "text": "「怎么，林同学也会害羞？」"
            },
            {
              "speaker": "lin",
              "text": "「我这叫害怕麻烦。」"
            },
            {
              "speaker": "narrator",
              "text": "她把奖牌盒妥帖地收进双肩包深处，又仔细检查了一遍拉链是否拉严。那套行云流水的动作，跟我们出发前在宿舍检查护照夹时如出一辙。"
            },
            {
              "speaker": "lin",
              "text": "「你的赛事证书收好了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「早就放进随身包里了。」"
            },
            {
              "speaker": "lin",
              "text": "「拉链确认过了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「关得死死的。」"
            },
            {
              "speaker": "lin",
              "text": "「执行力不错。」"
            },
            {
              "speaker": "zhou",
              "text": "「那我现在的危险评级，是不是可以从中等风险往下调一调了？」"
            },
            {
              "speaker": "lin",
              "text": "「暂定留校察看，继续保持观察期。」"
            },
            {
              "speaker": "zhou",
              "text": "「林大审判长，您的标准未免也太严苛了吧。」"
            },
            {
              "speaker": "lin",
              "text": "「国际赛事结束了，日常习惯也不能松懈。」"
            },
            {
              "speaker": "narrator",
              "text": "登机广播终于响了起来。我们纷纷站起身，排着队慢慢往前挪动。来的时候，我觉得从国内出发到波兰的这条路长得有些离谱；现在回去，路途依然漫长，但我心里却只剩下满满的踏实。"
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
              "text": "「等回国落地，之后还继续约着一起刷题吗？」"
            },
            {
              "speaker": "lin",
              "text": "「当然。你该不会天真地以为，拿了个国际比赛的证书，你就能直接跨过高考的门槛了吧？」"
            },
            {
              "speaker": "zhou",
              "text": "「不敢不敢，我只是在谨慎地确认一下，我们的刷题合作协议是否还有续约的可能。」"
            },
            {
              "speaker": "lin",
              "text": "「同意续约。暂定期限为到这学期期末。」"
            },
            {
              "speaker": "zhou",
              "text": "「啊？期限这么短的吗？」"
            },
            {
              "speaker": "lin",
              "text": "「后续视你期末的综合表现，再决定是否继续续约。」"
            },
            {
              "speaker": "narrator",
              "text": "她随口开着玩笑，背着包大步往前走去。我紧紧跟在她的身后，护照夹安稳地躺在包里，证书也安稳地躺在包里，而那枚刻着暗纹的星形徽章，被她小心翼翼地收好。"
            },
            {
              "speaker": "narrator",
              "text": "未来确实还有很多事情找不到清晰的答案，但这一次，我再也没有了那种急于索要全部结果的焦虑。先飞回国，先把落下的课补上，先踏踏实实地把下一张卷子做完。至于那些更遥远的以后，完全可以等我们一起并肩走到那里的时候，再慢慢说。"
            }
          ]
        }
      ]
    },
    {
      "id": "ch9",
      "title": "第九章：回到考场",
      "sections": [
        {
          "id": "ch9-s1",
          "title": "返校第一节课",
          "lines": [
            {
              "bg": "schoolGateMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "回国后的第一个早晨，校门口的香樟树还是原来的香樟树，只是我背包里多了波兰带回来的证书，桌洞里等着我的却是三套补卷。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "narrator",
              "text": "校门口公告栏旁边贴了新的红纸。林澈的铜牌、顾望舒的银牌、唐越的铜牌，还有我那个 Honorable Mention，被班主任很认真地排成一行。"
            },
            {
              "speaker": "chen",
              "text": "「国际赛选手回归！请问你现在做数学选择题会自动切换双语模式吗？」",
              "clear": true,
              "show": [
                {
                  "id": "chen",
                  "img": "chenNeutral",
                  "pos": "center"
                }
              ],
              "focus": "chen"
            },
            {
              "speaker": "zhou",
              "text": "「不会，但我现在看见选择题会先确认是不是北京时间。」"
            },
            {
              "speaker": "chen",
              "text": "「有长进，至少知道看时间了。」"
            },
            {
              "speaker": "lin",
              "text": "「你先确认缺了哪几张卷子。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「这么快就回现实？」"
            },
            {
              "speaker": "lin",
              "text": "「现实没出国。」"
            },
            {
              "speaker": "narrator",
              "text": "她把我的桌面清出一块地方，按科目把补卷夹好。数学最厚，英语其次，语文作文纸薄薄一沓，却压得我心里更沉。"
            },
            {
              "speaker": "zhou",
              "text": "「你自己的呢？」"
            },
            {
              "speaker": "lin",
              "text": "「在我桌上。」"
            },
            {
              "speaker": "zhou",
              "text": "「我看见了。你把晚饭那格写成十五分钟，是准备参加高考，还是准备竞速生活？」"
            },
            {
              "speaker": "lin",
              "text": "「十五分钟够吃。」"
            },
            {
              "speaker": "zhou",
              "text": "「够吃，不够像人一样吃。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈伸手要拿回自己的计划表，被我按住边角。她看了我一眼，没用力抢。"
            },
            {
              "speaker": "zhou",
              "text": "「我们约一下。你帮我盯数学，我帮你盯吃饭和睡觉。别说你不需要，你在波兰都能给我写当地时间十点睡。」"
            },
            {
              "speaker": "lin",
              "text": "「你现在很会翻旧账。」"
            },
            {
              "speaker": "zhou",
              "text": "「训练成果。」"
            },
            {
              "speaker": "homeroom",
              "text": "「两位国际赛选手，先别在第一节课前成立互助委员会。到办公室来一下。」",
              "clear": true,
              "show": [
                {
                  "id": "teacher",
                  "img": "teacherNeutral",
                  "pos": "center"
                }
              ],
              "focus": "homeroom"
            },
            {
              "bg": "careerRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "办公室里，班主任把补课清单、月考安排和高考体检确认表摊开。国际赛证书被她放在一边，像一个已经完成归档的项目。"
            },
            {
              "speaker": "homeroom",
              "text": "「该表扬的已经表扬完了。接下来你们要把缺的课补回来。高考不会因为你们去过波兰就少考一道函数题。」"
            },
            {
              "speaker": "zhou",
              "text": "「老师，这句话非常现实。」"
            },
            {
              "speaker": "homeroom",
              "text": "「现实一点挺好。周行，你数学压轴最近掉得明显。林澈，你英语完形和作文别因为忙着补物理就放掉。」"
            },
            {
              "speaker": "lin",
              "text": "「知道。」"
            },
            {
              "speaker": "homeroom",
              "text": "「还有，别把高考前所有事都做成互相监督。你们可以互相提醒，但每个人的考场最后都只能自己进去。」"
            },
            {
              "speaker": "narrator",
              "text": "这句话落下来的时候，我下意识看了林澈一眼。她也正好看我，眼神很平，像是在说：听见了。"
            },
            {
              "bg": "classroom",
              "clear": true,
              "speaker": "narrator",
              "text": "第一节课铃响的时候，我坐回座位。黑板右侧的倒计时少得很快，粉笔写着“距高考 21 天”。那几个数字比任何横幅都更有存在感。"
            },
            {
              "speaker": "narrator",
              "text": "林澈把一张便利贴贴到我的数学卷首页，上面写着：先补函数，别碰运气。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，你这个便利贴语气很像考场广播。」"
            },
            {
              "speaker": "lin",
              "text": "「能执行就行。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你的晚饭便利贴呢？」"
            },
            {
              "speaker": "lin",
              "text": "「不用。」"
            },
            {
              "speaker": "zhou",
              "text": "「我已经贴了。」"
            },
            {
              "speaker": "narrator",
              "text": "她低头一看，自己课桌角上多了张小纸条：晚饭三十分钟，少一分钟补一题完形。"
            },
            {
              "speaker": "lin",
              "text": "「你这是什么惩罚制度？」"
            },
            {
              "speaker": "zhou",
              "text": "「国际互助。」"
            },
            {
              "speaker": "narrator",
              "text": "她把便利贴撕下来，又重新贴回去，只是把“三十”改成了“二十五”。我没有再讨价还价。能改到二十五，已经是今天第一场胜利。"
            },
            {
              "bg": "cgCh9ReturnCountdown",
              "clear": true,
              "speaker": "narrator",
              "text": "黑板倒计时旁边，国际赛证书和一摞补卷压在同一张课桌上。林澈把补课清单推过来，像把我从远处重新拉回教室。"
            }
          ]
        },
        {
          "id": "ch9-s2",
          "title": "补课表和错题夹",
          "lines": [
            {
              "bg": "classroomNight",
              "clear": true,
              "speaker": "narrator",
              "text": "晚自习的教室只开了前排两盏灯。窗外操场已经暗下来，黑板上还残留着白天数学老师写到一半的导数步骤。",
              "bgm": "examLamp"
            },
            {
              "speaker": "narrator",
              "text": "我把波兰赛事手册收进书包最里层，换上高考错题夹。不是把那段路藏起来，而是暂时不让它占满桌面。"
            },
            {
              "speaker": "lin",
              "text": "「你这张表为什么数学只有两行？」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「因为我对数学怀有基本尊重，不敢写太多。」"
            },
            {
              "speaker": "lin",
              "text": "「准确说，是你在逃避压轴题。」"
            },
            {
              "speaker": "zhou",
              "text": "「你能不能给逃避留一点体面？」"
            },
            {
              "speaker": "lin",
              "text": "「不能。体面不提分。」"
            },
            {
              "speaker": "narrator",
              "text": "她把我的补课表改得很干脆：函数压轴每天一题，立体几何隔天一套，选择填空限时训练从二十分钟开始。"
            },
            {
              "speaker": "zhou",
              "text": "「你这个安排看起来像军事演习。」"
            },
            {
              "speaker": "lin",
              "text": "「比你原来的‘看心情补数学’好。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你自己的英语呢？」"
            },
            {
              "speaker": "lin",
              "text": "「我排了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你排的是每天睡前背作文。我建议你把它放到晚饭后。」"
            },
            {
              "speaker": "lin",
              "text": "「晚饭后要刷物理。」"
            },
            {
              "speaker": "zhou",
              "text": "「你物理不是弱项。英语完形才是你现在会漏分的地方。」"
            },
            {
              "speaker": "narrator",
              "text": "她握笔的手停了一下。以前多半是她把我从逃避里揪出来，这次轮到我把她的计划表往现实里按。"
            },
            {
              "speaker": "lin",
              "text": "「你现在指出问题的时候，语气很像我。」"
            },
            {
              "speaker": "zhou",
              "text": "「说明你教学成功。」"
            },
            {
              "speaker": "lin",
              "text": "「也说明我以前说话可能有点讨厌。」"
            },
            {
              "speaker": "zhou",
              "text": "「不讨厌。就是容易让人无法反驳。」"
            },
            {
              "speaker": "narrator",
              "text": "她低头把英语完形挪到晚饭后，晚自习后半段留给物理。那一笔改得很小，却让我心里松了一点。"
            },
            {
              "speaker": "wangshu",
              "text": "「国际赛经验不能直接搬到高考。」",
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
              "text": "「顾望舒，你出现得很像教辅书目录。」"
            },
            {
              "speaker": "wangshu",
              "text": "「我来还英语听力材料。顺便提醒你们，竞赛题可以写过程找边界，高考题先拿确定分。」"
            },
            {
              "speaker": "lin",
              "text": "「所以最后三周要降风险。」"
            },
            {
              "speaker": "wangshu",
              "text": "「对。别用国际赛的兴奋感给高考加戏。」"
            },
            {
              "speaker": "zhou",
              "text": "「你们两个说话都很适合贴在教室后墙。」"
            },
            {
              "speaker": "wangshu",
              "text": "「你可以贴。只要不影响复习。」"
            },
            {
              "speaker": "narrator",
              "text": "顾望舒走后，林澈把她留下的听力材料分成两份。我的那份被她压在数学卷下面，像防止我假装没看见。"
            },
            {
              "speaker": "zhou",
              "text": "「你这是物理封印英语？」"
            },
            {
              "speaker": "lin",
              "text": "「这是防止你只做看起来有安全感的题。」"
            },
            {
              "speaker": "zhou",
              "text": "「我突然发现高考比国际赛可怕。」"
            },
            {
              "speaker": "lin",
              "text": "「国际赛题难，但日子短。高考难在每天都要按时出现。」"
            },
            {
              "speaker": "narrator",
              "text": "她说完这句，没有继续拔高。只是拿起笔，在我们的计划表右下角写了两个字：执行。"
            },
            {
              "speaker": "narrator",
              "text": "那天晚上我们没有聊志愿，也没有聊波兰。教室里只剩翻卷子的声音和笔尖摩擦纸面的声音。很普通，也很必要。"
            },
            {
              "speaker": "system",
              "text": "补课表怎么排？",
              "choice": [
                {
                  "text": "先补最薄弱的数学压轴",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "narrator",
                      "text": "我把数学压轴放到每天第一项。林澈看见以后只点了一下头，没有夸我，但把最上面那道题的切入点写在旁边。"
                    }
                  ]
                },
                {
                  "text": "陪林澈重排补课表",
                  "effects": {
                    "trust": 1,
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "narrator",
                      "text": "我先把林澈那张过满的表拆开。她一开始皱眉，后来把晚饭和睡觉时间重新写上去，小声说了一句“这样也行”。"
                    }
                  ]
                },
                {
                  "text": "所有科目平均铺开",
                  "effects": {},
                  "insert": [
                    {
                      "speaker": "narrator",
                      "text": "我试图把所有科目排得很均匀。林澈看了半分钟，说这张表很公平，也很容易执行不完。"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ch9-s3",
          "title": "最后一次全真模拟",
          "lines": [
            {
              "bg": "gaokaoExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "高考前最后一次全真模拟，学校把教室按正式考场重新贴了座位号。桌面被清得很干净，连课桌上的旧刻痕都显得比平时明显。",
              "bgm": "gaokaoAnxiety"
            },
            {
              "speaker": "narrator",
              "text": "语文第一科我写得不算顺。作文开头改了三遍，最后还是把最稳的结构写下去。走出考场时，我感觉自己像被一张很长的纸拖着走。"
            },
            {
              "bg": "schoolCorridorNoon",
              "clear": true,
              "speaker": "narrator",
              "text": "走廊里有人对答案，有人说自己作文跑题。林澈站在窗边，没有加入任何一个小圈子。"
            },
            {
              "speaker": "lin",
              "text": "「别对作文。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「我还没开口。」"
            },
            {
              "speaker": "lin",
              "text": "「你表情已经准备开口了。」"
            },
            {
              "speaker": "zhou",
              "text": "「我只是想确认我有没有偏题。」"
            },
            {
              "speaker": "lin",
              "text": "「确认不了。下一科数学。」"
            },
            {
              "speaker": "narrator",
              "text": "数学下午开考。第八题果然卡住，我在草稿纸上写了两行，发现越写越像绕圈。以前我会硬啃，现在我把题号旁边画了个星，翻过去。"
            },
            {
              "speaker": "narrator",
              "text": "标星，后置。林澈说过很多遍，今天终于没有变成一句口号。"
            },
            {
              "bg": "competitionExamHallway",
              "clear": true,
              "speaker": "narrator",
              "text": "模拟结束后，走廊里热得发闷。我拎着笔袋走出来，第一眼就看见林澈站在楼梯口。她手里拿着两瓶水，一瓶已经拧松了瓶盖。"
            },
            {
              "speaker": "zhou",
              "text": "「我数学前二十分钟像被题目追着跑。」"
            },
            {
              "speaker": "lin",
              "text": "「你跑赢了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「后面勉强反超。」"
            },
            {
              "speaker": "lin",
              "text": "「那记动作。前二十分钟先扫全卷，不要跟第八题吵架。」"
            },
            {
              "speaker": "zhou",
              "text": "「第八题先动手的。」"
            },
            {
              "speaker": "lin",
              "text": "「高考不会记录谁先动手。」"
            },
            {
              "speaker": "narrator",
              "text": "她把水递给我，又把自己的答题卡回忆写在便签上：英语听力漏了一个连读，物理最后一题单位检查及时。没有“完了”，也没有“没事”，只有下一次能改什么。"
            },
            {
              "speaker": "teacher",
              "text": "「最后阶段，不要再往脑子里塞新奇招。」",
              "clear": true,
              "show": [
                {
                  "id": "teacher",
                  "img": "teacherNeutral",
                  "pos": "center"
                }
              ],
              "focus": "teacher"
            },
            {
              "speaker": "teacher",
              "text": "「你们现在要做的是减少错误动作。会的题拿稳，不会的题别把会的时间拖走。」"
            },
            {
              "speaker": "zhou",
              "text": "「许老师，这听起来像在说我和第八题。」"
            },
            {
              "speaker": "teacher",
              "text": "「你知道就好。」"
            },
            {
              "speaker": "lin",
              "text": "「听见了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「听见了。第八题不是私人恩怨。」"
            },
            {
              "speaker": "narrator",
              "text": "模拟考那天晚上，我们互换了最后三天检查清单。我的清单上多了“数学前五分钟扫全卷”，她的清单上多了“英语听力前不翻作文模板”。"
            },
            {
              "speaker": "narrator",
              "text": "这些东西看起来很小，却比任何“加油”都具体。高考越近，越需要这种不会飘起来的提醒。"
            },
            {
              "speaker": "system",
              "text": "模拟考后怎么复盘？",
              "choice": [
                {
                  "text": "承认自己数学前二十分钟慌了",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「我确实慌了。不是题有多难，是我一开始就想把它赢下来。」"
                    },
                    {
                      "speaker": "lin",
                      "text": "「能说出来就行。高考时先把它放到后面。」"
                    }
                  ]
                },
                {
                  "text": "和林澈互换最后三天检查清单",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "narrator",
                      "text": "我们把彼此最容易犯的错误写在对方清单上。林澈写我的字很小，但每条都很准。"
                    }
                  ]
                },
                {
                  "text": "说没事，反正只是模拟",
                  "effects": {
                    "trust": -1
                  },
                  "insert": [
                    {
                      "speaker": "lin",
                      "text": "「你可以不扩大焦虑，但不要用‘没事’把问题盖过去。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "我把那句轻飘飘的话收回来，重新写下第八题的处理动作。"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ch9-s4",
          "title": "6月6日晚上",
          "lines": [
            {
              "bg": "homeEvening",
              "clear": true,
              "speaker": "narrator",
              "text": "六月六日晚上，家里的餐桌被清出一块地方。身份证、准考证、透明笔袋、两支黑色签字笔、橡皮、尺子，全都被我妈摆成一排。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "mother",
              "text": "「再检查一遍。」"
            },
            {
              "speaker": "zhou",
              "text": "「这是第三遍。」"
            },
            {
              "speaker": "mother",
              "text": "「那就第三遍。」"
            },
            {
              "speaker": "father",
              "text": "「路上别喝太多水，进考场前上厕所。」"
            },
            {
              "speaker": "zhou",
              "text": "「爸，这个提醒很生活。」"
            },
            {
              "speaker": "father",
              "text": "「高考本来就是生活。」"
            },
            {
              "speaker": "narrator",
              "text": "我原本想给林澈发一段很长的话，写到“明天就高考了”又删掉。最后只发了两个字：检查。"
            },
            {
              "speaker": "lin",
              "text": "「身份证、准考证、透明笔袋、备用笔。拍照存手机了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「你回得像自动检查系统。」"
            },
            {
              "speaker": "lin",
              "text": "「拍了吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「拍了。」"
            },
            {
              "speaker": "lin",
              "text": "「明早见。」"
            },
            {
              "bg": "schoolGateDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "晚上八点半，我们在学校门口短暂碰了一面。不是为了复习，也不是为了说什么大话，只是把明天的路线和时间再对一遍。"
            },
            {
              "speaker": "lin",
              "text": "「身份证。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「有。」"
            },
            {
              "speaker": "lin",
              "text": "「准考证。」"
            },
            {
              "speaker": "zhou",
              "text": "「有。」"
            },
            {
              "speaker": "lin",
              "text": "「透明笔袋。」"
            },
            {
              "speaker": "zhou",
              "text": "「有。」"
            },
            {
              "speaker": "lin",
              "text": "「你为什么表情这么郑重？」"
            },
            {
              "speaker": "zhou",
              "text": "「因为我感觉你下一秒要检查我是不是本人。」"
            },
            {
              "speaker": "lin",
              "text": "「不用。你紧张的时候很好认。」"
            },
            {
              "speaker": "narrator",
              "text": "她自己的透明笔袋也被整理得很整齐，橡皮放在左侧，笔尖朝同一个方向。可我看见她拇指一直压着准考证边角。"
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
              "text": "「你也紧张？」"
            },
            {
              "speaker": "lin",
              "text": "「紧张。」"
            },
            {
              "speaker": "zhou",
              "text": "「你回答得好快。」"
            },
            {
              "speaker": "lin",
              "text": "「因为没必要装不紧张。」"
            },
            {
              "speaker": "zhou",
              "text": "「那高考后，我想把之前没说完的话说完。」"
            },
            {
              "speaker": "lin",
              "text": "「可以。」"
            },
            {
              "speaker": "zhou",
              "text": "「这么快就可以？」"
            },
            {
              "speaker": "lin",
              "text": "「我是说可以排进高考后。现在先睡觉。」"
            },
            {
              "speaker": "narrator",
              "text": "她把一颗薄荷糖放到我手心，包装纸边角被她捏得很平。"
            },
            {
              "speaker": "lin",
              "text": "「明天不能带进考场。路上吃。」"
            },
            {
              "speaker": "zhou",
              "text": "「装备封存，路上消耗。」"
            },
            {
              "speaker": "lin",
              "text": "「别说得像物资调度。」"
            },
            {
              "speaker": "zhou",
              "text": "「本来就是你教的。」"
            },
            {
              "speaker": "narrator",
              "text": "我们在校门口分开。她往左，我往右。路灯把她的影子拉得很长，她没有回头，但举起手轻轻挥了一下。"
            },
            {
              "bg": "cgCh9FinalChecklist",
              "clear": true,
              "speaker": "narrator",
              "text": "六月六日晚的校门口，林澈低头检查透明笔袋和准考证。我站在她旁边，手里攥着不能带进考场的薄荷糖。"
            }
          ]
        },
        {
          "id": "ch9-s5",
          "title": "高考三日",
          "lines": [
            {
              "bg": "gaokaoExamGateMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "六月七日上午，考点外的人群把整条街挤得很慢。家长举着伞，老师站在路边点名，广播一遍遍提醒考生检查证件。",
              "bgm": "gaokaoAnxiety"
            },
            {
              "speaker": "lin",
              "text": "「数学不要和选择题建立私人恩怨。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「如果它先挑衅呢？」"
            },
            {
              "speaker": "lin",
              "text": "「标星，后置，别回头骂它。」"
            },
            {
              "speaker": "zhou",
              "text": "「高考禁止情绪输出。」"
            },
            {
              "speaker": "lin",
              "text": "「允许，但不许写在答题卡上。」"
            },
            {
              "speaker": "narrator",
              "text": "安检口把人流分开。林澈在另一栋楼，我在这边。真正进考场之前，能互相做的事少得可怜。"
            },
            {
              "bg": "cgCh9ExamGateSeparateWays",
              "clear": true,
              "speaker": "narrator",
              "text": "考点门口人群涌动，林澈和我在安检线前短暂停住。她拿着透明笔袋往另一栋楼走，我站在原地看她抬手示意。"
            },
            {
              "bg": "gaokaoExamRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "语文开考。卷子发下来，纸面很白。我先写姓名和准考证号，贴条形码，再把手放在桌面上停了三秒。"
            },
            {
              "speaker": "narrator",
              "text": "作文题没有让我想到土星环，也没有让我想到波兰。它就是一道作文题，我把材料拆成三层，选了最稳的结构。"
            },
            {
              "speaker": "narrator",
              "text": "下午数学，第八题果然不友好。我在旁边画了个小星，翻过去。写到最后大题时，反而比模拟那天稳。"
            },
            {
              "bg": "gaokaoWaitingArea",
              "clear": true,
              "speaker": "narrator",
              "text": "第一天结束，校门外的树荫下挤满了人。林澈出来时先把水递给我，自己才拧开另一瓶。"
            },
            {
              "speaker": "zhou",
              "text": "「第八题没有赢我。」"
            },
            {
              "speaker": "lin",
              "text": "「你也没有跟它吵架？」"
            },
            {
              "speaker": "zhou",
              "text": "「没有。我们保持了考场距离。」"
            },
            {
              "speaker": "lin",
              "text": "「很好。」"
            },
            {
              "speaker": "narrator",
              "text": "第二天上午物理。林澈出来后没有对答案，只说最后一题单位检查了。我听懂了，那是她对自己最具体的确认。"
            },
            {
              "speaker": "lin",
              "text": "「外语前别喝太多水。」"
            },
            {
              "speaker": "zhou",
              "text": "「你为什么现在说？」"
            },
            {
              "speaker": "lin",
              "text": "「因为你已经喝了半瓶。」"
            },
            {
              "speaker": "zhou",
              "text": "「我这是保持状态。」"
            },
            {
              "speaker": "lin",
              "text": "「保持到考场外。」"
            },
            {
              "speaker": "narrator",
              "text": "第三天最后一科，铃声响起时，教室里没有立刻爆发。所有人都在等老师收卷、清点、允许离场。那几十秒比过去三天还长。"
            },
            {
              "bg": "gaokaoExamGateMorning",
              "clear": true,
              "speaker": "narrator",
              "text": "走出考点时，外面的人声忽然涌上来。有人笑，有人哭，有人把资料袋举得很高。我在人群里找到林澈，她手里还拿着一瓶没开封的水。",
              "bgm": "weightlessEcho"
            },
            {
              "speaker": "zhou",
              "text": "「结束了？」"
            },
            {
              "speaker": "lin",
              "text": "「嗯。」"
            },
            {
              "speaker": "zhou",
              "text": "「我怎么没有想象中激动？」"
            },
            {
              "speaker": "lin",
              "text": "「因为你三天没睡踏实，大脑现在只想关机。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你呢？」"
            },
            {
              "speaker": "lin",
              "text": "「我也想关机。但我还要提醒你别把准考证丢了。」"
            },
            {
              "speaker": "zhou",
              "text": "「高考都结束了，你还在后勤模式。」"
            },
            {
              "speaker": "lin",
              "text": "「后勤模式延迟关闭。」"
            },
            {
              "speaker": "narrator",
              "text": "我把准考证塞进文件袋最里面，拉链拉好。她看见后，终于没有再补一句。"
            },
            {
              "speaker": "narrator",
              "text": "人群把我们往前推。三天前我们在这里分开，三天后又在这里汇合。中间每一科都只能自己写，但走出来的时候，能看见她在，已经够了。"
            }
          ]
        },
        {
          "id": "ch9-s6",
          "title": "短暂空白",
          "lines": [
            {
              "bg": "convenienceStore",
              "clear": true,
              "speaker": "narrator",
              "text": "高考结束后的便利店比平时更亮。冰柜里塞满雪糕，门口堆着刚放下书包的考生，大家都像突然没有了下一节课。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "chen",
              "text": "「今晚聚餐！谁也不许提答案！」",
              "clear": true,
              "show": [
                {
                  "id": "chen",
                  "img": "chenNeutral",
                  "pos": "center"
                }
              ],
              "focus": "chen"
            },
            {
              "speaker": "zhou",
              "text": "「你这句话本身已经提了。」"
            },
            {
              "speaker": "chen",
              "text": "「那我改：谁提答案谁买单。」"
            },
            {
              "speaker": "lin",
              "text": "「这个比较有效。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerTired",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "林澈坐在窗边，手里拿着一瓶水，靠着椅背闭了半分钟眼。她没有睡着，只是终于允许自己不立刻做下一件事。"
            },
            {
              "speaker": "zhou",
              "text": "「林澈，高考结束了，你可以暂停后勤模式。」"
            },
            {
              "speaker": "lin",
              "text": "「暂停多久？」"
            },
            {
              "speaker": "zhou",
              "text": "「至少到明天上午。」"
            },
            {
              "speaker": "lin",
              "text": "「那你明天上午十点前不要问我志愿。」"
            },
            {
              "speaker": "zhou",
              "text": "「成交。十点零一？」"
            },
            {
              "speaker": "lin",
              "text": "「周行。」"
            },
            {
              "speaker": "zhou",
              "text": "「我闭嘴。」"
            },
            {
              "speaker": "narrator",
              "text": "唐越在群里发消息，说自己准备补觉到第二天中午。顾望舒回复：建议先吃饭。夏南星难得发了一个“活着就行”。"
            },
            {
              "speaker": "narrator",
              "text": "我们买了两支雪糕和两瓶水，坐在便利店靠窗的位置。准考证被收进文件袋，笔袋放在桌角，像刚下班的工具。"
            },
            {
              "speaker": "lin",
              "text": "「你真的不问志愿？」"
            },
            {
              "speaker": "zhou",
              "text": "「说好十点前不问。」"
            },
            {
              "speaker": "lin",
              "text": "「那你现在想问什么？」"
            },
            {
              "speaker": "zhou",
              "text": "「想问你要不要再睡五分钟。」"
            },
            {
              "speaker": "lin",
              "text": "「在便利店睡？」"
            },
            {
              "speaker": "zhou",
              "text": "「我看着包。」"
            },
            {
              "speaker": "narrator",
              "text": "她看了我几秒，最后真的把额头轻轻靠在手臂上。便利店空调声很低，外面的夏天热得发白。"
            },
            {
              "bg": "cgCh9EmptyConvenienceStore",
              "clear": true,
              "speaker": "narrator",
              "text": "高考后的便利店窗边，林澈靠在手臂上闭眼休息。桌上放着雪糕、水和收好的准考证，我坐在旁边看着书包。"
            },
            {
              "speaker": "narrator",
              "text": "那一小段空白没有答案，也没有台词。可它很难得。过去几个月，我们总是在赶下一张卷子、下一班车、下一场考试。现在终于有十分钟，什么都不用赶。"
            },
            {
              "speaker": "narrator",
              "text": "第二天十点零一分，志愿、分数、未来这些词会重新找上门。可至少这一晚，我们先把灯关掉，像普通高三学生一样，睡一个没有闹钟的觉。"
            }
          ]
        }
      ]
    },
    {
      "id": "ch10",
      "title": "第十章：本人理由",
      "sections": [
        {
          "id": "ch10-s1",
          "title": "查分前夜",
          "lines": [
            {
              "bg": "scoreNightLivingRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "六月二十三日晚上，客厅灯开得很亮。茶几上放着水果、手机、准考证和一张被我写得乱七八糟的位次预估表。",
              "bgm": "gaokaoAnxiety"
            },
            {
              "speaker": "narrator",
              "text": "我爸妈都说不紧张，但水果切好以后谁也没动。手机屏幕每亮一次，三个人都抬头。"
            },
            {
              "speaker": "lin",
              "text": "「模板发你了。」"
            },
            {
              "speaker": "zhou",
              "text": "「你连查分前夜都做模板？」"
            },
            {
              "speaker": "lin",
              "text": "「不然呢，靠刷新网页提高分数吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「我刚才确实试了五次。」"
            },
            {
              "speaker": "lin",
              "text": "「所以我发模板。」"
            },
            {
              "speaker": "narrator",
              "text": "她发来的共享表名字很朴素：分数-位次-可选范围。三列标题冷静得像不知道今晚有多少人睡不着。"
            },
            {
              "speaker": "zhou",
              "text": "「你慌吗？」"
            },
            {
              "speaker": "lin",
              "text": "「慌。」"
            },
            {
              "speaker": "zhou",
              "text": "「那你还做表？」"
            },
            {
              "speaker": "lin",
              "text": "「慌的时候更要做。不然只会一直刷新。」"
            },
            {
              "speaker": "narrator",
              "text": "我把共享表复制一份，填上姓名，光标停在总分那一格。空白格子比任何题目都安静。"
            },
            {
              "speaker": "mother",
              "text": "「别一直看手机，眼睛都红了。」"
            },
            {
              "speaker": "zhou",
              "text": "「我这是考后数据监控。」"
            },
            {
              "speaker": "father",
              "text": "「说人话。」"
            },
            {
              "speaker": "zhou",
              "text": "「我紧张。」"
            },
            {
              "speaker": "narrator",
              "text": "说出来以后，客厅反而轻了一点。我妈把水果盘往我这边推了推，没有再劝我放松。"
            },
            {
              "speaker": "narrator",
              "text": "十一点五十七分，林澈发来一条消息：如果系统卡，先截图时间，不要连点。"
            },
            {
              "speaker": "zhou",
              "text": "「你怎么连服务器心理都考虑到了？」"
            },
            {
              "speaker": "lin",
              "text": "「我是在考虑你的手。」"
            },
            {
              "speaker": "zhou",
              "text": "「我手怎么了？」"
            },
            {
              "speaker": "lin",
              "text": "「紧张的时候会乱点。」"
            },
            {
              "speaker": "narrator",
              "text": "我低头看自己的拇指，默默把手机放到桌面上。"
            },
            {
              "speaker": "system",
              "text": "查分前夜怎么回应林澈？",
              "choice": [
                {
                  "text": "告诉林澈自己很慌",
                  "effects": {
                    "trust": 1
                  },
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「我很慌。不是怕考差，是怕数字出来以后什么借口都没了。」"
                    },
                    {
                      "speaker": "lin",
                      "text": "「我也是。那就等数字出来，再一个一个看。」"
                    }
                  ]
                },
                {
                  "text": "先把共享表复制好",
                  "effects": {
                    "discipline": 1
                  },
                  "insert": [
                    {
                      "speaker": "narrator",
                      "text": "我先把共享表复制好，把能填的基础信息填完。林澈发来一个“嗯”，像给一项流程打勾。"
                    }
                  ]
                },
                {
                  "text": "只回一个“等出分吧”",
                  "effects": {
                    "trust": -1
                  },
                  "insert": [
                    {
                      "speaker": "lin",
                      "text": "「可以等。但你别把自己关起来等。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "我看着那句话，过了很久才回“知道”。"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ch10-s2",
          "title": "数字落下来",
          "lines": [
            {
              "bg": "scoreNightLivingRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "零点过后，网页卡了两次。第三次刷新，分数终于跳出来。那串数字没有音乐，也没有特效，只是安静地停在屏幕中央。",
              "bgm": "weightlessEcho"
            },
            {
              "speaker": "narrator",
              "text": "我盯着它看了十几秒，先确认姓名，再确认考生号，最后才敢看总分和位次。够冲目标专业，但不稳；去近一些的学校很稳，但课程明显弱。"
            },
            {
              "speaker": "mother",
              "text": "「怎么样？」"
            },
            {
              "speaker": "zhou",
              "text": "「能选。有点难选。」"
            },
            {
              "speaker": "father",
              "text": "「能选就是好事。」"
            },
            {
              "speaker": "narrator",
              "text": "手机震了一下。林澈发来截图，她的分数比我高，位次也漂亮，但她想去的专业同样不是毫无风险。"
            },
            {
              "speaker": "lin",
              "text": "「你的？」"
            },
            {
              "speaker": "narrator",
              "text": "我把截图发过去，手指在发送键上停了半秒，还是连位次一起发了。"
            },
            {
              "speaker": "lin",
              "text": "「你发完整了。」"
            },
            {
              "speaker": "zhou",
              "text": "「这也要表扬？」"
            },
            {
              "speaker": "lin",
              "text": "「以前你可能只发总分。」"
            },
            {
              "speaker": "zhou",
              "text": "「我在你这里真的有历史信用记录。」"
            },
            {
              "speaker": "lin",
              "text": "「志愿看位次，不看截图构图。」"
            },
            {
              "speaker": "zhou",
              "text": "「我本来还想让截图显得体面一点。」"
            },
            {
              "speaker": "lin",
              "text": "「周行，体面不能填志愿。」"
            },
            {
              "bg": "cgCh10ScoreSharedTable",
              "clear": true,
              "speaker": "narrator",
              "text": "凌晨客厅里，查分页面和林澈发来的共享表同时亮着。茶几上的水果没人动，周行的手停在位次那一格旁边。"
            },
            {
              "speaker": "narrator",
              "text": "我们把总分、位次、目标学校、风险等级填进去。表格没有让选择变简单，但至少让它不再是一团雾。"
            },
            {
              "speaker": "mother",
              "text": "「离家近的这所，不也不错吗？」"
            },
            {
              "speaker": "father",
              "text": "「远的那所专业更对口，但以后路也窄。你自己要想清楚。」"
            },
            {
              "speaker": "narrator",
              "text": "我点头。父母的担心不难听，也不荒唐。只是每一句都像在表格外又加一列。"
            },
            {
              "speaker": "lin",
              "text": "「明天回学校吗？」"
            },
            {
              "speaker": "zhou",
              "text": "「嗯。生涯教室。」"
            },
            {
              "speaker": "lin",
              "text": "「把两张表都带上。」"
            },
            {
              "speaker": "zhou",
              "text": "「哪两张？」"
            },
            {
              "speaker": "lin",
              "text": "「想去的，和你觉得离我近的。」"
            },
            {
              "speaker": "narrator",
              "text": "我看着手机，忽然不知道怎么回。她没有等我解释，下一条很快发来。"
            },
            {
              "speaker": "lin",
              "text": "「我不是不让你考虑距离。只是距离不能替你上课。」"
            },
            {
              "speaker": "zhou",
              "text": "「知道。明天说。」"
            },
            {
              "speaker": "narrator",
              "text": "这一晚我睡得很浅。分数落下来以后，反而有更多东西浮上来。"
            }
          ]
        },
        {
          "id": "ch10-s3",
          "title": "生涯教室",
          "lines": [
            {
              "bg": "careerRoom",
              "clear": true,
              "speaker": "narrator",
              "text": "第二天上午，学校生涯教室的打印机一直没停。每张桌上都摊着招生目录、位次表和不同颜色的记号笔。",
              "bgm": "dailyClassroom"
            },
            {
              "speaker": "teacher",
              "text": "「今天不替你们做决定。你们先把三列写清楚：想去、能去、值得去。」",
              "clear": true,
              "show": [
                {
                  "id": "teacher",
                  "img": "teacherNeutral",
                  "pos": "center"
                }
              ],
              "focus": "teacher"
            },
            {
              "speaker": "chen",
              "text": "「老师，食堂好吃算理由吗？」"
            },
            {
              "speaker": "teacher",
              "text": "「算生活质量，不算第一志愿理由。」"
            },
            {
              "speaker": "chen",
              "text": "「明白，不能为了鸡腿献祭四年。」"
            },
            {
              "speaker": "narrator",
              "text": "林澈把纸横过来，在三列后面又加了一列：不该去。"
            },
            {
              "speaker": "zhou",
              "text": "「这列看起来很凶。」"
            },
            {
              "speaker": "lin",
              "text": "「有些学校不是不好，是理由对不上。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linSummerThinking",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "narrator",
              "text": "她说这句话的时候没有看我，但我知道她在说哪一张表。"
            },
            {
              "speaker": "wangshu",
              "text": "「物理类作为入口也可以。看培养方案，不只看专业名称。」",
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
              "text": "「顾望舒，你查得也太细了。」"
            },
            {
              "speaker": "wangshu",
              "text": "「专业名称负责吸引人，培养方案负责四年。」"
            },
            {
              "speaker": "lin",
              "text": "「这句我记一下。」"
            },
            {
              "speaker": "narrator",
              "text": "我们开始查课程。天体物理导论、普通物理、数学分析、程序设计、实验课、转专业条件、保研去向。网页开了十几个，浏览器标签挤成一排。"
            },
            {
              "speaker": "lin",
              "text": "「你讲第一张表的时候，一直在说课程。」"
            },
            {
              "speaker": "zhou",
              "text": "「第二张也有课程。」"
            },
            {
              "speaker": "lin",
              "text": "「第二张你说了八分钟高铁。」"
            },
            {
              "speaker": "zhou",
              "text": "「交通也是现实。」"
            },
            {
              "speaker": "lin",
              "text": "「是现实，但不能替你上课。」"
            },
            {
              "speaker": "narrator",
              "text": "我把笔放下。她没有否定距离，也没有假装距离不重要。她只是把我不敢说清楚的权重摆回桌面。"
            },
            {
              "speaker": "teacher",
              "text": "「周行，林澈，你们两个过来。」"
            },
            {
              "speaker": "narrator",
              "text": "许老师看了我们的表，先圈出第一张，又在第二张旁边打了个问号。"
            },
            {
              "speaker": "teacher",
              "text": "「不该去，不是学校不好，是它和你的理由对不上。你们要分清楚，重要的人可以影响安排，但不能替换本人理由。」"
            },
            {
              "speaker": "zhou",
              "text": "「本人理由。」"
            },
            {
              "speaker": "teacher",
              "text": "「对。以后后悔的时候，能不能说清楚这是你自己认可的选择。说不清，就先别急着点提交。」"
            },
            {
              "bg": "cgCh10CareerRoomThreeColumns",
              "clear": true,
              "speaker": "narrator",
              "text": "生涯教室白板上写着“想去 / 能去 / 值得去”。桌上摊着位次表和招生目录，林澈用笔在“不该去”那一列下划线。"
            },
            {
              "speaker": "narrator",
              "text": "那天上午，我们没有得出答案，只得出了一张更诚实的表。它有点难看，也有点必要。"
            }
          ]
        },
        {
          "id": "ch10-s4",
          "title": "两张志愿表",
          "lines": [
            {
              "bg": "homeEvening",
              "clear": true,
              "speaker": "narrator",
              "text": "第三天晚上，林澈来我家还资料。茶几上摊着两张志愿草表，一张课程合适但城市远，一张离她近但课程弱。",
              "bgm": "rainLibrary"
            },
            {
              "speaker": "mother",
              "text": "「林澈，先吃点水果。别光看表。」"
            },
            {
              "speaker": "lin",
              "text": "「谢谢阿姨。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "father",
              "text": "「我们也不是反对远。只是专业窄、城市远、以后就业和读研都要考虑。周行有时候想得太直。」"
            },
            {
              "speaker": "zhou",
              "text": "「爸，你可以不用当着本人总结。」"
            },
            {
              "speaker": "father",
              "text": "「本人更要听。」"
            },
            {
              "speaker": "mother",
              "text": "「如果没有林澈，你会怎么选？」"
            },
            {
              "speaker": "narrator",
              "text": "客厅忽然安静下来。这个问题不锋利，却很准。"
            },
            {
              "speaker": "zhou",
              "text": "「第一张。」"
            },
            {
              "speaker": "mother",
              "text": "「我们不是让你把她排除掉。她是重要的人，但不能只剩这个。」"
            },
            {
              "speaker": "lin",
              "text": "「我也这么想。」"
            },
            {
              "speaker": "zhou",
              "text": "「你们什么时候统一口径的？」"
            },
            {
              "speaker": "lin",
              "text": "「不用统一。这个条件很明显。」"
            },
            {
              "speaker": "narrator",
              "text": "她把培养方案那一页推到我面前，手指按住“核心课程”那一栏。"
            },
            {
              "speaker": "lin",
              "text": "「我可以帮你看课程，可以帮你算城市距离，也可以说我会难过。但我不能用难过要求你改志愿。」"
            },
            {
              "speaker": "zhou",
              "text": "「你把这个也写进清单了？」"
            },
            {
              "speaker": "lin",
              "text": "「写了。怕我自己忘。」"
            },
            {
              "speaker": "zhou",
              "text": "「你连不许自己越界都能列条目。」"
            },
            {
              "speaker": "lin",
              "text": "「因为我也想离你近。」"
            },
            {
              "speaker": "narrator",
              "text": "她说得很轻，轻到我差点以为自己听错。可我爸妈都没有说话，水果盘也安静地停在茶几中间。"
            },
            {
              "speaker": "lin",
              "text": "「但我不想以后你上不喜欢的课，然后说是因为我。」"
            },
            {
              "speaker": "zhou",
              "text": "「我不会那么说。」"
            },
            {
              "speaker": "lin",
              "text": "「你现在不会。可如果一开始理由就歪了，以后很容易歪回来。」"
            },
            {
              "speaker": "father",
              "text": "「这话说得很清楚。」"
            },
            {
              "speaker": "zhou",
              "text": "「爸，你现在不要加入评审。」"
            },
            {
              "speaker": "mother",
              "text": "「我觉得她说得对。」"
            },
            {
              "speaker": "zhou",
              "text": "「妈。」"
            },
            {
              "speaker": "narrator",
              "text": "所有人都站在同一个问题前面：我到底要用谁的理由填第一志愿。"
            },
            {
              "bg": "cgCh10TwoVolunteerForms",
              "clear": true,
              "speaker": "narrator",
              "text": "客厅茶几上摊着两张志愿草表和培养方案。林澈的手按住核心课程页，周行父母坐在背景里，气氛安静而现实。"
            },
            {
              "speaker": "narrator",
              "text": "林澈离开前，把那张“不该去”的表折好塞给我。"
            },
            {
              "speaker": "lin",
              "text": "「提交前再看一遍。不是为了否定它，是为了确认你没有拿它逃避。」"
            },
            {
              "speaker": "zhou",
              "text": "「你明天会在旁边吗？」"
            },
            {
              "speaker": "lin",
              "text": "「会。但我不碰鼠标。」"
            },
            {
              "speaker": "zhou",
              "text": "「这么严格？」"
            },
            {
              "speaker": "lin",
              "text": "「这是你的志愿。」"
            },
            {
              "speaker": "narrator",
              "text": "她站在门口，夏夜的热风从楼道吹进来。那一刻我很想把答案直接说出来，可答案还没有完全从我自己嘴里站稳。"
            }
          ]
        },
        {
          "id": "ch10-s5",
          "title": "提交按钮",
          "lines": [
            {
              "bg": "volunteerSystemDesk",
              "clear": true,
              "speaker": "narrator",
              "text": "志愿填报开放那天，学校机房安静得像考场。电脑屏幕上是蓝白色的系统界面，提交按钮在页面最下方。",
              "bgm": "gaokaoAnxiety"
            },
            {
              "speaker": "teacher",
              "text": "「最后确认前，每个人自己读一遍志愿顺序。老师和家长都不替你们点鼠标。」",
              "clear": true,
              "show": [
                {
                  "id": "teacher",
                  "img": "teacherNeutral",
                  "pos": "center"
                }
              ],
              "focus": "teacher"
            },
            {
              "speaker": "narrator",
              "text": "林澈坐在我旁边，手放在膝盖上，真的没有碰鼠标。她只看着屏幕，像看一张必须由我自己完成的答题卡。"
            },
            {
              "speaker": "lin",
              "text": "「周行，你第一志愿的本人理由是什么？」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「本人理由？」"
            },
            {
              "speaker": "lin",
              "text": "「不是父母理由，不是我的理由，也不是你害怕以后见不到我的理由。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这题限制条件很多。」"
            },
            {
              "speaker": "lin",
              "text": "「重要选择限制条件本来就多。」"
            },
            {
              "speaker": "narrator",
              "text": "屏幕上的学校名称很安静。第一张表里的学校，课程更对，城市更远。第二张表里的学校，距离更近，却让我解释课程时总是绕开关键。"
            },
            {
              "speaker": "narrator",
              "text": "鼠标停在第一志愿那一栏。提交前，系统要求再次确认。我听见机房空调的声音，也听见自己心跳很快。"
            },
            {
              "speaker": "system",
              "text": "第一志愿要怎么提交？",
              "choice": [
                {
                  "text": "说出真实志愿，选择本人理由成立的学校",
                  "effects": {
                    "trust": 1,
                    "future_sync": 1
                  },
                  "endingCheck": true,
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「第一张。因为课程、培养方案和我想走的路对得上。距离很麻烦，但它不是错误理由。」"
                    },
                    {
                      "speaker": "lin",
                      "text": "「嗯。」"
                    },
                    {
                      "speaker": "zhou",
                      "text": "「我也想离你近。但不能把近写成第一理由。」"
                    },
                    {
                      "speaker": "lin",
                      "text": "「这样说，我能接受。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "我点下确认。系统弹出提交成功的提示，简单得像所有纠结都只是为了这一行小字。"
                    }
                  ]
                },
                {
                  "text": "隐瞒动机，选择离林澈最近的学校",
                  "effects": {
                    "trust": -2,
                    "future_sync": -2
                  },
                  "target": "ch12-bad-s1",
                  "insert": [
                    {
                      "speaker": "narrator",
                      "text": "我把离林澈最近的那所学校放到第一位，嘴上说课程也不错。林澈没有立刻反驳，只看着我解释越来越长。"
                    },
                    {
                      "speaker": "lin",
                      "text": "「你现在讲的是高铁，不是培养方案。」"
                    }
                  ]
                },
                {
                  "text": "把两张表摊开，承认自己还在摇摆",
                  "effects": {
                    "trust": 1
                  },
                  "endingCheck": true,
                  "insert": [
                    {
                      "speaker": "zhou",
                      "text": "「我还在摇摆。第一张是本人理由，第二张是我想离你近。我不想把这两个混成一个。」"
                    },
                    {
                      "speaker": "lin",
                      "text": "「那就先承认它们是两个问题。能承认，就还有办法。」"
                    },
                    {
                      "speaker": "narrator",
                      "text": "我们把两张表重新摊开。最后一遍确认时，我没有再把交通距离写进专业理由里。"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ch10-s6",
          "title": "提交之后",
          "lines": [
            {
              "bg": "schoolGateDusk",
              "clear": true,
              "speaker": "narrator",
              "text": "从机房出来，学校的夏天热得很实在。操场有人在打球，教学楼外墙被太阳晒成浅金色，像什么都没有刚刚发生。",
              "bgm": "smallPromise"
            },
            {
              "speaker": "narrator",
              "text": "提交以后没有烟花，也没有立刻到来的未来。只有一张回执单，和林澈手里那瓶被她握得有点温的水。"
            },
            {
              "speaker": "lin",
              "text": "「紧张吗？」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualNeutral",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「紧张。但不是后悔。」"
            },
            {
              "speaker": "lin",
              "text": "「这两个要分清楚。」"
            },
            {
              "speaker": "zhou",
              "text": "「你现在说话越来越像许老师。」"
            },
            {
              "speaker": "lin",
              "text": "「我比他严格。」"
            },
            {
              "speaker": "zhou",
              "text": "「确实。」"
            },
            {
              "speaker": "narrator",
              "text": "她把回执单折好，让我夹进文件袋。这个动作太熟悉了，从候选营到波兰，再到志愿提交，她好像一直在帮我把混乱收进夹层。"
            },
            {
              "speaker": "zhou",
              "text": "「高考后那个问题，我能问了吗？」"
            },
            {
              "speaker": "lin",
              "text": "「等录取结果出来。」"
            },
            {
              "speaker": "zhou",
              "text": "「你这叫无限延期。」"
            },
            {
              "speaker": "lin",
              "text": "「这叫按流程。」"
            },
            {
              "speaker": "zhou",
              "text": "「那流程下一步是什么？」"
            },
            {
              "speaker": "lin",
              "text": "「回家，睡觉，等录取。」"
            },
            {
              "speaker": "narrator",
              "text": "我看着她走下台阶。她没有回头催我，却放慢了一点脚步，像默认我会跟上。"
            },
            {
              "speaker": "narrator",
              "text": "这一天没有结束所有问题，只是把最重要的那一个交了上去。接下来，系统会给出结果，而我们要面对结果之后的生活。"
            }
          ]
        },
        {
          "id": "ch11-happy-s1",
          "title": "HE：同一片天空",
          "lines": [
            {
              "bg": "summerRooftop",
              "clear": true,
              "speaker": "narrator",
              "text": "七月下旬，录取结果陆续出来。学校楼顶的门是许老师帮忙开的，理由很朴素：整理天文社器材，顺便还钥匙。",
              "bgm": "happyEnding"
            },
            {
              "speaker": "narrator",
              "text": "我跑上楼的时候，林澈已经在旧望远镜旁边。她手机屏幕亮着，录取页面停在结果那一行。"
            },
            {
              "speaker": "zhou",
              "text": "「我录了。」"
            },
            {
              "speaker": "lin",
              "text": "「我也是。」",
              "clear": true,
              "show": [
                {
                  "id": "lin",
                  "img": "linCasualSmile",
                  "pos": "center"
                }
              ],
              "focus": "lin"
            },
            {
              "speaker": "zhou",
              "text": "「所以现在可以问那个高考后问题了吗？」"
            },
            {
              "speaker": "lin",
              "text": "「可以。但你先坐下，你刚才跑上楼喘得很明显。」"
            },
            {
              "speaker": "zhou",
              "text": "「气氛都被你纠偏了。」"
            },
            {
              "speaker": "lin",
              "text": "「我不纠偏，你会把告白说成百米冲刺总结。」"
            },
            {
              "speaker": "narrator",
              "text": "我坐在台阶上，把手机和录取页面一起放到身边。我们不在同一个学校，城市也不是近到一顿晚饭就能见面。可那不是隐瞒出来的距离，是我们都看清楚以后接受的距离。"
            },
            {
              "speaker": "zhou",
              "text": "「我喜欢你。不是因为我们一定能在同一个地方，也不是因为你帮我整理过多少张表。」"
            },
            {
              "speaker": "lin",
              "text": "「你可以不用排除这么多条件。」"
            },
            {
              "speaker": "zhou",
              "text": "「我怕你判我理由不充分。」"
            },
            {
              "speaker": "lin",
              "text": "「这次充分。」"
            },
            {
              "speaker": "narrator",
              "text": "她说完，轻轻笑了一下。夏夜的风从楼顶吹过去，旧望远镜旁边的灰尘被吹起一点，又很快落下。"
            },
            {
              "bg": "cgCh10HeAdmissionRooftop",
              "clear": true,
              "speaker": "narrator",
              "text": "夏夜学校楼顶，林澈和周行并肩坐在旧望远镜旁，两人的录取页面亮在手机上，远处城市灯光安静铺开。"
            },
            {
              "speaker": "lin",
              "text": "「大学以后，联系不能做成任务表。」"
            },
            {
              "speaker": "zhou",
              "text": "「那做成什么？」"
            },
            {
              "speaker": "lin",
              "text": "「正常聊天。偶尔远程观测。忙的时候直接说忙。」"
            },
            {
              "speaker": "zhou",
              "text": "「听起来比国家队集训难。」"
            },
            {
              "speaker": "lin",
              "text": "「所以第十一章再练。」"
            },
            {
              "speaker": "narrator",
              "text": "她把那枚从波兰带回来的银色星形徽章放到望远镜箱子里，又很快拿出来，别回自己的包带上。"
            },
            {
              "speaker": "narrator",
              "text": "我们还会有新的课表、新的城市和新的误差。可至少这一次，坐标是自己填的，喜欢也是自己说出口的。"
            }
          ]
        },
        {
          "id": "ch12-bad-s1",
          "title": "BE：失焦",
          "lines": [
            {
              "bg": "collegeDormDesk",
              "clear": true,
              "speaker": "narrator",
              "text": "录取结果出来那天，所有人都说挺好。离林澈近，城市熟，学校也不差。桌上摊着新生手册和课表，我却讲不清第一学期到底要上哪些核心课。",
              "bgm": "badEnding"
            },
            {
              "speaker": "lin",
              "text": "「你第一学期上哪些课？」"
            },
            {
              "speaker": "zhou",
              "text": "「高数、英语，还有一个导论……具体我再看。」"
            },
            {
              "speaker": "lin",
              "text": "「你以前讲真正想去的学校，不会这样。」"
            },
            {
              "speaker": "zhou",
              "text": "「我只是想让以后简单一点。」"
            },
            {
              "speaker": "lin",
              "text": "「可是你把最难的部分推给以后了，还把我放在最前面。」"
            },
            {
              "speaker": "narrator",
              "text": "她没有发火。她越平静，我越知道这件事没法靠玩笑过去。"
            },
            {
              "speaker": "lin",
              "text": "「如果你真的喜欢这所学校，你可以选。可是不要说是为了我。这个理由我不能收。」"
            },
            {
              "speaker": "zhou",
              "text": "「那我们呢？」"
            },
            {
              "speaker": "lin",
              "text": "「先别用‘我们’把问题盖住。你要先把你的路看清楚。」"
            },
            {
              "bg": "cgCh10BeUnreadCurriculum",
              "clear": true,
              "speaker": "narrator",
              "text": "大学宿舍桌上摊着课表和转专业说明，手机里的林澈聊天框停在简短回复。窗外是陌生校园的夜色。"
            },
            {
              "speaker": "narrator",
              "text": "后来我们的联系没有突然断掉，只是变得礼貌。她还是会回消息，只是不再替我检查每一个夹层。我也终于明白，最糟糕的不是离她远，而是我把她放到一个她不能承担的位置。"
            },
            {
              "speaker": "narrator",
              "text": "第十二章要从这里开始。不是追回，也不是解释，而是先承认：那张志愿表里，我没有把自己的理由写清楚。"
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
  if (!settings.bgmEnabled || escMenuOpen || !currentBgmKey || currentBgmKey === "none" || currentBgmKey === "silence") return;
  bgmAudio.play().then(() => {
    if (showToast) showMusicToast(bgmTracks[currentBgmKey]);
  }).catch(() => {});
}

function seekBgmStart(track) {
  const startTime = Number(track?.startTime) || 0;
  const seek = () => {
    try {
      bgmAudio.currentTime = startTime;
    } catch {
      // Some browsers disallow seeking before metadata is ready.
    }
  };

  if (bgmAudio.readyState >= 1) {
    seek();
  } else {
    bgmAudio.addEventListener("loadedmetadata", seek, { once: true });
  }
}

function playBgm(key, options = {}) {
  const { forceRestart = false, showToast = true } = options;
  if (!key || key === "none" || key === "silence") {
    pauseBgm();
    currentBgmKey = key;
    return;
  }
  const track = bgmTracks[key];
  if (!track) return;
  const changed = currentBgmKey !== key;
  currentBgmKey = key;

  if (changed) {
    bgmAudio.src = track.src;
  }
  if (changed || forceRestart) {
    seekBgmStart(track);
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
  return { ending, target: ending === "happy" ? "ch11-happy-s1" : "ch12-bad-s1" };
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
        ? (mutateState ? resolveEndingTarget() : state.ending ? (state.ending === "happy" ? "ch11-happy-s1" : "ch12-bad-s1") : endingTargetForStats(state.stats).target)
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
