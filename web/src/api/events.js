import api from "./index"

const list = async () => {
    const response = await api.get("/v1/events")
    return response.data
}

export default {
    list
}