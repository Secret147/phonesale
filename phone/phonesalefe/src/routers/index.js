import Cart from '~/pages/Cart';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Order from '~/pages/Order';
import Register from '~/pages/Register/Register';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/order', component: Order },
    { path: '/detail', component: Detail },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
