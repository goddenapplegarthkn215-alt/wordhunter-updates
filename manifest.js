/* ============================================================
 *  更新清单 manifest.js —— 放在更新服务器根目录
 *
 *  格式说明:
 *    dataVersion : 本次内容数据版本号（整数）。比 App 内置的
 *                  window.DATA_VERSION 大时，App 会提示"发现新内容"。
 *    notes       : 本次更新说明（可选，纯文本）。
 *    files       : 需要下载覆盖的数据文件列表。
 *        name     -> 显示在更新进度里的中文名
 *        url      -> 相对服务器根目录的文件路径
 *
 *  数据文件（words.js / gamedata.js）必须是可执行 JS，
 *  用 window.XXX 覆盖全局变量（window.WORD_LEVELS、window.MONSTERS 等），
 *  并把 window.DATA_VERSION 改成与本清单一致的值。
 * ============================================================ */
window.__WORDHUNTER_MANIFEST__ = {
  dataVersion: 2,
  notes: "示例更新：内容版本 v2（词库 / 游戏数据在线更新演示）",
  files: [
    { name: "词库", url: "words.js" },
    { name: "游戏数据", url: "gamedata.js" }
  ]
};