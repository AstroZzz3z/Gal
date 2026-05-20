# Chapter 4 正式台词草稿：决赛备战

说明：本稿已按用户提供的 `第四章.json` 接入主脚本。`stage` 与 `sourceLine` 为外部批注字段，未进入运行脚本；运行脚本保留 bg、show、focus、choice、effects、insert 等游戏字段。微信消息已转换为 `消息：...`，由手机聊天框显示。

```json
{
  "id": "ch4",
  "title": "第四章：决赛备战",
  "sections": [
    {
      "id": "ch4-s1",
      "title": "晚自习后的题",
      "lines": [
        {
          "bg": "libraryRain",
          "clear": true,
          "speaker": "system",
          "text": "第四章：决赛备战"
        },
        {
          "speaker": "narrator",
          "text": "第二天傍晚，雨还在下，楼顶观测彻底泡汤。图书馆靠窗的小桌上堆满了历年真题，我和林澈中间夹着陈砚昨天扔在这儿的半包黄油饼干。",
          "transition": {
            "title": "第二天傍晚",
            "subtitle": "晚自习后的题"
          }
        },
        {
          "speaker": "lin",
          "text": "「先过你那道球面三角。你昨天在旁边批注了『看起来会，实际不会』。」",
          "focus": "lin",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linNeutral",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「这题给的已知条件是当地纬度 $\\phi$、赤纬 $\\delta$ 和时角 $H$，求高度角。我直接套了 $\\cos z = \\sin \\phi \\sin \\delta + \\cos \\phi \\cos \\delta \\cos H$，算出来的结果跟答案完全对不上。」"
        },
        {
          "speaker": "lin",
          "text": "「因为你根本没判断天体在子午圈的东边还是西边。题干里的地方恒星时小于天体赤经，时角是负的。你算出的高度角当然是错的。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「靠……这种纯靠代数硬算的习惯真是要命，错得毫无违和感。」"
        },
        {
          "speaker": "lin",
          "text": "「吃点东西。你刚才盯着图发呆了整整十秒钟，低血糖会直接导致逻辑断层。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你现在真把我当一台需要定时加燃料的做题机器了？」"
        },
        {
          "speaker": "lin",
          "text": "「我只是不想因为你大脑死机而浪费我讲题的时间。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "narrator",
          "text": "半小时后，轮到林澈的辐射平衡题。"
        },
        {
          "speaker": "zhou",
          "text": "「你卡在这儿，是因为又在纠结要不要把行星的反照率 $A$ 当常数处理？」"
        },
        {
          "speaker": "lin",
          "text": "「题干没给具体波段。如果它考的是红外辐射，反照率不能直接用可见光波段的近似值……」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "zhou",
          "text": "「停！别在这儿发散。限时训练，直接把 $A$ 当常数算主项，旁边打个问号。等算到底了，如果选项间距极大，说明出题人根本没考虑红外波段。别自己给自己加戏。」"
        },
        {
          "speaker": "lin",
          "text": "「……知道了。打问号，先算到底。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "narrator",
          "text": "看着她终于肯放过那个微小的误差条件，我居然有种诡异的成就感。在这张狭小的桌子上，我们用最粗暴的方式，互相强行拽住对方滑向深渊的脚踝。"
        }
      ]
    },
    {
      "id": "ch4-s2",
      "title": "强制停机",
      "lines": [
        {
          "speaker": "narrator",
          "text": "第三天中午，走廊里闷热得让人喘不过气。午休铃刚响，教室里已经横七竖八地倒下了一片。",
          "bg": "classroom",
          "clear": true,
          "transition": {
            "title": "第三天 午休",
            "subtitle": "强制停机"
          }
        },
        {
          "speaker": "chen",
          "text": "「你们俩现在连睡觉都要拿计时器卡秒了吗？这是什么地狱绘图？」",
          "focus": "chen",
          "clear": true,
          "show": [
            {
              "id": "chen",
              "img": "chenNeutral",
              "pos": "left"
            },
            {
              "id": "lin",
              "img": "linTired",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「闭嘴。睡多了下午第一节物理课会处于麻醉状态，睡少了下午限时卷算不完。」"
        },
        {
          "speaker": "lin",
          "text": "「十五分钟后……闹钟响了立刻叫我。如果我没起，拿笔戳我。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「收到。你也一样。」"
        },
        {
          "speaker": "narrator",
          "text": "几乎是闭上眼睛的瞬间，林澈的呼吸就变得沉重而均匀。她没有像平时那样顾及什么形象，眉头微微皱着，手里甚至还死死攥着一支没盖笔帽的中性笔。"
        },
        {
          "speaker": "narrator",
          "text": "十五分钟后，计时器震动了一下。"
        },
        {
          "speaker": "zhou",
          "text": "「林澈。起来。」"
        },
        {
          "speaker": "lin",
          "text": "「……时角……」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「别时角了，清醒点，准备刷下午的天体力学套卷。」"
        },
        {
          "speaker": "lin",
          "text": "「……下午第一题，我来讲偏心率。」",
          "focus": "lin"
        }
      ]
    },
    {
      "id": "ch4-s3",
      "title": "主科的审判",
      "lines": [
        {
          "speaker": "narrator",
          "text": "午休后，班主任许承安把我叫到了办公室。他的办公桌上压着一张我的数学周测卷，最后一道导数大题的解答区干干净净。",
          "bg": "corridorEvening",
          "clear": true,
          "transition": {
            "title": "午休后",
            "subtitle": "主科的审判"
          }
        },
        {
          "speaker": "teacher",
          "text": "「决赛请假单学校批了。但我得提醒你一句，别以为进了复赛就万事大吉。如果拿不到国家级奖项，这东西对你的高考没有任何实质性帮助。」",
          "focus": "teacher",
          "clear": true,
          "show": [
            {
              "id": "teacher",
              "img": "teacherNeutral",
              "pos": "left"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「我知道……」"
        },
        {
          "speaker": "teacher",
          "text": "「你知道个屁！你看看你这两天的状态，英语默写不及格，数学压轴题直接交白卷。搞竞赛不是让你拿主科去献祭的！去天津的这半个月，要是把你高考的底子给掏空了，你以后拿什么去填？」",
          "focus": "teacher"
        },
        {
          "speaker": "narrator",
          "text": "办公室里的空调吹得很冷。许承安的话没有任何所谓的“理想主义”，每一句都是赤裸裸的生存现实。"
        },
        {
          "speaker": "zhou",
          "text": "「……我会补上的。我们每天的排期里留了两个小时写主科作业。」"
        },
        {
          "speaker": "teacher",
          "text": "「别给我开空头支票。滚回去上课，要是再让我在物理课上看到你偷偷算天文题，我直接没收你的稿纸。」",
          "focus": "teacher"
        },
        {
          "speaker": "narrator",
          "text": "我攥着卷子走回教室。走廊的窗户开着，热风吹得人心里发闷。林澈站在前门，手里拿着那个用来装资料的透明文件袋。",
          "bg": "corridorEvening",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linNeutral",
              "pos": "center"
            }
          ]
        },
        {
          "speaker": "lin",
          "text": "「老许骂你了？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「警告我别拿主科献祭。非常现实的拷问。」"
        },
        {
          "speaker": "lin",
          "text": "「他没说错。这是刚才那道导数题的步骤拆解，我午休前写的，你直接看第二步构造函数。别在晚自习浪费时间重新想了。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你连这个都准备了？」"
        },
        {
          "speaker": "lin",
          "text": "「省下你死磕数学的时间，今晚才能多推演一套天体测量卷。这是战术止损。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "下午，到底要不要合并错题库成了一个问题。",
          "choice": [
            {
              "text": "提议共用错题文档。",
              "effects": {
                "trust": 1,
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "消息：建立一个共享石墨文档吧。只放高频错题和死坑。"
                },
                {
                  "speaker": "lin",
                  "text": "消息：共享的话，彼此的愚蠢错误会暴露无遗。",
                  "focus": "lin"
                },
                {
                  "speaker": "zhou",
                  "text": "消息：就是要看对方是怎么蠢死的，才能防止自己重蹈覆辙。这是生存策略，别要面子了。"
                },
                {
                  "speaker": "lin",
                  "text": "消息：……链接发你了。文档名：【致命雷区清单-严禁降智】",
                  "focus": "lin"
                }
              ]
            },
            {
              "text": "先各自整理，晚上交换。",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "消息：先各自整理，晚自习结束前五分钟互相拷U盘。效率优先。"
                },
                {
                  "speaker": "lin",
                  "text": "消息：同意。标注错因时不要写长句，直接写断点在哪。",
                  "focus": "lin"
                },
                {
                  "speaker": "zhou",
                  "text": "消息：行。"
                },
                {
                  "speaker": "narrator",
                  "text": "虽然决定了分开整理，但我在写到第三题关于岁差的影响时，脑子里还是会不由自主地冒出一个念头：如果是林澈，这题她会死抠哪个近似条件？"
                },
                {
                  "speaker": "narrator",
                  "text": "晚自习结束的铃声打响。教室里的人几乎跑光了，黑板上还留着没擦干净的立体几何图。"
                },
                {
                  "speaker": "lin",
                  "text": "「……今天到此为止。」",
                  "focus": "lin"
                },
                {
                  "speaker": "zhou",
                  "text": "「你居然会主动喊停？」"
                },
                {
                  "speaker": "lin",
                  "text": "「大脑运转效率已经降到了 40% 以下。再算下去只是在制造新的错题。」",
                  "focus": "lin"
                },
                {
                  "speaker": "zhou",
                  "text": "「行。强制关机。」"
                },
                {
                  "speaker": "narrator",
                  "text": "她没有再回头确认什么。关掉教室灯的那一刻，我意识到，我们已经没有任何余力去伤春悲秋了。前往天津的倒计时，正在以一种抽筋扒皮的方式，逼着我们抛弃所有多余的情绪，只剩下最纯粹的生存本能。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch4-s4",
      "title": "模拟卷",
      "lines": [
        {
          "speaker": "narrator",
          "text": "倒计时第七天。夏南星不知道从哪搞来一间空置的阶梯教室，把窗帘拉得严严实实，只开着几盏惨白的顶灯。讲台上放着一个巨大的红色数字计时器，刺眼的“180:00”正在一秒一秒往下掉。",
          "bg": "examRoom",
          "clear": true,
          "transition": {
            "title": "倒计时第七天",
            "subtitle": "模拟卷"
          }
        },
        {
          "speaker": "xia",
          "text": "「中途禁止上厕所，禁止喝水，禁止抬头四处看。觉得自己考砸了想死，也给我把卷子写完再死。」",
          "focus": "xia",
          "clear": true,
          "show": [
            {
              "id": "xia",
              "img": "seniorSmile",
              "pos": "left"
            },
            {
              "id": "lin",
              "img": "linAnxious",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「学姐……这排版不对吧？这根本不是历年国赛真题。为什么会有全英文的附录表？」"
        },
        {
          "speaker": "xia",
          "text": "「因为这是 IOAA（国际天文奥赛）的真题删减版。针对你们现在的状态，普通国赛卷已经测不出你们的抗压底线了。开始。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "我转头看了一眼林澈，她的脸色在看到试卷头部的瞬间也变白了。但在夏南星“开始”两个字落下的瞬间，她一言不发地拔开了笔帽。这根本不是什么考试，这是一场赤裸裸的精神凌迟。"
        },
        {
          "speaker": "narrator",
          "text": "前四十分钟，我还勉强能跟上节奏。但到了第三道数据处理题，密密麻麻的测光数据表像一堵墙一样砸在脸上。"
        },
        {
          "speaker": "zhou",
          "text": "（不对……为什么大气消光系数算出来是个负数？哪里算错了？重新代入……还是负数！）"
        },
        {
          "speaker": "narrator",
          "text": "我在那一堆数字里死磕了整整二十分钟。余光里，计时器的数字已经掉到了“90:00”。教室里的翻纸声越来越少，因为大家都被卡住了。我想深呼吸，但胸口闷得像被塞了一把棉花。"
        },
        {
          "speaker": "narrator",
          "text": "最后二十分钟，林澈的背挺得笔直，但她左手死死压着草稿纸，右手一直悬在半空，笔尖离卷面只有不到一厘米，却迟迟落不下去。她在天体力学的大推导里彻底走岔了。"
        },
        {
          "speaker": "xia",
          "text": "「时间到。停笔。立刻交卷。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "笔掉在桌上的那一刻，我才发现自己整条右臂都在不自觉地发抖。手心里全是冷汗，试卷的边缘被我捏得湿漉漉的。"
        },
        {
          "speaker": "narrator",
          "text": "批卷的时间极其难熬。我和林澈瘫坐在教室外面的长椅上，谁都没说话。"
        },
        {
          "speaker": "zhou",
          "text": "「……你最后那道天体力学，推出来了吗？」"
        },
        {
          "speaker": "lin",
          "text": "「推到第三页草稿纸的时候，我发现我一开始就把极坐标系的参考轴设反了。全错了。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "我没再接话。在这个时候，任何安慰都显得极其虚伪且多余。"
        },
        {
          "speaker": "xia",
          "text": "「死相很难看。周行，第三题你死磕了二十分钟，导致后面两道十分的简答题直接空白。林澈，天体力学推导起手就错，你硬是强行往下推，白白浪费了四十分钟，最后那八分的过程分也没拿到。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「……我知道我一开始就错了。但我就是停不下来……我总觉得再算两步就能圆回来……」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「不肯认输是吧？觉得放弃一个推导就等于证明自己是个废物？考场上不看你有多努力，只看你最后落纸的答案。早点停损，这四个字你今晚给我抄一百遍。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「……知道了。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "narrator",
          "text": "她很少哭。上一次在楼梯间是因为恐慌，这一次，是纯粹的、被自己无能为力的执拗所击溃的不甘。"
        },
        {
          "speaker": "zhou",
          "text": "「学姐，那我的呢？」"
        },
        {
          "speaker": "xia",
          "text": "「你一紧张就把所有的物理量单位全省了。你是打算让阅卷老师自己去猜你写的是弧度还是角度吗？你这种写卷子的习惯，就算全对也会被扣掉一半的分。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「我当时脑子全乱了，只想赶紧把数字算出来……」"
        },
        {
          "speaker": "xia",
          "text": "「行了，哭也哭过了，烦也烦完了。这份卷子就是你们现在的真实水平。别去幻想什么超常发挥。今晚，把你们在这张卷子上犯的致命错误，精简成不超过十个字，写成卡片。明天早读互相抽查。」",
          "focus": "xia"
        }
      ]
    },
    {
      "id": "ch4-s5",
      "title": "错题卡片与深夜复盘",
      "lines": [
        {
          "speaker": "narrator",
          "text": "雨又开始下了。教室里只剩我和林澈。她已经平静下来了，正在把错题抄到夏南星要求的小卡片上。",
          "bg": "clubRoomNight",
          "clear": true,
          "transition": {
            "title": "雨夜",
            "subtitle": "错题卡片与深夜复盘"
          }
        },
        {
          "speaker": "zhou",
          "text": "「你这用词……很有学姐的风范。」"
        },
        {
          "speaker": "lin",
          "text": "「因为『早停』两个字根本拦不住我。必须骂得难听点。」",
          "focus": "lin",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linAnxious",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "我们互相看了一眼对方极其暴力的卡片，谁都没笑。"
        },
        {
          "speaker": "wangshu",
          "text": "消息：附中模拟卷复盘已发。顺便提醒一句，考前带进考场的提醒卡片不要超过十二张。超过了，你的大脑在极度紧张下根本记不住。",
          "focus": "wangshu"
        },
        {
          "speaker": "zhou",
          "text": "「删吧。只留绝对会死人的那种。」"
        },
        {
          "speaker": "lin",
          "text": "「删掉任何一张，我都觉得明天我就会在那上面翻车。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你脑子容量有限，不可能防住所有的坑。选你最容易失控的那个。」"
        },
        {
          "speaker": "narrator",
          "text": "开始重新推演白天做错的最后一道大题时。"
        },
        {
          "speaker": "zhou",
          "text": "「一起看？你那道天体力学我白天也卡了。」"
        },
        {
          "speaker": "lin",
          "text": "「别看。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「……怎么了？」"
        },
        {
          "speaker": "lin",
          "text": "「我推导过程全是一团乱麻，错得很离谱。你坐在旁边看着我改……我会有压力。我会连第一步该写什么都忘了。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "我看着她紧绷的肩膀，忽然意识到，白天那八分的丢失对她的打击比我想象的还要大。她需要时间去消化这种耻辱感，而不是被我当成共享资源的错题去围观。"
        },
        {
          "speaker": "zhou",
          "text": "「行。我做我自己的。你推你的。有需要叫我。」"
        },
        {
          "speaker": "lin",
          "text": "「……谢谢。」",
          "focus": "lin",
          "img": "linSmile"
        },
        {
          "speaker": "narrator",
          "text": "教室里只剩下雨声和极其沉闷的写字声。我们隔着一张空桌子，各自在错题的泥沼里挣扎。没有互相讲题的温情，只有被冷酷的真题逼入绝境后，拼命想自救的挣扎。"
        },
        {
          "speaker": "narrator",
          "text": "我看着自己手边那张『不写单位就剁手』的卡片。初赛过了的喜悦早就被这场模拟考碾成了粉末。天津的决赛根本不是什么荣誉之旅，那是一台真正的绞肉机。而我们现在能做的，仅仅是把自己的弱点，写在十二张极其可笑的卡片上而已。"
        }
      ]
    },
    {
      "id": "ch4-s6",
      "title": "出发前夜",
      "lines": [
        {
          "speaker": "narrator",
          "text": "出发前三天，正式的红头文件通知贴到了实验楼一楼的公告栏上。决赛城市、报到时间、集合地点、车次，白纸黑字，没有任何讨价还价的余地。",
          "bg": "schoolGateDusk",
          "clear": true,
          "transition": {
            "title": "出发前三天",
            "subtitle": "出发前夜"
          }
        },
        {
          "speaker": "chen",
          "text": "「周行，你和林澈同一车厢。」",
          "focus": "chen",
          "clear": true,
          "show": [
            {
              "id": "chen",
              "img": "chenNeutral",
              "pos": "left"
            },
            {
              "id": "lin",
              "img": "linNeutral",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「你声音能再大点吗？最好用广播站的喇叭喊。」"
        },
        {
          "speaker": "lin",
          "text": "「只是同一车厢而已。同一趟火车有一百多个人。」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「对对对，我还没说你们是同一排呢。座位号我都看到了。」",
          "focus": "chen"
        },
        {
          "speaker": "narrator",
          "text": "她刚才明显只确认了集合时间和携带物品清单，根本没看车票座位那一栏。"
        },
        {
          "speaker": "zhou",
          "text": "「七车厢，08A。」"
        },
        {
          "speaker": "lin",
          "text": "「你呢？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「08B。刚好相邻。」"
        },
        {
          "speaker": "chen",
          "text": "「你们俩能不能别把『相邻』这么暧昧的词说得像解析几何里的位置关系？」",
          "focus": "chen"
        },
        {
          "speaker": "zhou",
          "text": "「你再去搬两箱赤道仪清醒一下？」"
        },
        {
          "speaker": "chen",
          "text": "「我撤了。祝二位旅途愉快，别在高铁上为了抢草稿纸打起来。」",
          "focus": "chen"
        },
        {
          "speaker": "narrator",
          "text": "陈砚跑了。林澈举起手机拍通知单。我眼睁睁看着她原本对准集合时间的镜头，极其刻意地往下移了半寸，把座位号也稳稳当当地框进了取景器，按下了快门。"
        },
        {
          "speaker": "zhou",
          "text": "「你刚才是不是特意把座位号拍进去了？」"
        },
        {
          "speaker": "lin",
          "text": "「这是为了防止你记错座位，在车厢里乱窜。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「出发安排说完了。最后三天纪律：不开新范围，不刷整套模拟。只看错因、星图和提醒卡片。」",
          "focus": "xia",
          "clear": true,
          "show": [
            {
              "id": "xia",
              "img": "seniorSmile",
              "pos": "left"
            },
            {
              "id": "lin",
              "img": "linNeutral",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「学姐，那能带多少资料上车？」"
        },
        {
          "speaker": "xia",
          "text": "「一个标准文件夹。超过两厘米厚，我现场给你撕了。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「一个？可是历年真题和观测数据的补充表……」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「林澈，收起你那种看异端一样的眼神。你是去参加决赛，不是去天津开天文资料展览会。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "我们在桌上摊开所有的复习资料。我的那一摞里全是“也许能撞上”的偏题，林澈的那一摞里全是“万一考到就死定了”的星表。看着不一样，其实全都是火力不足恐惧症。"
        },
        {
          "speaker": "zhou",
          "text": "「这张表你已经倒背如流了，别带了。」"
        },
        {
          "speaker": "lin",
          "text": "「车上还可以再复习一遍。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你昨天才说的，车上只看错因，绝对不碰新题或机械记忆的东西。你这不是在复习，你是在试图用厚度给自己找安全感。」"
        },
        {
          "speaker": "narrator",
          "text": "她盯着那张表看了很久，最后指关节松开，把它扔进了“不带”的废纸堆里。"
        },
        {
          "speaker": "lin",
          "text": "「那你这三张卷子也不能带。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "zhou",
          "text": "「凭什么？这上面的题型很经典！」"
        },
        {
          "speaker": "lin",
          "text": "「你已经把它们整理成『限时早停』的模板卡片了。带原题，你绝对会在高铁上忍不住重新算一遍。如果算卡壳了，你的心态在进考场前就会直接崩溃。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「……林老师，你是不是在我脑子里装了监控？」"
        },
        {
          "speaker": "narrator",
          "text": "最后，我们居然真的把小山一样的资料，删成了不到二十页的精华。留下来的全是我们这几周被按在地上摩擦的血泪史：问号区法则、单位提醒小三角、星图速记卡，还有那十二张硬核防翻车卡片。"
        },
        {
          "speaker": "lin",
          "text": "「好像……够了。」",
          "focus": "lin",
          "img": "linSmile"
        },
        {
          "speaker": "zhou",
          "text": "「听你嘴里说出『够了』这两个字，真是不容易。我都怕你今晚半夜潜回教室把废纸篓偷走。」"
        },
        {
          "speaker": "narrator",
          "text": "最后一次校内集合解散。夏南星把纸质的高铁票发到了我们手里。"
        },
        {
          "speaker": "xia",
          "text": "「明早七点二十，火车站南广场集合。谁迟到一分钟，我就把他的准考证当场烧了。听懂没？」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「学姐，你这个威胁很有创意。」"
        },
        {
          "speaker": "lin",
          "text": "「我会提前十五分钟到。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「十五分钟可以。但不许提前一小时去火车站广场上吹冷风焦虑。回家睡觉！」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "校门外的路灯亮了。"
        },
        {
          "speaker": "lin",
          "text": "「周行。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「怎么了？」"
        },
        {
          "speaker": "lin",
          "text": "「明天在高铁上，如果我没忍住想要翻看那些没带的星历表，你必须制止我。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "zhou",
          "text": "「那如果我想拿草稿纸出来硬算综合题呢？」"
        },
        {
          "speaker": "lin",
          "text": "「我会直接抢走你的笔。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「成交。互相监督。」"
        },
        {
          "speaker": "narrator",
          "text": "我把行李随便塞进书包。校服、洗漱包、准考证、身份证，还有那个薄得可怜的文件夹。一切准备就绪后，手机震动了一下。",
          "bg": "homeNight",
          "clear": true,
          "show": []
        },
        {
          "speaker": "lin",
          "text": "消息：[图片] 行李确认完毕。资料二十页。防低血糖水果糖三颗。",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "narrator",
          "text": "图片里是她整理得如同强迫症发作一样的书包外侧袋。"
        },
        {
          "speaker": "zhou",
          "text": "消息：收到。我带了肉松面包，保证饿不死。"
        },
        {
          "speaker": "lin",
          "text": "消息：明早七点零五分，南广场见。不要迟到。",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "消息：我说过了，我不会迟到。你可以去睡觉了，别再反复检查那个文件袋了。"
        },
        {
          "speaker": "lin",
          "text": "消息：……你怎么知道我还在检查？",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "消息：因为我也刚把拉链拉开确认了第三遍。强制关机吧。"
        },
        {
          "speaker": "lin",
          "text": "消息：晚安。",
          "focus": "lin",
          "img": "linSmile"
        },
        {
          "speaker": "narrator",
          "text": "我把手机反扣在书桌上，关掉了台灯。初赛通过那天，我们只是拿到了资格。但现在，看着书包里那两张紧挨着的08A和08B的车票，我知道，真正的战场，明天才刚刚开始。"
        }
      ]
    }
  ]
}
```
