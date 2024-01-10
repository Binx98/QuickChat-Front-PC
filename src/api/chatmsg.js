import axios from '@/axios/axios'

export default {
    /**
     * 查询聊天记录列表
     */
    getChatMsgList(data) {
        return axios({
            url: `/chat/msg/list/${1}/${10}`,
            method: 'post',
            data: data
        })
    }
}
