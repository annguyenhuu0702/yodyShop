import PageHome from "./containers/PageHome/PageHome";
import PageChildren from "./containers/PageChildren/PageChildren";
import PageMan from "./containers/PageMan/PageMan";
import PagePromotion from "./containers/PagePromotion/PagePromotion";
import PageWomen from "./containers/PageWomen/PageWomen";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import Cart from "./containers/Cart/Cart";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <PageHome />,
  },
  {
    path: "/nam",
    exact: false,
    main: ({ match, history }) => <PageMan match={match} history={history} />,
  },
  {
    path: "/nu",
    exact: false,
    main: ({ match, history }) => <PageWomen match={match} history={history} />,
  },
  {
    path: "/tre-em",
    exact: false,
    main: ({ match, history }) => (
      <PageChildren match={match} history={history} />
    ),
  },
  {
    path: "/khuyen-mai",
    exact: false,
    main: ({ match, history }) => (
      <PagePromotion match={match} history={history} />
    ),
  },
  {
    path: "/product/:productId",
    exact: false,
    main: ({ match, history }) => (
      <ProductDetail match={match} history={history} />
    ),
  },
  {
    path: "/cart",
    exact: false,
    main: ({ match, history }) => <Cart match={match} history={history} />,
  },
  {
    path: "/user/singup",
    exact: false,
    main: ({ match, history }) => <Register match={match} history={history} />,
  },
  {
    path: "/user/singin",
    exact: false,
    main: ({ match, history }) => <Login match={match} history={history} />,
  },
];

export default routes;
