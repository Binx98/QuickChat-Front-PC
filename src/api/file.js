import axios from '@/axios/axios'

export default {
    /**
     * 上传文件
     */
    uploadFile(type, file) {
        return axios({
            url: `/file/upload/{type}`,
            method: 'post',
            data: file
        })
    },
}
