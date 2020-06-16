/**
 * 获取上传文件的后缀名
 */
function getFileFormat(name) {
  const name = name.split('.')
  return name[name.length - 1]
}

module.exports = getFileFormat