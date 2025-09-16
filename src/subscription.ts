import { defineGkdSubscription } from '@gkd-kit/define';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 2614,
  name: 'iYui-个人订阅',
  version: 0,
  author: '现阶段测试，不定时更新r',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/26142848/GKD_List_Personal/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
