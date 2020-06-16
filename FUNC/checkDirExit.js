const fs = require('fs')

/**
 * 检查文件目录是否已存在
 */
function checkDirExit(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  } else {
    console.log('文件目录已存在')
  }
}

module.exports = checkDirExit