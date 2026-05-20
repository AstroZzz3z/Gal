# Chapter 3 正式台词草稿：初赛倒计时

说明：本稿已按用户提供的 `第三章.json` 接入主脚本。`stage` 与 `sourceLine` 为外部批注字段，未进入运行脚本；运行脚本保留 bg、show、focus、choice、effects、insert 等游戏字段。

```json
{
  "id": "ch3",
  "title": "第三章：初赛倒计时",
  "sections": [
    {
      "id": "ch3-s1",
      "title": "三十天计划",
      "lines": [
        {
          "bg": "clubRoomEvening",
          "clear": true,
          "speaker": "system",
          "text": "第三章：初赛倒计时"
        },
        {
          "speaker": "narrator",
          "text": "距离 CNAO 初赛还有三十天。夏南星拿着满是黑色碎屑的板擦，在白板上狠狠擦拉了三遍。上周限时卷那惨不忍睹的平均分被强行抹掉，换上了一张用红色马克笔画的、密密麻麻的冲刺排期表。",
          "transition": {
            "title": "三十天倒计时",
            "subtitle": "三十天计划"
          }
        },
        {
          "speaker": "xia",
          "text": "「温水煮青蛙的阶段结束了。从今天开始是倒计时压迫训练。跟不上的，自己填退部申请。」",
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
              "img": "linTired",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "narrator",
          "text": "排期表刚画完，陈砚抱着个篮球从后门探进半个身子。他本来是来借打气筒的，看了一眼白板，表情瞬间像误闯了某个邪教传销现场。"
        },
        {
          "speaker": "chen",
          "text": "「我现在退出去还来得及吗？这白板看着不像天文社，像物理组的催命符。」",
          "focus": "chen"
        },
        {
          "speaker": "xia",
          "text": "「来得及。把球放下，顺手把那箱历年真题给我搬到桌上。」",
          "focus": "xia"
        },
        {
          "speaker": "chen",
          "text": "「社长！我只是个路过的普通人，不是来加入你们这支省队敢死队的！」",
          "focus": "chen"
        },
        {
          "speaker": "zhou",
          "text": "「放心，敢死队名额满了。我和林澈现在是被绑在同一根绳上的蚂蚱。」"
        },
        {
          "speaker": "lin",
          "text": "「把『敢死』两个字去掉。只要时间分配精确，这就只是高强度重复劳动。」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「那这格为什么是用红笔涂满的？这看着像打游戏前的高危 Boss 预警。」",
          "focus": "chen"
        },
        {
          "speaker": "zhou",
          "text": "「它确实是 Boss。掉落物是满纸的红叉和无尽的羞辱感。」"
        },
        {
          "speaker": "lin",
          "text": "「限时卷只是测量工具，用来测你哪里的基础还在漏水。」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「林同学，你现在说话的语气，比这块白板还吓人。」",
          "focus": "chen"
        },
        {
          "speaker": "narrator",
          "text": "林澈没理他，把整理好的错题模板往我桌角推了推。紧接着，一个压扁的独立包装小面包也被她粗暴地甩了过来，精准地砸在我的草稿纸上。"
        },
        {
          "speaker": "zhou",
          "text": "「这也是测量工具？」"
        },
        {
          "speaker": "lin",
          "text": "「你晚自习前在座位上死磕了四十分钟的星历表推算，根本没去食堂。空腹做这种高强度计算，血糖一低你连儒略日的加减都会算错。吃掉。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你这种提供后勤保障的方式，真的很像长官在给填线步兵发口粮。」"
        },
        {
          "speaker": "xia",
          "text": "「填线步兵赶紧吃。陈砚带着你的球滚蛋，别让它砸到赤道仪的脚架。现在复盘。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "夏南星从包里抽出一本边角已经翻毛的旧错题本，直接翻到中间的一页，拍在桌子上。"
        },
        {
          "speaker": "xia",
          "text": "「我高二第一次考省赛，把儒略日转换里那半天的偏移量给忘了，导致整道天体位置推算题差了十二个小时，直接零分。那道题的数字我到现在都能背下来。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「社长你也会在这种基础转换上翻车？」"
        },
        {
          "speaker": "xia",
          "text": "「废话，我又不是吞了星表长大的。人在高压下脑子就是会短路。你们现在不是不够聪明，是缺少『慢一秒』的余量。每天把自己逼到极限，上了考场一慌就全碎了。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "林澈的笔尖停顿了一下。她盯着夏南星那页用红笔画了巨大叉号的错题，眼神微微闪烁。"
        },
        {
          "speaker": "lin",
          "text": "「如果不逼紧一点，把每一秒都填满……在限时卷里根本做不完。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "xia",
          "text": "「做不完就学会扔！明天开始，做套卷前十分钟只干三件事：扫题、标地雷坑、划定放弃止损线。谁要是再敢拿到卷子就闷头从第一题死算，我就把他顺着窗户扔出去。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "散场时，窗外的操场只剩几盏昏黄的钠灯。楼下有体育生在练折返跑，胶鞋摩擦塑胶跑道的声音沉闷而单调。"
        },
        {
          "speaker": "lin",
          "text": "「明早读前，我抽查你的星图。你可以顺便查我的错因分类。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「『重点：南天星图，船底座与船帆座』……你这是早有预谋吧？」"
        },
        {
          "speaker": "lin",
          "text": "「你上周限时卷在这两个星座上把赤经顺序搞反了两次。古代虽然叫南船座，但现在分开了，你再混用就是送分。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「林老师，能不提具体死因吗？」"
        },
        {
          "speaker": "lin",
          "text": "「不想被提，明天就别错。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「行。那我明早带两人份的包子。为了防止有人低血糖算错儒略日。」"
        },
        {
          "speaker": "lin",
          "text": "「……不要豆浆，放桌上容易碰洒。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "林澈快步走出教室。我收拾资料时，余光瞥见她那张训练表——原本被夏南星强行划掉的两格休息时间，又被她用极细的铅笔偷偷补上了新的计算任务。我捏着错题本，停住了动作。",
          "choice": [
            {
              "text": "提醒林澈调整休息。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「林澈，把你刚才偷偷用铅笔加回去的那两格任务擦了。你这不是在复习，你这是在自毁。」"
                },
                {
                  "speaker": "lin",
                  "text": "「放手。今天少算一组天体力学，明天限时卷的速度就会掉。」",
                  "focus": "lin",
                  "img": "linTired"
                },
                {
                  "speaker": "zhou",
                  "text": "「你今天就算熬到凌晨两点把它算完，明天早读查星图的时候你脑子也是一团浆糊。把『强制停机休息』也当成一个实验数据，行不行？」"
                },
                {
                  "speaker": "lin",
                  "text": "「……知道了。今晚只过错因，不碰新题。」",
                  "focus": "lin",
                  "img": "linTired"
                }
              ]
            },
            {
              "text": "继续按计划冲刺。",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「既然非要加练，我们把题量压缩。只做容易掉坑的高频题，低频题直接扔到周末。」"
                },
                {
                  "speaker": "lin",
                  "text": "「好。球面三角和星历表推算各留一道，必须带误差分析。」",
                  "focus": "lin",
                  "img": "linSmile"
                },
                {
                  "speaker": "zhou",
                  "text": "「真服了你了。先保证我们能活着走到初赛考场吧。」"
                },
                {
                  "speaker": "narrator",
                  "text": "我们一起走出实验楼。走廊里的感应灯依次亮起，夜风把她文件夹里露出的纸角吹得哗啦啦直响。三十天的倒计时不再是一个虚无的数字，而是实打实压在肩膀上的重量。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch3-s2",
      "title": "一次观测失败",
      "lines": [
        {
          "speaker": "narrator",
          "text": "周六傍晚，气象局预报说有个极短的“晴窗”。夏南星在群里甩了一句“滚上天台”，我们就去器材室做苦力了。",
          "bg": "rooftopCloudy",
          "clear": true,
          "transition": {
            "title": "周六傍晚",
            "subtitle": "一次观测失败"
          }
        },
        {
          "speaker": "xia",
          "text": "「别抱幻想，今晚云层极厚。目标：极轴粗调，确认两颗亮星坐标。什么都看不到就给我乖乖记录云底高度。」",
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
              "img": "linOutdoor",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "chen",
          "text": "「靠……这玩意儿是实心的吗？天文社招新是不是应该先测硬拉重量？」",
          "focus": "chen"
        },
        {
          "speaker": "xia",
          "text": "「少废话。这只是个轻型赤道仪，你应该庆幸我没让你们把那台重型 EQ6 还有 C9.25 的主镜筒扛上来。不然你现在已经断气了。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「今天低空气流极其紊乱。就算云散了，视宁度也会烂得像一锅粥。」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「林同学，你报丧的语气总是这么专业而冷酷。」",
          "focus": "chen"
        },
        {
          "speaker": "narrator",
          "text": "推开天台铁门，狂风差点把我的校服外套直接掀翻。城市底部的钠灯光害把低空的云层映成了一种恶心的暗红色。"
        },
        {
          "speaker": "lin",
          "text": "「夹住上下两端！风太大，纸吹飞了就白干了。还有，笔握紧，掉在地上这黑灯瞎火的根本找不着。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「知道。我绝对不会让它自由落体。」"
        },
        {
          "speaker": "lin",
          "text": "「别咬笔帽。你一遇到算不出来的题就喜欢咬笔帽，上次模拟考试那支笔的塑料壳都快被你咬碎了。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「……在这种冻死人的天台，我没心思吃塑料。」"
        },
        {
          "speaker": "narrator",
          "text": "我按照林澈给的坐标，艰难地拧动赤道仪的微调旋钮。寻星镜里除了大片泛着死灰色的云块，什么都没有。寒风像刀子一样刮在脸上，盯了十分钟空气，我心里的邪火越来越旺。"
        },
        {
          "speaker": "zhou",
          "text": "「这他妈能看见什么？除了云还是云。我们是在这儿练受冻抗性吗？」"
        },
        {
          "speaker": "lin",
          "text": "「观测题考的不只是星体坐标，还会考你为什么观测失败。大气的消光、视宁度恶化、光污染，这些都是考点。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「那直接编一个大角星的坐标不就行了？反正这鬼天气谁也查不出来。」"
        },
        {
          "speaker": "narrator",
          "text": "话说出口的瞬间我就想抽自己。"
        },
        {
          "speaker": "lin",
          "text": "「……数据可以编。但到了考场上，你遇到算不出来的题，也是直接编个答案假装自己懂了吗？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「……对不起。我脑子冻抽了。」"
        },
        {
          "speaker": "lin",
          "text": "「找不到就算了。但别骗自己。」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「林澈这句真可以当座右铭了。就是有点冻人。」",
          "focus": "chen"
        },
        {
          "speaker": "narrator",
          "text": "撤退收三脚架时，我的手指早就冻得僵硬麻木，死活按不下一根脚管的金属锁扣。"
        },
        {
          "speaker": "lin",
          "text": "「你手哆嗦成这样，别硬按，把螺丝滑丝了物理老师会杀了我们。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「没事，我能行……靠！」"
        },
        {
          "speaker": "lin",
          "text": "「拿着。把手捂热了再拧。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你哪来的这玩意儿？」"
        },
        {
          "speaker": "lin",
          "text": "「本来是垫在夹板下面防潮的。现在临时借你恢复神经末梢功能。」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「哦——原来暖宝宝是防潮用的，学到了学到了。」",
          "focus": "chen"
        },
        {
          "speaker": "lin",
          "text": "「陈砚，你去把最重的重锤给我提下去。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "陈砚哀嚎着跑去搬铁块了。我用僵硬的手指死死捏着那片发烫的暖宝宝，热意顺着掌心一点点蔓延上来。"
        },
        {
          "speaker": "zhou",
          "text": "「『风力过大，记录人员手部神经麻木导致操作失误』……你还真写进观测报告里了？！」"
        },
        {
          "speaker": "lin",
          "text": "「这是影响观测的客观物理因素。走了，下楼。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "厚重的云层依然把星空遮得严严实实，冷风还在刮。但攥着手里那片温度，这场极其失败的天台观测，似乎也没有想象中那么让人烦躁了。"
        }
      ]
    },
    {
      "id": "ch3-s3",
      "title": "初赛前夜",
      "lines": [
        {
          "speaker": "narrator",
          "text": "初赛前夜。社团教室没有开大灯，夏南星说强光会刺激交感神经，让人产生“我还能再刷三套卷子”的致命错觉。",
          "bg": "clubRoomNight",
          "clear": true,
          "transition": {
            "title": "初赛前夜",
            "subtitle": "楼梯间"
          }
        },
        {
          "speaker": "xia",
          "text": "「最后确认一遍。准考证、身份证原件、2B铅笔、黑色水笔两支、非编程科学计算器。没带齐的现在说，明天早上考场门口不接受任何借口，直接滚蛋。」",
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
              "img": "linTired",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「你那个便利贴都要被你戳破了。准考证长脚了也不会自己跑掉的。」"
        },
        {
          "speaker": "lin",
          "text": "「重复核对可以把遗漏的概率降到无限趋近于零。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「核对超过三遍，降低的就不是遗漏概率，是你今晚的睡眠质量。停手。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "就在这时，林澈放在桌角的手机震动了一下。屏幕上只弹出一条极短的消息预览：『明天别紧张，正常发挥就好。爸爸妈妈等你的好消息。』"
        },
        {
          "speaker": "zhou",
          "text": "「家里发的？」"
        },
        {
          "speaker": "lin",
          "text": "「……嗯。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「不想回可以不回。考前屏蔽外界期待也是战术之一。别在今晚搞什么表决心的小作文。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "社团教室安静得让人喘不过气。夏南星为了测试状态，随口抛出了几个天体力学的基础公式。前两个我磕磕绊绊接上了。"
        },
        {
          "speaker": "xia",
          "text": "「第三个。开普勒第三定律推导时，如果考虑双星系统的质量比，怎么处理近似？」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "林澈没有像往常一样秒答。"
        },
        {
          "speaker": "lin",
          "text": "「……」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "这一秒的停顿被无限拉长。任何人在考前一晚都会忘词，这很正常。但林澈的呼吸开始变浅、变急，她的手指无意识地抠着桌子边缘，指关节惨白。"
        },
        {
          "speaker": "zhou",
          "text": "「没事，先跳过。你今天脑子已经超载了……」"
        },
        {
          "speaker": "lin",
          "text": "「不应该跳过。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "narrator",
          "text": "她的声音在发抖。"
        },
        {
          "speaker": "lin",
          "text": "「……我去接水。水凉了。」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "zhou",
          "text": "「学姐……她这是怎么了？」"
        },
        {
          "speaker": "xia",
          "text": "「考前惊恐发作。她不是忘了公式，她是被『如果我明天在考场上也这样脑子空白』这个念头给吓崩了。去楼道看着她，别讲题，别说废话，就让她喘口气。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "我走到楼梯拐角。感应灯已经灭了，楼道里只有从气窗透进来的微弱路灯光，空气里弥漫着一股发酸的灰尘味。林澈靠在冰冷的水泥墙上，死死抱着那个保温杯，肩膀剧烈地颤抖着。",
          "bg": "stairwellNight",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linAnxious",
              "pos": "center"
            }
          ]
        },
        {
          "speaker": "lin",
          "text": "「如果明天考砸了……如果过不了初赛……」",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "lin",
          "text": "「……那这一个月算什么？我整理的那五本错题算什么？我为了这个比赛连月考都退了十几名……如果考不出结果，在他们眼里，我就只是个打着爱好的幌子在浪费时间的笑话。」",
          "focus": "lin",
          "img": "linSmile"
        },
        {
          "speaker": "zhou",
          "text": "「就算考砸了，错题本上的字又不会凭空消失。你骂我乱代公式的时候，逻辑可是相当严密的。」"
        },
        {
          "speaker": "lin",
          "text": "「那有什么用？没有成绩，所有过程都是狡辩。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「有用的。至少你把我从初赛分母的边缘拽回来了。」",
          "choice": [
            {
              "text": "陪她坐到冷静。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「其实我也怕得要死。我爸说我把稳定的路走窄了，我连反驳的底气都没有。如果明天我死在球面三角上，我大概会直接把卷子吃下去。」"
                },
                {
                  "speaker": "lin",
                  "text": "「……吃卷子是违规的。」",
                  "focus": "lin"
                },
                {
                  "speaker": "zhou",
                  "text": "「重点是这个吗？我的意思是，今天晚上，允许你觉得一切都没意义。允许你怕。」"
                },
                {
                  "speaker": "narrator",
                  "text": "感应灯亮了又灭。我就坐在离她不到半米的地方。没有说什么“都走到这一步了不能放弃”的鸡汤废话。十分钟后，她抱着保温杯的手指终于慢慢松开了，呼吸也恢复了正常的频率。"
                },
                {
                  "speaker": "lin",
                  "text": "「……走吧。回去把准考证收好。」",
                  "focus": "lin",
                  "img": "linSmile"
                },
                {
                  "speaker": "zhou",
                  "text": "「明天要是遇到不会的条件？」"
                },
                {
                  "speaker": "lin",
                  "text": "「标出误差，先算主项。四分半后置。」",
                  "focus": "lin"
                }
              ]
            },
            {
              "text": "说“都走到这里了不能放弃”。",
              "effects": {
                "discipline": 1,
                "trust": -1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「林澈，你清醒一点！我们熬了整整一个月，明天就是检验的时候，你现在崩溃有什么用？你准备得比任何人都充分，只要明天正常发挥，不可能过不了初赛！」"
                },
                {
                  "speaker": "lin",
                  "text": "「……知道了。」",
                  "focus": "lin",
                  "img": "linAnxious"
                },
                {
                  "speaker": "zhou",
                  "text": "「你别这样，考前状态很重……」"
                },
                {
                  "speaker": "lin",
                  "text": "「我说我知道了。先过初赛。刚才失态了，抱歉。」",
                  "focus": "lin",
                  "img": "linAnxious"
                },
                {
                  "speaker": "narrator",
                  "text": "她把保温杯的盖子拧得死紧，大步走回社团教室。感应灯在她头顶亮起，她的背影挺得笔直，像是重新套上了一层无懈可击的壳。但我知道，那股把她压垮的恐惧，只是被她强行咽下去了，甚至没有消化。"
                },
                {
                  "speaker": "narrator",
                  "text": "回到社团教室，夏南星什么都没问，利索地锁了资料柜，把我们赶出了教学楼。"
                },
                {
                  "speaker": "xia",
                  "text": "「明早七点二十校门口集合。迟到一分钟，自己滚去跑操场。今晚谁敢再看一眼错题本，我保证他在进考场前先体验一次颅骨粉碎。」",
                  "focus": "xia"
                },
                {
                  "speaker": "lin",
                  "text": "「……学姐明天见。」",
                  "focus": "lin"
                },
                {
                  "speaker": "narrator",
                  "text": "校门外很冷，路灯把我和林澈的影子拉得很长。我们谁都没再提刚才楼梯间里的崩溃。明天的初赛没有因为刚才的发泄而变得简单半分，但至少，那一页满是红叉的试卷，终于翻过去了。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch3-s4",
      "title": "初赛",
      "lines": [
        {
          "speaker": "narrator",
          "text": "初赛当天早上，七点二十的校门口冷得像冰窖。空气里全是油条摊的白烟和考生翻动复习资料的哗啦声。",
          "bg": "schoolGateMorning",
          "clear": true,
          "transition": {
            "title": "初赛当天",
            "subtitle": "考点"
          }
        },
        {
          "speaker": "xia",
          "text": "「最后两句话：扫全卷找地雷；卡题超四分半直接放弃。别在第一题就想证明你懂宇宙真理。」",
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
          "text": "「……如果第一题就不会呢？」"
        },
        {
          "speaker": "xia",
          "text": "「那就选 C，然后立刻看第二题。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「出了考场，绝对不要在校门口对答案。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你这句话是在警告我，还是警告你自己？」"
        },
        {
          "speaker": "lin",
          "text": "「都有。在出成绩之前，任何对答案的行为都是单方面精神自虐。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「进场。记住规则，别死磕。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "我们在教学楼大厅分流。林澈的考场在三楼，我在二楼。走到二楼楼梯口时，我回头看了一眼，她正快步走上转角，背影僵硬得像一块拉满弦的木板。"
        },
        {
          "speaker": "narrator",
          "text": "卷子发下来的瞬间，油墨的刺鼻气味直冲脑门。我强压下想要立刻动笔的冲动，按夏南星说的，花了两分钟扫视全卷。",
          "bg": "examRoom",
          "clear": true,
          "show": []
        },
        {
          "speaker": "narrator",
          "text": "第二道大题，时间系统转换。题干赫然印着『地方恒星时』。我脑子里轰的一声，习惯性地就想在旁边写下北京时间的换算公式。"
        },
        {
          "speaker": "zhou",
          "text": "（“这个条件不能省。先看题目到底给了什么！”）"
        },
        {
          "speaker": "narrator",
          "text": "林澈在自习室里用红笔敲桌子的声音，在这个死寂的考场里震耳欲聋。我手一抖，划掉了刚写下的一半公式。"
        },
        {
          "speaker": "zhou",
          "text": "（别慌。没有北京时间，直接用时角和赤经。别给自己挖坑。）"
        },
        {
          "speaker": "narrator",
          "text": "同一时间的另一间教室里。"
        },
        {
          "speaker": "narrator",
          "text": "题目要求估算伴星的摄动影响。她习惯性地在草稿纸上写下了完整的摄动函数，准备展开到二阶项。但就在她准备代入计算的瞬间，她瞥了一眼墙上的挂钟。还剩十二分钟。"
        },
        {
          "speaker": "lin",
          "text": "（如果展开到二阶项，至少需要十分钟。如果中间算错一个符号，整道题零分。）",
          "focus": "lin",
          "img": "linAnxious"
        },
        {
          "speaker": "lin",
          "text": "（“初赛不要求完美推导，限时版可以省，必须标出误差量级！”）",
          "focus": "lin"
        },
        {
          "speaker": "lin",
          "text": "（保留一阶主项。误差标为 $O(e^2)$。放弃不确定项，回去检查单位。）",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "监考老师抽走答题卡的时候，我才发现自己把黑色水笔的笔帽咬瘪了。"
        },
        {
          "speaker": "narrator",
          "text": "出了校门，到处都是扎堆对答案的人。“第三题肯定是选D啊！那个小角近似根本不能用！”这种刺耳的声音像苍蝇一样在耳边嗡嗡作响。",
          "bg": "schoolGateMorning",
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
          "speaker": "narrator",
          "text": "我绕开人群，看到林澈一个人站在远处的树下。她紧紧攥着那个透明文件袋，袋子里的文具乱七八糟的，完全没有了早上的整齐。"
        },
        {
          "speaker": "lin",
          "text": "「你没对答案吧？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「不敢。我怕我现在对完，当场就要重新投胎。」"
        },
        {
          "speaker": "lin",
          "text": "「……那就好。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你呢？最后那道综合题，没有写成八百字的论文吧？」"
        },
        {
          "speaker": "lin",
          "text": "「差一点。我写到一半，把二阶项全扔了。我按你说的……做了那个该死的限时妥协版。我不知道能拿几分，但我写完了。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「活下来就行。」"
        },
        {
          "speaker": "xia",
          "text": "「闭嘴，停止你们那种仿佛刚从战壕里爬出来的场外复盘。现在，去吃饭。晚上不许在群里发任何跟试题有关的讨论，违者踢出社团。」",
          "focus": "xia"
        }
      ]
    },
    {
      "id": "ch3-s5",
      "title": "空虚的等待",
      "lines": [
        {
          "speaker": "narrator",
          "text": "初赛成绩没有当天出。等待的这几天，比高强度的训练更折磨人。",
          "bg": "classroom",
          "clear": true,
          "transition": {
            "title": "等待成绩",
            "subtitle": "空虚的等待"
          }
        },
        {
          "speaker": "narrator",
          "text": "物理课讲电磁感应，我却在草稿纸上反复默写初赛第五题的球面坐标转换，写到第七遍的时候，我自己都不知道自己算出来的符号是正是负。"
        },
        {
          "speaker": "zhou",
          "text": "纸条上只有一行极其不耐烦的字：『别算了。没有原题卷子，你现在的推导叫精神自慰。』"
        },
        {
          "speaker": "zhou",
          "text": "『林老师，我看你刚才上语文课的时候，眼睛一直盯着圆规发呆。你别告诉我你是在思考人生。』"
        },
        {
          "speaker": "chen",
          "text": "「你们俩现在的状态，就像买了彩票但刮不开涂层。能干点阳间的事吗？」",
          "focus": "chen",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linAnxious",
              "pos": "right"
            },
            {
              "id": "chen",
              "img": "chenNeutral",
              "pos": "left"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「如果你能让我穿越到出成绩的那天，我愿意把我所有的阳寿都给你。」"
        },
        {
          "speaker": "lin",
          "text": "「我那天最后一步的单位，到底有没有把时角换算成弧度……」",
          "focus": "lin"
        },
        {
          "speaker": "chen",
          "text": "「疯了，都疯了。」",
          "focus": "chen"
        }
      ]
    },
    {
      "id": "ch3-s6",
      "title": "成绩公布",
      "lines": [
        {
          "speaker": "narrator",
          "text": "周四放学前，夏南星在群里发了一条消息，只有极其冰冷的三个字：『社团。来。』",
          "bg": "clubRoomEvening",
          "clear": true,
          "transition": {
            "title": "周四放学前",
            "subtitle": "成绩公布"
          }
        },
        {
          "speaker": "narrator",
          "text": "没有标点，没有废话。我的胃瞬间缩成了一团。走到社团教室门口时，我觉得腿都是软的。"
        },
        {
          "speaker": "lin",
          "text": "「……如果没过，今晚要把试题默写出来复盘。」",
          "focus": "lin",
          "img": "linAnxious",
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
          "text": "「如果过了呢？」"
        },
        {
          "speaker": "lin",
          "text": "「也要复盘。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "我一把推开门。夏南星站在白板前，手里拿着一张极其薄的A4打印纸。",
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
          "speaker": "xia",
          "text": "「省赛分数线划了。周行，林澈。踩线进复赛了。明天开始准备下一轮。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "空气仿佛凝固了整整十秒钟。"
        },
        {
          "speaker": "zhou",
          "text": "「我靠……老子不用吃卷子了……」"
        },
        {
          "speaker": "chen",
          "text": "「就这？你们省队候补庆祝晋级的方式，就是在这儿表演集体低血糖？」",
          "focus": "chen"
        },
        {
          "speaker": "lin",
          "text": "「……闭嘴吧，陈砚。」",
          "focus": "lin",
          "img": "linSmile"
        },
        {
          "speaker": "narrator",
          "text": "社团教室里乱七八糟的资料还堆在角落。初赛过了，但我们都知道，这根本不是什么值得大肆庆祝的终点。这只不过是，我们刚刚拿到了前往真正地狱的入场券。"
        }
      ]
    }
  ]
}
```
