import { User } from '../models/User';

export const getUser = async (userId: string): Promise<User> => {
    const newUser: User = { firstName: 'aa', lastName: 'bb', email: 'aaa', userId };
    return newUser;
};
