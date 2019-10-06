import * as $$Qy$$ from '../../apis/$$qy$$'
import { isEmpty } from '../../utils'

/**
 * whoami
 * @param {*} args
 * @return Promise
 */
export function whoami (args) {
  if (isEmpty(args)) {
    return Promise.reject(new Error('参数不能为空'))
  } else {
    return $$Qy$$.whoami(args)
  }
}
