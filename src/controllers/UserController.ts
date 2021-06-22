import { Response, Request } from 'express';
import * as UserService from '../services/UserService';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    console.log('h');
    return res.send('holis');
};
export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const response = await UserService.getUser(req.params.id);
    console.log(response);
    return res.send(response);
};
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    console.log('h');
    return res.send('holis');
};
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    console.log('h');
    return res.send('holis');
};
export const removeUser = async (req: Request, res: Response): Promise<Response> => {
    console.log('sh');
    return res.send('holis');
};
