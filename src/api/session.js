import axios from '@/axios/axios'

export default {
    /**
     * 查询聊天会话列表
     */
    getSessionList() {
        return axios({
            url: `/chat/session/list`,
            method: 'get'
        })
    },

    /**
     * 查询聊天会话未读数量
     */
    getUnreadCountList(sessionList) {
        return axios({
            url: `/chat/session/getUnreadCountList`,
            method: 'post',
            data: sessionList
        })
    },

    /**
     * 更修已读时间
     */
    updateReadTime(sessionId) {
        return axios({
            url: `/chat/session/updateReadTime/${sessionId}`,
            method: 'post'
        })
    }
}
