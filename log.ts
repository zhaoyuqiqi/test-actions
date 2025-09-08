import { sleep } from 'bun';

const { logid, aaa } = process.env;
async function main() {
  await sleep(10000);
  console.log(logid, aaa);
  await sleep(2000);
  console.log('通知服务端，任务执行完毕');
}
main();
