import api from './base'

const list = async () => await api.get('/v1/events')
const getOne = async (id) => await api.get(`/v1/events/${id}`)
const create = async (payload) => await api.post('/v1/events', payload)
const update = async (id, payload) => await api.put(`/v1/events/${id}`, payload)
const remove = async (id) => await api.delete(`/v1/events/${id}`)

const eventsApi = {
    list,
    getOne,
    create,
    update,
    remove
}

export default eventsApi