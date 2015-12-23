# uui为Youshop UI 组件
包括Button，List，Form（TODO），以及相关UI控件，如slide，rate，chart，checkbox，等在项目和工作中遇到的相关内容，抽离出来。

## 开发思路
* 做为前端开发人员来说，在项目中我们难免会遇到重复的组件和UI，为了避免重复的工作和统一的格式，我们有必要进行一次梳理
* sass为我们写css提供了利器，我们可以像写JS一样写css
* 我们只定义一般格式，不定义特殊格式，不用JS，只用css
* 只做mobile兼容，实现超轻量级
* 构建工具（TODO）

## 命名规范
* 我们的CSS命名规范原则上参考css属性，如border-radius,中间以小横线分割单词
* scss方法以大写字母开头（TODO）

## 目录结构(TODO)
* lib 
	- lib.scss 包含一些公共的类库和方法
	- rest.scss 为reset方法
	- util.scss 定义一些常用方法
* button
	- index.html
	- index.scss
* list
	- index.html
	- index.scss
	
## 方法API
* border(color);
* bg-color(color);
* bg-img(url,size);
* padding(top&bottom,left&right);
* flex-display();
* flex-item(flex:1);
* center-block();
* border-radius(radius);
* box-shadow-like-border();
* @function pxToRem(px)
	
## 使用方法

<pre>

<code>
@import "../lib/reset";
@import "../lib/lib";

@mixin w-btn-wrapper($bgcolor,$fontcolor:#000000,$height:30px,$bordercolor:transparent) {
  @include bg-color($bgcolor);
  @include flex-display();
  color: $fontcolor;
  height: $height;
  text-align: center;
  @if $bordercolor {
    @include border($bordercolor);
  }

}

.w-btn-wrapper{
  @include w-btn-wrapper(#000000, #FFFFFF,50px);
  @include border-radius(6px);

  span {
    @include flex-item(1)
  }
  &:active{
    @include bg-img("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAyCAYAAACd+7GKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeNpi/v//vwMTAwPDfzjBgMpFI/7hFSOT9Y8qRuF3JLoHAQIMAHYtMmRA+CugAAAAAElFTkSuQmCC");
    background-repeat: repeat-x;

  }
}

.normal-btn1{
  @extend .w-btn-wrapper;
  @include w-btn-wrapper(red, yellow,50px);
  @include border-radius(6px);
}
</code>
</pre>

