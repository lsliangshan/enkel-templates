import { INIG } from '../../index'
const $$Qy$$ = require('../../lib/domains/$$qy$$/service')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

INIG({
  options: {
    /**
     * 公共参数
     */
    // ...
  },
  isServer: false, // 是否服务端渲染
  isTest: true // 是否为测试环境
})

/**
 * whoami
 */
describe('【$$QY$$】- whoami', function () {
  it('1. 空参数', () => {
    return $$Qy$$.whoami().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('参数不能为空')
    })
  })
})
