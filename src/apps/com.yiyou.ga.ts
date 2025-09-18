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
          matches: ['ViewGroup[id="v_dialog"] > TextView[text="版本更新"]'],
          snapshotUrls: 'https://i.gkd.li/i/22366941',
        },
      ],
    },
  ],
});
