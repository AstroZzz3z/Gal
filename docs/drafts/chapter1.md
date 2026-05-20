# Chapter 1 正式台词草稿：春分前的星图

说明：本稿已按用户提供的 `第一章.json` 接入主脚本。`stage` 与 `sourceLine` 为外部批注字段，未进入运行脚本；运行脚本保留 bg、show、focus、choice、effects、insert 等游戏字段。

```json
{
  "id": "ch1",
  "title": "第一章：春分前的星图",
  "sections": [
    {
      "id": "ch1-s1",
      "title": "错位的赤经差",
      "lines": [
        {
          "bg": "classroom",
          "clear": true,
          "speaker": "system",
          "text": "《星图未定》 第一章：春分前的星图"
        },
        {
          "speaker": "narrator",
          "text": "下午最后一节自习课，教室里闷得发酸。前排背英语作文的声音嗡嗡响，后门值日生把没拧干的拖把往墙角一砸，脏水顺着瓷砖慢吞吞地往下淌。"
        },
        {
          "speaker": "narrator",
          "text": "我把物理练习册翻到空白页，下面压着张 CNAO（全国中学生天文奥赛）的初赛报名表。纸的右下角已经被我抠出了毛边。"
        },
        {
          "speaker": "chen",
          "text": "「还盯这张破纸？再盯它也不会自动帮你把名报了。」",
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
          "text": "「闭嘴，我这道题马上推出来了。」"
        },
        {
          "speaker": "chen",
          "text": "「你这写的什么鬼画符？不是，想报就报，这都纠结一礼拜了。大不了去考场上睡一觉，丢脸的又不是我。」",
          "focus": "chen"
        },
        {
          "speaker": "zhou",
          "text": "「你打你的球去，别烦我。」"
        },
        {
          "speaker": "narrator",
          "text": "草稿纸上，地方恒星时（LST）、赤经（α）和时角（H）的转换公式已经被我涂改了四遍。最后那几个角度值糊成了一团黑疙瘩，纸背都被笔尖压得凹了进去。"
        },
        {
          "speaker": "zhou",
          "text": "（H = LST - α……已知观测地的地方恒星时是 14h 20m。那如果要算时角，是不是还得加上北京时间减去当地经度差的修正项？）"
        },
        {
          "speaker": "narrator",
          "text": "我咬着笔帽，把北京时间硬塞进公式里。越算越觉得诡异，最后算出的高度角竟然是个负数——这颗星直接钻进地底下了。"
        },
        {
          "speaker": "narrator",
          "text": "我正烦得想把这页纸撕了，过道里忽然有人停在我桌旁。她怀里抱着两本竞赛资料，校服外套的拉链拉到最顶上。视线越过我的胳膊，毫无预兆地落在那团涂得乱七八糟的公式上。",
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
          "text": "「同学，借过？」"
        },
        {
          "speaker": "lin",
          "text": "「你这里，时间系统完全混用了。」",
          "focus": "lin",
          "img": "linNeutral"
        },
        {
          "speaker": "narrator",
          "text": "被一个陌生人当场抓包做错题，我本能地想反驳。但我低头看了一眼那个该死的负数高度角，喉咙像被卡住了。"
        },
        {
          "speaker": "zhou",
          "text": "「……我还在验算。」"
        },
        {
          "speaker": "lin",
          "text": "「题干第一行就已经给了地方恒星时。你不需要再拿北京时间和经度去推算平太阳时。多加这个修正项，你后面的时角全偏了。」",
          "focus": "lin",
          "img": "linThinking"
        },
        {
          "speaker": "zhou",
          "text": "「我看最后选项的范围给得挺大，就算偏一点，说不定也能歪打正着选对。」"
        },
        {
          "speaker": "lin",
          "text": "「如果你只做选择题，也许能蒙对。但大题阅卷老师看到你第一步把 LST 和平太阳时搞混，不管你后面公式背得多熟，直接零分。」",
          "focus": "lin",
          "img": "linNeutral"
        },
        {
          "speaker": "narrator",
          "text": "她语气里没有一点嘲讽，就是单纯在陈述一个物理事实。这反而让我更难受，就像在黑板前默写公式卡壳，全班都在看着你手里的粉笔。",
          "choice": [
            {
              "text": "把草稿纸推回去。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「……你说得对。我多算了一遍。」"
                },
                {
                  "speaker": "narrator",
                  "text": "我把草稿纸往她那边推了两厘米，又立刻觉得这个动作像在交作业。"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「不用给我。把那一步擦掉，从题干给的 LST 开始。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「你纠错一直这么狠吗？」"
                },
                {
                  "img": "linThinking",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「这不是狠。是第一行。」"
                }
              ]
            },
            {
              "text": "先把面子捡回来。",
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「我刚才只是想验证一下错误路线能错到哪里。」"
                },
                {
                  "speaker": "chen",
                  "focus": "chen",
                  "text": "「这话听着就很像嘴硬。」"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「验证结束了。高度角已经到地底下了。」"
                },
                {
                  "speaker": "narrator",
                  "text": "陈砚没忍住笑了一声。我把笔帽咬回嘴里，低头重新圈住题干第一行。"
                }
              ]
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「你……也考这个？」"
        },
        {
          "speaker": "lin",
          "text": "「嗯。CNAO。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "气氛有些僵硬。陈砚在旁边看热闹不嫌事大，把面包包装纸揉成一团。"
        },
        {
          "speaker": "chen",
          "text": "「同学，你也是天文社的？那你赶紧劝劝他。这人拿个报名表纠结得快发霉了，推一下动一下。」",
          "focus": "chen"
        },
        {
          "speaker": "lin",
          "text": "「明天截止。要交的话，明天放学前去物理组办公室。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "她没像陈砚那样灌鸡汤说什么“不留遗憾”，只是冷冰冰地报了个死线。但“明天截止”四个字，比什么都扎人。"
        },
        {
          "speaker": "narrator",
          "text": "上课铃响了。走廊里打球的人吵吵嚷嚷地往回跑。"
        },
        {
          "speaker": "lin",
          "text": "「小时和角度的换算，1h 对应 15°。你连单位都没统一。把负数高度角擦了吧，别骗自己了。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "她转过身。我看着草稿纸上那行被判了死刑的公式，咽了下口水。"
        }
      ]
    },
    {
      "id": "ch1-s2",
      "title": "临时集训与对赌表",
      "lines": [
        {
          "speaker": "narrator",
          "text": "下课铃一响，教室里瞬间炸开了锅。后排几个男生把卷子胡乱往书包里一塞，喊着隔壁班的人去抢篮球场。我的草稿纸还摊在桌上，错的那两行被我划得漆黑。",
          "bg": "classroom",
          "clear": true,
          "transition": {
            "title": "3月19日 放学后",
            "subtitle": "临时集训报名"
          }
        },
        {
          "speaker": "lin",
          "text": "「你重写的时候，先把地方恒星时换算成角度。刚才第一步又忘了。」",
          "focus": "lin",
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
          "text": "「大姐，你放学不走，就为了留下来盯我算角度？」"
        },
        {
          "speaker": "lin",
          "text": "「等人。顺便看你这题能不能改对。」",
          "focus": "lin",
          "img": "linThinking"
        },
        {
          "speaker": "narrator",
          "text": "她手里那张纸边缘压得极其平整，是一张已经填好姓名和班级的 CNAO 报名表。"
        },
        {
          "speaker": "zhou",
          "text": "「你动作真快。这张表在我物理书底下压得都快包浆了。」"
        },
        {
          "speaker": "lin",
          "text": "「因为你一直在用『准备』来掩饰自己不敢下决定。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "这句话实在太不客气了。我刚想回怼，教室后门突然被人一把推开。"
        },
        {
          "speaker": "xia",
          "text": "「林澈，你果然在盯人改题。走，去空教室开会。」",
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
          "text": "「这位是？」"
        },
        {
          "speaker": "xia",
          "text": "「夏南星，高三，天文社社长。物理老头说你有点底子，让我来看看。现在看来，底子有点漏风啊。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「社长好。我这只是……偶尔大脑短路。」"
        },
        {
          "speaker": "xia",
          "text": "「短路不要紧，只要别在考场上断电就行。社团今年走精英路线——其实就是招不到人。我们要开个初赛临时集训，现在就林澈一个确定的。你，报不报？给个痛快话，我还要赶回去写我的理综卷子。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "她说话像赶着去投胎，完全没有我预想中那种“天文社招新”的浪漫和热血。那叠A4纸最上面，赫然印着历年真题的球面三角大题，密密麻麻的数字看着让人头皮发麻。"
        },
        {
          "speaker": "zhou",
          "text": "「临时集训……具体练什么？我先声明，我基础很烂，天体力学基本靠蒙。」"
        },
        {
          "speaker": "xia",
          "text": "「练什么？练怎么在看到天体坐标系转换题时不要两眼一黑。周三、周五放学后刷真题，周末去天台认星。受不了就直说，别占名额。」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「我周三和周五可以。周末晚上如果是晴天，我家里同意我留校。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「行。周行，你呢？」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「我？我还在观望……」",
          "choice": [
            {
              "text": "把顾虑说出口。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「不是不想报。我是怕报完以后，第一周就掉队。」"
                },
                {
                  "speaker": "xia",
                  "focus": "xia",
                  "text": "「怕可以。别拿怕当请假条。」"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「掉队可以补。一直站在门口，补不了。」"
                }
              ]
            },
            {
              "text": "先把退路收掉。",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「那你们先别把报名表收走。」"
                },
                {
                  "speaker": "xia",
                  "focus": "xia",
                  "text": "「怎么，怕等会儿又想跑？」"
                },
                {
                  "speaker": "zhou",
                  "text": "「怕。所以先放我桌上。」"
                },
                {
                  "speaker": "narrator",
                  "text": "话一出口，我自己都觉得有点莽。但那张表压在桌角时，反而比刚才顺眼了。"
                }
              ]
            }
          ]
        },
        {
          "speaker": "lin",
          "text": "「你刚才 LST 减赤经的公式已经写对了，代入数值只需要两分钟。你连算个 H 都要观望，是打算观望到初赛结束吗？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「我不是……」"
        },
        {
          "speaker": "xia",
          "text": "「痛快点。高二的时间不值钱吗？你要是怕被这叠真题虐死，现在就把报名表撕了，回去好好写你的五三。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "一个拿着秒表逼人的高三学姐，一个像纠错机器一样的同年级学霸。这种被按在案板上的感觉让人很不爽，但又莫名有种“如果不签就是个逃兵”的窝火感。"
        },
        {
          "speaker": "zhou",
          "text": "「签就签。但先说好，我要是拉低了集训的平均分，你们别后悔。」"
        },
        {
          "speaker": "xia",
          "text": "「后悔也是物理老头后悔，关我什么事。走，换个地方，这教室味儿太冲了。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "门牌上的星座贴纸已经褪色卷边。角落里堆着几个沾灰的赤道仪箱子，空气里有股淡淡的纸张发霉的味道。",
          "bg": "clubroom",
          "clear": true,
          "transition": {
            "title": "3月19日 放学后",
            "subtitle": "天文社教室"
          },
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
          "speaker": "xia",
          "text": "「第一阶段训练表。别光看标题，看里面的死线。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「周三时间系统测验？周五天体力学偏心率和半长轴推导？社长，这叫临时集训？这叫物理组的斯巴达冬令营吧！」"
        },
        {
          "speaker": "lin",
          "text": "「学姐，周五放天体力学不现实。我们班周四有数学小测，周五还要做这种椭圆轨道的推导，我怕算到最后连 a 和 b 的参数关系都搞混。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「行，你们是活人，不是做题机器。周五换成星图识别和条件近似判断。天体力学推到周末。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「原来还能讨价还价的吗？」"
        },
        {
          "speaker": "lin",
          "text": "「训练表是用来执行的，不是用来当摆设的。如果遇到作业多或者小测，硬抗只会导致两边都崩盘。你遇到冲突不提出来吗？」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「我以前一般都是……默默开摆。」"
        },
        {
          "speaker": "xia",
          "text": "「在这里开摆，我会把你顺着窗户扔出去。现在，各自写下自己最容易死在考场上的短板。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「天球坐标转换老是绕进去、天体力学公式记不住、还有……读题漏条件。」"
        },
        {
          "speaker": "lin",
          "text": "「不完整题干的近似判断。比如题目没给观测地纬度，也没说忽略大气折射，我就不知道该不该把视差算进去，容易卡住。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「你连这种细节都会卡住？我遇到这种题一般直接默认出题人是好心人，当它不存在直接算。」"
        },
        {
          "speaker": "lin",
          "text": "「出题人从来不是好心人。他们只会挖坑。你那不叫解题，叫盲人摸象。」",
          "focus": "lin"
        },
        {
          "speaker": "xia",
          "text": "「很好。周行容易瞎默认，林澈容易想太多钻牛角尖。从明天开始，你们俩隔天互相讲自己的错题。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「互相讲？讲我怎么把平太阳时和恒星时搞混的吗？这算什么，公开处刑？」"
        },
        {
          "speaker": "lin",
          "text": "「错题不讲，它就永远是坑。明天你先讲赤经差那道题，说清楚你第一步为什么会想加修正项。」",
          "focus": "lin",
          "choice": [
            {
              "text": "答应明天先讲。",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「行。明天我讲。先说好，笑太大声我会停。」"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「不笑。记错因。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「你这比笑还吓人。」"
                }
              ]
            },
            {
              "text": "今晚先整理定义。",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「那我今晚先把时间系统重抄一遍。明天讲错之前，至少别把定义也讲错。」"
                },
                {
                  "speaker": "xia",
                  "focus": "xia",
                  "text": "「可以。别抄漂亮，抄有用。」"
                },
                {
                  "img": "linThinking",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「把负数高度角也留着。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「留罪证？」"
                },
                {
                  "img": "linNeutral",
                  "speaker": "lin",
                  "focus": "lin",
                  "text": "「留入口。」"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch1-s3",
      "title": "天台与脏橘色夜空",
      "lines": [
        {
          "speaker": "narrator",
          "text": "推开天台的铁门，四楼的穿堂风直接灌进脖子里。城市底部的霓虹灯和远处的探照灯把低空映成了一片浑浊的脏橘色。别说银河，连原本该黑透的天幕都像褪色的劣质幕布。",
          "bg": "rooftop",
          "clear": true,
          "transition": {
            "title": "周五 傍晚",
            "subtitle": "天台观测"
          },
          "show": [
            {
              "id": "xia",
              "img": "seniorSmile",
              "pos": "left"
            },
            {
              "id": "lin",
              "img": "linCasualNeutral",
              "pos": "right"
            }
          ]
        },
        {
          "speaker": "xia",
          "text": "「铁门关上！风太大，寻星镜的螺丝都要被吹松了。周行，别傻站着，过来帮忙压住这根腿。」",
          "focus": "xia"
        },
        {
          "speaker": "zhou",
          "text": "「社长，这天台风也太邪门了。而且这天亮得跟傍晚似的，真能看见星星？」"
        },
        {
          "speaker": "lin",
          "text": "「今天视宁度很差，但春季大曲线的高仰角亮星应该能穿透光害。先把手机都扣过去，别看白光，破坏暗适应。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「我已经开始觉得天上全是白点了，也不知道是星星还是我眼花。」"
        },
        {
          "speaker": "xia",
          "text": "「这破镜子的极轴到底是谁调的……你们俩，先去练肉眼认星。目标：北斗、大角、角宿一。找不到别过来烦我。」",
          "focus": "xia"
        },
        {
          "speaker": "narrator",
          "text": "夏南星去跟那台快散架的望远镜死磕了。林澈走到天台边缘避风的矮墙后，翻开用黑色长尾夹死死夹住的观测记录本。",
          "hide": [
            "xia"
          ],
          "show": [
            {
              "id": "lin",
              "img": "linCasualNeutral",
              "pos": "center"
            }
          ]
        },
        {
          "speaker": "zhou",
          "text": "「我看了三分钟了，除了左边那架一闪一闪的民航客机，我什么都没认出来。」"
        },
        {
          "speaker": "lin",
          "text": "「先找北斗七星的斗身。别想得太清楚，光害吃掉了两颗暗星，你只能看到一个残缺的勺子。顺着斗柄的弧度，往东南方向延伸大概三十度。」",
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「延伸三十度……好，我好像看到一颗稍微亮一点的。橙黄色的？这就是大角星？」"
        },
        {
          "speaker": "lin",
          "text": "「对，牧夫座 α。它视星等够高，这种天况也能看清。接下来是难点，继续顺着这个弧度往南，找室女座的角宿一。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "我顺着大角星往下看。南边的天空正好在商场大屏幕的正上方，漫反射的光污染让那片区域简直是一块惨白的光斑。"
        },
        {
          "speaker": "zhou",
          "text": "「不行，角宿一仰角太低了吧？完全被商场的光害吞了，我连个鬼影都看不见。」"
        },
        {
          "speaker": "lin",
          "text": "「含着，你刚才一直在吸冷风。找不到别硬盯。」",
          "focus": "lin",
          "img": "linCasualThinking"
        },
        {
          "speaker": "zhou",
          "text": "「嘶……这糖配着天台的风，简直提神醒脑。你确定角宿一今天能看见？」"
        },
        {
          "speaker": "lin",
          "text": "「用侧视法（Averted Vision）。」",
          "focus": "lin",
          "img": "linCasualNeutral"
        },
        {
          "speaker": "zhou",
          "text": "「什么法？」"
        },
        {
          "speaker": "lin",
          "text": "「眼睛的黄斑区对强光敏感，但周边的视杆细胞对暗光更敏感。别死盯着你想看的位置。视线稍微偏开五到十度，用余光去抓那个微弱的光点。」",
          "focus": "lin",
          "img": "linCasualThinking"
        },
        {
          "speaker": "narrator",
          "text": "我把视线从那片死白的光斑上稍微移开，盯着旁边的一块暗区。冷风吹得我眼眶发酸。"
        },
        {
          "speaker": "narrator",
          "text": "就在我快要放弃去揉眼睛的瞬间，余光里真的浮现出一个极其微弱、断断续续闪烁的亮点。它就在脏橘色的天际线上方，挣扎着没有被吞没。"
        },
        {
          "speaker": "zhou",
          "text": "「看到了！我靠，真的在！闪得跟接触不良的灯泡一样！」"
        },
        {
          "speaker": "lin",
          "text": "「记下来。时间，方位东南，仰角估计二十度。备注：极强光害，侧视法确认。」",
          "focus": "lin",
          "img": "linCasualNeutral"
        },
        {
          "speaker": "zhou",
          "text": "「这风简直有病……你按着左边，我帮你按右边，不然没法写字了。」"
        },
        {
          "speaker": "lin",
          "text": "「……你别按在网格线上。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "借着暗红色的手电光，我在她画好的那条有些歪斜的春季大曲线最底端，重重地点了一个点，标上“Spica（角宿一）”。手底下是冰凉的纸面，旁边是她因为用力而骨节泛白的手指。",
          "bg": "cgCh1RooftopSpica",
          "clear": true
        },
        {
          "speaker": "xia",
          "text": "「你们两个认完没有！过来帮我打手电！这破赤纬轴卡死了！」",
          "focus": "xia"
        },
        {
          "speaker": "lin",
          "text": "「来了。」",
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "我把冻僵的手揣进口袋里。再次抬头看向南边的天空时，那个属于角宿一的微弱光点又被光害吞没了。但没关系，哪怕天上糊成一团，我知道它确实就在那里。"
        }
      ]
    }
  ]
}
```
