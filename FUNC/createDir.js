/**
 * 给上传的文件加时间戳区分
 */
function createDir(filename) {
  const date = new Date()
  let month = parseInt(date.getMonth()) + 1
  month = month.toString.length > 1 ? month : `0${month}`
  const dir = `${date.getFullYear()}${month}${date.getDate()}`
  const nameList = filename.split('.')
  const fileName = nameList[0] + dir + '.' + nameList[1]
  return fileName
}

module.exports = createDir