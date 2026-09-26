# 使用自己的 RO 素材

遊戲本身不附任何官方圖片（版權屬於 Gravity）。如果你有 RO 客戶端，可以把素材取出來給自己的遊戲使用；
沒有素材的項目會自動用內建手繪圖。

## 方法一：放進這個資料夾（本機開 index.html 時使用）
1. 從客戶端的 `data.grf` 用 GRF 工具（例如 GRF Editor）取出怪物、職業的 `.spr/.act`，匯出成 PNG。
   多格動畫請橫向排成一條（每格同寬），例如走路動畫 4 格 → 寬度 = 4 × 單格寬。
2. 把 PNG 放進 `assets/`（可以再分子資料夾）。
3. 複製 `sprites.example.js` 為 `sprites.js`，列出每個代號對應的檔案與格數。

## 方法二：在遊戲裡匯入（線上版也能用）
「設定 → 素材 → 選擇圖片」，可以一次選多張。檔名就是代號：
- `poring.png`：單張
- `poring@4.png`：4 格橫向動畫
- `poring@4r.png`：4 格、原圖朝右

匯入的圖片存在瀏覽器的 IndexedDB，不會上傳到任何地方。

## 代號清單
| 類別 | 代號 |
| --- | --- |
| 普隆德拉原野 | `poring` `fabre` `lunatic` `picky` · MVP `angeling` |
| 斐揚森林 | `willow` `poporing` `spore` `smokie` · MVP `eddga` |
| 夢羅克沙漠 | `drops` `peco` `scorpion` `wolf` · MVP `osiris` |
| 斐揚洞窟 | `familiar` `zombie` `skeleton` `skelarcher` · MVP `moonlight` |
| 格拉斯海姆古城 | `raydric` `evildruid` `wraith` `abysmal` · MVP `darklord` |
| 迷宮森林 | `baphojr` `deviling` `darktree` · MVP `baphomet` |
| 職業 | `job_novice` `job_swordsman` `job_mage` `job_archer` `job_acolyte` `job_thief` `job_merchant` |
| 背景 | `bg_field` `bg_forest` `bg_desert` `bg_cave` `bg_ruins` `bg_maze` |

背景圖會依畫面高度縮放並橫向重複、帶視差捲動；地面與平台仍由遊戲繪製。
