# 第十章：本人理由

> 已接入主脚本。第九章处理高考，第十章处理出分、志愿和 HE/BE 分支。

```json
{
  "id": "ch10",
  "title": "第十章：本人理由",
  "sections": [
    {
      "id": "ch10-s1",
      "title": "查分前夜",
      "lines": [
        {
          "bg": "scoreNightLivingRoom",
          "clear": true,
          "speaker": "narrator",
          "text": "六月二十三日晚上，客厅灯开得很亮。茶几上放着水果、手机、准考证和一张被我写得乱七八糟的位次预估表。",
          "bgm": "gaokaoAnxiety"
        },
        {
          "speaker": "narrator",
          "text": "我爸妈都说不紧张，但水果切好以后谁也没动。手机屏幕每亮一次，三个人都抬头。"
        },
        {
          "speaker": "lin",
          "text": "「模板发你了。」"
        },
        {
          "speaker": "zhou",
          "text": "「你连查分前夜都做模板？」"
        },
        {
          "speaker": "lin",
          "text": "「不然呢，靠刷新网页提高分数吗？」"
        },
        {
          "speaker": "zhou",
          "text": "「我刚才确实试了五次。」"
        },
        {
          "speaker": "lin",
          "text": "「所以我发模板。」"
        },
        {
          "speaker": "narrator",
          "text": "她发来的共享表名字很朴素：分数-位次-可选范围。三列标题冷静得像不知道今晚有多少人睡不着。"
        },
        {
          "speaker": "zhou",
          "text": "「你慌吗？」"
        },
        {
          "speaker": "lin",
          "text": "「慌。」"
        },
        {
          "speaker": "zhou",
          "text": "「那你还做表？」"
        },
        {
          "speaker": "lin",
          "text": "「慌的时候更要做。不然只会一直刷新。」"
        },
        {
          "speaker": "narrator",
          "text": "我把共享表复制一份，填上姓名，光标停在总分那一格。空白格子比任何题目都安静。"
        },
        {
          "speaker": "mother",
          "text": "「别一直看手机，眼睛都红了。」"
        },
        {
          "speaker": "zhou",
          "text": "「我这是考后数据监控。」"
        },
        {
          "speaker": "father",
          "text": "「说人话。」"
        },
        {
          "speaker": "zhou",
          "text": "「我紧张。」"
        },
        {
          "speaker": "narrator",
          "text": "说出来以后，客厅反而轻了一点。我妈把水果盘往我这边推了推，没有再劝我放松。"
        },
        {
          "speaker": "narrator",
          "text": "十一点五十七分，林澈发来一条消息：如果系统卡，先截图时间，不要连点。"
        },
        {
          "speaker": "zhou",
          "text": "「你怎么连服务器心理都考虑到了？」"
        },
        {
          "speaker": "lin",
          "text": "「我是在考虑你的手。」"
        },
        {
          "speaker": "zhou",
          "text": "「我手怎么了？」"
        },
        {
          "speaker": "lin",
          "text": "「紧张的时候会乱点。」"
        },
        {
          "speaker": "narrator",
          "text": "我低头看自己的拇指，默默把手机放到桌面上。"
        },
        {
          "speaker": "system",
          "text": "查分前夜怎么回应林澈？",
          "choice": [
            {
              "text": "告诉林澈自己很慌",
              "effects": {
                "trust": 1
              },
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「我很慌。不是怕考差，是怕数字出来以后什么借口都没了。」"
                },
                {
                  "speaker": "lin",
                  "text": "「我也是。那就等数字出来，再一个一个看。」"
                }
              ]
            },
            {
              "text": "先把共享表复制好",
              "effects": {
                "discipline": 1
              },
              "insert": [
                {
                  "speaker": "narrator",
                  "text": "我先把共享表复制好，把能填的基础信息填完。林澈发来一个“嗯”，像给一项流程打勾。"
                }
              ]
            },
            {
              "text": "只回一个“等出分吧”",
              "effects": {
                "trust": -1
              },
              "insert": [
                {
                  "speaker": "lin",
                  "text": "「可以等。但你别把自己关起来等。」"
                },
                {
                  "speaker": "narrator",
                  "text": "我看着那句话，过了很久才回“知道”。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch10-s2",
      "title": "数字落下来",
      "lines": [
        {
          "bg": "scoreNightLivingRoom",
          "clear": true,
          "speaker": "narrator",
          "text": "零点过后，网页卡了两次。第三次刷新，分数终于跳出来。那串数字没有音乐，也没有特效，只是安静地停在屏幕中央。",
          "bgm": "weightlessEcho"
        },
        {
          "speaker": "narrator",
          "text": "我盯着它看了十几秒，先确认姓名，再确认考生号，最后才敢看总分和位次。够冲目标专业，但不稳；去近一些的学校很稳，但课程明显弱。"
        },
        {
          "speaker": "mother",
          "text": "「怎么样？」"
        },
        {
          "speaker": "zhou",
          "text": "「能选。有点难选。」"
        },
        {
          "speaker": "father",
          "text": "「能选就是好事。」"
        },
        {
          "speaker": "narrator",
          "text": "手机震了一下。林澈发来截图，她的分数比我高，位次也漂亮，但她想去的专业同样不是毫无风险。"
        },
        {
          "speaker": "lin",
          "text": "「你的？」"
        },
        {
          "speaker": "narrator",
          "text": "我把截图发过去，手指在发送键上停了半秒，还是连位次一起发了。"
        },
        {
          "speaker": "lin",
          "text": "「你发完整了。」"
        },
        {
          "speaker": "zhou",
          "text": "「这也要表扬？」"
        },
        {
          "speaker": "lin",
          "text": "「以前你可能只发总分。」"
        },
        {
          "speaker": "zhou",
          "text": "「我在你这里真的有历史信用记录。」"
        },
        {
          "speaker": "lin",
          "text": "「志愿看位次，不看截图构图。」"
        },
        {
          "speaker": "zhou",
          "text": "「我本来还想让截图显得体面一点。」"
        },
        {
          "speaker": "lin",
          "text": "「周行，体面不能填志愿。」"
        },
        {
          "bg": "cgCh10ScoreSharedTable",
          "clear": true,
          "speaker": "narrator",
          "text": "凌晨客厅里，查分页面和林澈发来的共享表同时亮着。茶几上的水果没人动，周行的手停在位次那一格旁边。"
        },
        {
          "speaker": "narrator",
          "text": "我们把总分、位次、目标学校、风险等级填进去。表格没有让选择变简单，但至少让它不再是一团雾。"
        },
        {
          "speaker": "mother",
          "text": "「离家近的这所，不也不错吗？」"
        },
        {
          "speaker": "father",
          "text": "「远的那所专业更对口，但以后路也窄。你自己要想清楚。」"
        },
        {
          "speaker": "narrator",
          "text": "我点头。父母的担心不难听，也不荒唐。只是每一句都像在表格外又加一列。"
        },
        {
          "speaker": "lin",
          "text": "「明天回学校吗？」"
        },
        {
          "speaker": "zhou",
          "text": "「嗯。生涯教室。」"
        },
        {
          "speaker": "lin",
          "text": "「把两张表都带上。」"
        },
        {
          "speaker": "zhou",
          "text": "「哪两张？」"
        },
        {
          "speaker": "lin",
          "text": "「想去的，和你觉得离我近的。」"
        },
        {
          "speaker": "narrator",
          "text": "我看着手机，忽然不知道怎么回。她没有等我解释，下一条很快发来。"
        },
        {
          "speaker": "lin",
          "text": "「我不是不让你考虑距离。只是距离不能替你上课。」"
        },
        {
          "speaker": "zhou",
          "text": "「知道。明天说。」"
        },
        {
          "speaker": "narrator",
          "text": "这一晚我睡得很浅。分数落下来以后，反而有更多东西浮上来。"
        }
      ]
    },
    {
      "id": "ch10-s3",
      "title": "生涯教室",
      "lines": [
        {
          "bg": "careerRoom",
          "clear": true,
          "speaker": "narrator",
          "text": "第二天上午，学校生涯教室的打印机一直没停。每张桌上都摊着招生目录、位次表和不同颜色的记号笔。",
          "bgm": "dailyClassroom"
        },
        {
          "speaker": "teacher",
          "text": "「今天不替你们做决定。你们先把三列写清楚：想去、能去、值得去。」",
          "clear": true,
          "show": [
            {
              "id": "teacher",
              "img": "teacherNeutral",
              "pos": "center"
            }
          ],
          "focus": "teacher"
        },
        {
          "speaker": "chen",
          "text": "「老师，食堂好吃算理由吗？」"
        },
        {
          "speaker": "teacher",
          "text": "「算生活质量，不算第一志愿理由。」"
        },
        {
          "speaker": "chen",
          "text": "「明白，不能为了鸡腿献祭四年。」"
        },
        {
          "speaker": "narrator",
          "text": "林澈把纸横过来，在三列后面又加了一列：不该去。"
        },
        {
          "speaker": "zhou",
          "text": "「这列看起来很凶。」"
        },
        {
          "speaker": "lin",
          "text": "「有些学校不是不好，是理由对不上。」",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linSummerThinking",
              "pos": "center"
            }
          ],
          "focus": "lin"
        },
        {
          "speaker": "narrator",
          "text": "她说这句话的时候没有看我，但我知道她在说哪一张表。"
        },
        {
          "speaker": "wangshu",
          "text": "「物理类作为入口也可以。看培养方案，不只看专业名称。」",
          "clear": true,
          "show": [
            {
              "id": "wangshu",
              "img": "wangshuNeutral",
              "pos": "center"
            }
          ],
          "focus": "wangshu"
        },
        {
          "speaker": "zhou",
          "text": "「顾望舒，你查得也太细了。」"
        },
        {
          "speaker": "wangshu",
          "text": "「专业名称负责吸引人，培养方案负责四年。」"
        },
        {
          "speaker": "lin",
          "text": "「这句我记一下。」"
        },
        {
          "speaker": "narrator",
          "text": "我们开始查课程。天体物理导论、普通物理、数学分析、程序设计、实验课、转专业条件、保研去向。网页开了十几个，浏览器标签挤成一排。"
        },
        {
          "speaker": "lin",
          "text": "「你讲第一张表的时候，一直在说课程。」"
        },
        {
          "speaker": "zhou",
          "text": "「第二张也有课程。」"
        },
        {
          "speaker": "lin",
          "text": "「第二张你说了八分钟高铁。」"
        },
        {
          "speaker": "zhou",
          "text": "「交通也是现实。」"
        },
        {
          "speaker": "lin",
          "text": "「是现实，但不能替你上课。」"
        },
        {
          "speaker": "narrator",
          "text": "我把笔放下。她没有否定距离，也没有假装距离不重要。她只是把我不敢说清楚的权重摆回桌面。"
        },
        {
          "speaker": "teacher",
          "text": "「周行，林澈，你们两个过来。」"
        },
        {
          "speaker": "narrator",
          "text": "许老师看了我们的表，先圈出第一张，又在第二张旁边打了个问号。"
        },
        {
          "speaker": "teacher",
          "text": "「不该去，不是学校不好，是它和你的理由对不上。你们要分清楚，重要的人可以影响安排，但不能替换本人理由。」"
        },
        {
          "speaker": "zhou",
          "text": "「本人理由。」"
        },
        {
          "speaker": "teacher",
          "text": "「对。以后后悔的时候，能不能说清楚这是你自己认可的选择。说不清，就先别急着点提交。」"
        },
        {
          "bg": "cgCh10CareerRoomThreeColumns",
          "clear": true,
          "speaker": "narrator",
          "text": "生涯教室白板上写着“想去 / 能去 / 值得去”。桌上摊着位次表和招生目录，林澈用笔在“不该去”那一列下划线。"
        },
        {
          "speaker": "narrator",
          "text": "那天上午，我们没有得出答案，只得出了一张更诚实的表。它有点难看，也有点必要。"
        }
      ]
    },
    {
      "id": "ch10-s4",
      "title": "两张志愿表",
      "lines": [
        {
          "bg": "homeEvening",
          "clear": true,
          "speaker": "narrator",
          "text": "第三天晚上，林澈来我家还资料。茶几上摊着两张志愿草表，一张课程合适但城市远，一张离她近但课程弱。",
          "bgm": "rainLibrary"
        },
        {
          "speaker": "mother",
          "text": "「林澈，先吃点水果。别光看表。」"
        },
        {
          "speaker": "lin",
          "text": "「谢谢阿姨。」",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linCasualNeutral",
              "pos": "center"
            }
          ],
          "focus": "lin"
        },
        {
          "speaker": "father",
          "text": "「我们也不是反对远。只是专业窄、城市远、以后就业和读研都要考虑。周行有时候想得太直。」"
        },
        {
          "speaker": "zhou",
          "text": "「爸，你可以不用当着本人总结。」"
        },
        {
          "speaker": "father",
          "text": "「本人更要听。」"
        },
        {
          "speaker": "mother",
          "text": "「如果没有林澈，你会怎么选？」"
        },
        {
          "speaker": "narrator",
          "text": "客厅忽然安静下来。这个问题不锋利，却很准。"
        },
        {
          "speaker": "zhou",
          "text": "「第一张。」"
        },
        {
          "speaker": "mother",
          "text": "「我们不是让你把她排除掉。她是重要的人，但不能只剩这个。」"
        },
        {
          "speaker": "lin",
          "text": "「我也这么想。」"
        },
        {
          "speaker": "zhou",
          "text": "「你们什么时候统一口径的？」"
        },
        {
          "speaker": "lin",
          "text": "「不用统一。这个条件很明显。」"
        },
        {
          "speaker": "narrator",
          "text": "她把培养方案那一页推到我面前，手指按住“核心课程”那一栏。"
        },
        {
          "speaker": "lin",
          "text": "「我可以帮你看课程，可以帮你算城市距离，也可以说我会难过。但我不能用难过要求你改志愿。」"
        },
        {
          "speaker": "zhou",
          "text": "「你把这个也写进清单了？」"
        },
        {
          "speaker": "lin",
          "text": "「写了。怕我自己忘。」"
        },
        {
          "speaker": "zhou",
          "text": "「你连不许自己越界都能列条目。」"
        },
        {
          "speaker": "lin",
          "text": "「因为我也想离你近。」"
        },
        {
          "speaker": "narrator",
          "text": "她说得很轻，轻到我差点以为自己听错。可我爸妈都没有说话，水果盘也安静地停在茶几中间。"
        },
        {
          "speaker": "lin",
          "text": "「但我不想以后你上不喜欢的课，然后说是因为我。」"
        },
        {
          "speaker": "zhou",
          "text": "「我不会那么说。」"
        },
        {
          "speaker": "lin",
          "text": "「你现在不会。可如果一开始理由就歪了，以后很容易歪回来。」"
        },
        {
          "speaker": "father",
          "text": "「这话说得很清楚。」"
        },
        {
          "speaker": "zhou",
          "text": "「爸，你现在不要加入评审。」"
        },
        {
          "speaker": "mother",
          "text": "「我觉得她说得对。」"
        },
        {
          "speaker": "zhou",
          "text": "「妈。」"
        },
        {
          "speaker": "narrator",
          "text": "所有人都站在同一个问题前面：我到底要用谁的理由填第一志愿。"
        },
        {
          "bg": "cgCh10TwoVolunteerForms",
          "clear": true,
          "speaker": "narrator",
          "text": "客厅茶几上摊着两张志愿草表和培养方案。林澈的手按住核心课程页，周行父母坐在背景里，气氛安静而现实。"
        },
        {
          "speaker": "narrator",
          "text": "林澈离开前，把那张“不该去”的表折好塞给我。"
        },
        {
          "speaker": "lin",
          "text": "「提交前再看一遍。不是为了否定它，是为了确认你没有拿它逃避。」"
        },
        {
          "speaker": "zhou",
          "text": "「你明天会在旁边吗？」"
        },
        {
          "speaker": "lin",
          "text": "「会。但我不碰鼠标。」"
        },
        {
          "speaker": "zhou",
          "text": "「这么严格？」"
        },
        {
          "speaker": "lin",
          "text": "「这是你的志愿。」"
        },
        {
          "speaker": "narrator",
          "text": "她站在门口，夏夜的热风从楼道吹进来。那一刻我很想把答案直接说出来，可答案还没有完全从我自己嘴里站稳。"
        }
      ]
    },
    {
      "id": "ch10-s5",
      "title": "提交按钮",
      "lines": [
        {
          "bg": "volunteerSystemDesk",
          "clear": true,
          "speaker": "narrator",
          "text": "志愿填报开放那天，学校机房安静得像考场。电脑屏幕上是蓝白色的系统界面，提交按钮在页面最下方。",
          "bgm": "gaokaoAnxiety"
        },
        {
          "speaker": "teacher",
          "text": "「最后确认前，每个人自己读一遍志愿顺序。老师和家长都不替你们点鼠标。」",
          "clear": true,
          "show": [
            {
              "id": "teacher",
              "img": "teacherNeutral",
              "pos": "center"
            }
          ],
          "focus": "teacher"
        },
        {
          "speaker": "narrator",
          "text": "林澈坐在我旁边，手放在膝盖上，真的没有碰鼠标。她只看着屏幕，像看一张必须由我自己完成的答题卡。"
        },
        {
          "speaker": "lin",
          "text": "「周行，你第一志愿的本人理由是什么？」",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linCasualNeutral",
              "pos": "center"
            }
          ],
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「本人理由？」"
        },
        {
          "speaker": "lin",
          "text": "「不是父母理由，不是我的理由，也不是你害怕以后见不到我的理由。」"
        },
        {
          "speaker": "zhou",
          "text": "「你这题限制条件很多。」"
        },
        {
          "speaker": "lin",
          "text": "「重要选择限制条件本来就多。」"
        },
        {
          "speaker": "narrator",
          "text": "屏幕上的学校名称很安静。第一张表里的学校，课程更对，城市更远。第二张表里的学校，距离更近，却让我解释课程时总是绕开关键。"
        },
        {
          "speaker": "narrator",
          "text": "鼠标停在第一志愿那一栏。提交前，系统要求再次确认。我听见机房空调的声音，也听见自己心跳很快。"
        },
        {
          "speaker": "system",
          "text": "第一志愿要怎么提交？",
          "choice": [
            {
              "text": "说出真实志愿，选择本人理由成立的学校",
              "effects": {
                "trust": 1,
                "future_sync": 1
              },
              "endingCheck": true,
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「第一张。因为课程、培养方案和我想走的路对得上。距离很麻烦，但它不是错误理由。」"
                },
                {
                  "speaker": "lin",
                  "text": "「嗯。」"
                },
                {
                  "speaker": "zhou",
                  "text": "「我也想离你近。但不能把近写成第一理由。」"
                },
                {
                  "speaker": "lin",
                  "text": "「这样说，我能接受。」"
                },
                {
                  "speaker": "narrator",
                  "text": "我点下确认。系统弹出提交成功的提示，简单得像所有纠结都只是为了这一行小字。"
                }
              ]
            },
            {
              "text": "隐瞒动机，选择离林澈最近的学校",
              "effects": {
                "trust": -2,
                "future_sync": -2
              },
              "target": "ch12-bad-s1",
              "insert": [
                {
                  "speaker": "narrator",
                  "text": "我把离林澈最近的那所学校放到第一位，嘴上说课程也不错。林澈没有立刻反驳，只看着我解释越来越长。"
                },
                {
                  "speaker": "lin",
                  "text": "「你现在讲的是高铁，不是培养方案。」"
                }
              ]
            },
            {
              "text": "把两张表摊开，承认自己还在摇摆",
              "effects": {
                "trust": 1
              },
              "endingCheck": true,
              "insert": [
                {
                  "speaker": "zhou",
                  "text": "「我还在摇摆。第一张是本人理由，第二张是我想离你近。我不想把这两个混成一个。」"
                },
                {
                  "speaker": "lin",
                  "text": "「那就先承认它们是两个问题。能承认，就还有办法。」"
                },
                {
                  "speaker": "narrator",
                  "text": "我们把两张表重新摊开。最后一遍确认时，我没有再把交通距离写进专业理由里。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ch10-s6",
      "title": "提交之后",
      "lines": [
        {
          "bg": "schoolGateDusk",
          "clear": true,
          "speaker": "narrator",
          "text": "从机房出来，学校的夏天热得很实在。操场有人在打球，教学楼外墙被太阳晒成浅金色，像什么都没有刚刚发生。",
          "bgm": "smallPromise"
        },
        {
          "speaker": "narrator",
          "text": "提交以后没有烟花，也没有立刻到来的未来。只有一张回执单，和林澈手里那瓶被她握得有点温的水。"
        },
        {
          "speaker": "lin",
          "text": "「紧张吗？」",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linCasualNeutral",
              "pos": "center"
            }
          ],
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「紧张。但不是后悔。」"
        },
        {
          "speaker": "lin",
          "text": "「这两个要分清楚。」"
        },
        {
          "speaker": "zhou",
          "text": "「你现在说话越来越像许老师。」"
        },
        {
          "speaker": "lin",
          "text": "「我比他严格。」"
        },
        {
          "speaker": "zhou",
          "text": "「确实。」"
        },
        {
          "speaker": "narrator",
          "text": "她把回执单折好，让我夹进文件袋。这个动作太熟悉了，从候选营到波兰，再到志愿提交，她好像一直在帮我把混乱收进夹层。"
        },
        {
          "speaker": "zhou",
          "text": "「高考后那个问题，我能问了吗？」"
        },
        {
          "speaker": "lin",
          "text": "「等录取结果出来。」"
        },
        {
          "speaker": "zhou",
          "text": "「你这叫无限延期。」"
        },
        {
          "speaker": "lin",
          "text": "「这叫按流程。」"
        },
        {
          "speaker": "zhou",
          "text": "「那流程下一步是什么？」"
        },
        {
          "speaker": "lin",
          "text": "「回家，睡觉，等录取。」"
        },
        {
          "speaker": "narrator",
          "text": "我看着她走下台阶。她没有回头催我，却放慢了一点脚步，像默认我会跟上。"
        },
        {
          "speaker": "narrator",
          "text": "这一天没有结束所有问题，只是把最重要的那一个交了上去。接下来，系统会给出结果，而我们要面对结果之后的生活。"
        }
      ]
    },
    {
      "id": "ch11-happy-s1",
      "title": "HE：同一片天空",
      "lines": [
        {
          "bg": "summerRooftop",
          "clear": true,
          "speaker": "narrator",
          "text": "七月下旬，录取结果陆续出来。学校楼顶的门是许老师帮忙开的，理由很朴素：整理天文社器材，顺便还钥匙。",
          "bgm": "happyEnding"
        },
        {
          "speaker": "narrator",
          "text": "我跑上楼的时候，林澈已经在旧望远镜旁边。她手机屏幕亮着，录取页面停在结果那一行。"
        },
        {
          "speaker": "zhou",
          "text": "「我录了。」"
        },
        {
          "speaker": "lin",
          "text": "「我也是。」",
          "clear": true,
          "show": [
            {
              "id": "lin",
              "img": "linCasualSmile",
              "pos": "center"
            }
          ],
          "focus": "lin"
        },
        {
          "speaker": "zhou",
          "text": "「所以现在可以问那个高考后问题了吗？」"
        },
        {
          "speaker": "lin",
          "text": "「可以。但你先坐下，你刚才跑上楼喘得很明显。」"
        },
        {
          "speaker": "zhou",
          "text": "「气氛都被你纠偏了。」"
        },
        {
          "speaker": "lin",
          "text": "「我不纠偏，你会把告白说成百米冲刺总结。」"
        },
        {
          "speaker": "narrator",
          "text": "我坐在台阶上，把手机和录取页面一起放到身边。我们不在同一个学校，城市也不是近到一顿晚饭就能见面。可那不是隐瞒出来的距离，是我们都看清楚以后接受的距离。"
        },
        {
          "speaker": "zhou",
          "text": "「我喜欢你。不是因为我们一定能在同一个地方，也不是因为你帮我整理过多少张表。」"
        },
        {
          "speaker": "lin",
          "text": "「你可以不用排除这么多条件。」"
        },
        {
          "speaker": "zhou",
          "text": "「我怕你判我理由不充分。」"
        },
        {
          "speaker": "lin",
          "text": "「这次充分。」"
        },
        {
          "speaker": "narrator",
          "text": "她说完，轻轻笑了一下。夏夜的风从楼顶吹过去，旧望远镜旁边的灰尘被吹起一点，又很快落下。"
        },
        {
          "bg": "cgCh10HeAdmissionRooftop",
          "clear": true,
          "speaker": "narrator",
          "text": "夏夜学校楼顶，林澈和周行并肩坐在旧望远镜旁，两人的录取页面亮在手机上，远处城市灯光安静铺开。"
        },
        {
          "speaker": "lin",
          "text": "「大学以后，联系不能做成任务表。」"
        },
        {
          "speaker": "zhou",
          "text": "「那做成什么？」"
        },
        {
          "speaker": "lin",
          "text": "「正常聊天。偶尔远程观测。忙的时候直接说忙。」"
        },
        {
          "speaker": "zhou",
          "text": "「听起来比国家队集训难。」"
        },
        {
          "speaker": "lin",
          "text": "「所以第十一章再练。」"
        },
        {
          "speaker": "narrator",
          "text": "她把那枚从波兰带回来的银色星形徽章放到望远镜箱子里，又很快拿出来，别回自己的包带上。"
        },
        {
          "speaker": "narrator",
          "text": "我们还会有新的课表、新的城市和新的误差。可至少这一次，坐标是自己填的，喜欢也是自己说出口的。"
        }
      ]
    },
    {
      "id": "ch12-bad-s1",
      "title": "BE：失焦",
      "lines": [
        {
          "bg": "collegeDormDesk",
          "clear": true,
          "speaker": "narrator",
          "text": "录取结果出来那天，所有人都说挺好。离林澈近，城市熟，学校也不差。桌上摊着新生手册和课表，我却讲不清第一学期到底要上哪些核心课。",
          "bgm": "badEnding"
        },
        {
          "speaker": "lin",
          "text": "「你第一学期上哪些课？」"
        },
        {
          "speaker": "zhou",
          "text": "「高数、英语，还有一个导论……具体我再看。」"
        },
        {
          "speaker": "lin",
          "text": "「你以前讲真正想去的学校，不会这样。」"
        },
        {
          "speaker": "zhou",
          "text": "「我只是想让以后简单一点。」"
        },
        {
          "speaker": "lin",
          "text": "「可是你把最难的部分推给以后了，还把我放在最前面。」"
        },
        {
          "speaker": "narrator",
          "text": "她没有发火。她越平静，我越知道这件事没法靠玩笑过去。"
        },
        {
          "speaker": "lin",
          "text": "「如果你真的喜欢这所学校，你可以选。可是不要说是为了我。这个理由我不能收。」"
        },
        {
          "speaker": "zhou",
          "text": "「那我们呢？」"
        },
        {
          "speaker": "lin",
          "text": "「先别用‘我们’把问题盖住。你要先把你的路看清楚。」"
        },
        {
          "bg": "cgCh10BeUnreadCurriculum",
          "clear": true,
          "speaker": "narrator",
          "text": "大学宿舍桌上摊着课表和转专业说明，手机里的林澈聊天框停在简短回复。窗外是陌生校园的夜色。"
        },
        {
          "speaker": "narrator",
          "text": "后来我们的联系没有突然断掉，只是变得礼貌。她还是会回消息，只是不再替我检查每一个夹层。我也终于明白，最糟糕的不是离她远，而是我把她放到一个她不能承担的位置。"
        },
        {
          "speaker": "narrator",
          "text": "第十二章要从这里开始。不是追回，也不是解释，而是先承认：那张志愿表里，我没有把自己的理由写清楚。"
        }
      ]
    }
  ]
}
```
