# Chapter 2 正式台词草稿：雨线和误差

说明：本稿已按用户提供的 `第二章.json` 接入主脚本。`stage` 与 `sourceLine` 为外部批注字段，未进入运行脚本；运行脚本保留 bg、show、focus、choice、effects、insert 等游戏字段。

```json
{
  "id": "ch2",
  "title": "第二章：雨线和误差",
  "sections": [
    {
      "id": "ch2-s1",
      "title": "顾望舒的红笔",
      "lines": [
        {
          "bg": "libraryRain",
          "clear": true,
          "speaker": "system",
          "text": "第二章：雨线和误差"
        },
        {
          "speaker": "narrator",
          "text": "我们还没来得及对答案，一个女生拉开对面的椅子坐下了。她校服外套的袖口湿了一片，但手里拍在桌上的透明文件夹却滴水不沾，里面的卷子边角对得严丝合缝。",
          "clear": true,
          "show": [
            {
              "id": "wangshu",
              "img": "wangshuNeutral",
              "pos": "center"
            }
          ]
        },
        {
          "speaker": "xia",
          "text": "「顾望舒，附中那边的。去年省队候补，今年几套模拟卷的分数没下过前三。今天来跟我们对题库。」",
          "focus": "xia",
          "clear": true,
          "show": [
            {
              "id": "xia",
              "img": "seniorSmile",
              "pos": "left"
            },
            {
              "id": "wangshu",
              "img": "wangshuNeutral",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「学姐，你这介绍简直是公开处刑的前奏。」"
        },
        {
          "speaker": "wangshu",
          "text": "「第十七题，谁写了？」",
          "focus": "wangshu"
        },
        {
          "speaker": "zhou",
          "text": "「我写了个大题的『解』，严格来说，这道题在我的卷面上还不具备生命体征。」"
        },
        {
          "speaker": "lin",
          "text": "「我推到了半长轴那一步，后面时间到了。」",
          "focus": "lin",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linNeutral",
              "pos": "left"
            },
            {
              "id": "wangshu",
              "img": "wangshuNeutral",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "wangshu",
          "text": "「这题官方给的标准答案是错的。」",
          "focus": "wangshu"
        },
        {
          "speaker": "zhou",
          "text": "「答案错了？那我这波全空着岂不是完美避险？」"
        },
        {
          "speaker": "wangshu",
          "text": "「别做梦了，你空着单纯是因为你不会。」",
          "focus": "wangshu"
        },
        {
          "speaker": "lin",
          "text": "「错在哪里？近似条件？」",
          "focus": "lin"
        },
        {
          "speaker": "wangshu",
          "text": "「对。题干没给偏心率 $e$ 的具体量级。官方答案在做泰勒展开的时候，直接把二阶项 $O(e^2)$ 给扔了。」",
          "focus": "wangshu",
          "img": "wangshuSharp"
        },
        {
          "speaker": "zhou",
          "text": "「$e$ 是偏心率我知道……但扔个二阶项怎么就错了？」"
        },
        {
          "speaker": "wangshu",
          "text": "「如果选项 A 和 B 的间距很大，粗略近似当然没问题。但这题 C 和 D 的数值咬得很紧，你把 $O(e^2)$ 截断丢掉的误差，足够让你算出错误选项。CNAO 初赛确实很少考完整展开，但出题人经常在这个精度上挖坑。」",
          "focus": "wangshu"
        },
        {
          "speaker": "zhou",
          "text": "「靠，这种套个公式就能出结果的题，居然藏着泰勒展开的坑？」"
        },
        {
          "speaker": "wangshu",
          "text": "「越像能秒杀的熟题，死得越惨。」",
          "focus": "wangshu"
        },
        {
          "speaker": "narrator",
          "text": "桌面安静了两秒。林澈的视线落在自己那张写满分类的草稿纸上。她右手按在纸角，想把纸推过去，手指却僵了一下，指骨微微泛白。错题好拿，但这种写满纠结过程和错误思路的草稿，拿给满分选手看，等于直接扒底裤。",
          "show": [
            {
              "id": "lin",
              "img": "linAnxious",
              "pos": "left"
            },
            {
              "id": "wangshu",
              "img": "wangshuNeutral",
              "pos": "right"
            }
          ],
          "choice": [
            {
              "text": "先把自己的空白卷摊开。",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「别只看她的。我的第十七题也没比废纸强多少。」"
                },
                {
                  "speaker": "narrator",
                  "text": "我把空白那一页推到桌子中间。纸面干净得刺眼，连错都没来得及错。"
                },
                {
                  "speaker": "wangshu",
                  "focus": "wangshu",
                  "text": "「空白也要标原因。不会、来不及、还是看错题意，三种处理方式不一样。」"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「那先标原因。别直接跳到自责。」"
                }
              ]
            },
            {
              "text": "让林澈先把草稿递出去。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「给她看吧。反正顾望舒要挑错，藏着也不会少错一行。」"
                },
                {
                  "img": "linAnxious",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「你说得很难听。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「但比一直攥着纸角强。」"
                },
                {
                  "speaker": "narrator",
                  "text": "林澈看了我一眼，手指松开了一点。那张写满分类的草稿纸终于滑到了桌子中央。"
                }
              ]
            }
          ]
        },
        {
          "speaker": "lin",
          "text": "「第十四题。我标了『条件不完整』。你帮我看一眼，这到底是近似条件误判，还是我没读懂它的观测前提？」",
          "focus": "lin"
        },
        {
          "speaker": "wangshu",
          "text": "「混合型错误。你前面卡住，是因为没判断出这题考的是坐标转换而不是仪器误差。这题其实只用一阶近似就够了。」",
          "focus": "wangshu"
        },
        {
          "speaker": "lin",
          "text": "「……那我这分类该写哪个？」",
          "focus": "lin"
        },
        {
          "speaker": "wangshu",
          "text": "「考场上没空让你搞学术研究。看不透出题人意图就直接标待复核，跳。晚上回去再慢慢拆它的误差项。题库整理不是为了出一本完美无缺的出版物。」",
          "focus": "wangshu"
        },
        {
          "speaker": "lin",
          "text": "「知道了。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你刚才把纸推过去的时候，表情像要去炸碉堡。」"
        },
        {
          "speaker": "lin",
          "text": "「闭嘴。把你的空白卷拿出来标 $O(e^2)$。」",
          "focus": "lin"
        },
        {
          "speaker": "wangshu",
          "text": "「行了。明天午休换附中的题库，地点你们定。每组交五道题，附上断点和错因。别在便签上写『欢迎挑错』这种废话，交过来的东西我默认你们已经查过底线了。」",
          "focus": "wangshu"
        },
        {
          "speaker": "zhou",
          "text": "「附中的人平时连呼吸都这么高压吗……」"
        },
        {
          "speaker": "narrator",
          "text": "顾望舒雷厉风行地收起东西，红笔的笔尖还在卷面上留下一道浅浅的凹痕。那道关于 $O(e^2)$ 的推导此刻正张牙舞爪地摆在我们面前。要么自己硬啃下来，要么就顺着顾望舒指出的坑直接跳过。"
        }
      ]
    },
    {
      "id": "ch2-s2",
      "title": "题库交换",
      "lines": [
        {
          "speaker": "narrator",
          "text": "第二天午休，我们班教室里全是饭菜的油烟味。我把不锈钢饭盒推到课桌左上角，右边硬生生腾出一块干净的地方摊开错题本。为了防止油渍溅上去，我连夹个鸡腿都小心翼翼。",
          "bg": "classroom",
          "clear": true,
          "transition": {
            "title": "第二天 午休",
            "subtitle": "题库交换"
          }
        },
        {
          "speaker": "chen",
          "text": "「你现在吃饭都得拿卷子下饭了？看着上面那些天书你不反胃吗？」",
          "focus": "chen",
          "clear": true,
          "show": [
            {
              "id": "chen",
              "img": "chenNeutral",
              "pos": "center"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「少废话。我这叫争分夺秒。」"
        },
        {
          "speaker": "chen",
          "text": "「得，林澈同学又来空投题库了。你们这学术辐射圈太强，我去走廊吃。」",
          "focus": "chen"
        },
        {
          "speaker": "narrator",
          "text": "陈砚脚底抹油溜了。林澈把自己的饭盒放在一边，解开那个鼓鼓囊囊的透明文件夹，抽出几张打印纸。",
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
          "speaker": "narrator",
          "text": "文件夹封面贴着张黄色的便签，最上面写着『附中题库第一批』。下面那行『未完全校对』，被她用浅灰色的中性笔来回描了好几遍，纸面都快被划破了。"
        },
        {
          "speaker": "zhou",
          "text": "「你这字描得这么深，是怕顾望舒看不见，还是怕她看见？」"
        },
        {
          "speaker": "lin",
          "text": "「怕她直接拿着红笔在这页上批注。」",
          "focus": "lin",
          "img": "linThinking"
        },
        {
          "speaker": "zhou",
          "text": "「你眼底都有黑眼圈了。昨晚到底几点睡的？」"
        },
        {
          "speaker": "lin",
          "text": "「十一点四十。不算太晚。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「十一点四十？就为了纠结这道题到底是『近似条件误判』还是『观测前提缺失』，你硬生生熬了快一个小时？」"
        },
        {
          "speaker": "lin",
          "text": "「不分清楚的话，这套题交过去就是一团烂账。顾望舒昨天说的『待复核』，我看着难受。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "zhou",
          "text": "「大姐，你真以为自己是数据库啊？遇到不确定就死卡。你这叫过度强迫症。」"
        },
        {
          "speaker": "lin",
          "text": "「别在我的原稿上乱画！」",
          "focus": "lin",
          "img": "linPout"
        },
        {
          "speaker": "narrator",
          "text": "她用修正带把周行画的勾狠狠盖住，然后毫不客气地伸手把我错题本上的标题『万能模板』四个字直接划成一团黑泥。"
        },
        {
          "speaker": "lin",
          "text": "「世界上没有万能模板。只要条件一换，你的万能就是送命。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「行，临时模板。先圈显式条件，再标默认近似，先算主项，复盘再补误差。这总行了吧？」"
        },
        {
          "speaker": "lin",
          "text": "「还要加一句：限时版不准跳无关步骤。」",
          "focus": "lin",
          "choice": [
            {
              "text": "把模板压成限时版。",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「那就写两栏。限时版一栏，复盘版一栏。考试先活下来，晚上再赎罪。」"
                },
                {
                  "img": "linThinking",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「‘赎罪’不严谨。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「那叫误差补偿。听起来科学一点。」"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「可以。限时版必须标省略项。」"
                }
              ]
            },
            {
              "text": "先护住林澈的原稿。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「我不画了。原稿你留着，我另起一页写考试版。」"
                },
                {
                  "img": "linAnxious",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「你刚才已经画了。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「所以现在止损。你不是最喜欢这个词吗？」"
                },
                {
                  "speaker": "narrator",
                  "text": "她把修正带收回去，还是皱着眉，但没再把我的标题划第二遍。"
                }
              ]
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「复盘不代表要把一整页纸的废话重新推一遍啊！考试时间本来就不够。」"
        },
        {
          "speaker": "lin",
          "text": "「不推完整，你下次还是会漏。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "我们正为要不要重写公式吵得不可开交，前排的同学突然转过头，手里拿着张报纸。"
        },
        {
          "speaker": "classmate",
          "text": "「周行，你们这卷子上怎么满篇都是『偏心率』？这词儿听着挺适合形容你最近这疯魔状态的啊。」"
        },
        {
          "speaker": "lin",
          "text": "「偏心率是描述圆锥曲线形状的几何参数，$e = c/a$。不能用来形容人类的精神状态。」",
          "focus": "lin"
        },
        {
          "speaker": "classmate",
          "text": "「……哦，打扰了，学霸们继续。」"
        },
        {
          "speaker": "narrator",
          "text": "那同学灰溜溜地转回去了。我憋笑憋得差点被米饭呛到。"
        },
        {
          "speaker": "lin",
          "text": "「你笑什么？我刚才解释错了吗？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「没，解释得非常精准。他这辈子都不会忘掉 $e = c/a$ 了。」"
        },
        {
          "speaker": "xia",
          "text": "「别笑了，进度。题库整理完没？午休快结束了。」",
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
          "text": "「她为了一个分类，昨晚磕到十一点四十。目前还有一道题挂着『待复核』。」"
        },
        {
          "speaker": "xia",
          "text": "「林澈，今晚十一点前必须睡觉。哪怕这题的分类写的是『未知外星语』你也得给我睡。周行，你负责在微信上轰炸她睡觉。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「我不需要……」",
          "focus": "lin"
        },
        {
          "speaker": "wangshu",
          "text": "「时间到。」",
          "focus": "wangshu",
          "clear": true,
          "show": [
            {
              "id": "wangshu",
              "img": "wangshuNeutral",
              "pos": "center"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "顾望舒不知道什么时候出现的。她那支标志性的红笔就别在文件夹的封口处。她连看都没看便签上那行极小的字，直接把另一叠订好的A4纸拍在我们桌上。"
        },
        {
          "speaker": "wangshu",
          "text": "「附中第二批，五道题。第一题和第三题，我故意保留了两种完全不同的解法。其中一种的近似条件是错的。」",
          "focus": "wangshu",
          "img": "wangshuSharp"
        },
        {
          "speaker": "zhou",
          "text": "「你这是交换题库还是投放地雷？」"
        },
        {
          "speaker": "wangshu",
          "text": "「考场上没人会告诉你哪条路是死胡同。找不出那个被藏起来的误差项，这两道题你们就全错。」",
          "focus": "wangshu"
        },
        {
          "speaker": "narrator",
          "text": "顾望舒扔下这颗炸弹，干脆利落地走人。"
        },
        {
          "speaker": "narrator",
          "text": "周围的同学已经开始陆续趴下睡觉了。林澈默默打开自己的饭盒，里面打了包的青菜已经彻底变黄，米饭也凝成了一坨。她盯着饭盒看了一会儿，没有动筷子。"
        },
        {
          "speaker": "zhou",
          "text": "「陈砚早上多买的，还没开封，常温的。食堂这会儿全剩残羹冷炙了，你拿这个垫一下。」"
        },
        {
          "speaker": "lin",
          "text": "「……你呢？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「我喝水就行。赶紧拿着，等会儿打预备铃了。」"
        },
        {
          "speaker": "lin",
          "text": "「……谢谢。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "她没再说那些“保护进度”之类的废话。只是在喝豆浆之前，她默默拔开笔帽，在我那页被改得面目全非的『临时模板』旁边，极其认真地补上了一行小字：（限时执行优先）。",
          "img": "linNeutral"
        },
        {
          "speaker": "narrator",
          "text": "在这个连呼吸都觉得浪费时间的午休，看着那几个字，我突然觉得那些被附中题库支配的窒息感，似乎也稍微透进了一点气。"
        }
      ]
    },
    {
      "id": "ch2-s3",
      "title": "第一次争执",
      "lines": [
        {
          "speaker": "narrator",
          "text": "雨下到第三天，整个学校像泡在温水里一样发霉。物理作业本的边角受潮卷了起来，教室后排那扇关不严的铝合金窗户被风吹得哐当直响。",
          "bg": "libraryRain",
          "clear": true,
          "transition": {
            "title": "雨下到第三天",
            "subtitle": "第一次争执"
          }
        },
        {
          "speaker": "narrator",
          "text": "下午最后一节课，数学老师敲着黑板宣布下周周测范围时，我脑子里绷着的那根弦终于“咔”地断了。初赛还有不到一个月，月考、作业、再加上附中那种变态级别的题库全挤在一起，时间根本不够分。"
        },
        {
          "speaker": "narrator",
          "text": "放学后去了图书馆。顾望舒发来了第一批题库的批改反馈。入眼就是一片刺目的红字，其中一条直戳林澈的软肋：“近似条件标注不足，限时策略可保留，但需说明误差量级风险。”"
        },
        {
          "speaker": "lin",
          "text": "「她批得对。我们那题确实没写清楚误差来源。」",
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
          "speaker": "zhou",
          "text": "「你能不能偶尔站在我们这边？她随便写句评语，你又要去重推一遍？」"
        },
        {
          "speaker": "lin",
          "text": "「我站在物理规律这边。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "走廊里人来人往，我们谁都没再说话。她走在我前面半级台阶，脚步比平时快，像被顾望舒的红笔一路追杀。"
        },
        {
          "speaker": "narrator",
          "text": "附中第二批题库劈头盖脸地砸下来。第一道天体测量题，题干里只给了一句“存在微小角偏移”。林澈看到这几个字，立刻停了笔，翻出她那张写得密密麻麻的补充表。我看着她慢吞吞查表的动作，无名火直接窜了上来。"
        },
        {
          "speaker": "zhou",
          "text": "「这题直接按限时版走吧。选项 A 和 C 差了十万八千里，主项算出来就能蒙对。」"
        },
        {
          "speaker": "lin",
          "text": "「选项差距大也不能乱用。题干没给具体角度，$\\sin \\theta \\approx \\theta$ 的前提是 $\\theta$ 必须用弧度制，而且它省掉了二阶泰勒展开后 $O(\\theta^3)$ 的高阶项。如果不估算精度直接丢，这叫瞎蒙。」",
          "focus": "lin",
          "img": "linThinking"
        },
        {
          "speaker": "zhou",
          "text": "「这他妈是初赛的选择题！不是让你去写分析力学论文！要是每道题都把高阶项补齐，这套卷子今天做到闭馆也做不完！」"
        },
        {
          "speaker": "lin",
          "text": "「不标条件，你就会以为自己真的懂了。那是在骗自己。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "narrator",
          "text": "这句话像一根针一样狠狠扎进了我的神经。连日来的焦虑、被附中碾压的自卑，在这个瞬间全变成了带刺的防御机制。"
        },
        {
          "speaker": "zhou",
          "text": "「那你觉得怎么才叫不骗自己？每道题都推导到顾望舒也挑不出毛病？你每次都这样，遇到点不确定就原地死磕。你这不是严谨，你就是怕错！你怕一旦跳了步骤，就暴露出你其实根本没把握！」"
        },
        {
          "speaker": "narrator",
          "text": "话一出口，我就知道自己犯了浑。林澈没有像往常那样冷冰冰地反驳我。她整个人往后退了半寸，像被烫到一样缩回手。",
          "choice": [
            {
              "text": "立刻把话收回来。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「不对，这句过了。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「我不是想说你怕错。我是急。急得开始乱咬人。」"
                },
                {
                  "img": "linAnxious",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「……你刚才确实像在咬人。」"
                },
                {
                  "speaker": "narrator",
                  "text": "她没有原谅，也没有继续反击。只是那根被我扯紧的线，没有在这一秒彻底断掉。"
                }
              ]
            },
            {
              "text": "先把卷子做完。",
              "effects": {
                "discipline": 1,
                "trust": -1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「算了，先做题。闭馆前至少把这一页推完。」"
                },
                {
                  "img": "linAnxious",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「可以。按你说的走。」"
                },
                {
                  "speaker": "narrator",
                  "text": "她答应得太快。我明明赢了进度，却觉得桌面一下空了一块。"
                }
              ]
            }
          ]
        },
        {
          "speaker": "lin",
          "text": "「……你说得挺直接。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「我不是那个意思……」"
        },
        {
          "speaker": "lin",
          "text": "「没事。先做题吧。不是说时间不够吗？按你说的走。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "她没有摔笔，没有发火，只是把所有的坚持和问号全藏了回去。这种压抑的顺从比直接扇我一巴掌还让我难受。"
        },
        {
          "speaker": "xia",
          "text": "「停笔。你们俩现在的状态，写出来的东西也是一坨垃圾。」",
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
          "text": "「学姐，我们在讨论做题策略……」"
        },
        {
          "speaker": "xia",
          "text": "「策略？把对方的焦虑当成靶子打，这叫策略？林澈死抠细节，因为怕一步错步步错；你周行急着跳步骤，因为怕被附中的人当成废物甩开。你们俩把自己的恐慌扔给对方，挺能耐啊？」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "夏南星的话糙得像砂纸，却把我们那点不堪的伪装刮得一干二净。"
        },
        {
          "speaker": "zhou",
          "text": "「刚才那句『你怕错』是我犯浑。我确实是急了，我想赶紧把分拿满，证明我们没被甩下。」",
          "img": "linAnxious"
        },
        {
          "speaker": "lin",
          "text": "「……我也有问题。我一直逼你查条件，其实是因为我不敢承担跳步骤带来的失控感。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「行了，少在这儿伤春悲秋。规矩我来定：限时训练，允许用近似，但省略处必须标出 $O(\\theta^3)$ 这种误差项留给复盘。现在，卡条件的时间上限，你们自己定一个。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「三分钟。超了就强制后置。」"
        },
        {
          "speaker": "lin",
          "text": "「五分钟。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「四分钟。」"
        },
        {
          "speaker": "lin",
          "text": "「四分半。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「行，四分半。以后我跳得太快，你骂我；你卡得太久，我拦你。」"
        },
        {
          "speaker": "narrator",
          "text": "林澈重新翻开那张补充表，在题号旁边用红笔写下『小角近似，限时标 $O(\\theta^3)$』。第一次争执没有变成什么温柔回忆，那根刺依然扎在那里，但至少我们给它贴上了安全标签。"
        }
      ]
    },
    {
      "id": "ch2-s4",
      "title": "雨停前的约定",
      "lines": [
        {
          "speaker": "narrator",
          "text": "图书馆闭馆前十分钟的广播响了。窗外的暴雨终于小了一点，变成淅淅沥沥的水线，教学楼的轮廓慢慢从灰白色的水雾里显出来。",
          "bg": "libraryRain",
          "clear": true,
          "transition": {
            "title": "闭馆前",
            "subtitle": "雨停前的约定"
          }
        },
        {
          "speaker": "narrator",
          "text": "桌上的台灯照着那一堆乱七八糟的错题和限时卷。林澈正在把试卷按题号一张张收进文件夹，动作比平时慢得多。她没看我，那道我们刚刚吵过架的题，被她单独夹在错题本的第一页。"
        },
        {
          "speaker": "zhou",
          "text": "「……东门那边地势低，刚才雨下那么大肯定有积水。你等会儿回宿舍走西门吧。」",
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
          "speaker": "lin",
          "text": "「西门在铺管道施工，有泥浆。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「林澈。刚才……那句『你怕错』，是我脑子抽了。」"
        },
        {
          "speaker": "lin",
          "text": "「……」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「我不该那么吼你。我当时看着时间一分一秒没，脑子全乱了。看你慢条斯理地查条件，我就……想让你闭嘴。」"
        },
        {
          "speaker": "narrator",
          "text": "把“想让你闭嘴”这几个字坦白出来，我自己都觉得难听得刺耳。"
        },
        {
          "speaker": "lin",
          "text": "「我听出来了。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「对不起。」",
          "img": "linAnxious"
        },
        {
          "speaker": "lin",
          "text": "「我也有病。我不敢跳步骤，是因为我知道自己没那么聪明。顾望舒随便一句话就能把我的分类推翻，如果不把条件死死攥在手里，我怕我连自己到底会不会都分不清。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "zhou",
          "text": "「你平时……看着不像没底气的样子啊。」"
        },
        {
          "speaker": "lin",
          "text": "「装的。因为不想被你们，被附中的人当成拖后腿的。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "图书馆的冷光灯打在她脸上。她没有哭，也没有委屈得掉眼泪，只是一种被高压题海和自卑感榨干了的疲惫。那种累我太熟了——就像一道大题死磕了三页草稿纸，却发现第一步的方向就是错的。"
        },
        {
          "speaker": "xia",
          "text": "「快点收拾。管理员已经拿着钥匙在瞪我们了。你们俩要是还没吵完，去操场上淋着雨继续。」",
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
          "text": "「吵完了学姐。我们在进行战术复盘。」"
        },
        {
          "speaker": "xia",
          "text": "「复盘得出什么结论了？是周行以后瞎代公式，还是林澈继续和条件同归于尽？」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「结论是这个。」",
          "focus": "lin",
          "img": "linNeutral"
        },
        {
          "speaker": "narrator",
          "text": "那是她的近似条件整理表。但在最上面，用红笔重重加了一行字：【限时必须标出省略项（如 $O(\\theta^3)$），复盘死磕。卡题超4.5分钟，强制后置。】"
        },
        {
          "speaker": "zhou",
          "text": "「这算操作说明书？」"
        },
        {
          "speaker": "lin",
          "text": "「算止损协议。如果你以后跳步不标误差，我还是会骂你。」",
          "focus": "lin",
          "img": "linThinking"
        },
        {
          "speaker": "zhou",
          "text": "「行。那你以后卡在条件上超过四分半，我直接拿红笔划掉你的题号，你不许翻脸。」"
        },
        {
          "speaker": "lin",
          "text": "「……四分半。一秒都不能少。」",
          "focus": "lin",
          "img": "linNeutral"
        },
        {
          "speaker": "narrator",
          "text": "走出图书馆时，地面湿漉漉的，冷风一吹，我冻得打了个寒颤。"
        },
        {
          "speaker": "lin",
          "text": "「豆浆钱微信转你了。」",
          "focus": "lin",
          "bg": "schoolBuildingEntranceNight",
          "clear": true
        },
        {
          "speaker": "zhou",
          "text": "「你非要在刚吵完架、刚达成和解的时候，把账算得这么清吗？」"
        },
        {
          "speaker": "lin",
          "text": "「欠着会忘。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「那你明天请我吃颗薄荷糖吧。当利息。」"
        },
        {
          "speaker": "lin",
          "text": "「薄荷糖的物价和豆浆不等价。你数学怎么学的？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「加上精神损失费总够了吧。」"
        },
        {
          "speaker": "narrator",
          "text": "林澈终于极轻地笑了一下。不是天台上那种敷衍的短笑，这次在她的眼底停留了大概两秒钟。",
          "img": "linSmile"
        },
        {
          "speaker": "lin",
          "text": "「明天见。别忘了复盘你的第六题。」",
          "focus": "lin",
          "img": "linNeutral"
        },
        {
          "speaker": "zhou",
          "text": "「明天见。进度管理员。」"
        },
        {
          "speaker": "narrator",
          "text": "雨后的空气透着一股发凉的泥土味。我把错题本紧紧护在校服外套里，里面夹着那张写满 $O(e^2)$ 和四分半后置的纸。没有热血沸腾的口号，也没有谁拯救谁的感动。对我们这种被初赛倒计时逼在悬崖边上的人来说，一份干巴巴的、能防止双双崩盘的“操作说明”，已经足够救命了。"
        }
      ]
    }
  ]
}
```
