import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import StoreManagerPage from "./pages/StoreMangerPage/StoreManagerPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/login",
        exact: true,
        main: ({history}) => <LoginPage history={history} />
    },
    {
        path: "/cart",
        exact: true,
        main: () => <CartPage />
    },
    {
        path: "/store-management",
        exact: true,
        main: () => <StoreManagerPage />
    },
    {
        path: "/furniture/:id",
        exact: true,
        main: ({match, history}) => <DetailPage match={match} history={history} />
    },
    {
        path: "*",
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;