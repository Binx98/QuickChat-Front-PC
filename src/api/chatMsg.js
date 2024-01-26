import axios from '@/axios/axios'

export default {
    /**
     * 查询聊天记录列表
     */
    getChatMsgList(data) {
        return axios({
            url: `/chat/msg/list`,
            method: 'post',
            data: data
        })
    },

    /**
     * 发送消息
     */
    sendMsg(data) {
        return axios({
            url: `/chat/msg/send`,
            method: 'post',
            data: data
        })
    }
}
