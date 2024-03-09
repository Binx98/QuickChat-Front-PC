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
            url: `/chat/msg/getByRelationId/${relationId}/${current}/${size}`,
            method: 'get'
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

    /**
     * 下载文件
     */
    downloadFile(type, url) {
        return axios({
            url: `/file/download`,
            method: 'post',
            params: {
                type: type,
                url: url
            }
        })
    },
}
