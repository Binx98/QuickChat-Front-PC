import axios from '@/axios/axios'
import cookie from 'js-cookie'

export default {
    /**
     * 发送邮件
     */
    sendEmail(data) {
        return axios({
            url: `/user/sendEmail`,
            method: 'post',
            data: data
        })
    },

    /**
     * 注册账号
     */
    register(data) {
        return axios({
            url: `/user/register`,
            method: 'post',
            data: data
        })
    },

    /**
     * 登录
     */
    login(data) {
        return axios({
            url: `/user/login`,
            method: 'post',
            data: data,
            headers: {
                'captcha_key': cookie.get('captcha_key')
            }
        })
    }
}
