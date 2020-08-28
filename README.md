##工作区V2.0版本说明
---
> 引用文字  斜体：*8* ；加粗：**8** ；斜体加粗：***88***
+ 无序1
  - 无序1;
  
1. 有序2
  
    1. 有序2.1
    1. 有序2.2
    `单行代码块`
````
function（）{
  //...
}
````
表头1|表头2|表头3
|---:|:---:|---|
内容1|内容2|内容3|

![tupian](https://upload-images.jianshu.io/upload_images/95646-5bfd0cecf587c766.png?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp "简书")

<a href="https://www.jianshu.com/p/191d1e21f7ed/" target="_blank">简书</a>

st=>start: Start|past:>http://blog.xiaoyulive.top
e=>end: End:>http://www.xiaoyulive.top
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes or No?|approved:>https://github.com/quanzaiyu
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
