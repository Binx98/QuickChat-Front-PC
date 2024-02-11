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
     *
     */
    getSessionInfo(fromId, toId) {
        return axios({
            url: `/chat/session/getSessionInfo/${fromId}/${toId}`,
            method: 'get'
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
