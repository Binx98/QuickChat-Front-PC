import axios from '@/axios/axios'

export default {
    /**
     * 根据 relation_id 集合查询聊天记录列表
     */
    getChatMsgList(relationIds, size) {
        return axios({
            url: `/msg/getByRelationIds`,
            method: 'post',
            data: relationIds,
            params: {
                size: size
            }
        })
    },

    /**
     * 根据 relation_id 查询聊天记录
     */
    getByRelationId(relationId, current, size) {
        return axios({
            url: `/msg/getByRelationId`,
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
            url: `/msg/send`,
            method: 'post',
            data: data
        })
    },
}
