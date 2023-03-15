import { RouterProvider } from 'react-router-dom';
import { appRouter } from '../../pages';

export const withRouter = () => () => {
    return RouterProvider({ router: appRouter })
};
