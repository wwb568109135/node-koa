/*
*
* 七牛控制器
*
*/

import * as qn from 'qn'
import { Context } from 'koa'

import * as config from '../config'
import { handleSuccess, IParams } from '../utils/handle'

const client = qn.create(config.QINIU)

export default class QNController {
  public static getQN (ctx: Context) {
    handleSuccess(
      {
        ctx,
        result: { token: client.uploadToken() },
        message: '获取 upToen 成功'
      }
    )
  }
}
