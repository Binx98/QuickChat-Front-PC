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
    }
}
