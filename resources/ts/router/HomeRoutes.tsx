import { Tweet } from "../components/pages/Tweet";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
    // home画面
    {
        path:"/",
        exact: true,
        children: <Tweet />
    },
    // 設定URL以外にアクセスした場合
    {
        path:"*",
        exact: false,
        children: <Page404 />
    }

]