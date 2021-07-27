import { Injectable } from '@nestjs/common';
import * as config from 'config';
import * as QcloudSms from 'qcloudsms_js';
import { Logger } from '@nestjs/common';
const logger = new Logger('sms');

const smsConfig = config.get('sms');

@Injectable()
export class SmsService {
  sendCode(
    phone: string | string[],
    code: string,
    time = 10,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      phone = typeof phone === 'object' ? phone : [phone];
      const qcloudsms = QcloudSms(smsConfig.appid, smsConfig.appkey); // 实例化 QcloudSms
      const msender = qcloudsms.SmsMultiSender();
      msender.sendWithParam(
        86,
        phone, // 一个数组
        smsConfig.templateId, // 模版 id
        ['', code, time], // 正文中的参数值
        smsConfig.smsSign, // 签名 未提供或者为空时，会使用默认签名发送短信
        '',
        '',
        (err, res, resData) => {
          // 回调函数
          err && logger.error('err: ', err);
          // console.log('request data: ', res.req)
          console.log('response data: ', resData);
          if (resData.result !== 0) {
            reject(false);
          } else {
            resolve(true);
          }
        },
      );
    });
  }
}
