import Axios from "axios";

let fns = {
    async TmList(){
        let page = parseInt(Math.random()*1600);
        let httpUrl = `http://localhost:9000/api/rtimu?page=${page}`
        let res = await Axios.get(httpUrl)
        // console.log(res.data)
        return res.data
    }
}

export default fns