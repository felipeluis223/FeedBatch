// Relizar a conexão na API da FeedBatch
import axios from "axios"

const feedbatch = axios.create({
	baseUrl: 'https://x8ki-letl-twmt.n7.xano.io/api:pMlqaj0c'
})

export default feedbatch;