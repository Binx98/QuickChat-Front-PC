import axios from '@/axios/axios'

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
}
