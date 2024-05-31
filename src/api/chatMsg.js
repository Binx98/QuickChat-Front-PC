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
     * 根据 relation_id 查询聊天记录
     */
    getChatMsgByRelationId(relationId, current, size) {
        return axios({
            url: `/chat/msg/getByRelationId`,
            method: 'get',
            params: {
                relationId: relationId,
                current: current,
                size: size
            }
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
    },
}
