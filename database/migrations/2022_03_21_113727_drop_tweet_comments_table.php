<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropTweetCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tweet_comments', function (Blueprint $table) {
            // 削除
            Schema::dropIfExists('tweet_comments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('tweet_comments', function (Blueprint $table) {
            $table->unsignedBigInteger('tweet_id');
            $table->unsignedBigInteger('comment_id');

            // 外部キー制約
            $table->foreign('tweet_id')->references('id')->on('tweets');
            $table->foreign('comment_id')->references('id')->on('comments');
        });
    }
}
