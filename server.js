const koa = require('koa')
const koaBody = require('koa-body')
let Router = require('koa-router')
let app = new koa()
let postsTxtFile = require('./FUNC/postsTxtFile.js')
const router = new Router()
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFieldsSize: 200*1024*1024
  }
}))
/**
 * 添加跨域
 */
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  ctx.set("Access-Control-Allow-Credentials", true)
  await next()
})
router.post('/uploadfile', async(ctx, next) => {
  console.log(ctx.request)
  const res = await postsTxtFile(ctx.request)
  console.log(res, '1234566')
  ctx.body = res
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log('服务启动成功')
})