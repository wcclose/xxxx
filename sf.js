const url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage';

if ($request && $request.url === url) {
  const cookies = $request.headers['Cookie'];
  console.log(`抓取到的Cookie: ${cookies}`);
  $notification.post("Cookie抓取", "已抓取到Cookie", cookies);
}

$done({});
