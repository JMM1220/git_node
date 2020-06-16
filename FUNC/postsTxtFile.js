const fs = require('fs')
const path = require('path')
const createDir = require('./createDir')
const checkDirExit = require('./checkDirExit')

async function postsTxtFile(params) {
  let res = {}
  if (params && params.files.file) {
    let filename = params.files.file.name
    console.log(filename, __dirname)
    // 复制到指定路径
    let targetPath = path.join(__dirname, `file/${createDir(filename)}`)
    checkDirExit(targetPath)
    console.log(targetPath, 'targetPath')
    // 复制文件流
    fs.createReadStream(params.files.file.path).pipe(fs.createWriteStream(targetPath))
    res = { code : 0, data: { result: 'success' } }
    return res
  } else {
    return {
      code: -1,
      data: '上传错误'
    }
  }
}

module.exports = postsTxtFile