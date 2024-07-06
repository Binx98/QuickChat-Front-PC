import axios from '@/axios/axios'

export default {
    /**
     * 查询聊天会话列表
     */
    getSessionList() {
        return axios({
            url: `/session/list`,
            method: 'get'
        })
    },

    /**
     * 更修已读时间
     */
    updateReadTime(sessionId) {
        return axios({
            url: `/session/updateReadTime`,
            method: 'post',
            params: {
                sessionId: sessionId
            }
        })
    }
}
