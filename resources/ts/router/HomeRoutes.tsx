import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
    // home画面　※仮で指定
    {
        path:"/",
        exact: true,
        children: <Home />
    },
    // 設定URL以外にアクセスした場合
    {
        path:"*",
        exact: false,
        children: <Page404 />
    }

]