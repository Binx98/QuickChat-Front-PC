import axios from '@/axios/axios'

export default {
    /**
     * 上传文件
     */
    uploadFile(type, file) {
        return axios({
            url: `/file/upload`,
            method: 'post',
            params: {
                type: type
            },
            data: file
        })
    },
}
