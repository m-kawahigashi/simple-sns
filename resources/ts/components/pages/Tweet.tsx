import React, { memo, VFC } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Header } from "../organisms/layout/Header";


const useStyles = makeStyles({
    root: {
      maxWidth: "85%",
      margin: "auto",
      marginTop: 5,
    },
    media: {
      height: 140,
    },
  });

export const Tweet:VFC = memo(() => {

    const classes = useStyles();

    return (
        <>
            <Header />
            <Card className={classes.root}>
                <CardActionArea>
                    {/* 画像 */}
                    {/* <CardMedia
                    className={classes.media}
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    /> */}
                    <CardContent>
                        {/* ユーザー名 */}
                        <Typography gutterBottom variant="h5" component="h2">
                            MASA
                        </Typography>
                        {/* ツイート */}
                        <Typography variant="body2" color="textSecondary" component="p">
                            ツイートテストツイートテストツイートテスト
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* 編集ボタン */}
                    <Button size="small" color="primary">
                        編集
                    </Button>
                    {/* 削除ボタン */}
                    <Button size="small" color="primary">
                        削除
                    </Button>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    {/* 画像 */}
                    {/* <CardMedia
                    className={classes.media}
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    /> */}
                    <CardContent>
                        {/* ユーザー名 */}
                        <Typography gutterBottom variant="h5" component="h2">
                            MASA
                        </Typography>
                        {/* ツイート */}
                        <Typography variant="body2" color="textSecondary" component="p">
                            テストテストテスト
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* 編集ボタン */}
                    <Button size="small" color="primary">
                        編集
                    </Button>
                    {/* 削除ボタン */}
                    <Button size="small" color="primary">
                        削除
                    </Button>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    {/* 画像 */}
                    {/* <CardMedia
                    className={classes.media}
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    /> */}
                    <CardContent>
                        {/* ユーザー名 */}
                        <Typography gutterBottom variant="h5" component="h2">
                            MASA
                        </Typography>
                        {/* ツイート */}
                        <Typography variant="body2" color="textSecondary" component="p">
                            テストテストテスト
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* 編集ボタン */}
                    <Button size="small" color="primary">
                        編集
                    </Button>
                    {/* 削除ボタン */}
                    <Button size="small" color="primary">
                        削除
                    </Button>
                </CardActions>
            </Card>

        </>
    )
});