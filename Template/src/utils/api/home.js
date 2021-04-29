//  专门请求home模块的接口

import http from "./request.js";

async function getbanner() {
  let res = await http("/small4/banner/list");
  console.log(res);
  return res.data;
}
//用同步的方式写异步的代码
//async函数的返回值永远是一个promise对象

async function getlist() {
  let res = await http("/small4/banner/xxx");
  console.log(res);
  return res.data;
}

export { getbanner, getlist };
