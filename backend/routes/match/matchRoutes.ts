import { Router } from 'express'

const routes = (router: Router) => {
    router.route("/")
        .get()
}

export default routes;
