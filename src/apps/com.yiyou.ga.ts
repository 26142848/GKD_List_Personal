import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yiyou.ga',
  name: 'TT语音',
  groups: [
    {
      key: 7,
      name: '弹窗更新',
      rules: [
        {
          key: 7,
          name: '更新提示',
          activityIds: ['me.piebridge.brevent.ui.BreventActivity'],
          matches: ['ViewGroup[id="v_dialog"] > TextView[text="稍后安装"]'],
          snapshotUrls: 'https://i.gkd.li/i/22366941',
        },
        {
          key: 1,
          name: '兴趣标签',
          activityIds: ['com.yiyou.ga.client.home.HomeActivity'],
          matches: [
            'ViewGroup[id="com.yiyou.ga:id/layout_interest_content"] > ImageView[vid="iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22414709',
        },
        {
          key: 2,
          name: '个人界面广告',
          activityIds: ['com.yiyou.ga.client.home.HomeActivity'],
          matches: [
            'FrameLayout[name="android.widget.FrameLayout"] > [id="com.yiyou.ga:id/img_user_detail_adv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22414813',
        },
        /*
        {
          key: 1,
          name: '',
          activityIds: [''],
          matches: [''],
          snapshotUrls: '',
        },
*/
      ],
    },
  ],
});

/*


{
  id: 'com.yiyou.ga',
  name: 'TT语音',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2025-09-19 04:49:08',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yiyou.ga.client.home.HomeActivity',
          matches: 'ViewGroup[id="com.yiyou.ga:id/layout_interest_content"] > TextView[text^="帮你推荐更多感兴趣的内容"]',
          exampleUrls: 'https://e.gkd.li/0238ef72-5b10-4165-a3d1-0dccb657b183',
          snapshotUrls: 'https://i.gkd.li/i/22414709',
        },
      ],
    },
  ],
}

*/
