import React, { memo, VFC } from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

  const useTweetStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '90%',
      margin: 'auto',
    },
    // textField: {
    //   marginLeft: theme.spacing(1),
    //   marginRight: theme.spacing(1),
    //   width: '25ch',
    // },
  }),
);

export const Tweet:VFC = memo(() => {

    const classes = useStyles();
    const tweetClasses = useTweetStyles();

    return (
        <>
            <Header />

            <div className={tweetClasses.root}>
                <TextField
                    id="outlined-full-width"
                    // label="Label"
                    style={{ margin: 8 }}
                    placeholder="つぶやき"
                    helperText="ツイートを入力してください"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                />
            </div>

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