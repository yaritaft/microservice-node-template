import { Router } from 'express-serve-static-core';
import { createUser, getUser, getUsers, updateUser, removeUser } from '../controllers/UserController';

export function UserRoutes(router: Router): void {
    const rootPath = '/user';
    router.post(`${rootPath}/`, createUser);
    router.get(`${rootPath}/`, getUser);
    router.get(`${rootPath}/:id`, getUsers);
    router.put(`${rootPath}/:id`, updateUser);
    router.delete(`${rootPath}/:id`, removeUser);
}
