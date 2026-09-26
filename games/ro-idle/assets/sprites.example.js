// 複製成 assets/sprites.js 後修改。只有列在這裡的代號會從 assets/ 資料夾讀圖。
// 代號：怪物（poring、fabre…）、職業 job_<職業>、背景 bg_<主題>，完整清單見 README。
// frames：橫向排列的動畫格數；right：原圖朝右時設 true（RO 原圖多半朝左，預設 false）；fps：播放速度。
window.RO_SPRITES = {
  poring:        { file: 'mobs/poring.png', frames: 4, fps: 6 },
  job_swordsman: { file: 'jobs/swordsman.png', frames: 8 },
  bg_field:      { file: 'bg/prt_fild08.png' },
};
