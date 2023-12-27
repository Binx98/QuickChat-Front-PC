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
}
